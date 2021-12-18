import styled from "styled-components";
import { Exam } from "../../protocols/exams.interface";

interface Props {
    typeName: string;
    examsArray: Exam[];
    subject?: boolean;
}

function Type({ typeName, examsArray, subject }: Props) {
    return (
        <TypeContainer>
            <h1>{typeName}</h1>
            <div>
                {examsArray.map((exam: Exam) => (
                    <ExamContainer
                        key={exam.id}
                        onClick={() => window.open(exam.link)}
                    >
                        <ul>
                            <li>Prova: {exam.name}</li>
                            <li>Ano: {exam.year} </li>
                            <li>Semestre: {exam.semester} </li>
                            {subject && <li>Materia: {exam.subject} </li>}
                        </ul>
                    </ExamContainer>
                ))}
            </div>
        </TypeContainer>
    );
}

export default Type;

const TypeContainer = styled.div`
    margin-right: 10px;
`;

const ExamContainer = styled.div`
    cursor: pointer;

    :hover {
        background-color: #ebe9e9;
    }
`;
