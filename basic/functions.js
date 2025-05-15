

function toCelcius(fahrenheit) {
    let res = (5/9) * (fahrenheit-32)
    return res;
}

let fahrenheit = 230;
console.log(toCelcius(fahrenheit));
