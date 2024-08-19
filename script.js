
const agents = [
    { name: "Jett", image: "images/Jett.png" },
    { name: "Phoenix", image: "images/Phoenix.png" },
    { name: "Sage", image: "images/Sage.png" },
    { name: "Sova", image: "images/Sova.png" },
    { name: "Brimstone", image: "images/Brimstone.png" },
    { name: "Viper", image: "images/Viper.png" },
    { name: "Cypher", image: "images/Cypher.png" },
    { name: "Reyna", image: "images/Reyna.png" },
    { name: "Killjoy", image: "images/Killjoy.png" },
    { name: "Breach", image: "images/Breach.png" },
    { name: "Omen", image: "images/Omen.png" },
    { name: "Raze", image: "images/Raze.png" },
    { name: "Skye", image: "images/Skye.png" },
    { name: "Yoru", image: "images/Yoru.png" },
    { name: "Astra", image: "images/Astra.png" },
    { name: "KAY/O", image: "images/Kayo.png" },
    { name: "Chamber", image: "images/Chamber.png" },
    { name: "Neon", image: "images/Neon.png" },
    { name: "Fade", image: "images/Fade.png" },
    { name: "Harbor", image: "images/Harbor.png" },
    { name: "Gekko", image: "images/Gekko.png" },
    { name: "Iso", image: "images/Iso.png" },
    { name: "Clove", image: "images/Clove.png" },
    { name: "DeadLock", image: "images/Deadlock.png" },
];

function generateAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    const randomAgent = agents[randomIndex];
    
    document.getElementById("agentDisplay").innerText = randomAgent.name;
    const agentImage = document.getElementById("agentImage");
    agentImage.src = randomAgent.image;
    agentImage.style.display = "block";  
}
