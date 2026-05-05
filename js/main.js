/* ============================================
   SCANFLOW — BACKGROUND ENGINE
   Fluid neon blobs via canvas + CSS
   ============================================ */

(function () {
  'use strict';

  /* ── CURSOR ── */
  const CURSOR_B64 = 'data:image/jpeg;base64,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';

  function initCursor() {
    const cur = document.getElementById('sf-cursor');
    const glow = document.getElementById('sf-cursor-glow');
    if (!cur) return;

    let cx = -100, cy = -100;

    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cur.style.left  = cx + 'px';
      cur.style.top   = cy + 'px';
      if (glow) { glow.style.left = cx + 'px'; glow.style.top = cy + 'px'; }
    });

    document.addEventListener('mousedown', () => {
      cur.style.transform = 'translate(-4px,-4px) scale(0.85) rotate(-10deg)';
    });
    document.addEventListener('mouseup', () => {
      cur.style.transform = 'translate(-4px,-4px) scale(1)';
    });
  }

  /* ── FLUID NEON CANVAS ── */
  function initBackground() {
    const bg = document.getElementById('sf-bg');
    if (!bg) return;

    const canvas = document.createElement('canvas');
    bg.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Blob definitions
    const blobs = [
      { x: 0.15, y: 0.4,  vx:  0.0003, vy:  0.0002, r: 0.38, color: 'rgba(200,255,0,',   alpha: 0.055 },
      { x: 0.8,  y: 0.2,  vx: -0.0002, vy:  0.0003, r: 0.32, color: 'rgba(0,229,200,',   alpha: 0.045 },
      { x: 0.6,  y: 0.75, vx:  0.0002, vy: -0.0003, r: 0.28, color: 'rgba(255,107,53,',  alpha: 0.04  },
      { x: 0.35, y: 0.6,  vx: -0.0003, vy: -0.0002, r: 0.22, color: 'rgba(200,255,0,',   alpha: 0.03  },
      { x: 0.9,  y: 0.65, vx: -0.0001, vy:  0.0002, r: 0.20, color: 'rgba(0,229,200,',   alpha: 0.035 },
    ];

    let t = 0;

    function draw() {
      t += 1;
      const W = canvas.width, H = canvas.height;

      // clear with semi-transparent ink to create trails
      ctx.fillStyle = 'rgba(7,7,13,0.18)';
      ctx.fillRect(0, 0, W, H);

      blobs.forEach((b, i) => {
        // Lissajous-like motion
        const px = (b.x + Math.sin(t * b.vx * 1000 + i * 1.3) * 0.25) * W;
        const py = (b.y + Math.cos(t * b.vy * 1000 + i * 0.9) * 0.22) * H;
        const radius = b.r * Math.min(W, H);

        // Pulsing alpha
        const pulse = b.alpha + Math.sin(t * 0.02 + i) * 0.015;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        grad.addColorStop(0,   b.color + (pulse * 1.4).toFixed(3) + ')');
        grad.addColorStop(0.4, b.color + pulse.toFixed(3) + ')');
        grad.addColorStop(1,   b.color + '0)');

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Subtle shimmer lines
      if (t % 3 === 0) {
        const lineY = (Math.sin(t * 0.01) * 0.5 + 0.5) * H;
        const lineGrad = ctx.createLinearGradient(0, lineY, W, lineY);
        lineGrad.addColorStop(0,   'rgba(200,255,0,0)');
        lineGrad.addColorStop(0.3, 'rgba(200,255,0,0.015)');
        lineGrad.addColorStop(0.5, 'rgba(200,255,0,0.025)');
        lineGrad.addColorStop(0.7, 'rgba(200,255,0,0.015)');
        lineGrad.addColorStop(1,   'rgba(200,255,0,0)');
        ctx.fillStyle = lineGrad;
        ctx.fillRect(0, lineY - 1, W, 2);
      }

      requestAnimationFrame(draw);
    }

    // Start with dark base
    ctx.fillStyle = 'rgb(7,7,13)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
  }

  /* ── DYNAMIC ISLAND NAVBAR ── */
  function initNavbar() {
    const island = document.getElementById('sf-island');
    if (!island) return;

    // Expand on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      if (s > 60 && lastScroll <= 60) island.classList.add('expanded');
      if (s <= 60 && lastScroll > 60) island.classList.remove('expanded');
      lastScroll = s;
    });

    // Active link detection
    const links = document.querySelectorAll('.island-link[data-page]');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(l => {
      if (l.dataset.page === currentPage) l.classList.add('active');
    });

    // Hamburger
    const ham = document.getElementById('sf-ham');
    const mob = document.getElementById('sf-mob-menu');
    if (ham && mob) {
      ham.addEventListener('click', () => {
        mob.classList.toggle('open');
      });
      document.addEventListener('click', e => {
        if (!ham.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open');
      });
    }

    // Notification pill demo
    setTimeout(() => showIslandNotif('📄', 'Document synced', 'Lease_2024.pdf uploaded'), 4000);
  }

  function showIslandNotif(icon, title, sub) {
    const notif = document.getElementById('island-notif');
    const island = document.getElementById('sf-island');
    if (!notif || !island) return;

    notif.querySelector('.notif-icon').textContent = icon;
    notif.querySelector('.notif-title').textContent = title;
    notif.querySelector('.notif-sub').textContent = sub;
    notif.classList.add('show');
    island.classList.add('expanded');

    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => island.classList.remove('expanded'), 300);
    }, 3500);
  }

  /* ── SCROLL REVEAL ── */
  function initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ── TOAST ── */
  window.sfToast = function(icon, title, msg) {
    const t = document.getElementById('sf-toast');
    if (!t) return;
    t.querySelector('.toast-ico').textContent = icon || '✅';
    t.querySelector('.toast-title').textContent = title || 'Done';
    t.querySelector('.toast-msg').textContent = msg || '';
    t.classList.add('show');
    clearTimeout(window._sfToastTimer);
    window._sfToastTimer = setTimeout(() => t.classList.remove('show'), 3800);
  };

  /* ── TOGGLES ── */
  function initToggles() {
    document.querySelectorAll('.sf-toggle').forEach(tog => {
      tog.addEventListener('click', () => tog.classList.toggle('on'));
    });
    document.querySelectorAll('.chip').forEach(c => {
      c.addEventListener('click', () => {
        const row = c.closest('.chip-row');
        if (row) row.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
      });
    });
  }

  /* ── FAQ ── */
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const ans = btn.nextElementSibling;
        const isOpen = btn.classList.contains('open');
        // close all
        document.querySelectorAll('.faq-q').forEach(b => { b.classList.remove('open'); b.nextElementSibling.classList.remove('open'); });
        if (!isOpen) { btn.classList.add('open'); ans.classList.add('open'); }
      });
    });
  }

  /* ── SLIDERS ── */
  function initSliders() {
    document.querySelectorAll('input[type=range][data-target]').forEach(sl => {
      const tgt = document.getElementById(sl.dataset.target);
      if (!tgt) return;
      const prefix = sl.dataset.prefix || '';
      const suffix = sl.dataset.suffix || '';
      function upd() { tgt.textContent = prefix + (sl.value > 0 && prefix === '' ? '+' : '') + sl.value + suffix; }
      sl.addEventListener('input', upd); upd();
    });
  }

  /* ── SCAN TABS ── */
  function initScanTabs() {
    document.querySelectorAll('.scan-tab[data-panel]').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.scan-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.panel;
        document.querySelectorAll('.scan-panel-content').forEach(p => {
          p.style.display = p.id === target ? 'flex' : 'none';
        });
        if (p) p.style.flexDirection = 'column';
      });
    });
  }

  /* ── HOW IT WORKS STEPS ── */
  function initSteps() {
    const steps = document.querySelectorAll('.step-row[data-step]');
    const visual = document.getElementById('step-visual');
    if (!steps.length || !visual) return;

    const contents = [
      `<div style="position:relative;display:inline-block;">
        <div class="vis-badge vis-badge-1" style="color:var(--accent2)"><span class="vb-dot" style="background:var(--accent2)"></span>Edge detected</div>
        <div class="scan-mock"><div class="scan-beam"></div>
          <div class="scan-corner-mark sc-tl"></div><div class="scan-corner-mark sc-tr"></div>
          <div class="scan-corner-mark sc-bl"></div><div class="scan-corner-mark sc-br"></div>
          <div class="scan-lines">${Array(8).fill('<div class="scan-line-item"></div>').join('')}</div>
        </div>
        <div class="vis-badge vis-badge-2" style="color:var(--accent)">✨ Auto-crop ready</div>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-top:20px;">Live camera — <strong style="color:#fff">auto-detecting edges</strong></div>`,

      `<div style="display:flex;flex-direction:column;gap:13px;width:220px;">
        ${[['Brightness','+20',60],['Contrast','+15',55],['Sharpness','+10',30]].map(([n,v,w])=>`
        <div style="text-align:left;">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span>${n}</span><span style="color:var(--accent);font-family:'DM Mono',monospace">${v}</span></div>
          <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="height:100%;background:var(--accent);width:${w}%;border-radius:2px;"></div></div>
        </div>`).join('')}
        <div style="margin-top:6px;padding:10px;background:rgba(200,255,0,0.07);border:1px solid rgba(200,255,0,0.2);border-radius:9px;font-size:12px;color:var(--accent);">✓ Shadow removed · Noise reduced</div>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-top:18px;">Enhance — <strong style="color:#fff">live preview</strong></div>`,

      `<div style="background:rgba(255,255,255,0.04);border:1px solid var(--border2);border-radius:12px;padding:20px;width:230px;text-align:left;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">OCR Result</div>
        <div style="font-family:'DM Mono',monospace;font-size:11px;line-height:1.85;color:rgba(255,255,255,0.55);">
          <span class="ocr-hl">TAX INVOICE</span><br>No: <span class="ocr-hl">INV-2024-0342</span><br>Date: 15 March 2024<br>Total: <span class="ocr-hl">₹1,00,300</span>
        </div>
        <div style="margin-top:14px;padding:8px 10px;background:rgba(200,255,0,0.08);border-radius:8px;font-size:11px;">✨ AI suggests:<br><strong style="color:var(--accent)">Invoice_AmarTech_Mar2024</strong></div>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-top:18px;">OCR + AI naming — <strong style="color:#fff">one tap</strong></div>`,

      `<div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
        <div style="display:flex;gap:10px;">${['PDF','DOCX','TXT'].map(f=>`<div style="padding:12px 18px;background:rgba(255,255,255,0.05);border:1px solid var(--border2);border-radius:10px;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;">${f}</div>`).join('')}</div>
        <div style="padding:10px 20px;background:rgba(200,255,0,0.08);border:1px solid rgba(200,255,0,0.22);border-radius:10px;font-size:12px;color:var(--accent);width:100%;max-width:220px;text-align:center;">☁️ Synced to Cloudinary</div>
        <div style="font-size:11px;color:var(--muted);">Available on all devices instantly</div>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-top:16px;">Export &amp; sync — <strong style="color:#fff">multiple formats</strong></div>`
    ];

    steps.forEach((row, i) => {
      row.addEventListener('click', () => {
        steps.forEach(r => r.classList.remove('active'));
        row.classList.add('active');
        visual.innerHTML = contents[i];
      });
    });
  }

  /* ── INIT ALL ── */
  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initBackground();
    initNavbar();
    initReveal();
    initToggles();
    initFaq();
    initSliders();
    initScanTabs();
    initSteps();
  });

})();
