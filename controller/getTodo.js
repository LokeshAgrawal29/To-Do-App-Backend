const Todo = require('../modals/Todo');

exports.getTodo =async(req,res)=>{
  try {
    const todo= await Todo.find({});
    res.status(200)
    .json({
        success:true,
        data:todo,
        message:"Entire Todo is fetched",
    })
    
  } catch (error) {
    console.error(error);
    res.status(500)
    .json({
        success:false,
        error:error.message,
        message:'Server Error',
    })
  }
}


exports.getTodoById =async(req,res) =>{
    try {
        const id =req.params.id;
        const Todo=await Todo.findById({_id:id})
        if(!id)
        {
            return res.status(404).json({
                success:false,
                Message:'Id not found'
            })
        }

        res.status(200).json({
            success:true,
            data:Todo,
            message:"Todo with above Id is fetched",
        })
    } catch (error) {
         console.error(error);
    res.status(500)
    .json({
        success:false,
        error:error.message,
        message:'Server Error',
    });
}
}
