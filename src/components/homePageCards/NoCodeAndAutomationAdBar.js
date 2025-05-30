import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactMarkdown from "react-markdown";
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
import heroSection from "./../../assets/images/covers/food2.png";
import backgroundDerica from "./../../assets/images/covers/food2.png";
import backgroundPaint from "./../../assets/images/covers/delivery.png";
import backgroundBulk from "./../../assets/images/covers/payment1.png";
import backgroundRetail from "./../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../assets/images/covers/aboutus-cover.jpg";
import backgroundGrowth from "./../../assets/images/covers/channels.jpg";
import backgroundMetrics from "./../../assets/images/covers/assessment.jpg";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";

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
        height: 300,
        //height: 350,
        width: "100%",
    
        marginLeft: "10px",
        //borderRadius: 30,
        marginTop: "3em",
        marginBottom: "1em",
        padding: 50,
        backgroundColor:"#E3F0AF"
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
      heroSection: {
        backgroundImage: `url(${heroSection})`,
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
      button: {
        ...theme.typography.estimate,
        borderRadius: "250px",
        marginLeft: "50%",
        marginRight: "10px",
        height: "45px",
        width: "120px",
    
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
          color: "white",
        },
      },
}));

export default function NoCodeAndAutomationAdBar() {
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
  const [isLoading, setIsLoading] = useState();
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

  const instructorSection = () => {
    // return <React.Fragment>Learn More About Instructors</React.Fragment>;
    return <React.Fragment>Become an Assessor</React.Fragment>;
  };

    return (
      <>
        {matchesMDUp ? (
          <>
            <Box className={classes.uppercard} disableRipple={true}>
              
              <Grid
                container
                direction="column"
                style={{ marginTop: 20, height: "100%" }}
                
              >
                <Grid
                  container
                  direction="row"
                  style={{ marginLeft: 20, width: "100%", marginTop: 0 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}>Launch Your MVP in 2 Weeks — at 70% Less Cost!</Typography>
                  
                </Grid>
                  <Grid
                    item
                    alignItems="center"
                    //style={{ height: "60%", marginLeft: "3.5em" }}
                    style={{ height: "30%", marginLeft: "3.5em" }}
                  >
                    <Typography style={{marginLeft:'40%'}}>
                    Why wait months or burn through your budget?
                    </Typography>
                    <br />
                    <Typography>
                    With our Bubble No-Code Development solutions, you can build, automate, and launch your project MVP in just
                    14 days — while slashing development costs by up to 70%.
                    </Typography>
                  </Grid>
                  <Grid item  style={{width: "100%", marginTop: 20}}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        justifyContent="center" 
                        className={classes.button}
                    
                    >
                        Let's Talk
                    </Button>
                  </Grid>
                  
                
               
              </Grid>
             
             
            </Box>
          </>
        ) : (
          <Box className={classes.rootMobile} disableRipple>
            <Grid
              container
              direction="row"
              style={{ marginTop: 15, height: "50%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 10, width: "30%", marginTop: 0 }}
              >
                <CardActionArea></CardActionArea>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundDerica}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "55%", marginLeft: 10 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    On this platform, you gain access to all markets across
                    Nigeria and have the opportunity to connect directly with
                    dealers offering your preferred products and services.
                  </Typography>
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "0.5em" }}
                >
                  {/* <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    Send Errand
                  </Button> */}
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
              >
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundPaint}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: 20 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "55%", marginLeft: 25 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    Once connected with the dealers, you can finalize transactions
                    directly, coordinate product delivery with the dealers, or
                    request our assistance in managing the logistics for delivery
                    to your location.
                  </Typography>
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "0.5em" }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    Send Errand
                  </Button>
                </Grid>
              </Grid>
  
              <Grid
                container
                direction="column"
                style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
              >
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundBulk}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: 20 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "55%", marginLeft: 25 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    Payments for all purchases can be made directly to the dealer
                    of the respective products or services. However, if there are
                    concerns regarding trust or payment-related issues, you have
                    the option to utilize our escrow service for added security.
                  </Typography>
                </Grid>
  
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "0.5em" }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    Request Escrow
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              style={{ marginTop: 5, height: "50%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 10, width: "30%", marginTop: 0 }}
              >
                {/* <CardActionArea></CardActionArea> */}
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "65%", marginLeft: 10 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    As a dealer, manufacturer, business owner, or trader of any
                    product or service, you have the opportunity to list your
                    offerings on the platform, allowing potential customers to
                    easily discover and contact you.
                  </Typography>
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "10%", marginLeft: "0.3em", marginTop: 10 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    List Products
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
              >
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: 20 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "65%", marginLeft: 25 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    Presenting your products and services to a wide range of
                    current and potential customers is essential for increasing
                    visibility and driving sales. While the platform provides a
                    default of ten(10) contact notifications per month for your
                    listings, gaining additional exposure and customer
                    interactions will require boosting your offerings to reach
                    various customer segments.
                  </Typography>
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    Boost Visibility
                  </Button>
                </Grid>
              </Grid>
  
              <Grid
                container
                direction="column"
                style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
              >
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  style={{ height: "15%", marginTop: 0, marginLeft: "1.2em" }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  style={{ height: "65%", marginLeft: 25 }}
                >
                  <Typography style={{ fontSize: 11 }}>
                    We provide a comprehensive set of market metrics tailored to
                    your offerings, enabling business owners to make informed
                    decisions and develop strategies for optimizing sales. These
                    metrics include but not limited to Customer
                    Demographics,Market Trends,Sales Performance,Customer
                    Engagement,Regional Market Demand, Product Performance
                    Comparison etc
                  </Typography>
                </Grid>
  
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionButton}
                  >
                    Market Metrics
                  </Button>
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
