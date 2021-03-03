// İKİ PAREMETRE ALIR. BİRİNCİSİ GERÇEKLEŞTİRİLECEK OLAN METODUN İLK DEĞERİDİR. 
//ŞAYET İLK DEĞER BELLİ DEĞİLSE İLK DEĞER "0" OLUR. array.reduce(islemYapanMetod, ilkDeger);
//ÖRNEĞİN ÖĞRENCİLERİN PARALARININ TOPLAMI VB.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const islemYapanMetod = (toplam, simdikiDeger) => toplam + simdikiDeger;

console.log (array.reduce (islemYapanMetod, 3));
