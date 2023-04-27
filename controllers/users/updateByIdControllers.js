require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const updateByIdControllers = catchAsyncWrapper(async (req, res) => {
  const userId = req.user._id;

  // if (userId !== req.user._id.toString()) {
  //   return res.status(404).json({
  //     message: 'Not autorized',
  //   });
  // }

  const {file} = req;
  // console.log('CL: ~ file: updateByIdControllers.js:17 ~ file:', file);

  const userData = req.body;
  const updatedUser = await users.updateById(userId, file, userData);
  res.json({
    status: 'success',
    code: 201,
    message: 'fields update',
    data: {
      updatedUser,
    },
  });
});

module.exports = updateByIdControllers;
