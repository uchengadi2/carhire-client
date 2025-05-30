import React, { useState, useRef, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import api from "../../apis/local";
import { CREATE_CART, EDIT_CART, DELETE_CART } from "../../actions/types";
import history from "../../history";
import { FaBullseye } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: 600,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 200,
    marginLeft: 80,
    marginTop: 30,
    marginBottom:30,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },

  submitToCartButton: {
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: 110,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.grey,
    "&:hover": {
      backgroundColor: theme.palette.common.grey,
    },
  },
}));



const renderSingleLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  defaultValue,
  readOnly,
  min,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={defaultValue}
      //value={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      //disabled
      // defaultValue={`${minimumQuantity}`}
      onChange={input.onChange}
      InputProps={{
        inputProps: {
          min: min,
          style: {
            height: 1,
          },
        },
        //readOnly:readOnly
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
  defaultValue,
  readOnly,
  min,
  id,
  rows,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={defaultValue}
      //value={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      minRows={rows}
      multiline={true}
      //disabled
      // defaultValue={`${minimumQuantity}`}
      onChange={input.onChange}
      InputProps={{
        inputProps: {
          min: min,
          // style: {
          //   height: 1,
          // },
        },
        //readOnly:readOnly
      }}
    />
  );
};

function SendCreatorToCheckoutForm(props) {
  const { token, userId } = props;
  const [locationsList, setLocationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [destinationStatesList, setDestinationStatesList] = useState([]);
  const [location, setLocation] = useState();
  const [state, setState] = useState();
  const [destinationState, setDestinationState] = useState();
  const [country, setCountry] = useState();
  const [tripCoverage, setTripCoverage ] = useState("one-way");
  const [serviceApplicability, setServiceApplicability] = useState("at-arrival");
  const [onsiteSecurityServiceApplicability, setOnsiteSecurityServiceApplicability] = useState("not-applicable");
  const [ontransitSecurityServiceApplicability, setOntransitSecurityServiceApplicability] = useState("not-applicable");


  const [cartForCheckoutList, setCartForCheckoutList] = useState([]);
 

  const dispatch = useDispatch();

   
  const classes = useStyles();
  // const [total, setTotal] = useState(
  //   price
  //     ? (
  //     : 0
  // );
  const [loading, setLoading] = useState();
  const [isLoading, setIsLoading] = useState();


  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/carts`, {
        params: {
          cartHolder: userId,
          status: "marked-for-checkout",
        },
      });

      const item = response.data.data.data;
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

  
//retrieve all the countries
 useEffect(() => {
       const fetchData = async () => {
         let allData = [];
         api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
         const response = await api.get(`/countries`, {
           //params: { country: country },
         });
         const workingData = response.data.data.data;
         workingData.map((country) => {
           allData.push({ id: country._id, name: country.name });
         });
         setCountriesList(allData);
       };
   
       //call the function
   
       fetchData().catch(console.error);
     }, []);



//retrieve all the states
 useEffect(() => {
  const fetchData = async () => {
    let allData = [];
    api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
    const response = await api.get(`/states`, {
      params: { country: country },
    });
    const workingData = response.data.data.data;
    workingData.map((state) => {
      allData.push({ id: state._id, name: state.name });
    });
    setStatesList(allData);
  };

  //call the function

  fetchData().catch(console.error);
}, [country]);



//retrieve all the destination states
useEffect(() => {
  const fetchData = async () => {
    let allData = [];
    api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
    const response = await api.get(`/states`, {
      params: { country: country },
    });
    const workingData = response.data.data.data;
    workingData.map((state) => {
      allData.push({ id: state._id, name: state.name });
    });
    setDestinationStatesList(allData);
  };

  //call the function

  fetchData().catch(console.error);
}, [country]);



//retrieve all the locations
useEffect(() => {
  const fetchData = async () => {
    let allData = [];
    api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
    const response = await api.get(`/locations`, {
      params: { state: state },
    });
    const workingData = response.data.data.data;
    workingData.map((location) => {
      allData.push({ id: location._id, name: location.name });
    });
    setLocationsList(allData);
  };

  //call the function

  fetchData().catch(console.error);
}, [state]);
    
    
    const handleLocationChange=(event)=>{
      setLocation(event.target.value)
    }  


    const handleStateChange=(event)=>{
      setState(event.target.value)
    } 

    const handleDestinationStateChange=(event)=>{
      setDestinationState(event.target.value)
    }

    const handleCountryChange=(event)=>{
      setCountry(event.target.value)
    } 

    const handleTripCoverageChange=(event)=>{
      setTripCoverage(event.target.value)
    }

    const handleServiceApplicabilityChange =(event)=>{
      setServiceApplicability(event.target.value)
    }

    const handleOnsiteSecurityServiceApplicabilityChange=(event)=>{
      setOnsiteSecurityServiceApplicability(event.target.value)
    }


    const handleOntransitSecurityServiceApplicabilityChange=(event)=>{
      setOntransitSecurityServiceApplicability(event.target.value)
    }
    
      //get the countries list
      const renderCountriesList = () => {
        return countriesList.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        });
      };


      //get the states list
      const renderStatesList = () => {
        return statesList.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        });
      };


      //get the destination states list
      const renderDestinationStatesList = () => {
        return destinationStatesList.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        });
      };


      //get the locations list
      const renderLocationsList = () => {
        return locationsList.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        });
      };

    

     
  const renderCountryField = ({
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
              labelId="country"
              id="country"
              value={country}
              onChange={handleCountryChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              {renderCountriesList()}
            </Select>
            <FormHelperText>Source Country</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderStateField = ({
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
              labelId="state"
              id="state"
              value={state}
              onChange={handleStateChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              {renderStatesList()}
            </Select>
            <FormHelperText>Select Source State</FormHelperText>
          </FormControl>
        </Box>
      );
    };



    const renderDestinationStateField = ({
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
              labelId="destinationState"
              id="destinationState"
              value={destinationState}
              onChange={handleDestinationStateChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              {renderDestinationStatesList()}
            </Select>
            <FormHelperText>Select Destination State</FormHelperText>
          </FormControl>
        </Box>
      );
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
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              {renderLocationsList()}
            </Select>
            <FormHelperText>Select Source Location</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderTripCoverageField = ({
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
              labelId="tripCoverage"
              id="tripCoverage"
              value={tripCoverage}
              onChange={handleTripCoverageChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              <MenuItem value="one-way">One Way Trip Coverage</MenuItem>
              <MenuItem value="two-way">Two Way Trip Coverage</MenuItem>
            </Select>
            <FormHelperText>Select Booking Coverage</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderServiceApplicabilityField = ({
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
              labelId="serviceApplicability"
              id="serviceApplicability"
              value={serviceApplicability}
              onChange={handleServiceApplicabilityChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              <MenuItem value="at-arrival">At Arrival Period</MenuItem>
              <MenuItem value="at-departure">At Departure Period</MenuItem>
              <MenuItem value="both">Both Arrival & Departure Periods </MenuItem>
            </Select>
            <FormHelperText>Select Where Service Will Be Applicable</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderOnsiteSecurityServiceApplicabilityField = ({
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
              labelId="onsiteSecurityServiceApplicability"
              id="onsiteSecurityServiceApplicability"
              value={onsiteSecurityServiceApplicability}
              onChange={handleOnsiteSecurityServiceApplicabilityChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              <MenuItem value="not-applicable">Not Applicable</MenuItem>
              <MenuItem value="at-arrival">At Arrival Period</MenuItem>
              <MenuItem value="at-departure">At Departure Period</MenuItem>
              <MenuItem value="both">Both Arrival & Departure Periods </MenuItem>
            </Select>
            <FormHelperText>Select When Onsite Security Service Will Be Applicable</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderOntransitSecurityServiceApplicabilityField = ({
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
              labelId="ontransitSecurityServiceApplicability"
              id="ontransitSecurityServiceApplicability"
              value={ontransitSecurityServiceApplicability}
              onChange={handleOntransitSecurityServiceApplicabilityChange}
              // label="User"
              style={{ marginTop: 10, width: 300, height: 38, marginLeft:0,marginRight:0 }}
              //{...input}
            >
              <MenuItem value="not-applicable">Not Applicable</MenuItem>
              <MenuItem value="from-arrival">From Arrival Location(Airport)</MenuItem>
              <MenuItem value="from-destination">From Destination Location</MenuItem>
              <MenuItem value="both">Both From Arrival & Destination Locations </MenuItem>
            </Select>
            <FormHelperText>Select Where On-transit Security Service Will Commence From</FormHelperText>
          </FormControl>
        </Box>
      );
    };

  
  
  const buttonContent = () => {
    return <React.Fragment>Proceed to Hire</React.Fragment>;
  };

 

   const onSubmit = (formValues) => {
    setLoading(true);

   if (props.token === undefined) {
      props.handleMakeOpenLoginFormDialogStatus();
      setLoading(false);

      return;
    }    
    
    

    const data = {
      creator: props.sample.creator[0].id,
      brand: props.sample.brand ? props.sample.brand.id : "",
      vehicle: props.sample.id,
      numberOfVehicleOccupant: formValues['numberOfVehicleOccupant'],
      refNumber: formValues.refNumber
        ? formValues.refNumber
        : "VEHICLE-" + Math.floor(Math.random() * 1000000000) + "-3START",

      service: props.service ==='carhireandsecurity'? 'car-and-security' : 'carhire',
      sourceLocation: location,
      sourceState:state,
      destinationState:destinationState,
      country: country,
      destinationAddress: formValues['destinationAddress'],
      arrivalDate: new Date(formValues['arrivalDate']).toISOString(),
      departureDate:new Date(formValues['departureDate']).toISOString(), 
      tripCoverage: tripCoverage,
      serviceApplicability: serviceApplicability,
      onsiteSecurityServiceApplicability: onsiteSecurityServiceApplicability, 
      ontransitSecurityServiceApplicability:ontransitSecurityServiceApplicability,

      cartHolder: props.userId,
      isDeleted: false,
      
      status: "marked-for-checkout",      
      category: props.sample.category ?props.sample.category[0].id :"",      
      slug: props.sample.slug,
      image:props.sample.image
      
            
      
    };

   

   
      //delete all items in this user's cart
      cartForCheckoutList.map((cart, index) => {
        const createForm = async () => {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${props.token}`;
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
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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

 

  return (
    <form id="sendCreatorToCheckoutForm">
      <Box
        sx={{
          width: 200,
          marginLeft:20
          //height: 450,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6" style={{marginLeft:10, fontSize:15}}>Enter Your Booking Details</Typography>
        
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        ></Grid>
        <Field
          label=""
          id="country"
          name="country"
          type="text"
          component={renderCountryField}
          style={{ width: 300 }}
        />
        <Field
           label=""
           id="state"
           name="state"
           type="text"
           
           component={renderStateField}
          style={{ width: 300, marginTop: 10 }}
        />
         <Field
           label=""
           id="location"
           name="location"
           type="text"           
           component={renderLocationField}
          style={{ width: 300, marginTop: 10 }}
        />
        <Field
           label=""
           id="destinationAddress"
           name="destinationAddress"
           type="text"   
           rows={5}     
           helperText="Enter Destination Address Details"   
           component={renderMultiLineField}
          style={{ width: 300, marginTop: 10 }}
        />
        <Field
           label=""
           id="destinationState"
           name="destinationState"
           type="text"   
           component={renderDestinationStateField}
          style={{ width: 300, marginTop: 10 }}
        />
         <Field
           label=""
           id="tripCoverage"
           name="tripCoverage"
           type="text"   
           component={renderTripCoverageField}
          style={{ width: 300, marginTop: 10 }}
        />
         <Field
           label=""
           id="serviceApplicability"
           name="serviceApplicability"
           type="text"   
           component={renderServiceApplicabilityField}
          style={{ width: 300, marginTop: 10 }}
        />
         
         <Field
           label=""
           id="numberOfVehicleOccupant"
           name="numberOfVehicleOccupant"
           type="number"
            helperText="Enter The Expected Number of Vehicle Occupants"
           component={renderSingleLineField}
          style={{ width: 300, marginTop: 10 }}
        />
         <Field
           label=""
           id="arrivalDate"
           name="arrivalDate"
           type="date"
            helperText="Enter Arrival Date"
           component={renderSingleLineField}
          style={{ width: 300, marginTop: 10 }}
        />
         <Field
           label=""
           id="departureDate"
           name="departureDate"
           type="date"
            helperText="Enter Departure Date"
           component={renderSingleLineField}
          style={{ width: 300, marginTop: 10 }}
        />
        {props.service === "carhireandsecurity" &&  <Field
           label=""
           id="onsiteSecurityServiceApplicability"
           name="onsiteSecurityServiceApplicability"
           type="text"   
           component={renderOnsiteSecurityServiceApplicabilityField}
          style={{ width: 300, marginTop: 10 }}
        />}
         {props.service === "carhireandsecurity" && <Field
           label=""
           id="ontransitSecurityServiceApplicability"
           name="ontransitSecurityServiceApplicability"
           type="text"   
           component={renderOntransitSecurityServiceApplicabilityField}
          style={{ width: 300, marginTop: 10 }}
        />}

        
        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            buttonContent()
          )}
        </Button>

        
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "sendCreatorToCheckoutForm",
})(SendCreatorToCheckoutForm);
