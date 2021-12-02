const brgr = document.getElementById('brgrBtn');
const dropDown = document.getElementById('logoWr');
const headWrapp = document.getElementById('headWrapp')

brgr.onclick = () => {
    if (brgr.classList.contains('x')) {
        brgr.classList.remove('x');
        dropDown.classList.remove('x');
        headWrapp.classList.remove('x');
    }
    else {
        brgr.classList.add('x');
        dropDown.classList.add('x');
        headWrapp.classList.add('x');
    }
    
    if (brgr.classList.contains('x') === false) {
        brgr.classList.add('o');
    }
    else {
        brgr.classList.remove('o');
    }
};
