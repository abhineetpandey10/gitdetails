import {useEffect, useState} from 'react'
import invokeApi from '../services/invokeapi'
import styles from '../jss/commitstable';
import {LinearProgress} from '@mui/material';
export default function CommitsTable({username,repository})
{
    const [commitData,setCommitData]=useState('');

    useEffect(async()=>{
        if(username!=='' && repository!=='')
        {
            let url='http://localhost:5000/commits?username='+username+'&repository='+repository
            let data=await invokeApi(url);
            console.log(data.commits)
            setCommitData(data.commits);
        }
    },[])
    if(commitData!=='')
    {
        return(
            <center>
                <div style={styles.heading}>{username}/{repository}</div>
                <table style={styles.detailstable}>

                    <thead>
                        <tr>
                            <th style={styles.th}>Commit ID</th>
                            <th style={styles.th}>Commit Message</th>
                            <th style={styles.th}>Author</th>
                            <th style={styles.th}>Time of Commit</th> 
                        </tr>
                    </thead>
                    <tbody>                    
                        {commitData.map((item)=>{
                            return(
                                <tr>
                                    <td key={item.sha} style={styles.reponame}>{item.sha}</td>
                                    <td key={item.message} style={styles.cell}>{item.message}</td>
                                    <td key={item.author} style={styles.cell}>{item.author}</td>
                                    <td key={item.date} style={styles.cell}>{item.date}</td> 
                                </tr>
                            ) 
                        })}
                    </tbody>    
                </table>        
            </center>
        )
    }
    else
    {
        return(
            <div style={styles.container}>
                <center style={styles.loading}>Loading Commits...</center>
                <LinearProgress/>
            </div>
        )
    }
}