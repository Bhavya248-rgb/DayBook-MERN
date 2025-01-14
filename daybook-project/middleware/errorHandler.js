const {constants} = require("../constants");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode?res.statusCode:500;

    switch(statusCode){
        // case 400:
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        // case 404:
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        //case 401:
        case constants.UNAUTHORIZED:
            res.json({
                title:"unauthorized",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        //case 403;
        case constants.FORBIDDEN:
            res.json({
                title:"forbidden",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        //case 500
        case constants.SERVER_ERROR:
            res.json({
                title:"server_error",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        default:
            console.log(err);
            console.log("No Error,All good");
            res.json(err);
            break;
    }
    
    
};

module.exports = errorHandler;