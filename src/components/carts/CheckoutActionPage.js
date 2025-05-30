import React, { useState, useRef, useEffect } from "react";
import { Field, formValues, reduxForm } from "redux-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import api from "./../../apis/local";
import { CREATE_ORDER,DELETE_CART } from "../../actions/types";
import CheckoutPage from "./CheckoutPage";
import Paystack from "../../Paystack";
import history from "../../history";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: 600,
    marginLeft: 15,
  },
  formStyles: {
    width: 600,
  },

  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: '30%',
    marginTop: 30,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.green,
    // "&:hover": {
    //   backgroundColor: theme.palette.common.green,
    // },
  },
  offDeliveryLocationButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 60,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  checkout: {
    borderRadius: 10,
    height: 40,
    width: 190,
    marginLeft: 80,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  bankDetails: {
    fontSize: 12,
    marginBottom: 4,
    padding: 10,
  },
}));

const renderSingleLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
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
      fullWidth
      type={type}
      style={{ marginTop: 10, width: 300 }}
      onChange={input.onChange}
      InputProps={{
        inputProps: {
          min: 1,
          style: {
            height: 1,
            //fontSize: "2em",
          },
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
  rows,
  id,
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
      fullWidth
      type={type}
      style={{ marginTop: 10, width: 300 }}
      onChange={input.onChange}
      multiline
      minRows={rows}
    />
  );
};



function CheckoutActionPage(props) {
  const { price, productId, token, userId } = props;
  const [quantity, setQuantity] = useState(+props.quantity);
  const [productQuantityInCart, setProductQuantityInCart] = useState();
  const [productLocation, setProductLocation] = useState();
  const [productLocationCountry, setProductLocationCountry] = useState();
  const [cartHolder, setCartHolder] = useState();
  const [cartId, setCartId] = useState();
  const [location, setLocation] = useState();
  const [country, setCountry] = useState();
  const [recipientName, setRecipientName] = useState();
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState();
  const [recipientAddress, setRecipientAddress] = useState();

  const [isVisible, setIsVisible] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState();
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [provideDeliveryCost, setProvideDeliveryCost] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [ordered, setOrdered] = useState(false);
  const [isOnlinePayment, setIsOnlinePayment] = useState(false);
  const [customerEmail, setCustomerEmail] = useState();
  const [customerName, setCustomerName] = useState();
  const [total, setTotal] = useState();
  const [orderNumber, setOrderNumber] = useState(
    "OR-" + Math.floor(Math.random() * 10000000000000) + "-" + "PLUTO"
  );
    

  const dispatch = useDispatch();

  const classes = useStyles();

  // const [total, setTotal] = useState(
  //   price
  //     ? (+props.quantity * price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  //     : 0
  // );
  const [loading, setLoading] = useState();



  useEffect(() => {
    if (!price) {
      return;
    }
    if (!quantity) {
      return;
    }
    const sum = price * quantity;
    setTotal(sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
  }, [price, quantity]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/countries`);
      const workingData = response.data.data.data;
      workingData.map((state) => {
        allData.push({ id: state._id, name: state.name });
      });
      setCountryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
      setStateList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [country]);

  //get the email address of the customer

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/users/${props.userId}`);
      const user = response.data.data.data;
      allData.push({ id: user._id, name: user.name, email: user.email });
      setCustomerEmail(allData[0].email);
      setCustomerName(allData[0].name);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);




  const onChange = (e) => {
    const quantity = parseFloat(e.target.value);
    setQuantity(quantity);
    const newTotal = quantity * parseFloat(price);
    setTotal(newTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
  };

  const onRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  const onRecipientPhoneNumberChange = (e) => {
    setRecipientPhoneNumber(e.target.value);
  };

  const onRecipientAddressChange = (e) => {
    setRecipientAddress(e.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    if (event.target.value === productLocation) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setIsCheckoutVisible(false);
    setProvideDeliveryCost(true);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === "card") {
      setIsOnlinePayment(true);
    } else {
      setIsOnlinePayment(false);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  //get the state list
  const renderLocationList = () => {
    return stateList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the country list
  const renderCountryList = () => {
    return countryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderTotalField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        error={touched && invalid}
        //placeholder="category description"
        variant="outlined"
        helperText="Total Cost"
        label={label}
        id={input.name}
        name={input.name}
        value={total}
        //defaultValue={total}
        fullWidth
        type={type}
        disabled
        style={{ marginTop: 10, width: 250 }}
        onChange={input.onChange}
        InputProps={{
          inputProps: {
            min: 1,
            style: {
              height: 1,
              //fontSize: "2em",
            },
          },
        }}
      />
    );
  };

  const renderMinimumQuantityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Minimum Quantity Required(MQR)"
        variant="outlined"
        label={label}
        id={input.name}
        //value={input.value}
        fullWidth
        //required
        type={type}
        {...custom}
        defaultValue={`${props.minimumQuantity} unit(s)`}
        disabled
        onChange={input.onChange}
        //   inputProps={{
        //     style: {
        //       height: 1,
        //     },

        //   }}
        InputProps={{
          inputProps: {
            min: 1,
            style: {
              height: 1,
            },
          },
        }}
      />
    );
  };

  const renderRequestedQuantityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Quantity Ordered"
        variant="outlined"
        label={label}
        id={input.name}
        //value={input.value}
        fullWidth
        //required
        type={type}
        {...custom}
        defaultValue={quantity}
        onChange={input.onChange}
        //   inputProps={{
        //     style: {
        //       height: 1,
        //     },

        //   }}
        InputProps={{
          inputProps: {
            min: 1,
            style: {
              height: 1,
            },
          },
        }}
      />
    );
  };

  const renderProductCountryField = ({
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
            labelId="locationCountry"
            id="locationCountry"
            value={country}
            onChange={handleCountryChange}
            label="Country"
            style={{ width: 140, marginTop: 0, height: 38 }}
            //{...input}
          >
            {renderCountryList()}
          </Select>
          <FormHelperText>Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProductLocationField = ({
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
            label="Location"
            style={{ width: 150, marginTop: 0, marginLeft: 30, height: 38 }}
            //{...input}
          >
            {renderLocationList()}
          </Select>
          <FormHelperText style={{ marginLeft: 40 }}>
            State/Region
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCheckbox = ({ input, label }) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            name="SomeName"
            value="SomeValue"
            onChange={input.onChange}
          />
        }
        label={label}
      />
    );
  };

  const renderPaymentMethodField = () => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.accountType}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="paymentMethod"
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            label="Account Type"
            style={{ height: 38, width: 300, marginTop: 10, marginLeft: 10 }}
          >
            <MenuItem value={"cheque"}>Cheque</MenuItem>
            <MenuItem value={"card"}>Credit/Debit Card</MenuItem>
            <MenuItem value={"bank-transfer"}>Bank Transfer</MenuItem>
            <MenuItem value={"cash"}>Cash</MenuItem>
          </Select>
          <FormHelperText>Payment Method</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  let totalDeliveryCost;

  const diff = +quantity - +props.maxmumQuantityForBaselineDelivery;

  if (diff <= 0) {
    totalDeliveryCost = 0;
    // parseFloat(
    //   props.baselineDeliveryCostWithinProductLocation
    // );
  } else {
    const quantityUnitsForNonBaselineDelivery =
      parseInt(quantity) - parseInt(props.maxmumQuantityForBaselineDelivery);
    const costforNonBaselineDelivery =
      +quantityUnitsForNonBaselineDelivery *
      parseFloat(props.deliveryCostPerUnitWithinProductLocation);
    totalDeliveryCost = 0;
    // +costforNonBaselineDelivery +
    // parseFloat(props.baselineDeliveryCostWithinProductLocation);
  }

  const totalProductCost = price * quantity + totalDeliveryCost;
  const totalProductCostForDisplay = totalProductCost
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const totalDeliveryCostForDisplay = totalDeliveryCost
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const amountForPayment = +totalProductCost.toFixed(2) * 100;

  const buttonContent = () => {
    return <React.Fragment>Remove</React.Fragment>;
  };


  const buttonRequestAnInvoiceContent = () => {
    return <React.Fragment>Get Invoice</React.Fragment>;
  };

  
  // const onSubmit = () => {
  //   setLoading(true);
  //   const createForm = async () => {
  //     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //     await api.delete(`/carts/${props.cartId}`);

  //     props.handleSuccessfulCreateSnackbar(
  //       `This item is removed successfully!!!`
  //     );

  //     //history.push("/");
  //     props.renderCheckoutUpdate(props.cartId);

  //     setLoading(false);
  //   };
  //   createForm().catch((err) => {
  //     props.handleFailedSnackbar();
  //     console.log("err:", err.message);
  //   });
  // };
console.log('props is:',props);
  console.log('service is:', props.service)

  const onInvoiceSubmitSubmit = (formValues)=>{
    setLoading(true);
    
        if (
          !formValues["name"] ||
          formValues["name"].replace(/\s/g, "").length === 0
        ) {
          props.handleFailedSnackbar("The name field cannot be empty");
          setLoading(false);
          return;
        }
    
        if (
          !formValues["phoneNumber"] ||
          formValues["phoneNumber"].replace(/\s/g, "").length === 0
        ) {
          props.handleFailedSnackbar(
            "Please the phone number field cannot be empty"
          );
          setLoading(false);
          return;
        }

        if (
          !formValues["emailAddress"] ||
          formValues["emailAddress"].replace(/\s/g, "").length === 0
        ) {
          props.handleFailedSnackbar(
            "Please the Email Address field cannot be empty"
          );
          setLoading(false);
          return;
        }
        const refNumber = "ORDER" + "-" + Math.floor(Math.random() * 100000000) + "-" + "VEHICLE";
        const Str = require("@supercharge/strings");
    
        if(props.parameters.service[0] ==='carhire' || props.parameters.service[0] === "car-and-security"){

          const data = {
            name:formValues.name,
            phoneNumber:formValues.phoneNumber,
            emailAddress:formValues.emailAddress,
            businessName: formValues.businessName,
            image: props.parameters.image,
            category: props.parameters.category[0].id,
            ontransitSecurityServiceApplicability: props.parameters.ontransitSecurityServiceApplicability,
            onsiteSecurityServiceApplicability: props.parameters.onsiteSecurityServiceApplicability,
            serviceApplicability: props.parameters.serviceApplicability,
            tripCoverage: props.parameters.tripCoverage,
            departureDate: props.parameters.departureDate,
            arrivalDate: props.parameters.arrivalDate,
            destinationAddress: props.parameters.destinationAddress,
            destinationState: props.parameters.destinationState[0].id,
            sourceState: props.parameters.sourceState[0].id,
            country: props.parameters.country[0].id,
            sourceLocation: props.parameters.sourceLocation[0].id,
            service:props.parameters.service[0],
            numberOfVehicleOccupant: props.parameters.numberOfVehicleOccupant,
            numberOfGuest: props.parameters.numberOfGuest,
            vehicle: props.parameters.vehicle[0].id,
            status: "pending",
            dateAddedToCart: props.parameters.dateAddedToCart,
            user: props.parameters.userId,
            refNumber: refNumber,
            creator: props.parameters.creator.id,
            cartId: props.parameters.cartId,
            orderNumber: orderNumber,
         
            bookedBy: props.userId
  
          }
          
      
          if (data) {
            const createForm = async () => {
              api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
              const response = await api.post(`/orders`, data);
      
              if (response.data.status === "success") {
                dispatch({
                  type: CREATE_ORDER,
                  payload: response.data.data.data,
                });
      
                // props.handleSuccessfulCreateSnackbar(
                //   //`${response.data.data.data.orderNumber} Order is successfully submitted!!!`
                //   "We are processing your invoice. You will get it as soon as possible"
                // );
                props.renderCheckoutUpdate(props.cartId);
                props.handleDialogOpenStatus();
                setLoading(false);
              } else {
                props.handleFailedSnackbar(
                  "Something went wrong, please try again!!!"
                );
                return
              }
            };
            createForm().catch((err) => {
              //props.handleFailedSnackbar("Something went wrong, please try again!!!");
              //console.log("err:", err.message);
              //return
            });
          } else {
            //props.handleFailedSnackbar("Something went wrong, please try again!!!");
          }
          //remove item from cart
          
          const createForm = async () => {
                  api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
                  await api.delete(`/carts/${props.cartId}`);
                  dispatch({
                    type: DELETE_CART,
                    //payload: response2.data.data.data,
                  });
                };
                createForm().catch((err) => {
                  props.handleFailedSnackbar();
                  console.log("err:", err.message);
                });
            
              props.handleSuccessfulCreateSnackbar(
                "We are processing your invoice. You will get it as soon as possible"
              );
              history.push("/thankyou");
        }else{

          const data = {
            name:formValues.name,
            phoneNumber:formValues.phoneNumber,
            emailAddress:formValues.emailAddress,
            businessName: formValues.businessName,
            image: props.parameters.image,
            //category: props.parameters.category[0].id,
            //ontransitSecurityServiceApplicability: props.parameters.ontransitSecurityServiceApplicability,
            //onsiteSecurityServiceApplicability: props.parameters.onsiteSecurityServiceApplicability,
            serviceApplicability: props.serviceApplicability,
            //tripCoverage: props.parameters.tripCoverage,
            departureDate: props.departureDate,
            arrivalDate: props.arrivalDate,
            //destinationAddress: props.parameters.destinationAddress,
            //destinationState: props.parameters.destinationState[0].id,
            sourceState: props.parameters.sourceState[0].id,
            country: props.parameters.country[0].id,
            sourceLocation: props.parameters.sourceLocation[0].id,
            service:props.parameters.service[0],
            //numberOfVehicleOccupant: props.parameters.numberOfVehicleOccupant,
            numberOfGuest: props.numberOfGuest,
            //vehicle: props.parameters.vehicle[0].id,
            status: "pending",
            dateAddedToCart: props.parameters.dateAddedToCart,
            user: props.userId,
            refNumber: refNumber,
            //creator: props.parameters.creator.id,
            cartId: props.parameters.id,
            orderNumber: orderNumber,
         
            bookedBy: props.userId,
            ontransitSecurityService:props.ontransitSecurityService,
            onsiteSecurityService:props.onsiteSecurityService,
            carService:props.carService,
            numberOfGuest:props.numberOfGuest
  
          }

          
          
      
          if (data) {
            const createForm = async () => {
              api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
              const response = await api.post(`/orders`, data);
      
              if (response.data.status === "success") {
                dispatch({
                  type: CREATE_ORDER,
                  payload: response.data.data.data,
                });
      
                // props.handleSuccessfulCreateSnackbar(
                //   //`${response.data.data.data.orderNumber} Order is successfully submitted!!!`
                //   "We are processing your invoice. You will get it as soon as possible"
                // );
                props.renderCheckoutUpdate(props.cartId);
                props.handleDialogOpenStatus();
                setLoading(false);
              } else {
                props.handleFailedSnackbar(
                  "Something went wrong, please try again!!!"
                );
                return
              }
            };
            createForm().catch((err) => {
              //props.handleFailedSnackbar("Something went wrong, please try again!!!");
              //console.log("err:", err.message);
              //return
            });
          } else {
            //props.handleFailedSnackbar("Something went wrong, please try again!!!");
          }
          //remove item from cart
          
          const createForm = async () => {
                  api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
                  await api.delete(`/carts/${props.cartId}`);
                  dispatch({
                    type: DELETE_CART,
                    //payload: response2.data.data.data,
                  });
                };
                createForm().catch((err) => {
                  props.handleFailedSnackbar();
                  console.log("err:", err.message);
                });
            
              props.handleSuccessfulCreateSnackbar(
                "We are processing your invoice. You will get it as soon as possible"
              );
              history.push("/thankyou");
        }

       
  }

  

  

  return (
    <>
     
      <Box style={{marginLeft:30}}>
      <Field
        label=""
        id="name"
        name="name"
        type="text"
        helperText="Enter Your Name"
        component={renderSingleLineField}
        
      />

      <Field
        label=""
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        helperText="Enter Your WhatsApp Number"
        component={renderSingleLineField}
        
      />
      <Field
        label=""
        id="emailAddress"
        name="emailAddress"
        type="text"
        helperText="Enter Your Email Address"
        component={renderSingleLineField}
        
      />
      <Field
        label=""
        id="businessName"
        name="businessName"
        type="text"
        helperText="Enter Your Business Name(Optional)"
        component={renderSingleLineField}
        
      />
      <Typography style={{fontSize:12, color:"red", marginTop:15}}>The Invoice will be sent to these contact details</Typography>
      </Box>

      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={props.handleSubmit(onInvoiceSubmitSubmit)}
      >
        {loading ? (
          <CircularProgress size={30} color="inherit" />
        ) : (
          buttonRequestAnInvoiceContent()
        )}
      </Button>

      {/* {isOnlinePayment &&
        renderOnlinePayment(customerEmail, amountForPayment, orderNumber)} */}
    </>
  );
}

export default reduxForm({
  form: "checkoutActionPage",
})(CheckoutActionPage);
