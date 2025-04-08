const {Router} = require('express');
const cors = require('cors')
const userRoutes = require("./UserRoutes");

const router = Router();

router.use(cors())

router.use('/user', userRoutes);

module.exports = router;