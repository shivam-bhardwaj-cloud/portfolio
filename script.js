/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const SKILLS=[
  {icon:'fa-brands fa-linux',title:'Linux Administration',desc:'RHEL & Ubuntu mastery — user permissions, network security, Shell Scripting, and process automation across 600+ endpoints.',tag:'Server Admin'},
  {icon:'fa-brands fa-aws',title:'AWS Cloud Architecture',desc:'Highly available EC2, S3, IAM & VPC deployments. Security-first, cost-optimized cloud infrastructure that scales.',tag:'Cloud'},
  {icon:'fa-solid fa-gears',title:'DevOps & CI/CD',desc:'Git/GitHub workflows, automated pipelines, and streamlined code-to-production processes that eliminate deployment friction.',tag:'Automation'},
  {icon:'fa-brands fa-docker',title:'Containers & Kubernetes',desc:'Dockerfiles, Docker Compose multi-service apps, and K8s deployments with HPA, Ingress, and fault-tolerance built in.',tag:'Orchestration'},
];

const TOOLS=[
  {icon:'fa-brands fa-aws',label:'AWS EC2'},
  {icon:'fa-solid fa-database',label:'AWS RDS'},
  {icon:'fa-solid fa-hard-drive',label:'AWS S3'},
  {icon:'fa-brands fa-docker',label:'Docker'},
  {icon:'fa-solid fa-dharmachakra',label:'Kubernetes'},
  {icon:'fa-brands fa-git-alt',label:'Git'},
  {icon:'fa-solid fa-terminal',label:'Bash / Shell'},
  {icon:'fa-brands fa-windows',label:'PowerShell'},
  {icon:'fa-solid fa-network-wired',label:'Active Directory'},
  {icon:'fa-brands fa-python',label:'Python'},
  {icon:'fa-solid fa-server',label:'Linux / RHEL'},
  {icon:'fa-solid fa-infinity',label:'CI/CD Pipelines'},
];

const EXP=[
  {
    year:'Mar 2026 – Present',
    title:'IT Support Executive — Infrastructure & Automation',
    company:'Altezzasys INC',
    domain:'altezzasys.com',
    bullets:[
      '<b>System Integration:</b> Deployed MS-SQL server via RDP bridging biometric hardware with Keka HRMS SaaS.',
      '<b>Monitoring Automation:</b> PowerShell scripts auditing 600+ enterprise endpoints, routed via Discord Webhooks.',
      '<b>Cloud FinOps:</b> Containerized apps & migrated static assets to GitHub Pages — significant cost reduction.',
      '<b>Data Engineering:</b> XLOOKUP pipelines compressing master datasets from <b>32 MB → 152 KB</b>.',
    ]
  },
  {
    year:'Apr 2025 – Dec 2025',
    title:'IT Support Intern — Infrastructure & Systems',
    company:'NetCreativeMind Solutions',
    domain:'netcreativemind.com',
    bullets:[
      '<b>Server Admin:</b> Managed 8+ on-prem servers with Journalctl log analysis, maintaining <b>99.9% uptime</b>.',
      '<b>IAM & Security:</b> Active Directory lifecycles & NTFS permissions for RDP/SSH access control.',
      '<b>Network Ops:</b> Resolved critical DNS failures, IP conflicts, and VPN connectivity issues.',
      '<b>Deployment:</b> Automated OS provisioning for 50+ workstations across multiple regional offices.',
    ]
  },
  {
    year:'2024 – 2025',
    title:'Diploma in Cloud Computing — Grade A',
    company:'Jetking',
    domain:'jetking.com',
    edu:true,
    bullets:[
      'Intensive 576-hour hands-on program on modern IT infrastructure & cloud systems.',
      'AWS (EC2, VPC, S3, IAM), Windows Server, Linux fundamentals, TCP/IP, DNS, Routing.',
    ]
  },
  {
    year:'2023 – 2026',
    title:'B.A. with Computer Applications',
    company:'Delhi University',
    domain:'du.ac.in',
    edu:true,
    bullets:[
      'Computer applications, software concepts, and information sciences.',
      'Theoretical foundation complementing hands-on DevOps & Cloud engineering practice.',
    ]
  }
];

const PROJECTS=[
  {
    title:'Employee Document Portal Migration',
    desc:'4-phase cloud-native migration: SQLite → AWS RDS PostgreSQL, local volumes → AWS S3. Dockerized, Kubernetes-orchestrated, with full CI/CD pipeline.',
    img:'assets/images/employee-portal.webp',
    tags:['AWS S3','RDS','Docker','Kubernetes','Python','IAM','CI/CD'],
    link:'https://github.com/shivam-bhardwaj-cloud/employee-portal',
    num:'01'
  },
  {
    title:'High-Availability Microservices on K8s',
    desc:'Fault-tolerant infrastructure on Kubernetes (KIND) with Nginx Ingress traffic routing and HPA for auto-scaling under traffic spikes.',
    img:'assets/images/online_shop.webp',
    tags:['Kubernetes','Nginx Ingress','HPA','KIND'],
    link:'https://github.com/shivam-bhardwaj-cloud/online_shop',
    num:'02'
  },
  {
    title:'Automated Multi-Container Flask App',
    desc:'Persistent 2-tier application with Docker Compose — Flask backend + MySQL, connected via secure isolated Docker networking.',
    img:'assets/images/two-tier-flask-app.webp',
    tags:['Docker Compose','Flask','MySQL','Networking'],
    link:'https://github.com/shivam-bhardwaj-cloud/two-tier-flask-app',
    num:'03'
  },
  {
    title:'Secure Cloud Hosting Architecture',
    desc:'Hardened static website on AWS S3 with strict Bucket Policies and IAM Roles — Principle of Least Privilege enforced end-to-end.',
    img:'assets/images/aws-s3-static-website.webp',
    tags:['AWS S3','IAM','Security','Bucket Policy'],
    link:'https://github.com/shivam-bhardwaj-cloud/aws-s3-static-website',
    num:'04'
  },
];

const CONTACTS=[
  {icon:'fa-solid fa-envelope',label:'Email',href:'mailto:shivam.bhardwaj.cloud@gmail.com',email:'shivam.bhardwaj.cloud@gmail.com',ev:'click_email'},
  {icon:'fa-brands fa-linkedin',label:'LinkedIn',href:'https://linkedin.com/in/shivam-bhardwaj-cloud',ev:'click_linkedin'},
  {icon:'fa-brands fa-github',label:'GitHub',href:'https://www.github.com/shivam-bhardwaj-cloud',ev:'click_github'},
  {icon:'fa-solid fa-link',label:'LinkHub',href:'https://shivam-bhardwaj-cloud.github.io/links/',ev:'click_linkhub'},
];

const CMD_ITEMS=[
  {group:'Navigate',items:[
    {icon:'fa-solid fa-house',label:'Home',action:()=>scrollTo('#home')},
    {icon:'fa-solid fa-microchip',label:'Skills & Tech Stack',action:()=>scrollTo('#skills')},
    {icon:'fa-solid fa-briefcase',label:'Work Experience',action:()=>scrollTo('#work')},
    {icon:'fa-solid fa-code-branch',label:'Projects',action:()=>scrollTo('#projects')},
    {icon:'fa-solid fa-paper-plane',label:'Contact Me',action:()=>scrollTo('#contact')},
  ]},
  {group:'Actions',items:[
    {icon:'fa-solid fa-file-arrow-down',label:'Download Resume',action:()=>{const a=document.createElement('a');a.href='assets/docs/resume/Shivam_Bhardwaj_DevOps_Engineer.pdf';a.download='';a.click();}},
    {icon:'fa-brands fa-github',label:'Open GitHub',action:()=>window.open('https://www.github.com/shivam-bhardwaj-cloud','_blank')},
    {icon:'fa-brands fa-linkedin',label:'Open LinkedIn',action:()=>window.open('https://linkedin.com/in/shivam-bhardwaj-cloud','_blank')},
    {icon:'fa-solid fa-envelope',label:'Send Email',action:()=>window.location.href='mailto:shivam.bhardwaj.cloud@gmail.com'},
  ]},
];

/* ═══════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════ */
function scrollTo(sel){
  const el=document.querySelector(sel);
  if(el)el.scrollIntoView({behavior:'smooth'});
}
function qs(s,root=document){return root.querySelector(s);}
function qsa(s,root=document){return [...root.querySelectorAll(s)];}

/* ═══════════════════════════════════════════════════════
   LOADER
═══════════════════════════════════════════════════════ */
function initLoader(){
  const nameEl=qs('#ldName');
  const name='Shivam Bhardwaj';
  nameEl.innerHTML=name.split('').map(c=>c===' '?'<span>&nbsp;</span>':`<span>${c}</span>`).join('');

  const bar=qs('#ldBar');
  const pct=qs('#ldPct');
  let p=0;
  const iv=setInterval(()=>{
    p=Math.min(100,p+Math.random()*18+4);
    bar.style.width=p+'%';
    pct.textContent=Math.round(p)+'%';
    if(p>=100){
      clearInterval(iv);
      setTimeout(()=>{
        qs('#loader').classList.add('out');
        qs('.page').classList.add('visible');
        startCounters();
        initTerminal();
      },400);
    }
  },120);
}

/* ═══════════════════════════════════════════════════════
   CANVAS PARTICLES
═══════════════════════════════════════════════════════ */
function initCanvas(){
  const canvas=qs('#hero-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W,H,pts;

  function setup(){
    W=canvas.width=canvas.offsetWidth;
    H=canvas.height=canvas.offsetHeight;
    const n=Math.min(80,Math.floor(W/14));
    pts=Array.from({length:n},()=>({
      x:Math.random()*W,y:Math.random()*H,
      vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,
      r:Math.random()*1.5+.4,a:Math.random()*.5+.1
    }));
  }
  setup();
  window.addEventListener('resize',setup);

  let mx=-9999,my=-9999;
  canvas.parentElement.addEventListener('mousemove',e=>{
    const r=canvas.getBoundingClientRect();
    mx=e.clientX-r.left;my=e.clientY-r.top;
  },{passive:true});

  function frame(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      const dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){p.vx+=dx/d*.1;p.vy+=dy/d*.1;}
      p.vx*=.97;p.vy*=.97;
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,215,100,${p.a})`;ctx.fill();
    });
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<130){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(255,215,100,${.1*(1-d/130)})`;
          ctx.lineWidth=.7;ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  frame();
}

/* ═══════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════ */
function initCursor(){
  if(window.innerWidth<=768)return;
  const cur=qs('#cur'),dot=qs('#cur-dot');
  let cx=0,cy=0,tx=0,ty=0;
  document.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;},{passive:true});
  document.addEventListener('mousedown',()=>document.body.classList.add('clicking'));
  document.addEventListener('mouseup',()=>document.body.classList.remove('clicking'));
  qsa('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('link-hover'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('link-hover'));
  });
  (function loop(){
    cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;
    cur.style.left=cx+'px';cur.style.top=cy+'px';
    dot.style.left=tx+'px';dot.style.top=ty+'px';
    requestAnimationFrame(loop);
  })();
}

/* ═══════════════════════════════════════════════════════
   COUNTER
═══════════════════════════════════════════════════════ */
function startCounters(){
  qsa('.counter').forEach(el=>{
    const target=+el.dataset.target,dur=1600,step=16,steps=dur/step;
    let cur=0;
    const inc=target/steps;
    const iv=setInterval(()=>{
      cur=Math.min(target,cur+inc);
      el.textContent=Math.round(cur).toLocaleString();
      if(cur>=target)clearInterval(iv);
    },step);
  });
}

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════ */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target);}});
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  qsa('.rv,.rv-scale,.rv-left').forEach(el=>obs.observe(el));
}

/* ═══════════════════════════════════════════════════════
   SMART NAV
═══════════════════════════════════════════════════════ */
function initNav(){
  const nav=qs('#nav');
  let lastY=0,tick=false;
  window.addEventListener('scroll',()=>{
    if(!tick){
      requestAnimationFrame(()=>{
        const y=window.scrollY;
        nav.classList.toggle('solid',y>60);
        nav.classList.toggle('up',y>lastY+10&&y>200);
        if(y<lastY-6)nav.classList.remove('up');
        lastY=y;tick=false;
      });
      tick=true;
    }
  },{passive:true});

  // Active section
  const sections=qsa('section[id]');
  const links=qsa('.nl[data-section]');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(l=>{
          l.classList.toggle('act',l.dataset.section===e.target.id);
        });
      }
    });
  },{threshold:.35});
  sections.forEach(s=>obs.observe(s));
}

/* ═══════════════════════════════════════════════════════
   BENTO MOUSE GLOW
═══════════════════════════════════════════════════════ */
function initBentoGlow(){
  qsa('.bento-cell').forEach(cell=>{
    cell.addEventListener('mousemove',e=>{
      const r=cell.getBoundingClientRect();
      const x=((e.clientX-r.left)/r.width*100).toFixed(1);
      const y=((e.clientY-r.top)/r.height*100).toFixed(1);
      cell.style.setProperty('--mx',x+'%');
      cell.style.setProperty('--my',y+'%');
    });
  });
}

/* ═══════════════════════════════════════════════════════
   3D TILT CARDS
═══════════════════════════════════════════════════════ */
function initTilt(){
  if(window.innerWidth<=768)return;
  qsa('.proj-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left-r.width/2)/(r.width/2);
      const y=(e.clientY-r.top-r.height/2)/(r.height/2);
      card.style.transform=`perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='';});
  });
}

/* ═══════════════════════════════════════════════════════
   CMD PALETTE
═══════════════════════════════════════════════════════ */
function initCmd(){
  const overlay=qs('#cmd-overlay');
  const input=qs('#cmd-input');
  const results=qs('#cmdResults');
  let activeIdx=0,flatItems=[];

  function buildItems(filter=''){
    const f=filter.toLowerCase();
    flatItems=[];
    results.innerHTML='';
    CMD_ITEMS.forEach(group=>{
      const matching=group.items.filter(i=>!f||i.label.toLowerCase().includes(f));
      if(!matching.length)return;
      const g=document.createElement('div');g.className='cmd-group';
      g.innerHTML=`<div class="cmd-group-label">${group.group}</div>`;
      matching.forEach(item=>{
        const row=document.createElement('div');row.className='cmd-item';
        row.innerHTML=`<i class="${item.icon}" aria-hidden="true"></i>${item.label}`;
        row.addEventListener('click',()=>{item.action();closeCmd();});
        row.addEventListener('mouseenter',()=>{
          qsa('.cmd-item').forEach(r=>r.classList.remove('active'));
          row.classList.add('active');
          activeIdx=flatItems.indexOf(item);
        });
        g.appendChild(row);
        flatItems.push({item,row});
      });
      results.appendChild(g);
    });
    if(flatItems.length)flatItems[0].row.classList.add('active');
    activeIdx=0;
  }

  function openCmd(){overlay.classList.add('open');input.value='';buildItems();input.focus();}
  function closeCmd(){overlay.classList.remove('open');}

  qs('#cmdBtn').addEventListener('click',openCmd);
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeCmd();});
  input.addEventListener('input',()=>buildItems(input.value));

  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();overlay.classList.contains('open')?closeCmd():openCmd();}
    if(overlay.classList.contains('open')){
      if(e.key==='Escape')closeCmd();
      if(e.key==='ArrowDown'){
        e.preventDefault();
        flatItems[activeIdx]?.row.classList.remove('active');
        activeIdx=Math.min(activeIdx+1,flatItems.length-1);
        flatItems[activeIdx]?.row.classList.add('active');
        flatItems[activeIdx]?.row.scrollIntoView({block:'nearest'});
      }
      if(e.key==='ArrowUp'){
        e.preventDefault();
        flatItems[activeIdx]?.row.classList.remove('active');
        activeIdx=Math.max(activeIdx-1,0);
        flatItems[activeIdx]?.row.classList.add('active');
        flatItems[activeIdx]?.row.scrollIntoView({block:'nearest'});
      }
      if(e.key==='Enter'){flatItems[activeIdx]?.item.action();closeCmd();}
    }
  });
}

/* ═══════════════════════════════════════════════════════
   TERMINAL TYPEWRITER
═══════════════════════════════════════════════════════ */
function initTerminal(){
  const body=qs('#termBody');
  const lines=[
    {type:'cmd',prompt:'shivam@cloud',path:'~/infra',cmd:'kubectl get nodes --all-namespaces'},
    {type:'out',text:'NAME           STATUS   ROLES    AGE    VERSION'},
    {type:'out',text:'control-plane Ready    master   142d   v1.28.0',cls:'green'},
    {type:'out',text:'worker-01     Ready    <none>   142d   v1.28.0',cls:'green'},
    {type:'out',text:'worker-02     Ready    <none>   142d   v1.28.0',cls:'green'},
    {type:'gap'},
    {type:'cmd',prompt:'shivam@cloud',path:'~/infra',cmd:'aws s3 ls s3://prod-assets/ --human-readable'},
    {type:'out',text:'2025-03-12  4.2 GB   media/'},
    {type:'out',text:'2025-03-12  152 KB   master-data.xlsx',cls:'gold'},
    {type:'out',text:'2025-03-12  18.4 MB  backups/'},
    {type:'gap'},
    {type:'cmd',prompt:'shivam@cloud',path:'~/automation',cmd:'./deploy.sh --env=prod --zero-downtime'},
    {type:'out',text:'[ ✓ ] Health checks passed'},
    {type:'out',text:'[ ✓ ] Rolling update initiated',cls:'green'},
    {type:'out',text:'[ ✓ ] 3/3 pods running — zero downtime achieved',cls:'gold'},
    {type:'cursor'},
  ];

  let idx=0;
  function next(){
    if(idx>=lines.length)return;
    const l=lines[idx++];
    const div=document.createElement('div');
    if(l.type==='gap'){div.style.height='0.8rem';body.appendChild(div);setTimeout(next,50);return;}
    if(l.type==='cursor'){
      div.className='t-line';
      div.innerHTML=`<span class="t-prompt">❯</span><span class="t-cursor"></span>`;
      body.appendChild(div);return;
    }
    if(l.type==='cmd'){
      div.className='t-line';
      div.innerHTML=`<span class="t-prompt">❯</span><span class="t-path">${l.path}</span><span class="t-cmd"> ${l.cmd}</span>`;
      body.appendChild(div);setTimeout(next,800);
    }
    if(l.type==='out'){
      div.className=`t-out${l.cls?' '+l.cls:''}`;
      div.textContent=l.text;body.appendChild(div);setTimeout(next,120);
    }
    body.scrollTop=body.scrollHeight;
  }
  setTimeout(next,600);
}

/* ═══════════════════════════════════════════════════════
   RENDER: SKILLS
═══════════════════════════════════════════════════════ */
function renderSkills(){
  const g=qs('#skillsGrid');
  if(!g)return;
  g.innerHTML=SKILLS.map((s,i)=>`
    <div class="bento-cell" role="listitem" style="--d:${i*.08+.3}s">
      <div class="bento-icon"><i class="${s.icon}" aria-hidden="true"></i></div>
      <div class="bento-title">${s.title}</div>
      <div class="bento-desc">${s.desc}</div>
      <div class="bento-tag">${s.tag}</div>
    </div>
  `).join('');

  const tr=qs('#toolsRow');
  if(tr)tr.innerHTML=TOOLS.map(t=>`
    <div class="tool-pill"><i class="${t.icon}" aria-hidden="true"></i>${t.label}</div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: WORK
═══════════════════════════════════════════════════════ */
function renderWork(){
  const g=qs('#workGrid');
  if(!g)return;
  g.innerHTML=EXP.map((e,i)=>`
    <div class="tl-card rv" role="listitem" style="--d:${i*.12+.2}s">
      <div class="tl-head">
        <span class="tl-title">${e.title}</span>
        <span class="tl-badge">${e.year}</span>
      </div>
      <div class="tl-co">
        <img class="tl-logo"
          src="https://www.google.com/s2/favicons?domain=${e.domain}&sz=128"
          alt="${e.company}"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(e.company)}&background=FFD764&color=000&bold=true'">
        <span class="tl-co-name">${e.company}</span>
      </div>
      <div class="tl-bullets">
        ${e.bullets.map(b=>`<div class="tl-b">${b}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: PROJECTS
═══════════════════════════════════════════════════════ */
function projCard(p,i){
  return `
    <article class="proj-card rv" role="listitem" style="--d:${i*.1+.15}s">
      <div class="proj-thumb">
        <img src="${p.img}" alt="${p.title}" class="proj-img" loading="lazy">
        <div class="proj-fade" aria-hidden="true"></div>
      </div>
      <div class="proj-body">
        <div class="proj-num">${p.num}</div>
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-footer">
          <a href="${p.link}" target="_blank" rel="noopener" class="proj-link" aria-label="View on GitHub">
            <i class="fa-brands fa-github" aria-hidden="true"></i> View Repository
          </a>
          <a href="${p.link}" target="_blank" rel="noopener" class="proj-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(){
  const g=qs('#projGrid');
  if(g)g.innerHTML=PROJECTS.slice(0,3).map(projCard).join('');
  const all=qs('#allProjGrid');
  if(all)all.innerHTML=PROJECTS.map(projCard).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: CONTACT
═══════════════════════════════════════════════════════ */
function renderContact(){
  const el=qs('#contactLinks');
  if(!el)return;
  el.innerHTML=CONTACTS.map(c=>`
    <a href="${c.href}"
       class="c-link${c.email?' email-tt':''}"
       ${c.email?`data-e="${c.email}"`:''}
       ${c.href.startsWith('http')?'target="_blank" rel="noopener"':''}
       onclick="typeof gtag!=='undefined'&&gtag('event','${c.ev}')"
       role="listitem">
      <i class="${c.icon}" aria-hidden="true"></i> ${c.label}
    </a>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   VIEW TOGGLE (VAULT)
═══════════════════════════════════════════════════════ */
function initVault(){
  const main=qs('#main-view'),vault=qs('#vault-view');
  qs('#vaultBtn')?.addEventListener('click',()=>{
    main.classList.add('hidden');vault.classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
    initReveal();initTilt();
  });
  qs('#vaultBack')?.addEventListener('click',()=>{
    vault.classList.add('hidden');main.classList.remove('hidden');
    qs('#projects')?.scrollIntoView({behavior:'smooth'});
  });
  qsa('.nl').forEach(l=>l.addEventListener('click',()=>{
    if(!vault.classList.contains('hidden')){vault.classList.add('hidden');main.classList.remove('hidden');}
  }));
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  initLoader();
  initCanvas();
  initCursor();
  initNav();
  initCmd();
  renderSkills();
  renderWork();
  renderProjects();
  renderContact();
  initReveal();
  initVault();
  setTimeout(()=>{initBentoGlow();initTilt();},600);

  // Expose scrollTo for cmd palette
  window._scrollTo=scrollTo;
});
