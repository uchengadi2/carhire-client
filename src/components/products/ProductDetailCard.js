import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";

import { Link } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
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
import Grid from "@material-ui/core/Grid";

import ButtonArrow from "./../ui/ButtonArrow";
import UserLogin from "./../users/UserLogin";
import LoginForm from "../authForms/LoginForm";
import UserSignUp from "./../users/UserSignUp";
import SignUpForm from "../authForms/SignUpForm";
import UserPasswordReset from "./../users/UserPasswordReset";
import Bookings from "./../Bookings";
import history from "../../history";
import ProductsForCategory from "./../products/ProductsForCategory";
import ProductDetails from "./../products/ProductDetails";
import SendProductToCartForm from "./SendProductToCartForm";
import SendCourseToCheckoutForm from "./SendCourseToCheckoutForm";
import api from "./../../apis/local";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";
import { RoomSharp } from "@material-ui/icons";
import SendCreatorToCheckoutForm from "./SendCreatorToCheckoutForm";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 325,
    maxWidth: "100%",
    //height: 440,
    //height: 500,
    width:'100%',
    
    //marginLeft: "0.1%",
    borderRadius: 0,
    marginTop: "6em",
    padding: 0,
    // "&:hover": {
    //   border: "solid",
    //   borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    //height: 440,
    //height: 800,
    width: "100%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "-2.00em",
    marginBottom: "3em",
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
    //marginLeft: "100px",
  },
  media: {
    height: 400,
    //width: 400,
    width:"100%"
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
  secondRow: {
    marginLeft: "0",
    //width: 500,
    width:"45%",
    border: "1px dotted",
    padding: 20,
  },
  imageColumn: {
    //marginLeft: 5,
    width: 380,

    border: "1px dotted",
    //padding: 5,
  },
  secondRowMobile: {
    marginLeft: 0,
    marginTop: 50,
    //width: 380,
    width: "100%",
    border: "1px dotted",
    padding: 10,
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  thirdRow: {
    marginLeft: "0.0%",
   // width: 350,
   width:"30%",
    border: "1px dotted",
    padding: 0,
  },
  thirdRowMobile: {
    marginLeft: 10,
    marginTop: 30,
    //width: 380,
    width: "100%",
    border: "1px dotted",
    padding: 20,
  },

  secondColumn: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "22%",
  },
  secondColumnMobile: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  thirdColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  thirdColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  forthColumn: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  forthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  fifthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  fifthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  sixthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  sixthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  seventhColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  seventhColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  videoMedia: {
    height: 400,
    width: "100%",
  },
}));

export default function ProductDetailCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);
  const [currencyName, setCurrencyName] = useState();
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [price, setPrice] = useState();
  const [minQuantity, setMinQuantity] = useState();
  const [samplesList, setSamplesList] = useState([]);

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

  //const imageUrl = `${baseURL}/images/categories/${props.image}`;
  const imageUrl = `${baseURL}/images/vehicles/${props.sample.image}`;

  const Str = require("@supercharge/strings");

  // console.log(
  //   "this is description trim:",
  //   Str(props.description).limit(100, "...").get()
  // );

 

  // useEffect(() => {
  //   setPrice(props.creator.price);
  //   setCurrencyName(props.creator.currency ? props.creator.currency[0].name : "")
  // }, [props.creator]);


  

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let allData = [];
  //     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //     const response = await api.get(`/currencies`);
  //     const item = response.data.data.data;
  //     //workingData.map((vendor) => {
  //     allData.push({ name: item.name });
  //     //});

      
  //     setCurrencyName(allData[0].name);
  //   };

  //   //call the function

  //   fetchData().catch(console.error);
  // }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     let allData = [];
  //     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //     const response = await api.get(`/samples`, {
  //       params:{
  //         creator:props.creatorId,
  //         status:"visible",
  //         isAllowedOnThePlatform:true
  //       }});
  //     const workingData = response.data.data.data;
  //     workingData.map((sample) => {
  //     allData.push({ refNumber: sample.refNumber, 
  //       youtubeId:sample.youtubeId, 
  //       status:sample.status,
  //       sampleType:sample.sampleType,
  //       creator:sample.creator,
  //       isAllowedOnThePlatform:sample.isAllowedOnThePlatform
  //      });
  //     });

      
  //     setSamplesList(allData);
  //   };

  //   //call the function

  //   fetchData().catch(console.error);
  // }, [props.creatorId]);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleBookingsOpenDialogStatus = () => {
    setOpen(false);
  };
  const handleLoginDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleLoginDialogCloseStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleSuccessfulLoginDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
    setAlert({
      open: true,
      message: "You have successfully logged in",
      backgroundColor: "#4BB543",
    });
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    // history.push("/categories/new");
    setOpen({ open: false });
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message,
      backgroundColor: "#FF3232",
    });
    setOpen({ open: false });
  };
  const handleFailedLoginDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenLoginForm(true);
  };

  const handleSuccessfulSignUpDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setAlert({
      open: true,
      message: "You have successfully signed up",
      backgroundColor: "#4BB543",
    });
  };

 
  const handleFailedSignUpDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenSignUpForm(true);
  };


  const handleMakeOpenForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(true);
    setOpenLoginForm(false);
  };
  const handleMakeCloseForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(false);
    setOpenLoginForm(false);
  };
  const handleMakeOpenSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(true);
    setOpenLoginForm(false);
  };
  const handleMakeOpenLoginFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setOpenLoginForm(true);
  };
  const handleMakeCloseSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
  };

  // const handleLogOutDialogOpenStatus = () => {
  //   // history.push("/categories/new");
  //   setOpenLogOut(false);
  // };
  const renderLoginForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openLoginForm}
        //onClose={() => [setOpenLoginForm(false), history.push("/")]}
        onClose={() => [setOpenLoginForm(false)]}
      >
        <DialogContent>
          <LoginForm
            handleLoginDialogOpenStatus={handleLoginDialogOpenStatus}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleLoginDialogCloseStatus={handleLoginDialogCloseStatus}
            handleMakeOpenForgotPasswordFormDialogStatus={
              handleMakeOpenForgotPasswordFormDialogStatus
            }
            handleSuccessfulLoginDialogOpenStatusWithSnackbar={
              handleSuccessfulLoginDialogOpenStatusWithSnackbar
            }
            handleFailedLoginDialogOpenStatusWithSnackbar={
              handleFailedLoginDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderSignUpForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openSignUpForm}
        //onClose={() => [setOpenSignUpForm(false), history.push("/")]}\
        onClose={() => [setOpenSignUpForm(false)]}
      >
        <DialogContent>
          <UserSignUp
            token={props.token}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleSuccessfulSignUpDialogOpenStatusWithSnackbar={
              handleSuccessfulSignUpDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderForgotPasswordForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openForgotPasswordForm}
        //onClose={() => [setOpenForgotPasswordForm(false), history.push("/")]}
        onClose={() => [setOpenForgotPasswordForm(false)]}
      >
        <DialogContent>
          <UserPasswordReset
            token={props.token}
            userId={props.userId}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleMakeCloseForgotPasswordFormDialogStatus={
              handleMakeCloseForgotPasswordFormDialogStatus
            }
          />
        </DialogContent>
      </Dialog>
    );
  };

  const getCurrencyCode = () => {
    if (currencyName) {
      if (currencyName.toLowerCase() === "naira") {
        return <span>&#8358;</span>;
      } else {
        return;
      }
    }
  };

  

  return (
    <>
      {matchesMDUp ? (
        <Grid container direction="column" className={classes.root}>
          <Grid item container direction="row">
            <Grid item style={{width:'25%'}}>
              <Card>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt={props.sample.refNumber}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRow}>
              <Box>
              <Typography variant="h4" color="textSecondary" component="p">
                    
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                      <em> {props.sample.refNumber}</em>
                    </span>
                  </Typography>
                  
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {Str(props.sample.vehicleDescription).limit(200, "...").get()}
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5, marginBottom: 15 }}
                >
                  <strong>Make </strong>:{props.sample.vehicleMake}
                  </Typography>       
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Model </strong>: {props.sample.vehicleModel}

                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Class</strong>: {props.sample.vehicleClass}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Type</strong>: {props.sample.sampleType}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Special Feature</strong>: {props.sample.specialFeature}

                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Maximum Occupants Allowed</strong>: {props.sample.maximumOccupants}

                </Typography> 

                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Vehicle Details</strong>: {props.sample.vehicleDetails}

                </Typography> 
                
                {props.sample.location && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Location</strong>: {props.sample.location[0].name}

                </Typography> }
               
              </Box>
            </Grid>
            <Grid item className={classes.thirdRow}>
              <Box sx={{
                //width: 100,
                //height: 430,
               }}>
                <SendCreatorToCheckoutForm
                 sample={props.sample}
                 service={props.service}
                 sampleId={props.sampleId}
                  token={props.token}
                  userId={props.userId}
                  handleMakeOpenSignUpDialogStatus={
                    handleMakeOpenSignUpDialogStatus
                  }
                  handleMakeCloseSignUpDialogStatus={
                    handleMakeCloseSignUpDialogStatus
                  }
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  handleMakeCloseForgotPasswordFormDialogStatus={
                    handleMakeCloseForgotPasswordFormDialogStatus
                  }
                  handleSuccessfulCreateSnackbar={
                    props.handleSuccessfulCreateSnackbar
                  }
                  handleFailedSnackbar={props.handleFailedSnackbar}
                  handleFailedSignUpDialogOpenStatusWithSnackbar={
                    handleFailedSignUpDialogOpenStatusWithSnackbar
                  }
                  cartCounterHandler={props.cartCounterHandler}
                />
              </Box>
            </Grid>
          </Grid>
          {props.sample.images.length >=1 && <Typography style={{marginLeft:'40%',marginTop:20, fontSize:20, fontWeight:700}}>Various Views Of The Car</Typography>}
          <Grid
            item
            container
            direction="row"
            style={{ width: "100%", marginTop:50 }}
            justifyContent="center"
          >
          
           <Grid item style={{width:'22.5%'}}><Typography></Typography></Grid>
           <Grid item container direction="row" style={{width:'40%'}}> 
          
           {props.sample.images.map((sample, index) => (
            
                  <Grid item style={{width:'100%', marginTop:30}}>
                    
                         <Card>
                             <CardMedia
                                    className={classes.media}
                                    component="img"
                                    alt={props.sample.refNumber}
                                    image={`${baseURL}/images/vehicles/${sample}`}
                                    //   title={props.name}
                                    crossOrigin="anonymous"
                                    // onMouseOver={(event) => {
                                    //   event.currentTarget.style.height = "680";
                                    //   event.currentTarget.style.boxShadow = "0px 0px 20px 20px #B7B7B7";
                                    // }}
                                    // onMouseOut={event => {
                                    //   event.currentTarget.style.height = "400px";
                                    //   event.currentTarget.style.boxShadow = "0px 0px 1px 1px #B7B7B7";
                                    //  //event.currentTarget.style.height = "420px";
                                    // }}
                                    />
                  
                              
                              </Card>
                              
                              </Grid>

                              ))}
            
           
            
           
            </Grid>
           <Grid item style={{width:'22.5%', marginLeft:'5%'}}><Typography></Typography></Grid>

           
          </Grid>
          
        </Grid>
      ) : (
        <Grid container direction="column" className={classes.rootMobile}>
          <Grid item container direction="column">
            <Grid item style={{ width: "100%" }}>
              <Card>
                <CardMedia
                  className={classes.mediaMobile}
                  component="img"
                  alt={props.sample.refNumber}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRowMobile}>
              <Box>
              <Typography variant="h4" color="textSecondary" component="p">
                    
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                      <em> {props.sample.refNumber}</em>
                    </span>
                  </Typography>
                  
                
              
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                   component="p"
                >
                  {Str(props.sample.vehicleDescription).limit(200, "...").get()}
                </Typography>
                
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5, marginBottom: 15 }}
                >
                <strong>Make</strong>: {props.sample.vehicleMake}
                  </Typography>       
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Model</strong>: {props.sample.vehicleModel}

                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Class</strong>: {props.sample.vehicleClass}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Type</strong>: {props.sample.sampleType}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Special Feature</strong>: {props.sample.specialFeature}

                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Occupants Allowed</strong>: {props.sample.maximumOccupants}

                </Typography> 

                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Vehicle Details</strong>: {props.sample.vehicleDetails}

                </Typography> 
                
                {props.sample.location && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Location</strong>: {props.sample.location[0].name}

                </Typography> }
                
              </Box>
            </Grid>
            <Grid item className={classes.thirdRowMobile}>
              <Box>
                <SendCreatorToCheckoutForm
                  sample={props.sample}
                  service={props.service}
                  sampleId={props.sampleId}
                   token={props.token}
                   userId={props.userId}
                   handleMakeOpenSignUpDialogStatus={
                     handleMakeOpenSignUpDialogStatus
                   }
                   handleMakeCloseSignUpDialogStatus={
                     handleMakeCloseSignUpDialogStatus
                   }
                   handleMakeOpenLoginFormDialogStatus={
                     handleMakeOpenLoginFormDialogStatus
                   }
                   handleMakeCloseForgotPasswordFormDialogStatus={
                     handleMakeCloseForgotPasswordFormDialogStatus
                   }
                   handleSuccessfulCreateSnackbar={
                     props.handleSuccessfulCreateSnackbar
                   }
                   handleFailedSnackbar={props.handleFailedSnackbar}
                   handleFailedSignUpDialogOpenStatusWithSnackbar={
                     handleFailedSignUpDialogOpenStatusWithSnackbar
                   }
                   cartCounterHandler={props.cartCounterHandler}
                />
              </Box>
            </Grid>
          </Grid>
          {/* {props.sample.images.length >=1 &&<Typography style={{marginLeft:'25%',marginTop:20, fontSize:20, fontWeight:700}}>Various Views Of The Car</Typography>} */}
          
          {props.images && <Grid
            item
            container
            direction="row"
            style={{ width: "100%" }}
            justifyContent="center"
          >
            <Typography style={{marginLeft:'20%',marginTop:20, fontSize:20, fontWeight:700}}>Various Views Of The Car</Typography>
            <Grid item style={{width:'7%'}}><Typography></Typography></Grid>
           <Grid item container direction="row" style={{width:'74%'}}> 
          
           {props.images.map((sample, index) => (
                  <Grid item style={{width:'100%', marginTop:30}}>
                         <Card>
                         <CardMedia
                                    className={classes.mediaMobile}
                                    component="img"
                                    alt={props.sample.refNumber}
                                    image={`${baseURL}/images/vehicles/${sample}`}
                                    //   title={props.name}
                                    crossOrigin="anonymous"
                                   
                                    />
                  
                              
                              </Card>
                              
                              </Grid>

                              ))}
            
           
            
           
            </Grid>
           <Grid item style={{width:'7%', marginLeft:'2%'}}><Typography></Typography></Grid>

           
          
          </Grid>}       

         
        </Grid>
      )}
      {renderLoginForm()}
      {renderSignUpForm()}
      {renderForgotPasswordForm()}
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
