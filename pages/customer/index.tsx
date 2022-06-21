import { useReducer } from "react"
import DropZone from "../../components/image/dropzone"


export default function CustomerPage() {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone }
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) }
      case "REMOVE_FILE_FROM_LIST":
        return { ...state, fileList: state.fileList.filter((file: any, index: number) => index !== action.idx) }
      default:
        return state
    }
  }

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  })

  return <>
    {/* <h1>Drag And Drop File Upload</h1> */}
    <DropZone data={data} dispatch={dispatch} />
  </>
}
