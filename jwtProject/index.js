const jwt = require("jsonwebtoken");
const value = {
  name: "thamitha@gmail.com",
  accountnumber: "345346",
};

const token = jwt.sign(value, "secret");

console.log(token);

//verify
// const verifyToken = jwt.verify('fhgffgjghjghghmhjmhjmhcvnnfgcngfn', 'secret')

// console.log(verifyToken);