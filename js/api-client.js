const MAILERSEND_API_KEY = 'mlsn.67d822fbc62924354189163d97e58d10f387c8434e31658d59162b42b54654bf';
const MAILERSEND_API_URL = 'https://api.mailersend.com/v1/email';

async function sendEmail(formData) {
  try {
    const emailData = {
      from: { email: 'noreply@seudominio.com', name: `Portfólio - ${formData.nome}` },
      to: [{ email: 'barbosabastospedro@gmail.com', name: 'Você' }],
      subject: `Contato: ${formData.assunto}`,
      text: `
Nome: ${formData.nome}
E-mail: ${formData.email}
Assunto: ${formData.assunto}
${formData.subtopico ? `Subtópico: ${formData.subtopico}\n` : ''}
Mensagem:
${formData.mensagem}
      `,
      html: `
<h2>Nova mensagem do portfólio</h2>
<p><strong>Nome:</strong> ${formData.nome}</p>
<p><strong>E-mail:</strong> ${formData.email}</p>
<p><strong>Assunto:</strong> ${formData.assunto}</p>
${formData.subtopico ? `<p><strong>Subtópico:</strong> ${formData.subtopico}</p>` : ''}
<p><strong>Mensagem:</strong></p>
<p>${formData.mensagem.replace(/\n/g, '<br>')}</p>
      `
    };

    const response = await fetch(MAILERSEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERSEND_API_KEY}`
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) throw new Error('Falha ao enviar e-mail');
    return { success: true, message: 'E-mail enviado com sucesso!' };
  } catch (error) {
    console.error('Erro no envio:', error);
    return { success: false, message: 'Erro ao enviar. Tente novamente.' };
  }
}