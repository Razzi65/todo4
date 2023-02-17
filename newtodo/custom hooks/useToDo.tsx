import { useState } from "react"
import { useSelector } from "react-redux"
import { addHandle } from "@/store/toDoSlice"


const UseToDo = () => {

    const [input, setInput] = useState()

    const selector = useSelector((store:any)=>store.toDoSlice.toDoArr)

    const onClickHandler = () => {
        addHandle(input)
        console.log(selector);
        
    }



    return {
        setInput,onClickHandler 
    }
}

export default UseToDo