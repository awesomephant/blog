var state = {
    goodActive: false,
    oldScrollPosition: 0
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const footerMessages = [
    'Always up for a good kern.',
    'Thanks for your eyeballs.',
    'Unpaid internships are illegal.',
    'Made by an immigrant.'
]
const addLineNumbers = function () {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < (num - 1); j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    let headlines = document.querySelectorAll('.post-content h2[id], .post-content h3[id]');
    
    for (let i = 0; i < headlines.length; i++) {
        let link = document.createElement('a')
        link.setAttribute('href', '#' + headlines[i].id)
        link.innerHTML = '<svg viewBox="0 0 24 24"><path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>'
        link.classList.add('post-jumplink')
        console.log(link)
        headlines[i].insertAdjacentElement('afterbegin', link)
    }

    let paragraphs = document.querySelectorAll('.post-content p');
    
    for (let i = 0; i < paragraphs.length; i++) {
        let image = paragraphs[i].querySelector('img, video, iframe');
        if (image) {
            paragraphs[i].classList.add('hasimage')
        }
    }

    let footerMsg = document.querySelector('.footer-message');
    footerMsg.innerHTML = footerMessages[getRandomInt(0, footerMessages.length - 1)]

    addLineNumbers();

    let projectImages = document.querySelectorAll('.project-image');
    let projectImageOverlay = document.querySelector('.image-fullscreen');
    if (projectImageOverlay) {

        projectImageOverlay.addEventListener('click', function () {
            this.classList.remove('active');
        })
    }

    for (let i = 0; i < projectImages.length; i++) {
        let pi = projectImages[i];
        pi.addEventListener('click', function (e) {
            projectImageOverlay.classList.add('active');
            console.log(this);
            projectImageOverlay.style.backgroundImage = 'url(' + this.getAttribute('src') + ')';
        })
    }

    let taskItems = document.querySelectorAll('.task-list-item');
    for (let i = 0; i < taskItems.length; i++){
        let done = taskItems[i].querySelector('[checked=checked]')
        if (done){
            taskItems[i].classList.add('done')
        }
    }

    // Sort out home hover
    let homeItems = document.querySelectorAll('.project-list-item, .post-list-item');
    console.log(homeItems)
    for (let i = 0; i < homeItems.length; i++) {
        homeItems[i].addEventListener('mouseover', function () {
            let year = this.getAttribute('data-year');
            this.parentNode.setAttribute('data-active-year', year);
        })
    }

    // Sort out custom cursor
    var last_known_scroll_position = 0;
    var ticking = false;
    let cursorEl = document.querySelector('.cursor')
    function handleCursor(position) {
      //cursorEl.style.transform = 'translateX(' + (position.x - 10) + 'px) translateY(' + (position.y - 5) + 'px)';
      cursorEl.style.left = (position.x - 10) + 'px';
      cursorEl.style.top = (position.y - 5) + 'px';
    }

    window.addEventListener('mousemove', function(e) {
        last_known_position = {
            x: e.clientX,
            y: e.clientY
        };

        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleCursor(last_known_position);
                ticking = false;
            }); 
            ticking = true;
        }
  
    });

    // Sort out shop section
    let goods = document.querySelectorAll('.good');
    let siteWrapper = document.querySelector('.site-wrapper');

    let allAnimationImages = document.querySelectorAll('.good-image-animation');
    let openGood = function (activeGood) {
        console.log(window.scrollY)
        let animationImage = activeGood.querySelector('.good-image-animation');
        let singleGoodEl = document.querySelector('.single-good');
        state.oldScrollPosition = window.scrollY;
        singleGoodEl.style.top = window.scrollY + 'px';
        let detailsBox = singleGoodEl.getBoundingClientRect();
        setTimeout(function(){
            window.scrollTo(0,0)
            singleGoodEl.style.top = '0px';
            siteWrapper.style.maxHeight = detailsBox.height + 'px';
            let newBox = animationImage.getBoundingClientRect();
            animationImage.style.top = newBox.y * -1 + 'px';
        }, 300)
        
        state.goodActive = true;
        animationImage.style.zIndex = 200;
        document.body.classList.add('good-active')
        let box = animationImage.getBoundingClientRect();
        let scaleFactor = 1;
        let clientWidth = document.body.clientWidth;

        // TODO: Be smarter about this, figure out how the image should scale based on its aspect ratio
        scaleFactor = (window.innerWidth / box.width) * .8;
       
        let h = box.height * scaleFactor;
        let w = box.width * scaleFactor;
        let leftAfterScale =  box.left;
        let topAfterScale =  box.top;
        xReference = clientWidth / 2;
        let offsetTop = (0 - topAfterScale);
        let offsetLeft = (xReference - leftAfterScale) - w / 2;
        animationImage.style.transform = 'translateX(' + offsetLeft + 'px) translateY(' + offsetTop + 'px) scale(' + scaleFactor + ')';
        activeGood.classList.add('active')
    }
    let closeGood = function (activeGood) {
        console.log(state)
        let animationImage = activeGood.querySelector('.good-image-animation');
        document.body.classList.remove('good-active')
        siteWrapper.style.maxHeight = 'none';
        activeGood.classList.remove('active')
        animationImage.style.transform = '';
        animationImage.style.top = '0px';
        window.scrollTo(0, state.oldScrollPosition)
        let singleGoodEl = document.querySelector('.single-good');
        singleGoodEl.style.top = state.oldScrollPosition + 'px';

        state.goodActive = false;
        setTimeout(function () {
            for (let i = 0; i < allAnimationImages.length; i++) {
                allAnimationImages[i].style.zIndex = 0;
            }
        }, 300)
    }
    for (let i = 0; i < goods.length; i++) {
        goods[i].addEventListener('click', function () {
            if (state.goodActive) {
                closeGood(this)
            } else {
                openGood(this);
            }
        })
    }

    let closeGoodButton = document.querySelector('#close-good');
    if (closeGoodButton){

        closeGoodButton.addEventListener('click', function (e) {
            e.preventDefault();
            let image = document.querySelector('.good.active');
            closeGood(image);
        })
        
        document.addEventListener('keyup', function(e){
            if (e.keyCode === 27){
                let image = document.querySelector('.good.active');
                closeGood(image);
            }
        })
    }


}, false);