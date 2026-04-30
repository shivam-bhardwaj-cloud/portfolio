// 1. Tech Stack Data

const skillsData = [
    { 
        icon: '<i class="fa-brands fa-linux"></i>', 
        title: 'Linux Administration',
        desc: 'Proficient in RHEL/Ubuntu, user permission management, secure networking, and automating tasks via Shell Scripting.' 
    },
    { 
        icon: '<i class="fa-brands fa-aws"></i>', 
        title: 'AWS Cloud',
        desc: 'Deploying highly available architecture using EC2, S3, IAM, and VPCs. Focused on security and cost-optimization.' 
    },
    { 
        icon: '<i class="fa-solid fa-gears"></i>', 
        title: 'DevOps & CI/CD',
        desc: 'Version control with Git/GitHub, configuring CI/CD pipelines, and streamlining code deployment processes.' 
    },
    { 
        icon: '<i class="fa-brands fa-docker"></i>', 
        title: 'Containers & Orchestration',
        desc: 'Writing Dockerfiles, managing multi-container apps with Docker Compose, and foundational Kubernetes deployments.' 
    }
];

// 2. Professional Experience Data

const experienceData = [
    { 
        year: 'Mar 2026 – Present', 
        title: 'IT Support Executive (Infrastructure & Automation)', 
        company: 'Altezzasys INC',
        icon: '<i class="fa-solid fa-network-wired"></i>',
        domain: 'https://www.altezzasys.com',
        desc: 'Managing end-to-end IT infrastructure for a CMMI Level 5 organization (600+ users), ensuring 100% system uptime.<br><br>● <b>Process Automation:</b> Leveraged PowerShell & Power Automate to automate user lifecycle and software provisioning, reducing manual effort by 40%.<br><br>● <b>Infrastructure Ownership:</b> Single-handedly managed hardware deployment, network troubleshooting, and software compliance.<br><br>● <b>Asset Management:</b> Streamlined IT asset tracking and inventory to plug billing leaks.<br><br>● <b>User Success:</b> Delivered high-speed tech support, maintaining a strict 20-minute SLA for complex bottlenecks.' 
    },
    { 
        year: 'Apr 2025 – Dec 2025', 
        title: 'IT Support Intern (Infrastructure & Systems)', 
        company: 'NetCreativeMind Solutions', 
        icon: '<i class="fa-solid fa-server"></i>', 
        domain: 'https://www.netcreativemind.com',
        desc: 'Assisted in managing a hybrid infrastructure environment (Linux & Windows), focusing on server health and secure identity management.<br><br>● <b>Server Admin:</b> Monitored 8+ on-prem servers; performed proactive log analysis (Journalctl) to maintain 99.9% uptime.<br><br>● <b>IAM & Security:</b> Managed lifecycles and NTFS permissions via Active Directory (ADDS) for secure RDP/SSH access.<br><br>● <b>Network Troubleshooting:</b> Resolved critical DNS failures, IP conflicts, and VPN connectivity issues.<br><br>● <b>Deployment:</b> Automated OS provisioning and software rollouts for 50+ workstations across multiple regional offices.' 
    }
];

// 3. Education Data

const educationData = [
    { 
        year: '2024 - 2025',
        title: 'Diploma in Cloud Computing (Grade: A)',
        company: 'Jetking',
        icon: '<i class="fa-solid fa-cloud"></i>',
        domain: 'https://www.jetking.com',
        desc: '● Completed an intensive 576-hour hands-on program focused on modern IT infrastructure.<br><br>● Mastered AWS Cloud services including EC2, VPC, S3, and IAM for secure cloud deployments.<br><br>● Gained proficiency in Windows Server Administration, Linux fundamentals, and Networking (TCP/IP, DNS, Routing).<br><br>● Developed strong troubleshooting skills through lab-based real-world IT simulations.'
    },
    { 
        year: '2023 - 2026',
        title: 'B.A. Program with Computer Applications',
        company: 'Delhi University',
        icon: '<i class="fa-solid fa-graduation-cap"></i>',
        domain: 'https://www.du.ac.in',
        desc: '● Focusing on computer applications, software concepts, and IT fundamentals.<br><br>● Building a strong theoretical foundation in information sciences to complement hands-on DevOps and Cloud training.' 
    }
];

// 3. Projects Data

const projectsData = [
    
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

   // Render Professional Experience
    const experienceGrid = document.getElementById('experienceGrid');
    if (experienceGrid) {
        experienceGrid.innerHTML = experienceData.map(e => `
            <div class="card fade-in">
                <div class="journey-header"><h3>${e.title}</h3><span class="journey-year">${e.year}</span></div>
                <div class="journey-company-wrapper">
                    <!-- Google API with UI-Avatars Golden Fallback -->
                    <img src="https://www.google.com/s2/favicons?domain=${e.domain}&sz=128" 
                         alt="${e.company} Logo" 
                         class="company-logo" 
                         onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(e.company)}&background=D4AF37&color=000&bold=true'">
                    <span class="journey-company" style="color: var(--gold); font-weight: 600; font-size: 0.95rem; display: block;">${e.company}</span>
                </div>
                <p>${e.desc}</p>
            </div>
        `).join('');
    }

    // Render Education
    const educationGrid = document.getElementById('educationGrid');
    if (educationGrid) {
        educationGrid.innerHTML = educationData.map(e => `
            <div class="card fade-in">
                <div class="journey-header"><h3>${e.title}</h3><span class="journey-year">${e.year}</span></div>
                <div class="journey-company-wrapper">
                    <!-- Google API with UI-Avatars Golden Fallback -->
                    <img src="https://www.google.com/s2/favicons?domain=${e.domain}&sz=128" 
                         alt="${e.company} Logo" 
                         class="company-logo" 
                         onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(e.company)}&background=D4AF37&color=000&bold=true'">
                    <span class="journey-company" style="color: var(--gold); font-weight: 600; font-size: 0.95rem; display: block;">${e.company}</span>
                </div>
                <p>${e.desc}</p>
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