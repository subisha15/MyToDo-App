import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function CreatePage() {
  const [userTask, setUserTask] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTask = async (e) => {
    try {
      e.preventDefault();
      console.log(userTask);
      const response = await axios.post(
        "http://localhost:3000/api/task/create",
        { userTask }
      );
      console.log(response.data);
      setMessage("Your task is added to ToDo List"); // Set success message
      setUserTask(""); // Clear input field
      setTimeout(() => setMessage(""), 2000); // Clear message after 3 seconds
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
        <form className="flex flex-col  justify-center items-center min-w-1/4  bg-gray-800 gap-4 rounded-md m-4 p-4">
          <h1 className="text-white font-bold italic ">TO DO TASKS</h1>
          <div className="m-2 flex items-center">
            <input
              className="p-4 text-black placeholder:font-bold  placeholder:text-black rounded-sm"
              type="text"
              placeholder="What is the task Today?"
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            ></input>
            <button
              className="bg-black font-normal text-white m-3 p-4 rounded-md"
              onClick={handleAddTask}
            >
              ADD TASK
            </button>
          </div>
          {message && ( // Conditionally render the success message
            <p className="text-white font-normal mt-2">{message}</p>
          )}
        </form>
      </div>
    </>
  );
}

export default CreatePage;
