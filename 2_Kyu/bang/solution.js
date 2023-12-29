//https://www.codewars.com/kata/5970f479e75b6c00ce000043

function bang() {
    let a;
    let object = {
        phi: '1.61803399'
    };
    delete object.phi;
    try {
        Math.floor(Math.pow(Math.PI, ParseInt(object.phi)))
            .toString()
            .split('')
            .reverse()
            .join('');
    } catch (l) {
        a = l;
        a.message = 'Just thro' + 'w like this!';
    }

    (function* () {})()['th' + 'row'](a);
}

//Could use process.emit tho
