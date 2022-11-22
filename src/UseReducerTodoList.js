
//user Reducer
//initState

import { useReducer, useRef } from "react"

const initState = {
    job: '',
    jobs: []
}

//init Action

const SET_JOB = 'set'
const ADD_JOB = 'add'
const DELETE_JOB = 'delete'

const setJob = payload => {
    return {
        payload: payload,
        action: SET_JOB
    }
}

const addJob = payload => {
    return {
        payload: payload,
        action: ADD_JOB
    }
}

const deleteJob = payload => {
    return {
        payload: payload,
        action: DELETE_JOB
    }
}
 
//Reducer
const reducer = (state, action) => {

    let newState

    console.log('Prev State: ', state)

    switch(action.action) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            let newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action')
    }

    console.log('New State: ', state)
    return newState
}

//Dispatch

const UseReducerTodoList = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    const {job, jobs} = state
    const inputRef = useRef()

    const handleAddJob = () => {
        dispatch(addJob(job, ADD_JOB))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleDeleteJob = (index) => {
        dispatch(deleteJob(index))
    }

    return (
        <>
            <h1>Todo list</h1>
            <input 
                ref={inputRef}
                value={job}
                onChange={ e => dispatch(setJob(e.target.value), SET_JOB)} />
            <button onClick={handleAddJob}>Add</button>
            <ul>
                {
                    jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => handleDeleteJob(index)}>      &times;</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UseReducerTodoList
