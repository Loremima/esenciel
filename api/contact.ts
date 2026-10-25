// Fonction Vercel qui reçoit le formulaire de contact et l'envoie par e-mail
// via Resend. Variables à définir dans Vercel (Settings > Environment Variables) :
//   RESEND_API_KEY  clé API Resend (obligatoire)
//   CONTACT_TO      destinataire, par défaut esenciel.contact@gmail.com
//   CONTACT_FROM    expéditeur sur un domaine vérifié dans Resend,
//                   par défaut « Site EsenCiel <contact@esenciel.net> »

declare const process: { env: Record<string, string | undefined> };

const FIELDS = ['profil', 'nom', 'structure', 'email', 'telephone', 'creneau', 'offre', 'message'] as const;
const LABELS: Record<(typeof FIELDS)[number], string> = {
  profil: 'Profil',
  nom: 'Nom',
  structure: 'Structure',
  email: 'E-mail',
  telephone: 'Téléphone',
  creneau: 'À rappeler',
  offre: 'Intérêt',
  message: 'Message',
};

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: 'invalid' });
  }

  // Champ piège : un robot le remplit, un humain ne le voit pas.
  if (data['bot-field']) return json(200, { ok: true });

  const get = (k: string) => String(data[k] ?? '').trim().slice(0, 5000);
  const email = get('email');
  if (!get('nom') || !get('message') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || get('consentement') !== 'oui') {
    return json(400, { error: 'invalid' });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return json(500, { error: 'not-configured' });

  const rows = FIELDS.filter((f) => get(f)).map((f) => `<p><strong>${LABELS[f]} :</strong><br>${escape(get(f)).replace(/\n/g, '<br>')}</p>`);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Site EsenCiel <contact@esenciel.net>',
      to: [process.env.CONTACT_TO || 'esenciel.contact@gmail.com'],
      reply_to: email,
      subject: `Nouveau message du site : ${get('nom')}${get('structure') ? `, ${get('structure')}` : ''}`,
      html: rows.join('\n'),
    }),
  });

  return res.ok ? json(200, { ok: true }) : json(502, { error: 'send-failed' });
}
