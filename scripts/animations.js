const sections = document.getElementsByTagName('section');
sectionsArray = Array.from(sections);

const smallTitles = document.getElementsByClassName('title--small');
sTitlesArray = Array.from(smallTitles);

const images = document.getElementsByTagName('img');
imgArray = Array.from(images);

const buttons = document.getElementsByClassName('btn');
btnArray = Array.from(buttons);

let options = {
    rootMargin: '0px',
    threshold: .2
}


let setItemActive = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    })
}

let observer = new IntersectionObserver(setItemActive, options);

sectionsArray.forEach(section => {
    observer.observe(section);
});

sTitlesArray.forEach(title => {
    observer.observe(title);
});

imgArray.forEach(img => {
    observer.observe(img);
});

btnArray.forEach(btn => {
    observer.observe(btn);
});