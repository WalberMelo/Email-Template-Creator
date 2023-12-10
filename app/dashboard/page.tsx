import { ToastContainer } from "react-toastify";

import DashboardContent from "./DashboardContent";
import Layout from "./layout";

import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
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
      <DashboardContent />
    </Layout>
  );
}
