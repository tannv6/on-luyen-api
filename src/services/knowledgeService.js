const Knowledge = require("../entity/knowledgeEntity");

const getAllKnowledge = async (req, res) => {
  try {
    const data = await Knowledge.find({});
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ data: "ERROR" });
  }
};

const createNewKnowledge = async (req, res) => {
  const newAcc = new Knowledge({ full_name: "bao" });
  newAcc.save();
  return res.redirect("/knowledge");
};

module.exports = { getAllKnowledge, createNewKnowledge };
