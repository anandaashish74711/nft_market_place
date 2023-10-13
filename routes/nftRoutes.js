const express=require('express');
const Router = express.Router();

const fs = require('fs');
const filePath = path.join(__dirname, '..', 'Api-starter-file-main', 'nft-data', 'data', 'nft-simple.json');

app.use(express.json());
let nfts = JSON.parse(fs.readFileSync(filePath));
const getData=(req, res) => {
    console.log(req.requesTime);
  
    res.status(200).json({
        requestTime : req.requestTime, 
        status: "success",
        data: { nfts }
    });
};
//POST 
const postData=(req,res)=>(req, res) => {
    console.log(req.requesTime);
    const newId = nfts[nfts.length - 1].id + 1;
    const newNFT = Object.assign({ id: newId }, req.body);

    nfts.push(newNFT);

    fs.writeFile(filePath,
         JSON.stringify(nfts), 
         (err) => {
     

        res.status(204).json({
            status: "success",
            nft: newNFT 
        });
         
    });
    // res.send("POST NFT");
};
//GET SINGLE DATA
const getsingleData=()=>(req, res) => {
    console.log(req.requesTime);
    const id = req.params.id * 1;
    if(id>nfts.length){
        return res.status(404).json({
            status:"fail",
            message:"Invalid ID",
        });
    }
    const nft = nfts.find((eL) => (eL.id === id));

    res.status(200).json({
        status: "success",
        data: {
            nft,
        },
    });
};
//PATCH METHOD
const updateData=()=>(req,res)=>{
    console.log(req.requesTime);
    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        });
    }
    
    res.status(200).json({
        status:"sucess",
        data:{
            nft:"updating nft"
        }
    })
}
//DELETE METHOD
const deleteData=()=>(req,res)=>{
    console.log(req.requesTime);
    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        });
    }
 
    res.status(404).json({
        status:"sucess",
        data:null,
    })
}
// NFTs Routes
Router.route('/')
    .get(getData)
    .post(postData);

Router.route('/:id')
    .get(getsingleData)
    .patch(updateData)
    .delete(deleteData);
module.exports=Router;