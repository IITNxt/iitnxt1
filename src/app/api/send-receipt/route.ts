import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { amount, name, email, phone, address, pan, paymentId } = await req.json();

    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    try {
      console.log(`Attempting to send email to ${email} with amount ${amount}...`);

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        throw new Error("Missing RESEND_API_KEY");
      }

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'IITNxt Donation <onboarding@resend.dev>', // Free tier must use this or verified domain
          to: [email],
          subject: 'Donation Receipt - IITNxt',
          html: `
          <div style="font-family: 'Times New Roman', serif; max-width: 800px; margin: 0 auto; background-color: #ffffff; border: 2px solid #000; padding: 20px; color: #000;">
            
            <!-- Header -->
            <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 20px;">
               <div style="font-size: 14px; font-weight: bold; margin-bottom: 5px;">भारतीय प्रौद्योगिकिनां नवान्चारिण: आगामिपीढ्यै</div>
               <h1 style="font-size: 24px; font-weight: bold; color: #ce1126; margin: 10px 0; text-transform: uppercase;">Indian Innovators of Technology For Next Gen</h1>
               <div style="font-size: 14px; margin-bottom: 5px; font-style: italic;">Śikṣā sārthakaṃ jīvanam</div>
               
               <div style="font-size: 12px; margin: 10px 0;">
                 <span style="margin-right: 15px;"><strong>Darpan ID :</strong> AP/2025/0594989</span>
                 <span style="margin-right: 15px;"><strong>Trust ID No:</strong> 4-317-21-2025</span>
                 <span><strong>Website:</strong> https://iitnxt.in</span>
               </div>
               
               <div style="font-size: 12px; font-weight: bold;">
                 <span style="margin-right: 10px;">PAN: AACTI4395N</span> | 
                 <span style="margin: 0 10px;">Reg No: AACTI4395NE20251</span> | 
                 <span style="margin-left: 10px;">80G Approval: AACTI4395NF20251</span>
               </div>
            </div>

            <!-- Receipt Title -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="text-decoration: underline; font-size: 20px; font-weight: bold; margin: 0;">Donor Receipt</h2>
            </div>

            <!-- Content Grid -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px; font-size: 14px;">
              <tr>
                <td style="font-weight: bold; width: 150px;">Receipt No :</td>
                <td style="border-bottom: 1px solid #000;">RT-${Math.floor(Math.random() * 10000)}</td>
                <td style="text-align: right; font-weight: bold; width: 50px;">Date :</td>
                <td style="border-bottom: 1px solid #000; width: 150px; text-align: right;">${date}</td>
              </tr>
              
              <tr>
                <td style="font-weight: bold;">Received with thanks from Shri/Smt/ :</td>
                <td colspan="3" style="border-bottom: 1px solid #000;">${name}</td>
              </tr>

              <tr>
                 <td style="font-weight: bold;">Residential Address :</td>
                 <td colspan="3" style="border-bottom: 1px solid #000;">${address || 'N/A'}</td>
              </tr>
              
              <tr>
                 <td colspan="4" style="border-bottom: 1px solid #000; height: 10px;"></td>
              </tr>
              
              <tr>
                 <td style="font-weight: bold;">PAN No:</td>
                 <td style="border-bottom: 1px solid #000;">${pan || 'N/A'}</td>
                 <td style="font-weight: bold; text-align: right;">Email-Id:</td>
                 <td style="border-bottom: 1px solid #000; text-align: right;">${email}</td>
              </tr>

              <tr>
                 <td style="font-weight: bold;">Mobile Number:</td>
                 <td style="border-bottom: 1px solid #000;">${phone}</td>
                 <td style="font-weight: bold; text-align: right;">Mode of transaction:</td>
                 <td style="border-bottom: 1px solid #000; text-align: right;">Online / Razorpay</td>
              </tr>
              
              <tr>
                  <td style="font-weight: bold;">Amount Donated (in words):</td>
                  <td colspan="3" style="border-bottom: 1px solid #000;">${amount} Rupees Only (Numerically: ₹${amount})</td>
              </tr>

              <tr>
                  <td style="font-weight: bold;">Transaction ID/Reference ID:</td>
                  <td colspan="3" style="border-bottom: 1px solid #000;">${paymentId || 'N/A'}</td>
              </tr>

               <tr>
                  <td style="font-weight: bold;">Purpose of donation:</td>
                  <td colspan="3" style="border-bottom: 1px solid #000;">Student Sponsorship & Education Support</td>
              </tr>
            </table>

            <!-- Amount Box & Signatures -->
             <div style="margin-top: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
               <div style="border: 2px solid #ce1126; padding: 10px 30px; border-radius: 30px; font-weight: bold; font-size: 24px;">
                 ₹ ${amount}
               </div>
               
               <div style="text-align: right;">
                 <div style="margin-bottom: 50px;"></div>
                 <div style="font-weight: bold; border-top: 1px solid #000; padding-top: 5px; display: inline-block; min-width: 200px; text-align: center;">Signature of receiver</div>
               </div>
             </div>
             
             <div style="margin-top: 30px;">
                <div style="font-weight: bold; border-top: 1px solid #000; padding-top: 5px; display: inline-block; min-width: 200px; text-align: center;">Authorized Signatory</div>
             </div>

            <!-- Footer Note -->
            <div style="margin-top: 40px; border-top: 2px solid #f59e0b; paddingTop: 10px; font-size: 10px; text-align: center;">
              <p><strong>Note :</strong> Donations made to INDIAN INNOVATORS OF TECHNOLOGY FOR NEXT GEN (IITNXT) are exempted under Section 80G of the Income Tax Act, 1961.</p>
              <p>Please retain this receipt for your tax filing purposes.</p>
            </div>
          </div>
        `,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Resend API Error:", errorData);
        throw new Error(errorData.message || "Resend API Error");
      }

      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error("Email Sending Error:", error);
      return NextResponse.json({ error: "Email Sending Failed" }, { status: 500 });
    }
  } catch (error) {
    console.error("Invalid Request Error:", error);
    return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
  }
}
