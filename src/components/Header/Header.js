import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

//icons
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import styles from "./styles";

const Header = ({ isActive }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.logoWrapper}>
      <Link
          component={NavLink}
          to='/'
          // style={({ isActive }) =>
          //   isActive ? { color: "black" } : {color: "white"}
          // }
          sx={{ textDecoration: "none" }}
        > <Typography sx={styles.logo}>{'{' + 'brackets' + '}'}</Typography></Link>
       
      </Box>
      <Box sx={styles.linksWrapper}>
        <Link
          component={NavLink}
          to='/design'
          style={({ isActive }) =>
            isActive ? { color: "black" } : {color: "white"}
          }
          sx={{ textDecoration: "none" }}
        >
          {" "}
          <Typography sx={styles.headerButton}>DESIGN</Typography>
        </Link>
        <Link
          component={NavLink}
          to='/shop'
          style={({ isActive }) =>
            isActive ? { color: "black" } : {color: "white"}
          }
          sx={{ textDecoration: "none" }}
        >
          {" "}
          <Typography sx={styles.headerButton}>shop</Typography>
        </Link>
        <Link
          component={NavLink}
          to='/contact'
          style={({ isActive }) =>
            isActive ? { color: "black" } : {color: "white"}
          }
          sx={{ textDecoration: "none" }}
        >
          {" "}
          <Typography sx={styles.headerButton}>contact</Typography>
        </Link>
        <Link
          component={NavLink}
          to='/cart'
          style={({ isActive }) =>
            isActive ? { color:"black" } : {color: "white"}
          }
          sx={{ textDecoration: "none" }}
        >
          {" "}
          <Box sx={styles.headerButton}>
            <AiOutlineShoppingCart />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
