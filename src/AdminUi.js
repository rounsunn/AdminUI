import React from "react";
import Header from "./components/Header";
import Box from '@material-ui/core/Box';
import AdminDashboard from "./AdminDashboard";


function AdminUi() {
  
  return (
    <Box>
      <Header />
      <AdminDashboard />
    </Box>
  );
};

export default AdminUi;
