const sections = document.getElementsByTagName('section');
sectionsArray = Array.from(sections);

const smallTitles = document.getElementsByClassName('title--small');
sTitlesArray = Array.from(smallTitles);

const images = document.getElementsByTagName('img');
imgArray = Array.from(images);

const buttons = document.getElementsByClassName('btn');
btnArray = Array.from(buttons);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            console.log(entrie.target)
            entrie.target.classList.add('active');
        }
    })
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

sectionsArray.forEach(section => {
    intersectionObserver.observe(section);
});

sTitlesArray.forEach(title => {
    intersectionObserver.observe(title);
});

imgArray.forEach(img => {
    intersectionObserver.observe(img);
});

btnArray.forEach(btn => {
    intersectionObserver.observe(btn);
});