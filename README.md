# Shivam Bhardwaj — Cloud Engineer & Linux Admin Portfolio

Welcome to my professional portfolio repository. 

This project is built with a **SaaS-inspired, high-performance architecture** designed to be lightweight, lightning-fast, and easily readable. It highlights my core competencies in Linux Administration, AWS, Docker, and CI/CD pipelines.

🌐 **Live Production Demo:** [https://shivam-bhardwaj-cloud.github.io/portfolio/](https://shivam-bhardwaj-cloud.github.io/portfolio/)

---

## 🚀 Architecture & Mindset

As a Cloud & DevOps Engineer, I believe in efficiency, high availability, and clean systems. I engineered this portfolio to reflect those values:
- **Zero-Bloat:** No heavy frameworks (React, Vue, etc.). Just clean HTML5, CSS3, and Vanilla JavaScript.
- **Data-Driven UI:** The DOM is injected dynamically via JavaScript arrays, mimicking how a frontend consumes a backend API. 
- **SaaS Layout:** Optimized for instant scannability, utilizing CSS Grid and Flexbox for a flawless mobile-to-desktop responsive experience.
- **Premium UI:** A custom "Gold and True Black" glassmorphism theme that is easy on the eyes and highly professional.

---

## 🌿 Version Control Note

This repository actively utilizes Git branching:
- `main`: The current, highly-optimized, fast-loading SaaS layout.
- `v1`: My legacy portfolio featuring complex, continuous CSS animations and particle effects. (Check out the `v1` branch if you want to see some heavy CSS UI manipulation!)

---

## 📂 Repository Structure

```text
portfolio/
├── assets/
│   ├── images/
│   └── docs/ (Resume)
├── index.html
├── style.css
├── script.js
└── README.md
```
## How to Update Content (Data-Driven)

- I built this site so the HTML never needs to be touched when updating content. The UI is completely data-driven. 
- To add new skills, experience, or projects, simply open `script.js` and drop a new object into the respective array:

### 1. Add a New Tech Skill
Add a new object to the `skillsData` array:
```javascript
{ 
    icon: '<i class="fa-solid fa-server"></i>', // Use any FontAwesome icon class
    title: 'Terraform & IaC', 
    desc: 'Provisioning and managing cloud infrastructure as code securely and predictably.' 
}
```
### 2. Add Experience or Education
Add a new object to the `journeyData` array:

```JavaScript
{
    type: 'Work Experience', // or 'Education'
    year: '2026 – Present',
    title: 'Junior Cloud Engineer',
    company: 'Tech Corp',
    desc: 'Managing AWS infrastructure, optimizing CI/CD pipelines, and reducing deployment times.'
}
```
### 3. Add a New Project
Add a new object to the `projectsData` array:

```JavaScript
{
    title: 'Serverless Data Pipeline',
    description: 'Built an automated event-driven pipeline using AWS Lambda, S3, and DynamoDB.',
    imageUrl: 'assets/images/serverless-pipeline.webp',
    tags: ['AWS Lambda', 'Python', 'DynamoDB'],
    link: 'https://github.com/shivam-bhardwaj-cloud/serverless-pipeline'
}
```
The JavaScript handles the rest, automatically rendering the new cards into the CSS Grid.

## 📌 Quick Start for Local Dev
- Clone the repository:

```bash
git clone https://github.com/shivam-bhardwaj-cloud/portfolio.git
```
- Navigate to the directory:

```bash
cd portfolio
```
Run locally:
- Open `index.html` in any modern web browser

## 🙌 Let's Build Something Reliable
I am currently open for roles in Cloud Engineering, DevOps, and Linux System Administration. If you are looking for an engineer who focuses on practical, impact-driven solutions, let's talk.

- Email: shivam.bhardwaj.cloud@gmail.com
- LinkedIn: https://www.linkedin.com/in/shivam-bhardwaj-cloud/
- GitHub: https://github.com/shivam-bhardwaj-cloud
- LinkHub: https://shivam-bhardwaj-cloud.github.io/links/

> Built with code, infrastructure, and automation in mind. — **Shivam Bhardwaj**