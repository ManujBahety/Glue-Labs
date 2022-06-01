export const getStaticPaths = async () => {
    const res = await fetch('https://dummyapi.io/data/v1/user', {headers: {'app-id': '6296e81a72dcf9192ef55a31'}});
    const data = await res.json();
    const paths = data.map(user => {
        // console.log(user);
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
    const res = await fetch('https://dummyapi.io/data/v1/user' + id,  {headers: {'app-id': '6296e81a72dcf9192ef55a31'}});
    const data = await res.json();
    return{
        props: {user: data.data}
    }
}


const Details = ({ user }) => {
    return (
        <div>
            <h1> Details </h1>
            <h2> {user.firstName}</h2>
            <h2> {user.lastName}</h2>
            <p> {user.email}</p>
        </div>
    );
}

export default Details;