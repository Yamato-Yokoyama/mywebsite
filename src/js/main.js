// Close mobile nav after a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navContent = document.getElementById('navContent');
  if (!navContent) return;

  const collapse = bootstrap.Collapse.getOrCreateInstance(navContent, { toggle: false });

  navContent.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navContent.classList.contains('show')) {
        collapse.hide();
      }
    });
  });
});
