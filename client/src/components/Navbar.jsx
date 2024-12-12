import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-gray-700 min-h-full p-3">
        <ol className="flex  justify-evenly  ">
          <li>
            <button className="font-medium text-white">
              <Link to="/">Add Task</Link>
            </button>
          </li>
          <li>
            <button className="font-medium text-white">
              <Link to="/show">Show Task</Link>
            </button>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Navbar;
