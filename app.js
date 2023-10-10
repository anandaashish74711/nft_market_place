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
    const newId = nfts[nfts.length - 1].id + 1; // Generate a new ID
    const newNFT = Object.assign({ id: newId }, req.body); // Create a new NFT object

    nfts.push(newNFT); // Add the new NFT to the array

    fs.writeFile(filePath, JSON.stringify(nfts), (err) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Error writing to the file"
            });
        }

        res.status(201).json({
            status: "success",
            nft: newNFT
        });
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
