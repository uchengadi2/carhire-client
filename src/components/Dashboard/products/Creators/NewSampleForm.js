import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import api from "./../../../../apis/local";
import { CREATE_SAMPLE } from "../../../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 100,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  cancelButton: {
    submitButton: {
      borderRadius: 10,
      height: 40,
      width: 100,
      marginLeft: 5,
      marginTop: 40,
      color: "black",
      backgroundColor: theme.palette.common.grey,
      "&:hover": {
        backgroundColor: theme.palette.common.grey,
      },
    },
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


const renderImageCoverField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  ...custom
}) => {
  delete input.value;
  return (
    <TextField
      id={input.name}
      variant="outlined"
      type={type}
      name={input.name}
      fullWidth
      style={{ marginTop: 20 }}
      helperText={helperText}
      onChange={input.onChange}
    />
  );
};

const renderExtraImagesField = ({
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
      helperText={helperText}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const MAX_COUNT = 20;



function NewSampleForm(props) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("visible");
  const [sampleType, setSampleType] = useState("economy");
  const [specialFeature, setSpecialFeature] = useState("none");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [state, setState] = useState();
  const [vehicleClass, setVehicleClass] = useState(null);
  const [categorySlug, setCategorySlug] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const dispatch = useDispatch();


  useEffect(() => {
      const fetchData = async () => {
        let allData = [];
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.get(`/states`, {
          //params: { country: country },
        });
        const workingData = response.data.data.data;
        workingData.map((state) => {
          allData.push({ id: state._id, name: state.name });
        });
        setStateList(allData);
      };
  
      //call the function
  
      fetchData().catch(console.error);
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        let allData = [];
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.get(`/categories`,{
          params:{
            slug:"3starspluto-transports"
          }});
        const items = response.data.data.data;
        
  
        if (items.length > 0) {
          setCategoryId(items[0].id);
        }
      };
  
      //call the function
  
      fetchData().catch(console.error);
    }, [props.token]);

    

  const buttonContent = () => {
    return <React.Fragment> Submit</React.Fragment>;
  };

  const handleStatusChange =(e)=>{
    setStatus(e.target.value)
  }
  const handleSampleTypeChange =(e)=>{
    setSampleType(e.target.value)
  }
  const handleSpecialFeatureChange =(e)=>{
    setSpecialFeature(e.target.value)
  }

  const handleStateChange = (event) => {
    setState(event.target.value);    
  };


   const handleVehicleClassChange = (event) => { 
    setVehicleClass(event.target.value);
  };


  //get the state list
    const renderStateList = () => {
      return stateList.map((item) => {
        return (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        );
      });
    };


  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };


  

  const renderStatusField = ({
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
            labelId="status"
            id="status"
            value={status}
            onChange={handleStatusChange}
            //label="Display On Store?"
            style={{width:300, marginTop: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value={"visible"}>Visible</MenuItem>
            <MenuItem value={"invisible"}>Not Visible</MenuItem>
            
          </Select>
          <FormHelperText>Make vehicle visible on platform?</FormHelperText>
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
            label="State"
            style={{ marginTop: 20, width: 300, height: 38 }}
          >
            {renderStateList()}
          </Select>
          <FormHelperText>
            Select Vehicle located
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVehicleClassField = ({
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
              labelId="vehicleClass"
              id="vehicleClass"
              value={vehicleClass}
              onChange={handleVehicleClassChange}
              //label="Display On Store?"
              style={{width:300, marginTop: 10, height: 38 }}
              //{...input}
            >
              <MenuItem value={"economy"}>Economy</MenuItem>
              <MenuItem value={"business"}>Business</MenuItem>
              <MenuItem value={"luxury"}>Luxury</MenuItem>
              <MenuItem value={"security-van"}>Security Van</MenuItem>
              <MenuItem value={"buses"}>Buses</MenuItem>
              
            </Select>
            <FormHelperText>Vehicle Class</FormHelperText>
          </FormControl>
        </Box>
      );
    };


    const renderVehicleTypeField = ({
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
              labelId="sampleType"
              id="sampleType"
              value={sampleType}
              onChange={handleSampleTypeChange}
              //label="Display On Store?"
              style={{width:300, marginTop: 10, height: 38 }}
              //{...input}
            >
              <MenuItem value={"hatchback"}>Hatchback</MenuItem>
              <MenuItem value={"sedan"}>Sedan</MenuItem>
              <MenuItem value={"suv"}>SUV</MenuItem>
              <MenuItem value={"pickup"}>Pick Up</MenuItem>
              <MenuItem value={"buses"}>Buses</MenuItem>
              <MenuItem value={"truck"}>Truck</MenuItem>
              <MenuItem value={"van"}>Van</MenuItem>
                        
              
            </Select>
            <FormHelperText>Vehicle Type</FormHelperText>
          </FormControl>
        </Box>
      );
    };

    const renderExtraFeatureField = ({
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
              labelId="specialFeature"
              id="specialFeature"
              value={specialFeature}
              onChange={handleSpecialFeatureChange}
              //label="Display On Store?"
              style={{width:300, marginTop: 10, height: 38 }}
              //{...input}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"bullet-proof"}>Bullet Proof</MenuItem>
              <MenuItem value={"fire-proof"}>Fire Proof</MenuItem>
              <MenuItem value={"water-proof"}>Water Proof</MenuItem>
              <MenuItem value={"bomb-proof"}>Bomb Proof</MenuItem>
              
            </Select>
            <FormHelperText>Vehicle Special Feature</FormHelperText>
          </FormControl>
        </Box>
      );
    };


  const onSubmit = (formValues) => {
    setLoading(true);

    if (
      !formValues["vehicleMake"] ||
      formValues["vehicleMake"].replace(/\s/g, "").length === 0
    ) {
      props.handleFailedSnackbar("The Vehicle Make field cannot be empty");
      setLoading(false);
      return;
    }
    if (
      !formValues["vehicleModel"] ||
      formValues["vehicleModel"].replace(/\s/g, "").length === 0
    ) {
      props.handleFailedSnackbar("The Vehicle Model field cannot be empty");
      setLoading(false);
      return;
    }

    const slug = `${formValues["vehicleMake"].replace(/\s/g, '-').toLowerCase()}-${Math.floor(Math.random() * 100000000)}`;

    const Str = require("@supercharge/strings");

    const form = new FormData();
    form.append("youtubeId", formValues.youtubeId);
    form.append("sampleType", sampleType);
    form.append("specialFeature", specialFeature);
    form.append("location", state);
    form.append("driverDetails", formValues.driverDetails);
    form.append("vehicleDetails", formValues.vehicleDetails);
    form.append("vehicleDescription", formValues.vehicleDescription);
    form.append("slug", slug);
    form.append("status", status);
    form.append("isAllowedOnThePlatform", false);
    form.append("creator", props.creatorId);
    form.append("createdBy", props.userId);

    form.append("maximumOccupants", formValues.maximumOccupants);
    form.append("vehicleMake", formValues.vehicleMake);
    form.append("vehicleModel", formValues.vehicleModel);
    form.append("vehicleClass", vehicleClass);
    form.append("category", categoryId);

    

    if (!formValues["refNumber"]) {
        const refNumber =
          "VEHICLE" + "-" + Math.floor(Math.random() * 100000000) + "-" + "PLUTO";
  
        form.append("refNumber", refNumber);
      } else {
        form.append("refNumber", formValues.refNumber);
      }
      
      if (formValues.image) {
        form.append("image", formValues.image[0]);
      }

      for (let i = 0; i < uploadedFiles.length; i++) {
      form.append(`images`, uploadedFiles[i]);
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/samples`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_SAMPLE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `This new Vehicle with ${response.data.data.data.refNumber} Reference Number  is added successfully!!!`
          );
          props.renderCategoryUpdateCounter();
          props.handleDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <form id="newSampleForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 300,
          //height: 430,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          container
          style={{ marginTop: 1, marginBottom: 2 }}
          justifyContent="center"
        >
          <CancelRoundedIcon
            style={{
              marginLeft: 300,
              fontSize: 30,
              marginTop: "-10px",
              cursor: "pointer",
            }}
            onClick={() => [props.handleDialogOpenStatus()]}
          />
        </Grid>
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "grey", fontSize: "1.2em" }}
            component="legend"
          >
            Add Vehicle
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="sampleType"
          name="sampleType"
          type="text"
          component={renderVehicleTypeField}
        />
         <Field
          label=""
          id="vehicleClass"
          name="vehicleClass"
          type="text"
          component={renderVehicleClassField}
        />
        <Field
          label=""
          id="vehicleMake"
          name="vehicleMake"
          type="text"
          helperText="Vehicle Make"
          style={{ marginTop: 10 }}
          component={renderSingleLineField}
        />
        <Field
          label=""
          id="vehicleModel"
          name="vehicleModel"
          type="text"
          helperText="Vehicle Model"
          component={renderSingleLineField}
          style={{ marginTop: 10 }}
        />
       <Field
          label=""
          id="maximumOccupants"
          name="maximumOccupants"
          type="number"
          helperText="Maximum Number of Occupants"
          component={renderSingleLineField}
          style={{ marginTop: 10 }}
        />
        
        <Field
          label=""
          id="specialFeature"
          name="specialFeature"
          type="text"
          component={renderExtraFeatureField}
        />

        <Field
          label=""
          id="vehicleDetails"
          name="vehicleDetails"
          type="text"
          helperText="Vehicle Details"
          rows={5}
          component={renderMultiLineField}

        />
        <Field
          label=""
          id="vehicleDescription"
          name="vehicleDescription"
          type="text"
          helperText="Describe the vehicle"
          rows={5}
          component={renderMultiLineField}

        />
        <Field
          label=""
          id="driverDetails"
          name="driverDetails"
          type="text"
          helperText="Vehicle Driver Details"
          rows={5}
          component={renderMultiLineField}

        />
        <Field
          label=""
          id="state"
          name="state"
          type="text"
          component={renderStateField}
        />
        <Field
          label=""
          id="status"
          name="status"
          type="text"
          component={renderStatusField}
        />
         <Grid item container style={{ marginTop: 20 }}>
                    <FormLabel style={{ color: "blue" }} component="legend">
                      Vehicle images
                    </FormLabel>
                  </Grid>
          <Field
              //label="Upload Course Thumbnail (jpg, jpeg or png formats)"
               name="image"
               type="file"
               accept="image/*"
               helperText="Upload Vehicle Cover Image (jpg, jpeg, webp or png formats)"
               component={renderImageCoverField}
          />
           <Grid item>
             <Field
                      //label="Upload Product Images (jpg, jpeg or png formats)"
                      id="images"
                      name="images"
                      type="file"
                      multiple
                      accept="image/*"
                      helperText="Upload Vehicle Images in different views (jpg, jpeg, webp or png formats)"
                      onChange={handleFileEvent}
                      component={renderExtraImagesField}
                      style={{ marginTop: 20 }}
                      disabled={fileLimit}
                    />
                    {uploadedFiles.map((file) => [<br />, file.name])}
                  </Grid>
        
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
         {/* <Grid
                        item
                        container
                        style={{ width: "100%", marginLeft: 2,marginTop:10, fontSize: 10 }}
                      >
                        <Button
                          variant="text"
                          onClick={() => [
                            props.handleYoutubeOpen(),
                            //history.push("/"),
                          ]}
                        >
                          Want to know how to retrieve Youtube ID? Click Here
                        </Button>
                      </Grid> */}
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "newSampleForm",
})(NewSampleForm);
