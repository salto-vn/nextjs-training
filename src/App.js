import logo from './logo.svg';
import './App.css';
import Demo from 'components/Demo';
import Welcome from 'components/DucAnh/Welcome'
import Comment from 'components/DucAnh/Comments';
import Clock from 'components/DucAnh/Clock'
import { useState } from 'react';

const comment = {
  date: new Date(),
  text: 'I like ReactJS',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function App() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date())
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo />

        <div className='duc-anh-page'>
          {/* // Gọi 1 components nhiều lần */}
          <Welcome name="Sara" />
          <Welcome name="Steven" />
          <Welcome name="Join" />

          {/* // Chia các components thành các components nhỏ  */}
          <Comment date={comment.date} text={comment.text} author={comment.author} />

          {/* // Bộ đếm thời gian */}
          <Clock date={date} />
        </div>
      </header>
    </div>
  );
}

export default App;
