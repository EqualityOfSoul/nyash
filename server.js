const Eris = require("eris");
const moment = require("moment-timezone");

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {}, {
  "description": "Return the current time in three timezones.",
  "owner": "Cygnatus",
  "prefix": "!"
});

bot.on("ready", () => {                              
    console.log("Ready!");                           
});

// When a message is created
bot.on("messageCreate", (msg) => { 
    if(msg.content.includes("!timebot")) { // that reads "!timebot"
        bot.createMessage(msg.channel.id,
            moment().tz("Europe/Copenhagen").format("HH:mm z") + "\n" +
            "Made glorious summer by this sun of York\n" +
            "And all the clouds that lour'd upon our house\n" +
            "In the deep bosom of the ocean buried.");
    }
});

bot.connect(); // Connect to server (Discord)