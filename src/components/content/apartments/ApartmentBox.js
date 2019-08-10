import './apartments.json'

export class ApartmentBox {
    constructor(apartmentDetails) {
        this.apartmentDetails = apartmentDetails;
        this.apartmentWrapper = document.querySelector('.apartments__inner-wrapper');
    }

    render() {
        this.renderApartmentCard(this.apartmentDetails);
        ApartmentBox.wishListHandler();
    }

    renderApartmentCard(apartment) {

        const container = document.createElement('div');
        container.classList.add('apartment-box');
        container.classList.add(`apartment-box_${apartment.status}`);

        const select = document.createElement('div');
        select.classList.add('apartment-box__selected-wrapper');
        const star = new Image();
        star.classList.add('apartment-box__star');

        if (apartment.selected) {
            star.classList.add('apartment-box__star_filled');
            star.src = 'images/star_filled.png'
        } else {
            star.classList.add('apartment-box__star_empty');
            star.src = 'images/star_empty.png';
        }

        select.appendChild(star);
        container.appendChild(select);

        if (apartment.offer) {
            ApartmentBox.renderOffer(container, apartment)
        }

        const content = document.createElement('div');
        content.classList.add('apartment-box__content');
        container.appendChild(content);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('apartment-box__image-container');
        const image = new Image();
        image.classList.add('apartment-box__image');
        image.src = apartment.image;
        imageContainer.appendChild(image);
        content.appendChild(imageContainer);

        const name = document.createElement('p');
        name.classList.add('apartment-box__type');
        name.innerHTML = apartment.name;
        content.appendChild(name);

        const detailsBlock = document.createElement('div');
        detailsBlock.classList.add('apartment-box__details');

        const facingBox = document.createElement('div');
        facingBox.classList.add('apartment-box__facing');
        const facingText = document.createElement('p');
        facingText.classList.add('apartment-box__facing-text');
        facingText.innerHTML = apartment.facing;
        facingBox.appendChild(facingText);
        detailsBlock.appendChild(facingBox);

        const areaBox = document.createElement('div');
        areaBox.classList.add('apartment-box__area');
        const area = document.createElement('p');
        area.classList.add('apartment-box__area-current');
        area.innerHTML = `${apartment.area} ${apartment.areaMeasure}`;
        const areaType = document.createElement('p');
        areaType.classList.add('apartment-box__area-type');
        areaType.innerHTML = apartment.areaType;
        areaBox.appendChild(area);
        areaBox.appendChild(areaType);
        detailsBlock.appendChild(areaBox);

        const floorBox = document.createElement('div');
        floorBox.classList.add('apartment-box__floor');
        const floorTextInfo = document.createElement('p');
        floorTextInfo.classList.add('apartment-box__floor-text');
        floorTextInfo.innerHTML = `${apartment.apartmentFloor}/${apartment.totalFloorCount}`;
        const floorType = document.createElement('p');
        floorType.classList.add('apartment-box__floor-type');
        floorType.innerHTML = apartment.floorType;
        floorBox.appendChild(floorTextInfo);
        floorBox.appendChild(floorType);
        detailsBlock.appendChild(floorBox);

        content.appendChild(detailsBlock);

        const priceBox = document.createElement('div');
        priceBox.classList.add('apartment-box__price');
        const price = document.createElement('p');
        price.classList.add('apartment-box__price-sum');
        price.innerHTML =
            `${apartment.price.toString()
                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ${apartment.currency}`;
        priceBox.appendChild(price);
        content.appendChild(priceBox);

        const status = document.createElement('div');
        status.classList.add(`apartment-box__status`);
        status.classList.add(`apartment-box__status_${apartment.status}`);
        const statusText = document.createElement('p');
        statusText.innerHTML = apartment.statusText;
        status.appendChild(statusText);
        container.appendChild(status);

        this.apartmentWrapper.appendChild(container);
    }

    static renderOffer(container, apartment) {
        const offerBox = document.createElement('div');
        offerBox.classList.add('apartment-box__offer');

        const offerValue = document.createElement('div');
        offerValue.classList.add('apartment-box__discount');
        offerValue.innerHTML = `-${apartment.discount}%`;
        offerBox.appendChild(offerValue);

        if (apartment.superOffer) {
            const superOfferValue = document.createElement('div');
            superOfferValue.classList.add('apartment-box__super');
            superOfferValue.innerHTML = apartment.superOfferText;
            offerBox.appendChild(superOfferValue);
        }

        return container.appendChild(offerBox);
    }

    static wishListHandler() {
        const star = document.querySelectorAll('.apartment-box__star');
        for (const item of star) {
            item.addEventListener('click', ApartmentBox.addToWishList);
        }
    }

    static addToWishList(event) {
        if ($(event.target).hasClass('apartment-box__star_filled')) {
            event.target.classList.remove('apartment-box__star_filled');
            event.target.classList.add('apartment-box__star_empty');
            event.target.src = 'images/star_empty.png';
        } else if ($(event.target).hasClass('apartment-box__star_empty')) {
            event.target.classList.remove('apartment-box__star_empty');
            event.target.classList.add('apartment-box__star_filled');
            event.target.src = 'images/star_filled.png';
        }
    }
}