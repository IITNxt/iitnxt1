import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { amount } = await req.json();

        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            return NextResponse.json({ error: "Razorpay keys missing" }, { status: 500 });
        }

        const auth = btoa(`${keyId}:${keySecret}`);

        const response = await fetch("https://api.razorpay.com/v1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${auth}`
            },
            body: JSON.stringify({
                amount: amount * 100, // Razorpay expects paise
                currency: "INR",
                receipt: "receipt_" + Math.random().toString(36).substring(7),
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.description || "Razorpay API Error");
        }

        const order = await response.json();
        return NextResponse.json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json({ error: "Error creating order" }, { status: 500 });
    }
}
