const Eris = require("eris");

var owner = "Cygnatus",
    description = "Return the current time in three timezones.";

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {}, {
  "description": description,
  "ow"
});

bot.on("ready", () => {                              
    console.log("Ready!");                           
});

// When a message is created
bot.on("messageCreate", (msg) => { 
    if(msg.content.includes("!timebot")) { // that reads "!timebot"
        bot.createMessage(msg.channel.id,
            "Now is the winter of our discontent\n" +
            "Made glorious summer by this sun of York\n" +
            "And all the clouds that lour'd upon our house\n" +
            "In the deep bosom of the ocean buried.");
    }
});

bot.connect();                                       // Connect to server (Discord)