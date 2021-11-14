/**
 * @queryParam {username} - The username whose repositories are to be listed
*/

const repositories=(req,res)=>
{
    if(req.repos!==undefined)
        res.json({"repositories":req.repos});
    else
        res.json({"message":req.message})
}

module.exports=repositories;