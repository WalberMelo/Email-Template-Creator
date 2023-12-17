import { ToastContainer } from "react-toastify";

import Dashboard from "./(overview)/Dashboard.component";
import Layout from "./layout";

import "react-toastify/dist/ReactToastify.css";

export default function page() {
  return (
    <Layout>
      <ToastContainer
        position="top-right" // Set the position
        autoClose={4000} // Set other configurations as needed
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <Dashboard />
    </Layout>
  );
}
