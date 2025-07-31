import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Theme1 from "./theme1";
import Theme2ProductPage from "./theme2";
import ProductDetailLayout from "./theme3";
import Theme4 from "./theme4";
import Theme5 from "./theme5";
import Theme6 from "./theme6";
import Theme7 from './theme7'
import Theme8 from "./components/theme8/theme8";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Theme2ProductPage />} />
          <Route path="/theme-2" element={<Theme4 />} />
          <Route path="/theme-3" element={ <Theme7 />} />
          <Route path="/theme-4" element={<ProductDetailLayout />} />
          <Route path="/theme-5" element={<Theme6 />} />
          <Route path="/theme-6" element={<Theme5 />} />
          <Route path="/theme-7" element={<Theme1 /> } />
          <Route path="/theme-8" element={<Theme8 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
