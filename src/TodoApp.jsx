import React, { useState } from "react";


function TodoApp(){
    const [addData, setAddData] = useState("");
    const [showData, setShowData] = useState([]);

    const getInput = (e) => {
        setAddData(e.target.value)
    }
    const todoBtn = () => {
        const copyData = [...showData, addData]
      setShowData(copyData)
      setAddData("")
    //   console.log(showData);
      
    }

    const deleteData = (index)=>{
      const updatedData = showData.filter((data, id)=>{
      return index != id;
      })
      setShowData(updatedData)
    }

    const DeleteAll = ()=>{
        setShowData([])
    }



    return(
        <>


        <input type="text" placeholder="Enter a Todo Date" value={addData} onChange={getInput}/>
        <button onClick={todoBtn}>Add Todo</button>
        <ul>
            {showData.map((data, index) => {
                return(
                    <li key={index}> {index} {data} <button onClick={()=> deleteData(index)} className="Btn">Delete</button></li>
                )
            })}
        </ul>

       {
        showData.length>1 ?  <button onClick={DeleteAll}>Delete All</button> : ""
       }
        </>
    )
}


export default TodoApp;