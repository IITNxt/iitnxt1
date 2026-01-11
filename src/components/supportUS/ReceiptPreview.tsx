import { forwardRef } from 'react';

interface ReceiptProps {
    data: {
        amount: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        pan: string;
        paymentId: string;
        date: string;
        receiptNo: string;
    };
}

export const ReceiptPreview = forwardRef<HTMLDivElement, ReceiptProps>(({ data }, ref) => {
    return (
        <div
            ref={ref}
            className="bg-[#ffffff] p-8 text-[#000000] border-2 border-[#000000] max-w-[800px] mx-auto font-serif relative"
            style={{
                // Force all theme variables to HEX to prevent html2canvas from crashing on oklch()
                // These overrides apply only to this component and its children
                "--background": "#ffffff",
                "--foreground": "#000000",
                "--card": "#ffffff",
                "--card-foreground": "#000000",
                "--popover": "#ffffff",
                "--popover-foreground": "#000000",
                "--primary": "#F59E0B",
                "--primary-foreground": "#ffffff",
                "--secondary": "#f3f4f6",
                "--secondary-foreground": "#000000",
                "--muted": "#f3f4f6",
                "--muted-foreground": "#6b7280",
                "--accent": "#f3f4f6",
                "--accent-foreground": "#000000",
                "--destructive": "#ef4444",
                "--destructive-foreground": "#ffffff",
                "--border": "#e5e7eb",
                "--input": "#e5e7eb",
                "--ring": "#F59E0B",
                "--radius": "0.5rem",
            } as React.CSSProperties}
        >
            {/* Header */}
            <div className="text-center border-b-2 border-[#000000] pb-5 mb-5">
                <div className="text-sm font-bold mb-1">भारतीय प्रौद्योगिकिनां नवान्चारिण: आगामिपीढ्यै</div>
                <h1 className="text-2xl font-bold text-[#ce1126] my-2 uppercase">Indian Innovators of Technology For Next Gen</h1>
                <div className="text-sm mb-1 italic">Śikṣā sārthakaṃ jīvanam</div>

                <div className="text-xs my-2 flex justify-center gap-4 flex-wrap">
                    <span><strong>Darpan ID :</strong> AP/2025/0594989</span>
                    <span><strong>Trust ID No:</strong> 4-317-21-2025</span>
                    <span><strong>Website:</strong> https://iitnxt.in</span>
                </div>

                <div className="text-xs font-bold flex justify-center gap-2 flex-wrap">
                    <span>PAN: AACTI4395N</span> |
                    <span>Reg No: AACTI4395NE20251</span> |
                    <span>80G Approval: AACTI4395NF20251</span>
                </div>
            </div>

            {/* Receipt Title */}
            <div className="text-center mb-8">
                <h2 className="underline text-xl font-bold m-0 inline-block">Donor Receipt</h2>
            </div>

            {/* Content Grid */}
            <table className="w-full border-separate border-spacing-y-2 text-sm text-[#000000]">
                <tbody>
                    <tr>
                        <td className="font-bold w-[150px]">Receipt No :</td>
                        <td className="border-b border-[#000000]">{data.receiptNo}</td>
                        <td className="text-right font-bold w-[50px]">Date :</td>
                        <td className="border-b border-[#000000] w-[150px] text-right">{data.date}</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Received with thanks from Shri/Smt/ :</td>
                        <td colSpan={3} className="border-b border-[#000000]">{data.name}</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Residential Address :</td>
                        <td colSpan={3} className="border-b border-[#000000]">{data.address || 'N/A'}</td>
                    </tr>

                    <tr className="h-4"><td colSpan={4}></td></tr>

                    <tr>
                        <td className="font-bold">PAN No:</td>
                        <td className="border-b border-[#000000]">{data.pan || 'N/A'}</td>
                        <td className="font-bold text-right">Email-Id:</td>
                        <td className="border-b border-[#000000] text-right">{data.email}</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Mobile Number:</td>
                        <td className="border-b border-[#000000]">{data.phone}</td>
                        <td className="font-bold text-right">Mode:</td>
                        <td className="border-b border-[#000000] text-right">Online / Razorpay</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Amount Donated (in words):</td>
                        <td colSpan={3} className="border-b border-[#000000]">{data.amount} Rupees Only (Numerically: ₹{data.amount})</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Transaction ID:</td>
                        <td colSpan={3} className="border-b border-[#000000]">{data.paymentId || 'N/A'}</td>
                    </tr>

                    <tr>
                        <td className="font-bold">Purpose of donation:</td>
                        <td colSpan={3} className="border-b border-[#000000]">Student Sponsorship & Education Support</td>
                    </tr>
                </tbody>
            </table>

            {/* Amount Box & Signatures */}
            <div className="mt-10 flex justify-between items-end">
                <div className="border-2 border-[#ce1126] px-8 py-2 rounded-full font-bold text-2xl">
                    ₹ {data.amount}
                </div>

                <div className="text-right">
                    <div className="mb-12"></div>
                    <div className="font-bold border-t border-[#000000] pt-1 inline-block min-w-[200px] text-center">Signature of receiver</div>
                </div>
            </div>

            <div className="mt-8">
                <div className="font-bold border-t border-[#000000] pt-1 inline-block min-w-[200px] text-center">Authorized Signatory</div>
            </div>

            {/* Footer Note */}
            <div className="mt-10 border-t-2 border-[#f59e0b] pt-2 text-[10px] text-center">
                <p><strong>Note :</strong> Donations made to INDIAN INNOVATORS OF TECHNOLOGY FOR NEXT GEN (IITNXT) are exempted under Section 80G of the Income Tax Act, 1961.</p>
                <p>Please retain this receipt for your tax filing purposes.</p>
            </div>
        </div>
    );
});

ReceiptPreview.displayName = "ReceiptPreview";
