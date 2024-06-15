import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./assets/Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./assets/Pages/Layout";
import Buses from "./assets/Pages/Buses";
import Train from "./assets/Pages/Train";
import SearchDetailPage from "./assets/Pages/SearchDetailPage";
import SearchDetailPageComponentOne from "./assets/Pages/SearchDetailPageComponentOne";
import SearchDetailPageComponentTwo from "./assets/Pages/SearchDetailPageComponentTwo";
import Login from "./assets/Pages/Login";
import AgencyDashboard from "./assets/Pages/AgencyDashboard";
import AgHome from "./assets/Pages/AgHome";
import RegisterTrip from "./assets/Pages/RegisterTrip";
import ResgisterTripOne from "./assets/Pages/ResgisterTripOne";
import RegisterTripTwo from "./assets/Pages/RegisterTripTwo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/bus" element={<Buses />} />
            <Route path="/train" element={<Train />} />
          </Route>
          <Route path="/searchDetails/:id" element={<SearchDetailPage />}>
            <Route index element={<SearchDetailPageComponentOne />} />
            <Route
              path="/searchDetails/:id/:val"
              element={<SearchDetailPageComponentTwo />}
            />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<AgencyDashboard />}>
            <Route index element={<AgHome />} />
          </Route>
          <Route path="/RegisterTrip" element={<RegisterTrip />}>
            <Route index element={<ResgisterTripOne />} />
            <Route path="/RegisterTrip/Payment" element={<RegisterTripTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-left" draggable="mouse" />
    </>
  );
}

export default App;
