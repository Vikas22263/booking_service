const { BookingRepository } = require("../service/create-service");

const bookingrepository = new BookingRepository();
const booking = async (req, res) => {
  try {
    const response = await bookingrepository(req.body);
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
