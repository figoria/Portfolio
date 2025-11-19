// scrollHelper.js
export function SlowScroll(id, duration = 600) {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const target = document.getElementById(id);
    if (!target) return;

    const end = target.getBoundingClientRect().top + window.scrollY;
    const start = window.scrollY;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuad(progress);
        window.scrollTo(0, Math.round(start + distance * eased));
        if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
}
