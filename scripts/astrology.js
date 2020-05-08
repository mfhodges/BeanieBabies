import astrologyDates from './data/astrologicalSigns.json';
import astrologyComp from './data/astrologicalSignCompatability.json';


function dateToSign(inputMonth, inputDay) {
    // assumes date is form Month , Day
    //console.log(astrologyDates)
    
    for (let [sign, {start, end}] of Object.entries(astrologyDates)){
       // javascript will allow you to compare string and int like "12" > 13 so lets just leave it at that if it happens
        var [signMonthStart,signDayStart] = start.split("/");
        var [signMonthEnd,signDayEnd] = end.split("/");
        if( (inputMonth == signMonthStart && inputDay >= signDayStart) || (inputMonth == signMonthEnd && inputDay <= signDayEnd)) {
            console.log("compat sign 2", sign);
            return sign;
        }
        // no error checking
    }


}



function findCompatibleSign(sign) {
    // assumes string 
    return astrologyComp[sign]['compatible']

}

function findIncompatibleSign(sign) {
    // assumes strings
    return astrologyComp[sign]['incompatible']
}

module.exports = {dateToSign, findCompatibleSign, findIncompatibleSign };