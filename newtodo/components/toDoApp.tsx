import UseToDo from "@/custom hooks/useToDo"


const ToDoApp = () => {

    const {setInput} = UseToDo()

    return (
        <>
        <input onChange={(e)=>setInput(e.target.value)} /> <br/>
        <button> add </button>
        </>
    )
}

export default ToDoApp