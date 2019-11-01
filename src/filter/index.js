export default {
    filterProfit(item) {
        //item为数字类型
        const numb = parseFloat(item);
        if (numb >= 0) {
            return '+' + numb.toFixed(2);
        }
        return numb.toFixed(2);
    },
    filterProfitTotal(item) {
        //item为字符串类型
        if (item.indexOf('-') > -1) {
            //表示为负数
            return item;
        }
        //为正数加"+"
        return '+' + item;
    },
    payTypeToText(item) {
        //将支付类型转成对应的文本
        const payTypeList = {
            '0': '现金',
            '1': '微信',
            '2': '支付宝',
            '19': '支付宝',
            '20': '支付宝',
            '4': '云闪付',
            '97': '组合支付',
            '98': '积分支付'
        };
        return payTypeList[item + ''];
    }
};
