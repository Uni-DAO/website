const images = document.getElementsByTagName('img');
imgArray = Array.from(images);

let options = {
    rootMargin: '0px',
    threshold: .25
}

let setItemActive = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting
            && navigator.userAgent.toLowerCase().match(/mobile/i)) {
            entry.target.classList.add('active');
        }

        if (!(entry.isIntersecting)
            && entry.target.classList == 'gallery-img active'
            && navigator.userAgent.toLowerCase().match(/mobile/i)) {
            entry.target.classList.remove('active');
        }
    })
}

let observer = new IntersectionObserver(setItemActive, options);

imgArray.forEach(img => {
    observer.observe(img);
});