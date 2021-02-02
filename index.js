const Discord = require('discord.js')
const client = new Discord.Client()
function bot(token, prefix) {
if(token == null) {
console.log('bote um token pro bot')
} else {
if(prefix == null || prefix.lenght <= 10) {
prefix="@"
}
let arq = require('./src/bot.js')
arq.run(token, prefix, client)
}
}