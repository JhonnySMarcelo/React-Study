import Student from "./Student"

function App() {
 
  return (
    <>
      <Student name="Bob" age={30} isStudent={true}/>
      <Student name="John" age={25} isStudent={false}/>
      <Student />    
    </>
  )
}

export default App
