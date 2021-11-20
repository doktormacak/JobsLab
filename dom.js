const loadmore = document.querySelector('#loadmore');
    let currentItems = 3;
    loadmore.addEventListener('click', ( ) => {
        const elementList = [...document.querySelectorAll('.toprated .col')];
        for (let i = currentItems; i < currentItems + 3 ; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 3;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
 

    
    function fetchData(){
      fetch("https://www.themuse.com/api/public/jobs?page=1").then(response=>{
          if(!response.ok){
            throw Error("ERROR");
          }
          return response.json();
          
      }).then(data=>{
          console.log(data.results);
          const html=data.results.map(job=>{
              return `<div class="col">
              <div class="imgBox">
                <img src="./undraw_Firmware_re_fgdy.png" alt="jobs">
              </div>
              <div class="content" id="app">
                <a href="#modal1" class="modallink"  data-target="modal1"><h2 class="Title">${job.name}</h2></a>
                <p class="about">${job.type}</p>
                <p class="company">${job.company.name}</p>
           </div>
           
          </div>`;
          }).join( ` `);
          console.log(html);
          document
          .querySelector('#app')
          .innerHTML=html;
      }).catch(error =>{
          console.log(error);
      });
    }
fetchData();


var modallinks=document.querySelector('.modallink');
    var modalBg=document.querySelector('.modal-bg');
    var modalClose=document.querySelector('.modal-close');


   

       
        modallink.addEventListener('click',function(){
        
        modalBg.classList.add('bg-active');});

    

    
    
    
    
    
    
    
    modalClose.addEventListener('click',function(){
        modalBg.classList.remove('bg-active');
    });

