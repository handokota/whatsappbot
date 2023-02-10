## How to run project
- Change file `config.js`
- Get API_KEY_RM_BG RemoveBg [Here](https://www.remove.bg/api#api-reference)
- Get API_KEY_OPEN_AI OpenAI [Here](https://beta.openai.com/account/api-keys)
- RUN `npm install`
- RUN `npm run start` for production 
or RUN `npm run dev` for development

## How to fix error in Linux Debian
- Delete .wwebjs_auth folder
- Delete node_modules folder
- RUN `npm install`
- RUN `sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget`
- Edit `node_modules/whatsapp-web.js/src/util/Injected.js` file and comment line 16 `window.Store.Features = window.mR.findModule('FEATURE_CHANGE_EVENT')[0].LegacyPhoneFeatures;`
- Edit line 29 to `window.Store.QueryExist = window.mR.findModule('queryExists')[0] ? window.mR.findModule('queryExists')[0].queryExists : window.mR.findModule('queryExist')[0].queryWidExists;`
- RUN `npm run start` for production 
or RUN `npm run dev` for development

## Available command
Command  | Example
------------- | -------------
`#removebg/bg_color`  | `#removebg/blue`
`#ask/question`  | `#ask/cara koneksi golang dengan mysql?`
