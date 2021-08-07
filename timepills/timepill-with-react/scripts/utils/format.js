export function dateToString(time, fmt) {
    fmt = fmt || 'YYYY-MM-DD hh:mm:ss';
    let ret;
    let date = time ? new Date(time) : new Date();
    const opt = {
        "Y+": date.getFullYear().toString(),
        "M+": (date.getMonth() + 1).toString(),
        "D+": date.getDate().toString(),
        "h+": date.getHours().toString(),
        "m+": date.getMinutes().toString(),
        "s+": date.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
        ;
    }
    ;
    return fmt;
}
export function stringToDate(dateString) {
    if (dateString) {
        let temp = dateString.split(' ');
        let [year, month, day] = temp[0].split('-');
        let [hour, minute, second] = temp[1].split(':');
        var date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
        return date;
    }
}
export function ifNameValidate(name) {
    if (name.trim().length > 0)
        return true;
    return false;
}
export function ifEMailValidate(email) {
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return reg.test(email);
}
export function ifTimeValidate(time) {
    const reg = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
    return reg.test(time);
}
export function ifContentValid(content) {
    if (content.trim().length > 0)
        return true;
    return false;
}
export function secondsToDateString(sec) {
    let year, month, day, hour, minute, second;
    year = Math.floor(sec / 31536000);
    sec = sec % 31536000;
    month = Math.floor(sec / 2592000);
    sec = sec % 2592000;
    day = Math.floor(sec / 86400);
    sec = sec % 86400;
    hour = Math.floor(sec / 3600);
    sec = sec % 3600;
    minute = Math.floor(sec / 60);
    second = sec % 60;
    return `${year}年${month}月${day}天 ${hour}小时${minute}分钟${second}秒`;
}
export function getRemainning(d1, d2) {
    let inetrval = Math.floor((d2.getTime() - d1.getTime()) / 1000);
    return inetrval;
}
//# sourceMappingURL=format.js.map