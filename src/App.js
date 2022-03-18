import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import MyWork from "./routes/myWork/myWork.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="work" element={<MyWork />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
