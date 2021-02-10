const { Command } = require('discord-akairo');
const now = new Date();

class HelpCommand extends Command {
    constructor() {
        super('commands', {
            aliases: ['commands', 'help'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const embed = this.client.util.embed()
        const prefix = message.guild.prefix;
         
        embed.setColor("609131")
        embed.setThumbnail(message.author.avatarURL({ dynamic: "true" }))
        embed.setFooter(message.author.username,`https://cdn.discordapp.com/emojis/771689685579333673.gif?v=1`)
        embed.setTimestamp()
        embed.setDescription(`
━────╮•╭────━
**:shield:|Security Commands❗**
f/settings
f/logs
━────╮•╭────━
**:gear:|Public Commands❗**
f/invite
f/support
f/about
f/user
━────╮•╭────━
**:zap:|Moderation Commands❗**
 f/lock, f/unlock
 f/slowmode, f/nick
 f/mute, f/unmute
 f/ban, f/kick
__**[Fuck Society](https://discord.gg/NRzJCsXEr5)** __ -  __**[invite](https://discord.com/api/oauth2/authorize?client_id=743085172085358683&permissions=8&scope=bot)**__ 
`);
        
      const info = [`**[Direct Invite Link](https://discord.com/api/oau.png")
       embed.addField("https://cdn.discordapp.com/attachments/717616425040347166/717625089683881994/0e0a86th2/authorize?client_id=713590806501392474&permissions=8&scope=bot)**`];
        message.channel.send(embed);

    }
}

module.exports = HelpCommand
