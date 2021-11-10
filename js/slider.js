const container = document.querySelector('.slider');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const readMoreBtn = document.querySelectorAll('.sliderReadMore');
const moreAboutJob = document.querySelectorAll('.sliderMore');
const jobName = document.querySelectorAll('.sliderJobName');
const jobLocation = document.querySelectorAll('.sliderJobLocation');
const jobLevel = document.querySelectorAll('.sliderJobLevel');
const jobCompany = document.querySelectorAll('.sliderJobCompany');
const visitJob = document.querySelectorAll('.visitJob');
const jobsContainer = document.querySelectorAll('.sliderJobs');

const jobsUrl = 'https://www.themuse.com/api/public/jobs?page=10';

var i = 0;
var j = 0;

var mousePosition = false;
var jobs = [];

async function getJobs(e) {
    try {
        const response = await fetch(jobsUrl);
        const data = await response.json();


        for (let i = 0; i < 10; i++) {
            jobs.push(data.results[i]);
        };



        if (j === 3) {
            j = 0;
        };

        jobName.forEach(name => {
            jobName[j].innerText = jobs[i].name;
            jobLocation[j].innerHTML = `<b>Location:</b> ${jobs[i].locations[0].name}`;
            jobLevel[j].innerHTML = `<b>Level:</b> ${jobs[i].levels[0].name}`;
            jobCompany[j].innerHTML = `<b>Company:</b> ${jobs[i].company.name}`;
            visitJob[j].setAttribute('href', jobs[i].refs.landing_page);
            readMoreBtn[j].addEventListener('click', () => {

            })

            i++;
            j++;
            if (i === 10) {
                i = 0;
            }

        })
    } catch {
        console.error()
        jobsContainer[j].innerHTML = '<h1 style="color: black;">Error Occured!</h1>';
        if (j === 3) {
            j = 0;
        }
    }

}

function getPreviousJob(e) {


    if (j === 3) {
        j = 0;
    }


    jobName.forEach(name => {
        jobName[j].innerText = jobs[i].name;
        jobLocation[j].innerHTML = `<b>Location:</b> ${jobs[i].locations[0].name}`;
        jobLevel[j].innerHTML = `<b>Level:</b> ${jobs[i].levels[0].name}`;
        jobCompany[j].innerHTML = `<b>Company:</b> ${jobs[i].company.name}`;
        visitJob[j].setAttribute('href', jobs[i].refs.landing_page);

        i--;
        j++;

        if (i === -1) {
            i = 9
        }
    });

}


function mouseIn() {
    mousePosition = true;
    console.log('in');
    console.log(mousePosition);
    clearInterval(changeJob);


};

function mouseOut() {
    mousePosition = false;
    console.log('out');
    console.log(mousePosition);
};


function changeWithArrows(e) {
    if (mousePosition == true) {
        switch (e.keyCode) {
            case 37:
                getPreviousJob(e);
                break;
            case 39:
                getJobs(e);
                break;

        }
    }

}


getJobs();
previousBtn.addEventListener('click', getPreviousJob);
nextBtn.addEventListener('click', getJobs);
container.addEventListener('mouseenter', mouseIn);
container.addEventListener('mouseleave', mouseOut);
document.addEventListener('keydown', changeWithArrows);

var changeJob = setInterval(getPreviousJob, 3000);






