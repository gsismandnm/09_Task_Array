//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}= require ("./data");
const {studentsNot}=require("./data");

//LİSTEMİZDEKİ ÖĞRENCİLERİ ADLARINA GÖRE A-Z DOĞRU SIRALAMA YAPACAK. 
//SONRASINDA DA MÜHENDİSLİK BÖLÜMÜ ERKEK ÖĞRENCİLERİ FİLTRELEYECEK.
const sonuc = students.sort ((a, b) =>{
        if (a.adi > b.adi) {
            return 1;
        }
        else {
            return -1;
        }
    }).filter (item => item.bolum == "mühendislik" & item.cinsiyeti=="e");

//NOTLAR TABLOSUNDAKİ ÖĞRENCİLERDEN MATEMATİK NOTU 75 ÜZERİNDE OLANLARI NOT SIRASINA KOYDUK.
const sonuc2 = studentsNot.sort ((a, b) =>{
        if (a.mat > b.mat){
            return 1;
        }
        else {
            return -1;
        }
    }).filter (item => item.mat >75)
    
console.table (sonuc);
console.table (sonuc2);