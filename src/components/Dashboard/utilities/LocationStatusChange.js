import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import api from "./../../../apis/local";
import { DELETE_LOCATION } from "../../../actions/types";

function LocationStatusChange(props) {
  const { params, token, userId } = props;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleStatusChange = () => {
    setLoading(true);

    const data = {
        status: params[0].status === "active" ? "inactive" : "active",
        statusChangedBy: userId,
        dataOfLastStatusChange: new Date().toISOString(),
        
    };

    if (params[0].id) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.patch(`/locations/${params[0].id}`,data);

        if (response.data.status === "success") {
          props.handleSuccessfulStatusSnackbar(
            `${params[0].name} Location is successfully made ${params[0].status==='active'?"inactive":"active"} !!!`
          );
          props.handleMarkDialogOpenStatus();
          props.renderLocationStatusUpdateCounter();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      editForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  const handleNoStatusChange = () => {
    props.handleMarkDialogOpenStatus();
  };

  return (
    <>
      {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}

      <Alert
        severity="warning"
        action={[
          <Button
            variant="contained"
            color="inherit"
            size="small"
            onClick={handleStatusChange}
          >
            Yes
          </Button>,
          <Button
            variant="contained"
            color="inherit"
            size="small"
            onClick={handleNoStatusChange}
            style={{ marginLeft: 10 }}
          >
            No
          </Button>,
        ]}
      >
        <AlertTitle>Change "{params[0].name}" Location Status?</AlertTitle>
        Are you sure you want to change the status of this location?
      </Alert>
    </>
  );
}

export default LocationStatusChange;
