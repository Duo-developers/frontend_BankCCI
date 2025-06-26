import { HomePage } from "./pages/HomePage.jsx"; 
import { LoginPage } from "./pages/LoginPage.jsx";
import { AboutUsPage } from "./pages/AboutUsPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage.jsx";
import { TermsOfServicePage } from "./pages/TermsOfServicePage.jsx";

export const routes = [
  {path: "/",element: <HomePage />},
  {path: "/login",element: <LoginPage />},
  {path: "/about",element: <AboutUsPage />},
  {path: "/contact",element: <ContactPage />},
  {path: "/privacy-policy",element: <PrivacyPolicyPage />},
  {path: "/terms-of-service",element: <TermsOfServicePage />},
];
