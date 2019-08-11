import {ApartmentBox} from "./ApartmentBox";
require('jquery');

export class ContentHandler {
    constructor(apartmentData) {
        this.aptartmentData = apartmentData;
        this.defaultLenght = 12;
        this.defaultCardsToLoad = 20;
        this.cardsToLoad = null;
        this.renderedCardsCount = null;
        this.loadCardsButton = document.querySelector('.apartments__button');
        this.priceSortButton = document.querySelector('.apartments__price-sort');
        this.roomSortButton = document.querySelector('.apartments__rooms-sort');
    }

    createContent() {
        for (let i = 0; i < this.defaultLenght; i++) {
            const card = this.aptartmentData[i];
            this.renderedCardsCount++;
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
        this.loadButtonHandler();
        this.priceSortButton.addEventListener('click', () =>
            this.sortHandler(this.priceSortButton, 'price'));
        this.roomSortButton.addEventListener('click', () =>
            this.sortHandler(this.roomSortButton, 'roomCount'));
        this.loadCardsButton.addEventListener('click', () => this.loadCards());
    }

    loadButtonHandler() {
        //this.cardsToLoad = this.aptartmentData.length - this.renderedCards.length;
        this.cardsToLoad = this.aptartmentData.length - this.renderedCardsCount;
        this.cardsToLoad > this.defaultCardsToLoad ? this.cardsToLoad = this.defaultCardsToLoad : this.cardsToLoad;

        if (this.cardsToLoad === 0) {
            return this.loadCardsButton.parentNode.removeChild(this.loadCardsButton);
        }
        this.loadCardsButton.innerHTML = `Показать еще ${this.cardsToLoad}`;
    }

    loadCards() {
        const length = this.renderedCardsCount + this.cardsToLoad;

        for (let i = this.renderedCardsCount; i < length; i++) {
            const card = this.aptartmentData[i];
            //this.renderedCards.push(card);
            this.renderedCardsCount++;
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
        this.loadButtonHandler();
    }

    sortHandler(element, sortParam) {
        $(element).toggleClass('ascend');
        $(element).toggleClass('descend');

        $(element).hasClass('descend')
            ? $(element).find('.apartments__button-circle').addClass('apartments__button-circle_rotate')
            : $(element).find('.apartments__button-circle').removeClass('apartments__button-circle_rotate');

        $(element).hasClass('ascend')
            ? this.aptartmentData.sort((a, b) => {return a[sortParam] - b[sortParam]})
            : this.aptartmentData.sort((a, b) => {return b[sortParam] - a[sortParam]});

        this.renderSortedCards();
    }

    renderSortedCards() {
        const cardsContainer = document.querySelector('.apartments__inner-wrapper');
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild)
        }

        for (let i = 0; i < this.renderedCardsCount; i++) {
            const card = this.aptartmentData[i];
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
    }
}