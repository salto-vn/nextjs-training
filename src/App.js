import logo from './logo.svg';
import './App.css';
import Demo from 'components/Demo';
import Welcome from 'components/Welcome'
import Comment from 'components/Comments';

const comment = {
  date: new Date(),
  text: 'I like ReactJS',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Demo /> */}

        {/* // Gọi 1 components nhiều lần */}
        {/* <Welcome name="Sara" />
        <Welcome name="Steven" />
        <Welcome name="Join" /> */}

        {/* // Chia các components thành các components nhỏ  */}
        <Comment date={comment.date} text={comment.text} author={comment.author} />
      </header>
    </div>
  );
}

export default App;
