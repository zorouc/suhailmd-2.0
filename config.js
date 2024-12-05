const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348052883309";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_30_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIms2a1hNYXZvM2xwU3NVMmUwZzVib1I5SmJuNXNzWjZNNXF5eW9MaEhZYUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA1Mjg4MzMwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Q2NjI5NjNBQUNFRDE5NDdFNTBFMUU0NTM5QjBBNDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDIzNDU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjN6THY0dEVaUnFXWkU1WEhHbGtjM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODIxYWY3NDAtNzM3Yi00NzZmLTg4ZmMtMGYwYjM0YjkyNDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDE1OSxcbiAgICAgIDEsXG4gICAgICA2MSxcbiAgICAgIDg4LFxuICAgICAgNTksXG4gICAgICAxMCxcbiAgICAgIDE3OSxcbiAgICAgIDIwNixcbiAgICAgIDE1LFxuICAgICAgMjEyLFxuICAgICAgNjQsXG4gICAgICAxMDcsXG4gICAgICAyMzgsXG4gICAgICAxNDQsXG4gICAgICAxOTgsXG4gICAgICAxMTMsXG4gICAgICAxMTYsXG4gICAgICA1NCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAzNSxcbiAgICAgIDE2MyxcbiAgICAgIDExOCxcbiAgICAgIDE1OCxcbiAgICAgIDE3MSxcbiAgICAgIDgyLFxuICAgICAgMjM5LFxuICAgICAgMTgxLFxuICAgICAgMTExLFxuICAgICAgMTM3LFxuICAgICAgMTAyLFxuICAgICAgMTYwLFxuICAgICAgMjI3LFxuICAgICAgMjA3LFxuICAgICAgMTIyLFxuICAgICAgMTQ0LFxuICAgICAgMTc5LFxuICAgICAgMTc0LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTU5MWjM1MzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNTI4ODMzMDk6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNQURBUkFcIixcbiAgICBcImxpZFwiOiBcIjYzMjQ3OTIzMzE0ODc4OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxdGtVQVExZUxIdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXpodGJSQmh2K0ZvK2xwWTZYMzBvWm9aV21aYzFuejJkWjJ6ejl1dy95cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtMmdzZGt0NjNaaXpJQ1FjUk9JNDR2WkFCMzNXNTk4RmZsK0pnQ0xzWFdNMklNMmNpd3ZaU1VTK3BsSmVjU0FPSFJtMXFqVWlXZ1laZXJIdGtaN0lCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjVGllNGZYRU1QRXJ6TkdWWUtVRlExK3Jwb3JEeUs1bDc5dlk1c2ZhQTdiQUtKYmw4U0hQZzZmZzgwbmd3QXoxUUdFdkJuNnB2bjhXN0JtMnlGNk9EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDUyODgzMzA5OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDIzNDQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjc5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFONzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKaDl5ZHNkOEczYVZlQy8wWXRXeFdlV1ZGOGxPTllESTB6bnliQ3dDTG9ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDUwMjA0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDIzNDUzMDU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
