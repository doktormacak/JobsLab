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

    var modallink=document.querySelector('.modallink');
    var modalBg=document.querySelector('.modal-bg');
    var modalClose=document.querySelector('.modal-close');


    modallink.addEventListener('click',function(){
        modalBg.classList.add('bg-active');

    });

    modalClose.addEventListener('click',function(){
        modalBg.classList.remove('bg-active');
    });
