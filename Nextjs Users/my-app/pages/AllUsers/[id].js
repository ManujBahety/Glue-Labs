import axios from 'axios'; 
import Router from 'next/router'
export const getStaticPaths = async () => {
    const res = await fetch('https://dummyapi.io/data/v1/user', {headers: {'app-id': '6296e81a72dcf9192ef55a31'}});
    const data = await res.json();
    const users = data.data;
    const paths = users.map(user => {
        return { 
            params: { id: user.id.toString() }
            
        }
        
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://dummyapi.io/data/v1/user/' + id,  {headers: {'app-id': '6296e81a72dcf9192ef55a31'}});
    const data = await res.json();
    return{
        props: {user: data}
    }
}
const options = {
    headers: {'app-id': '6296e81a72dcf9192ef55a31'}
  };


const deleteRecord = async (recordID) => {
    try{    
        const res = await axios.delete('https://dummyapi.io/data/v1/user/' + recordID,
        options);
        alert('Record Deleted');
        Router.back();

    }catch(error){

    }
}

const Details = ({ user }) => {
    return (
        <>
        
        <div className="details">
            <h1> Details </h1>
            <img src={user.picture} alt=""/> 
            <h3> {user.title} {user.firstName} {user.lastName}</h3>
            <p>  {user.email} </p>
        </div>
        <button className="button-17" onClick={()=>deleteRecord(user.id)}>
            Delete
        </button>
        </>
    );
}

export default Details;