//BELİRLENEN KURALA GÖRE ELAMANLARI KONTROL EDER. KURALI SAĞLAYANLARI YENİ BİR DİZİ OLUŞTURUR.

const array = [1, 2, 9, 8, 12, 15, 25, 32, 63, 85];

const sonuc = array.filter(num => num > 8);

//EKRAN GÖRÜNTÜSÜ [ 12, 15, 25, 32, 63, 85 ] ŞEKLİNDE GELMEKTEDİR.

    console.log (sonuc);