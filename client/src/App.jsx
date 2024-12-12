import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePage />}></Route>
          <Route path="/show" element={<ReadPage />}></Route>
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
