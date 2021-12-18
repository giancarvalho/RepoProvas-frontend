import axiosBase from "./AxiosBase";

function getTeachers() {
    return axiosBase.get("/teachers");
}

function getExamsByTeacher(teacherId: string) {
    return axiosBase.get(`/exams/teacher/${teacherId}`);
}

export { getTeachers, getExamsByTeacher };
