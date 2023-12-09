// AlertDialog.jsx
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import './AlertDialog.css'; // Import the CSS file

export default function AlertDialog({header='Warning',message,open,setOpen,oneBtn=true , route}) {

    const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate(route)
    setOpen(false);

  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="dialog-title">
          <div className="icon-container">
            <ErrorOutlineOutlinedIcon className="error-icon" />
          </div>
        </DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText id="alert-dialog-description" className="content-text">
            <h3 className="warning-title">{header} !</h3>
            <p className="warning-message">
                {message}
            </p>
           {oneBtn ? <button className="ok-button" onClick={handleClose}>
              OK
            </button>: <div>
            <button className="ok-button" onClick={handleNavigate}>
              Ok
            </button>
            <button className="ok-button" onClick={handleClose} style={{marginLeft:'10px'}}>
              Close
            </button>
                </div>}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
