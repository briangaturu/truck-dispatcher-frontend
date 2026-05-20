import { Routes, Route } from "react-router-dom";
import TokenWatcher from "./components/TokenWatcher";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import AdminDashboard from "./pages/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import ShipperDashboard from "./pages/ShipperDashboard";
import FieldStaffDashboard from "./pages/FieldStaffDashboard";
import VerifyEmail from "./pages/VerifyEmail";

// Public layout wrapper
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="min-h-[calc(100vh-68px-200px)]">{children}</main>
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
        path="/features"
        element={
          <PublicLayout>
            <Features />
          </PublicLayout>
        }
      />
      <Route
        path="/pricing"
        element={
          <PublicLayout>
            <Pricing />
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
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* Protected: Admin */}
      <Route element={<ProtectedRoutes allowedRoles={["ADMIN"]} />}>
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Route>

      {/* Protected: Driver */}
      <Route element={<ProtectedRoutes allowedRoles={["DRIVER"]} />}>
        <Route path="/driver/*" element={<DriverDashboard />} />
      </Route>

      {/* Protected: Shipper */}
      <Route element={<ProtectedRoutes allowedRoles={["SHIPPER"]} />}>
        <Route path="/shipper/*" element={<ShipperDashboard />} />
      </Route>

      {/* Protected: Field Staff */}
      <Route element={<ProtectedRoutes allowedRoles={["FIELD_STAFF"]} />}>
        <Route path="/field-staff/*" element={<FieldStaffDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  </>
);

export default App;