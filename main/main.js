module.exports = function main(inputs) {
    let kilometers = inputs.distance;
    let waitTime = inputs.parkTime;
    //数据异常处理
    if(kilometers === 0){
        return 0 ;
    }else if(kilometers < 0 || waitTime < 0){
        return 'System is abnormal' ;
    }
    let fare = 0 ;
    //2公里以内
    if(kilometers > 0 && kilometers <= 2){
        fare = 6;
    }else if(kilometers > 2 && kilometers <= 8){//2公里到8公里
        fare = 6 + (kilometers-2)*0.8;
    }else if(kilometers > 8){//超过8公里
        fare = 10.8 + (kilometers-8)*1.2;
    }
    //加上等待的钱
    fare += waitTime*0.25 ;
    //四舍五入处理
    fare = Math.round(fare) ;
    return fare ;
};