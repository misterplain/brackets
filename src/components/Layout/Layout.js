import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import styles from "./styles";

const Layout = ({ children }) => {
  return (
    <Box sx={styles.wrapper}>
      {" "}
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
