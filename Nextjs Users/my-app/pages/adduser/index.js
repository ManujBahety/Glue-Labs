import {useState} from "react";
// import { signup } from "../../client/request";
import axios from 'axios';
const Signup = (props) => {
    const [fName,setfName] = useState('');
    const [lName,setlName] = useState('');
    const [Email,setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const options = {
        headers: {'app-id': '6296e81a72dcf9192ef55a31'}
      };

    const submitHandler = async (e) => {
        e.preventDefault();

        const payload = {fName,lName,Email};
        try{    
            const res = await axios.post('https://dummyapi.io/data/v1/user/create',
            {firstName:fName,lastName:lName,email:Email}, options);
            console.log({res});

        }catch(error){

        }
    }
    return (
        <main className="form-signin">
            <form style={{
                margin: '50px 0'
            }}
            onSubmit={submitHandler}>
                <h1 className="h3 mb-3 fw-normal">Please Enter User</h1>
                <div className="form-floating">
                    <input 
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={fName}
                    onChange={e=> setfName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input 
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={lName}
                    onChange={e=> setlName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input 
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    value={Email}
                    onChange={e=> setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Add
                </button>
            </form>

        </main>
    );
};
export default Signup;