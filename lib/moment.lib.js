const moment = require('moment')
exports.mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
exports.mysqlTimestampGetDay = (date) => {
    return moment(Date.now()).format(date);
}
