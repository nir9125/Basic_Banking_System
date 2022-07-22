const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require("mongoose");
const request = require("request");
const https = require("https");

// mongoose.connect("mongodb://localhost:27017/Journal", { useNewUrlParser: true, useUnifiedTopology: true, });
const dbUrl = process.env.DB_URL;
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true, }
mongoose.connect(dbUrl, connectionParams).then(() => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log(err);
})

const manager = "2v3h2g3v2hg3vh23v2h3v2h3v2hg3v2g3vh2"

const itemsSchmea = {
  name: String,
  lastTransfer: Number,
  active: { type: Boolean, default: false },
  allupdatedTime: { type: Date, default: Date.now },

};

const newitemSchmea = {
  name: String,
  left: Number,
  createdTime: { type: Date, default: Date.now },
  updatedTime: { type: Date, default: Date.now },
  email: {
    type: String,
  },
  mobileNo: Number,
  adhareNo: String,
  address: String,
  totalInfo: [{
    name: String,
    lastTransfer: Number,
    allupdatedTime: { type: Date, default: Date.now },
    sendFrom: { type: String, default: manager },
    addedORnot: { type: Boolean, default: true }
  }],
};
const managerdb = mongoose.model("managerdb", itemsSchmea);
const custumerdb = mongoose.model("custumerdb", newitemSchmea);
const man = new managerdb(
  {
    name: "Pradum kumar dubey",
    lastTransfer: 800000,
    active: true,
  });
const man1 = new managerdb(
  {
    name: "Rohan Singh",
    lastTransfer: 4000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man2 = new managerdb(
  {
    name: "rohit dubey ",
    lastTransfer: 4660,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man3 = new managerdb(
  {
    name: "Faran ansari ",
    lastTransfer: 4000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man4 = new managerdb(
  {
    name: "Shogi mitthal",
    lastTransfer: 3300,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man5 = new managerdb(
  {
    name: "Sahil Singh",
    lastTransfer: 6500,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man6 = new managerdb(
  {
    name: "Mohit Singh",
    lastTransfer: 6600,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  });
const man7 = new managerdb(
  {
    name: "Arjun Singh",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man8 = new managerdb(
  {
    name: "Joseph Wood",
    lastTransfer: 7000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man9 = new managerdb(
  {
    name: "Daniel Edwards",
    lastTransfer: 9000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man10 = new managerdb(
  {
    name: "David Brewer",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man11 = new managerdb(
  {
    name: "Robert Reyes",
    lastTransfer: 8000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man12 = new managerdb(
  {
    name: "Ruben Alvarez",
    lastTransfer: 9000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man13 = new managerdb(
  {
    name: "Tommy Alvarez",
    lastTransfer: 5000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man14 = new managerdb(
  {
    name: "Sara Jordan",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man15 = new managerdb(
  {
    name: "Nicole Hale",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man16 = new managerdb(
  {
    name: "Andrea Meza",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man17 = new managerdb(
  {
    name: "Kristy Allen",
    lastTransfer: 8000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man18 = new managerdb(
  {
    name: "Tara Wilcox",
    lastTransfer: 6000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man19 = new managerdb(
  {
    name: "Mitali Kadu",
    lastTransfer: 10000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const man20 = new managerdb(
  {
    name: "Shresth Thakur",
    lastTransfer: 11000,
    active: false,
    // allupdatedTime: { type: Date, default: Date.now },
  }
);
const clint1 = new custumerdb({
  name: "Rohan Singh",
  left: 4000,
  email: "Rohan2022@gmail.com",
  mobileNo: 987654321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: [{
    name: "Rohan Singh",
    lastTransfer: 3600,
    // allupdatedTime: { type: Date, default: Date.now },
  },
  {
    name: "Rohan Singh",
    lastTransfer: 400,
    // allupdatedTime: { type: Date, default: Date.now },
  }],
});
const clint2 = new custumerdb({
  name: "Rohit Dubey",
  left: 4660,
  email: "rohitodubey2022@gmail.com",
  mobileNo: 976431258,
  adhareNo: "ABCD1233",
  address: "new address",
  totalInfo: {
    name: "Rohit Dubey",
    lastTransfer: 4660,
    // allupdatedTime: { type: Date, default: Date.now },
  },
});
const clint3 = new custumerdb({
  name: "Faran Ansari",
  left: 4000,
  email: "faran2022@gmail.com",
  mobileNo: 15934687,
  adhareNo: "ABCD1244",
  address: "new address",
  totalInfo: {
    name: "Faran Ansari",
    lastTransfer: 4000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint4 = new custumerdb({
  name: "Shogi mitthal",
  left: 3300,
  email: "shogimitthal2022@gmail.com",
  mobileNo: 912345678,
  adhareNo: "ABCE1234",
  address: "new address",
  totalInfo: {
    name: "shogi mitthal",
    lastTransfer: 3300,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint5 = new custumerdb({
  name: "Sahil Singh",
  left: 6500,
  email: "sahilsingh2022@gmail.com",
  mobileNo: 987654321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: {
    name: "sahil Singh",
    lastTransfer: 6500,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint6 = new custumerdb({
  name: "Mohit Singh",
  left: 6600,
  email: "mohitSingh@gmail.com",
  mobileNo: 987654321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: {
    name: "mohit Singh",
    lastTransfer: 6600,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
// var myDate = new Date();
const clint7 = new custumerdb({
  name: "Arjun Singh",
  left: 6000,
  email: "arjunSingh@gmail.com",
  mobileNo: 987654321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: {
    name: "arjun Singh",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint8 = new custumerdb({
  name: "Joseph Wood",
  left: 7000,
  email: "josephwood@gmail.com",
  mobileNo: 935784368,
  adhareNo: "A5D6G8R6",
  address: "new address",
  totalInfo: {
    name: "Joseph Wood",
    lastTransfer: 7000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint9 = new custumerdb({
  name: "Daniel Edwards",
  left: 9000,
  email: "danieledwards@gmail.com",
  mobileNo: 987159321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: {
    name: "Daniel Edwards",
    lastTransfer: 9000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint10 = new custumerdb({
  name: "David Brewer",
  left: 6000,
  email: "davidbrewer@gmail.com",
  mobileNo: 963852741,
  adhareNo: "A1S5D6R9",
  address: "new address",
  totalInfo: {
    name: "David Brewer",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint11 = new custumerdb({
  name: "Robert Reyes",
  left: 8000,
  email: "robertreyes@gmail.com",
  mobileNo: 987654321,
  adhareNo: "ABCD1234",
  address: "new address",
  totalInfo: {
    name: "Robert Reyes",
    lastTransfer: 8000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint12 = new custumerdb({
  name: "Ruben Alvarez",
  left: 9000,
  email: "rubenalvarez@gmail.com",
  mobileNo: 987321654,
  adhareNo: "D4F5G6H2",
  address: "new address",
  totalInfo: {
    name: "Ruben Alvarez",
    lastTransfer: 9000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint13 = new custumerdb({
  name: "Tommy Alvarez",
  left: 5000,
  email: "tommyalvarez@gmail.com",
  mobileNo: 9874123651,
  adhareNo: "A7W8E9R6",
  address: "new address",
  totalInfo: {
    name: "Tommy Alvarez",
    lastTransfer: 5000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint14 = new custumerdb({
  name: "Sara Jordan",
  left: 6000,
  email: "sarajordan@gmail.com",
  mobileNo: 96543187,
  adhareNo: "S4D5F6G2",
  address: "new address",
  totalInfo: {
    name: "Sara Jordan",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint15 = new custumerdb({
  name: "Nicole Hale",
  left: 6000,
  email: "nicolehale@gmail.com",
  mobileNo: 95236874,
  adhareNo: "W7E8R9T4",
  address: "new address",
  totalInfo: {
    name: "Nicole Hale",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint16 = new custumerdb({
  name: "Andrea Meza",
  left: 6000,
  email: "andreameza@gmail.com",
  mobileNo: 965874123,
  adhareNo: "Z1X2C3V4",
  address: "new address",
  totalInfo: {
    name: "Andrea Meza",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint17 = new custumerdb({
  name: "Kristy Allen",
  left: 8000,
  email: "kristyallen@gmail.com",
  mobileNo: 951628473,
  adhareNo: "F4F5G5H6",
  address: "new address",
  totalInfo: {
    name: "Kristy Allen",
    lastTransfer: 8000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint18 = new custumerdb({
  name: "Tara Wilcox",
  left: 6000,
  email: "tarawilcox@gmail.com",
  mobileNo: 987654321,
  adhareNo: "A4S5D8R9",
  address: "new address",
  totalInfo: {
    name: "Tara Wilcox",
    lastTransfer: 6000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint19 = new custumerdb({
  name: "Mitali Kadu",
  left: 10000,
  email: "mitalikadu@gmail.com",
  mobileNo: 987365214,
  adhareNo: "M7I5U2R6",
  address: "new address",
  totalInfo: {
    name: "Mitali Kadu",
    lastTransfer: 10000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
const clint20 = new custumerdb({
  name: "Shresth Thakur",
  left: 11000,
  email: "shresththakur@gmail.com",
  mobileNo: 963214587,
  adhareNo: "D7R5G6V2",
  address: "new address",
  totalInfo: {
    name: "Shresth Thakur",
    lastTransfer: 11000,
    // allupdatedTime: { type: Date, default: Date.now },
  }
});
// man.save();
// man1.save();
// man2.save();
// man3.save();
// man4.save();
// man5.save();
// man6.save();
// man7.save();
// man8.save();
// man9.save();
// man10.save();
// man11.save();
// man12.save();
// man13.save();
// man14.save();
// man15.save();
// man16.save();
// man17.save();
// man18.save();
// man19.save();
// man20.save();
// clint1.save();
// clint2.save();
// clint3.save();
// clint4.save();
// clint5.save();
// clint6.save();
// clint7.save();
// clint8.save();
// clint9.save();
// clint10.save();
// clint11.save();
// clint12.save();
// clint13.save();
// clint14.save();
// clint15.save();
// clint16.save();
// clint17.save();
// clint18.save();
// clint19.save();
// clint20.save();


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  custumerdb.find({}, (arr, dataResult) => {
    res.render('home', { postdata: dataResult });
  })
});
app.get('/allcustumer', (req, res) => {
  custumerdb.find({}, (arr, dataResult) => {
    res.render('allcustumer', { postdata: dataResult });
  })
});


app.get('/post/:newPost', (req, res) => {
  var new_postNow = req.params.newPost
  custumerdb.find({}, null, { sort: { '_id': -1 } }, (arr, dataResult) => {
    if (arr) {
      console.log(arr);
    } else {
      res.render('post', { dataResult: dataResult, new_postNow: new_postNow });
    }
  })
});

app.get('/manager', (req, res) => {
  managerdb.find({}, null, { sort: { '_id': -1 } }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(dataResult);
      res.render('manager', { innerObject: dataResult });
    }
  })
});

app.get('/history', (req, res) => {
  var allForOne = [];
  custumerdb.find({}, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      dataResult.forEach((elemento) => {
        var innerObject = elemento.totalInfo
        // console.log(innerObject);
        innerObject.forEach((element) => {
          // console.log(element.name);
          var nieto = {
            name: element.name,
            lastTransfer: element.lastTransfer,
            allupdatedTime: element.allupdatedTime,
            sendFrom: element.sendFrom,
            addedORnot: element.addedORnot,
            _id: element._id,
          };
          // console.log(nieto);
          allForOne.push(nieto);
        })
      })
      allForOne.sort(function (a, b) {
        return - (a.allupdatedTime - b.allupdatedTime || a.name.localeCompare(b.name));
      });
      // console.log(allForOne);
      res.render('history', { dataResult: allForOne });
      // console.log(dataResult);
    }
  }).sort({ $natural: -1 })
});

app.get('/transferMoney/:newId', (req, res) => {
  var newIdNow = req.params.newId
  res.render('transferMoney', { newIdNow: newIdNow });
});

app.post('/transferMoney', (req, res) => {
  var curId = req.body.senderId;
  var currentName = req.body.holderName;
  var currentID = req.body.holderId;
  var currentMoney = req.body.holderMoney;
  // console.log("curId " + curId);
  const nowcurrentDate = new Date();
  custumerdb.find({ _id: currentID }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("dataResult" + dataResult);
      dataResult.forEach((element) => {
        var addedFund = element.left
        console.log("currentIDname" + element.name);
        var namenew = element.name
        // console.log("email " + element.email);
        var allMoney = String(Number(addedFund) + Number(currentMoney));
        custumerdb.findOneAndUpdate({ _id: currentID }, { left: allMoney, updatedTime: nowcurrentDate }, (err, dataResult) => {
          if (err) {
            console.log(err);
          } else {
            custumerdb.find({ _id: curId }, (err, data) => {
              if (err) {
                console.log(err);
              } else {
                // console.log("data" + data);
                data.forEach((elemento) => {
                  var newName = element.name
                  // console.log("curIdname"+elemento.name);
                  var newInfo = {
                    name: namenew,
                    lastTransfer: currentMoney,
                    allupdatedTime: nowcurrentDate,
                    sendFrom: curId,
                  }
                  custumerdb.findOneAndUpdate({ _id: currentID }, {
                    $push: { totalInfo: newInfo }
                  }, (arr, result) => {
                    if (arr) {
                      console.log(arr);
                    }
                  })
                })
              }
            })
          }
        })
        custumerdb.find({ _id: curId }, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            // console.log("data" + data);
            data.forEach((element) => {
              var addedFundnew = element.left
              var allnewMoney = Number(addedFundnew) - Number(currentMoney);
              custumerdb.findOneAndUpdate({ _id: curId }, { left: allnewMoney, updatedTime: nowcurrentDate }, (earr, newdataResult) => {
                if (earr) {
                  console.log(earr);
                } else {
                  // console.log("allnewMoney " + allnewMoney);
                  // console.log("currentMoney " + currentMoney);
                  // console.log("addedFund " + addedFundnew);
                  custumerdb.find({ _id: curId }, (err, data) => {
                    if (err) {
                      console.log(err);
                    } else {
                      data.forEach((element) => {
                        var newName1 = element.name

                        var newInfoCurr = {
                          name: newName1,
                          lastTransfer: currentMoney,
                          allupdatedTime: nowcurrentDate,
                          sendFrom: currentID,
                          addedORnot: false
                        }
                        custumerdb.findOneAndUpdate({ _id: curId }, {
                          $push: { totalInfo: newInfoCurr }
                        }, (arr, result) => {
                          if (arr) {
                            console.log(arr);
                          }
                        })
                      })
                    }
                  })
                  // console.log(dataResult);
                  // console.log("newdataResult " + newdataResult);
                  // console.log("left " + newdataResult.left);
                  res.redirect('/allcustumer');
                }
              })
              // }
            })
          }
        })

      })
    }
  }).sort({ $natural: -1 });
});




app.get('/about', (req, res) => {
  aboutdb.find({}, (arr, dataResult) => {
    res.render('about', { aboutContents: dataResult });
  })

});

// Transfer


app.get('/transfer', (req, res) => {
  custumerdb.find({}, (arr, dataResult) => {
    res.render('transfer', { custumerdb: dataResult });
  })
});

app.post('/transfer', (req, res) => {
  var currentName = req.body.targetName;
  var currentID = req.body.targetId;
  var currentMoney = req.body.targetMoney;
  const nowcurrentDate = new Date();
  custumerdb.find({ _id: currentID }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      dataResult.forEach((element) => {
        var addedFund = element.left
        var allMoney = String(Number(currentMoney) + Number(addedFund));
        custumerdb.findOneAndUpdate({ _id: currentID }, { left: allMoney, updatedTime: nowcurrentDate }, (err, dataResult) => {
          if (err) {
            console.log(err);
          } else {
            // console.log(dataResult.name);
            var newInfo = {
              name: dataResult.name,
              lastTransfer: currentMoney,
              allupdatedTime: nowcurrentDate
            };
            var manNewInfo = new managerdb({
              name: dataResult.name,
              lastTransfer: currentMoney,
              allupdatedTime: nowcurrentDate
            });
            custumerdb.findOneAndUpdate({ _id: currentID }, {
              $push: { totalInfo: newInfo }
            }, (arr, result) => {
              if (arr) {
                console.log(arr);
              }
            });
            manNewInfo.save();
          }

          // console.log(dataResult);
          res.redirect('/manager');
        })
      })
    }
  });
});



app.get('/pay/:newPayid', (req, res) => {
  var newPayid = req.params.newPayid
  custumerdb.find({ _id: newPayid }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      res.render('pay', { allData: dataResult });
    }
  });
});


app.post('/pay', (req, res) => {
  // console.log("money "+ req.body.targetMoney);
  // console.log(req.body.targetMoneyId);
  var currentName = req.body.targetMoneyName;
  var currentID = req.body.targetMoneyId;
  var currentMoney = req.body.targetMoney;
  const nowcurrentDate = new Date();
  custumerdb.find({ _id: currentID }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      dataResult.forEach((element) => {
        var addedFund = element.left
        var allMoney = String(Number(currentMoney) + Number(addedFund));
        custumerdb.findOneAndUpdate({ _id: currentID }, { left: allMoney, updatedTime: nowcurrentDate }, (err, dataResult) => {
          if (err) {
            console.log(err);
          } else {
            var newInfo = {
              name: currentName,
              lastTransfer: currentMoney,
              allupdatedTime: nowcurrentDate
            }
            custumerdb.findOneAndUpdate({ _id: currentID }, {
              $push: { totalInfo: newInfo }
            }, (arr, result) => {
              if (arr) {
                console.log(arr);
              }
            })
            // console.log(dataResult);
            res.redirect('/');
          }
        })
      })
    }
  });
});

app.get('/post/detail/:newPayid/:payId', (req, res) => {
  var newPayid = req.params.newPayid
  var payId = req.params.payId
  custumerdb.find({ _id: payId }, (err, dataResult) => {
    if (err) {
      console.log(err);
    } else {
      dataResult.forEach((element) => {
        var newObj = element.totalInfo
        // console.log("totalInfo" + element.totalInfo);
        newObj.forEach((newelement) => {
          // console.log("newelement" + newelement);
          if (newelement._id == newPayid) {
            res.render('detail', { name: element.name, lastTransfer: newelement.lastTransfer, sendFrom: newelement.sendFrom, addedORnot: newelement.addedORnot, allupdatedTime: newelement.allupdatedTime, newPayid: newPayid, payId: payId });
          }
        });
      });
    }
  });
  // console.log("newPayid " + newPayid);
  // console.log("payId " + payId);
});

app.get('/custumer', (req, res) => {
  custumerdb.find({}, (arr, dataResult) => {
    res.render('custumer', { custumerdb: dataResult });
  })
});


app.post('/custumer', (req, res) => {
  var currentName = req.body.targetName;
  // var currentID = req.body.targetId;
  var currentMoney = req.body.targetMoney;
  var currentEmail = req.body.targetEmail;
  var currentNumber = req.body.targetNumber;
  var currentAdhar = req.body.targetAdhar;
  var currentAddress = req.body.targetAddress;
  const nowcurrentDate = new Date();
  const newClint = new custumerdb({
    name: currentName,
    left: currentMoney,
    email: currentEmail,
    mobileNo: currentNumber,
    adhareNo: currentAdhar,
    address: currentAddress, 
    totalInfo: {
      name: currentName,
      lastTransfer: currentMoney,
      // allupdatedTime: { type: Date, default: Date.now },
    }
  });
  newClint.save();
  res.redirect('/');
});

// app.listen(3000, function () {
//   console.log("Server started on port 3000");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started on port 3000");
});