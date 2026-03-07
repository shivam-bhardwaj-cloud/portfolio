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
        desc: 'Writing Dockerfiles, managing multi-container apps with Docker Compose, and foundational Kubernetes (KIND) deployments.' 
    }
];

// 2. Journey Data (Experience + Education)
const journeyData = [
    {
        type: 'Work Experience',
        year: '2024 – 2025',
        title: 'IT Infrastructure & Linux Support',
        company: 'NetCreativeMind',
        desc: 'Provided L1/L2 support for Linux & Windows environments. Managed physical server racking, cabling, and network troubleshooting. Gained deep hardware and OS knowledge.'
    },
    {
        type: 'Education',
        year: '2024',
        title: 'Diploma in Cloud Computing',
        company: 'Jetking',
        desc: 'Mastered AWS, Linux administration, networking fundamentals, and virtualization. Built the practical foundation for modern Cloud Engineering.'
    },
    {
        type: 'Education',
        year: '2023 – Present',
        title: 'BA Program (Computer Applications)',
        company: 'Delhi University',
        desc: 'Currently in my 5th Semester. Building strong academic fundamentals in computer systems and software concepts.'
    }
];

// 3. Projects Data
const projectsData = [
    {
        title: 'High-Availability Microservices Deployment',
        description: 'Designed a fault-tolerant infrastructure on Kubernetes (KIND). Implemented Nginx Ingress for traffic routing and Horizontal Pod Autoscaling (HPA) to handle spikes.',
        imageUrl: 'assets/images/online_shop.webp',
        tags: ['Kubernetes', 'Nginx', 'Docker'],
        link: 'https://github.com/shivam-bhardwaj-cloud/online_shop'
    },
    {
        title: 'Automated Multi-Container App',
        description: 'Orchestrated a persistent 2-tier application using Docker Compose. Connected a Python Flask backend with a MySQL database using secure container networking.',
        imageUrl: 'assets/images/two-tier-flask-app.webp',
        tags: ['Docker Compose', 'Python', 'Networking'],
        link: 'https://github.com/shivam-bhardwaj-cloud/two-tier-flask-app'
    },
    {
        title: 'Secure Cloud Hosting Architecture',
        description: 'Deployed a highly secure static website on AWS S3. Implemented rigorous Bucket Policies and IAM Role configurations following the Principle of Least Privilege.',
        imageUrl: 'assets/images/aws-s3-static-website.webp',
        tags: ['AWS S3', 'IAM Policies', 'Cloud Security'],
        link: 'https://github.com/shivam-bhardwaj-cloud/aws-s3-static-website'
    }
];

// Render Functions
function renderData() {
    // Render Skills
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(s => `
            <div class="card fade-in">
                <div class="skill-icon">${s.icon}</div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        `).join('');
    }

    // Render Journey
    const journeyGrid = document.getElementById('journeyGrid');
    if (journeyGrid) {
        journeyGrid.innerHTML = journeyData.map(j => `
            <div class="card fade-in">
                <div class="journey-header">
                    <h3>${j.title}</h3>
                    <span class="journey-year">${j.year}</span>
                </div>
                <span class="journey-company">${j.company} | ${j.type}</span>
                <p>${j.desc}</p>
            </div>
        `).join('');
    }

    // Render Projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(p => `
            <a href="${p.link}" target="_blank" class="card project-card fade-in">
                <img src="${p.imageUrl}" alt="${p.title}" class="project-img">
                <div class="project-content">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <div class="tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            </a>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderData);