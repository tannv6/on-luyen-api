const AccountEntity = require("../entity/accountEntity");

const login = async (req, res) => {
  try {
    const { user_name, pass } = req.body;

    const data = await AccountEntity.findOne({ user_name, pass });

    if (data) {
      return res.status(200).json({
        status: "success",
        data,
      });
    } else {
      return res.status(500).json("error");
    }
  } catch {
    return res.status(500).json("error");
  }
};

module.exports = { login };
