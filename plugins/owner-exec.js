import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1


  let logOutput = []
  

  const originalConsoleLog = console.log
  console.log = (...args) => {
    let logMessage = format(...args)
    logOutput.push(logMessage)
    originalConsoleLog(logMessage)
  }

  try {
    let i = 15
    let f = { exports: {} }

    let exec = new (async () => { }).constructor(
      'print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument',
      _text
    )

    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      let logMessage = format(...args)
      logOutput.push(logMessage)
      return logMessage
    }, m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])


    if (_return instanceof Promise) {
      _return = await _return
    }

  } catch (e) {
    let err = syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      sourceType: 'module'
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {

    console.log = originalConsoleLog


    let finalOutput = (logOutput.length ? logOutput.join('\n') + '\n\n' : '') + format(_return)


    if (!finalOutput.trim()) finalOutput = '*Tidak ada output.*'

    conn.reply(m.chat, _syntax + finalOutput, m)
    m.exp = old
  }
}

handler.help = ['> ', '=> ']
handler.tags = ['advanced']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = true

export default handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}
