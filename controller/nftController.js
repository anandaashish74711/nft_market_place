const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '..', 'Api-starter-file-main', 'nft-data', 'data', 'nft-simple.json');

exports.checkId=(req,res,next,value)=>{
    console.log(`ID:${value}`) 
    if (req.param.id *1> nfts.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        });
    }
    next();
}
exports.checkBody=(req,res,next)=>{
    if(!req.body.name||!req.body.price){
        return res.status(400).json({
            status:"fail",
            message:"Missing name and price"
        })
    }
    next();
}
// Read nfts data
let nfts = JSON.parse(fs.readFileSync(filePath));

exports.getData = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        requestTime: req.requestTime,
        status: "success",
        data: { nfts }
    });
};

exports.postData = (req, res) => {
    console.log(req.requestTime);
    const newId = nfts[nfts.length - 1].id + 1;
    const newNFT = Object.assign({ id: newId }, req.body);

    nfts.push(newNFT);

    fs.writeFile(filePath, JSON.stringify(nfts), (err) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Internal Server Error"
            });
        }

        res.status(201).json({
            status: "success",
            nft: newNFT
        });
    });
};

exports.getsingleData = (req, res) => {
    console.log(req.requestTime);
    const id = req.params.id * 1;
    if (id > nfts.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
    const nft = nfts.find((eL) => eL.id === id);

    res.status(200).json({
        status: "success",
        data: {
            nft,
        },
    });
};

exports.updateData = (req, res) => {
    console.log(req.requestTime);
    const id = req.params.id * 1;

  

    // Add your logic for updating nft here

    res.status(200).json({
        status: "success",
        data: {
            nft: "updating nft"
        }
    });
};

exports.deleteData = (req, res) => {
    console.log(req.requestTime);
    const id = req.params.id * 1;

    if (id > nfts.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        });
    }

    // Add your logic for deleting nft here

    res.status(200).json({
        status: "success",
        data: null,
    });
};