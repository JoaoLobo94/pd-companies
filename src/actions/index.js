const Web3 = require("web3");

export const login = () => {
  return async (dispatch) => {
    dispatch ({
      type: "LOGIN",
      payload: metamaskLoginCall(),
    });
  };
};

const metamaskLoginCall = async () => {
  new Web3(window.ethereum);
  await window.ethereum.enable();
};
