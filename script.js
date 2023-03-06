const rovasiras = {
    a: '𐲀',
    á: '𐲁',
    b: '𐲂',
    c: '𐲄',
    cs: '𐲆',
    d: '𐲇',
    dz: '𐲇‍𐲯',
    dzs: '𐲇‍𐲰',
    e: '𐲉',
    é: '𐲋',
    f: '𐲌',
    g: '𐲍',
    gy: '𐲎',
    h: '𐲏',
    i: '𐲐',
    í: '𐲑',
    j: '𐲒',
    k: '𐲓',
    l: '𐲖',
    ly: '𐲗',
    m: '𐲘',
    n: '𐲙',
    ny: '𐲚',
    o: '𐲛',
    ó: '𐲜',
    ö: '𐲞',
    ő: '𐲟',
    p: '𐲠',
    q: '𐲓‍𐲮',
    r: '𐲢',
    s: '𐲤',
    sz: '𐲥',
    t: '𐲦',
    ty: '𐲨',
    u: '𐲪',
    ú: '𐲫',
    ü: '𐲬',
    ű: '𐲭',
    v: '𐲮',
    w: '𐲮‍𐲮',
    x: '𐲓‍𐲥',
    y: '𐲒‍𐲐',
    z: '𐲯',
    zs: '𐲰',
};

let letters = [];

function isDuplicate(array, letter) {
    for (let item of array) {
        if  (item == letter) {
            return true;
        }
    }
    return false;
}

let counter = 0;
document.querySelector('button').addEventListener('mousedown', () => {
    let randomLetter = '';
    let randomNumber = 0;
    while (true) {
        randomNumber = Math.floor(Math.random() * 43);
        randomLetter = String(Object.values(rovasiras)[randomNumber]);
        if (isDuplicate(letters, randomLetter) == false && counter < 43) {
            letters.push(randomLetter);
            document.getElementById('rovas').innerText = randomLetter;
            document.getElementById('latin').innerText = Object.keys(rovasiras)[randomNumber].toUpperCase();
            counter++;
            if (counter == 43) {
                counter = 0;
                letters = [];
                break;
            };
            break;
        }
    }
});