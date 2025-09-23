import aiServiceHinglish from '../services/ai.serviceHing.js'


const getReviewHinglish = async (req,res) => {
    const code = req.body.code;
    if (!code){
        return res.status(400).send("Code is required");
    }

    const response = await aiServiceHinglish(code);
   
    res.send(response);
}
export default getReviewHinglish;


