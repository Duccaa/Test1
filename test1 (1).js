//1. zadatak
let kolicina = 9
let cenaPoKomadu = 180
let godine = 21

let cenaUk = kolicina * cenaPoKomadu;

if (cenaPoKomadu > 0 && kolicina > 0) {
    if (godine > 18) {
        if (godine % 11 == 0) {
            console.log(`25% popusta , racun: ${cenaUk * 0.75}`);
        } else if (godine % 7 == 0) {
            console.log(`15% popusta , racun: ${cenaUk * 0.85}`);
        } else {
            console.log(`nema popust , racun: ${cenaUk}`); //10 poena
        }
    } else {
        console.log('Nemate dovoljno godina')
    }
} else {
    console.log('Nesipravan unos');
}

//2. zadatak

{
    let N = 5;
    let trougao = '';
    for (let i = 1; i < N; i++) {
        //let red = ''
        trougao += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n'
        //console.log(red)
    }
    console.log(trougao);

    // console.log('*'.repeat(N - 1) + ' ' + '*'.repeat(N - 1));

    // for (let i = N - 1; i > 0; i--) {
    //     let red = ''
    //     red = ' '.repeat(N - i) + '*'.repeat(2 * i - 1)
    //     console.log(red)
    // }
}

//3. zadatak

{
    let K = 35
    let N = 3
    let sum = 0
    let pr = 1

    if (K > N) {
        let T = K // t = 35
        K = N // k = 3
        N = T // n = 35
    }

    for (K; K <= N; K++) {
        if (K % 3 == 0) {
            sum += K
        } else if (K % 7 == 0) {
            pr *= K
        }
    }
    console.log(`Zbir brojeva deljivih sa 3 : ${sum} , prozivod brojeva koji nisu deljivi sa 3 a jesu sa 7 ${pr}`);
}

//4. zadatak
{
    let cifra = 5

    let zaglavlje = '   '
    let red = cifra + '  '
    for (let i = 1; i < 10; i++) {
        zaglavlje += i + '  '
    }
    console.log(zaglavlje);

    for (let i = 1; i < 10; i++) {
        red += i * cifra + ' '
    }

    console.log(red);


    console.log('-------tablica mnozenja-------');
    let N = 9;
    for (let i = 0; i <= N; i++) {
        let tablica = ''
        for (let j = 0; j <= N; j++) {

            if (i == 0 && j > 0) {
                tablica += '  ' + j;
            }
            else if (j == 0 && i > 0) {
                tablica += i + ' |';
            }
            else if (i > 0 && j > 0) {
                if (i * j < 10) {
                    tablica += (i * j) + '  ';
                }
                else {
                    tablica += (i * j) + ' ';
                }
            }
            else {
                tablica = ' '
            }
        }
        console.log(tablica);

        if (i == 0) {
            console.log('  ' + '_'.repeat(N * 3));
        }
    }


}


{
    let slika = ''
    for (let i = 1; i < 10; i++) {

        for (let j = 1; j < 10; j++) {
            if (i * j < 10) {
                slika += i * j + '  ';
            } else {
                slika += i * j + ' ';
            }

        }
        slika += '\n'

    }
    console.log(slika);
}