let N = 6;
let br = 0;
let br2 = 0;
let j = 1;
let red = ' '.repeat() + '*'.repeat()
let sredina = '*'. repeat (Math.floor(2 * N - 1) / 2) + ' ' + '*'. repeat (Math.floor(2* N - 1) / 2)


for(let i = 1; i <= 2 * N - 1 ; i += 2) {
    if(br < N - 1) {
        let j = Math.floor(( 2 * N - 1- i) / 2);
        let red = ' '.repeat(j) + '*'.repeat(i);
        console.log(red); 
    } br++;
} 
console.log(sredina);
for(let i = 2 * N - 3; i > 0; i -= 2) {
    if(br2 < N - 1) {
        let j = Math.floor(( 2 * N - 1- i) / 2);
        let red = ' '.repeat(j) + '*'.repeat(i);
        console.log(red); 
    }br2++;
} 