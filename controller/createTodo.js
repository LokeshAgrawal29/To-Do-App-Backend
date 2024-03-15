const Todo =   require('../modals/Todo');

exports.createTodo =async(req,res) =>{
    try {
        const{Title,Description}=req.body;
        //Insertion in DB and creating Todo object
        const response= await Todo.create({Title,Description});
        res.status(200).json(
            {
            success:true,
            data:response,
            message:"Entry is Created",
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