'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.grbkPOST = function grbkPOST (req, res, next, body) {
  Default.grbkPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
