
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import Nearby from "./Nearby";
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/nearby" element={<Nearby />} />
//         </Routes>
//       </Router>
//     </div>
    
//   );
// }

// export default App;
import React from "react";
import MidiPlayerComponent from "./midi";

function App() {
  return (
    <div className="App">
      <h1>React MIDI Player</h1>
      <MidiPlayerComponent />
    </div>
  );
}

export default App;
