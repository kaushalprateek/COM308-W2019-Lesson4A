let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a ref to a database schema

let contact = require("../models/contact");

router.get("/", (req, res, next) => {
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(contactList);

      res.render("contacts/index.ejs", {
        title: "Favourite things",
        contactList: contactList
      });
    }
  });
});

module.exports = router;
