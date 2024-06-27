import MainLayout from "./components/layout/mainLayout.jsx";
import Home from "./components/pages/home.jsx";
import Profile from "./components/pages/profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;