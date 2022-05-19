let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] Report/Request Minimal 𝟷0 caracter!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] Report/Request Maksimal 𝟷000 Caracter!*`
let teks = `*❒═════[REPORT/REQUEST]═════❒*\n*┬*\n*├❧ NOMER:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ LAPORAN/REQUEST:* ${text}\n*┴*`
conn.reply('628884357769@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] Laporan/Request An Anda Sudah Di Kirim Ke Owner Terima Kasih*`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['main']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
