const costumes = [
    { type: "Fursuit",
        title: "Void",
        src: "",
        details: "Malinois x Alligator",
        description: "My main suit (WIP)" },
    { type: "Fursuit",
        title: "Fenrir",
        src: "",
        details: "... wolf",
        description: "partial second suit" }
];

renderSections(document.getElementById("costumes"), costumes, {
    key: c => c.type,
    order: ["Cosplay", "Fursuit"],
    titles: { Cosplay: "Cosplays", Fursuit: "Fursuits" },
    gridClass: "cards",
    makeItem: makeCard
});