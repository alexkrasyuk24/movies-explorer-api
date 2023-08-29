const userRouter = require('express').Router();

const {
  updateUserInfoValidator,
} = require('../middlewares/validation');

const { getUserInfo, updateUserInfo } = require('../controllers/users');

userRouter.get('/users/me', getUserInfo);

userRouter.patch('/users/me', updateUserInfoValidator, updateUserInfo);

module.exports = userRouter;
