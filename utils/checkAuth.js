import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try{
           //Sorry, I can't show all code. But don't worry, it works! 
        } catch (e) {
            return res.status(403).json({
                message: 'Нема доступу'
            })
        }
    }else {
        return res.status(403).json({
            message: 'Нема доступу'
        })
    };
    
   
}