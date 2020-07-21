class Str {

    lower(string) {
       return string.toLowerCase();
    }

    upper(string) {
       return string.toUpperCase();
    }
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    reverse(string) {
        return string.split('').reverse().join('');
    }

    contains(string, contain) {
        return string.includes(contain);
    }

    random(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    count(string) {
        return string.length;
    }

    countWord(string) {
        return string.split(" ").length;
    }
}

const str = new Str();

console.log(str.lower("MAKAN"))
console.log(str.upper("malam"))
console.log(str.capitalize("saya ingin makan"))
console.log(str.reverse("kasur"))
console.log(str.contains('Saya ingin makan sate', 'makan'))
console.log(str.contains('Saya ingin makan sate', 'rujak'))
console.log(str.contains('Saya ingin makan sate', ['sate', 'rujak']))
console.log(str.random(6))
console.log(str.random(32))
console.log(str.count("lorem ipsum"))
console.log(str.countWord("lorem ipsum"))
