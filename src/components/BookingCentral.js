import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useParams } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import ReactPlayer from "react-player";
import CircularProgress from "@material-ui/core/CircularProgress";

import data from "../apis/local";
import CallToAction from "./ui/CallToAction";
import animationData from "../animations/landinganimation/data";

import revolutionBackground from "./../assets/repeatingBackground.svg";
import infoBackground from "./../assets/infoBackground.svg";

import background from "./../assets/images/site/image5.webp";
import UpperFooter from "./ui/UpperFooter";
import TopCover from "./homePageCards/TopCover";
import HeroSection from "./homePageCards/HeroSection";
import NoCodeAndAutomationAdBar from "./homePageCards/NoCodeAndAutomationAdBar";
import ProtocolPackges from "./homePageCards/ProtocolPackges";
import CarHireOnlyService from "./homePageCards/CarHireOnlyService";
import CarHireAndSecurityOnlyServices from "./homePageCards/CarHireAndSecurityOnlyServices";
import TheFounders from "./homePageCards/TheFounders";
import OurClients from "./homePageCards/OurClients";
import api from "./../apis/local";
import AllProductsInCardDesign from "./homePageCards/AllProductsInCardDesign.";
import BookingCentralHeroSection from "./homePageCards/BookingCentralHeroSection";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    height: "100%",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "99rem",
    height: "42rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  animation: {
    // maxWidth: "100em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 250,
    marginRight: 10,
    marginLeft: 130,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  estimateButtonMobile: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 220,
    marginRight: 10,
    marginLeft: 20,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  buttonContainer: {
    marginTop: "3.9em",
    marginLeft: "6.9em",
  },
  buttonContainerMobile: {
    marginTop: "4.2em",
    marginLeft: "3.5em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    width: 145,
  },
  visitPartnerButtonsite: {
    ...theme.typography.partnerButton,
    fontSize: "0.9rem",
    height: 45,
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    marginLeft: "2px",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  topCover: {
    marginTop: "20em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundMobile: {
    //backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "50em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  category: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  vendor: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  logistics: {
    marginTop: "15rem",
    marginBottom: "5rem",
  },
  promotion: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  features: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "250px",
    marginLeft: "20px",
    marginRight: "10px",
    height: "45px",
    width: "120px",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  cart: {
    ...theme.typography.estimate,
    borderRadius: "250px",
    marginLeft: "2px",
    marginRight: "1px",
    height: "45px",
    fontSize: "13px",
    fontWeight: "500px",
    width: "60px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
}));

const BookingCentral = (props) => {
  const classes = useStyles();
  const params = useParams();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [coursesList, setCourseList] = useState([]);
  const [creatorsList, setCreatorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [updateLearningPath, setUpdateLearningPath] = useState(false);
  const [updateServicePath, setUpdateServicePath] = useState(false);
  //const [path, setPath] = useState("crash-course");
  const [path, setPath] = useState("all");
  const [updateAgePath, setUpdateAgePath] = useState('all');
  const [updatePricePath, setUpdatePricePath] = useState('all');
  const [updateGenderPath, setUpdateGenderPath] = useState('all');
  const [updateLanguagePath, setUpdateLanguagePath] = useState(0);
  const [updateNichePath, setUpdateNichePath] = useState(0);
  const [updateCountryPath, setUpdateCountryPath] = useState(0);
  const [updateDeliveryDaysPath, setUpdateDeliveryDaysPath] = useState('all');
  const [locationList, setLocationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [samplesList, setSamplesList] = useState([]);
  

  // const [courseType, setCourseType] = useState(0);
  const [channel, setChannel] = useState(0);
  const [programme, setProgramme] = useState(0);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const service = params.serviceId;

  console.log('service id is:',service)

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

//fetchong vehicles from the database
  useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          let allData = [];
          //api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
          const response = await api.get(`/samples`,{
            params:{
                status:"visible", 
                //isAllowedOnThePlatform:true
            }});
          const workingData = response.data.data.data;
          workingData.map((sample) => {
            allData.push({
              id: sample._id,
              refNumber: sample.refNumber,
              creator: sample.creator,
              youtubeId: sample.youtubeId,
              sampleType: sample.sampleType,
              specialFeature: sample.specialFeature,
              dateCreated: sample.dateCreated,
              dateModified: sample.dateModified,
              createdBy: sample.createdBy,
              modifiedBy: sample.modifiedBy,
              status: sample.status,
              isAllowedOnThePlatform: sample.isAllowedOnThePlatform,
              driverDetails: sample.driverDetails,
              vehicleDetails: sample.vehicleDetails,
              vehicleDescription: sample.vehicleDescription,
              maximumOccupants: sample.maximumOccupants,
              vehicleClass: sample.vehicleClass,
              vehicleMake: sample.vehicleMake,
              vehicleModel: sample.vehicleModel,
              location: sample.location,
              image: sample.image,
              images: sample.images,
              category: sample.category,
              slug: sample.slug,
              
            });
          });
          setSamplesList(allData);
          setLoading(false);
        };
    
        //call the function
    
        fetchData().catch(console.error);
      }, []);
      

//fetching locations
  useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        let allData = [];
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.get(`/locations`,{params:{status:"active"}});
        const workingData = response.data.data.data;
        workingData.map((location) => {
          allData.push({
            id: location._id,
            name: location.name,
            code: location.code,
            locationType: location.locationType,
            description: location.description,
            country: location.country,
            state: location.state,
            city: location.city,
            town: location.town,
            address: location.address,
            contactPerson: location.contactPerson,
            contactPersonEmail: location.contactPersonEmail,
            contactPhoneNumber: location.contactPhoneNumber,
            vvipPackageCost: location.vvipPackageCost,
            businessExecutivePackageCost: location.businessExecutivePackageCost,
            diplomaticPackageCost: location.diplomaticPackageCost,
            familyPackageCost: location.familyPackageCost,
            privateJetPackageCost: location.privateJetPackageCost,
            medicalEmergencyPackageCost: location.medicalEmergencyPackageCost,
            airlineCrewPackageCost: location.airlineCrewPackageCost,
            addonLuxuryServiceCost: location.addonLuxuryServiceCost,
            addonOnsiteSecurityServiceCost:location.addonOnsiteSecurityServiceCost,
            addonOntransitSecurityServiceCost:location.addonOntransitSecurityServiceCost,
            addonLoungeAccessServiceCost:location.addonLoungeAccessServiceCost,
            addonConciergeServiceCost:location.addonConciergeServiceCost,
          });
        });
        setLocationList(allData);
        setLoading(false);
      };
  
      //call the function
  
      fetchData().catch(console.error);
    }, [props.token]);

  const handleBecomeAPartnerOpenDialogBox = () => {
    setBecomePartnerOpen(false);
  };

  const updatePathHandler = (value) => {
    //console.log("this is the active learning path:", value);
    setPath(value);
  };

  const updateLearningPathInfoInfo = () => {
    setUpdateLearningPath((prevState) => !prevState);
  };

 

  const updateAgePathInfoHandler = (value) => {
    setUpdateAgePath(value);
  };
  const updatePricePathHandler = (value) => {
    setUpdatePricePath(value);
  };

  const updateGenderPathHandler = (value) => {
    setUpdateGenderPath(value);
  };

  const updateLanguagePathHandler = (value) => {
    setUpdateLanguagePath(value);
  };

  const updateNichePathHandler = (value) => {
    setUpdateNichePath(value);
  };

  const updateCountryPathHandler = (value) => {
    setUpdateCountryPath(value);
  };

  const updateDeliveryDaysPathHandler = (value) => {
    setUpdateDeliveryDaysPath(value);
  };
  
  

 

  const updateServicePathInfoInfo = () => {
    setUpdateServicePath((prevState) => !prevState);
  };

  const handleSuccessfulBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: "Application successfully submitted",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setAlert({
      open: true,
      message: "Something went wrong somewhere",
      backgroundColor: "#FF3232",
    });
    setBecomePartnerOpen(true);
  };

   
  

  const Str = require("@supercharge/strings");

//This is the working code that had been tested
//   const allSamplesList = matchesMD ? (
//     <React.Fragment>
//       {
//         // <Grid container direction="row">
//         // <Box>
//         //   {creatorsList.map((creator, index) => (
//         //     <AllCreatorsOnList
//         //     name={creator.name}
//         //     creatorId={creator.id}
//         //       key={`${creator.id}${index}`}
//         //       bio={Str(creator.bio)
//         //         .limit(500, "...")
//         //         .get()}
//         //         //bio={course.bio}
//         //         user={creator.user}
//         //         currency={creator.currency}
//         //         videoPrice={creator.videoPrice}
//         //         videoHookPrice={creator.videoHookPrice}
//         //         videoDeliveryDays={creator.videoDeliveryDays}
//         //         soundPrice={creator.soundPrice}
//         //         soundHookPrice={creator.soundHookPrice}
//         //         soundDeliveryDays={creator.soundDeliveryDays}
//         //         age={creator.age}
//         //         gender={creator.gender}
//         //         rate={creator.rate}
//         //         country={creator.country}
//         //         category={creator.category}
//         //         niches={creator.niches}
//         //         languages={creator.languages}
//         //         slug={creator.slug}
//         //         status={creator.status}
//         //         creatorContactPhoneNumber={creator.creatorContactPhoneNumber}
//         //         creatorContactEmailAddress={creator.creatorContactEmailAddress}
//         //         image={creator.image}
//         //         token={props.token}
//         //       userId={props.userId}
//         //       setToken={props.setToken}
//         //       setUserId={props.setUserId}
//         //       updateLearningPathInfoInfo={updateLearningPathInfoInfo}
//         //       path={path}
//         //     />
//         //   ))}
//         //    </Box>
//         // </Grid>
       


//         //This is the new code for Card implementation
//         <Box>
         
//             <AllProductsInCardDesign
//                creatorsList={samplesList}
              
//                 token={props.token}
//                 userId={props.userId}
//                 setToken={props.setToken}
//                 setUserId={props.setUserId}
//                 updateLearningPathInfoInfo={updateLearningPathInfoInfo}
//                 path={path}
//             />
        

//         </Box>
       
//       }
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
//       {
//         //This is teh first design for Card implementation

//     //     <Grid
//     //       container
//     //       direction="column"
//     //       justifyContent="center"
//     //       alignItems="center"
//     //     >
//     //     <Box>
     
//     //       {creatorsList.map((creator, index) => (
//     //         <AllCreatorsOnList
//     //         name={creator.name}
//     //         creatorId={creator.id}
//     //         key={`${creator.id}${index}`}
//     //         bio={Str(creator.bio)
//     //           .limit(500, "...")
//     //           .get()}
//     //           //bio={course.bio}
//     //           user={creator.user}
//     //           currency={creator.currency}
//     //           videoPrice={creator.videoPrice}
//     //           videoHookPrice={creator.videoHookPrice}
//     //           videoDeliveryDays={creator.videoDeliveryDays}
//     //           soundPrice={creator.soundPrice}
//     //           soundHookPrice={creator.soundHookPrice}
//     //           soundDeliveryDays={creator.soundDeliveryDays}
//     //           age={creator.age}
//     //           gender={creator.gender}
//     //           rate={creator.rate}
//     //           country={creator.country}
//     //           category={creator.category}
//     //           niches={creator.niches}
//     //           languages={creator.languages}
//     //           slug={creator.slug}
//     //           status={creator.status}
//     //           creatorContactPhoneNumber={creator.creatorContactPhoneNumber}
//     //           creatorContactEmailAddress={creator.creatorContactEmailAddress}
//     //           image={creator.image}
//     //           token={props.token}
//     //         userId={props.userId}
//     //         setToken={props.setToken}
//     //         setUserId={props.setUserId}
//     //         updateLearningPathInfoInfo={updateLearningPathInfoInfo}
//     //         path={path}
//     //         />
//     //       ))}
//     //    </Box>
//     // </Grid>
        
        
//     //This is the second design for Card implementation
        
//         <Box>         
//             <AllProductsInCardDesign
//              creatorsList={samplesList}
              
//                 token={props.token}
//                 userId={props.userId}
//                 setToken={props.setToken}
//                 setUserId={props.setUserId}
//                 updateLearningPathInfoInfo={updateLearningPathInfoInfo}
//                 path={path}
//             />
//             </Box>
//       }
//     </React.Fragment>
//   );


  
  return (
    <>
      {/* <Grid container direction="row" className={classes.mainContainer}> */}
      <Grid container direction="row" className={classes.root}>
        {/* <section className={classes.root}> */}
        {/* <Grid
          container
          alignItems="center"
          className={classes.backgroundMobile}
          justifyContent={matchesSM ? "center" : "space-between"}
          direction={matchesSM ? "column" : "row"}
          //={{ marginTop: -50, marginBottom:0 }}
        >
          
        </Grid> */}
       {/*Add some space here */}

        <BookingCentralHeroSection />

            {loading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}
      
        {!loading && samplesList.length === 0 && (
          <Typography
            variant="h4"
            color="textSecondary"
            component="p"
            style={{ marginTop: 60, marginLeft: 170 }}
          >
            No Vehicle Is Found
          </Typography>
        )}
       
       
       
        {!loading && path === "all" && (
          // <Grid item>{allCreatorsList}</Grid>
          <AllProductsInCardDesign
             creatorsList={samplesList}
             service={service}
                token={props.token}
                userId={props.userId}
                setToken={props.setToken}
                setUserId={props.setUserId}
                updateLearningPathInfoInfo={updateLearningPathInfoInfo}
                path={path}
            />
        )}

        
        <Grid item className={classes.footer}>
          <UpperFooter />
        </Grid>
      </Grid>
    </>
  );
};

export default BookingCentral;
