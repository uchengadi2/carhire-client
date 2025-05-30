import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./../ui/ButtonArrow";
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

import CallToAction from "./../ui/CallToAction";

import revolutionBackground from "./../../assets/repeatingBackground.svg";
import infoBackground from "./../../assets/infoBackground.svg";
import ProductCard from "./../ProductCard";
import background from "./../../logistic_assets/cover_image_1.png";
import { Category } from "@material-ui/icons";
import history from "../../history";
import AboutUsFormContainer from "./../aboutus/AboutUsFormContainer";
import ContactUsContainerForm from "./../contactus/ContactUsContainerForm";
import BecomePartnerFormContainer from "./../partner/BecomePartnerFormContainer";
import CategoryProductsCard from "../CategoryProductsCard";
import ProductDetailCard from "./ProductDetailCard";
import UpperFooter from "../ui/UpperFooter";
import SendCourseToCheckoutForm from "./SendCourseToCheckoutForm";

import { baseURL } from "./../../apis/util";
import api from "./../../apis/local";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    // height: "100%",
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
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 155,
    marginRight: 40,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "2.9em",
    marginLeft: "5.5em",
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
    width: 200,
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
}));

function ProductDetails(props) {
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [isOnPromo, setIsOnPromo] = useState(false);
  const [promoPrice, setPromoPrice] = useState();
  const [promoMinQuantity, setPromoMinQuantity] = useState();
  const [course, setCourse] = useState({});
  const [creator, setCreator] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [brandId, setBrandId] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const[brandName, setBrandName] = useState("");
  const [brandCountry, setBrandCountry] = useState("");
  const [sample, setSample] = useState({});
  const [sampleId,setSampleId] = useState("")

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const slug = params.slug;
  const service = params.serviceId;

 // console.log('user id:', props.userId);
 // console.log('categorySlug is:',categorySlug)

  const handleBecomeAPartnerOpenDialogBox = () => {
    setBecomePartnerOpen(false);
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


  //getting the brand id
   useEffect(() => {
           const fetchData = async () => {
             let allData = {};
             if(props.userId){
              api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
              const response = await api.get(`/brands`,{
               params:{
                user:props.userId
              }});
              const workingData = response.data.data.data;
 
                         
        
             
             if(workingData.length > 0){
                   
              setBrandId(workingData[0].id);
              setBrandName(workingData[0].name);
              setBrandCountry(workingData[0].country[0].id);
            
              
              }
             }
             
             
           };
       
           //call the function
       
           fetchData().catch(console.error);
         }, [props.token, props.userId]);

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/samples`, {
        params: { slug: slug },
      });
      const sample = response.data.data.data;

      if (sample.length >= 1) {
        allData.push({
               id: sample[0]._id,
              refNumber: sample[0].refNumber,
              creator: sample[0].creator,
              youtubeId: sample[0].youtubeId,
              sampleType: sample[0].sampleType,
              specialFeature: sample[0].specialFeature,
              dateCreated: sample[0].dateCreated,
              dateModified: sample[0].dateModified,
              createdBy: sample[0].createdBy,
              modifiedBy: sample[0].modifiedBy,
              status: sample[0].status,
              isAllowedOnThePlatform: sample[0].isAllowedOnThePlatform,
              driverDetails: sample[0].driverDetails,
              vehicleDetails: sample[0].vehicleDetails,
              vehicleDescription: sample[0].vehicleDescription,
              maximumOccupants: sample[0].maximumOccupants,
              vehicleClass: sample[0].vehicleClass,
              vehicleMake: sample[0].vehicleMake,
              vehicleModel: sample[0].vehicleModel,
              location: sample[0].location,
              image: sample[0].image,
              images: sample[0].images,
              category: sample[0].category,
              slug: sample[0].slug,
          
        });

        setSample({
              id: allData[0].id,
              refNumber: allData[0].refNumber,
              creator: allData[0].creator,
              youtubeId: allData[0].youtubeId,
              sampleType: allData[0].sampleType,
              specialFeature: allData[0].specialFeature,
              dateCreated: allData[0].dateCreated,
              dateModified: allData[0].dateModified,
              createdBy: allData[0].createdBy,
              modifiedBy: allData[0].modifiedBy,
              status: allData[0].status,
              isAllowedOnThePlatform: allData[0].isAllowedOnThePlatform,
              driverDetails: allData[0].driverDetails,
              vehicleDetails: allData[0].vehicleDetails,
              vehicleDescription: allData[0].vehicleDescription,
              maximumOccupants: allData[0].maximumOccupants,
              vehicleClass: allData[0].vehicleClass,
              vehicleMake: allData[0].vehicleMake,
              vehicleModel:allData[0].vehicleModel,
              location: allData[0].location,
              image: allData[0].image,
              images: allData[0].images,
              category: allData[0].category,
              slug: allData[0].slug,
        });
        setSampleId(allData[0].id);


        setIsLoading(false);
      }
    };

    //call the function

    fetchData().catch(console.error);
  }, [slug]);

  
  
  

  const Str = require("@supercharge/strings");

  const sampleData = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          <ProductDetailCard
            sample={sample}
            service={service}
            sampleId={sampleId}
            refNumber= {sample.refNumber}
            image= {sample.image}
            images = {sample.images}
            creator={sample.creator}
            sampleType= {sample.sampleType}
            specialFeature={sample.specialFeature}
            dateCreated={sample.dateCreated}
            status={sample.status}
            isAllowedOnThePlatform={sample.isAllowedOnThePlatform}
            driverDetails={sample.driverDetails}
            vehicleDetails={sample.vehicleDetails}
            vehicleDescription={sample.vehicleDescription}
            maximumOccupants={sample.maximumOccupants}
            vehicleClass={sample.vehicleClass}
            vehicleMake={sample.vehicleMake}
            vehicleModel={sample.vehicleModel}
            location={sample.location}
            category={sample.category}
            slug={sample.slug}
            key={creator.id}
            token={props.token}
            userId={props.userId}
            setToken={props.setToken}
            setUserId={props.setUserId}
            handleSuccessfulCreateSnackbar={
              props.handleSuccessfulCreateSnackbar
            }
            handleFailedSnackbar={props.handleFailedSnackbar}
            cartCounterHandler={props.cartCounterHandler}
            
          />
        </Grid>
      }
    </React.Fragment>
  ) : (
    <React.Fragment>
      {
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ProductDetailCard
             sample={sample}
             service={service}
             sampleId={sampleId}
             name= {sample.refNumber}
             image= {sample.image}
             images = {sample.images}
             creator={sample.creator}
             sampleType= {sample.sampleType}
             specialFeature={sample.specialFeature}
             dateCreated={sample.dateCreated}
             status={sample.status}
             isAllowedOnThePlatform={sample.isAllowedOnThePlatform}
             driverDetails={sample.driverDetails}
             vehicleDetails={sample.vehicleDetails}
             vehicleDescription={sample.vehicleDescription}
             maximumOccupants={sample.maximumOccupants}
             vehicleClass={sample.vehicleClass}
             vehicleMake={sample.vehicleMake}
             vehicleModel={sample.vehicleModel}
             location={sample.location}
             category={sample.category}
             slug={sample.slug}
             key={creator.id}
             token={props.token}
             userId={props.userId}
             setToken={props.setToken}
             setUserId={props.setUserId}
             handleSuccessfulCreateSnackbar={
               props.handleSuccessfulCreateSnackbar
             }
             handleFailedSnackbar={props.handleFailedSnackbar}
             cartCounterHandler={props.cartCounterHandler}
          />
        </Grid>
      }
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ marginTop: "10px" }}>
        {isLoading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}

        {!isLoading && <Grid item>{sampleData}</Grid>}

        {/*....INFORMATION BLOCK....*/}
      </Grid>
      <Grid item className={classes.footer}>
        <UpperFooter />
      </Grid>
    </Grid>
  );
}

export default ProductDetails;



