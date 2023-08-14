const { getDiets } = require("../controllers/dietController");

async function getDietsHandler(req, res){
    try {
        const diet = await getDiets()
        return res.status(200).json(diet)
    } catch (error) {
        return res.status(500).json({error : error})
    }
}

module.exports = {getDietsHandler}