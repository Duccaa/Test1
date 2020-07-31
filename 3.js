let suma = 0;
let proizvod = 1;
let K = 1;
let N = 21;
if (K > N) {
    let t = K;
    K = N;
    N = t;
}

for (K, N; K <= N; K++) {
    if (K % 3 === 0) {
        suma += K;
    }
    if (K % 3 !== 0 && K % 7 === 0) {
        proizvod *= K;
    }
}
console.log(`Proizvod je: ${proizvod}`);
console.log(`Zbir je: ${suma}`);