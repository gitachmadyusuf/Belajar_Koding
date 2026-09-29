let tinggi = 5;

for ( let i = 0; i < tinggi; i++) {
    let line = ' '.repeat((rows - i)*2);
    let val = 1;

    for (let j = 0; j <= i; j++ ) {
        line += val + '  ';
        val = val * (i-j)/(j+1);
    }
}
console.log(line);