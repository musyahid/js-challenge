var str = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambuLa... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali";


var arr = str.split(" ");

var count = {};
arr.forEach(function(i) { 
    count[i] = (count[i]||0) + 1;
});

console.log(count);



