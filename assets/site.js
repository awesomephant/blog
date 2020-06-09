var state = {
    goodActive: false,
    oldScrollPosition: 0
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const footerMessages = [
    'Kern-y.',
    'Thanks for your eyeballs.',
    'Unpaid internships are illegal.',
    'Made by an immigrant.',
    '🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺🇪🇺',
    'Cars into ploughshares'
]
document.addEventListener('DOMContentLoaded', function () {
    let headlines = document.querySelectorAll('.post-content h2[id], .post-content h3[id]');
    for (let i = 0; i < headlines.length; i++) {
        let link = document.createElement('a')
        link.setAttribute('href', '#' + headlines[i].id)
        link.classList.add('post-jumplink')
        headlines[i].insertAdjacentElement('afterbegin', link)
    }

    let paragraphs = document.querySelectorAll('.post-content p');

    for (let i = 0; i < paragraphs.length; i++) {
        let image = paragraphs[i].querySelector('img, video, iframe');
        let text = paragraphs[i].innerText;
        if (image) {
            paragraphs[i].classList.add('hasimage')
        }
        paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/\[\d+\]/g, `<a class='footnote' href='#1'>3</a>`)

    }

    let footnotes = document.querySelectorAll('.footnote')
    for (let i = 0; i < footnotes.length; i++) {
        footnotes[i].innerText = i + 1;
    }

    let footerMsg = document.querySelector('.footer-message');
    footerMsg.innerHTML = footerMessages[getRandomInt(0, footerMessages.length - 1)]

    const images = document.querySelectorAll('img')
    console.log(images)
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded')
        })
    })
}, false);