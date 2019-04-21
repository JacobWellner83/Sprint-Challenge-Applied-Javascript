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
}

class CarouselImage {

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
