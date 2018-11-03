const item1 = document.getElementById('element1');
const item2 = document.getElementById('element2');
const item3 = document.getElementById('element3');
const span = document.querySelectorAll('span');
const arr = [item1,item2,item3];
let index = 0;
let prev;

const slider = {
    set: function(el, buttom) {
        el.classList.toggle("animation-comment-visibil");
        buttom.style.background = "white";
        prev === undefined ? "": this.dellete(arr[prev], span[prev]);
        prev = index;
    },
    dellete: function(prevElement, buttom) {
        setTimeout(function() {
            prevElement.classList.toggle("animation-comment-visibil");
        }, 20000)

        buttom.style.background = "transparent";
    },
    init: function() {
        this.set(arr[index], span[index]);
    },
    right: function() {
        ++index;
        if(index === arr.length) index = 0;
        this.set(arr[index], span[index]);     
    }
}



window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    },20000);
};