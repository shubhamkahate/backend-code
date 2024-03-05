const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => {
                next(err)
            })
    }
}

export { asyncHandler }







//const asyncHandler = (fn)=> async()=>{}

// const asyncHandler = (fn)=> async(req,res,next)=>{
// try {
    
// } catch (error) {
//     res.status(err.code || 5000).json({
//         success: false,
//         message: err.message
//     })
// }
// }