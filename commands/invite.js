const Discord = require ("discord.js")
module.exports = {
  name: ["invite", "inv"],
  run: (client, message, args) => {
  let embed = new Discord.MessageEmbed()

.setColor("RED")  
    .setThumbnail(message.author.displayAvatarURL())
.setTitle(`Invite Link:`)
  .setDescription("**[invite the bot here](https://discord.com/api/oauth2/authorize?client_id=920679212271145010&permissions=412384491585&scope=bot)**")
   .setFooter(`Don't forget to join our server`)
  message.channel.send({embeds:[embed]})
  }  
}  
