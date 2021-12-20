import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExamsBySubject } from "../../services/service";
import {
    InnerContainer,
    PageContainer,
} from "../../components/containers/PageContainer";
import Type from "./TypeList";
import { Exam } from "../../protocols/exams.interface";
import { ExamTypes } from "../../protocols/exams.interface";
import { ExamSection } from "../../components/containers/ExamSection";

interface SubjectId {
    subjectId: string;
}

function ViewSubject() {
    const examsByType: ExamTypes = {
        P1: [],
        P2: [],
        P3: [],
        ch: [],
        others: [],
    };

    const subject: SubjectId = useParams();
    const [exams, setExams] = useState<any>(examsByType);
    const [subjectName, setSubjectName] = useState<string>("");

    useEffect(() => {
        const examsAux: ExamTypes = { ...examsByType };
        getExamsBySubject(subject.subjectId)
            .then((response) => {
                response.data.exams.forEach((exam: Exam) => {
                    if (exam.type === "P1") examsAux.P1.push(exam);
                    else if (exam.type === "P2") examsAux.P2.push(exam);
                    else if (exam.type === "P3") examsAux.P3.push(exam);
                    else if (exam.type === "2CH") examsAux.ch.push(exam);
                    else examsAux.others.push(exam);
                });
                setSubjectName(response.data.name);

                setExams({ ...examsAux });
            })

            .catch((error) => console.error(error.response.data));
    }, [subject.subjectId]);

    return (
        <PageContainer>
            <InnerContainer>
                <h1>Provas de {subjectName}</h1>
                <ExamSection>
                    {exams.P1.length > 0 && (
                        <Type typeName="P1" examsArray={exams.P1} />
                    )}
                    {exams.P2.length > 0 && (
                        <Type typeName="P2" examsArray={exams.P2} />
                    )}

                    {exams.P3.length > 0 && (
                        <Type typeName="P3" examsArray={exams.P3} />
                    )}
                    {exams.ch.length > 0 && (
                        <Type typeName="2ch" examsArray={exams.ch} />
                    )}
                    {exams.others.length > 0 && (
                        <Type typeName="Outras" examsArray={exams.others} />
                    )}
                </ExamSection>
            </InnerContainer>
        </PageContainer>
    );
}

export default ViewSubject;
