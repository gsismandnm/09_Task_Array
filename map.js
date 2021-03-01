//BİR DİZİDE DEĞİŞİKLİK YAPARAK YENİ BİR DİZİ OLUŞTURUR.
//YENİ DİZİ EKRANA GETİRİLİR ANCAK ORJİNAL DİZİDE BİR DEĞİŞİKLİK OLMAZ.

const numbers = [1, 2, 3, 4 , 5, 6 ,7 , 8, 9, 10, 11];

//ÖRNEĞİN ŞİMDİ HER ELEMANA BİR EKLEYECEĞİZ.

const oneAdded = numbers.map (num => num+1);
   console.log (oneAdded);
   console.log(numbers);

