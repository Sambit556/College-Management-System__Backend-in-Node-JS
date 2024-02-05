module.exports = app => {
    //  require("./user.route")(app);
     require("./auth.route")(app);
     require("./sudent.route")(app);
     require("./professor.route")(app);
     require("./feedback.route")(app);
     require("./gallary.route")(app);
     require("./notice.route")(app);

     
 }