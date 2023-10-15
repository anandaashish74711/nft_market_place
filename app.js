// const express = require('express');

// const app = express();
// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'Api-starter-file-main', 'nft-data', 'data', 'nft-simple.json');
// app.use(express.json());
// let nfts = JSON.parse(fs.readFileSync(filePath));
// //GET
// app.get('/api/v1/device', (req, res) => {
//     res.status(200).json({
//         status: "success",
//         data: { nfts }
//     });
// });
// //POST 
// app.post('/api/v1/device', (req, res) => {
//     const newId = nfts[nfts.length - 1].id + 1;
//     const newNFT = Object.assign({ id: newId }, req.body);

//     nfts.push(newNFT);

//     fs.writeFile(filePath,
//          JSON.stringify(nfts), 
//          (err) => {
     

//         res.status(204).json({
//             status: "success",
//             nft: newNFT 
//         });
         
//     });
//     res.send("POST NFT");
// });
// //GET SINGLE DATA
// app.get('/api/v1/device/:id', (req, res) => {
//     const id = req.params.id * 1;
//     if(id>nfts.length){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid ID",
//         });
//     }
//     const nft = nfts.find((eL) => (eL.id === id));

//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         },
//     });
// });
// //PATCH METHOD
// app.patch('/api/v1/device/:id',(req,res)=>{
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
    
//     res.status(200).json({
//         status:"sucess",
//         data:{
//             nft:"updating nft"
//         }
//     })
// })
// //DELETE METHOD
// app.delete('/api/v1/device/:id',(req,res)=>{
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
    
//     res.status(404).json({
//         status:"sucess",
//         data:null,
//     })
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });
//PART2
// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const morgan=require("morgan");
// app.use(morgan("dev"));


// //TIMESTAMP
// app.use((req,res,next)=>{
// req.requesTime=new Date().toISOString();
// next();
// });

// const filePath = path.join(__dirname, 'Api-starter-file-main', 'nft-data', 'data', 'nft-simple.json');
// app.use(express.json());
// let nfts = JSON.parse(fs.readFileSync(filePath));
// //GET
// const getData=(req, res) => {
//     console.log(req.requesTime);
  
//     res.status(200).json({
//         requestTime : req.requestTime,
//         status: "success",
//         data: { nfts }
//     });
// };
// //POST 
// const postData=(req,res)=>(req, res) => {
//     console.log(req.requesTime);
//     const newId = nfts[nfts.length - 1].id + 1;
//     const newNFT = Object.assign({ id: newId }, req.body);

//     nfts.push(newNFT);

//     fs.writeFile(filePath,
//          JSON.stringify(nfts), 
//          (err) => {
     

//         res.status(204).json({
//             status: "success",
//             nft: newNFT 
//         });
         
//     });
//     // res.send("POST NFT");
// };
// //GET SINGLE DATA
// const getsingleData=()=>(req, res) => {
//     console.log(req.requesTime);
//     const id = req.params.id * 1;
//     if(id>nfts.length){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid ID",
//         });
//     }
//     const nft = nfts.find((eL) => (eL.id === id));

//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         },
//     });
// };
// //PATCH METHOD
// const updateData=()=>(req,res)=>{
//     console.log(req.requesTime);
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
    
//     res.status(200).json({
//         status:"sucess",
//         data:{
//             nft:"updating nft"
//         }
//     })
// }
// //DELETE METHOD
// const deleteData=()=>(req,res)=>{
//     console.log(req.requesTime);
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
    
//     res.status(404).json({
//         status:"sucess",
//         data:null,
//     })
// }


// // app.get('/api/v1/device',getData); 
// // app.post('/api/v1/device',postData) ;
// // app.get('/api/v1/device/:id',getsingleData) ;
// // app.patch('/api/v1/device/:id',updateData);
// // app.delete('/api/v1/device/:id',deleteData);

// app.route('/api/v1/device')
// .get(getData)
// .post(postData);
// app.route('/api/v1/device/:id')
// .get(getsingleData)
// .patch(updateData)
// .delete(deleteData);
// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });

//part3
// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const morgan=require("morgan");
// app.use(morgan("dev"));


// //TIMESTAMP
// app.use((req,res,next)=>{
// req.requesTime=new Date().toISOString();
// next();
// });

// const filePath = path.join(__dirname, 'Api-starter-file-main', 'nft-data', 'data', 'nft-simple.json');
// app.use(express.json());
// let nfts = JSON.parse(fs.readFileSync(filePath));
// //GET
// const getData=(req, res) => {
//     console.log(req.requesTime);
  
//     res.status(200).json({
//         requestTime : req.requestTime,
//         status: "success",
//         data: { nfts }
//     });
// };
// //POST 
// const postData=(req,res)=>(req, res) => {
//     console.log(req.requesTime);
//     const newId = nfts[nfts.length - 1].id + 1;
//     const newNFT = Object.assign({ id: newId }, req.body);

//     nfts.push(newNFT);

//     fs.writeFile(filePath,
//          JSON.stringify(nfts), 
//          (err) => {
     

//         res.status(204).json({
//             status: "success",
//             nft: newNFT 
//         });
         
//     });
//     // res.send("POST NFT");
// };
// //GET SINGLE DATA
// const getsingleData=()=>(req, res) => {
//     console.log(req.requesTime);
//     const id = req.params.id * 1;
//     if(id>nfts.length){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid ID",
//         });
//     }
//     const nft = nfts.find((eL) => (eL.id === id));

//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         },
//     });
// };
// //PATCH METHOD
// const updateData=()=>(req,res)=>{
//     console.log(req.requesTime);
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
    
//     res.status(200).json({
//         status:"sucess",
//         data:{
//             nft:"updating nft"
//         }
//     })
// }
// //DELETE METHOD
// const deleteData=()=>(req,res)=>{
//     console.log(req.requesTime);
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid ID"
//         });
//     }
 
//     res.status(404).json({
//         status:"sucess",
//         data:null,
//     })
// }

// ///..................USER.....................///
   
// const getAllUsers=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internet server error",
//     });
// };
// const createUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internet server error",
//     });
// };
// const getsingleUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internet server error",
//     });
// };
// const updateUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internet server error",
//     });
// };
// const deleteUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internet server error",
//     });

    
// };
// const nftsRouter = express.Router();
// const userRouter = express.Router();

// // NFTs Routes
// nftsRouter.route('/')
//     .get(getData)
//     .post(postData);

// nftsRouter.route('/:id')
//     .get(getsingleData)
//     .patch(updateData)
//     .delete(deleteData);

// // Users Routes
// userRouter.route('/')
//     .get(getAllUsers)
//     .post(createUser);

// userRouter.route('/:id')
//     .get(getsingleUser)
//     .patch(updateUser)
//     .delete(deleteUser);

// // Use Routers
// app.use("/api/v1/device", nftsRouter);
// app.use("/api/v1/users", userRouter);



// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });
///...................PART 4...................///


const express = require('express');
const morgan=require("morgan");
const app=express();
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(__dirname + '/api-starter-file-main/nft-data/img'));







const nftRouter=require("./routes/nftRoutes");
const userRouter=require("./routes/useRoute");




//TIMESTAMP
app.use((req,res,next)=>{
req.requesTime=new Date().toISOString();
next();
});

app.use('/api/v1/nfts',nftRouter);
app.use("/api/v1/user",userRouter);


///..................USER.....................///


module.exports=app;
