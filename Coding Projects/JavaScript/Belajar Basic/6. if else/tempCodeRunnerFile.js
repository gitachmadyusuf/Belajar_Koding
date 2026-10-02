var s = '';
var tinggi = 5;

for (var i = 1; i <= tinggi; i++) {
    for (var j = 1; j <= tinggi - i; j++) {
        s += ' ';
    }
    s += '1 ';

    s += '\n';
}
console.log(s);