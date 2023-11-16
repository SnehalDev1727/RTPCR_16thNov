"use strict";

const { thermistorMux } = require("../../conf/batch15_hardware_conf");

/*
  The coefficients vary according to temperature ranges.
*/
class PID {
  constructor (option, debug) {
    this.debug = debug;
    this.ranges = option;
    this.ranges.sort((a,b)=>{
      if (b.minValue == null) {
        return -1;
      }
      if (a.minValue == null) {
        return 11;
      }
      return b.minValue - a.minValue;
    });
    this.range = option[option.length - 1];
    this.kp = this.range.kp;
    this.ki = this.range.ki;
    this.kd = this.range.kd;
    this.value = 0.0;
    this.intervalSec = 1.0; // Default: 1sec
    this.setpoint = 0.0;
    
    this.p = 0.0;
    this.i = 0.0;
    this.d = 0.0;
    
    // Output limits
    this.lower = -1.0;
    this.upper = 1.0;
    
  }
  setOutputRange (lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }
  setSetpoint (setpoint) {
    this.setpoint = setpoint;
  }
  reset () {
    this.p = 0.0;
    this.i = 0.0;
    this.d = 0.0;
  }
  setInterval (intervalSec) {
    // TODO: error check (0 or negative)
    this.intervalSec = intervalSec;
  }
  setValue (value) {
    this.p = value - this.setpoint;
    if (this.p > this.upper || this.p < this.lower) {
      // Reset I if running in max power
      this.i = 0;
    }
    this.i += (value - this.setpoint) * this.intervalSec;
    this.d = (value - this.value) /  this.intervalSec;
    this.value = value;
  }
  getOutput () {
    let newRange = this.ranges.find((range)=>{return range.minValue == null || range.minValue < this.value});
    if (newRange != this.range) {
      this.range = newRange;
      this.kp = this.range.kp;
      this.ki = this.range.ki;
      this.kd = this.range.kd;
      if (this.debug) {
  
        console.log("PID Range switched.");
        console.log(newRange)
      }

    }
    let output = - (this.p * this.kp + this.i * this.ki + this.d * this.kd);
    output = Math.min(this.upper, Math.max(this.lower, output));
    return output;
  }
}

module.exports = PID;

