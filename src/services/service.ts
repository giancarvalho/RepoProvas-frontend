import axiosBase from "./AxiosBase";

function getTeachers() {
    return axiosBase.get("/teachers");
}

function getSubjects() {
    return axiosBase.get("/subjects");
}

function getExamsByTeacher(teacherId: string) {
    return axiosBase.get(`/exams/teacher/${teacherId}`);
}

export { getTeachers, getExamsByTeacher, getSubjects };
