const dateTime = require('date-and-time');

const thaiFormat = (dtm) => {
    return dateTime.format(dtm,'DD-MM-YYYY HH:mm');
}

const format = (dtm) => {
    dateTime.locale('th');
    return dateTime.format(dtm, 'DD-MM-YYYY');
}

module.exports = {
    thaiFormat,
    format
}