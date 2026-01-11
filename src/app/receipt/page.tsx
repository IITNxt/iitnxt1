"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useRef, useEffect, useState } from "react";
import { ReceiptPreview } from "@/components/supportUS/ReceiptPreview";
import { Button } from "@/components/ui/button";
import { Download, Home } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ReceiptPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const receiptRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const amount = searchParams.get("amount") || "";
    const name = searchParams.get("name") || "";
    const email = searchParams.get("email") || "";
    const phone = searchParams.get("phone") || "";
    const address = searchParams.get("address") || "";
    const pan = searchParams.get("pan") || "";
    const paymentId = searchParams.get("paymentId") || "";
    const date = searchParams.get("date") || new Date().toLocaleDateString();

    // Auto-scroll to top and Inject Safe Styles for PDF
    useEffect(() => {
        window.scrollTo(0, 0);

        // Force browser to compute all variables as HEX instead of OKLCH
        // This is required because html2canvas uses getComputedStyle, and if it sees 'oklch(...)', it crashes.
        const style = document.createElement('style');
        style.id = 'pdf-safe-theme';
        style.innerHTML = `
            :root {
                --background: #ffffff !important;
                --foreground: #000000 !important;
                --card: #ffffff !important;
                --card-foreground: #000000 !important;
                --popover: #ffffff !important;
                --popover-foreground: #000000 !important;
                --primary: #F59E0B !important;
                --primary-foreground: #ffffff !important;
                --secondary: #f3f4f6 !important;
                --secondary-foreground: #1f2937 !important;
                --muted: #f3f4f6 !important;
                --muted-foreground: #6b7280 !important;
                --accent: #f3f4f6 !important;
                --accent-foreground: #1f2937 !important;
                --destructive: #ef4444 !important;
                --destructive-foreground: #ffffff !important;
                --border: #e5e7eb !important;
                --input: #e5e7eb !important;
                --ring: #F59E0B !important;
                --chart-1: #F59E0B !important;
                --chart-2: #ca8a04 !important;
                --chart-3: #fcd34d !important;
                --chart-4: #d97706 !important;
                --chart-5: #b45309 !important;
                --sidebar: #ffffff !important;
                --sidebar-foreground: #000000 !important;
                --sidebar-primary: #F59E0B !important;
                --sidebar-primary-foreground: #ffffff !important;
                --sidebar-accent: #f3f4f6 !important;
                --sidebar-accent-foreground: #1f2937 !important;
                --sidebar-border: #e5e7eb !important;
                --sidebar-ring: #F59E0B !important;
            }
            .dark {
                 --background: #ffffff !important; 
                 --foreground: #000000 !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    const handleDownload = async () => {
        if (!receiptRef.current) return;
        setIsGenerating(true);
        try {
            const canvas = await html2canvas(receiptRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                onclone: (clonedDoc) => {
                    // Sanitize styles to remove oklch() which crashes html2canvas
                    const styles = clonedDoc.querySelectorAll('style');
                    styles.forEach((style) => {
                        if (style.innerHTML.includes('oklch')) {
                            style.innerHTML = style.innerHTML.replace(/oklch\([^)]+\)/g, '#000000');
                        }
                    });

                    // Also modify inline styles if any escaped
                    const allElements = clonedDoc.querySelectorAll('*');
                    allElements.forEach((el) => {
                        const style = el.getAttribute('style');
                        if (style && style.includes('oklch')) {
                            el.setAttribute('style', style.replace(/oklch\([^)]+\)/g, '#000000'));
                        }
                    });
                }
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`IITNXT_Receipt_${paymentId}.pdf`);
        } catch (error) {
            console.error("PDF Error", error);
            alert("Failed to download PDF.");
        } finally {
            setIsGenerating(false);
        }
    };

    if (!paymentId) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Invalid Receipt Link</h1>
                <Button onClick={() => router.push("/")}>Go Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Actions */}
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                    <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Button>
                    <div className="flex gap-3">
                        <Button onClick={() => window.print()} variant="outline">
                            Print
                        </Button>
                        <Button onClick={handleDownload} className="bg-[#F59E0B] hover:bg-[#D97706] text-white gap-2">
                            {isGenerating ? "Generating..." : "Download PDF"}
                            <Download className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Receipt Preview Area */}
                <div className="bg-white shadow-lg p-0 overflow-hidden">
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
                            date,
                            receiptNo: `RT-${paymentId ? paymentId.slice(-6).toUpperCase() : 'XXXX'}`
                        }}
                    />
                </div>

                <p className="text-center text-gray-500 text-sm">
                    A copy of this receipt has also been sent to {email}.
                </p>
            </div>
        </div>
    );
}

export default function ReceiptPage() {
    return (
        <Suspense fallback={<div>Loading receipt...</div>}>
            <ReceiptPageContent />
        </Suspense>
    );
}
