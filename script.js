
const agents = [
    { name: "Jett", image: "images/Jett.png", bgColor: "#7EC8E3" },
    { name: "Phoenix", image: "images/Phoenix.png", bgColor: "#FF4500" }, 
    { name: "Sage", image: "images/Sage.png", bgColor: "#C6E2FF" }, 
    { name: "Sova", image: "images/Sova.png", bgColor: "#4682B4" }, 
    { name: "Brimstone", image: "images/Brimstone.png", bgColor: "#B22222" }, 
    { name: "Viper", image: "images/Viper.png", bgColor: "#556B2F" }, 
    { name: "Cypher", image: "images/Cypher.png", bgColor: "#808080" }, 
    { name: "Reyna", image: "images/Reyna.png", bgColor: "#800080" }, 
    { name: "Killjoy", image: "images/Killjoy.png", bgColor: "#FFD700" }, 
    { name: "Breach", image: "images/Breach.png", bgColor: "#CD5C5C" },
    { name: "Omen", image: "images/Omen.png", bgColor: "#4B0082" }, 
    { name: "Raze", image: "images/Raze.png", bgColor: "#FFA500" }, 
    { name: "Skye", image: "images/Skye.png", bgColor: "#66CDAA" }, 
    { name: "Yoru", image: "images/Yoru.png", bgColor: "#00008B" }, 
    { name: "Astra", image: "images/Astra.png", bgColor: "#9400D3" }, 
    { name: "KAY/O", image: "images/Kayo.png", bgColor: "#2F4F4F" },
    { name: "Chamber", image: "images/Chamber.png", bgColor: "#B0C4DE" }, 
    { name: "Neon", image: "images/Neon.png", bgColor: "#1E90FF" }, 
    { name: "Fade", image: "images/Fade.png", bgColor: "#708090" }, 
    { name: "Harbor", image: "images/Harbor.png", bgColor: "#4682B4" }, 
    { name: "Gekko", image: "images/Gekko.png", bgColor: "#ADFF2F" }, 
    { name: "Iso", image: "images/Iso.png", bgColor: "#483D8B" }, 
    { name: "Clove", image: "images/Clove.png", bgColor: "#800080" }, 
    { name: "DeadLock", image: "images/Deadlock.png", bgColor: "#696969" }, 
];

function generateAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    const randomAgent = agents[randomIndex];
    
    document.getElementById("agentDisplay").innerText = randomAgent.name;
    const agentImage = document.getElementById("agentImage");
    agentImage.src = randomAgent.image;
    agentImage.style.display = "block";  

    document.body.style.backgroundColor = randomAgent.bgColor;
    document.body.style.color = randomAgent.bgColor === "#00008B" ? "white" : "black";

}
