import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import useToken from "../../custom-hooks/useToken";
import useUserId from "../../custom-hooks/useUserId";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
import backgroundBulk from "./../../assets/images/project/business1.webp";
import backgroundRetail from "./../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../assets/images/project/medical1.webp";
import backgroundGrowth from "./../../assets/images/project/crew1.webp";
import backgroundMetrics from "./../../assets/images/project/jet1.webp";

import softwareEngineering from "./../../assets/images/project/vip3.webp";
import qualityAssurance from "./../../assets/images/project/crew2.webp";
import backgroundEvent from "./../../assets/images/project/event1.webp";
import backgroundTraining from "./../../assets/images/project/training.webp";
import backgroundDocumentation from "./../../assets/images/project/documentation2.webp";
import backgroundFamily from "./../../assets/images/project/family1.webp";
import history from "../../history";
import { CREATE_CART, DELETE_CART } from "../../actions/types";


import { baseURL } from "../../apis/util";

import theme from "../ui/Theme";
import { PropaneSharp } from "@mui/icons-material";
import api from "./../../apis/local";

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
    height: 1650,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
    bacngroundColor: "#F1EFEC",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardMobile: {
    maxWidth: "100%",
    height: 3750,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
    bacngroundColor: "#F1EFEC",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  
  uppercardsec: {
    maxWidth: "100%",
    height: 950,
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
    width: 120,
    marginLeft: 50,
    marginTop: 0,
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
  backgroundEvent: {
      backgroundImage: `url(${backgroundEvent})`,
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
  
     backgroundTraining: {
      backgroundImage: `url(${backgroundTraining})`,
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
  
     backgroundDocumentation: {
      backgroundImage: `url(${backgroundDocumentation})`,
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
     backgroundFamily: {
      backgroundImage: `url(${backgroundFamily})`,
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

export default function ProtocolPackges(props) {
  const classes = useStyles();
  const { token, setToken } = useToken();
  const { userId, setUserId } = useUserId();
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
  const [location, setLocation] = useState("");
  const [vvipPackageCost, setVvipPackageCost] = useState(0);
  const [businessExecPackageCost, setBusinessExecPackageCost] = useState(0);
  const [diplomaticPackageCost, setDiplomaticPackageCost] = useState(0);
  const [familyGroupPackageCost, setFamilyGroupPackageCost] = useState(0);
  const [privateJetPackageCost, setPrivateJetPackageCost] = useState(0);
  const [medicalPackageCost, setMedicalPackageCost] = useState(0);
  const [airlineCrewPackageCost, setAirlineCrewPackageCost] = useState(0);
  const [addonLuxuryServicesCost, setAddonLuxuryServicesCost] = useState(0);
  const [addonSecurityServicesCost, setAddonSecurityServicesCost] = useState(0);
  const [addonLoungeAccessServicesCost, setAddonLoungeAccessServicesCost] = useState(0);
  const [addonConciergeServicesCost, setAddonConciergeServicesCost] = useState(0);
  const [locationList, setLocationList] = useState([]);
  
  const [locationData, setLocationData] = useState({});
  const [service, setService] = useState();

  const [cartForCheckoutList, setCartForCheckoutList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [busExecloading, setBusExecloading] = useState(false);
  const [diplomaticLoading, setDiplomaticLoading] = useState(false);
  const [familyLoading, setFamilyLoading] = useState(false);
  const [privateLoading, setPrivateLoading] = useState(false);
  const [medicalLoading, setMedicalLoading] = useState(false);
  const [crewLoading, setCrewLoading] = useState(false);
  
  const dispatch = useDispatch();


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


  useEffect(() => {
    //console.log("props.location:", props.location);
    if (props.location.length >= 1) {
      setLocation(props.location[0].id);
      setVvipPackageCost(props.location[0].vvipPackageCost);
      setBusinessExecPackageCost(props.location[0].businessExecutivePackageCost);
      setDiplomaticPackageCost(props.location[0].diplomaticPackageCost);
      setFamilyGroupPackageCost(props.location[0].familyPackageCost);
      setPrivateJetPackageCost(props.location[0].privateJetPackageCost);
      setMedicalPackageCost(props.location[0].medicalEmergencyPackageCost);
      setAirlineCrewPackageCost(props.location[0].airlineCrewPackageCost);
      setAddonLuxuryServicesCost(props.location[0].addonLuxuryServicesCost);
      setAddonSecurityServicesCost(props.location[0].addonOnsiteSecurityServiceCost);
      setAddonLoungeAccessServicesCost(props.location[0].addonLoungeAccessServiceCost);
      setAddonConciergeServicesCost(props.location[0].addonConciergeServiceCost);

    } else {
      setLocation("");
    }
  }, [props.location]);

  //pull the data of a selected location fronm the database

  useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          let allData = [];
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await api.get(`/locations/${location}`);
          const locationData = response.data.data.data;

          console.log("locationData:", locationData);
          
          setVvipPackageCost(locationData.vvipPackageCost);
          setBusinessExecPackageCost(locationData.businessExecutivePackageCost);
          setDiplomaticPackageCost(locationData.diplomaticPackageCost);
          setFamilyGroupPackageCost(locationData.familyPackageCost);
          setPrivateJetPackageCost(locationData.privateJetPackageCost);
          setMedicalPackageCost(locationData.medicalEmergencyPackageCost);
          setAirlineCrewPackageCost(locationData.airlineCrewPackageCost);
          setAddonLuxuryServicesCost(locationData.addonLuxuryServicesCost);
          setAddonSecurityServicesCost(locationData.addonOnsiteSecurityServiceCost);
          setAddonLoungeAccessServicesCost(locationData.addonLoungeAccessServiceCost);
          setAddonConciergeServicesCost(locationData.addonConciergeServiceCost);

          setLocationData(locationData);
          
          setLoading(false);
        };
    
        //call the function
    
        fetchData().catch(console.error);
      }, [location]);



      useEffect(() => {
          const fetchData = async () => {
            let allData = [];
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const response = await api.get(`/carts`, {
              params: {
                cartHolder: userId,
                status: "marked-for-checkout",
              },
            });
      
            const item = response.data.data.data;
            console.log('items are:',item)
            item.map((product) => {
              allData.push({
                id: product._id,
                //quantity: product.quantity,
                cartHolder: product.cartHolder,
                //salesPreference: product.salesPreference,
              });
            });
      
            setCartForCheckoutList(allData);
          };
      
          //call the function
      
          fetchData().catch(console.error);
        }, [userId]);
  


  const handleLocationChange = (event) => {
     setLocation(event.target.value);
  };


    //get the location list
    const renderLocationList = () => {
      return props.location.map((item) => {
        return (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        );
      });
    };

  const renderLocationField = ({
      input,
      label,
      meta: { touched, error, invalid },
      type,
      id,
      ...custom
    }) => {
      return (
        <Box>
          <FormControl variant="outlined">
            {/* <InputLabel id="vendor_city">City</InputLabel> */}
            <Select
              labelId="location"
              id="location"
              value={location}
              onChange={handleLocationChange}
              //label="Location Type"
              style={{ width: 400, height: 38, marginTop: 5 }}
            >
              {renderLocationList()}

                
            </Select>
            <FormHelperText>Select Location</FormHelperText>
          </FormControl>
        </Box>
      );
    };


   


  const Str = require("@supercharge/strings");
  const vvipPackage = '* Personalized meet & greet at aircraft door\n\n* Luxury airside vehicle transfer to/from private lounge\n\n* Fast-track immigration, customs & security\n\n* Porter service & priority baggage collection\n\n* Exclusive VIP lounge access\n\n* Personal protocol escort to vehicle\n\n* 24/7 concierge support\n\n';
 // const vvipPackageCost = '1,500,000.00';
  const businessExecPackage = '* Meet & greet at gate or terminal entrance\n\n* Priority processing through immigration & customs\n\n* Fast-track security screening\n\n* Porter service & baggage assistance\n\n* Access to business lounge (if available)\n\n* Personal escort to vehicle or departure gate\n\n* Porter assistance for baggage\n\n* Escort to executive lounge\n\n* Coordination with transport & hotel\n\n* Travel document support\n\n'; 
  //const businessExecPackageCost = '700,000.00';
  const diplomaticPackage = '* Diplomatic lounge access & fast-track processing\n\n* Advance clearance with diplomatic desks\n\n* Dedicated embassy/government liaison\n\n* Priority airside vehicle access\n\n* Protocol document & visa facilitation\n\n';
  //const diplomaticPackageCost = '900,000.00';
  const familyGroupPackage = '* Meet & greet for entire family/group\n\n* Fast-track immigration & customs\n\n* Group porter service\n\n* Escort to arranged transportation\n\n* Child, elderly & special needs assistance\n\n* Lounge access (optional ₦50,000 extra)\n\n';
  //const familyGroupPackageCost = '250,000.00';
  const privateJetPackage = '* Private terminal (FBO) coordination\n\n* Airside vehicle service direct to aircraft\n\n* Personal protocol officer\n\n* Priority customs & immigration\n\n* Secure sensitive luggage handling\n\n* Concierge services: hotel, transport, security';
 // const privateJetPackageCost = '1,500,000.00';
  const medicalPackage = '* Rapid airport clearances for medevac flights\n\n* Ambulance & paramedic coordination\n\n* Visa, immigration & documentation support\n\n* Equipment handling & baggage services\n\n* Local Hospital & family liaison\n\n* Real-time updates & emergency tracking\n\n';  
 // const medicalPackageCost = '650,000.00';
  const airlineCrewPackage = '* Meet & greet for airline crew\n\n* Fast-track immigration & visa processing\n\n* Porter services\n\n* Ground transport to crew hotel\n\n* Accommodation booking\n\n* Lounge access & lost baggage assistance\n\n';
  //const airlineCrewPackageCost = '350,000.00';
  //const addonServices = '* Luxury Vehicle Airport Transfers\n\n* On-site Security Escort\n\n* Exclusive Lounge Access (without full protocol)\n\n* Concierge Errand Services\n\n'; 

  


  //console.log('softwareEngineering image is:',`url(${softwareEngineering})`)

const onVVIPSubmit = (formValues) => {
    setLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service: 'vvip',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:vvipPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:softwareEngineering
      //attach an image here
            
      
    };

       

   
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };


  


  const onBusinessExecSubmit = (formValues) => {
    setBusExecloading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setBusExecloading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'business-executive',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:businessExecPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:qualityAssurance
      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setBusExecloading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };


  const onDiplomatSubmit = (formValues) => {
    setDiplomaticLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setDiplomaticLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'diplomatic',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:diplomaticPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:backgroundBulk
      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setDiplomaticLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };



  const onFamilyGroupSubmit = (formValues) => {
    setFamilyLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setFamilyLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'family-group',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:familyGroupPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:backgroundBulk
      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setFamilyLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };


  const onPrivateJetSubmit = (formValues) => {
    setPrivateLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setPrivateLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'private-jet',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:privateJetPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:backgroundBulk
      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setPrivateLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };



  const onMedicalsSubmit = (formValues) => {
    setMedicalLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setMedicalLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'medical-emergency',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:medicalPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:backgroundProduct
      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setMedicalLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };



  const onAirlineCrewSubmit = (formValues) => {
    setCrewLoading(true);
   

   if (token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setCrewLoading(false);

      return;
    }    
    
    const refNumber = "PACKAGE-" + Math.floor(Math.random() * 1000000000) + "-3START"

    const data = {
      creator: null,
      user: userId,
      vehicle: null,
      numberOfVehicleOccupant: 0,
      refNumber: refNumber,

      service:'airline-crew',
      sourceLocation: location,
      sourceState:locationData.state[0],
      destinationState:null,
      country: locationData.country[0],
      destinationAddress: null,
      arrivalDate: "",
      departureDate:"", 
      packageCostPerPerson:airlineCrewPackageCost,
      serviceApplicability: 'at-arrival',
      

      cartHolder: userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      //category: props.sample.category ?props.sample.category[0].id :"",      
      //slug: props.sample.slug,
      image:backgroundGrowth,

      //attach an image here
            
      
    };

       
     //delete all items in this user's cart
           cartForCheckoutList.map((cart, index) => {
             const createForm = async () => {
               api.defaults.headers.common[
                 "Authorization"
               ] = `Bearer ${token}`;
               await api.delete(`/carts/${cart.id}`);
               dispatch({
                 type: DELETE_CART,
                 //payload: response2.data.data.data,
               });
               //props.cartCounterHandler(-1);
             };
             createForm().catch((err) => {
               //props.handleFailedSnackbar();
               console.log("err:", err.message);
             });
           });
    
    
       

   
    //create a new cart and add the product
    if (data) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/carts`, data);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_CART,
            payload: response.data.data.data,
          });

          // props.handleSuccessfulCreateSnackbar(
          //   `item(s) successfully added to cart. Please visit the cart to continue to checkout and payment`
          // );
          history.push(`/checkouts`);
          setCrewLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  

  return (
    <>
      {matchesMDUp ? (
        <>
          <Box className={classes.uppercard} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'40%',marginBottom:30}}>Our Packages</Typography>
            {/* {renderLocationField} */}
            {props.location.length>= 1 && <FormControl variant="standard" style={{ marginLeft: "35%", marginBottom:20 }}>
            <Select 
              style={{ width: 400, height: 42, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
              //label="Select Location"
              labelId="location"
              id="location"
              value={location}
              onChange={handleLocationChange}
              
            >
             {/* {props.location.map((item) => (
               
              <MenuItem key={item.id} value={item.id}>
                  {item.name}
              </MenuItem>
            
              ))} */}
              {renderLocationList()}
            </Select>
            <FormHelperText style={{marginLeft:'32%',fontSize:16}}>Select Airport</FormHelperText>
            </FormControl>}
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: '50%' }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}> VVIP Elite Experience</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.softwareEngineering}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 15, marginLeft: 50 }}
                ></Grid>
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "55%", marginLeft: "3.5em", marginBottom:0 }}
                >
                  
                <Typography>
                <strong>Features:</strong><br />
                  <ReactMarkdown>{vvipPackage}</ReactMarkdown>
                </Typography>
                {vvipPackageCost && <Typography>Total Cost: <strong>&#x20A6;{vvipPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                 
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "1.0em", marginTop: '8%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/vvip"
                    //onClick={()=>[onSubmit,setService("vvip")]}
                    onClick={(onVVIPSubmit)}
                    className={classes.actionPlusButton}
                  >
                    
                    {loading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                          
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:60, marginBottom:0}}>Business Executive Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundBulk}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 30, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "55%", marginLeft: "1.0em" }}
                >
                  <Typography>
                  <strong>Features</strong><br />
                  <ReactMarkdown>{businessExecPackage}</ReactMarkdown>                 
                  </Typography>
                  {businessExecPackageCost && <Typography>Total Cost: <strong>&#x20A6;{businessExecPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "1.0em", marginTop: '8%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/businessexecutive"
                    onClick={(onBusinessExecSubmit)}
                    className={classes.actionPlusButton}
                  >
                    {busExecloading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:80, marginBottom:10}}>Diplomatic Protocol Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.qualityAssurance}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 20, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "40%", marginLeft: "3.5em" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />

                  <ReactMarkdown>{diplomaticPackage}</ReactMarkdown>  
                  </Typography>
                  {diplomaticPackageCost && <Typography>Total Cost: <strong>&#x20A6;{diplomaticPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/diplomatic"
                    onClick={(onDiplomatSubmit)}
                    className={classes.actionPlusButton}
                  >
                    {diplomaticLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:80, marginBottom:10}}>Family & Group Handling Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundFamily}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 20, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "40%", marginLeft: "3.5em" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />

                  <ReactMarkdown>{familyGroupPackage}</ReactMarkdown>
                  </Typography>
                  {familyGroupPackageCost && <Typography>Total Cost: <strong>&#x20A6;{familyGroupPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest (min of 4 guest)</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/familygroup"
                    onClick={(onFamilyGroupSubmit)}
                    className={classes.actionPlusButton}
                  >
                   {familyLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:80, marginBottom:10}}>Private Jet / Charter Handling Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "40%", marginLeft: "3.5em" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />
                  <ReactMarkdown>{privateJetPackage}</ReactMarkdown>
                  </Typography>
                  {privateJetPackageCost && <Typography>Total Cost: <strong>&#x20A6;{privateJetPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/privatejet"
                    onClick={(onPrivateJetSubmit)}
                    className={classes.actionPlusButton}
                  >
                  {privateLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            <Grid
              container
              direction="row"
              style={{ marginTop: 0, marginBottom: 20, height: '50%' }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 10 }}
              >
                 <Typography variant="h5" style={{marginLeft:40, marginBottom:20}}>Medical & Emergency Evacuation Support</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "50%", marginLeft: "3.5em" }}
                >
                  <Typography>
                    <strong>Features:</strong><br />
                    <ReactMarkdown>{medicalPackage}</ReactMarkdown>
                  </Typography>
                  {medicalPackageCost && <Typography>Total Cost: <strong>&#x20A6;{medicalPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/medicalemergency"
                    onClick={(onMedicalsSubmit)}
                    className={classes.actionPlusButton}
                  >
                   {medicalLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "17%", marginTop: 10 }}
              >
                 <Typography variant="h5" style={{marginLeft:40, marginBottom:25}}>Airline Crew & Layover Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "40%", marginLeft: "3.5em" }}
                >
                  <Typography>
                    <strong>Features:</strong><br />
                    <ReactMarkdown>{airlineCrewPackage}</ReactMarkdown>
                  </Typography>
                  {airlineCrewPackageCost && <Typography>Total Cost: <strong>&#x20A6;{airlineCrewPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Crew Member</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/airlinecrew"
                    onClick={(onAirlineCrewSubmit)}
                    className={classes.actionPlusButton}
                  >
                     {crewLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "60%", marginTop: 10,backgroundColor:'#F4F6FF' }}
              >
                 <Typography variant="h5" style={{marginLeft:'10%', marginBottom:20, fontSize:24, fontWeight:700}}>Optional Add-ons Services (Available for Any Package):</Typography>
                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "20%", marginTop: 0, marginLeft: 50 }}
                ></Grid> */}
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                 <strong>Extra Add On Services available for all Packages at Extra Cost:</strong><br />
                  <Typography style={{marginTop:10}}>
                    
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>1. Luxury Vehicle Airport Transfers</strong>:&nbsp;&nbsp;Cost depends on the vehicle type selected and the distance to be covered.
                    
                  </Typography>
                  <br />
                  
                  {addonSecurityServicesCost && <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>2. On-site Security Escort</strong>:&nbsp;&nbsp;&#x20A6;{addonSecurityServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/client

                  </Typography>}
                  <br />
                  <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>3. On-transit Security Escort</strong>:&nbsp;&nbsp;Cost depends on destination and duration of stay.

                </Typography>
                <br />
                  {addonLoungeAccessServicesCost && <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>4. Exclusive Lounge Access (without full protocol)</strong>:&nbsp;&nbsp;&#x20A6;{addonLoungeAccessServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/person
                    
                  </Typography>}
                  <br />
                  {addonConciergeServicesCost && <Typography>
                                       
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>5. Concierge Errand Services</strong>:&nbsp;&nbsp;&#x20A6;{addonConciergeServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/client
                  </Typography>}
                  {/* <Typography>Total Cost: <strong>{airlineCrewPackageCost}/Crew Member</strong></Typography> */}
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "1.0em", marginTop: '18%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Choose
                  </Button>
                </Grid> */}
              </Grid>

              
            </Grid>
           
             
          </Box>
        </>
      ) : (
        <Box className={classes.uppercardMobile} disableRipple>
          
          <Typography variant="h3" style={{marginLeft:'20%',marginBottom:30}}>Our Packages</Typography>
            
            {props.location.length>= 1 && <FormControl variant="standard" style={{ marginLeft: "5%", marginBottom:20 }}>
            <Select 
              style={{ width: 300, height: 42, marginTop: 5, marginLeft:'0%', marginBottom:0 }}
              //label="Select Location"
              labelId="location"
              id="location"
              value={location}
              onChange={handleLocationChange}
              
            >
            
              {renderLocationList()}
            </Select>
            <FormHelperText style={{marginLeft:'10%',fontSize:16}}>Select Airport</FormHelperText>
            </FormControl>}
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: 2500 }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 1, width: "40%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:2, marginBottom:20}}> VVIP Elite Experience</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.softwareEngineering}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "10%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "52%", marginLeft: "0px", marginBottom:0 }}
                >
                  
                <Typography>
                <strong>Features:</strong><br />
                  <ReactMarkdown>{vvipPackage}</ReactMarkdown>
                </Typography>
                {vvipPackageCost && <Typography>Total Cost: <strong>&#x20A6;{vvipPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                 
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "5px", marginTop: 5}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/vvip"
                    //onClick={()=>[onSubmit,setService("vvip")]}
                    onClick={(onVVIPSubmit)}
                    className={classes.actionPlusButton}
                  >
                    
                    {loading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                          
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 25, width: "40%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:25, marginBottom:0}}>Business Executive Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundBulk}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "10%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "1.0em" }}
                >
                  <Typography>
                  <strong>Features</strong><br />
                  <ReactMarkdown>{businessExecPackage}</ReactMarkdown>                 
                  </Typography>
                  {businessExecPackageCost && <Typography>Total Cost: <strong>&#x20A6;{businessExecPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "10px", marginTop: '8%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/businessexecutive"
                    onClick={(onBusinessExecSubmit)}
                    className={classes.actionPlusButton}
                  >
                    {busExecloading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 10, width: "40%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Diplomatic Protocol Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.qualityAssurance}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "57%", marginLeft: "10px" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />

                  <ReactMarkdown>{diplomaticPackage}</ReactMarkdown>  
                  </Typography>
                  {diplomaticPackageCost && <Typography>Total Cost: <strong>&#x20A6;{diplomaticPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "10px", marginTop: 10}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/diplomatic"
                    onClick={(onDiplomatSubmit)}
                    className={classes.actionPlusButton}
                  >
                    {diplomaticLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "40%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Family & Group Handling Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundFamily}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "60%", marginLeft: "10px" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />

                  <ReactMarkdown>{familyGroupPackage}</ReactMarkdown>
                  </Typography>
                  {familyGroupPackageCost && <Typography>Total Cost: <strong>&#x20A6;{familyGroupPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest (min of 4 guest)</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "10px", marginTop: 10}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/familygroup"
                    onClick={(onFamilyGroupSubmit)}
                    className={classes.actionPlusButton}
                  >
                   {familyLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "40%", marginTop: 20 }}
              >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:10}}>Private Jet / Charter Handling Package</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "57%", marginLeft: "10px" }}
                >
                  <Typography>
                  <strong>Features:</strong><br />
                  <ReactMarkdown>{privateJetPackage}</ReactMarkdown>
                  </Typography>
                  {privateJetPackageCost && <Typography>Total Cost: <strong>&#x20A6;{privateJetPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "10px", marginTop: '10px'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/privatejet"
                    onClick={(onPrivateJetSubmit)}
                    className={classes.actionPlusButton}
                  >
                  {privateLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
           
            <Grid
              container
              direction="row"
              style={{ marginTop: 0, marginBottom: 20, height: 1250 }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 10, width: "40%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Medical & Emergency Evacuation Support</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "50%", marginLeft: "10px" }}
                >
                  <Typography>
                    <strong>Features:</strong><br />
                    <ReactMarkdown>{medicalPackage}</ReactMarkdown>
                  </Typography>
                  {medicalPackageCost && <Typography>Total Cost: <strong>&#x20A6;{medicalPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Guest</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "10px", marginTop: 10 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/medicalemergency"
                    onClick={(onMedicalsSubmit)}
                    className={classes.actionPlusButton}
                  >
                   {medicalLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "40%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Airline Crew & Layover Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "15%", marginTop: 20, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "50%", marginLeft: "10px" }}
                >
                  <Typography>
                    <strong>Features:</strong><br />
                    <ReactMarkdown>{airlineCrewPackage}</ReactMarkdown>
                  </Typography>
                  {airlineCrewPackageCost && <Typography style={{marginLeft:15}}>Total Cost: <strong>&#x20A6;{airlineCrewPackageCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/Crew Member</strong></Typography>}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "10px", marginTop: '10px' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    //to="/bookingcentral/airlinecrew"
                    onClick={(onAirlineCrewSubmit)}
                    className={classes.actionPlusButton}
                  >
                     {crewLoading ? (
                              <CircularProgress size={30} color="inherit" />
                            ) : (
                              <React.Fragment>Choose</React.Fragment>
                            )}
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 0, width: "100%", marginTop: 10,backgroundColor:'#F4F6FF' }}
              >
                 <Typography variant="h5" style={{marginLeft:'0%', marginBottom:20, fontSize:24, fontWeight:700}}>Optional Add-ons Services (Available for Any Package):</Typography>
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "45%", marginLeft: "10px" }}
                >
                 <strong>Extra Add On Services available for all Packages at Extra Cost:</strong><br />
                  <Typography style={{marginTop:10}}>
                    
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>1. Luxury Vehicle Airport Transfers</strong>:&nbsp;&nbsp;Cost depends on the vehicle type selected and the distance to be covered.
                    
                  </Typography>
                  <br />
                  
                  {addonSecurityServicesCost && <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>2. On-site Security Escort</strong>:&nbsp;&nbsp;&#x20A6;{addonSecurityServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/client

                  </Typography>}
                  <br />
                  <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>3. On-transit Security Escort</strong>:&nbsp;&nbsp;Cost depends on destination and duration of stay.

                </Typography>
                <br />
                  {addonLoungeAccessServicesCost && <Typography>
                   
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>4. Exclusive Lounge Access (without full protocol)</strong>:&nbsp;&nbsp;&#x20A6;{addonLoungeAccessServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/person
                    
                  </Typography>}
                  <br />
                  {addonConciergeServicesCost && <Typography>
                                       
                  &nbsp;&nbsp;&nbsp;&#8667;<strong>5. Concierge Errand Services</strong>:&nbsp;&nbsp;&#x20A6;{addonConciergeServicesCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}/client
                  </Typography>}
                 
                </Grid>
               
              </Grid>

              
            </Grid>
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
