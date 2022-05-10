const Discord = require("discord.js")

const TOKEN = "OTczNTA2NjA1ODMwMjYyODI2.Gr2KfT.cqaFvsU1lbu-k-idGWksuNH2_xQBJZh-7jF6nM"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",()=>{
    console.log(`Logg in as ${client.user.tag}`)
})

client.on("messageCreate",(message)=>
{
    if(message.content=="hi")
    {
        message.reply("welcome")
    }
});

client.login(TOKEN);