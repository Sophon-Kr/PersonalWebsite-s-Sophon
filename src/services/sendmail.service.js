const axios = require("axios");

export async function sendEmail({ sendFrom, subjectData, sendText }) {
//   console.log(sendFrom, subjectData, sendText);
  return axios
    .post(`http://localhost:5000/sendemailsophon`, {
      sendFrom: sendFrom,
      subjectData: subjectData,
      sendText: sendText,
    })
    .then((res) => {
    //   console.log(res.data);
      return res.data;
    });
}
