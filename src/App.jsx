import "./App.css";

function App() {
  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginData = { email, password };

    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(loginData)
    })
    .then(res=>res.json())
    .then(data=>{
      alert('Login Data Pass complete')
      console.log(data)
      e.target.reset();
  })
  };

  return (
  <>
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">User Login</h1>
      <form onSubmit={handlelogin} className="flex flex-col gap-3 w-64">
        <input className="input border p-2 rounded" type="email" name="email" placeholder="Email" />
        <input className="input border p-2 rounded" type="password" name="password" placeholder="Password" />
        <button className="btn bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  </>
);

}

export default App;
