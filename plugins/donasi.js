let handler =  m => m.reply(` ❰𝙮𝙖𝙣𝙯𝙗𝙤𝙩❱
┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [0812-5893-0466]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Gopay:* [0812-5893-0466]
❏────
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
