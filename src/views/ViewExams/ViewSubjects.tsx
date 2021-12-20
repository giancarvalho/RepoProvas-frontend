import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PageContainer } from "../../components/containers/PageContainer";
import { getSubjects } from "../../services/service";

interface Subject {
    name: string;
    id: number;
    examsRegistered: number;
    semester: string;
}

interface TypeList {
    subjects: Subject[];
    name: string;
}

interface Props {
    typeList: TypeList;
}

function SubjectType({ typeList }: Props) {
    const { subjects } = typeList;
    const history = useHistory();

    function sendToSubjectPage(subjectId: number, examsRegistered: number) {
        if (examsRegistered > 0) {
            return history.push(`${history.location.pathname}/${subjectId}`);
        }

        alert("A disciplina escolhida nao tem provas cadastradas no momento");
    }
    return (
        <div>
            <h3>{typeList.name}</h3>
            <ul>
                {subjects.map((subject: Subject) => (
                    <SubjectItem
                        key={subject.id}
                        onClick={() =>
                            sendToSubjectPage(
                                subject.id,
                                subject.examsRegistered
                            )
                        }
                    >
                        <h4>{subject.name}</h4>
                        <p>Provas Registradas: {subject.examsRegistered}</p>
                    </SubjectItem>
                ))}
            </ul>
        </div>
    );
}

interface SubjectInfo {
    name: string;
    subjects: Subject[];
}

type SubjectsByPeriod = Record<string, SubjectInfo>;

function ViewSubjects() {
    const subjectsModel = {
        one: { name: "1º Periodo", subjects: [] },
        two: { name: "2º Periodo", subjects: [] },
        three: { name: "3º Periodo", subjects: [] },
        four: { name: "4º Periodo", subjects: [] },
        optionals: { name: "Eletivas", subjects: [] },
    } as SubjectsByPeriod;

    const [subjectsList, setSubjectsList] = useState({ ...subjectsModel });

    useEffect(() => {
        const subjectsAux: SubjectsByPeriod = {
            ...subjectsModel,
        };

        getSubjects()
            .then((response) => {
                response.data.forEach((subject: Subject) => {
                    if (subject.semester === "1")
                        subjectsAux.one.subjects.push(subject);
                    else if (subject.semester === "2")
                        subjectsAux.two.subjects.push(subject);
                    else if (subject.semester === "3")
                        subjectsAux.three.subjects.push(subject);
                    else if (subject.semester === "4")
                        subjectsAux.four.subjects.push(subject);
                    else subjectsAux.optionals.subjects.push(subject);
                });

                setSubjectsList({ ...subjectsAux });
            })
            .catch((error) => console.error(error.response.data));
    }, []);

    return (
        <PageContainer>
            {" "}
            <h1>Escolha uma disciplina</h1>{" "}
            <SubjectsContainer>
                {subjectsList.one.subjects.length > 0 && (
                    <SubjectType typeList={subjectsList.one} />
                )}
                {subjectsList.two.subjects.length > 0 && (
                    <SubjectType typeList={subjectsList.two} />
                )}
                {subjectsList.three.subjects.length > 0 && (
                    <SubjectType typeList={subjectsList.three} />
                )}
                {subjectsList.four.subjects.length > 0 && (
                    <SubjectType typeList={subjectsList.four} />
                )}
                {subjectsList.optionals.subjects.length > 0 && (
                    <SubjectType typeList={subjectsList.optionals} />
                )}
            </SubjectsContainer>
        </PageContainer>
    );
}

export default ViewSubjects;

const SubjectsContainer = styled.div`
    display: flex;
    justify-content: center;

    width: 80%;
    height: 500px;
    flex-wrap: wrap;
`;

const SubjectItem = styled.li`
    cursor: pointer;
    :hover {
        background-color: #e9e7e7;
    }
`;
