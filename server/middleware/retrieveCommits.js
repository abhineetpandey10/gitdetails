const connectDB=require('../config/connection')
const Commits=require('../model/commits')

function retrieveCommits(req,res,next)
{
    let username=req.query.username
    let repository=req.query.repository

    connectDB()

    Commits.find({username:username,repository:repository})
    .then(data=>{
        if(data.length!==0)
        {
            req.userDataFound=true;
            req.commits=data[0]
        }
        else
        {
            req.userDataFound=false;
        }
        next();
    })
    .catch(error=>{
        console.log(error.message);
    })
}

module.exports=retrieveCommits;