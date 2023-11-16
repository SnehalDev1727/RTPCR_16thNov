import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const columnStyle1 = {
  backgroundColor: '#aaa',
  width: '45%',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
//   border: '1px solid #ccc',
};


const columnStyle2 = {
//   backgroundColor: '#bbb',
  width: '45%',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
//   border: '1px solid #ccc',
};
const columnStyle3 = {
//   backgroundColor: '#bbb',
  width: '45%',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
//   border: '1px solid #ccc',
};

export default function Repeatrun() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sartup Wizard
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Startup Wizard
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>


          <div style={{ display: "flex", flexDirection: "row" }}>
           

            <div style={columnStyle2}>
              <label for="cars">Select Instrument</label>

              {/* <div style={{top:"10%"}}> */}
              <Button style={{margin:"0 auto", width:"70%", height:"50%",fontSize: "12px", textTransform:"capitalize", top:"26px"}} variant="contained">User defined</Button>
             {/* </div> */}
            </div>
            
            <div style={columnStyle3}>
              <select style={{ width: "90%", height: "50%" }} name="cars" id="cars">
                <option value="CFX96">CFX96</option>
                <option value="CFX98">CFX98</option>
                <option value="CFX56">CFX56</option>
                <option value="CFX36">CFX36</option>
              </select>
             
             
              <Button  style={{margin:"0 auto", width:"70%", height:"50%",fontSize: "12px", textTransform:"capitalize", top:"19px"}}variant="contained">Prime PCR</Button>
            </div>

          </div>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
