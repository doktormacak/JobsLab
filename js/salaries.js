const btn = document.querySelector('#btnSal');
const inputSal = document.querySelector('#inputSal');
const list = document.querySelector('.salaries');
let listArr = [];

async function getSalaries() {
    try {
        const request = await fetch('https://data.montgomerycountymd.gov/resource/48wg-fkab.json');
        const data = await request.json();

        let li;
        list.innerHTML = '';
        data.forEach(element => {
            li = document.createElement('li');
            li.innerText = `${element['position_title']}: ${element['average_of_base_salary']}`;
            list.appendChild(li);
            listArr.push(li.innerText);
        });


        btn.addEventListener('click', () => {
            if (inputSal.value != '') {
                list.innerHTML = '';
                listArr.forEach(salarie => {
                    if (salarie.toLowerCase().includes(inputSal.value)) {
                        li = document.createElement('li');
                        li.innerText = `${salarie}`;
                        list.appendChild(li);

                    }
                });
            }



            if (list.innerHTML === '') {
                list.innerHTML = `<b>Sorry. No information about that job.</b>`;
            };
        });

        inputSal.addEventListener('input', () => {
            if (inputSal.value == '') {
                list.innerHTML = '';
                data.forEach(element => {
                    li = document.createElement('li');
                    li.innerText = `${element['position_title']}: ${element['average_of_base_salary']}`;
                    list.appendChild(li);

                });
            }
        })
    } catch {
        list.innerHTML = `<b>Error occured. Please reload the page</b>`;
    }
}

getSalaries();

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