'use strict';


// 
var express = require('express');
var route = express.Router();
var mongoose = require('mongoose');

// 
var ctr = {
	common: require('../controller/common')
}




route.get('/', ctr.common.homepage);













// 
module.exports = route;