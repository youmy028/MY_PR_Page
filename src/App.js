import './index.css';
import PreviewPage from "./pages/PreviewPage";
import MainPage from "./pages/MainPage";
import { Routes, Route,Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/preview" element={<PreviewPage />} /> */}
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;
