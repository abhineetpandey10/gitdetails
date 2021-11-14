function formatTimeStamp(timestamp)
{
    timestamp.replace("Z"," ")
    timestamp.replace("T"," ")

    return timestamp;
}

module.exports=formatTimeStamp