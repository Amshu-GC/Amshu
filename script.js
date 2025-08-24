document.getElementById('year').textContent = new Date().getFullYear();


const words = ['curious', 'creative', 'soft-hearted', 'focused', 'playful'];
let i = 0; const el = document.getElementById('type');
setInterval(() => { i = (i + 1) % words.length; el.textContent = words[i]; }, 1400);


const dots = document.querySelectorAll('.dot');
const root = document.documentElement;
dots.forEach(d => d.addEventListener('click', () => {
    const c = d.getAttribute('data-color');
    root.style.setProperty('--accent', c);

    const mix = (hex1, hex2, w = 0.5) => {
        const a = hex1.match(/\w\w/g).map(x => parseInt(x, 16));
        const b = hex2.match(/\w\w/g).map(x => parseInt(x, 16));
        const m = a.map((v, i) => Math.round(v * (1 - w) + b[i] * w));
        return '#' + m.map(v => v.toString(16).padStart(2, '0')).join('');
    }
    root.style.setProperty('--accent-2', mix(c.replace('#', ''), 'c7b6ff', .5));
}));


const themeBtn = document.getElementById('theme');
const applyTheme = () => document.documentElement.classList.toggle('dark');
themeBtn.addEventListener('click', applyTheme);


document.getElementById('file').addEventListener('change', (e) => {
    const f = e.target.files[0]; if (!f) return; document.getElementById('avatar').src = URL.createObjectURL(f);
});


const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); })
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


function demoSend(ev) { ev.preventDefault(); document.getElementById('status').textContent = '💌 Sent (demo)'; ev.target.reset(); }
window.demoSend = demoSend;