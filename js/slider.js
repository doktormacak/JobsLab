const container = document.querySelector('.slider');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const closeJobCardBtn = document.querySelector('.closeJobCard');
const aboutJobCard = document.querySelector('.aboutJobCard');
const aboutJob = document.querySelector('.aboutJob');
const readMoreBtn = document.querySelectorAll('.sliderReadMore');
const moreAboutJob = document.querySelectorAll('.sliderMore');
const jobName = document.querySelectorAll('.sliderJobName');
const jobLocation = document.querySelectorAll('.sliderJobLocation');
const jobLevel = document.querySelectorAll('.sliderJobLevel');
const jobCompany = document.querySelectorAll('.sliderJobCompany');
const contents = document.querySelectorAll('.contents');
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
            contents[j].innerHTML = ` <b>${jobs[i].name}</b> <br><br> ${jobs[i].contents} <br> <a href="${jobs[i].refs.landing_page}" target="_blank">Visit</a>`;
            visitJob[j].setAttribute('href', jobs[i].refs.landing_page);
            readMoreBtn[j].addEventListener('click', (e) => {
                e.stopPropagation();
                aboutJob.innerHTML = e.target.previousElementSibling.innerHTML;
                aboutJobCard.classList.remove('aboutJobCardScaleZero');
                aboutJobCard.classList.add('aboutJobCardScale');
            });

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


function getNextJob() {
    if (jobs.length != undefined) {
        if (j === 3) {
            j = 0;
        };

        jobName.forEach(name => {
            jobName[j].innerText = jobs[i].name;
            jobLocation[j].innerHTML = `<b>Location:</b> ${jobs[i].locations[0].name}`;
            jobLevel[j].innerHTML = `<b>Level:</b> ${jobs[i].levels[0].name}`;
            jobCompany[j].innerHTML = `<b>Company:</b> ${jobs[i].company.name}`;
            contents[j].innerHTML = ` <b>${jobs[i].name}</b> <br><br> ${jobs[i].contents} <br> <a href="${jobs[i].refs.landing_page}" target="_blank">Visit</a>`;
            visitJob[j].setAttribute('href', jobs[i].refs.landing_page);
            readMoreBtn[j].addEventListener('click', (e) => {
                e.stopPropagation();
                aboutJob.innerHTML = e.target.previousElementSibling.innerHTML;
                aboutJobCard.classList.remove('aboutJobCardScaleZero');
                aboutJobCard.classList.add('aboutJobCardScale');
            });

            i++;
            j++;
            if (i === 10) {
                i = 0;
            }
        })
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
        contents[j].innerHTML = `<b>${jobs[i].name}</b> <br><br> ${jobs[i].contents} <br> <a href="${jobs[i].refs.landing_page}" target="_blank">Visit</a>`;
        visitJob[j].setAttribute('href', jobs[i].refs.landing_page);
        readMoreBtn[j].addEventListener('click', (e) => {
            e.stopPropagation();
            clearInterval(changeJob);
            aboutJob.innerHTML = e.target.previousElementSibling.innerHTML;
            aboutJobCard.classList.remove('aboutJobCardScaleZero');
            aboutJobCard.classList.add('aboutJobCardScale');
        });

        i--;
        j++;

        if (i === -1) {
            i = 9
        }
    });

}


function mouseIn() {
    mousePosition = true;
    if (changeJob != undefined) {
        clearInterval(changeJob);
    }


};

function mouseOut() {
    mousePosition = false;
    changeJob = setInterval(getPreviousJob, 3000);
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


var changeJob = setInterval(getPreviousJob, 3000);

getJobs();
previousBtn.addEventListener('click', getPreviousJob);
nextBtn.addEventListener('click', getNextJob);
container.addEventListener('mouseenter', mouseIn);
container.addEventListener('mouseleave', mouseOut);
document.addEventListener('keydown', changeWithArrows);
closeJobCardBtn.addEventListener('click', () => {
    aboutJobCard.classList.remove('aboutJobCardScale');
    aboutJobCard.classList.add('aboutJobCardScaleZero');
});


