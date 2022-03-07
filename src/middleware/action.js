import axios from "axios";
export const GET_USERID = "GET_USERID";


export const getUserID = () => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/createuserid`)
      .then((res) => {
        console.log("getUserID : ", res);
        sessionStorage.setItem("id", res.id);
        // dispatch({
        //   type: "GET_USERID",
        //   payload: res.data.id,
        // });
      });
  };
};

export const setListForRemove = (payload) => ({
  type: "SET_LIST_FOR_REMOVE",
  payload,
});
