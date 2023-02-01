// ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 


function toFindDivisionOf3And5 (numbers){

    for( let i =1 ; i<=numbers ; i++){
        

        if(i % 3 === 0 && i % 5 == 0){
            
            console.log(i)
        }
    }

    return toFindDivisionOf3And5;
    
}
toFindDivisionOf3And5(100);