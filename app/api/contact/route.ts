import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "La clé API n'est pas configurée." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { nomComplet, email, telephone, typeDactivité } = body;

    // Validation des champs obligatoires
    if (!nomComplet || !email || !telephone || !typeDactivité) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Virtual Tours <onboarding@resend.dev>",
      to: ["ilyassbis@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande démo 3D : ${nomComplet} (${typeDactivité})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="color: #0F0E0E; border-bottom: 2px solid #22d3ee; padding-bottom: 10px; margin-top: 0;">
            Nouvelle Demande de Visite 3D
          </h2>
          <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
            Un prospect a rempli le formulaire de contact sur votre landing page.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 40%;">Nom complet :</td>
              <td style="padding: 10px 0; color: #111;">${nomComplet}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email professionnel :</td>
              <td style="padding: 10px 0; color: #111;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone :</td>
              <td style="padding: 10px 0; color: #111;"><a href="tel:${telephone}" style="color: #111; text-decoration: none;">${telephone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Type d'activité :</td>
              <td style="padding: 10px 0;">
                <span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold;">
                  ${typeDactivité}
                </span>
              </td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #22d3ee; padding: 12px 16px; border-radius: 6px; font-size: 13px; color: #475569;">
            Délai d'engagement : Réponse attendue sous 24 à 48h
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erreur interne du serveur";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}