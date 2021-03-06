import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExamsByTeacher } from "../../services/service";
import {
    InnerContainer,
    PageContainer,
} from "../../components/containers/PageContainer";
import Type from "./TypeList";
import { Exam } from "../../protocols/exams.interface";
import { ExamSection } from "../../components/containers/ExamSection";
import { ExamTypes } from "../../protocols/exams.interface";

interface TeacherId {
    teacherId: string;
}

function ViewTeacher() {
    const examsTypes: ExamTypes = {
        P1: [],
        P2: [],
        P3: [],
        ch: [],
        others: [],
    };

    const teacher: TeacherId = useParams();
    const [exams, setExams] = useState<ExamTypes>(examsTypes);
    const [teacherName, setTeacherName] = useState<string>("");

    useEffect(() => {
        const examsAux = { ...examsTypes };
        getExamsByTeacher(teacher.teacherId)
            .then((response) => {
                response.data.exams.forEach((exam: Exam) => {
                    if (exam.type === "P1") examsAux.P1.push(exam);
                    else if (exam.type === "P2") examsAux.P2.push(exam);
                    else if (exam.type === "P3") examsAux.P3.push(exam);
                    else if (exam.type === "2CH") examsAux.ch.push(exam);
                    else examsAux.others.push(exam);
                });
                setTeacherName(response.data.name);
                setExams({ ...examsAux });
            })

            .catch((error) => console.error(error.response.data));
    }, [teacher.teacherId]);

    return (
        <PageContainer>
            <InnerContainer>
                <h1>Provas de {teacherName}</h1>
                <ExamSection>
                    {exams.P1.length > 0 && (
                        <Type typeName="P1" examsArray={exams.P1} subject />
                    )}
                    {exams.P2.length > 0 && (
                        <Type typeName="P2" examsArray={exams.P2} subject />
                    )}

                    {exams.P3.length > 0 && (
                        <Type typeName="P3" examsArray={exams.P3} subject />
                    )}
                    {exams.ch.length > 0 && (
                        <Type typeName="2ch" examsArray={exams.ch} subject />
                    )}
                    {exams.others.length > 0 && (
                        <Type
                            typeName="Outras"
                            examsArray={exams.others}
                            subject
                        />
                    )}
                </ExamSection>
            </InnerContainer>
        </PageContainer>
    );
}

export default ViewTeacher;
