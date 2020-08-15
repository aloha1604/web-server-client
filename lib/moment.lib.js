const moment = require('moment')
var newDate = new Date();
exports.mysqlTimestamp = moment(newDate.timeNow).format('YYYY-MM-DD HH:mm:ss');
exports.mysqlTimestamp1 = () => {
    return moment(newDate.timeNow).format('YYYY-MM-DD HH:mm:ss')
};
exports.mysqlTimestampGetDay = (date) => {
    return moment(Date.now()).format(date);
}
