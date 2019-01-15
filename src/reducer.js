const DEFAULT_STATE = {
  name: "sarab"
};
const CommonReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
      break;
    default:
      return { ...state };
      break;
  }
};

export default CommonReducer;
