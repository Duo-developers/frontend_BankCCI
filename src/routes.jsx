import { HomePage } from "./pages/homePage/HomePage.jsx"; 
import { LoginPage } from "./pages/auth/LoginPage.jsx";
import { AboutUsPage } from "./pages/basicInformation/AboutUsPage.jsx";
import { ContactPage } from "./pages/basicInformation/ContactPage.jsx";
import { PrivacyPolicyPage } from "./pages/basicInformation/PrivacyPolicyPage.jsx";
import { TermsOfServicePage } from "./pages/basicInformation/TermsOfServicePage.jsx";

export const routes = [
  {path: "/",element: <HomePage />},
  {path: "/login",element: <LoginPage />},
  {path: "/about",element: <AboutUsPage />},
  {path: "/contact",element: <ContactPage />},
  {path: "/privacy-policy",element: <PrivacyPolicyPage />},
  {path: "/terms-of-service",element: <TermsOfServicePage />},
];
