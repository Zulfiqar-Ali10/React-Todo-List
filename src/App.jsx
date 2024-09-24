import './App.css'
import TodoApp from './TodoApp'
import Card from './Card'
import ApiData from "./ApiData"

function App() {
  return (
    <>
     <div className="todo">
     <TodoApp/>
     </div>
     <div className="Card-main flex-wrap gap-5">{
        ApiData.map((data, index)=>{
          return(
            <Card heading={data.heading}
            key={index}
          describtion={data.describtion}
          image={data.image}
          />
        )})
      }
    
     </div>


    </>


  )
}

export default App
