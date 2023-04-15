import {useState} from "react"
import './App.css';

function App() {
const[username,setUsername]= useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[confirmPassword,setConfirmpassword]= useState("");
const[errors,setErrors] = useState({});

const handleSubmit = (e) =>{
    e.preventDefault();
    let errors = {};

    if(!username.trim()){
      errors.username = "name is required"
    }
    
    if(!email.trim()){
      errors.email = "email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if(!password.trim()){
      errors.password = "password is required "
    }
    else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted");
    }
    else if(Object.keys(errors).length !== 0){
      alert("All the fields are mandatory");
    }

}
  return (
    <div className="app">
      <div className="form">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
          value={username}
          placeholder="Full Name"
          onChange={(e)=> setUsername(e.target.value)}
          />
          {errors.username && <div>{errors.username}</div>}
    

          <br/>
          <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          
          />
          {errors.email && <div>{errors.email}</div>}
          <br/>
          <input
          value={password}
          placeholder = "Password"
          onChange={(e)=> setPassword(e.target.value)}
          
          />
          {errors.password && <div>{errors.password}</div>}
          <br/>
          <input
          value={confirmPassword}
          placeholder = "Confirm Password"
          onChange={(e)=> setConfirmpassword(e.target.value)}
          
          />
          {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
          <br/>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default App;
