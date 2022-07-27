var hotel = {
    name : 'Park',
    rooms: 120,
    booked: 77,
    checkAvailablility : function (){
        return this.rooms - this.booked;
    }
};
var elname = document.getElementById('hotelName');
elname.textContent = hotel.name;
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablility();