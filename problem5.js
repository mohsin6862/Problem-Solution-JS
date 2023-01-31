// 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে 



function toCheckGread (number){
    if(number >100){
        console.log("Vul number kno diccho 100 er beshi tho marks hoi nah");
    }
    else if(number>=80){
        console.log("Tumi A+ Paiso");
    }
    else if(number >= 70){
        console.log("Tumi A Gread paiso");
    }
    else if(number >= 60){
        console.log("Tumi A- Gread paiso");
    }
    else if(number >= 50){
        console.log("Tumi B Gread paiso");
    }
    else if(number >= 40){
        console.log("Tumi C Gread paiso");
    }
    else if(number <0){
        console.log("Faizlami koro??? Positive number dao");
    }
    else {
        console.log("Tmi Fail korso");
    }
    return toCheckGread;
    }

    let yourMarks =  toCheckGread(79);