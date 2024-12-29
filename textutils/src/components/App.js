import { useState } from 'react';
import About from './About.js';
import './App.css';
import Navbar from './Navbar.js';
import TextForm from './TextForm.js';
import Alert from './Alert.js';


// light dark red  blue green
// white #04203c #1E0F0F #0D1B2A #10271F
function App() {
  const [mode,setMode] =useState("light");
  const [alert,setAlert] = useState(null)

  function showAlert (message,type){
      setAlert({
      message :message,
      type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
    }
  function toggleMode(selectedMode){
    if(selectedMode==="dark"||selectedMode==="danger"||selectedMode==="primary" ||selectedMode==="success"){
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success")
      // document.body.style.color="black"
    }
    else if(selectedMode==="dark"){
      setMode("dark")
      document.body.style.backgroundColor="#04203c"
      showAlert("Dark Mode has been enabled","success")
      // document.body.style.color="white"
    }
    else if(selectedMode==="danger"){
      setMode("danger")
      document.body.style.backgroundColor="#1E0F0F"
      showAlert("Red Mode has been enabled","success")
    }
    else if(selectedMode==="primary"){
      setMode("primary")
      document.body.style.backgroundColor="#0D1B2A"
      showAlert("Blue Mode has been enabled","success")
    }
    else if(selectedMode==="success"){
      setMode("success")
      document.body.style.backgroundColor="#10271F"
      showAlert("Green Mode has been enabled","success")
    }
  }
  // whether dark mode is enabled or not
  return (
    <>
    
    <Navbar title="TextUtilis" about="AboutText" mode={mode} toggleMode={toggleMode} /> 
    {/* <Alert mode={mode}/>   */}
    <Alert alert={alert}/>
    <div className="container my-5">
    {/* <TextForm heading="Enter Your Text to analyze below"/> */}
    <TextForm mode={mode} showAlert={showAlert} />
     
    </div>
    </>
  );
}

export default App;
