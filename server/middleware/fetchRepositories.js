const formatTimeStamp=require("../utils/formatTimestamp")
const axios=require('axios')

async function fetchRepositories(req,res,next)
{
    var username=req.query.username;

    var config = {
        method: 'get',
        url: 'https://api.github.com/users/'+username+'/repos',
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
            let repos=[];

            response.data.forEach(element => {
                repodata={};
                repodata.name=element.name;
                if(element.private==false)
                    repodata.type="public"
                else
                    repodata.type="private"
                repodata.description=element.description
                repodata.lastUpdated=formatTimeStamp(element.updated_at)
                repos.push(repodata)
            });

            /**let repos={
                names:repoArray,
                types:repoType,
                descriptions:description,
                lastUpdated:lastUpdated
            }*/
            //console.log(repos)
            req.repos=repos;

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

module.exports=fetchRepositories