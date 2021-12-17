import axiosBase from "./AxiosBase";

function getTeachers() {
    return axiosBase.get("/teachers");
}

export { getTeachers };
