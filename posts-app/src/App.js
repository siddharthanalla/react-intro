
import "./App.css";
 
import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"
import React, { useState , useEffect} from "react";
import {stringify} from "flatted"
import axios from "axios"


function App() {
  const [inputText, setInputText] = useState({id:-1,title:"",text:""});
//   const [inputTitle, setInputTitle] = useState("");
  const [items, setItems] = useState([]);
//   const [titles, setTitles] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setItems(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()
    return data
}

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText((prevItems) => {return {id:items.length, title: prevItems.title, text: newValue}});
    console.log(inputText)
  }
  function handleChangeTitle(event) {
    const newValue = event.target.value;
    setInputText((prevItems) => {return {id:items.length, title: newValue, text: prevItems.text}});
    console.log(inputText)
  }
  const addItem = async () => {
    
    axios.post('http://localhost:5000/posts', inputText)
    .then((response) => {
        setItems([...items, response.data]);
    })
    .catch((error) => {console.error(error);})

    
    // setItems((prevItems) => {
    //   return [...prevItems, inputText];
    // });
    setInputText({id:-1,title:"",text:""});
    

  }

//   function deleteItem(id) {
//     setItems((prevItems) => {
//       return prevItems.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }
  const deleteItem =async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`,{method: 'DELETE'})
    setItems((prevItems) => {
        return prevItems.filter((item, index) => {
          return item.id !== id;
        });
      });
  }


  return (
    <div className="container">

      <div className="heading">
        <h1>BlogPost</h1>
      </div>
      <Navbar />
      <div className="form">
        <input onChange={handleChangeTitle} type="text" value={inputText.title} />
        <input onChange={handleChange} type="text" value={inputText.text} />
        <button onClick={addItem}>
          <span>Post</span>
        </button>
      </div>
      <div>
        <ul style={{listStyleType: 'none', /* Remove bullets */
  padding: 0, /* Remove padding */
  margin: 0, /* Remove margins */}}>  
          {items.map((todoItem, index) => (
            <Posts
              key={index}
              id={todoItem.id}
              text={todoItem.text}
              title={todoItem.title}

              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
