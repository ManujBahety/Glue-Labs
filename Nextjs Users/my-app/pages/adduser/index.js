import Router from "next/router";
import {useForm} from 'react-hook-form';
import {useState} from "react";
import {Alert} from 'react-bootstrap';
const Signup = (props) => {
    const [fName,setfName] = useState('');
    const [lName,setlName] = useState('');
    const [Email,setEmail] = useState('');

    const { register , handleSubmit , formState:{errors} } = useForm();

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
      
    const SubmitHandler = async (e) => {
        // e.preventDefault();
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
            // Router.push('http://localhost:3000/AllUsers');
        }catch(error){

        }
        // setfName("");
        // setEmail("");
        // setlName("");
    }
    return (
        <main className="form-signin">
            <form style={{
                margin: '50px 0'
            }}
            onSubmit={handleSubmit(SubmitHandler)}>
                <h1 className="h3 mb-3 fw-normal">Please Enter User</h1>
                <div className="form-floating">
                
                    <input 
                    {...register('firstName',{required: true, maxLength: 20})}
                    name="firstName"
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={fName}
                    onChange={e=> setfName(e.target.value)}
                    />
                    { errors.firstName && 
                    <Alert variant="danger">
                        {errors.firstName?.type==="required" && <p>First Name is required</p>}
                        {errors.firstName?.type==="maxLength" && <p>Max Length of First name is 20 Characters!</p>}
                    </Alert> }
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input 
                    name="lastName"
                    {...register('lastName',{required: true, maxLength: 20})}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={lName}
                    onChange={e=> setlName(e.target.value)}
                    />
                    { errors.lastName && 
                    <Alert variant="danger">
                        {errors.lastName?.type==="required" && <p>First Name is required</p>}
                        {errors.lastName?.type==="maxLength" && <p>Max Length of Last name is 20 Characters!</p>}
                    </Alert> }
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input 
                    name="email"
                    {...register('email',{required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,})}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    value={Email}
                    onChange={e=> setEmail(e.target.value)}
                    />
                    { errors.email && 
                    <Alert variant="danger">
                        {errors.email?.type==="required" && <p>Email is required</p>}
                        {errors.email?.type==="pattern" && <p>Not a valid Email format!</p>}
                    </Alert> }
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