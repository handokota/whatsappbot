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
- Edit `node_modules/whatsapp-web.js/src/util/Injected.js` file and comment line 16 `window.Store.Features = window.mR.findModule('FEATURE_CHANGE_EVENT')[0]?.LegacyPhoneFeatures;`
- RUN `npm run start` for production 
or RUN `npm run dev` for development

## Available command
Command  | Example
------------- | -------------
`#removebg/bg_color`  | `#removebg/blue`
`#ask/question`  | `#ask/cara koneksi golang dengan mysql?`
