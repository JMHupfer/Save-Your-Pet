const router = require('express').Router();
const {
  createAccount,
  getSingleAccount,
  saveAdoption,
  saveMedicine,
  deleteAdoption,
  deleteMedicine,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createAccount).put(authMiddleware, saveAdoption, saveMedicine);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleAccount);

// router.route('//:bookId').delete(authMiddleware, deleteAdoption, deleteMedicine);

module.exports = router;
