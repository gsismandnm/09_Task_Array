/**
 * @param {number} id
 * @param {string} adi
 * @param {string} cinsiyeti
 * @param {string} bolum
 * @param {number} yasi
 * @param {number} baslamaTarihi
 * @param {number} bitirmeTarihi
 * @param {number} id2
 * @param {number} mat
 * @param {number} ing
 * @param {number} kim
 */

//ÖĞRENCİ BİLGİLERİNDEN OLUŞAN BİR LİSTE OLUŞTURDUK.
 const students = [
    {id:1, adi:'Murat', cinsiyeti:'e', bolum:'mimarlık', yasi:21, baslamaTarihi:2010, bitirmeTarihi:2014},
    {id:2, adi:'Ahmet', cinsiyeti:'e', bolum:'mühendislik', yasi:32, baslamaTarihi:2000, bitirmeTarihi:2006},
    {id:3, adi:'Mahmut', cinsiyeti:'e', bolum:'mimarlık', yasi:13, baslamaTarihi:1999, bitirmeTarihi:2008},
    {id:4, adi:'Senem', cinsiyeti:'k', bolum:'mühendislik', yasi:42, baslamaTarihi:1993, bitirmeTarihi:1997},
    {id:5, adi:'Osman', cinsiyeti:'e', bolum:'mühendislik', yasi:45, baslamaTarihi:2008, bitirmeTarihi:2015},
    {id:6, adi:'Emine', cinsiyeti:'k', bolum:'iibf', yasi:17, baslamaTarihi:2017, bitirmeTarihi:2021},
    {id:7, adi:'Sedat', cinsiyeti:'e', bolum:'mühendislik', yasi:32, baslamaTarihi:2000, bitirmeTarihi:2006},
    {id:8, adi:'Damla', cinsiyeti:'k', bolum:'iibf', yasi:25, baslamaTarihi:1999, bitirmeTarihi:2008},
    {id:9, adi:'Kerem', cinsiyeti:'e', bolum:'mühendislik', yasi:25, baslamaTarihi:1993, bitirmeTarihi:1998},
    {id:10, adi:'Fatma', cinsiyeti:'k', bolum:'mühendislik', yasi:31, baslamaTarihi:2006, bitirmeTarihi:2016},
    {id:11, adi:'Mustafa', cinsiyeti:'e', bolum:'iibf', yasi:19, baslamaTarihi:2017, bitirmeTarihi:2021},


];
// AYNI ID NUMARASINA SAHİP KİŞİLERE MATEMATİK, İNGİLİZCE VE KİMYA NOTLARINI AYRI BİR LİSTEDE TUTTUK.
const studentsNot =[
    {id2:1, mat:90, ing:85, kim:70},
    {id2:2, mat:80, ing:83, kim:80},
    {id2:3, mat:90, ing:85, kim:70},
    {id2:4, mat:70, ing:73, kim:80},
    {id2:5, mat:90, ing:85, kim:70},
    {id2:6, mat:80, ing:83, kim:80},
    {id2:7, mat:90, ing:65, kim:70},
    {id2:8, mat:80, ing:83, kim:80},
    {id2:9, mat:40, ing:75, kim:70},
    {id2:10, mat:50, ing:83, kim:80},
    {id2:11, mat:60, ing:85, kim:76},

];

//BU LİSTEYİ MODULE.EXPORT FORMÜLÜ İLE YAYINLADIK.
module.exports = {
    students,
    studentsNot,
};