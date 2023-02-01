// 8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো 


function toFindLargestNumberOfArray (array){
    let max = array[0]; 
    for(var i = 1 ; i < array.length;i++){

        if (max < array[i]){
            max = array[i];
            
        }
        
        
        }
        return max;


    }
    let array = [10, 9, 41, 22, 1001, 6, 99, 88];
    var maxValue = toFindLargestNumberOfArray(array);
    console.log(maxValue);