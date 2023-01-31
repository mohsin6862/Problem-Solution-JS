// ২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 


function toCheckEvenOdd (number){

    if(number%2 == 0){
        console.log("Your number is Even");
    }
    else{
        console.log("Your number is Odd");
    }
    return number;
}

toCheckEvenOdd(50);