import { render } from '@testing-library/react'
import { useState } from 'react'
import AvatarFunction from './AvatarFunction'
import ContentUseEffect from './ContentUseEffect'
import FakeChatAppFunction from './FakeChatAppFunction'
import TimeFunction from './TimeFunction'


const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
  'OLED MONITOR'
]

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJs'
  },
]

function FormInput() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  const handleSubmit = () => {
    alert(name + mail)
  }

  return (
    <div style={{ padding: 12 }}>
      <h1>Form input</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        value={mail}
        onChange={e => setMail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

function Gif() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }

  return (
    <div className="Gift">

      <h1> {gift || 'Chưa có thưởng '}  </h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );

}

function FormInputRadio() {
  const [checked, setChecked] = useState(null)

  const handleSubmitRadio = () => {
    console.log(
      {
        id: checked
      }
    )
  }

  return (
    <div>
      <h1>Form radio</h1>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)} />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmitRadio}>Submit radio</button>
    </div>
  )
}

function FormmInputCheckbox() {
  const [checked, setChecked] = useState([])

  const handleSubmitCheckBox = () => {
    console.log(
      {
        ids: checked
      }
    )
  }

  const handleChecked = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)

      if (isChecked) {
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }

  return (
    <div>
      <h1>Form checkbox</h1>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmitCheckBox}>Submit checkbox</button>
    </div>
  )
}
//Todo List with useState

function FormTodoList() {

  const storageCars = JSON.parse(localStorage.getItem('cars'));

  const [car, setCar] = useState([])
  const [cars, setCars] = useState(storageCars ?? [])


  const handleSubmit = () => {
    setCars((prev) => {
      const newCars = [...prev, car]

      //Save to local storage
      const jsonCars = JSON.stringify(newCars);
      localStorage.setItem('cars', jsonCars);

      return newCars
    })
    setCar('')
  }

  const handleDelete = (car) => {
    setCars(() => {
      return cars.filter(item => item !== car)
    })
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input value={car} onChange={e => setCar(e.target.value)} />
      <button onClick={handleSubmit}>Add </button>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}
            <button style={{ marginLeft: '0.8rem' }} onClick={() => handleDelete(car)}>delete</button>
          </li>

        ))}
      </ul>
    </div>
  )
}

function ToggleGif() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Gif</button>
      {show && <Gif />}

    </div>
  )
}

function ToggleFormInput() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Form Input</button>
      {show && <FormInput />}
    </div>
  )
}

function ToggleUseEffect() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Use Effect</button>
      {show && <ContentUseEffect />}

    </div>
  )
}

function ToggleInputRadio() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Input Radio</button>
      {show && <FormInputRadio />}
    </div>
  )
}

function ToggleInputCheckBox() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Input CheckBox</button>
      {show && <FormmInputCheckbox />}
    </div>
  )
}

function ToggleTodoList() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Todo List</button>
      {show && <FormTodoList />}
    </div>
  )
}

function ToggleTimeFunction() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Time Function</button>
      {show && <TimeFunction />}
    </div>
  )
}

function ToggleAvatarFunction () {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Avatar Function</button>
      {show && <AvatarFunction />}
    </div>
  )
}

function ToggleFakeChatAppFunction() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        style={show ? { color: '#fff', backgroundColor: '#333' } : {}}
        onClick={() => setShow(!show)}>Toggle Fake Chat Function</button>
      {show && <FakeChatAppFunction />}
    </div>
  )
}

function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      <ToggleGif />
      <ToggleFormInput />
      <ToggleInputRadio />
      <ToggleInputCheckBox />
      <ToggleTodoList />
      <ToggleUseEffect />
      <ToggleTimeFunction />
      <ToggleAvatarFunction />
      <ToggleFakeChatAppFunction />
    </div>
  );
}

export default App;
