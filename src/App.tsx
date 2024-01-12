import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Welcome from "./components/Welcome";
import FindProfile from "./routes/FindProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
        </Route>
        <Route path="/profile" element={<FindProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
