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
    console.log(headlines)
    for (let i = 0; i < headlines.length; i++) {
        let link = document.createElement('a')
        link.setAttribute('href', '#' + headlines[i].id)
        link.innerHTML = '#'
        link.classList.add('post-jumplink')
        console.log(link)
        headlines[i].insertAdjacentElement('afterbegin', link)
    }

    let paragraphs = document.querySelectorAll('.post-content p');
    for (let i = 0; i < paragraphs.length; i++) {
        let image = paragraphs[i].querySelector('img, video');
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

    // Sort out home hover
    let homeItems = document.querySelectorAll('.project-list-item, .post-list-item');
    console.log(homeItems)
    for (let i = 0; i < homeItems.length; i++) {
        homeItems[i].addEventListener('mouseover', function () {
            let year = this.getAttribute('data-year');
            this.parentNode.setAttribute('data-active-year', year);
        })
    }

    let goods = document.querySelectorAll('.good');
    let state = {
        goodActive: false,
    }
    let allAnimationImages = document.querySelectorAll('.good-image-animation');
    let openGood = function (activeGood) {
        let animationImage = activeGood.querySelector('.good-image-animation');
        state.goodActive = true;
        animationImage.style.zIndex = 200;
        document.body.classList.add('good-active')
        let box = animationImage.getBoundingClientRect();
        let scaleFactor = (window.innerHeight / box.height) * .95;
        let h = box.height * scaleFactor;
        let w = box.width * scaleFactor;
        xReference = window.innerWidth / 2 + 100;
        let offsetTop = -(box.top - ((h - box.height) / 2)) * .95;
        let offsetLeft = (xReference - box.left) - w / 2;
        animationImage.style.transform = 'translateX(' + offsetLeft + 'px) translateY(' + offsetTop + 'px) scale(' + scaleFactor + ')';
        activeGood.classList.add('active')
    }
    let closeGood = function (activeGood) {
        let animationImage = activeGood.querySelector('.good-image-animation');
        document.body.classList.remove('good-active')
        activeGood.classList.remove('active')
        animationImage.style.transform = '';
        state.goodActive = false;
        setTimeout(function () {
            for (let i = 0; i < allAnimationImages.length; i++) {
                allAnimationImages[i].style.zIndex = 0;
            }
        }, 600)
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
    closeGoodButton.addEventListener('click', function (e) {
        e.preventDefault();
        let image = document.querySelector('.good.active');
        console.log(image)
        closeGood(image);
    })


}, false);