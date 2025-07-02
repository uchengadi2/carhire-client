import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { PaystackButton } from "react-paystack";
import Card from "@material-ui/core/Card";
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

import ButtonArrow from "./../ui/ButtonArrow";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import UserLogin from "./../users/UserLogin";
import UserSignUp from "./../users/UserSignUp";
import UserPasswordReset from "./../users/UserPasswordReset";
import Bookings from "./../Bookings";
import history from "../../history";
import ProductsForCategory from "./../products/ProductsForCategory";
import ProductDetails from "./../products/ProductDetails";
import api from "./../../apis/local";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";
import CartUpdateAndDeliveryForm from "./CartUpdateAndDeliveryForm";
import CheckoutActionPage from "./CheckoutActionPage";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    //height: 440,
    height: "100%",
    width: "100%",

    marginLeft: "3px",
    //borderRadius: 30,
    marginTop: "3.5em",
    marginBottom: "3em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    // maxWidth: 600,
    maxWidth: 350,
    height: "100%",
    //height: 545,
    //width: 400,
    width: "97%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "-3.5em",
    marginBottom: "3em",
    padding: 0,
    backgroundColor: "#FFFFFF",

    "&:hover": {
      //border: "solid",
      //borderColor: theme.palette.common.grey,
    },
  },
  mediaMobile: {
    //height: 200,
    height: "100%",
    //width: 200,
    width: "100%",
    //marginLeft: "80px",
  },
  media: {
    height: "100%",
    width: "100%",
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
}));

const renderSingleLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  helperText,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};



const renderMultiLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  rows,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText={helperText}
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={rows}   
      {...custom}
      onChange={input.onChange}
    />
  );
};

export default function CheckoutCard(props) {
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
  const [isOnPromo, setIsOnPromo] = useState(false);
  const [promoPrice, setPromoPrice] = useState();
  const [promoMinQuantity, setPromoMinQuantity] = useState();
  const [creator, setCreator] = useState({});
  const [course, setCourse] = useState({});
  const [name, setName] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState("")
  const [serviceApplicability, setServiceApplicability] = useState();
  const [arrivalDate, setArrivalDate] =useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [ontransitSecurityService, setOntransitSecurityService] = useState('not-applicable');
  const [onsiteSecurityService, setOnsiteSecurityService] = useState('not-applicable');
  const [carService, setCarService] = useState('not-applicable');
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

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //get the product details
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/creators/${props.creator}`);
      const creator = response.data.data.data;

      allData.push({
         id: creator._id,
          name: creator.name,
          description: creator.description,
          videoPrice: creator.videoPrice,
          videoHookPrice: creator.videoHookPrice,
          videoDeliveryDays: creator.videoDeliveryDays,
          soundPrice: creator.soundPrice,
          soundHookPrice: creator.soundHookPrice,
          soundDeliveryDays: creator.soundDeliveryDays,
          age: creator.age,
          gender:creator.gender,
          rate: creator.rate,
          country: creator.country,
          category: creator.category,
          categoryCode: creator.category? creator.category[0].code : "",
          categoryName: creator.category ? creator.category[0].name : "",
          countryId: creator.country? creator.country[0].id : "",
          niche: creator.niches,
          nicheId: creator.niches ? creator.niches[0].id :"",
          language: creator.languages,
          languageId: creator.languages ? creator.languages[0].id :"",
          currency: creator.currency,
          slug: creator.slug,
          image: creator.image,
          createBy: creator.createBy,
          createdAt: creator.createdAt,
          bio:creator.bio
      });

      if (!allData) {
        return;
      }
      setCreator({
       
        id: allData[0].id,
          name: allData[0].name,
          description: allData[0].description,
          videoPrice: allData[0].videoPrice,
          videoHookPrice: allData[0].videoHookPrice,
          videoDeliveryDays: allData[0].videoDeliveryDays,
          soundPrice: allData[0].soundPrice,
          soundHookPrice: allData[0].soundHookPrice,
          soundDeliveryDays: allData[0].soundDeliveryDays,
          age: allData[0].age,
          gender:allData[0].gender,
          rate: allData[0].rate,
          country: allData[0].country,
          category: allData[0].category,
          categoryCode: allData[0].categoryCode,
          caegoryName: allData[0].categoryName,
          countryId: allData[0].countryId,
          niche: allData[0].niche,
          nicheId: allData[0].nicheId,
          language: allData[0].language,
          languageId: allData[0].languageId,
          currency: allData[0].currency,
          slug: allData[0].slug,
          image: allData[0].image,
          createBy: allData[0].createBy,
          createdAt: allData[0].createdAt,
          bio:allData[0].bio
      });
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  

  
  let imageUrl = "";
  //if (creator) {
    imageUrl = `${baseURL}/images/vehicles/${props.image}`;
  //}


 

  const Str = require("@supercharge/strings");

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

  const handleFailedLoginDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message:
        "Could not logged you in. Please ensure your login credentials are correct",
      backgroundColor: "#FF3232",
    });
    setOpenLoginForm(false);
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

  const handleFailedSignUpDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message:
        "Could not sign you up. Please ensure you are connected to the internet and all required fields are completed",
      backgroundColor: "#FF3232",
    });
    setOpenSignUpForm(false);
  };

  const handleMakeOpenLoginFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setOpenLoginForm(true);
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

  const handleMakeCloseSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
  };

  const handleServiceApplicabilityChange =(event)=>{
    setServiceApplicability(event.target.value);
  }
  const  handleCarServiceChange = (event)=>{
    setCarService(event.target.value);
  }

  const handleOnsiteSecurityServiceChange=(event)=>{
    setOnsiteSecurityService(event.target.value);
  }

  const handleOntransitSecurityServiceChange =(event)=>{
    setOntransitSecurityService(event.target.value);
  }
  const handleSuccessfulCreateSnackbar = (message) => {
    // history.push("/categories/new");
    // setOpen({ open: false });
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
    //setOpen({ open: false });
  };

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
          <UserLogin
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
        //onClose={() => [setOpenSignUpForm(false), history.push("/")]}
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

  if (!course) {
    return <></>;
  }
  


  return (
    <>
      {matchesMDUp ? (
        <Card className={classes.root} disableRipple>
          {/* <CardActionArea disableRipple> */}
          
          <Grid container direction="row">
            {(props.service[0] === "car-and-security" || props.service[0] === "carhire") &&<Grid item style={{ width: "26.94%" }}>
              <CardMedia
                className={classes.media}
                component="img"
                alt={props.vehicle ? props.vehicle[0].vehicleMake: ""}
                image={imageUrl}
                //title={product.name}
                crossOrigin="anonymous"
              />
            </Grid>}
            {!(props.service[0] === "car-and-security" || props.service[0] === "carhire") &&<Grid item style={{ width: "26.94%" }}>
              <CardMedia
                className={classes.media}
                component="img"
                alt={props.vehicle ? props.vehicle[0].vehicleMake: ""}
                image={props.image}
                //title={product.name}
                crossOrigin="anonymous"
              />
            </Grid>}
           
           {(props.service[0] === "car-and-security" || props.service[0] === "carhire") && <Grid item style={{ width: "46.19%", border: "1px dotted grey" }}>
              <CardContent disableRipple>
              <Typography variant="h5">Vehicle Details</Typography>
              <Typography variant="h4" color="textSecondary" component="p">
                    
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                      <em> {props.refNumber}</em>
                    </span>
                  </Typography>
                  
               
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5, marginBottom: 15 }}
                >
                <strong>Make</strong>: {props.vehicle ? props.vehicle[0].vehicleMake:""}
                  </Typography>       
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Model</strong>: {props.vehicle ?props.vehicle[0].vehicleModel:""}

                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Class</strong>: {props.vehicle ?props.vehicle[0].vehicleClass:""}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Special Feature</strong>: {props.vehicle ?props.vehicle[0].specialFeature:""}

                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name:""},&nbsp;{props.sourceState ? props.sourceState[0].name :""}&nbsp;

                </Typography> 
                
                <Typography variant="h5">Booking Details</Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Source Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name :""},&nbsp;{props.sourceState ? props.sourceState[0].name :""}&nbsp;

                </Typography> 

                              
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Destination</strong>: {props.destinationAddress},&nbsp;{props.destinationState ? props.destinationState[0].name :""}&nbsp;

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Booking Coverage</strong>: {props.tripCoverage}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Number of Passengers</strong>: {props.numberOfVehicleOccupant}

                </Typography> 

                
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Service Applicability</strong>: {props.serviceApplicability ==="both" ? "At Arrival & Departure" : props.serviceApplicability}

                </Typography> 
                {props.service[0] === "car-and-security" && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Onsite Security Service Applicability</strong>: {props.onsiteSecurityServiceApplicability ==="both" ? "On Arrival & Departure" : props.onsiteSecurityServiceApplicability}

                </Typography>}
                {props.service[0] === "car-and-security" && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Ontransit Security Service Applicability</strong>: {props.ontransitSecurityServiceApplicability ==="both"? "From Airport to Destination & From Destination back to Airport" : props.ontransitSecurityServiceApplicability}

                </Typography> }
                {props.arrivalDate && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Arrival Date</strong>: {new Date(props.arrivalDate).toLocaleDateString("en-GB")}
                  </Typography>}
                  {props.departureDate && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Departure Date</strong>: {new Date(props.departureDate).toLocaleDateString("en-GB")}
                  </Typography>}

                
               
              </CardContent>
            </Grid>}
            
            {!(props.service[0] === "car-and-security" || props.service[0] === "carhire") && <Grid item style={{ width: "46.19%", border: "1px dotted grey" }}>
              <CardContent disableRipple>
              
                            
                <Typography variant="h5">Booking Details</Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Service Package</strong>: {props.service[0]}

                </Typography> 
                {/* <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Package Cost</strong>: &#x20A6;{props.packageCostPerPerson.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}&nbsp;per Guest
                  

                </Typography>  */}
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Source Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name :""},&nbsp;{props.sourceState ? props.sourceState[0].name :""}&nbsp;

                </Typography> 

               
                 <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 590, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="serviceApplicability"
                              id="serviceApplicability"
                              value={serviceApplicability}
                              onChange={handleServiceApplicabilityChange}
                              
                            >                      
                               
                              <MenuItem value="at-arrival">Only At Arrival</MenuItem>
                              <MenuItem value="at-departure">Only At Departure</MenuItem>
                              <MenuItem value="both">Both At Arrival & Departure</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Where Do You Want To Apply This Service?</FormHelperText>
                </FormControl>

                <TextField
                  //error={touched && invalid}
                  helperText={"Enter the number of Guest"}
                  variant="outlined"
                  //label={label}
                  id={"numberOfGuest"}
                  name={"numberOfGuest"}
                  fullWidth
                  //required
                  type="number"
                  onChange={(e)=>setNumberOfGuest(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
               
                <TextField
                  //error={touched && invalid}
                  helperText={"Enter Arrival Date"}
                  variant="outlined"
                  //label={label}
                  id={"arrivalDate"}
                  name={"arrivalDate"}
                  fullWidth
                  //required
                  type="date"
                  onChange={(e)=>setArrivalDate(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
                 <TextField
                  //error={touched && invalid}
                  helperText={"Enter Departure Date"}
                  variant="outlined"
                  //label={label}
                  id={"departureDate"}
                  name={"departureDate"}
                  fullWidth
                  //required
                  type="date"
                  onChange={(e)=>setDepartureDate(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
                  <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 590, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="carService"
                              id="carService"
                              value={carService}
                              onChange={handleCarServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need A Car for Transport to Destination ?</FormHelperText>
                </FormControl>
                <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 590, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="onsiteSecurityService"
                              id="onsiteSecurityService"
                              value={onsiteSecurityService}
                              onChange={handleOnsiteSecurityServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need An Onsite Security Service?</FormHelperText>
                </FormControl>
                <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 590, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="ontransitSecurityService"
                              id="ontransitSecurityService"
                              value={ontransitSecurityService}
                              onChange={handleOntransitSecurityServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need An Ontransit Security Service?</FormHelperText>
                </FormControl>



                
               
              </CardContent>
            </Grid>}

            <Grid item style={{ width: "26.30%", border: "1px dotted grey" }}>
            
                <CheckoutActionPage
                  
                  parameters={props}
                  numberOfGuest={numberOfGuest}
                  serviceApplicability={serviceApplicability}
                  arrivalDate={arrivalDate}
                  departureDate={departureDate}
                  ontransitSecurityService={ontransitSecurityService}
                  onsiteSecurityService={onsiteSecurityService}
                  carService={carService}
                  
                  token={props.token}
                  userId={props.userId}
                  cartId={props.id}
                  dateAddedToCart={props.dateAddedToCart}
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  getCurrencyCode={getCurrencyCode}
                  handleCartItemForCheckoutBox={
                    props.handleCartItemForCheckoutBox
                  }
                  handleSuccessfulCreateSnackbar={
                    props.handleSuccessfulCreateSnackbar
                  }
                  handleFailedSnackbar={props.handleFailedSnackbar}
                  renderCheckoutUpdate={props.renderCheckoutUpdate}
                  
                  
                />
            
            </Grid>
          </Grid>
          
          {/* </CardActionArea> */}
        </Card>
      ) : (
        <Card className={classes.rootMobile} disableRipple>
          {/* <CardActionArea disableRipple> */}
          <Grid container direction="column">
            {(props.service[0] === "car-and-security" || props.service[0] === "carhire") && <Grid item style={{ width: "100%", height: "100%" }}>
            <CardMedia
                className={classes.media}
                component="img"
                alt={props.vehicle ? props.vehicle[0].vehicleMake : ""}
                image={imageUrl}
                //title={product.name}
                crossOrigin="anonymous"
              />
            </Grid>}
            {!(props.service[0] === "car-and-security" || props.service[0] === "carhire") &&<Grid item style={{ width: "100%", height: "100%" }}>
            <CardMedia
                className={classes.media}
                component="img"
                alt={props.vehicle ? props.vehicle[0].vehicleMake : ""}
                image={props.image}
                //title={product.name}
                crossOrigin="anonymous"
              />
            </Grid>}
            {(props.service[0] === "car-and-security" || props.service[0] === "carhire") && <Grid
              item
              style={{
                width: "100%",
                //height: "100%",
                border: "1px dotted grey",
              }}
            >
               <CardContent disableRipple>
              <Typography variant="h5">Vehicle Details</Typography>
              <Typography variant="h4" color="textSecondary" component="p">
                    
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                      <em> {props.refNumber}</em>
                    </span>
                  </Typography>
                  
               
                
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5, marginBottom: 15 }}
                >
                <strong>Make</strong>: {props.vehicle ? props.vehicle[0].vehicleMake:""}
                  </Typography>       
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Model</strong>: {props.vehicle ? props.vehicle[0].vehicleModel:""}

                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Class</strong>: {props.vehicle ? props.vehicle[0].vehicleClass:""}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Special Feature</strong>: {props.vehicle ?props.vehicle[0].specialFeature:""}

                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name:""},&nbsp;{props.sourceState ? props.sourceState[0].name:""}&nbsp;

                </Typography> 
                
                <Typography variant="h5">Booking Details</Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Source Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name:""},&nbsp;{props.sourceState ? props.sourceState[0].name:""}&nbsp;

                </Typography> 

                              
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Destination</strong>: {props.destinationAddress},&nbsp;{props.destinationState ? props.destinationState[0].name :""}&nbsp;

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Booking Coverage</strong>: {props.tripCoverage}

                </Typography> 
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Number of Passengers</strong>: {props.numberOfVehicleOccupant}

                </Typography> 

                
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Service Applicability</strong>: {props.serviceApplicability ==="both" ? "At Arrival & Departure" : props.serviceApplicability}

                </Typography> 
                {props.service[0] === "car-and-security" && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Onsite Security Service Applicability</strong>: {props.onsiteSecurityServiceApplicability ==="both" ? "On Arrival & Departure" : props.onsiteSecurityServiceApplicability}

                </Typography>}
                {props.service[0] === "car-and-security" && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Ontransit Security Service Applicability</strong>: {props.ontransitSecurityServiceApplicability ==="both"? "From Airport to Destination & From Destination back to Airport" : props.ontransitSecurityServiceApplicability}

                </Typography> }
                {props.arrivalDate && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Arrival Date</strong>: {new Date(props.arrivalDate).toLocaleDateString("en-GB")}
                  </Typography>}
                  {props.departureDate && <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Departure Date</strong>: {new Date(props.departureDate).toLocaleDateString("en-GB")}
                  </Typography>}

                
               
              </CardContent>
            </Grid>}
            {/**Vehicle hire and security ends here */}

            {!(props.service[0] === "car-and-security" || props.service[0] === "carhire") && <Grid item style={{ width: "100%", border: "1px dotted grey" }}>
              <CardContent disableRipple>
              
                            
                <Typography variant="h5">Booking Details</Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Service Package</strong>: {props.service[0]}

                </Typography> 
                {/* <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Package Cost</strong>: &#x20A6;{props.packageCostPerPerson.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}&nbsp;per Guest
                  

                </Typography>  */}
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                  <strong>Source Location</strong>: {props.sourceLocation ? props.sourceLocation[0].name :""},&nbsp;{props.sourceState ? props.sourceState[0].name :""}&nbsp;

                </Typography> 

               
                 <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 320, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="serviceApplicability"
                              id="serviceApplicability"
                              value={serviceApplicability}
                              onChange={handleServiceApplicabilityChange}
                              
                            >                      
                               
                              <MenuItem value="at-arrival">Only At Arrival</MenuItem>
                              <MenuItem value="at-departure">Only At Departure</MenuItem>
                              <MenuItem value="both">Both At Arrival & Departure</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Where Do You Want To Apply This Service?</FormHelperText>
                </FormControl>

                <TextField
                  //error={touched && invalid}
                  helperText={"Enter the number of Guest"}
                  variant="outlined"
                  //label={label}
                  id={"numberOfGuest"}
                  name={"numberOfGuest"}
                  fullWidth
                  //required
                  type="number"
                  onChange={(e)=>setNumberOfGuest(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
               
                <TextField
                  //error={touched && invalid}
                  helperText={"Enter Arrival Date"}
                  variant="outlined"
                  //label={label}
                  id={"arrivalDate"}
                  name={"arrivalDate"}
                  fullWidth
                  //required
                  type="date"
                  onChange={(e)=>setArrivalDate(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
                 <TextField
                  //error={touched && invalid}
                  helperText={"Enter Departure Date"}
                  variant="outlined"
                  //label={label}
                  id={"departureDate"}
                  name={"departureDate"}
                  fullWidth
                  //required
                  type="date"
                  onChange={(e)=>setDepartureDate(e.target.value)}
                  inputProps={{
                  style: {
                    height: 1,
                    },
                  }}
                />
                  <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 320, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="carService"
                              id="carService"
                              value={carService}
                              onChange={handleCarServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need A Car for Transport to Destination ?</FormHelperText>
                </FormControl>
                <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 320, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="onsiteSecurityService"
                              id="onsiteSecurityService"
                              value={onsiteSecurityService}
                              onChange={handleOnsiteSecurityServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need An Onsite Security Service?</FormHelperText>
                </FormControl>
                <FormControl variant="outlined" style={{ marginLeft: "0%", marginBottom:10 }}>
                            <Select 
                              style={{ width: 320, height: 38, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
                              //label="Select Location"
                              labelId="ontransitSecurityService"
                              id="ontransitSecurityService"
                              value={ontransitSecurityService}
                              onChange={handleOntransitSecurityServiceChange}
                              
                            >                      
                               
                              <MenuItem value="not-applicable">Not Applicable</MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            
                            </Select>
                     <FormHelperText style={{marginLeft:'1%',fontSize:11}}>Will You Need An Ontransit Security Service?</FormHelperText>
                </FormControl>



                
               
              </CardContent>
            </Grid>}
            

            <Grid
              item
              style={{
                width: "100%",
                marginTop: "10px",
                //marginBottom: 10,
                border: "1px dotted grey",
              }}
            >
              
                <CheckoutActionPage
                  parameters={props}
                  
                  token={props.token}
                  userId={props.userId}
                  cartId={props.id}
                  dateAddedToCart={props.dateAddedToCart}
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  getCurrencyCode={getCurrencyCode}
                  handleCartItemForCheckoutBox={
                    props.handleCartItemForCheckoutBox
                  }
                  handleSuccessfulCreateSnackbar={
                    props.handleSuccessfulCreateSnackbar
                  }
                  handleFailedSnackbar={props.handleFailedSnackbar}
                  renderCheckoutUpdate={props.renderCheckoutUpdate}
                />
              
            </Grid>
          </Grid>
          {/* </CardActionArea> */}
        </Card>
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
