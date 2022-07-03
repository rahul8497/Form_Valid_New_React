import React,{useState} from 'react'

const App = () => {
  const npat=new RegExp("^[A-Za-z0-9]{5,12}$");
  const ppat=new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$");
  const[name,setName]=useState('');
  const[password,setPassword]=useState('');
  const[nerror,setNerror]=useState(false);
  const[perror,setPerror]=useState(false);
  const submithandler=(e)=>{
    e.preventDefault();
    if(!npat.test(name)){
      setNerror(true);
    }
    if(!ppat.test(password)){
      setPerror(true);
    }
  }
  return <>
  <form action="">
    Name :<br/>
    <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
    {nerror && <span>Name is Invalid</span>}
    <br/>
    Password:<br/>
    <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {perror && <span>Password is Invalid</span>}
    <br/>
    <input type="submit" onClick={submithandler}/><br/>
  </form>
  </>
}

export default App;