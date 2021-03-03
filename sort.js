//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}= require ("./data");

//LİSTEMİZDEKİ ÖĞRENCİLERİ ADLARINA GÖRE A-Z DOĞRU SIRALAMA YAPACAK.

const sonuc = students.sort ((a, b) =>{
        if (a.adi > b.adi) {
            return 1;
        }
        else {
            return -1;
        }
    });
    
console.table (sonuc);