const { Booking } = require("../models/index");

class createBooking {
  async createbooking(data) {
    try {
      const create = await Booking.create({ data });
      return create;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = createBooking;
