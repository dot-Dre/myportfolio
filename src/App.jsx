import {BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    <main className="bg-slate-300/20">
      <Router>
        <AnimatedRoutes/>
      </Router>
    </main>
  );
}

export default App;
