const qrcode = require( qrcode-terminal );
const { Client } = require( whatsapp-web.js );

const client = new Client();

client.on( qr , (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on( ready , () => {
    console.log( Bot is ready! );
});

client.on( message , message => {
    if (message.body.toLowerCase() ===  !owner ) {
        message.reply(`ده رقم البوت: +46726412406\n ورقم المالك: 01126554338\n
روابطي كلها هنا:\n- إنستجرام: https://www.instagram.com/i4mo2?igsh=c2lkNnV6YWZtNmo5`);
    }

    if (message.body.toLowerCase() ===  !social ) {
        message.reply(`روابطي السوشيال: \n- إنستجرام: https://www.instagram.com/i4mo2?igsh=c2lkNnV6YWZtNmo5`);
    }

    if (message.body.toLowerCase() ===  !help ) {
        message.reply( الأوامر المتاحة:\n- !owner: للحصول على رقم المالك وروابط السوشيال\n- !social: للحصول على روابط السوشيال\n- !help: لعرض الأوامر );
    }
});

client.initialize();
