import mock from "./getDriversMock";
const getService = () => {
    return new Promise((resolve) => setTimeout(() => resolve(mock), 1000));
}


export default getService;