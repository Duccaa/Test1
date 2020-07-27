let suma = 0;
let proizvod = 1;
let K = 3;
let N = 33;
let br1 = 0;
let br2 = 0;

if(K < N) {
    let t = K;
    K = N;
    N = t;

}
for(K, N; K <= N; K++) {
    if (K % 3 === 0) {
        suma += K;
    }
     br1++;
} 
console.log(`Zbir je: ${suma}`);

for(K, N; K <= N; K++) {
    if (K % 3 !== 0 && K % 7 === 0) {
    proizvod  *= K; 
    }
    br2++;
  
}
console.log(`Proizvod je: ${proizvod}`);