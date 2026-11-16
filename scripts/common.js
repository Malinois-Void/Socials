const lightbox = document.getElementById("lightbox");

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function placeholderStyle(i) {
    const hue = (i * 57) % 360;
    return `background: linear-gradient(135deg, hsl(${hue} 70% 65%), hsl(${(hue + 60) % 360} 70% 55%));`;
}

function makeVisual(item, i, className = "") {
    if (item.src) {
        const img = el("img", className);
        img.src = item.src;
        img.alt = item.title || "Photo " + (i + 1);
        img.loading = "lazy";
        img.decoding = "async";
        return img;
    }
    const div = el("div", (className + " placeholder").trim());
    div.setAttribute("style", placeholderStyle(i));
    return div;
}

function makeCard(item, i) {
    const card = el("button", "card");
    card.type = "button";
    const cap = el("div", "caption");
    cap.append(el("div", "title", item.title));
    if (item.details)     cap.append(el("div", "details", item.details));
    if (item.description) cap.append(el("div", "desc", item.description));
    card.append(makeVisual(item, i, "thumb"), cap);
    card.onclick = () => openLightbox(item, i);
    return card;
}

function renderSections(container, items, { key, order = [], titles = {}, gridClass, makeItem }) {
    const groups = new Map(order.map(k => [k, []]));
    items.forEach((item, i) => {
        const k = key(item);
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push({ item, i });
    });

    const filled = [...groups].filter(([, list]) => list.length);
    filled.forEach(([k, list]) => {
        const section = el("section", "category");
        if (filled.length > 1) section.append(el("h2", "", titles[k] || k));
        const grid = el("div", gridClass);
        list.forEach(({ item, i }) => grid.append(makeItem(item, i)));
        section.append(grid);
        container.append(section);
    });
}

function openLightbox(item, i) {
    const visual = makeVisual(item, i, "lb-media");
    visual.loading = "eager";
    lightbox.replaceChildren(visual);
    if (item.title) lightbox.append(el("p", "lb-title", item.title));
    [item.details, item.description].forEach(t => t && lightbox.append(el("p", "lb-desc", t)));
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
}

lightbox.onclick = closeLightbox;
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });