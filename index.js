const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"],
   })
const pokename = require(`./pokename.js`)
const owner = {id: "799976614255263765"}
//const Canvas = require(`canvas`)
const online_emoji = "🟢";
client.on('ready', async () => {
   /* const chnl = client.channels.cache.get("953634800474927155")
  const onlnmsg = 
`${online_emoji} `+"**Bot is online** "+`${online_emoji}`+"\n**STATUS**\n**Servers :**"+" `"+`${client.guilds.cache.size}`+"`\n"+"**Usertag :**"+"`"+`${client.user.tag}`+"`\n"+"**UserID :**"+"`"+`${client.user.id}`+"`"
  chnl.send(onlnmsg) */
 client.user.setActivity(`in ${client.guilds.cache.size} servers`, {type: 'PLAYING' })
})
app.listen(3000, () => {
    console.log("Bot is online")
      })
    let picked = null
app.get(`/`, (req, res) => {
  res.send("Hello")
})
const fs = require(`fs`);
client.commands = new Discord.Collection()
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${commandName}`);

    // Check if command.name is an array, if not, convert it to an array
    const names = Array.isArray(command.name) ? command.name : [command.name];

    // Set multiple command names for the command
    for (const name of names) {
        client.commands.set(name, command);
    }
}
  client.on("messageCreate", async message => {
    let prefix = "."
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    console.log(args)
    const mentions = message.mentions.members.first()
if(message.author.id === "799976614255263765" && message.content.toLowerCase() === "p!dev list") {
}

      let badge = await db.get(`Badge_${message.author.id}`) || {badge: []}
    /* if(prefix === null) await db.set(`prefix_${message.guild.id}`, "P!");
    
    if(message.content.toLowerCase().startsWith(`${prefix.toLowerCase()}prefix`)) {
    if(!message.member.permissions.has(`ADMINISTRATOR`) || message.author.id != "799976614255263765") return message.channel.send(`Only Admins can run this command`)
      if(!args[1]) return message.channel.send(`Type a word or symbol to set as prefix.`)
         if(args[2]) return message.channel.send(`Type only one word to set as prefix.`)
   let prefixword2 = await args[1].slice(1).trim().split(/ +/g)
      let prefixword1 = await args[1].slice(0, prefixword2.length).trim().split(/ +/g)
    let beforeprefix = await prefixword1.join().toUpperCase() + prefixword2.join().toLowerCase()
      if(args[1].length === 1) beforeprefix = args[1].toUpperCase();   
    await db.set(`prefix_${message.guild.id}`, beforeprefix)
      await message.channel.send(`The prefix for this server has been set to "`+beforeprefix+`"`)
   } */
    if(message.mentions.has(client.user)) {
      message.channel.send(" My prefix for this server is "+"`"+`${prefix}`+"`").then(m => {
  setTimeout(() => {
  m.delete()
  }, 3000)
  })
    }
    if(message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
      const commandName = args.shift().toLowerCase()
      const command = client.commands.get(commandName)
      if(!command) return
      command.run(client, message, args)
        }
        })
client.login(process.env.token)
