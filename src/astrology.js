import astrologyDates from './data/astrologicalSigns.json';
import astrologyComp from './data/astrologicalSignCompatability.json';


function dateToSign(inputMonth, inputDay) {
    // assumes date is form Month , Day
    //console.log(astrologyDates)
    
    for (let [sign, {start, end}] of Object.entries(astrologyDates)){
       // javascript will allow you to compare string and int like "12" > 13 so lets just leave it at that
        console.log(start,end)
        var [signMonthStart,signDayStart] = start.split("/")
        var [signMonthEnd,signDayEnd] = end.split("/")
        console.log("end",{signMonthEnd,signDayEnd});
        console.log("start",{signMonthStart,signDayStart});

        if( (inputMonth == signMonthStart && inputDay >= signDayStart) || (inputMonth == signMonthEnd && inputDay <= signDayEnd)) {
            console.log("compat sign 2", sign);
                
            return sign;
        }
    }


}



/*
if (month == "January") {
            if (day < 20)
               sign = "Capricorn";
            else
               sign = "Aquarius";
         } else if (month == "February") {
            if (day < 19)
               sign = "Aquarius";
            else
               sign = "Pisces";
         } else if(month == "March") {
            if (day < 21)
               sign = "Pisces";
            else
               sign = "Aries";
         } else if (month == "April") {
            if (day < 20)
               sign = "Aries";
            else
               sign = "Taurus";
         } else if (month == "May") {
            if (day < 21)
               sign = "Taurus";
            else
               sign = "Gemini";
         } else if( month == "June") {
            if (day < 21)
               sign = "Gemini";
            else
               sign = "Cancer";
         } else if (month == "July") {
            if (day < 23)
               sign = "Cancer";
            else
               sign = "Leo";
         } else if( month == "August") {
            if (day < 23) 
               sign = "Leo"; 
            else
               sign = "Virgo";
         } else if (month == "September") {
            if (day < 23)
               sign = "Virgo";
            else
               sign = "Libra";
         } else if (month == "October") {
            if (day < 23)
               sign = "Libra";
            else
               sign = "Scorpio";
         } else if (month == "November") {
            if (day < 22)
               sign = "scorpio";
            else
               sign = "Sagittarius";
         } else if (month == "December") {  
            if (day < 22)
               sign = "Sagittarius"; 
            else
               sign ="Capricorn";
         }
*/




function findCompatibleSign(sign) {
    // assumes string 
    return astrologyComp[sign]['compatible']

}

function findIncompatibleSign(sign) {
    // assumes strings
    return astrologyComp[sign]['incompatible']
}

module.exports = {dateToSign, findCompatibleSign, findIncompatibleSign };