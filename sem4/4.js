String.prototype.capitalizedWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
};

console.log("this words will be capitalized".capitalizedWords());

Number.prototype.times = function (callback) {
    for (let i = 0; i < Number(this); i++) {
        callback(i);
    }
};

(3).times(i => console.log('Executie ' + (i + 1)));
