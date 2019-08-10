import {ApartmentBox} from "./ApartmentBox";

export class ContentHandler {
    constructor(apartmentInfo) {
        this.aptartmentInfo = apartmentInfo;
        this.defaultLenght = 12;
        this.renderedCards = []; // массив отрисованных карточек
    }

    createContent() {
        for (let i = 0; i < this.defaultLenght; i++) {
            const card = this.aptartmentInfo[i];
            this.renderedCards.push(card);
            const apartmentCard = new ApartmentBox(card);
            apartmentCard.render();
        }
        //console.log(this.aptartmentInfo.length);
    }

}