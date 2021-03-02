// BİR DİZİNİ SIRALAMAK İÇİN KULLANILIR. ALTTAKİ ÖRNEKTE SIRALA SONUCUNDA İLK RAKAMI ESAS ALDI.

// var array =[3, 6, 2, 8, 26, 3, 58, 1];

// array.sort ();
// console.log(array);


// YUKARIDAKİ ARRAY'I SIRALAYABİLMEK İÇİN BAŞKA BİR YÖNTEM YAZILMASI GEREKİYOR. KÜÇÜKTEN BÜYÜĞE İÇİN;

// var array =[3, 6, 2, 8, 26, 193, 58, 1];

// array.sort(function(a, b){
// return (a - b);
// });
// console.log(array);


//İLK FARFLERİNİ ESAS ALARAK SIRALAMA YAPMAKTADIR.
var array = ["ababa", "abaca", "abese", "abede", "arama"];

array.sort ();
console.log(array)