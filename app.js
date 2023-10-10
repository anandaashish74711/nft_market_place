const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Api-starter-file-main', 'nft-data', 'data', 'nft-users.json');
app.use(express.json());
let nfts = JSON.parse(fs.readFileSync(filePath));

app.get('/api/v1/device', (req, res) => {
    res.status(200).json({
        status: "success",
        data: { nfts }
    });
});

app.post('/api/v1/device', (req, res) => {
    const newId = nfts[nfts.length - 1].id + 1;
    const newNFT = Object.assign({ id: newId }, req.body);

    nfts.push(newNFT);

    fs.writeFile(filePath,
         JSON.stringify(nfts), 
         (err) => {
     

        res.status(201).json({
            status: "success",
            nft: newNFT
        });
         
    });
    res.send("POST NFT");
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
