import { useState } from "react";
import { Book } from "./components/Book";
import Counter from "./components/Counter";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";




function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "HTML & CSS", body: "описание поста" },
    { id: 2, title: "Javascript", body: "описание поста" },
    { id: 3, title: "React", body: "описание поста" },
  ])


  return (
    <>

      <form>
        <input type="text" placeholder="Название поста"></input>
        <input type="text" placeholder="Описание поста"></input>
        <MyButton>Создать пост</MyButton>
      </form>
      <Postlist posts={posts} title="Список постов 1" />


      <Book name="Js для начинающих" year="2015" pages="360" > </Book>
      <Counter />


    </>
  );
}

export default App;
