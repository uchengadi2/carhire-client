import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";
import backgroundDerica from "./../../assets/images/covers/food2.png";
import backgroundPaint from "./../../assets/images/covers/delivery.png";
import backgroundBulk from "./../../assets/images/controlsoft/digital-marketing1.webp";
import backgroundRetail from "./../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../assets/images/controlsoft/image25.webp";
import backgroundGrowth from "./../../assets/images/controlsoft/image24.webp";
import backgroundMetrics from "./../../assets/images/controlsoft/image20.webp";

import softwareEngineering from "./../../assets/images/controlsoft/image2.jpg";
import qualityAssurance from "./../../assets/images/controlsoft/quality-assurance.webp";


import { baseURL } from "../../apis/util";

import theme from "../ui/Theme";
import { PropaneSharp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    //height: "100%",
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    //marginTop: "2em",
    //marginBottom: "1em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },

  uppercard: {
    maxWidth: "100%",
    height: 500,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "5em",
    marginBottom: "5m",
    padding: 0,
   // backgroundColor: "#CDC2A5",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardMobile: {
    maxWidth: "100%",
    height: 400,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "5em",
    marginBottom: "5m",
    padding: 0,
   // backgroundColor: "#CDC2A5",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardsec: {
    maxWidth: "100%",
    height: 450,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    //marginTop: "2em",
    marginBottom: "10em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    height: 1250,
    //height: "100%",
    width: "100%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "2.5em",
    marginBottom: "0.5em",
    padding: 0,
    backgroundColor: "#FFFFFF",

    "&:hover": {
      //border: "solid",
      //borderColor: theme.palette.common.grey,
    },
  },
  mediaMobile: {
    height: "100%",
    width: "100%",
    // marginLeft: "80px",
  },
  media: {
    height: "100%",
    width: "100%",
    //marginLeft: "80px",
    //marginTop: "80px",
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "55px",
    marginLeft: "160px",

    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  dialog: {
    //maxWidth: 325,
    maxWidth: 500,
    //height: 450,
    marginLeft: "10px",
    borderRadius: 30,
    //marginTop: "10em",
    padding: 0,
    marginTop: -20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "250px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  actionButton: {
    borderRadius: 10,
    height: 40,
    width: 105,
    marginLeft: 7,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    fontSize: 10,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  actionPlusButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 50,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },

  actionPlusMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 130,
    marginLeft: 1,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  actionWholesaleButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  backgroundDerica: {
    backgroundImage: `url(${backgroundDerica})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  softwareEngineering: {
    backgroundImage: `url(${softwareEngineering})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },

  backgroundPaint: {
    backgroundImage: `url(${backgroundPaint})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },

  qualityAssurance: {
    backgroundImage: `url(${qualityAssurance})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },

  backgroundBulk: {
    backgroundImage: `url(${backgroundBulk})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundRetail: {
    backgroundImage: `url(${backgroundRetail})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },

  backgroundProduct: {
    backgroundImage: `url(${backgroundProduct})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },

  backgroundGrowth: {
    backgroundImage: `url(${backgroundGrowth})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundMetrics: {
    backgroundImage: `url(${backgroundMetrics})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
}));

export default function OurClients(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);

  const [currencyName, setCurrencyName] = useState("naira");
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [product, setProduct] = useState({});
  const [vendorName, setVendorName] = useState();
  const [minLearnerSlot, setMinLearnerSlot] = useState(1);

  // const { token, setToken } = useToken();
  // const { userId, setUserId } = useUserId();
  const [expanded, setExpanded] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDUp = useMediaQuery(theme.breakpoints.up("md"));

  let imageUrl = "";
  if (product) {
    imageUrl = `${baseURL}/images/courses/${product.imageCover}`;
  }

  const Str = require("@supercharge/strings");

  return (
    <>
      {matchesMDUp ? (
        <>
          <Box className={classes.uppercard} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'40%',marginBottom:60, marginTop:20}}>Our Clients</Typography>
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: "100%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
                
                
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:"10%", marginBottom:20}}>WholeRoof Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >


                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:'25%', marginBottom:20}}>Andersen Pharmaceutical Limited</Typography>
                  
                </Grid>
               
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:20}}>Brightway Transport Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:50}}>Brightway Beverages Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:20}}>VesaaCapital Limited</Typography>
                 
                </Grid>
                
              </Grid>
              {/* Starting a new row */ }
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
                
                
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:"10%", marginBottom:20}}>Brightawy Africa Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >


                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:'25%', marginBottom:20}}>Uppernark Solutions Limited</Typography>
                  
                </Grid>
               
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:20}}>U & S Agency Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:50}}>ControlSoft Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                {/* <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:20}}>VesaaCapital Limited</Typography>
                 
                </Grid> */}
                
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            
            
          </Box>
        </>
      ) : (
        <Box className={classes.uppercardMobile} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'20%',marginBottom:60, marginTop:10}}>Our Clients</Typography>
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: "100%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 2, width: "17%", marginTop: 0 }}
              >
                
                
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                <Typography variant="h5" style={{marginLeft:"10%", marginBottom:20}}>WholeRoof Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >


                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>Andersen Pharmaceutical Limited</Typography>
                  
                </Grid>
               
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>Brightway Transport Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'15%', marginBottom:50}}>Brightway Beverages Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'1%', marginBottom:20}}>VesaaCapital Limited</Typography>
                 
                </Grid>
                
              </Grid>
              {/* Starting a new row */ }
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
                
                
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                <Typography variant="h5" style={{marginLeft:"15%", marginBottom:20}}>Brightawy Africa Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >


                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>Uppernark Solutions Limited</Typography>
                  
                </Grid>
               
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>U & S Agency Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 40 }}
              >
              
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'15%', marginBottom:50}}>ControlSoft Limited</Typography>
                 
                </Grid>
                
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              
                
                {/* <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'20%', marginBottom:20}}>VesaaCapital Limited</Typography>
                 
                </Grid> */}
                
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            
            
          </Box>
      )}
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            marginTop: 110,
            height: 540,
            paddingBottom: "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "2em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "2em",
          },
        }}
      >
        <DialogContent>
          <Card className={classes.dialog}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt={product.name}
                image={imageUrl}
                crossOrigin="anonymous"
              />
            </CardActionArea>
          </Card>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </>
  );
}
