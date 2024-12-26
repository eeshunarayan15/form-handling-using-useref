import React, { useRef, useState } from 'react'

const Form = () => {
         const [val, setVal] = useState([]);
      const name = useRef(null);
    const age = useRef(null);
    const handleSubmit = (event) => {
      event.preventDefault();
    //   console.log(name.current.value);
    //     console.log(age.current.value);
        const newEntry = {
            name: name.current.value,
            age:age.current.value,
        }
        console.log(newEntry+"newentry")
        setVal((prevVal) => [ newEntry])
                // setVal((prevVal) => [...prevVal, newEntry]);
         name.current.value = "";
         age.current.value = "";
        
    };
    // val.map((item=>console.log(item.name+item.age)))
   
  return (
    <div className="w-[300px] min-h-[200px] rounded-md items-center flex flex-col justify-center bg-slate-100">
      <form
        className=" text-center  outline-none "
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md mt-2"
          ref={name}
          type="text"
          placeholder="name"
        />
        <br />
        <input
          className="rounded-md  mt-2"
          ref={age}
          type="text"
          placeholder="age"
        />
        <br />
        <button className="w-full mt-2 bg-green-300 rounded-full">
          submit
        </button>
      </form>

      <div>
        <h3>Submitted Data:</h3>
        <ul>
          {val.map((item, index) => (
            <li key={index}>
              <h1>name: {item.name}</h1> <h1>age: {item.age}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Form
