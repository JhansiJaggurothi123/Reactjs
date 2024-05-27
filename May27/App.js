import React,{useState} from 'react';
import './App.css';
function App() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
    sports: [],
    phone: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: ''
  });
  const { username, password, email, confirmpassword, gender, sports, phone} = data;
  const changeHandler = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setData(prevState => ({
          ...prevState,
          sports: [...prevState.sports, value]
        }));
      } else {
        setData(prevState => ({
          ...prevState,
          sports: prevState.sports.filter(sport => sport !== value)
        }));
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const validateUsername = () => {
    if (username.length < 5) {
      setErrors(prev => ({ ...prev, username: 'Username must be at least 5 characters long.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, username: '' }));
    return true;
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  };
  const validatePassword = () => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (
      password.length < 6 ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !digitRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      setErrors(prev => ({ ...prev, password: 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, password: '' }));
    return true;
  };
  const validateConfirmPassword = () => {
    if (password !== confirmpassword) {
      setErrors(prev => ({ ...prev, confirmpassword: 'Passwords do not match.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, confirmpassword: '' }));
    return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrors(prev => ({ ...prev, phone: 'Phone number must be 10 digits long.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, phone: '' }));
    return true;
  };
  const submitHandler = e => {
    e.preventDefault();
    if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validatePhone()) {
    console.log(data);
  };
  }
  return (
    <div className="container">
      <center>
        <h1>Registration Form</h1>
        <form onSubmit={submitHandler}>
          <div className="form">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={changeHandler} required />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
          </div>
          <div className="form">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={changeHandler} required />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="form">
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={changeHandler} required />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <div className="form">
            <label>Confirm Password:</label>
            <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} required />
            {errors.confirmpassword && <p style={{ color: "red" }}>{errors.confirmpassword}</p>}
          </div>
          <div className="form">
            <label>Gender:</label>
            <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={changeHandler} /> Male
            <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={changeHandler} /> Female
          </div>
          <div className="form">
            <label>Sports:</label>
            <input type="checkbox" name="sports" value="Cricket" checked={sports.includes('Cricket')} onChange={changeHandler} />Cricket
            <input type="checkbox" name="sports" value="Volleyball" checked={sports.includes('Volleyball')} onChange={changeHandler} /> Volleyball
            <input type="checkbox" name="sports" value="Football" checked={sports.includes('Football')} onChange={changeHandler} /> Football
            <input type="checkbox" name="sports" value="Batminton" checked={sports.includes('Batminton')} onChange={changeHandler}/>Batminton
          </div>
          <div className="form">
            <label>Phone Number:</label>
            <input type="text" name="phone" value={phone} onChange={changeHandler} required />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
          <div className="form">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </center>
    </div>
  );
}

export default App;
