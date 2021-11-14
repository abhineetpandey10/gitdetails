const connectDB=require('../config/connection')
const Commits=require('../model/commits')

function saveCommits(req,res,next)
{
    if(req.userDataFound===false && req.found===true)
    {
        let username=req.query.username
        let repository=req.query.repository

        req.commits.username=username
        req.commits.repository=repository

        connectDB()

        let commits=new Commits(req.commits)

        commits.save()
        .then(()=>{
            console.log("Data saved successfully");
            next();
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    else
    {
        next();
    }
}

module.exports=saveCommits;