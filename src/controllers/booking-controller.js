const { BookingService } = require("../service/create-service");

const bookingservice = new BookingService();
const booking = async (req, res) => {
  try {
    const response = await bookingservice(req.body);
    return response.status(200).json({
      data: null,
      message: "bookin created succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  booking,
};
