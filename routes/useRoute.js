const express=require('express');
  
const getAllUsers=(req,res)=>{
    res.status(500).json({
        status:"error",
        message:"Internet server error",
    });
};
const createUser=(req,res)=>{
    res.status(500).json({
        status:"error",
        message:"Internet server error",
    });
};
const getsingleUser=(req,res)=>{
    res.status(500).json({
        status:"error",
        message:"Internet server error",
    });
};
const updateUser=(req,res)=>{
    res.status(500).json({
        status:"error",
        message:"Internet server error",
    });
};
const deleteUser=(req,res)=>{
    res.status(500).json({
        status:"error",
        message:"Internet server error",
    });

    
};

const router = express.Router();


// Users Routes
router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getsingleUser)
    .patch(updateUser)
    .delete(deleteUser);

// Use Routers
app.use("/api/v1/device", nftsRouter);
app.use("/api/v1/users", userRouter);


module.exports=router