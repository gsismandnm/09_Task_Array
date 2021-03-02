//DİZİNDEKİ ELEMANLARDAN EN AZ BİRİ BU KURALA UYUYORSA TRUE, UYMUYORSA FALSE DEĞERİNİ ALIR.

//DİZİ ELEMANLARINDAN EN AZ BİRİSİ 10'DAN BÜYÜK MÜ?

function buyukMu10 (element, index, array){
    return element > 10;

}

[2, 5, 8, 1 ,14].some (buyukMu10);