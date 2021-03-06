const moment = require('moment')

exports.formatVND = (n, currency) => {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, '$1,') + ' ' + currency;
}

exports.formatThoiGianUuTien = (thoigiansudung) => {
    if (thoigiansudung) {
        var now = moment(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')).valueOf();
        var thoiGianSuDungTinUuTien = moment(thoigiansudung).valueOf() + 18000000;
        var result = now - thoiGianSuDungTinUuTien
        var tempTime = moment.duration(result);
        var y = -1 * parseInt(tempTime.hours()) + "Giờ" + ":" + -1 * (tempTime.minutes()) + "Phút";
        return y;
    }

}

exports.formatThoiGianDangTin = (thoigian) => {
    var a = moment(thoigian).format('LLL');
    return a;
}
