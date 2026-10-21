const navLinks = [
    { label: "Connect with me", path: "index.html" },
    { label: "Recognize me",    path: "pages/cosplay_fursuits.html" },
];

(function () {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const root = new URL("../", document.currentScript.src);
    const clean = p => p.replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
    const here = clean(location.pathname);

    navLinks.forEach(item => {
        const url = new URL(item.path, root);
        const a = document.createElement("a");
        a.href = url.href;
        a.textContent = item.label;
        if (clean(url.pathname) === here) {
            a.className = "active";
            a.setAttribute("aria-current", "page");
        }
        nav.append(a);
    });
})();