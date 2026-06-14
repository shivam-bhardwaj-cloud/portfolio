# Shivam Bhardwaj — Infrastructure & Systems Engineering Portfolio

Welcome to the official repository of my engineering portfolio website. 

This infrastructure is built with a **SaaS-inspired, high-performance architecture** engineered to be enterprise-grade, lightweight, and lightning-fast. It acts as a live programmatic demonstration of my core competencies in Systems Administration, Infrastructure Automation, Enterprise-to-Cloud Data Integrations, and Modern System Architectures.

🌐 **Live Production Deployment:** [https://shivam-bhardwaj-cloud.github.io/portfolio/](https://shivam-bhardwaj-cloud.github.io/portfolio/)

---

## 🚀 Architecture & Technical Mindset

As an Infrastructure Engineer, I prioritize absolute efficiency, system reliability, and clean execution. This platform was engineered from scratch to reflect those exact engineering guidelines:
- **Zero-Bloat Engineering:** Zero heavy frameworks (React, Vue, angular). Constructed entirely using pure Semantic HTML5, performance-tuned CSS3 custom tokens, and Vanilla JavaScript to minimize browser rendering overhead.
- **Data-Driven Architecture:** The DOM is completely decoupled from content; data payloads are injected dynamically via JavaScript objects and arrays, mimicking how a modern microservices client consumes a backend API gateway.
- **High-Scannability Layout:** Engineered utilizing strict CSS Grid matrices and Flexbox systems for a responsive, flawless mobile-to-desktop viewport experience.
- **Premium Interface Design:** Implements a hardened glassmorphic "Gold and True Black" style wrapper designed for high-end corporate scannability.

---

## 🌿 Version Control Protocol

This production repository actively runs an optimized Git branching strategy:
- `main`: The current, lightweight, performance-tuned modular layout.
- `v1`: Legacy release footprint containing continuous heavy CSS animations and interactive canvas particle manipulation.

---

## 📂 System File Structure

```text
portfolio/
├── assets/
│   ├── images/
│   └── docs/
├── index.htm
├── style.css
├── script.js
└── README.md
```
## How to Update Content (Data-Driven)

- I built this site so the HTML never needs to be touched when updating content. The UI is completely data-driven. 
- To add new skills, experience, or projects, simply open `script.js` and drop a new object into the respective array:

### 1. Add a New Tech Skill
Add a new object to the `SKIILS` array:
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
