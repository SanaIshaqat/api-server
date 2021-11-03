'use strict';

function validator(req, res, next) {
      if (req.query.name) {       
        next();
      } else {
        next('An error Happened!');
      }
    }
    module.exports = validator;