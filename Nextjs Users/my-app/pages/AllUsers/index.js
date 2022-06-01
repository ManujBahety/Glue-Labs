import styles from '../../styles/AllUsers.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {

    const res = await fetch('https://dummyapi.io/data/v1/user', {headers: {'app-id': '6296e81a72dcf9192ef55a31'}});
    const data = await res.json();
    // console.log(data);
    return {
        props: {users : data.data}
    }
}


const AllUsers = ({users}) => {

        return (
        <div>
            <h1 style={{textAlign : 'center'}}>All Users</h1>
            {users.map(user => (
                
                <Link href={'/AllUsers/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h4>
                            {user.firstName} {user.lastName}
                            
                        </h4>
                        {/* <button className={styles.delbtn} onClick={clickHandler}>Delete</button> */}
                    </a>
                    
                </Link>
            ))
            }
        </div>
            

    );
}
export default AllUsers;