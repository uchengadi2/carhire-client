import React, { useEffect, useState } from "react";
import useToken from "../../../custom-hooks/useToken";
import useUserId from "../../../custom-hooks/useUserId";
import Stack from "@mui/material/Stack";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import api from "./../../../apis/local";
import AddLocationForm from "./AddLocationForm";
import LocationDeleteForm from "./LocationDeleteForm";
import LocationEditForm from "./LocationEditForm";
import LocationStatusChange from "./LocationStatusChange";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Locations(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [updateLocationCounter, setUpdateLocationCounter] = useState(false);
  const [updateEdittedLocationCounter, setUpdateEdittedLocationCounter] =
    useState(false);
  const [updateDeletedLocationCounter, setUpdateDeletedLocationCounter] =
    useState(false);
  const [updateLocationStatusCounter, setUpdateLocationStatusCounter] =
    useState(false);  

  const { token, setToken } = useToken();
  const { userId, setUserId } = useUserId();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [markOpen, setMarkOpen] = useState(false);

  const [locationList, setLocationList] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState();
  const [rowSelected, setRowSelected] = useState(false);
  const [rowNumber, setRowNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/locations`);
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
          status: location.status,
        });
      });
      setLocationList(allData);
      setLoading(false);
    };

    //call the function

    fetchData().catch(console.error);
  }, [
    updateLocationCounter,
    updateEdittedLocationCounter,
    updateDeletedLocationCounter,
    updateLocationStatusCounter
  ]);

  

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const renderLocationUpdateCounter = () => {
    setUpdateLocationCounter((prevState) => !prevState);
  };

  const renderLocationEdittedUpdateCounter = () => {
    setUpdateEdittedLocationCounter((prevState) => !prevState);
  };

  const renderLocationDeletedUpdateCounter = () => {
    setUpdateDeletedLocationCounter((prevState) => !prevState);
  };

const renderLocationStatusUpdateCounter = () => {
    setUpdateLocationStatusCounter((prevState) => !prevState);
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    //setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: message,
      //backgroundColor: "#4BB543",
      backgroundColor: "#FF731D",
    });
  };
  const handleSuccessfulEditSnackbar = (message) => {
    //setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: message,
      //backgroundColor: "#4BB543",
      backgroundColor: "#FF731D",
    });
  };

  const handleSuccessfulDeletedItemSnackbar = (message) => {
    //setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: message,
      //backgroundColor: "#4BB543",
      backgroundColor: "#FF731D",
    });
  };

  const handleSuccessfulStatusSnackbar = (message) => {
    //setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: message,
      //backgroundColor: "#4BB543",
      backgroundColor: "#FF731D",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#FF3232",
    });
    //setBecomePartnerOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddOpen = () => {
    setOpen(true);
  };

  const handleDialogOpenStatus = () => {
    setOpen(false);
  };
  const handleMarkDialogOpenStatus = () => {
    setMarkOpen(false);
  }

  const handleEditDialogOpenStatus = () => {
    setEditOpen(false);
  };

  const handleDeleteDialogOpenStatus = () => {
    setDeleteOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleMarkOpen = () => {
    setMarkOpen(true);  
  }

  const onRowsSelectionHandler = (ids, rows) => {
    const selectedIDs = new Set(ids);
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setSelectedRows(selectedRowsData);
    setRowNumber(selectedIDs.size);
    selectedIDs.forEach(function (value) {
      setSelectedRowId(value);
    });
    if (selectedIDs.size === 1) {
      setRowSelected(true);
    } else {
      setRowSelected(false);
    }
  };

  const renderDataGrid = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      // { field: "id", headerName: "ID", width: 100 },
      {
        field: "numbering",
        headerName: "S/n",
        width: 100,
      },
      {
        field: "name",
        headerName: "Location Name",
        width: 250,

        //editable: true,
      },
      {
        field: "status",
        headerName: "Location Status",
        width: 150,

        //editable: true,
      },
      {
        field: "code",
        headerName: "Location Code",
        width: 150,
        //editable: true,
      },
      {
        field: "locationType",
        headerName: "Location Type",
        //type: "number",
        width: 200,
        //editable: true,
      },
      {
        field: "town",
        headerName: "Town",
        sortable: false,
        width: 200,
        // valueGetter: (params) =>
        //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      },
      {
        field: "address",
        headerName: "Address",
        sortable: false,
        width: 200,
      },
      {
        field: "country",
        headerName: "Country",
        sortable: false,
        width: 200,
      },
      {
        field: "state",
        headerName: "State/Region",
        sortable: false,
        width: 200,
      },
      {
        field: "city",
        headerName: "City",
        sortable: false,
        width: 200,
      },
    ];

    locationList.map((location, index) => {
      let row = {
        numbering: ++counter,
        id: location.id,
        code: location.code,
        locationType: location.locationType,
        name: location.name
          ? location.name.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",
        town: location.town
          ? location.town.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",
        address: location.address
          ? location.address.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",
        city: location.city[0].name
          ? location.city[0].name.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",
        country: location.city[0].country[0].name
          ? location.city[0].country[0].name.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",
        state: location.city[0].state[0].name
          ? location.city[0].state[0].name.replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
          : "",

         contactPerson: location.contactPerson,
        contactPersonEmail: location.contactPersonEmail,
        contactPhoneNumber: location.contactPhoneNumber,
        countryId: location.country,
        stateId: location.state,
        cityId: location.city[0].id,
        description: location.description,
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
          status: location.status,
      };
      rows.push(row);
    });

    return (
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids, rows)}
        sx={{
          boxShadow: 3,
          border: 3,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} direction="column">
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={7.3}>
              {/* <Item>xs=8</Item> */}
              <Typography variant="h4">Locations</Typography>
            </Grid>
            <Grid item xs={4.7}>
              <div>
                <Stack direction="row" spacing={1.5}>
                  <Button variant="contained" onClick={handleAddOpen}>
                    Add
                  </Button>
                  <Dialog
                    //style={{ zIndex: 1302 }}
                    fullScreen={matchesXS}
                    open={open}
                    // onClose={() => [setOpen(false), history.push("/utilities/countries")]}
                    onClose={() => [setOpen(false)]}
                  >
                    <DialogContent>
                      <AddLocationForm
                        token={token}
                        userId={userId}
                        handleDialogOpenStatus={handleDialogOpenStatus}
                        handleSuccessfulCreateSnackbar={
                          handleSuccessfulCreateSnackbar
                        }
                        handleFailedSnackbar={handleFailedSnackbar}
                        renderLocationUpdateCounter={
                          renderLocationUpdateCounter
                        }
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="contained" onClick={handleEditOpen} disabled={rowSelected ? false : true}>
                    Edit
                  </Button>
                  <Dialog
                    //style={{ zIndex: 1302 }}
                    fullScreen={matchesXS}
                    open={editOpen}
                    // onClose={() => [setOpen(false), history.push("/utilities/countries")]}
                    onClose={() => [setEditOpen(false)]}
                  >
                    <DialogContent>
                      <LocationEditForm
                        token={token}
                        userId={userId}
                        params={selectedRows}
                        handleEditDialogOpenStatus={handleEditDialogOpenStatus}
                        handleSuccessfulEditSnackbar={
                          handleSuccessfulEditSnackbar
                        }
                        handleFailedSnackbar={handleFailedSnackbar}
                        renderLocationEdittedUpdateCounter={
                          renderLocationEdittedUpdateCounter
                        }
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="contained" onClick={handleDeleteOpen} disabled={rowSelected ? false : true}>
                    Delete
                  </Button>
                  <Dialog
                    //style={{ zIndex: 1302 }}
                    fullScreen={matchesXS}
                    open={deleteOpen}
                    // onClose={() => [setOpen(false), history.push("/utilities/countries")]}
                    onClose={() => [setDeleteOpen(false)]}
                  >
                    <DialogContent>
                      <LocationDeleteForm
                        token={token}
                        userId={userId}
                        params={selectedRows}
                        handleDeleteDialogOpenStatus={
                          handleDeleteDialogOpenStatus
                        }
                        handleSuccessfulDeletedItemSnackbar={
                          handleSuccessfulDeletedItemSnackbar
                        }
                        handleFailedSnackbar={handleFailedSnackbar}
                        renderLocationDeletedUpdateCounter={
                          renderLocationDeletedUpdateCounter
                        }
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="contained" onClick={handleMarkOpen} disabled={rowSelected ? false : true}>
                    {selectedRows[0]?.status === "active" ? "Mark Inactive" : "Mark Active"}
                  </Button>
                  <Dialog
                    //style={{ zIndex: 1302 }}
                    fullScreen={matchesXS}
                    open={markOpen}
                    // onClose={() => [setOpen(false), history.push("/utilities/countries")]}
                    onClose={() => [setMarkOpen(false)]}
                  >
                    <DialogContent>
                      <LocationStatusChange
                        token={token}
                        userId={userId}
                        params={selectedRows}
                        status={selectedRows[0]?.status}
                        handleMarkDialogOpenStatus={
                          handleMarkDialogOpenStatus
                        }
                        handleSuccessfulStatusSnackbar={
                          handleSuccessfulStatusSnackbar
                        }
                        handleFailedSnackbar={handleFailedSnackbar}
                        renderLocationStatusUpdateCounter={
                          renderLocationStatusUpdateCounter
                        }
                      />
                    </DialogContent>
                  </Dialog>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ height: 700, width: "100%" }}>
            {loading && <CircularProgress style={{ marginLeft: "50%" }} />}
            {!loading && renderDataGrid()}
          </Box>
        </Grid>
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
      </Grid>
    </Box>
  );
}

export default Locations;
