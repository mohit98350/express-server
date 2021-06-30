const express =require("express");
const auth = require('../Utils/auth');
const router = express.Router();
const {updateName,updatePassword,
updatePasswordValidations} =require("../controllers/profileController");
router.post('/updateName',auth,updateName);
router.post('/updatePassword',[auth,updatePasswordValidations],updatePassword)
module.exports = router;