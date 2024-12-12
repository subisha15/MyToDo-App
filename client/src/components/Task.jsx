import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Task({ taskName, id, onDelete }) {
  const handleDelete = async () => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDeletion) return; // Exit if the user clicks "Cancel"
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/task/delete?id=${id}`
      );
      onDelete(id); // Notify the parent to update the list
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="bg-gray-500 w-full sm:w-1/4 p-2 rounded-lg my-1 sm:m-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <Link to={`/update/${id}`}>
        <FaEdit />
      </Link>
      <p className="sm:p-1 sm:m-1">{taskName}</p>

      <MdDelete onClick={handleDelete} className="hover:cursor-pointer" />
    </div>
  );
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
