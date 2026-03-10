// 自动填充当前年份
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// 简单的平滑滚动（兼容性足够用于 GitHub Pages）
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${targetId}`);
  });
});

// 暗色模式切换
(() => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const stored = localStorage.getItem("theme");
  const theme = stored || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19";
  });
})();

