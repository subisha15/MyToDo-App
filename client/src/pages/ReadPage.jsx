import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../components/Task";
import Navbar from "../components/Navbar";

function ReadPage() {
  const [retrievedTask, setRetrievedTask] = useState([]);

  const handleFetchTask = async () => {
    const response = await axios.get("http://localhost:3000/api/task/show");
    console.log(response.data);
    setRetrievedTask(response.data.tasks);
  };
  useEffect(() => {
    handleFetchTask();
  }, []);

  const handleTaskDelete = (id) => {
    setRetrievedTask((prevTasks) =>
      prevTasks.filter((task) => task._id !== id)
    );
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white font-bold m-4 text-[30px]">To Do Lists</h1>
        {retrievedTask.map((item, index) => (
          <Task
            key={index}
            taskName={item.task}
            id={item._id}
            onDelete={handleTaskDelete}
          />
        ))}
      </div>
    </>
  );
}

export default ReadPage;
