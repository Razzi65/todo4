import UseToDo from "@/custom hooks/useToDo"


const ToDoApp = () => {

    const {setInput, onClickHandler} = UseToDo()

    return (
        <>
        <input onChange={(e)=>setInput(e.target.value)} /> <br/>
        <button onClick={()=>onClickHandler()}> add </button>
        </>
    )
}

export default ToDoApp