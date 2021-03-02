//KOŞULU KAÇINCI ELEMENTTE BULURSA ORADAKİ SAYIYI SÖYLER. 
//ÖRNEKTE 5'NCİ ELEMENTTE SARTI SAĞLADIĞI İÇİN 5 DÖNER.
//HİÇBİR DEĞER BULAMAZSA -1 SONUCUNU DÖNER.

    
    var array = [-10, -15, -10, -30, -25, 25, 60, -24]; 
  
    // SIFIRDAN BÜYÜK OLAN ELAMANLARI LİSTELEMESİNİ İSTEDİK.
    var found = array.findIndex(function (element) { 
        return element > 0; 
    }); 
  

    console.log(found);