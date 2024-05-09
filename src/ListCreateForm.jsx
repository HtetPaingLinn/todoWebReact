import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function ListCreateForm(props) {

  const [text,setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  }

  const handleAddBtn = () => {
    props.addTask(text);
    setText ("");
    toast.success("Task Added", {position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }

  const btnEnter = (event) => {
    if (event.key === "Enter") {
      handleAddBtn();
    }
  }

  return (
    <div className="flex mb-5">
    <input
      className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
      type="text"
      id="textInput"
      value={text}
      onChange={handleText}
      onKeyUp={btnEnter}
    />
    <button
    onClick={handleAddBtn}
      id="addBtn"
      className="h-14 w-14 bg-neutral-700 text-white flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 stroke-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  </div>
  )
}

export default ListCreateForm
