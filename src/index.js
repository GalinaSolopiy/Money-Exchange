// PLEASE DON'T change function name
module.exports = function makeExchange(currency){
    var typesMoney = ["H", "Q", "D", "N", "P"];
    var coins = [50, 25, 10, 5, 1];
    var result = {};
    var remainder = currency;

    var count = 0;
    if (currency > 10000){
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    }else if (currency <= 0) {
        return {};

    }
    var count = 0;
    for (var i = 0; i < coins.length;){
        if (Math.floor(remainder / coins[i]) != 0){
            count += 1;
            if (result[typesMoney[i]] > 0){
                result[typesMoney[i]] += count;
            }else{
                result[typesMoney[i]] = count;
            }
            remainder = remainder - coins[i];
        }else {
            i++;
        }
        count = 0;
    }
    return result;
}
