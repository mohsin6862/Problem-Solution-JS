// এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

function toCheckLeapYear (year){

    if (( year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)  ){
        console.log("This is a leap year");
    }
    else {
        console.log("This is not a leap year");
    }

    return toCheckLeapYear;
}

toCheckLeapYear(1952);
