// 1. Tech Stack Data
const skillsData = [
    { icon: '<i class="fa-brands fa-linux"></i>', title: 'Linux Administration', desc: 'Proficient in RHEL/Ubuntu, user permission management, secure networking, and automating tasks via Shell Scripting.' },
    { icon: '<i class="fa-brands fa-aws"></i>', title: 'AWS Cloud', desc: 'Deploying highly available architecture using EC2, S3, IAM, and VPCs. Focused on security and cost-optimization.' },
    { icon: '<i class="fa-solid fa-gears"></i>', title: 'DevOps & CI/CD', desc: 'Version control with Git/GitHub, configuring CI/CD pipelines, and streamlining code deployment processes.' },
    { icon: '<i class="fa-brands fa-docker"></i>', title: 'Containers & Orchestration', desc: 'Writing Dockerfiles, managing multi-container apps with Docker Compose, and foundational Kubernetes deployments.' }
];

// 2. Journey Data
const journeyData = [
    { type: 'Work Experience', year: '2025 – 2026', title: 'IT Infrastructure & Linux Support', company: 'NetCreativeMind', desc: 'Provided L1/L2 support for Linux & Windows environments. Managed physical server racking, cabling, and network troubleshooting.' },
    { type: 'Education', year: '2024 - 2025', title: 'Diploma in Cloud Computing', company: 'Jetking', desc: 'Mastered AWS, Linux administration, networking fundamentals, and virtualization. Built the practical foundation for Cloud Engineering.' },
    { type: 'Education', year: '2023 – 2026', title: 'BA Program (Computer Applications)', company: 'Delhi University', desc: 'Currently in my 5th Semester. Building strong academic fundamentals in computer systems and software concepts.' }
];

// 3. Projects Data
const projectsData = [
    {
        title: 'Cloud-Native Employee Portal',
        description: 'Migrated a local Flask monolith to an evolutionary stateless cloud architecture. Implemented AWS S3 for object storage and RDS for relational data.',
        imageUrl: 'assets/images/online_shop.webp',
        tags: ['AWS S3', 'RDS', 'Docker', 'Python'],
        link: 'https://github.com/shivam-bhardwaj-cloud/employee-portal'
    },
    {
        title: 'High-Availability Microservices',
        description: 'Designed a fault-tolerant infrastructure on Kubernetes (KIND). Implemented Nginx Ingress for traffic routing and HPA to handle spikes.',
        imageUrl: 'assets/images/online_shop.webp',
        tags: ['Kubernetes', 'Nginx Ingress', 'HPA'],
        link: 'https://github.com/shivam-bhardwaj-cloud/online_shop'
    },
    {
        title: 'Automated Multi-Container App',
        description: 'Orchestrated a persistent 2-tier application using Docker Compose. Connected a Python Flask backend with a MySQL database using secure networking.',
        imageUrl: 'assets/images/two-tier-flask-app.webp',
        tags: ['Docker Compose', 'MySQL', 'Networking'],
        link: 'https://github.com/shivam-bhardwaj-cloud/two-tier-flask-app'
    },
    {
        title: 'Secure Cloud Hosting Architecture',
        description: 'Deployed a highly secure static website on AWS S3. Implemented rigorous Bucket Policies and IAM Role configurations following the Principle of Least Privilege.',
        imageUrl: 'assets/images/aws-s3-static-website.webp',
        tags: ['AWS S3', 'IAM Policies', 'Security'],
        link: 'https://github.com/shivam-bhardwaj-cloud/aws-s3-static-website'
    },
    {
        title: 'Automated Azure Infrastructure',
        description: 'Provisioned production-ready cloud infrastructure using Terraform. Hosted a stateless application on Azure Container Apps with automated CPU scaling.',
        imageUrl: 'assets/images/aws-s3-static-website.webp',
        tags: ['Terraform', 'Azure Container Apps', 'FinOps'],
        link: '#'
    }
];

// Render Functions
function renderData() {
    // Render Skills
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(s => `
            <div class="card fade-in"><div class="skill-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p></div>
        `).join('');
    }

    // Render Journey
    const journeyGrid = document.getElementById('journeyGrid');
    if (journeyGrid) {
        journeyGrid.innerHTML = journeyData.map(j => `
            <div class="card fade-in">
                <div class="journey-header"><h3>${j.title}</h3><span class="journey-year">${j.year}</span></div>
                <span class="journey-company">${j.company} | ${j.type}</span><p>${j.desc}</p>
            </div>
        `).join('');
    }

    // Project Card HTML Generator with EXPLICIT BUTTON
    const generateProjectCard = (p) => `
        <div class="card project-card fade-in">
            <img src="${p.imageUrl}" alt="${p.title}" class="project-img">
            <div class="project-content">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                <div class="card-actions" style="margin-top: auto;">
                    <a href="${p.link}" target="_blank" class="cta-secondary project-btn">
                        <i class="fa-brands fa-github"></i> View Repository
                    </a>
                </div>
            </div>
        </div>
    `;

    // Render TOP 3 Projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        const top3Projects = projectsData.slice(0, 3);
        projectsGrid.innerHTML = top3Projects.map(generateProjectCard).join('');
    }

    // Render ALL Projects (The Vault)
    const allProjectsGrid = document.getElementById('allProjectsGrid');
    if (allProjectsGrid) {
        allProjectsGrid.innerHTML = projectsData.map(generateProjectCard).join('');
    }
}

// Logic for Toggling Views & Navigation
function setupViewToggles() {
    const mainView = document.getElementById('main-view');
    const allProjectsView = document.getElementById('all-projects-view');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const backBtn = document.getElementById('back-btn');
    
    // Select all links inside the single navbar
    const navLinks = document.querySelectorAll('.nav-links a');

    if(viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            mainView.classList.add('hidden');
            allProjectsView.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if(backBtn) {
        backBtn.addEventListener('click', () => {
            allProjectsView.classList.add('hidden');
            mainView.classList.remove('hidden');
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle clicks on Navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // If user clicks a nav link while in the "Vault", take them back to main view
            if(!allProjectsView.classList.contains('hidden')) {
                allProjectsView.classList.add('hidden');
                mainView.classList.remove('hidden');
            }
            
            // Mobile highlight logic
            if(window.innerWidth <= 900) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// =========================================================
// SMART NAVBAR HIDE/SHOW ON SCROLL
// =========================================================
function setupSmartNavbar() {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        let currentScrollY = window.scrollY;

        // Hide if scrolling down and past 100px
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('nav-hidden'); 
        } 
        // Show if scrolling up
        else {
            navbar.classList.remove('nav-hidden'); 
        }

        lastScrollY = currentScrollY;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderData();
    setupViewToggles();
    setupSmartNavbar(); // Init scroll hide/show logic
});