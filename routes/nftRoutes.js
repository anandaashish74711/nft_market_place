const express = require('express');
const Router = express.Router();
const nftsController = require('../controller/nftController');

Router.use(express.json());

Router.param("id",nftsController.checkId);

Router.route('/')
    .get(nftsController.getData)
    .post(nftsController.checkBody,nftsController.postData);

Router.route('/:id')
    .get(nftsController.getsingleData)
    .patch(nftsController.updateData)
    .delete(nftsController.deleteData);

module.exports = Router;
