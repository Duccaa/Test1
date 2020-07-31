let n = 9;
let c = 1;
let br = 0;
let p1 = '';
let p2 = '';
let p3 = '';
let p4 = '';
let p5 = '';
let p6 = '';
let p7 = '';
let p8 = '';
let p9 = '';

console.log('- - - TABLICA  MNOŽENJA - - -');
console.log('    1  2  3  4  5  6  7  8  9');
console.log('  ----------------------------');

for (let i = 1; i <= n; i++) {
    p1 += c * i + '  ' 
    br++;
} 
console.log(`1 | ${p1}`);

for (let i = 1; i <= n; i++) {
    if(i < 5) {
        p2 += c * i * 2 + '  '    
    } else {
        p2 += c * i * 2 + ' '     
    }
    br++;
} 
console.log(`2 | ${p2}`);

for (let i = 1; i <= n; i++) {
    if(i < 4) {
    p3 += c * i * 3  + '  '    
    } else {
        p3 += c * i * 3  + ' ' 
    }
    br++;
} 
console.log(`3 | ${p3}`);

for (let i = 1; i <= n; i++) {
    if(i < 3) { 
        p4 += c * i * 4 + '  '
    } else {
        p4 += c * i * 4 + ' ' 
    }
    br++;
} 
console.log(`4 | ${p4}`);

for (let i = 1; i <= n; i++) {
    if(i < 2) {
        p5 += c * i * 5 + '  ' 
    } else {
        p5 += c * i * 5 + ' ' 
    }
    br++;
} 
console.log(`5 | ${p5}`);

for (let i = 1; i <= n; i++) {
    if(i < 2) {
        p6 += c * i * 6 + '  ' 
    } else {
        p6 += c * i * 6 + ' '
    }
    br++;
} 
console.log(`6 | ${p6}`);

for (let i = 1; i <= n; i++) {
    if(i < 2) {
        p7 += c * i * 7 + '  '
    } else {
        p7 += c * i * 7 + ' '
    }
    br++;
} 
console.log(`7 | ${p7}`);

for (let i = 1; i <= n; i++) {
    if(i < 2) {
        p8 += c * i * 8  + '  ' 
    } else {
        p8 += c * i * 8  + ' '
    }
    br++;
} 
console.log(`8 | ${p8}`);

for (let i = 1; i <= n; i++) {
    if(i < 2) {
        p9 += c * i * 9  + '  '
    } else {
        p9 += c * i * 9  + ' ' 
    }
    br++;
} 
console.log(`9 | ${p9}`);
