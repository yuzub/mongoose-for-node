var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  return standupCtrl.list(req, res);
});

router.post('/', function(req, res) {
  return standupCtrl.filterByMember(req, res);
});

/* GET newnote page. */
router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

/* POST newnote page. */
router.post('/newnote', function(req, res) {
  return standupCtrl.create(req, res);
});

module.exports = router;
