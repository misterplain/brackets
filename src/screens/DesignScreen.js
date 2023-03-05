import React from "react";
import Colors from "../components/Design/Colors";
import Typography from "../components/Design/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const styles = {
  wrapper: {
    margin: "100px",
  },
};

const DesignScreen = () => {
  return (
    <Box sx={styles.wrapper}>
       <Link
        href='https://github.com/misterplain/brackets'
        target='_blank'
        rel='noopener'
        style={{ textDecoration: "none" }}
      >
      <Button variant='outlined' sx={{ margin: "20px" }}>
        RUNNING TO-DO LIST (IN README)
      </Button></Link>
      <Link
        href='https://imagecolorpicker.com/'
        target='_blank'
        rel='noopener'
        style={{ textDecoration: "none" }}
      >
      <Button variant='outlined' sx={{ margin: "20px" }}>
        COLOR PICKER
      </Button></Link>
      <Link
        href='https://fonts.google.com/'
        target='_blank'
        rel='noopener'
        style={{ textDecoration: "none" }}
      >
        <Button
          variant='outlined'
          sx={{ margin: "20px", textDecoration: "none" }}
        >
          GOOGLE FONTS
        </Button>
      </Link>

      <Colors />
      <Typography />
    </Box>
  );
};

export default DesignScreen;
