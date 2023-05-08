// @ts-ignore 
import { useRoutes } from "hookrouter";
import Layout from "../components/layout";
import About from "../components/pages/About";
import Careers from "../components/pages/Career";
import ContactUs from "../components/pages/ContactUs";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Blogs from "../components/pages/Blogs";
import Login from "../components/login/login";
import SignUp from "../components/signup/signup";

function Route() {

   const routes = {
      '/': () => (
         <Home />
      ),
      '/about': () => (
         <About />
      ),
      '/services': () => (
         <Services />
      ),
      '/careers': () => (
         <Careers />
      ),
      '/contact-us': () => (
         <ContactUs />
      ),
      '/blogs': () => (
         <Blogs />
      ),
      '/blogs/write': () => (
         <Blogs />
      ),
      '/login': () => (
         <Login />
      ),
      '/signup': () => (
         <SignUp />
      ),

   }

   const routeResult = useRoutes(routes);
   // console.log(routeResult);
   return (
      <Layout>
         {routeResult}
      </Layout>
   )
}

export default Route;
