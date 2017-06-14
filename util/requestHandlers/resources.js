const helper = require("../helpers/resources.js");

exports.resources = {
  // retrieveResources: (req, res) => {
  //   helper
  //     .retrieveResource(req, () => {
  //       res.end(JSON.stringify(res.body));
  //     })
  //     .then(resource => {
  //       res.status(200).send("resource retrieved");
  //     })
  //     .catch(err => {
  //       res.status(404).send(err, "error retrieving resource");
  //     });
  // },
  createNewResources: (req, res, isSeed) => {
    helper.addResource(req, result => {
      if (typeof isSeed === "function") {
        res.status(200).send(result);
        res.end();
      } else {
        console.log("seed resource added");
        res.end();
      }
    });
  }
  // updateResources: (req, res) => {
  //   helper
  //     .updateResource(req.body, () => {
  //       res.end(JSON.stringify(res.body));
  //     })
  //     .then(resource => {
  //       res.status(200).send("resource updated");
  //     })
  //     .catch(err => {
  //       res.status(404).send(err, "error on updating resource");
  //     });
  // },
  // deleteResources: (req, res) => {}
};
