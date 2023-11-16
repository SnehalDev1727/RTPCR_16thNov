import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavbarTop from "./NavbarTop"
import MenuAppBar from './MenuAppBar';
import Repeatrun from './Repeatrun';
import Analyze from './Anlayze';
// import Documentation from './Documentation';
// import { Button } from "reactstrap";
// import axios from "axios"
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useHistory, useParams } from "react-router-dom";
// import Navbar from "./Navbar/Navbar"
// import SelectBaseDataTypes from './SystemConfiguration/SelectBaseDataTypes';
// import AddImplementationDataType from './SystemConfiguration/AddImplementationDataType';
// import ShowImplementation from './SystemConfiguration/ShowImplementation';
// import AddSenderReceiverInterface from './SystemConfiguration/AddSenderReceiverInterface';
// import AddClientServerInterface from './SystemConfiguration/AddClientServerInterface';
// import ShowInterface from './SystemConfiguration/ShowInterface';


const drawerWidth = 245;


export default function SystemConfiguration() {
  const [menus, setMenus] = React.useState()
  // toast.configure()
  const token = localStorage.getItem("bookwormJWT");
  // const navigate = useHistory()
  // const { id } = useParams()

  // const downloadFIle = async () => {
  //   try {
  //     await axios
  //       .post(`http://localhost:3000/api/xml/arxml`, {
  //         header: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         projectId: id,
  //       })
  //       .then(async (response) => {

  //         const fileName = "download";
  //         const data = response.data;
  //         const blob = new Blob([data]);
  //         const href = await URL.createObjectURL(blob);
  //         const link = document.createElement("a");
  //         link.href = href;
  //         link.download = fileName + ".arxml";
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link);
  //       });
  //     toast.success("File Downloaded", {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 1000,
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
    <NavbarTop/>

      <Box sx={{ display: 'flex', background: 'white' }}
      >

        {/* <CssBaseline  style={{background:'white'}}/> */}
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, marginTop: '66px', backgroundColor: 'white' }}
        >
          <Toolbar style={{background:'white'}}>
            <div
              style={{
                display: "inline",
                float: "right",
                // border: '1px solid',
                width: "100%",
                padding: "5px",
              }}
            >
              {/* <Button
                style={{
                  padding: "8px",
                  float: "right",
                  margin: "2px",
                  width: "130px",
                  background:'blue',
                  border:'1px solid',
                  borderRadius:'3px',
                  fontWeight:'bolder'
                  ,color:'white'
                }}
              >
                Save Changes
              </Button>
              <Button
                // onClick={() => downloadFIle()}
                style={{
                  padding: "8px",
                  margin: "2px",
                  float: "right",
                  width: "130px",
                  background:'blue',
                  border:'1px solid',
                  borderRadius:'3px',
                  fontWeight:'bolder'
                  ,color:'white'

                }}
              >
                Download XML
              </Button> */}
            </div> 
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{

            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              marginTop: '66px',
              width: drawerWidth,
              boxSizing: 'border-box',
              position:'fixed'
            },
          }}

          variant="permanent"
          anchor="left"
        >
          <Toolbar 
          // style={{width:'250px',background:'red',textAlign:'center'}}
          >
            <ListItemButton
            style={{textAlign:'center',position:'fixed',margin:0,padding:0,}}
              navigate to="/homepage"
            >back to home</ListItemButton>
          </Toolbar>
          <Divider />
          <List style={{ display: 'flex', flexDirection: 'column', }}>
            {
              ['Run Setup', 'Repeat Run', 'Analyze', 'Insert Step', 'Insert Gradient', 'Insert GoTo', 'Insert Melt Curve', 'Add Plate Read to Step', 'Step Options', 'Delete Step'].map((menus, i) => {
                return (
                  < ListItem key={i} disablePadding  style={{height:'10vh',margin:'0px',padding:0}} >
                    <ListItemButton 
                    style={{margin:'2px',padding:'2px',}}
                      onClick={() => {
                        if (menus === "Run Setup") {
                          setMenus('Run Setup')
                        }
                        else if (menus === "Repeat Run") {
                          setMenus('Repeat Run')
                        } else if (menus === "Analyze") {
                          setMenus('Analyze')
                        } 
                        // else if (menus === "Add Sender Receiver Interface") {
                        //   setMenus('Add Sender Receiver Interface')
                        // } else if (menus === "Add Client Server Interface") {
                        //   setMenus('Add Client Server Interface')
                        // } else if (menus === "Show Interface") {
                        //   setMenus('Show Interface')
                        // }
                        else {
                          setMenus('')
                        }
                      }
                      }

                    >
                      {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                      <ListItemText primary={menus} />
                    </ListItemButton>
                  </ListItem>
                )
              })
            }
          </List>
          <Divider />

        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />

          {(() => {
            if (menus === 'Run Setup') {
              return (
                <MenuAppBar/>
              )
            }
            else if (menus === 'Repeat Run') {
              return (
                // <AddImplementationDataType />
                <Repeatrun/>
              )
            } else if (menus === 'Analyze') {
              return (
                // <ShowImplementation />
                <Analyze/>
              )
            }
            //  else if (menus === 'Add Sender Receiver Interface') {
            //   return (
            //     // <AddSenderReceiverInterface />
            //   )
            // } else if (menus === 'Add Client Server Interface') {
            //   return (
            //     // <AddClientServerInterface />
            //   )
            // } else if (menus === 'Show Interface') {
            //   return (
            //     <ShowInterface />
            //   )
            // }

            return null;
          })()}
        </Box>
      </Box>
    </>
  );
}

