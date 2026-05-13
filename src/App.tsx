import { Routes, Route } from "react-router-dom";
import TokenWatcher from "./components/TokenWatcher";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import AdminDashboard from "./pages/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import ShipperDashboard from "./pages/ShipperDashboard";

// Public layout wrapper
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="public-main">{children}</main>
    <Footer />
  </>
);

const App = () => (
  <>
    <TokenWatcher />
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected: Admin */}
      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Route>

      {/* Protected: Driver */}
      <Route element={<ProtectedRoutes allowedRoles={["driver"]} />}>
        <Route path="/driver/*" element={<DriverDashboard />} />
      </Route>

      {/* Protected: Shipper */}
      <Route element={<ProtectedRoutes allowedRoles={["shipper"]} />}>
        <Route path="/shipper/*" element={<ShipperDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  </>
);

export default App;