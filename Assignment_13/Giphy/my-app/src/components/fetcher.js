import React, { useEffect } from 'react'
import axios from 'axios'
function Fetcher({val}) {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=meQbSH0j8E138W5aM2GQbzkGllPL7704`).then(res => {
            console.log(res.data.data);
            setData(res.data.data);
        }).catch(
                err=>{
                    console.log(err);
                }
            );
    } , []);
    return (
        <div>
            {data.map(i => <img src={i.images.downsized.url} />)}
        </div>
    )
}

export default Fetcher