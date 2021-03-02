//KOŞULU SAĞLAYAN SAYIYI BULUR.


    
    var array = [10, 15, 13, -30, 25, 27, 60, 24]; 
  
    // SIFIRDAN BÜYÜK OLAN ELAMANLARI LİSTELEMESİNİ İSTEDİK.
    var found = array.find(function (element) { 
        return element < 25; 
    }); 

    console.log(found);