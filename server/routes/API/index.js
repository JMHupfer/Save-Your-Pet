const router = require('express').Router();
const accountsRoutes = require('./account-routes');

router.use('/accounts', accountsRoutes);

module.exports = router;
