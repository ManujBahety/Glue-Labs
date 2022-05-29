import React, { useEffect } from 'react'
import Fetcher from './fetcher';
import './searcher.css';

function Searcher() {
    const title = React.useRef('w');
    const [clicked,setClicked] = React.useState(false);
    const submithandler = (e) => {
        e.preventDefault();
        console.log(title.current.value);
        setClicked(true);
    }
    useEffect(() => {
        setTimeout(() => {
            setClicked(false);
        }, 10000);
    });
  return (
    <div className='container'>
        <form>
            <div class="search">
                <label for="title" class="form-label" styles >Gif:</label>
                <input type="text" class="form-control" ref={title} id="title"  />
            </div>
            <button type="submit" onClick={submithandler} class="btn">Submit</button>
        </form>
        {clicked && <Fetcher val={title.current.value} />}
    </div>
  )
}

export default Searcher