//DİZİNDE BULUNAN ELEMANLARIN TAMAMI KURALA UYUYORSA TRUE, 
//HERHANGİ BİRİSİ UYMUYORSA FALSE DÖNER.

const arr = [11, 12, 13, 14, 15];

//TÜM ELEMANLAR 4'TEN BÜYÜK MÜ?

const dorttenBuyuk = arr.every (num => num > 6);
console.log (dorttenBuyuk);