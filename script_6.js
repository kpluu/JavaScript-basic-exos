var a = [{
    "a": "1"
}, {
    "b": "2"
}, {
    "c": "3"
}]
var keys = [];
var values = [];

for (var i = 0; i < a.length; i++) {
    for (var key in a[i]) {
        if (a[i].hasOwnProperty(key)) {
            keys.push(key);
            values.push(a[i][key]);
        }
    }
}

console.log(keys);
console.log(values);