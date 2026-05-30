document.addEventListener('DOMContentLoaded', () => {
  // Tema claro/escuro com LocalStorage
  const htmlRoot = document.getElementById('htmlRoot');
  const toggleBtn = document.getElementById('themeToggle');
  const isDark = localStorage.getItem('theme') === 'dark';
  
  if (isDark) {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
    htmlRoot.setAttribute('data-bs-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isNowDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
    toggleBtn.textContent = isNowDark ? '☀️' : '🌙';
    htmlRoot.setAttribute('data-bs-theme', isNowDark ? 'dark' : 'light');
  });

  // Handler de envio do formulário
  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.classList.add('was-validated');
      return;
    }

    const submitBtn = document.getElementById('submitBtn');
    const spinner = document.getElementById('loadingSpinner');
    submitBtn.disabled = true;
    spinner.classList.remove('d-none');

    const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      assunto: document.getElementById('assunto').value,
      subtopico: document.getElementById('subtopico').value || null,
      mensagem: document.getElementById('mensagem').value
    };

    const result = await sendEmail(formData);

    // Mostra alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${result.success ? 'success' : 'danger'} alert-dismissible fade show`;
    alertDiv.innerHTML = `${result.message} <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    document.querySelector('#contato .mb-5').before(alertDiv);
    setTimeout(() => alertDiv.remove(), 5000);

    if (result.success) e.target.reset();

    submitBtn.disabled = false;
    spinner.classList.add('d-none');
    e.target.classList.remove('was-validated');
  });
});