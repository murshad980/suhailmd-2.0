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
global.caption = process.env.CAPTION || global.caption || "Shahid king" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_03_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5RnhKanAybnlIYXZZWVV4UWV0Ujh3MFJHKzF1VmFQQUgxdkNQSU5CSnNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWb1lpVE52S1JWT0U5LWltYUtyRjJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjOTQzZmYxLWU2YjMtNGM4Mi05NDg3LTI5NTJlYTMyOWFjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDIsXG4gICAgICAxMzYsXG4gICAgICA1NyxcbiAgICAgIDc1LFxuICAgICAgMTY4LFxuICAgICAgNjgsXG4gICAgICA5NyxcbiAgICAgIDI1LFxuICAgICAgNDgsXG4gICAgICAxODMsXG4gICAgICA5NyxcbiAgICAgIDEyLFxuICAgICAgMTYwLFxuICAgICAgMjIzLFxuICAgICAgNDgsXG4gICAgICAyNDAsXG4gICAgICA5NSxcbiAgICAgIDEwOSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDExOCxcbiAgICAgIDE3MCxcbiAgICAgIDEyMyxcbiAgICAgIDE0NyxcbiAgICAgIDIzMixcbiAgICAgIDc0LFxuICAgICAgMjE2LFxuICAgICAgODcsXG4gICAgICA4MSxcbiAgICAgIDIxOSxcbiAgICAgIDgxLFxuICAgICAgMjI5LFxuICAgICAgMTc0LFxuICAgICAgMTAxLFxuICAgICAgMTEsXG4gICAgICA3NixcbiAgICAgIDIyNyxcbiAgICAgIDksXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU1YRUZUOFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwNTQ1ODc2NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWklMTFlcIixcbiAgICBcImxpZFwiOiBcIjE1NzI2MDY5NzMyNTY4MTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iZm42UUhFTUt0bExzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTRMdktZSldjdDZmQjkwUkcvemh2SGUybFpqaUVUdGxmbXordVJNSnJWUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYRnVCWHBmQThQd0JVUGNaSktkT1pHeXpONS9XTjN3d0dKaGFHN2YyUFRXb2lML052SUJHVi9TWVhPK2hvYW04b2ZiZjUyUmN5VXVZNTZOakpvMUpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVbGJWdXpmd0FvSmxpNklYNzBhcjRLb2ptNHErckRrQTRnL0VjZ2xaQytzY3cya0lveWJ3VnUxK281TFdZbU9PVnNqblhqQ3FGWVJ0MW1oNjcrUFBpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMDU0NTg3NjQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Njc4MjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzA1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQaDFuQVZHSmJYMlFpZEY1VmtBYllWMmMvcnpBZWJEaEtQRXJWbFR1ZmNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTUwNjU3OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2NzU4NDQwNDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "M Shahid ",
  ownername:process.env.OWNER_NAME|| "Shahid king",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
