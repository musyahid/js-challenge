const row = Array.from(Array(1000).keys())

var even    = [];
var odd     = [];


for(var i = 0; i < row.length; i++) {
        if(row[i] %2 == 0) {
        even.push(row[i])
    } else {
        odd.push(row[i])

    }
}

console.log(`Even `+ even)
console.log(`Odd `+ odd)

function primeNumber( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

//PRIME NUMBER
for( var n = 2;  n < row.length;  n++ ) {
    if( primeNumber(n) ) {
    console.log(n) 
 }
}

//prime numbers less than 100.
for( var n = 2;  n < 100;  n++ ) {
    if( primeNumber(n) ) {
    console.log(n)    
 }
}
