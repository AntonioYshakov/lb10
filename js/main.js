window.addEventListener("DOMContentLoaded",()=>{
    const deadline = '2023-05-22';
    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
              hours = Math.floor((t/(1000*60*60))%24),
              minutes = Math.floor((t/1000/60)%60),
              seconds = Math.floor((t/1000)%60);


        return {
            'total':t,
            'days': days,
            'hours': hours,
            'minutes':minutes,
            'seconds':seconds
        }
    }

    function getZero(num){
        if(num>=0 && num<10){
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector,endTime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock,1000);
        
        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer',deadline);

    $('.slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<svg class="gallery-arrow t-p" width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="prew-arrow" fill-rule="evenodd" clip-rule="evenodd" d="M35.5 11.5385C35.5 11.207 35.3683 10.889 35.1339 10.6546C34.8995 10.4202 34.5816 10.2885 34.25 10.2885H4.76754L12.635 2.42348C12.7513 2.30726 12.8434 2.16928 12.9063 2.01743C12.9692 1.86559 13.0016 1.70283 13.0016 1.53847C13.0016 1.37412 12.9692 1.21136 12.9063 1.05952C12.8434 0.907668 12.7513 0.769694 12.635 0.653474C12.5188 0.537255 12.3808 0.445064 12.229 0.382167C12.0771 0.319269 11.9144 0.286896 11.75 0.286896C11.5857 0.286896 11.4229 0.319269 11.2711 0.382167C11.1192 0.445064 10.9813 0.537255 10.865 0.653474L0.865037 10.6535C0.748629 10.7696 0.656272 10.9075 0.593256 11.0594C0.53024 11.2113 0.497803 11.3741 0.497803 11.5385C0.497803 11.7029 0.53024 11.8657 0.593256 12.0176C0.656272 12.1694 0.748629 12.3074 0.865037 12.4235L10.865 22.4235C10.9813 22.5397 11.1192 22.6319 11.2711 22.6948C11.4229 22.7577 11.5857 22.7901 11.75 22.7901C11.9144 22.7901 12.0771 22.7577 12.229 22.6948C12.3808 22.6319 12.5188 22.5397 12.635 22.4235C12.7513 22.3073 12.8434 22.1693 12.9063 22.0174C12.9692 21.8656 13.0016 21.7028 13.0016 21.5385C13.0016 21.3741 12.9692 21.2114 12.9063 21.0595C12.8434 20.9077 12.7513 20.7697 12.635 20.6535L4.76754 12.7885H34.25C34.5816 12.7885 34.8995 12.6568 35.1339 12.4224C35.3683 12.1879 35.5 11.87 35.5 11.5385Z" fill="white"/></svg>',
        nextArrow: '<svg class="gallery-arrow t-n" width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="next-arrow" fill-rule="evenodd" clip-rule="evenodd" d="M0.499966 12C0.499966 12.3315 0.63166 12.6495 0.866081 12.8839C1.1005 13.1183 1.41845 13.25 1.74997 13.25L31.2325 13.25L23.365 21.115C23.2487 21.2312 23.1566 21.3692 23.0937 21.521C23.0308 21.6729 22.9984 21.8356 22.9984 22C22.9984 22.1644 23.0308 22.3271 23.0937 22.479C23.1566 22.6308 23.2487 22.7688 23.365 22.885C23.4812 23.0012 23.6192 23.0934 23.771 23.1563C23.9229 23.2192 24.0856 23.2516 24.25 23.2516C24.4143 23.2516 24.5771 23.2192 24.7289 23.1563C24.8808 23.0934 25.0187 23.0012 25.135 22.885L35.135 12.885C35.2514 12.7689 35.3437 12.631 35.4067 12.4791C35.4698 12.3272 35.5022 12.1644 35.5022 12C35.5022 11.8356 35.4698 11.6728 35.4067 11.5209C35.3437 11.3691 35.2514 11.2311 35.135 11.115L25.135 1.115C25.0187 0.998785 24.8808 0.906593 24.7289 0.843697C24.5771 0.780798 24.4143 0.748426 24.25 0.748426C24.0856 0.748426 23.9229 0.780798 23.771 0.843697C23.6192 0.906593 23.4812 0.998785 23.365 1.115C23.2487 1.23122 23.1566 1.3692 23.0937 1.52105C23.0308 1.67289 22.9984 1.83565 22.9984 2C22.9984 2.16436 23.0308 2.32712 23.0937 2.47896C23.1566 2.63081 23.2487 2.76879 23.365 2.885L31.2325 10.75L1.74997 10.75C1.41845 10.75 1.1005 10.8817 0.866081 11.1161C0.63166 11.3505 0.499966 11.6685 0.499966 12Z" fill="white"/></svg>'
      });

    //modal

    const openModal = document.querySelector('.open_modal');
    const closeModal = document.querySelector('#close_modal');
    const modal = document.querySelector('.modal__window');
    const br = document.querySelector('.modal__button');
    

    openModal.addEventListener('click',()=>{
        modal.classList.add('mv');
        $('.body').css('overflow-y', 'hidden');
        
    })
    closeModal.addEventListener('click',()=>{
        modal.classList.remove('mv');
        $('.body').css('overflow-y', 'scroll');
    })
    br.addEventListener('click',()=>{
        modal.classList.remove('mv');
        $('.body').css('overflow-y', 'scroll');
    })
})