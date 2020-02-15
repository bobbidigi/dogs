import {useState} from 'react'

export default function useInput(initialValue){
    const [value, setValue] = useState(initialValue)
    const customSetter = (newValue) => {
        setValue(newValue)
    }
    return [value, customSetter]
}