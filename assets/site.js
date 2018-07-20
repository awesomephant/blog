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

    projectImageOverlay.addEventListener('click', function(){
        this.classList.remove('active');
    })
    
    for (let i = 0; i < projectImages.length; i++){
        let pi = projectImages[i];
        pi.addEventListener('click', function(e){
            projectImageOverlay.classList.add('active');
            console.log(this);
            projectImageOverlay.style.backgroundImage = 'url(' + this.getAttribute('src') + ')';
        })
    }
    
}, false);