const moment = require('moment')
exports.mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
