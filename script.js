const obj = {
    name: 'Alex', 
    age: 33,
    adress: { 
        country: 'UA', 
        city: 'Dnipro',
    }
}
const objCopy = copy(obj);

///
function copy(){
    for (key in obj) {
        if (typeof obj[key] != "object") {
            let result = Object.assign({}, obj);
        } else {
            let anotherObj = Object.keys(obj).reduce (acc,key);
            anotherObj [key]=copy (obj[key]);
        };
    }return
}

