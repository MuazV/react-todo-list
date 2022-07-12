import React, {useState, useEffect} from 'react';

const header = () => {
    


  return (
    <div className='container'>
    <h2>React To-Do List</h2>
    <form className='mt-3' onSubmit={handleSubmit}>
        <input type="text" className='mx-4 p-1' value={input} onChange={handleChange}/>
        <input type="submit" value="Add" className='px-3 py-1 bg-success border'/>
    </form>
    </div>
  )
}

export default header