const express = require('express');
const app = express();
const fs = require('fs');

const nfts = JSON.parse(fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`));

app.get('/api/v1/device', (req, res) => {
    res.status(200).json({
        status: "success",
        data: {}
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
