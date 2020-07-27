let suma = 0;
let proizvod = 1;
let K = 1;
let N = 10;
br1 = 0;
br2 = 0;

if(K < N) {
    let t = K;
    K = N;
    N = t;

}

for(; K <= N; K++) {
    if (K % 3 !== 0 && K % 7 === 0) {
        suma +=K;
    }
    br1++;
} 
console.log(suma);

for(; K <= N; K++) {
    if (K % 3 !== 0 && K % 7 === 0) {
        proizvod  *=K;
    }
    br2++;
}
console.log(proizvod);