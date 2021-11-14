const express=require('express');
const router=express.Router();
const fetchCommits=require('../middleware/fetchCommits')
const retrieveCommits=require('../middleware/retrieveCommits')
const saveCommits=require('../middleware/saveCommits')
const commits=require('../controller/commits')
/**
 * Express router for the route pertaining to the GET request for listing the details of all commits for a particular
 * repository of a user
 */

router.get("/commits",retrieveCommits,fetchCommits,saveCommits,commits);

module.exports=router;