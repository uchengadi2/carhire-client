import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
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
    height: 3000,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardMobile: {
    maxWidth: "100%",
    height: 7400,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
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

export default function TopCover(props) {
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

  const vvipServices = "* **Personalized Reception**: A professional protocol officer greets guests personally at the aircraft door, arrival gate, or at a designated VIP meeting point inside the terminal.\n\n* **Fast-Track Processing**: Priority assistance through immigration, customs, and security clearances — bypassing regular passenger queues for faster processing.\n\n* **Porter Assistance**: Dedicated porters collect, handle, and deliver guests’ luggage through priority channels to their vehicle or next destination.\n\n* **Escort to Lounge or Transport**: Clients are personally escorted to VIP lounges or their awaiting ground transportation, ensuring they never navigate the airport alone.\n\n* **Language Assistance**: Multilingual protocol officers available to overcome language barriers during arrivals and departures.\n\n* **Concierge Support**: Optional on-site concierge services such as arranging hotel bookings, flight rebookings, or airport shopping assistance.\n\n";
  const diplomaticServices = "* **Advance Coordination**: Prior arrangement with airport authorities, customs, immigration, and diplomatic security services to ensure a smooth arrival or departure.\n\n* **Secure Diplomatic Lounge Access**: Use of diplomatic lounges for privacy and comfort while formalities are handled discreetly.\n\n* **Special Clearance Processing**: Rapid immigration, customs, and visa processing through diplomatic channels without waiting in public areas.\n\n* **Embassy & Consulate Liaison**: Coordinating with consular staff or embassy officials to facilitate meetings, document clearances, or secure handovers.\n\n* **Private Airside Vehicle Transfers**: Where permitted, arranging for official vehicles to pick up or drop off guests directly at the aircraft.";
  const corporateServices = "* **Executive Meet & Greet**: Professional, discreet protocol officers to assist at check-in, immigration, and baggage claim.\n\n* **Check-in & Boarding**: Dedicated counters or pre-arranged check-in services to minimize waiting times.\n\n* **Luggage Handling**: Luggage tags, porter services, and baggage delivery directly to waiting vehicles or hotel reception.\n\n* **Executive Lounge Coordination**: Fast escort and guaranteed entry to business lounges, where guests can work or relax before flights.\n\n* **Business Travel Concierge**: On-ground assistance with rebooking, upgrades, meeting room arrangements, or connecting ground transport.\n\n* **Customizable Packages**: Tailored services based on the specific needs of corporate clients, including group travel arrangements.";
  const medicalServices = "* **Emergency Airport Clearances**: Rapid clearance procedures for medical evacuation flights, ambulances, and emergency arrivals.\n\n* **Ambulance Coordination**: Pre-arranged ambulance or medical staff at airside gates or aircraft doors.\n\n* **Patient Escort**: Protocol officers accompany patients through immigration and customs, ensuring safety and comfort.\n\n* **Medical Equipment Handling**: Special assistance for the transport of wheelchairs, stretchers, oxygen tanks, or life-saving devices.\n\n* **Hospital Liaison**: Coordination with receiving hospitals, arranging medical records handovers, and transportation.\n\n* **Travel Insurance Liaison**: Coordination with travel insurance providers for claims and coverage during the trip.";  
  const airlineCrewServices = "* **Crew Meet & Greet**: Protocol officers welcome arriving or departing crew members, ensuring a smooth and timely transition.\n\n* **Accommodation & Transfers**: Booking and coordinating layover hotels, airport shuttles, and crew transportation.\n\n* **Visa & Immigration Facilitation**: Assistance with crew visa-on-arrival, temporary passes, or transit clearances.\n\n* **Lost Baggage Support**: Handling reports and coordination with airlines for missing or delayed crew baggage.\n\n* **Flight Operations Coordination**: Liaising with ground handling agents, flight dispatchers, and airport authorities to ensure timely departures.\n\n* **Crew Lounge Access**: Arranging rest areas or lounges while waiting for connecting flights or ground transportation.";
  const privateServices = "* **FBO Terminal Coordination**: Pre-arrangement of private Fixed Base Operator (FBO) terminal services for privacy and security.\n\n* **Airside Vehicle Access**: Direct vehicle-to-aircraft transfers for arrivals and departures, bypassing the public terminal.\n\n* **Dedicated Protocol Officer**: Personal escort for every step of the arrival or departure process, from immigration to luggage collection.\n\n* **Customs & Security Clearance**: Seamless processing of documentation, luggage, and permits through VIP or private channels.\n\n* **Ground Concierge Services**: Booking luxury vehicles, private chefs, hotel suites, or personal security teams on request.\n\n* **Flight Coordination**: Assistance with flight changes, upgrades, or charter arrangements.";
  const specialEventServices = "* **Exclusive Arrivals & Departures**: Private entry and exit points arranged with airport security for ultimate privacy.\n\n* **Temporary Protocol Stations**: Deployment of mobile protocol stations, dedicated protocol staff, and security support.\n\n* **Crowd Control & Privacy Management**: Coordinating with airport authorities and security to manage fans, media, and public attention.\n\n* **Group Logistics Management**: Coordinating large or simultaneous arrivals, including charter or private jet logistics, hotel transfers, and luggage management.\n\n* **On-site Event Coordination**: Real-time management of arrivals, transport, schedules, and briefings.\n\n* **Media Management**: Coordination with media teams for press conferences, interviews, or public appearances.";
  const trainingServices = "* **Multilingual Protocol Staff**: Officers fluent in major international languages for guest assistance.\n\n* **Specialized Training**: Cultural sensitivity, etiquette, VIP handling, and emergency management training.\n\n* **Crisis Handling Training**: Preparing staff to handle medical emergencies, last-minute flight changes, and sensitive situations.\n\n* **On-call Staffing**: Rapid deployment of protocol officers for temporary or urgent events, group arrivals, or unplanned scenarios.\n\n* **Uniformed Professionalism**: Clean, presentable, and well-trained officers representing your brand impeccably.\n\n* **Customizable Training Modules**: Tailored training solutions based on specific client needs or industry requirements.";  
  const documentationServices = "* **Visa-on-Arrival & E-visa Processing**: Handling paperwork, payments, and approvals for immediate or digital visas.\n\n* **Transit Visa Facilitation**: Arranging transit permits for travelers with layovers or multi-airport transfers.\n\n* **Customs Declarations**: Support with declarations for luxury goods, special equipment, or sensitive cargo.\n\n* **Immigration Forms**: Assistance with completing and submitting arrival, departure, and health forms.\n\n* **Real-time Clearance Updates**: Constant communication with travelers, families, or corporate travel managers on progress.\n\n* **Special Permits & Clearances**: Arranging special permissions for high-profile guests, media teams, or sensitive cargo.";
  return (
    <>
      {matchesMDUp ? (
        <>
          <Box className={classes.uppercard} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'40%',marginBottom:30}}>Our Protocol Services</Typography>
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: "33%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}> VIP Meet & Greet Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.softwareEngineering}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Designed for high-profile travelers, executives, celebrities, and families seeking a seamless, stress-free airport experience.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{vvipServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                <Typography variant="h5" style={{marginLeft:60, marginBottom:0}}>Diplomatic & Government Protocol Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.qualityAssurance}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Specialized services for diplomats, embassy officials, and government representatives traveling on official duties.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{diplomaticServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "7%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
              <Typography variant="h5" style={{marginLeft:80, marginBottom:0}}>Corporate & Business Protocol Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundBulk}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 20, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Designed for business travelers, corporate groups, and executive delegations requiring efficiency and convenience.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{corporateServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            <Grid
              container
              direction="row"
              style={{ marginTop: 30, marginBottom: 20, height: "33%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:20}}>Medical & Emergency Protocol Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Essential services for patients, medical evacuation (medevac) flights, or travelers requiring medical assistance.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{medicalServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:25}}>Airline Crew & Layover Services</Typography> <br />
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                 <Typography><ReactMarkdown>**Dedicated services to support airline crew members, including pilots, cabin crew, and ground staff on duty.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{airlineCrewServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:20}}>Private Jet / Charter Flight Protocol Services</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Luxury protocol services tailored for private aircraft passengers and VIP charters.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{privateServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              style={{ marginTop: 30, marginBottom: 20, height: "33%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:20}}>Special Event Protocol Management Service</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                 <Typography><ReactMarkdown>**Specialized services for celebrities, sports teams, film crews, or diplomatic delegations during high-profile events.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{specialEventServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:20}}>Protocol Officer Staffing & Training Service</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Recruitment, training, and provision of professional protocol officers for airports, airlines, or special projects.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{trainingServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h5" style={{marginLeft:80, marginBottom:20}}>Documentation & Clearance Assistance Service</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "25%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "65%", marginLeft: "3.5em" }}
                >
                  <Typography><ReactMarkdown>**Expert support with all essential travel documentation, immigration, and customs formalities.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{documentationServices}</ReactMarkdown>
                  </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <Box className={classes.uppercardMobile} disableRipple>
          <Typography variant="h3" style={{marginLeft:'15%',marginBottom:30, fontSize:25}}>Our Protocol Services</Typography>
          <Grid
            container
            direction="row"
            style={{ marginTop: 15, height: "33%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:10, fontSize:15}}> VIP Meet & Greet Services</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.softwareEngineering}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 10 }}
              >
                <Typography style={{ fontSize: 11 }}>
                <ReactMarkdown>**Designed for high-profile travelers, executives, celebrities, and families seeking a seamless, stress-free airport experience.**</ReactMarkdown>
                </Typography>
                <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{vvipServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.qualityAssurance}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 20 }}
              ></Grid>
              <Typography variant="h5" style={{marginLeft:10, marginBottom:10}}>Diplomatic & Government Protocol Services</Typography>

              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Specialized services for diplomats, embassy officials, and government representatives traveling on official duties.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{diplomaticServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Corporate & Business Protocol Services</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundBulk}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Designed for business travelers, corporate groups, and executive delegations requiring efficiency and convenience.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{corporateServices}</ReactMarkdown>
                  </Typography>
              </Grid>

              {/* <Grid
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
              </Grid> */}
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            style={{ marginTop: 5, height: "33%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:0}}>Medical & Emergency Protocol Services</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundProduct}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 10 }}
              >
                <Typography><ReactMarkdown>**Essential services for patients, medical evacuation (medevac) flights, or travelers requiring medical assistance.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{medicalServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:25}}>Airline Crew & Layover Services</Typography> <br />
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundGrowth}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Dedicated services to support airline crew members, including pilots, cabin crew, and ground staff on duty.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{airlineCrewServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
               <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Private Jet / Charter Flight Protocol Services</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundMetrics}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: "1.2em" }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                 <Typography><ReactMarkdown>**Luxury protocol services tailored for private aircraft passengers and VIP charters.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{privateServices}</ReactMarkdown>
                  </Typography>
              </Grid>

              {/* <Grid
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
              </Grid> */}
            </Grid>
          </Grid>
          {/**This is the last lap */}
          <Grid
            container
            direction="row"
            style={{ marginTop: 5, height: "33%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Special Event Protocol Management Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundProduct}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "60%", marginLeft: 10 }}
              >
                 <Typography><ReactMarkdown>**Specialized services for celebrities, sports teams, film crews, or diplomatic delegations during high-profile events.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{specialEventServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 10 }}
            >
               <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Protocol Officer Staffing & Training Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundGrowth}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Recruitment, training, and provision of professional protocol officers for airports, airlines, or special projects.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{trainingServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
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
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
                <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Documentation & Clearance Assistance Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundMetrics}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: "1.2em" }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Expert support with all essential travel documentation, immigration, and customs formalities.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{documentationServices}</ReactMarkdown>
                  </Typography>
              </Grid>

              {/* <Grid
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
              </Grid> */}
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
