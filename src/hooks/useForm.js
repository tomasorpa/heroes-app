import { useState } from "react"

export const useForm = (initialState={}) => {
    const [formState, setformState] = useState(initialState)
    const onInputChange = ({target}) => {
        const { name, value } = target
        setformState({
            ...initialState,
            [name]:value
        })
    }
    const onResetForm = () => {
        setformState(initialState)
    }
    return {
        ...formState,
        onInputChange,
        formState,
        onResetForm
    }
}