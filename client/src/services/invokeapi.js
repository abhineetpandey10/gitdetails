export default async function invokeApi(url)
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    try
    {
        let response=await fetch(url,requestOptions);
        response=await response.text();
        response=await JSON.parse(response)
        console.log(typeof(response));
        console.log(response);
        return response;
    }
    catch(error)
    {
        console.log(error.message);
        return {"message":"An Error occured"};
    }
}