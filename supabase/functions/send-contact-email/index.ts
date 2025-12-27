import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email, service });

    // Email to the company
    const companyEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Construction MBC <onboarding@resend.dev>",
        to: ["aissatougueye042001@gmail.com"], // Temporaire: utilise l'email vérifié Resend
        html: `
          <h1>Nouvelle demande de devis</h1>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service demandé:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const companyResult = await companyEmailResponse.json();
    console.log("Company email result:", companyResult);

    if (!companyEmailResponse.ok) {
      throw new Error(companyResult.message || "Failed to send company email");
    }

    // Confirmation email to the client
    const clientEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Construction MBC <onboarding@resend.dev>",
        to: [email],
        subject: "Confirmation de votre demande - Construction MBC",
        html: `
          <h1>Merci pour votre demande, ${name}!</h1>
          <p>Nous avons bien reçu votre demande concernant: <strong>${service}</strong></p>
          <p>Notre équipe vous contactera dans les plus brefs délais.</p>
          <br>
          <p>Cordialement,</p>
          <p><strong>L'équipe Construction MBC</strong></p>
          <p>📞 +1 (514) 555-0123</p>
          <p>📧 constructionmbc3@gmail.com</p>
        `,
      }),
    });

    const clientResult = await clientEmailResponse.json();
    console.log("Client confirmation email result:", clientResult);

    return new Response(
      JSON.stringify({ success: true, message: "Emails envoyés avec succès" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
