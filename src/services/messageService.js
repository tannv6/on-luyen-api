const MessageEntity = require("../entity/messageEntity");

const getAllMessage = async (req, res) => {
  try {
    const data = await MessageEntity.find({});
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch {
    return res.status(500).json("error");
  }
};

const createNewMessage = async (req, res) => {
  const { user, content } = req.body || {};
  if (user && content) {
    const message = new MessageEntity({
      user,
      content,
    });
    message.save();
    return res.status(200).json("success");
  } else {
    return res.status(500).json("error");
  }
};

module.exports = { getAllMessage, createNewMessage };
