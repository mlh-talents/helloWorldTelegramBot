console.log("Hello to the helloworld telegram bot module");

var TelegramBot = require('node-telegram-bot-api');
var telegramTokenReader = require('fs');

// load token from file
var token = telegramTokenReader.readFileSync('telegram_token.secret');

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

// respond on "/echo"
bot.onText(/\/echo (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "Hello world from MLH event :)";

  bot.sendMessage(chatId, resp);
});
