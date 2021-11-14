const connectDB=require('../config/connection')
const Repos=require('../model/repos')

function saveCommits(req,res,next)
{
    if(req.userDataFound===false && req.found===true)
    {
        let username=req.query.username

        req.repos.username=username

        connectDB()

        let repos=new Repos(req.repos)

        repos.save()
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