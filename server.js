const Eris = require("eris");
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on("ready", () => {                                // When the bot is ready
    console.log("Ready!");                             // Log "Ready!"
});
 
bot.on("messageCreate", (msg) => {                     // When a message is created
    if(msg.content.includes("!timebot")) {             // If the message content includes "1337"
        bot.createMessage(msg.channel.id,              
            "Now is the winter of our discontent\n" +
            "Made glorious summer by this sun of York\n" +
            "And all the clouds that lour'd upon our house\n" +
            "In the deep bosom of the ocean buried.");
    }
});
 
bot.connect();                                         // Get the bot to connect to Discord