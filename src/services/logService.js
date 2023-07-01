const LogEntity = require("../entity/logEntity");


const log = async (req, res) => {
    try {
        const { type, time, ip, deviceWidth, deviceHeight } = req.body || {};
        const logRow = new LogEntity({
            type,
            time,
            ip,
            deviceWidth,
            deviceHeight,
        });
        logRow.save();
        return res.status(200).json("success");
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getAllLogs = async (req, res) => {
    try {
        const data = await LogEntity.find({});
        return res.status(200).json({
            status: "success",
            data,
        });
    } catch {
        return res.status(500).json("error");
    }
};
module.exports = { log, getAllLogs };
