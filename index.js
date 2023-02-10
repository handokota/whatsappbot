const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { EditPhotoHandler } = require('./feature/removebg');
const { ChatAIHandler } = require('./feature/openai');



const client = new Client({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
        authStrategy: new LocalAuth()
});



client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {

    const text = msg.body.toLowerCase() || '';

    //check status
    if (text === '!ping') {
        msg.reply('aloo');
    }

    // #edit_bg/bg_color
    if (text.includes("#removebg/")) {
        await EditPhotoHandler(text, msg);
    }
    // #ask/question?
    if (text.includes("#ask/")) {
        await ChatAIHandler(text, msg);
    }

});

client.initialize();



