import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://www.teknoredaksi.com/wp-content/uploads/2024/04/2a90a89df0ea59aa6dde4eb8dcfdd97a.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
                //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf", "application/vnd.android.package-archive", "application/zip"])
		global.pic = hwaifu.getRandom()
		global.fla = flaaa.getRandom()
                global.social = pickRandom([global.sgh, global.sig, global.snh, global.sgc]) 

		// Module 
		global.fetch = (await import('node-fetch')).default

                // Function
                global.pickRandom = function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

                global.getBuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

		const _uptime = process.uptime() * 1000
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400'
         
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				externalAdReply: {
                    showAdAttribution: true,
					title: '',
					body: 'Skyport-MD', 
					mediaUrl: '',
					description: '', 
					previewType: "PHOTO",
					thumbnail: await (await fetch(pic)).buffer(),
					sourceUrl: ''			
				}
			}
		}
                global.flocation = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: name,
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
		global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": name,
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": wm
						}
					}
				}
			}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: global.sig,
            mediaType: "VIDEO",
            description: global.sig, 
            title: name,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
    }
    } }
global.fakefb = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Facebook.com/zuck",
            mediaType: "VIDEO",
            description: "https://www.Facebook.com/zuck", 
            title: wm3,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sgc
    }
    } }
		// Fake ðŸ¤¥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2023, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
               
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":name,
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Furina Ai Terverifikasi oleh WhatsApp","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "KyzuuXFurinn","h": wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": wm, //Terserah Di Isi apa
                           "description": wm3, 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           "documentMessage": {
                           "title": wm, 
                           "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
                    global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285736178354-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Kawan Furina", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: pic,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
				}
			}
		}
		global.fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: pic,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
						viewOnce: true
					}
				}
			}
       
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
                                      // Random Pick Fake
                             let pft = [global.fimg, global.flocation, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
			                   // Get Random
		                     global.fakes = pft.getRandom()
		                     global.fkon = pft.getRandom()
	}
}

export default handler 

function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌌"
	if(time >= 1) {
		res = "sᴇʟᴀᴍᴀᴛ ᴅɪɴɪ ʜᴀʀɪ 🌌"
	}
	if(time >= 4) {
		res = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ⛅"
	}
	if(time > 10) {
		res = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌅"
	}
	if(time >= 15) {
		res = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ 🌇"
	}
	if(time >= 18) {
		res = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌃"
	}
	return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
		 }
