/*
- Fitur: AI Image Upscaler (Remini)
- Info: Meningkatkan resolusi gambar menggunakan AI Upscaler API.
- Type: Plugins `ESM` & `CJS`
-  By: SkyWalker
_Dont Delete This © Credits_
- _Big Thanks For Penyedia Api_
- [ `Sumber` ]
- https://whatsapp.com/channel/0029Vb1NWzkCRs1ifTWBb13u
*/

// Import untuk ESM
import fetch from 'node-fetch'

// Import untuk CJS
// const fetch = require('node-fetch')

async function Upscale(imageBuffer) {
    try {
        const response = await fetch("https://lexica.qewertyy.dev/upscale", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_data: imageBuffer.toString("base64"), 
                format: "binary",
            }),
        })

        return Buffer.from(await response.arrayBuffer())
    } catch {
        return null
    }
}

let handler = async (m, { conn, usedPrefix, command }) => {
    conn.enhancer = conn.enhancer || {}

    if (m.sender in conn.enhancer)
        throw "❗Masih ada proses yang belum selesai. Silakan tunggu."

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!mime) throw "❗Kirim/Reply foto.";
    if (!/image\/(jpe?g|png)/.test(mime)) throw `❗ Mimetype ${mime} tidak didukung.`

    conn.enhancer[m.sender] = true
    await conn.sendMessage(m.chat, { react: { text: "🌀", key: m.key } })

    let img = await q.download?.()
    let enhancedImg = await Upscale(img)

    if (enhancedImg) {
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
        conn.sendFile(
            m.chat,
            enhancedImg,
            "",
            "Done✅",
            m
        )
    } else {
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
        m.reply("*Result:* Failed ");
    }

    delete conn.enhancer[m.sender]
}

handler.help = ["remini"]
handler.tags = ["remini"]
handler.command = /^(hd|remini)$/i

// Export untuk ESM
export default handler

// Export untuk CJS
// module.exports = handler
