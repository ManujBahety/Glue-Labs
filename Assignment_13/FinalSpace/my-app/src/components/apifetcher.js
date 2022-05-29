import axios from 'axios'
import React, { useEffect } from 'react'
import SpaceCard from './SpaceCard';

function Apifetcher() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios.get('https://finalspaceapi.com/api/v0/character/').then(response => {
            setData(response.data);
        }).catch(error => console.log(error));
    },[])
  return (
    <div>
        <h1>API Fetcher</h1>
        {data.map(data => <h1><SpaceCard data = {data}/></h1>)}
    </div>
  )
}

export default Apifetcher