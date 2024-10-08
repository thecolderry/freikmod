require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client({
    intents: [
        "MessageContent",
        "GuildPresences",
        "GuildMembers",
        "Guilds",
    ]
});

client.on("ready", rc => {
    console.info(`${rc.user.username} is active.`);
    require("./fn/lishandle").addClientListeners(rc);
});

client.login(process.env.APP_TOKEN);