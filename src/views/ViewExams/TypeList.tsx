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
            <h2>{typeName}</h2>
            <div>
                {examsArray.map((exam: Exam) => (
                    <ExamContainer
                        key={exam.id}
                        onClick={() => window.open(exam.link)}
                    >
                        <ul>
                            <li>Prova: {exam.name}</li>
                            <li>Ano: {exam.year} </li>

                            {subject ? (
                                <li>Materia: {exam.subject} </li>
                            ) : (
                                <li>Professor: {exam.teacher} </li>
                            )}
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
