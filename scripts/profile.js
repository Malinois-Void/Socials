const avatarSrc = new URL("../photos/pfp.jpg", document.currentScript.src).href;

if (avatarSrc) {
    const avatar = document.getElementById("avatar");
    if (avatar) {
        const img = document.createElement("img");
        img.alt = "Profile picture";
        img.onload = () => avatar.replaceChildren(img);
        img.onerror = () => console.error("Avatar failed to load:", img.src);
        img.src = avatarSrc;
    }
}