function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}

console.log(palindrome("ibu ratna antar ubi"));
console.log(palindrome("kasur ini rusak"));
console.log(palindrome("A nut for a jar of tuna."));
console.log(palindrome("Was it a car or a cat I saw?"));
console.log(palindrome("Yo, banana boy!"));
console.log(palindrome("UFO tofu?"));