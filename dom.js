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
              return `<div class="col" >
              <div class="imgBox">
                <img src="./undraw_Firmware_re_fgdy.png" alt="jobs">
              </div>
              <div class="content" id="app">
                <a href="#modal1" class="modallink" ><h2 class="Title">${job.name}</h2></a>
                <div class="disNone"><p class="paragr">${job.name}</p>
                <img src="./undraw_Firmware_re_fgdy.png" alt="jobs">
                <p>Company: ${job.company.name}</p>
                <p>Id: ${job.id}</p>
                <p>Type: ${job.type}</p>
                <p class="landing_page">Page: ${job.refs.landing_page}</p>
               </div>
                <p class="about">Type: ${job.type}</p>
                </br><p class="company">Company: ${job.company.name}</p>
           </div>
           
          </div>`;
          }).join( ` `);
             console.log(html);
          document
          .querySelector('#app')
            .innerHTML=html;
        var modallinks=document.querySelectorAll('.modallink');

        var modalBg=document.querySelector('.modal-bg');
        var modalClose=document.querySelector('.modal-close');

        modalClose.addEventListener('click',function(){
            modalBg.classList.remove('bg-active');
        });

        modallinks.forEach((modallink)=>{
            modallink.addEventListener('click',function(e){
                modalBg.classList.add('bg-active');
                console.log(e.target.parentNode.nextElementSibling)
                modalBg.firstElementChild.innerHTML=e.target.parentNode.nextElementSibling.innerHTML;
            });
        });

      }).catch(error =>{
           console.log(error);
      });
    }
fetchData();



/*var modallinks=document.querySelectorAll('.modallink');
    var modalBg=document.querySelector('.modal-bg');
    


    modallinks.forEach((modallink)=>{

       
        modallink.addEventListener('click',function(){
        
        modalBg.classList.add('bg-active');});

    });

    
    
    
    
    
    
    
    modalClose.addEventListener('click',function(){
        modalBg.classList.remove('bg-active');
    });*/

