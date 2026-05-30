// Dados de subtópicos
const subtopicos = {
  proposta: [
    { value: 'freelance', text: 'Projeto Freelance' },
    { value: 'clt', text: 'Vaga CLT' }
  ],
  colaboracao: [
    { value: 'open-source', text: 'Projeto Open Source' },
    { value: 'startup', text: 'Startup' }
  ],
  duvida: [
    { value: 'tecnica', text: 'Dúvida Técnica' },
    { value: 'carreira', text: 'Carreira' }
  ],
  outro: [{ value: 'geral', text: 'Assunto Geral' }]
};

document.addEventListener('DOMContentLoaded', () => {
  const assunto = document.getElementById('assunto');
  const subContainer = document.getElementById('subtopicoContainer');
  const subSelect = document.getElementById('subtopico');
  const mensagem = document.getElementById('mensagem');
  const charCount = document.getElementById('charCount');

  // Atualiza subtópicos
  assunto.addEventListener('change', () => {
    subSelect.innerHTML = '';
    if (assunto.value && subtopicos[assunto.value]) {
      subSelect.innerHTML = '<option value="">Selecione...</option>';
      subtopicos[assunto.value].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        subSelect.appendChild(option);
      });
      subContainer.style.display = 'block';
      subSelect.required = true;
    } else {
      subContainer.style.display = 'none';
      subSelect.required = false;
    }
  });

  // Contador de caracteres
  mensagem.addEventListener('input', () => {
    charCount.textContent = mensagem.value.length;
    if (mensagem.value.length > 900) {
      charCount.classList.add('text-danger');
    } else {
      charCount.classList.remove('text-danger');
    }
  });

  // Validação em tempo real
  const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
  });

  function validateField() {
    this.classList.remove('is-valid', 'is-invalid');
    if (this.checkValidity()) {
      this.classList.add('is-valid');
    } else {
      this.classList.add('is-invalid');
    }
  }
});