const rovasiras = {
    a: '๐ฒ',
    รก: '๐ฒ',
    b: '๐ฒ',
    c: '๐ฒ',
    cs: '๐ฒ',
    d: '๐ฒ',
    dz: '๐ฒโ๐ฒฏ',
    dzs: '๐ฒโ๐ฒฐ',
    e: '๐ฒ',
    รฉ: '๐ฒ',
    f: '๐ฒ',
    g: '๐ฒ',
    gy: '๐ฒ',
    h: '๐ฒ',
    i: '๐ฒ',
    รญ: '๐ฒ',
    j: '๐ฒ',
    k: '๐ฒ',
    l: '๐ฒ',
    ly: '๐ฒ',
    m: '๐ฒ',
    n: '๐ฒ',
    ny: '๐ฒ',
    o: '๐ฒ',
    รณ: '๐ฒ',
    รถ: '๐ฒ',
    ล: '๐ฒ',
    p: '๐ฒ ',
    q: '๐ฒโ๐ฒฎ',
    r: '๐ฒข',
    s: '๐ฒค',
    sz: '๐ฒฅ',
    t: '๐ฒฆ',
    ty: '๐ฒจ',
    u: '๐ฒช',
    รบ: '๐ฒซ',
    รผ: '๐ฒฌ',
    ลฑ: '๐ฒญ',
    v: '๐ฒฎ',
    w: '๐ฒฎโ๐ฒฎ',
    x: '๐ฒโ๐ฒฅ',
    y: '๐ฒโ๐ฒ',
    z: '๐ฒฏ',
    zs: '๐ฒฐ',
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