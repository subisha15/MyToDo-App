import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchRecord = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/task/one?id=${id}`
      );
      console.log(data);
      setTask(data.task.task);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/task/one?id=${id}`,
        { task }
      );

      console.log(data);
      setMessage("Your task is updated"); // Set success message
      //setTask(""); // Clear input field
      setTimeout(() => {
        setMessage(""), navigate("/");
      }, 3000); // Clear message after 3 seconds
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
        <form className="flex flex-col  justify-center items-center min-w-1/4  bg-gray-800 gap-4 rounded-md m-4 p-4">
          <div className="m-2 flex items-center">
            <input
              className="p-4 text-black placeholder:font-bold  placeholder:text-black rounded-sm"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
            <button
              className="bg-black font-normal text-white m-3 p-4 rounded-md"
              onClick={handleUpdate}
            >
              UPDATE TASK
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

export default UpdatePage;
