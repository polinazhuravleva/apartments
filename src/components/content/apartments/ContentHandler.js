import {ApartmentBox} from "./ApartmentBox";

export class ContentHandler {
    constructor(apartmentData) {
        this.aptartmentData = apartmentData;
        this.defaultLenght = 12;
        this.defaultCardsToLoad = 20;
        this.cardsToLoad = null;
        this.loadCardsButton = document.querySelector('.apartments__button');
        this.renderedCards = [];
    }

    createContent() {
        for (let i = 0; i < this.defaultLenght; i++) {
            const card = this.aptartmentData[i];
            this.renderedCards.push(card);
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
        this.loadButtonHandler();
        this.loadCardsButton.addEventListener('click', () => this.loadCards());
    }

    loadButtonHandler() {
        this.cardsToLoad = this.aptartmentData.length - this.renderedCards.length;
        this.cardsToLoad > this.defaultCardsToLoad ? this.cardsToLoad = this.defaultCardsToLoad : this.cardsToLoad;

        if (this.cardsToLoad === 0) {
            return this.loadCardsButton.style.display = 'none';
        }
        this.loadCardsButton.innerHTML = `Показать еще ${this.cardsToLoad}`;
    }

    loadCards() {
        const length = this.renderedCards.length + this.cardsToLoad;

        for (let i = this.renderedCards.length; i < length; i++) {
            const card = this.aptartmentData[i];
            this.renderedCards.push(card);
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
        this.loadButtonHandler();
    }
}