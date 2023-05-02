import PostModel from '../models/Post.js';

export const getGrade = async (req, res) => {
    try {
        const posts = await PostModel.find().limit(100).exec();
        const gradeUnfiltered = posts
        
        //Sorry, I can't show all code. But don't worry, it works! 

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не вдалос завантажити теги",
        })
    }
};


export const getLastSubj = async (req, res) => {
    try {
        const posts = await PostModel.find().limit(100).exec();
        const subjUnfiltered = posts
        //Sorry, I can't show all code. But don't worry, it works! 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не вдалос завантажити теги",
        })
    }
};
export const getSubjGr = async (req, res) => {
   
    try {
        const posts = await PostModel.find( {grade: req.params.gradeN } ).limit(200).exec();
        const subjUnfiltered = posts
        //Sorry, I can't show all code. But don't worry, it works! 
    } catch (err) {
        console.log(err);
        //Sorry, I can't show all code. But don't worry, it works! 
    }
};


export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();
        res.json(posts);
    } catch (err) {
        console.log(err);
        //Sorry, I can't show all code. But don't worry, it works! 
    }
};
export const getAllF = async (req, res) => {
    try {
        //Sorry, I can't show all code. But don't worry, it works! 
    } catch (err) {
        console.log(err);
       //Sorry, I can't show all code. But don't worry, it works! 
    }
};
export const getGrSubjPost = async (req, res) => {
    //Sorry, I can't show all code. But don't worry, it works! 
    try {
        //Sorry, I can't show all code. But don't worry, it works! 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не вдалос завантажити статті",
        })
    }
};
export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndDelete({
            _id: postId,
        }, (err, doc) =>{
            //Sorry, I can't show all code. But don't worry, it works! 
        })
        
    }catch (err) {
        console.log(err);
        res.status(500).json({
        message: "Не вдалос завантажити статті",
        })
    }
};
export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndUpdate(
           //Sorry, I can't show all code. But don't worry, it works! 

        ).populate('user');
        
    }catch (err) {
        console.log(err);
        res.status(500).json({
        message: "Не вдалос завантажити статті",
        })
    }
};
export const update = async (req, res) => {
    try {
      const postId = req.params.id;
        await PostModel.updateOne(
            //Sorry, I can't show all code. But don't worry, it works! 
        );
        res.json({
            success: true,
        })  
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося оновити статтю',
        });
    }
    
};

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            //Sorry, I can't show all code. But don't worry, it works! 
        });

        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося створити статтю',
        })
        
    }
}; 