const btn = document.querySelector('#btnSal');
const inputSal = document.querySelector('#inputSal');
const list = document.querySelector('.salaries');
let listArr = [];

async function getSalaries() {
    const request = await fetch('https://data.montgomerycountymd.gov/resource/48wg-fkab.json');
    const data = await request.json();

    let li;
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
                    listArr.push(li.innerText);
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
                listArr.push(li.innerText);
            });
        }
    })

}

getSalaries();