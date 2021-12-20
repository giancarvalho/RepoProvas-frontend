import { ExamSubmit } from "../protocols/exams.interface";
import axiosBase from "./AxiosBase";

function getTeachers() {
    return axiosBase.get("/teachers");
}

function getSubjects() {
    return axiosBase.get("/subjects");
}

function getFormInfo() {
    return axiosBase.get("/form");
}

function getExamsBySubject(subjectId: string) {
    return axiosBase.get(`/subjects/${subjectId}/exams`);
}

function getExamsByTeacher(teacherId: string) {
    return axiosBase.get(`/teachers/${teacherId}/exams`);
}

function submitExam(body: ExamSubmit) {
    return axiosBase.post("/exams", body);
}

export {
    getTeachers,
    getExamsByTeacher,
    getSubjects,
    getExamsBySubject,
    getFormInfo,
    submitExam,
};
