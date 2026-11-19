import { useEffect, useRef } from "react";

export function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const color = getComputedStyle(document.documentElement).getPropertyValue("--primary-glow").trim() || "#4aa3ff";
    let w = 0, h = 0, raf = 0;
    const pts = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0004, vy: (Math.random() - 0.5) * 0.0004 }));
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x = (p.x + p.vx + 1) % 1; p.y = (p.y + p.vy + 1) % 1;
      }
      ctx.strokeStyle = color; ctx.fillStyle = color;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]!;
        ctx.globalAlpha = 0.7;
        ctx.beginPath(); ctx.arc(a.x * w, a.y * h, 1.6, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]!;
          const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h);
          if (d < 140) {
            ctx.globalAlpha = (1 - d / 140) * 0.25;
            ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
