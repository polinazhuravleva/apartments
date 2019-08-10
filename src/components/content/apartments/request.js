import {ContentHandler} from './ContentHandler';
require('jquery');

$.ajax({
    type: 'GET',
    url: 'apt_data/apartments.json',
    dataType: 'json',
    success: function (data) {
        const handler = new ContentHandler(data);
        handler.createContent();
    },
    error: function (errorObj) {
        console.log(errorObj);
    }
});
