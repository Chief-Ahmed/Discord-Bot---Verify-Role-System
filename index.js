const Discord = require('discord.js');

const unverify_role = 'Your Unverified RoleID Here';
const verify_role = 'Your Verified RoleID Here';

const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == "!verify"){
        message.member.roles.add(verify_role);
    }

});

bot.login('Your Bot Code Here');