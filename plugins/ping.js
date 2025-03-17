import os from 'os';
import si from 'systeminformation';
import prettyMs from 'pretty-ms';
import fs from 'fs';

let handler = async (m, { conn }) => {
    try {
        let who = m.mentionedJid && m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.fromMe 
                ? conn.user.jid 
                : m.sender;

        let username = conn.getName(who);
        let timestampStart = Date.now();

        // Ambil informasi yang aman saja
        let [mem, disk, osInfo] = await Promise.all([
            si.mem(),
            si.fsSize(),
            si.osInfo()
        ]);

        let timestampEnd = Date.now();
        let latensi = timestampEnd - timestampStart;

        let uptimeBot = process.uptime();
        let totalDisk = disk.reduce((acc, d) => acc + d.size, 0);
        let usedDisk = disk.reduce((acc, d) => acc + d.used, 0);

        let message = `♻️ *Mengambil data...*\n\n`;
        message += `📟 *OS:* ${osInfo.distro} ${osInfo.release} (${osInfo.platform}/${osInfo.arch})\n`;
        message += `🔋 *RAM:* ${(mem.used / 1024 / 1024).toFixed(2)}MB / ${(mem.total / 1024 / 1024).toFixed(2)}MB\n`;
        message += `💾 *Disk:* ${(usedDisk / 1024 / 1024 / 1024).toFixed(2)}GB / ${(totalDisk / 1024 / 1024 / 1024).toFixed(2)}GB\n`;
        message += `🤖 *Uptime Bot:* ${prettyMs(uptimeBot * 1000)}\n`;
        message += `⚡ *Kecepatan Respons:* ${latensi} ms\n`;

        let fkon = {
            key: {
                fromMe: false,
                participant: '0@c.us',
                ...(m.chat ? { remoteJid: 'status@broadcast' } : {})
            },
            message: {
                contactMessage: {
                    displayName: username,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${username};;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                    thumbnail: fs.readFileSync('./thumbnail.jpg'),
                    sendEphemeral: true
                }
            }
        };

        conn.sendMessage(m.chat, { text: message }, { quoted: fkon });
    } catch (err) {
        conn.sendMessage(m.chat, { text: `❌ Terjadi kesalahan: ${err.message}` });
    }
};

handler.help = ['ping', 'speed', 'status'];
handler.tags = ['info'];
handler.command = ['ping', 'speed', 'status'];

export default handler;
