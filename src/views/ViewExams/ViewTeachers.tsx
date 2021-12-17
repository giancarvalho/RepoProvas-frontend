import { useHistory } from "react-router";
import { PageContainer } from "../../components/containers/PageContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTeachers } from "../../services/service";

interface Teacher {
    id: number;
    name: string;
    examsRegistered: number;
}

function ViewTeachers() {
    const history = useHistory();
    const [teachersList, setTeachersList] = useState([]);

    console.log(history.location.pathname);

    useEffect(() => {
        getTeachers()
            .then((response) => setTeachersList(response.data))
            .catch((error) => console.error(error.response));
    }, []);

    return (
        <PageContainer>
            <InnerWrapper>
                <h1>Escolha um professor: </h1>
                <TeachersList>
                    {teachersList.map((teacher: Teacher) => (
                        <li
                            onClick={() =>
                                history.push(
                                    `${history.location.pathname}/${teacher.id}`
                                )
                            }
                        >
                            <p>{teacher.name}</p>
                            <p>
                                Provas cadastradas: {teacher.examsRegistered}{" "}
                            </p>{" "}
                        </li>
                    ))}
                </TeachersList>
            </InnerWrapper>
        </PageContainer>
    );
}

export default ViewTeachers;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeachersList = styled.ul`
    li {
        cursor: pointer;
        :hover {
            background-color: #dddddd;
        }
    }
`;