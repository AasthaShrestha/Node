const multer=require('multer')

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./storage')
        // cb-->callback(error,success)
        // cb(null-->error aauda kei nagar )
        // cb('.storage'-->success vayesi yo thau ma lagera store gar vanyo)
    },
    filename:function(req,file,cb){
        cb(null,"Aastha"+file.originalname)
        // same name ko file pathayo vaneh double file upload hudena 
        // just replace vayera basxa
    }
})
module.exports={multer,storage}
// common js(cjs) standard
// to import and export
// frontend bata gariyo vane ecma js standard use hunxa