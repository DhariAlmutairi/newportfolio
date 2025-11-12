// تهيئة AOS
AOS.init({ duration: 1000, once: true });

// Dark / Light Mode
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

darkBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
});

lightBtn.addEventListener('click', () => {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
});

// سلاسة التمرير عند الضغط على "My Projects"
const myProjectsLink = document.getElementById('my-projects-link');
const projectsSection = document.getElementById('projects');

myProjectsLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
});
