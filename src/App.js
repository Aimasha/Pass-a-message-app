import './App.css';
import { useState }  from "react"


function App() {
   const [inputTask, setInputTask] = useState("")
   const [keepInput,setKeepInput] = useState([])
   const [alert, setAlert] = useState(false)

   const handleSubmit = () =>{
     setKeepInput([...inputTask])
      setInputTask("")

      if(inputTask === ""){
        setAlert(!alert)
      }
      
      setTimeout(()=>{
        setAlert(false)
      },3000)

   }
   console.log(alert)
   return(
     <div className='App'>
       <h1>A Message You Would Like To Pass</h1>

       <input value={inputTask} onChange={(e)=>setInputTask(e.target.value)} type="text" />

       <div>
         <button onClick={handleSubmit}>Submit</button>
         </div>
         <p className={alert ? "alert-show": "alert-hide" }>Please Enter A Value To Pass</p>

       <h2>Last Message Delivered</h2>

       <p>{keepInput}</p>
      
     </div>
   )
}

export default App;


