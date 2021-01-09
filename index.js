const dotenv = require("dotenv");
dotenv.config();

const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
