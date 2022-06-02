import Router from "next/router";
import {useState} from "react";
const Signup = (props) => {
    const [fName,setfName] = useState('');
    const [lName,setlName] = useState('');
    const [Email,setEmail] = useState('');

    const details = {
        'firstName': fName ,
        'lastName': lName,
        'email': Email,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
      
    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch('https://dummyapi.io/data/v1/user/create', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'app-id': '6296e81a72dcf9192ef55a31'
                },
                body:formBody
            });
            alert('User Added');
            console.log(res);
            Router.push('http://localhost:3000/AllUsers');
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