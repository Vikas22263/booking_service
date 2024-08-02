const {Router}=require("express");
const router=Router()
const {booking}=require("../../controllers/booking-controller")

router.post("/booking",booking)


module.exports=router