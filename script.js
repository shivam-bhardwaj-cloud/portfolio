/* =========================================================
   DATA CONFIG : edit only this section
   ========================================================= */

/* -------- Skills (Fixed: Premium Icons) -------- */
const visualSkills = [
  { icon: '<i class="fa-brands fa-linux"></i>', name: 'Linux' },
  { icon: '<i class="fa-brands fa-aws"></i>', name: 'AWS' },
  { icon: '<i class="fa-brands fa-docker"></i>', name: 'Docker' },
  { icon: '<i class="fa-brands fa-git-alt"></i>', name: 'Git' },
  { icon: '<i class="fa-solid fa-gears"></i>', name: 'CI/CD' },
  { icon: '<i class="fa-solid fa-dharmachakra"></i>', name: 'K8s' },
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
  title: 'High-Availability Microservices Deployment',
  description: 'Designed a fault-tolerant infrastructure on Kubernetes (KIND). Implemented Nginx Ingress for efficient traffic routing and configured Horizontal Pod Autoscaling (HPA) to handle traffic spikes, ensuring the application remains stable under load.',
  imageUrl: 'assets/images/online_shop.webp',
  tags: ['Kubernetes', 'Nginx Ingress', 'Auto-scaling', 'Docker'],
  link: 'https://github.com/shivam-bhardwaj-cloud/online_shop'
},
{
  title: 'Automated Multi-Container Infrastructure',
  description: 'Orchestrated a persistent 2-tier application using Docker Compose. Connected a Python Flask backend with a MySQL database, ensuring secure container networking and data persistence using Docker Volumes for crash recovery.',
  imageUrl: 'assets/images/two-tier-flask-app.webp',
  tags: ['Docker Compose', 'Persistence', 'Networking', 'Python'],
  link: 'https://github.com/shivam-bhardwaj-cloud/two-tier-flask-app'
},
{
  title: 'Secure Cloud Hosting Architecture',
  description:'Deployed a highly secure static website on AWS S3. Implemented rigorous Bucket Policies and IAM Role configurations to manage public access while strictly following the Principle of Least Privilege for cloud security.',
  imageUrl: 'assets/images/aws-s3-static-website.webp',
  tags: ['AWS Security', 'S3', 'IAM Policies', 'Cloud Infra'],
  link: 'https://github.com/shivam-bhardwaj-cloud/aws-s3-static-website'
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
    title: 'IT Infrastructure & Linux Support',
    company: 'NetCreativeMind',
    description: 'Provided L1/L2 support for Linux & Windows environments. Managed physical server racking, cabling, and network troubleshooting. Assisted in user management and basic server configurations.',
    skills: ['Linux Basics', 'Hardware Troubleshooting', 'Networking', 'Server Racking']
  },
  {
    category: 'project',
    icon: '🚀',
    year: '2025 – Present',
    title: 'Upskilling to Cloud & DevOps',
    company: 'Self-Paced Learning',
    description: 'Aggressively learning modern tech stack. Built multiple hands-on projects including deploying Python apps with Docker, setting up Kubernetes clusters (KIND), and automating workflows with Git.',
    skills: ['Docker', 'AWS EC2', 'Bash Scripting', 'CI/CD Concepts']
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
      `<div class="skills-center">☁</div>`;
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
        <div class="portfolio-image">
          <img src="${p.imageUrl}" alt="${p.title}">
        </div>
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
/* =========================================
   MOBILE MENU LOGIC
   ========================================= */

const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileBtn && mobileNav) {
  // 1. Toggle Menu on Button Click
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // 2. Close Menu when a Link is clicked
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
}
