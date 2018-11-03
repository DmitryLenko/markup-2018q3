const span = document.querySelectorAll('span');
const collection = document.querySelectorAll('.comment-element');
let index = 0;
let prev;

const slider = {
    set: function(el, buttom) {
        el.classList.toggle("animation-comment-visibil");
        buttom.style.background = "white";
        prev === undefined ? "": this.dellete(collection[prev], span[prev]);
        prev = index;
    },
    dellete: function(prevElement, buttom) {
        setTimeout(function() {
            prevElement.classList.toggle("animation-comment-visibil");
        }, 20000)

        buttom.style.background = "transparent";
    },
    init: function() {
        this.set(collection[index], span[index]);
    },
    right: function() {
        ++index;
        if(index === collection.length) index = 0;
        this.set(collection[index], span[index]);     
    }
}



window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    },20000);
};