// Napisati program koji ispisuje racun u kafani, ali samo musterijamam koje imaju vise od 18 g
// Dodatno popust se odobrava u dva sledeca slucaja
// Br god deljiv sa 7 (15 % popusta)
// Br god deljiv sa 11 (25 % popusta)

let kolicina = 9;
let cenaPoKomadu = 180;
let godine = 18;
let ukupnaCena = kolicina * cenaPoKomadu;
let popust1 = ukupnaCena - (ukupnaCena / 15);
let popust2 = ukupnaCena - (ukupnaCena / 25);


if(godine >= 18) {
    if(godine % 7 === 0) {
        console.log(`Vas racun sa popustom iznosi ${popust1}`);
    } else if(godine % 11 === 0) {
        console.log(`Vas racun sa popustom iznosi ${popust1}`);
    } else {
        console.log(`Vas racun iznosi ${ukupnaCena}`);
    } 
} else {
    console.log('Morate biti stariji od 18 godina za ovu kupovinu');
} 