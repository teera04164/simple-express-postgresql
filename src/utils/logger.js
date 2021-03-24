const dateAndtime = require('date-and-time');
const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss,SSS';
const MODULE = 'sampleResful';
const LOG_LEVELS = ['DEBUG', 'LOG', 'INFO', 'ERROR']

const isLog = (level) => {
  if (!process.env.LOG_LEVEL) { return true }
  let levelSetting = LOG_LEVELS.indexOf(process.env.LOG_LEVEL.toUpperCase())
  let levelCheck = LOG_LEVELS.indexOf(level)
  if (levelCheck >= levelSetting) return true
}

const log = (message) => {
  let level = "LOG"
  if (!isLog(level)) return

  logMessage(level, message);
}

const info = (message) => {
  let level = 'INFO'
  if (!isLog(level)) return
  logMessage(level, message);
}

const error = (message, e) => {
  let level = 'ERROR'
  if (!isLog(level)) return

  if (message instanceof Error) {
    logMessage(level, message.stack);
  } else {
    if (e) {
      logMessage(level, `${message} : ${e} : ${e.stack}`);
    }
    else {
      logMessage(level, message);
    }
  }
}

const debug = (message) => {
  let level = 'DEBUG'
  if (!isLog(level)) return

  logMessage('DEBUG', message);
}

const logMessage = (level, message) => {
  let logMsg = {
    TIME: dateAndtime.format(new Date(), TIME_FORMAT),
    message,
    level,
    '@suffix': MODULE
  };
  console.log(JSON.stringify(logMsg));
}

module.exports = {
  info,
  error,
  debug,
  log
};