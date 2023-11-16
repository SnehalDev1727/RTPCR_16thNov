import React from 'react';
import './Anlayze.css'; // Import your CSS file with styles
import Button from '@mui/material/Button';

function App() {
    return (
        <div className="container">
            <div className="column1">
                <div style={{ textAlign: "left", color:"blue" }}>Sartup wizard</div>

            </div>
            <div className="row">
                <div className="col">Select Instrument</div>

                <div className="col">
                    <select style={{ width: "30%", height: "100%" }} name="cars" id="cars">
                        <option value="CFX96">CFX96</option>
                        <option value="CFX98">CFX98</option>
                        <option value="CFX56">CFX56</option>
                        <option value="CFX36">CFX36</option>
                    </select>
                </div>
            </div>
            <div className="column">
                <div>Select Run Type</div>

            </div>
            <div className="row">
                <div className="col">
                    <Button style={{ margin: "0 auto", fontSize: "12px", textTransform: "capitalize", }} variant="contained">User defined</Button>
                </div>
                <div className="col">
                    <Button style={{ margin: "0 auto", fontSize: "12px", textTransform: "capitalize",}} variant="contained">Prime PCR</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
