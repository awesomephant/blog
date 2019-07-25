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
    'Made by an immigrant.',
    'Your friendly neighbourhood hackerman.',
]

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

    let taskItems = document.querySelectorAll('.task-list-item');
    for (let i = 0; i < taskItems.length; i++) {
        let done = taskItems[i].querySelector('[checked=checked]')
        if (done) {
            taskItems[i].classList.add('done')
        }
    }

    // Sort out home hover
    for (i = 2016; i < 2020; i++){
        let writingEl = document.querySelector(`.home-writing [data-year="${i}"]`)
        let workEl = document.querySelector(`.home-work [data-year="${i}"]`)
        if (writingEl){
            writingEl.classList.add('first')
        }
        if (workEl){
            workEl.classList.add('first')
        }
    }
}, false);