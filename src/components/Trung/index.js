import { useState } from "react"
import InformationNew from "./InformationNew"

export default function Demo() {
  const [countNum, setCountNum] = useState(1)

  const handleIncrease = () => {
    setCountNum(countNum + 1)
  }

  const [job, setJob] = useState("")
  const [jobs, setJobs] = useState([])

  const handleAdd = () => {
    setJobs([...jobs, job])
    setJob("")
  }

  const handleDelete = (job) => {
    setJobs(() => {
      return jobs.filter((item) => item !== job)
    })
  }

  const infomation = {
    title: "Title Something",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    arrItem: [],
  }

  return (
    <div className="demo-trung">
      <InformationNew {...infomation} />
      <h1>Count Number</h1>
      <h2>{countNum}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <h1>ToDo list</h1>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button
              style={{ marginLeft: "0.8rem" }}
              onClick={() => handleDelete(job)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
