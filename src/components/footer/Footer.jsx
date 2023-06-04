import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {

  return (
    <>
      <Box sx={{ height:{lg:'20rem',md:'20rem',xs:'55rem',sm:'55rem'},backgroundColor: "#033d29",color:'#fff',display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Container maxWidth={"lg"} sx={{  mt: "1rem" }}>
          <Grid container spacing={10}>
            <Grid item lg={3}>
              <Stack direction={"column"}>
                <Stack direction={"row"} spacing={1} justifyContent="center">
                  <HolidayVillageIcon sx={{ mt: "0.4rem" }} />
                  <Typography variant="h6">
                    <strong>Doctors</strong>
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ mt: "2rem" }}>
                  Ut tellus elementum sagittis vitae et leo duis ut. Sit amet
                  consectetur adipiscing elit duis. Ultrices gravida dictum
                  fusce ut placer orci nulla pellentesque
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3}>
              <Stack direction={"column"}>
                <Typography variant="h6">
                  <strong>Quick links</strong>
                </Typography>
                <Stack direction={"column"} spacing={1}>
                  <Link to="/" style={{ textDecoration: "none", marginTop: "2rem" }}>
                    <Typography variant="body2" sx={{color:'#fff'}}>Home</Typography>
                  </Link>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={{color:'#fff'}}>About</Typography>
                  </Link>
                  <Link to="/rooms" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={{color:'#fff'}}>Rooms</Typography>
                  </Link>
                  <Link to="/hostelgallery" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={{color:'#fff'}}>hostelgallery</Typography>
                  </Link>
                  <Link to="/contactus" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={{color:'#fff'}}>contactus</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={3}>
              <Stack direction={"column"}>
                <Typography variant="h6">
                  <strong>Contact Us</strong>
                </Typography>
                <Stack direction={"column"} spacing={1}>
                  <Stack direction={"row"} sx={{ mt: "2rem" }} spacing={1}>
                    <LocationOnIcon />
                    <Typography variant="body2">
                      54826 Fadel Circles Darrylstad, AZ 90995
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} sx={{ mt: "2rem" }} spacing={1}>
                    <CallIcon />
                    <Typography variant="body2">
                      (329) 580-7077 (650) 382-5020{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={3}>
              <Stack direction={"column"}>
                <Typography variant="h6">
                  <strong>Follow Us</strong>
                </Typography>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="body2" sx={{ mt: "2rem" }}>
                    Venenatis urna cursus eget nunc scelerisque{" "}
                  </Typography>

                  <Stack direction={"row"} sx={{ mt: "2rem" }} spacing={1}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <WhatsAppIcon />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;