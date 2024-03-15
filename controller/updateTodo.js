const Todo =   require('../modals/Todo');

exports.updateTodo =async(req,res) =>{
    try {
        const{id} =req.params;
        const{Title,Description} =req.body;
        const todo=await Todo.findByIdandUpdate(
            {_id:id},
            {Title,Description,updatedAt:Date.now()},
        )
        res.status(200).json(
            {
            success:true,
            data:response,
            message:"Updated Successfully",
        }
        )
        
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal error",
                message:error,
            }
        )
        
    }
}