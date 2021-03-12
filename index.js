require('dotenv').config();
require("events").EventEmitter.defaultMaxListeners = 200;
;
const GuardianClient = require('./core/client.js');
const client = new GuardianClient();
client.on("ready", async () => {
  console.log(`${client.user.username} Ready .`);
  console.log(`${client.guilds.cache.size} Servers .`);
  console.log(`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users .`);
 client.user.setStatus("invisible")
  client.user.setActivity("f/help |Fsociety Is Here", {
    type: "PLAYING"
  });
});



const Discord = require('discord.js')
    const { RichEmbed  } = require('discord.js')
   
    
    



const cooldown = new Set();
const cdtime = 10;

 const prefix = "f/";
client.on("message", async message => {
  if (message.content.startsWith(prefix+"help")) {
   if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**")

    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(message.author.username, message.author.AvatarURL)
     
      .setThumbnail(message.author.avatarURL())
      .setTitle(`The Command List Of Bot`)
      .setDescription(`
     ━────╮•╭────━
**📘┊Info Commands :** 
\`f/user\`
\`f/support\`
\`f/invite\`
\`f/about\`
━────╮•╭────━
**:zap:┊Admin Commands :**
\`f/lock\` 
\`f/unlock\` 
\`f/lock all\` 
\`f/unlock all\`
\`f/clear\`
\`f/ban\` : @User
\`f/kick\`: @User
\`f/nick\`: @User
\`f/mute\`: @User
\`f/unmute\`: @User 
\`f/slowmode\`: [Number]
━────╮•╭────━
**:shield:┊Security Commands :**
\`f/settings\` 
\`f/logs\` 
[Support](https://discord.gg/robot) - [invite bot](https://discord.com/api/oauth2/authorize?client_id=743085172085358683&permissions=8&scope=bot) - [Website](https://fsociety-bot4700.glitch.me)
`);

    message.channel.send(help);
  }
});
client.on("message", message => {
if(message.content.startsWith(prefix + 'servers')) {
message.reply(`I am in  ${client.guilds.cache.size} Servers ${client.users.cache.size} Users` );


}});
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "invite") {
     if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**")

    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("** | Sorry This Command Only For Servers .**");
     let embed = new Discord.MessageEmbed()
       .setTitle(":link: Links")
      .addField(`:homes:`,`[ Support Server](https://discord.gg/robot)` )
      
    . addField(`:envelope_with_arrow:`,`[ Invite Me](https://discord.com/api/oauth2/authorize?client_id=743085172085358683&permissions=8&scope=bot)`)
     .setColor("#00000")
      .setThumbnail(message.author.avatarURL())
      
       .setFooter(`${message.author.tag}`, message.author.avatarURL())
      .setTimestamp()

        message.channel.send({ embed });
  }
});

client.on("message", message => {
  if (message.content === prefix + "about") {
    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
       "** | Sorry This Command Only For Servers .**"
      );
    let embed = new Discord.MessageEmbed()
      
        .setTitle("Click Here To Add " + `${client.user.username}` )
         .setURL("https://discordapp.com/oauth2/authorize?client_id=" +`${client.user.id}` +"&scope=bot&permissions=2080374975")

      .setDescription(`
•••••
🔳 **Servers** : ${client.guilds.cache.size}
•••••
🔰 **Users** : ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
•••••
🚦 **Channels** : ${client.channels.cache.size}
•••••`
      )
      .setColor("#0000")
      .setThumbnail(message.author.avatarURL())
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
     const lock = new Discord.MessageEmbed()
     
      .setColor("#00000")
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ❌
`
      )
      .setThumbnail(message.author.avatarURL())
     .setFooter(`${message.author.tag}`, message.author.avatarURL())
          .setTimestamp()

    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor("#00000")
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ✅
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
client.on("message", msg => {
 if (!msg.channel.guild)
       return msg.channel.send("");
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!msg.channel.guild) return;
    msg.delete();
 const here = new Discord.MessageEmbed()
      .setColor("#00000")
      .setDescription(
        `❌ | **Deleted Message**
**Channel Name** : <#${msg.channel.id}>
**Message By** : <@${msg.author.id}>
**Reason** : Send Everyone : ❌
`
      )
      .setThumbnail(msg.author.avatarURL())
       .setTimestamp()     
 .setFooter(`${msg.author.tag}`, msg.author.avatarURL())
          .setTimestamp()

 msg.channel.send(here);
  

  }
  
});
// ======== { • anti here • }======== //
client.on("message", msg => {
 if (!msg.channel.guild)
       return msg.channel.send("");
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    const here = new Discord.MessageEmbed()
      .setColor("#00000")
      .setDescription(
        `❌ | **Deleted Message**
**Channel Name** : <#${msg.channel.id}>
**Message By** : <@${msg.author.id}>
**Reason** : Send Here : ❌
`
      )
      .setThumbnail(msg.author.avatarURL())
      .setFooter(`${msg.author.tag}`, msg.author.avatarURL())
         .setTimestamp()

    msg.channel.send(here);


  }
});
    
 
client.on("message", async message => {
  if (message.content.startsWith(prefix + "support")) {
     if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let invite = new Discord.MessageEmbed()
      .setColor("#00000")
      .setFooter(client.user.username)
      .setImage( "https://media.discordapp.net/attachments/731655759519154230/732012564984102973/ImpracticalFearfulEsok-size_restricted_1.gif")
      .setTitle(
        "**__CLICK HERE TO  SUPPORT SERVER__**"
      )
      .setURL(
        `https://discord.gg/robot`)
   .setTimestamp()
         .setTimestamp()

    message.channel.send(invite);
  message.react("✅");
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setColor("RANDOM")
          .setThumbnail(message.author.avatarURL)
           .setFooter(message.author.username,  `https://cdn.discordapp.com/emojis/771689685579333673.gif?v=1`
)
          .setTimestamp()

          .setDescription(
            "**User**: ```" +
              user.username +
              "```\n**By**: ```" +
              message.author.username +
              "```\n**Nickname**: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
   
    var professor = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setColor("#0c0b0b")
      .setTitle("Your Info User")
      .addField(" ▶️| Your Name", `<@${prof.author.id}>`)
      .addField(" 🆔| Your ID", `${prof.author.id}`)
      .addField(" 🌐| Create User", prof.author.createdAt.toLocaleString())
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});
client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**❌ ${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**✅ removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});
client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed ${user.user.tag} from the server! :airplane: **`
        )
      )
      .catch(console.error);
  }
});

client.on("ready", () => {
  let BotOnline = client.channels.cache.get("808742150467878922");

  let online = new Discord.MessageEmbed()
    .setColor("GREEN")
    .addField(
      "**Fsociety Is Online**",
      `
•••••
:green_circle: **Status  : Online**
•••••
❄ **Prefix :  ${prefix}**
•••••
🔳 **Servers** : ${client.guilds.cache.size}
•••••
🔰 **Users** : ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
•••••
🚦 **Channels** :  ${client.channels.cache.size}
•••••
    
    `
    )
    .setThumbnail(
      `https://cdn.discordapp.com/emojis/771689685579333673.gif?v=1`
    )
    .setTimestamp();
  BotOnline.send(online).then(message => {
    message.react("🟢");
    message.react("⚡");
   message.react("❄");
  });
});
client.on("guildCreate", guild => {
   let channel = client.channels.cache.get("808742173573906472");
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`Joined!`)
    .setDescription(`
 **Name server: ${guild.name} **
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id} **
**member count ${guild.memberCount}**
**Created at: ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
**thanks for invite bot  🤖 **
    `);
channel.send(embed);

});
client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("808742173573906472");
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Kicked!`)
    .setDescription(`
**Name server: ${guild.name}**
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id}**
**member count: ${guild.memberCount}**
**Created at : ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
   ` );
 channel.send(embed);
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "bot list")) {
    var list_all = [];
    message.guild.members.cache.forEach(client => {
      if (!client.user.bot) return;
      list_all.push(`<@${client.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "lock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
      
      });
    });
    msg.channel.send("🔒 | All Channels Locked");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unlock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
      
      });
    });
    msg.channel.send("🔓 | All Channels Unlocked");
  }
});
client.login("NzQzMDg1MTcyMDg1MzU4Njgz.XzPh_g.cmd9JMdy1TeAosGD3c_SyM4vHOk");
