// import * as moment from 'moment';
import { dateToString as dateToStr, stringToDate as strToDate } from './format.js';
export function dateToString(date) {
    return dateToStr(date);
}
export function getRemainning(d1, d2) {
    console.log(d1);
    let inetrval = Math.floor((d2.getTime() - d1.getTime()) / 1000);
    return inetrval;
}
export function stringToDate(dateString) {
    // 
    return strToDate(dateString);
}
//# sourceMappingURL=time.js.map