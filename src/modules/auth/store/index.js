import { createContext } from "react";
// Initial State
const initState = {
    auth: false,
    updateAuth: () => {},
    message: "User not registered!"
};

export default createContext(initState);