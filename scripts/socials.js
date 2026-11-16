const links = [
    { label: "TikTok",    url: "https://www.tiktok.com/@malinois_void" },
    { label: "Instagram", url: "https://www.instagram.com/malinois_void" },
    { label: "YouTube",   url: "https://youtube.com/@malinois_void" },
    { label: "Twitch",    url: "https://www.twitch.tv/malinois_void" },
];

const box = document.getElementById("links");
if (box) {
    links.forEach(l => {
        const a = document.createElement("a");
        a.className = "link";
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = l.label;
        box.append(a);
    });
}