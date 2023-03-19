const Knowledge = require("../entity/knowledgeEntity");

const getAllKnowledge = async (req, res) => {
  try {
    const data = await Knowledge.find({});
    res.status(200).json({
      status: "success",
      data,
    });
  } catch {
    res.status(500).json({ data: "ERROR" });
  }
};

const createNewKnowledge = async (req, res) => {
  const { knowledge_name, answer } = req.body || {};
  if (knowledge_name && answer) {
    const newAcc = new Knowledge({
      knowledge_name: knowledge_name,
      answer: answer,
    });
    newAcc.save();
    res.status(200).json("success");
  } else {
    res.status(500).json({ data: "ERROR" });
  }
};

const updateKnowledge = async (req, res) => {
  const { knowledge_name, answer, id } = req.body || {};
  if (id && knowledge_name && answer) {
    await Knowledge.findByIdAndUpdate(id, {
      knowledge_name,
      answer,
    });
    res.status(200).json("success");
  } else {
    res.status(500).json({ data: "ERROR" });
  }
};

const deleteKnowledge = async (req, res) => {
  try {
    const data = await Knowledge.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch {
    res.status(500).json({ data: "ERROR" });
  }
};

module.exports = {
  getAllKnowledge,
  createNewKnowledge,
  deleteKnowledge,
  updateKnowledge,
};
