import { HomePage } from "./pages/homePage/HomePage.jsx"; 
import { AuthPage } from "./pages/auth/AuthPage.jsx";
import { AboutUsPage } from "./pages/basicInformation/AboutUsPage.jsx";
import { ContactPage } from "./pages/basicInformation/ContactPage.jsx";
import { PrivacyPolicyPage } from "./pages/basicInformation/PrivacyPolicyPage.jsx";
import { TermsOfServicePage } from "./pages/basicInformation/TermsOfServicePage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import { ClientPage } from "./pages/ClientPage";
import { AdminPage } from "./pages/adminPage";
import { SettingsPage } from "./pages/settings"; 
import { ProtectedRoute } from "./components/ProtectedRoute.jsx"

export const routes = [
  {path: "/*", element: <HomePage />},
  {path: "/auth", element: <AuthPage />},
  {path: "/about", element: <AboutUsPage />},
  {path: "/contact", element: <ContactPage />},
  {path: "/privacy-policy", element: <PrivacyPolicyPage />},
  {path: "/terms-of-service", element: <TermsOfServicePage />},
  {path: "/register", element: <RegisterPage />},
  {path: "/client", element: <ProtectedRoute element={<ClientPage />} requiredRoles={["USER_ROLE"]} />},
  {path: "/admin", element: <ProtectedRoute element={<AdminPage />} requiredRoles={["ADMIN_ROLE"]} />},
  {path: "/settings", element: <ProtectedRoute element={<SettingsPage />} requiredRoles={["USER_ROLE", "ADMIN_ROLE"]} />}
];