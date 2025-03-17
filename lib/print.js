import { WAMessageStubType } from '@adiwajshing/baileys'
import PhoneNumber from 'awesome-phonenumber'
import chalk from 'chalk'
import { watchFile } from 'fs'

const terminalImage = global.opts['img'] ? require('terminal-image') : ''
const urlRegex = (await import('url-regex-safe')).default({ strict: false })

export default async function (m, conn = { user: {} }) {
  let senderName = await conn.getName(m.sender)
  let senderNumber = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
  let sender = `${chalk.bold.green(senderNumber)} ${senderName ? `~ ${chalk.cyan(senderName)}` : ''}`
  let chatName = await conn.getName(m.chat)
  let chat = `${chalk.bold.yellow(m.chat)} ${chatName ? `~ ${chalk.cyan(chatName)}` : ''}`
  let msgType = chalk.blue(m.mtype?.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'Audio'))
  let timestamp = chalk.magenta(new Date(m.messageTimestamp * 1000 || Date.now()).toLocaleTimeString())

  console.log(chalk.bold.white(`┌─[ ${chalk.redBright('📩 New Message')} ]`))
  console.log(`│ 👤 From: ${sender}`)
  console.log(`│ 💬 Chat: ${chat}`)
  console.log(`│ 📎 Type: ${msgType}`)
  console.log(`│ 🕒 Time: ${timestamp}`)

  if (typeof m.text === 'string' && m.text) {
    console.log(`│ 📄 Message: ${chalk.white(m.text)}`)
  }

  console.log(chalk.bold.white(`└───────────────`))
}

let file = global.__filename(import.meta.url)
watchFile(file, () => {
  console.log(chalk.redBright("Update 'lib/print.js' detected!"))
})