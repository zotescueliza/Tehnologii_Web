function addToArray(array, ...args){
    // let args = arguments;
    // let array = args[0];
    for(var i = 0; i<args.length;i++){
        array.push(args[i]);
    }
    return array;
}

//let array = new Array;
let array = ["a"];

console.log(addToArray(array,"b","c").join(","));

function intercalareArray(array1,array2){
    let rezultat = [];
    if(array1.length != array2.length)
        return -1;
    else
    {
        for(var i=0; i<array1.length; i++){
            rezultat.push(array1[i]);
            rezultat.push(array2[i]);
        }
    }
    return rezultat;
}
let arr1=["a","b","c"];
let arr2=[1,2,3];
console.log(intercalareArray(arr1,arr2).join(","));