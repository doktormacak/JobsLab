const brgr = document.getElementById('brgrBtn');
const dropDown = document.getElementById('logoWr');
const headWrapp = document.getElementById('headWrapp');

const searchBar = document.getElementById('searchInput');
const jobColection = document.getElementById('jobList');



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


const fetchJobs = () => {
    const jobList = [];
    const allJobs = [];
    
    for (let i = 0; i <=99; i++ ) {
        const url = `https://www.themuse.com/api/public/jobs?page=${i}`;
        jobList.push(fetch(url)
        .then((response) => response.json()));
    }
    Promise.all(jobList)
    .then((works) => {
        works.forEach((work) => {
            const filteredLocation = work.results.filter(function(ele) {
                if (ele.locations.length != 0 ) {
                    return ele;
            }})
            const robs = filteredLocation.map((eki) => ({
                job: eki.name,
                location: eki.locations[0].name, 
                company: eki.company.name,
                levels: eki.levels[0].short_name,
                publication: new Date(eki.publication_date),
            }))
            allJobs.push(...robs);
        })
        
       
        
    })
    return allJobs;
    
}


allJobs = fetchJobs();

searchInput = addEventListener('keyup', (e) => {

    const searchString = e.target.value;
    if(document.getElementById('filterJob').checked)
    {
    const filteredJobs = allJobs.filter((jobs) => {
        return (jobs.job.includes(searchString));
    });
    
    displayByJobs(filteredJobs);}

    else if(document.getElementById('filterLocation').checked)
    {
        const filteredJobs = allJobs.filter((jobs) => {
            return (jobs.location.includes(searchString));
        });
        
        displayByJobs(filteredJobs);}

    else if(document.getElementById('filterLevels').checked)
    {
        const filteredJobs = allJobs.filter((jobs) => {
            return (jobs.levels.includes(searchString));
        });
        
        displayByJobs(filteredJobs);}    
})


const displayByJobs = (jobs) => {
    const htmlString = jobs.map((jobs) => { 
        return `<div class="jobListItem"> 
            <h3 class="jobName">${jobs.job}</h3>
            <p class="companyName">${jobs.company}</p>
            <p class="jobInfo">${jobs.location}</p>
            <p class="jobInfo">${jobs.levels} level</p>
            <p class="jobInfo">published: ${jobs.publication.toLocaleString("en-AU")}</p>   
        </div>`;
    }).join(``);
    jobColection.innerHTML = htmlString;

}


const loadmore = document.querySelector('#loadmore');
    let currentItems = 0;
    loadmore.addEventListener('click', ( ) => {
        const elementList = [...document.querySelectorAll('.jobListItem')];
        for (let i = currentItems; i < currentItems + 4 ; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 4;

        // Load more button will be hidden after list fully loaded
        // if (currentItems >= elementList.length) {
        //     event.target.style.display = 'none';
        // }
    })