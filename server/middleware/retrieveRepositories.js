const connectDB=require('../config/connection')
const Repos=require('../model/repos')

function retrieveRepositories(req,res,next)
{
    let username=req.query.username

    connectDB();

    Repos.find({username:username})
    .then(data=>{
        if(data.length!==0)
        {
            req.userDataFound=true;
            req.repos=data[0]
        }
        else
        {
            req.userDataFound=false;
        }
        next();
    })
    .catch(error=>{
        console.log(errpr.message);
    })
}

module.exports=retrieveRepositories;