import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
const arr = [
  { id: 1, name: "test", checked: true },
  { id: 2, name: "test 1", checked: false },
  { id: 3, name: "test 2", checked: false },
];

export default function UseEffect() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");
  const [posts, setPosts] = useState([]);

  const [language, setlanguage] = useState("");
  const [languages, setLanguages] = useState(arr);

  const handleAdd = (id) => {
    setLanguages([...languages, { id: id, name: language, checked: false }]);
    setlanguage("");
  };

  const handleDelete = (id) => {
    setLanguages(() => {
      return languages.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {}, []);

  const handleChecked = (lang, checked) => {
    const language = { ...lang, checked };
    setLanguages(
      languages.map((item) => (item.id === language.id ? language : item))
    );
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div className="trung-use-effect">
      <h1>Use effect page</h1>
      <input onChange={(e) => setTitle(e.target.value)} />
      <h2>Title: {title}</h2>

      <h1>Languages</h1>
      <input value={language} onChange={(e) => setlanguage(e.target.value)} />
      <button onClick={() => handleAdd(Date.now())}>Add</button>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={language.checked}
              onChange={(e) => handleChecked(language, e.target.checked)}
            />
            {language.name}
            <button style={{ marginLeft: 5 }}>Edit</button>
            <button
              style={{ marginLeft: "0.8rem" }}
              onClick={() => handleDelete(language.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      {/* Call API */}
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
