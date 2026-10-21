const avatarSrc = new URL("../photos/pfp.jpg", document.currentScript.src).href;

const links = [
    { label: "TikTok",    url: "https://www.tiktok.com/@malinois_void" },
    { label: "Instagram", url: "https://www.instagram.com/malinois_void" },
    { label: "YouTube",   url: "https://youtube.com/@malinois_void" },
    { label: "Twitch",    url: "https://www.twitch.tv/malinois_void" },
    { label: "Telegram",  url: "https://t.me/Malinois_void" }
];

if (avatarSrc) {
    const avatar = document.getElementById("avatar");
    const img = document.createElement("img");
    img.alt = "Profile picture";
    img.onload = () => avatar.replaceChildren(img);
    img.onerror = () => console.error("Avatar failed to load:", img.src);
    img.src = avatarSrc;
}

const box = document.getElementById("links");
links.forEach(l => {
    const a = document.createElement("a");
    a.className = "link";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label;
    box.append(a);
});