import styles from '../jss/form';
import invokeApi from '../services/invokeapi';
import { useEffect, useState } from 'react';
import {LinearProgress, Dialog} from '@mui/material';
import CommitsTable from './commitstable';

export default function Form()
{
    const [message,setMessage]=useState('');
    const [bgColor,setBgColor]=useState('white');
    const [username,setUsername]=useState('');
    const [tablehead,setTableHead]=useState('');
    const [progressVisible,setProgressVisible]=useState('hidden')
    const [userdata,setUserdata]=useState('');
    const [modalVisible,setModalVisible]=useState(false);
    const [repository,setRepository]=useState('')

    useEffect(()=>{
        if(message!=='')
            setBgColor('#FFF9B6')
        else
            setBgColor('white')
    },[message])
    async function getUserRepositories()
    {
        setMessage('')
        setUserdata('');
        setBgColor('white')
        setProgressVisible('visible')
        let url='http://localhost:5000/repos?username='+username;
        let data=await invokeApi(url);
        console.log(data.repositories)
        setProgressVisible('hidden')
        if(data.message==='Not Found')
        {
            setMessage('User Not Found')
        }
        else if(data.message!==undefined)
        {
            setMessage(data.message)
        }
        else
        {
            setUserdata(data.repositories);
            setTableHead(username);
            setMessage('')
            setBgColor('white')
        }
    }
    function showCommits(val)
    {
        setModalVisible(true);
        setRepository(val);
    }
    function hideCommits()
    {
        setModalVisible(false);
        setRepository('');
    }
    if(userdata!=='')
    {
        return(
            <center style={styles.container}>
                <table style={styles.table}>
                    <tbody>
                        <tr><td style={styles.username}>Username </td></tr>
                        <tr><td><input type="text" onChange={(event)=>setUsername(event.target.value)}></input></td></tr>
                        <tr><td><div className="button" onClick={async()=>getUserRepositories()}>Find Repositories</div></td></tr>
                        <tr><td><div style={{marginTop:'25px',height:'2rem',backgroundColor:bgColor, color:'red', padding:'2px 8px 2px 8px'}}>{message}</div></td></tr>
                        <tr style={{visibility:progressVisible}}><td><LinearProgress /></td></tr>
                    </tbody>
                </table>
                <Dialog open={modalVisible} fullWidth={true} maxWidth={'lg'}>
                    <div style={styles.closeBtn} onClick={hideCommits}>X</div>
                    <CommitsTable username={username} repository={repository}/>
                </Dialog>
                <div style={styles.heading}>Repositories of {tablehead}</div>
                <table style={styles.detailstable}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Repository Name</th>
                            <th style={styles.th}>Type</th>
                            <th style={styles.th}>Description</th>
                            <th style={styles.th}>Last Updated</th> 
                        </tr>
                    </thead>
                    <tbody>
                        
                            {userdata.map((item)=>{
                                return(
                                    <tr>
                                        <td key={item.name} style={styles.reponame} onClick={()=>{showCommits(item.name)}}>{item.name}</td>
                                        <td key={item.type} style={styles.cell}>{item.type}</td>
                                        <td key={item.description} style={styles.cell}>{item.description}</td>
                                        <td key={item.lastUpdated} style={styles.cell}>{item.lastUpdated}</td> 
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
            <center style={styles.container}>
                <table style={styles.table}>
                    <tbody>
                        <tr><td style={styles.username}>Username </td></tr>
                        <tr><td><input type="text" onChange={(event)=>setUsername(event.target.value)}></input></td></tr>
                        <tr><td><div className="button" onClick={async()=>getUserRepositories()}>Find Repositories</div></td></tr>
                        <tr><td><div style={{marginTop:'25px',height:'2rem',backgroundColor:bgColor, color:'red', padding:'2px 8px 2px 8px'}}>{message}</div></td></tr>
                        <tr style={{visibility:progressVisible}}><td><LinearProgress /></td></tr>
                    </tbody>
                </table>
            </center>
        )
    }
}