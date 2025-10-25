class Stream{
    //membru privat => declarati cu #
    #value;
    #nextvalue;
    static #count = 0; //privat

    constructor(value, nextValue){
        this.#value = value;
        this.#nextvalue = nextValue;
        Stream.#count++;
    }
    get value(){
        return this.#value;
    }
    get next(){
        this.#value = this.#nextvalue(this.#value);
        return this.#value;
    }
    static get count(){
        return Stream.#count;
    }
}
class ConstantStream extends Stream{
    constructor(value){
        super(value, value => value);

    }
}
class NextIntegerStream extends Stream{
    constructor(value){
        super(0, value =>value + 1);
    }
}
const constant = new ConstantStream(1);
const NextInteger= new NextIntegerStream();
for(let i=0;i<10;i++){
    console.log(`constant[${i}] = ${constant.next}`);
    console.log(`nextInteger[${i}] = ${NextInteger.next}`);
}
console.log(Stream.count);

class Nrpar{
    #valoare;
    
    constructor(numar){
        if(numar%2 != 0){
            this.#valoare = numar+1;
        }
        else{
            this.#valoare = numar;
        }
    }

    get next_nr(){
        const val = this.#valoare;
        this.#valoare = this.#valoare + 2;
        return val;
    }
}
const sirPar = new Nrpar(5);

for (let i = 0; i < 10; i++) {
    console.log(`Nr par [${i}] = ${sirPar.next_nr}`);
}
