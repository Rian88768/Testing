let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `_Random Story Anime_` }, { quoted: m })
	}

handler.help = ['storyanime']
handler.tags = ['anime']
handler.command = /^(stor(i|y)a?nime|a?nimestor(i|y))$/i
handler.limit = true

export default handler

const dir = [
'https://l.top4top.io/m_2787ayfc40.mp4',
'https://telegra.ph/file/cdd18d2af8f4cb9633d37.mp4',
'https://c.top4top.io/m_2787u3o220.mp4',
'https://telegra.ph/file/6c109b4c8970ab3a87dc0.mp4',
'https://telegra.ph/file/f917f62fa927c4cfb09c9.mp4',
'https://telegra.ph/file/349f6a77b56c09dfc257e.mp4',
]
