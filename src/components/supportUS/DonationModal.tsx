"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, Download } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReceiptPreview } from "./ReceiptPreview";

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultAmount?: number;
}

export default function DonationModal({ isOpen, onClose, defaultAmount = 1000 }: DonationModalProps) {
    const router = useRouter();
    const [amount, setAmount] = useState<string>(defaultAmount.toString());
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [pan, setPan] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentId, setPaymentId] = useState("");
    const receiptRef = useRef<HTMLDivElement>(null);

    // Force Razorpay Z-Index
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .razorpay-container {
                z-index: 2147483647 !important;
                position: fixed !important;
            }
        `;
        document.head.appendChild(style);
        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    const loadRazorpayConfig = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleDownloadReceipt = async () => {
        if (!receiptRef.current) return;

        try {
            const canvas = await html2canvas(receiptRef.current, {
                scale: 2, // Higher resolution
                useCORS: true,
                backgroundColor: "#ffffff"
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`IITNXT_Receipt_${paymentId}.pdf`);
        } catch (error) {
            console.error("PDF Generation Error", error);
            alert("Could not generate PDF. Please use the email receipt.");
        }
    };

    const handlePayment = async () => {
        // Validation
        if (!amount || !name || !email || !phone) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            // 1. Load Razorpay Script
            const res = await loadRazorpayConfig("https://checkout.razorpay.com/v1/checkout.js");
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                setLoading(false);
                return;
            }

            // 2. Create Order
            const orderRes = await fetch("/api/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: Number(amount) }),
            });

            if (!orderRes.ok) {
                throw new Error("Failed to create order");
            }

            const orderData = await orderRes.json();

            // 3. Open Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "IITNxt Foundation",
                description: "Student Sponsorship Donation",
                image: "/logo.png",
                order_id: orderData.id,
                handler: function (response: { razorpay_payment_id: string }) {
                    console.log("Payment Success Handler Triggered", response);

                    setLoading(true);
                    setPaymentId(response.razorpay_payment_id);

                    // 1. Send Receipt Email in Background
                    fetch('/api/send-receipt', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            amount,
                            name,
                            email,
                            phone,
                            address,
                            pan,
                            paymentId: response.razorpay_payment_id
                        }),
                    }).catch(err => console.error("Background Email Receipt Error:", err));

                    // 2. Redirect to Receipt Page
                    const queryParams = new URLSearchParams({
                        amount,
                        name,
                        email,
                        phone,
                        address,
                        pan,
                        paymentId: response.razorpay_payment_id,
                        date: new Date().toLocaleDateString()
                    }).toString();

                    router.push(`/receipt?${queryParams}`);
                    onClose();
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone,
                },
                theme: {
                    color: "#F59E0B",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Something went wrong during processing.");
        } finally {
            setLoading(false);
        }
    };

    const resetModal = () => {
        setPaymentSuccess(false);
        setAmount(defaultAmount.toString());
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPan("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={resetModal}>
            <DialogContent className="sm:max-w-md bg-white text-black max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-[#F59E0B]">
                        {paymentSuccess ? "Donation Successful!" : "Sponsor a Student"}
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-500">
                        {paymentSuccess ? "Thank you for your generous support." : "Your contribution directly empowers a student's education."}
                    </DialogDescription>
                </DialogHeader>

                {!paymentSuccess ? (
                    <>
                        <div className="grid gap-6 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="amount" className="text-left font-semibold">Donation Amount (₹)</Label>
                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    {[500, 1000, 5000].map((val) => (
                                        <div
                                            key={val}
                                            onClick={() => setAmount(val.toString())}
                                            className={`cursor-pointer border rounded-md p-2 text-center text-sm font-medium transition-colors ${amount === val.toString() ? 'bg-[#F59E0B] text-white border-[#F59E0B]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                                        >
                                            ₹{val}
                                        </div>
                                    ))}
                                </div>
                                <Input
                                    id="amount"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter custom amount"
                                    className="col-span-3"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-left font-semibold">Full Name</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-left font-semibold">Email Address (for Receipt)</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="address" className="text-left font-semibold">Residential Address</Label>
                                <Input
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter your full address"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="pan" className="text-left font-semibold">PAN Number (for 80G)</Label>
                                <Input
                                    id="pan"
                                    value={pan}
                                    onChange={(e) => setPan(e.target.value)}
                                    placeholder="ABCD1234E"
                                    maxLength={10}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="phone" className="text-left font-semibold">Phone Number</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button
                                onClick={handlePayment}
                                className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-lg h-12"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    `Pay ₹${amount}`
                                )}
                            </Button>
                        </DialogFooter>
                    </>
                ) : (
                    <div className="py-6 flex flex-col items-center justify-center space-y-6">
                        <CheckCircle className="w-16 h-16 text-green-500" />

                        <div className="text-center space-y-2">
                            <p className="text-lg font-medium">Payment ID: {paymentId}</p>
                            <p className="text-gray-500">A receipt has been sent to {email}.</p>
                        </div>

                        <Button
                            onClick={handleDownloadReceipt}
                            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold h-12 flex items-center justify-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Receipt
                        </Button>

                        {/* Hidden Receipt Element for PDF Generation */}
                        <div className="absolute left-[-9999px] top-0">
                            <ReceiptPreview
                                ref={receiptRef}
                                data={{
                                    amount,
                                    name,
                                    email,
                                    phone,
                                    address,
                                    pan,
                                    paymentId,
                                    date: new Date().toLocaleDateString(),
                                    receiptNo: `RT-${Math.floor(Math.random() * 10000)}`
                                }}
                            />
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
