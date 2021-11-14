const express=require('express');
const router=express.Router();
const fetchRepositories=require('../middleware/fetchRepositories')
const retrieveRepositories=require('../middleware/retrieveRepositories')
const saveRepositories=require('../middleware/saveRepositories')
const repositories=require('../controller/repositories')
/**
 * Express router for the route pertaining to the GET request for listing the repositories of a user
 */

router.get("/repos",retrieveRepositories,fetchRepositories,saveRepositories,repositories);

module.exports=router;