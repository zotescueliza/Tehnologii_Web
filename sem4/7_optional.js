function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}
const original = {
    name: "Ana",
    age: 25,
    hobbies: ["reading", "music"],
    address: {
        city: "București",
        location: { lat: 44.4, lon: 26.1 }
    }
};

const cloned = deepClone(original);

cloned.address.city = "Cluj";
cloned.hobbies.push("coding");

console.log("Original:", original);
console.log("Cloned:", cloned);
