import {ContentHandler} from './ContentHandler';
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('apt_data/apartments.json')
    .then(response => response.json())
    .then(data => {
        const handler = new ContentHandler(data);
        handler.createContent();
    });