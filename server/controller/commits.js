/**
 * @queryParam {repository} - The name of the rpository for which the commits have to be listed
 * @queryParam {username} - The username to whom the repository belongs
*/

const repositories=(req,res)=>
{
    if(req.commits!==undefined)
        res.json({"commits":req.commits});
    else
        res.json({"message":req.message})
}

module.exports=repositories;