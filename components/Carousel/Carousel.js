class Carousel {

    constructor (element) {
        this.element = element;
        this.image = [ ...document.querySelectorAll('.carousel img')]
            .map(img => new CarouselImage(img));
        this.buttons = [...document.querySelectorAll('[class$="button"]')]
            .map(button => new CarouselButton(button));
        this.current = 0;

        this.images[this.current].show();
        this.setEventHandlers();
        this.timer = this.sliderAuto();
    }

    setEventHandlers() {
        this.buttons.forEach(button => {
            button.element.addEventListener('click', (event) => {
                this.slideImage(button.direction);
            });
        });
 
        this.element.addEventListener('mouseenter', event => clearInterval(this.timer));
        this.element.addEventListener('mouseleave', event => {
            this.timer = this.sliderAuto()
        });
    }
 
    slideImage(direction) {
        let next;
        if (direction === 'left') {
            next = (this.current < this.images.length - 1) ? this.current + 1 : 0;
        } else {
            next = (this.current > 0) ? this.current - 1 : this.images.length - 1;
        }
 
        this.images[this.current].hide();
        this.images[next].show();
        this.current = next;
    }
 
    sliderAuto() {
        return setInterval(() => {
            this.slideImage('left');
        }, 2200)
    }
 }

class CarouselImage {
    constructor(img) {
        this.img = img;
    }
 
    show() {
        this.img.style.display = 'inline-block';
    }
 
    hide() {
        this.img.style.display = 'none';
    }
}

class CarouselButton {

}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
