//implementare cod video + rezolvare cerinte functie 

// function checkDivisible(n, divisor) {
//     if (n % divisor) {
//         return false
//     } else {
//         return true
//     }
// }
// console.log(checkDivisible(10, 2))
// console.log(checkDivisible(10, 3))

//---------------------------rezolvare ex 2: 
    // var nr = 0;
    // function nrcaractere(string1, string2){
    //     if(string1.length != string2.length){
    //         return -1
    //     }
    //     else{
    //         for(var i = 0; i < string1.length; i++){
    //             if(string1[i] != string2[i]){
    //                 nr++
    //             }
    //         }
    //         return nr
    //     }
    // }
    // console.log(nrcaractere("ana","ina"))
    // console.log(nrcaractere("ioana","ana"))


//------------------------------------

    // function occurences(text, character) {
    //     let count = 0
    //     for (var i = 0; i < text.length; i++) {
    //         if (text.charAt(i) === character) {
    //             count++
    //         }
    //     }
    //     return count;
    // }
    //console.log(occurences("sample text", "e"));

//-----------------------------------rezolvare ex3: 
function nr_concatenate(numere_sir){
    var sir = []
    for(var i = 0; i<numere_sir.length; i++){
        sir = numere_sir.join('')
    }
    return sir

}
console.log(nr_concatenate([1, 2, 3, 4 ,5]))