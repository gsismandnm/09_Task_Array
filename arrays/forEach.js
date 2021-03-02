//ARRAY İÇİNDEKİ HER ELEMAN İÇİN FONKSİYONU ÇALIŞTIRIR.

var array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.forEach(function(element, index){
    console.log (element)
    console.log(index)
    console.log('Index Numarası: '+ index +'  Eleman : '+ element)
});