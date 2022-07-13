import Header from './header/Header';
import Todo from './todos/Todo.js';
import {useState, useEffect} from "react";

const Home = () => {
    const [inputs, setInputs] = useState(JSON.parse(localStorage.getItem("todos")) || [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(inputs));
    }, [inputs])

    
    return(
        <div className='container m-4'>
            <Header inputs= {inputs} setInputs = {setInputs} />
            <Todo inputs = {inputs}/>
        </div>
    );
};

export default Home;