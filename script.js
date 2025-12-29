/* =========================================================
   DATA CONFIG : edit only this section
   ========================================================= */

/* -------- Skills -------- */
const visualSkills = [
  { icon: '🐧', name: 'Linux' },
  { icon: '☁️', name: 'AWS' },
  { icon: '📦', name: 'Docker' },
  { icon: '🔧', name: 'Git' },
  { icon: '⚙️', name: 'CI/CD' },
  // { icon: '📡', name: 'Networking'},
  { icon: '☸️', name: 'Kubernetes' },
];

const listSkills = [
  { title: 'AWS Cloud', desc: 'EC2, S3, IAM, VPC, Load Balancers', percent: '85%' },
  { title: 'Linux Administration', desc: 'Users, Permissions, Networking, Services', percent: '90%' },
  { title: 'DevOps & Automation', desc: 'Git, CI/CD, Bash, Kubernetes', percent: '80%' },
  { title: 'Containers & Tools', desc: 'Docker images, Compose, volumes, networking', percent: '78%' },
  { title: 'Infrastructure Setup', desc: 'Vagrant, VirtualBox, servers', percent: '82%' }
];

/* -------- Projects -------- */
const projectsData = [
  {
    title: 'Online Shop Deployment (Docker & Kubernetes)',
    description: 'Designed and deployed a containerized online shop using Docker and Kubernetes on a local kind cluster.',
    imageClass: 'k8s-online-shop',
    tags: ['Docker', 'Kubernetes', 'Nginx', 'Linux'],
    link: 'https://github.com/CBUM-Bhardwaj/online-shop-k8s'
  },
  {
    title: 'Flask Application Deployment (Docker)',
    description: 'Containerized a Flask application and deployed it on AWS Ec2 using Docker.',
    imageClass: 'flask-app-ecs',
    tags: ['AWS', 'Docker', 'ECS'],
    link: 'https://github.com/CBUM-Bhardwaj/flask-app-ecs'
  }
];

/* -------- Timeline -------- */
const timelineData = [
  {
    category: 'education',
    icon: '🎓',
    year: '2023 – Present',
    title: 'BA Program (Computer Applications)',
    company: 'Delhi University',
    description: ' Building strong fundamentals in IT, computer systems, and software concepts while working alongside industry tools.'
  },
  {
    category: 'education',
    icon: '☁️',
    year: '2024',
    title: 'Diploma in Cloud Computing',
    company: 'Jetking',
    description: ' Learned AWS, Linux administration, networking, virtualization, and core system operations.',
    skills: ['AWS', 'Linux', 'Networking', 'Virtualization']
  },
  {
    category: 'work',
    icon: '💼',
    year: '2024 – 2025',
    title: 'IT Desktop Support (Intern)',
    company: 'NetCreativeMind',
    description: ' Hands-on exposure with real IT environments: troubleshooting systems, managing users, configurations, and ensuring smooth technical operations.',
    skills: ['IT Support', 'Linux', 'Troubleshooting']
  },
  {
    category: 'project',
    icon: '🚀',
    year: '2024 – Present',
    title: 'Cloud & DevOps Journey',
    company: 'Hands-on Projects',
    description: 'Building practical DevOps and cloud skills through real hands-on projects. Worked on AWS deployments, Apache web hosting, Vagrant multi-VM environments, Git workflows, Docker basics, and CI/CD fundamentals. Currently expanding into automation and Terraform.',
    skills: ['AWS EC2', 'Docker', 'Git', 'CI/CD']
  }
];

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */

function renderSkills() {
  const circle = document.getElementById('skillsCircle');
  const list = document.getElementById('skillsList');

  if (circle) {
    circle.innerHTML =
      visualSkills.map(s => `
        <div class="skill-node">
          <div class="skill-icon">${s.icon}</div>
          <div class="skill-name">${s.name}</div>
        </div>
      `).join('') +
      `<div class="skills-center">⚡</div>`;
  }

  if (list) {
    list.innerHTML = listSkills.map(s => `
      <div class="skill-item">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
        <div class="skill-progress">
          <div class="skill-progress-bar" style="width:${s.percent}"></div>
        </div>
      </div>
    `).join('');
  }
}

function renderProjects() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  grid.innerHTML = projectsData.map(p => `
    <a href="${p.link}" target="_blank" class="portfolio-link">
      <div class="portfolio-card">
        <div class="portfolio-image ${p.imageClass}"></div>
        <div class="portfolio-content">
          <h3>${p.title}</h3>
          <div class="spacer"></div>
          <p>${p.description}</p>
          <div class="spacer"></div>
          <div class="portfolio-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>
  `).join('');
}

function renderTimeline(filter = 'all') {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  const html = timelineData
    .filter(i => filter === 'all' || i.category === filter)
    .map(i => `
      <div class="timeline-item visible" data-category="${i.category}">
        <div class="timeline-node">${i.icon}</div>
        <div class="timeline-content">
          <div class="timeline-year">${i.year}</div>
          <h3 class="timeline-title">${i.title}</h3>
          <div class="timeline-company">${i.company}</div>
          <p class="timeline-description">${i.description}</p>
          ${i.skills ? `
            <div class="timeline-skills">
              ${i.skills.map(s => `<span class="timeline-skill">${s}</span>`).join('')}
            </div>` : ''}
        </div>
      </div>
    `).join('');

  container.innerHTML = `
    <div class="timeline-line"></div>
    <div class="timeline-progress"></div>
    ${html}
  `;
}

/* =========================================================
   UI / INTERACTION
   ========================================================= */

function updateActiveMenuItem() {
  const y = window.scrollY;
  document.querySelectorAll('section[id]').forEach(sec => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      document.querySelectorAll('.nav-links a, .mobile-nav a')
        .forEach(a => a.classList.remove('active'));
      document.querySelectorAll(`a[href="#${sec.id}"]`)
        .forEach(a => a.classList.add('active'));
    }
  });
}

/* Timeline filters */
document.querySelectorAll('.timeline-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.timeline-filter')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTimeline(btn.dataset.filter);
  });
});

/* Fade-in observer */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* =========================================================
   INIT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderTimeline();
  updateActiveMenuItem();
});

window.addEventListener('scroll', updateActiveMenuItem);
