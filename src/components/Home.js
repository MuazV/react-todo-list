import Header from './header/header.js';
import Todo from './todos/Todo.js';
import {useState, useEffect} from "react";

const Home = () => {
    const [input, setInput] = useState("")

    
    return(
        <div className='container m-4'>
            <Header />
            <Todo/>
        </div>
    );
};

export default Home;