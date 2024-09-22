let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0; // Start from the first slide

function loadShow() {
    items.forEach((item, index) => {
        if (index === active) {
            item.style.transform = 'translateX(0)';
            item.style.zIndex = 1;
            item.style.filter = 'none';
            item.style.opacity = 1;
        } else {
            let stt = index > active ? index - active : active - index;
            item.style.transform = `translateX(${(index > active ? 1 : -1) * 100}%)`; 
            item.style.zIndex = 0; 
            item.style.filter = 'blur(5px)';
            item.style.opacity = 0.6;
        }
    });
}

// Initial load
loadShow();

next.onclick = function() {
    active = (active + 1) < items.length ? active + 1 : 0; 
    loadShow();
}

prev.onclick = function() {
    active = (active - 1) >= 0 ? active - 1 : items.length - 1; 
    loadShow();
}