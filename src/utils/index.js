//判断android和ios
const ua = navigator.userAgent;
const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
const isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

//判断是否是邮掌柜app
const isYZG = ua.indexOf('yzg') > -1;

//比较2个日期的大小
const compareDate = function(a, b) {
    //a===YYYY-MM-DD
    return +new Date(a) > +new Date(b);
};

//返回给定日期往后推一个月后的日期
const getDateByAfterOneMonth = function(date) {
    //date===YYYY-MM-DD
    const dateArr = date.split('-');
    let year = parseInt(dateArr[0]);
    let month = parseInt(dateArr[1]) + 1;
    if (month > 12) {
        month = 1;
        year++;
    }
    month = month < 10 ? '0' + month : month;
    return year + '-' + month + '-' + dateArr[2];
};

//日期格式转换--将日期对象转成yyyy-mm-dd格式
const dateFormat = function(dateObj) {
    //dateObj为日期对象
    //console.log(dateObj);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    //console.log(year, month, date);
    return year + '-' + month + '-' + date;
};

//某个日期往前推n天
const getDateBefore = function(dateObj, n) {
    const baseDate = new Date(dateObj);
    console.log('baseDate===', baseDate);
    baseDate.setDate(baseDate.getDate() - n);
    return dateFormat(baseDate);
};

//根据年月生成对应的起止日期
const createDateFromMonth = function(yearMonth) {
    //yearMonth===YYYY-MM
    const dateArr = yearMonth.split('-');
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]);
    console.log('year===', year);
    console.log('month===', month);
    return {
        startDate: yearMonth + '-' + '01',
        endDate: yearMonth + '-' + new Date(year, month, 0).getDate()
    };
};

//根据type参数生成对应的起止日期
const createDateFromType = function(type) {
    let startDate = '',
        endDate = '',
        today = new Date(),
        yesterday = '';
    if (type === 30) {
        //今天
        startDate = dateFormat(today);
        endDate = dateFormat(today);
    }
    if (type === 31) {
        //昨天
        yesterday = getDateBefore(dateFormat(new Date()), 1);
        startDate = yesterday;
        endDate = yesterday;
        console.log('昨天 startDate===', startDate);
        console.log('昨天 endDate===', endDate);
    }
    if (type === 32) {
        //本月
        startDate = getDateBefore(dateFormat(today), today.getDate() - 1);
        endDate = dateFormat(today);
        console.log('本月 startDate===', startDate);
        console.log('本月 endDate===', endDate);
    }
    if (type === 34) {
        //近七天
        startDate = getDateBefore(dateFormat(today), 6);
        endDate = dateFormat(today);
        console.log('本月 startDate===', startDate);
        console.log('本月 endDate===', endDate);
    }
    return {
        startDate,
        endDate
    };
};

//防抖
export const debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function() {
        let args = arguments;
        if (timer) {
            console.log('clear');
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
};

//节流
export const throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function() {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    };
};

export default {
    isAndroid,
    isiOS,
    isYZG,
    createDateFromType,
    createDateFromMonth,
    compareDate,
    getDateByAfterOneMonth,
    debounce,
    throttle
};
