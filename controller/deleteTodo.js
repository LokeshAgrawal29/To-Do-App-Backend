const Todo =   require('../modals/Todo');

exports.deleteTodo =async(req,res) =>{
    try {
        const{id} =req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
            success:true,
            
            message:"Deleted Successfully",
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