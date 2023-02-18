import { useState } from "react"
import { useSelector } from "react-redux"
import { addHandle } from "@/store/toDoSlice"
import { useDispatch } from "react-redux"


const UseToDo = () => {

    const [input, setInput] = useState()

    const selector = useSelector((store:any)=>store.toDoSlice.toDoArr)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(addHandle(input))
      
        
    }



    return {
        setInput,onClickHandler 
    }
}

export default UseToDo