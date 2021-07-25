const MetamaskLoginReducer = (state = false, action) => {
  debugger
    switch (action.type) {
      case "LOGIN":
        return (state = true);
      case "LOGOUT":
        // TODO: implement
        break;
      default:
        return state;
    }
};

export default MetamaskLoginReducer