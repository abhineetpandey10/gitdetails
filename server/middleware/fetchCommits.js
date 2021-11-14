const formatTimeStamp=require("../utils/formatTimestamp")
const axios=require('axios')


async function fetchCommits(req,res,next)
{
    var username=req.query.username;
    var repository=req.query.repository;

    var config = {
        method: 'get',
        url: 'https://api.github.com/repos/'+username+'/'+repository+'/commits',
        headers: { }
    };
      
    axios(config)
    .then(function (response) {
        if(response.data.message==="Not Found")
        {
            req.found=false;
            next();
        }
        else
        {
            req.found=true;
            let commits=[]
            response.data.forEach(element => {
                commitdata={};
                commitdata.sha=element.sha;
                commitdata.message=element.commit.message
                commitdata.author=element.commit.author.name
                commitdata.date=element.commit.author.date
                commits.push(commitdata)
            });
            req.commits=commits;

            next();
        }
    })
    .catch(function (error) {
        req.found=false;
        if(error.message==='Request failed with status code 404')
        {
            //console.log(error.message);
            req.message="Not Found"
            next();
        }
        else
        {
            req.message=error.message
            next()
        }

    });
}

module.exports=fetchCommits