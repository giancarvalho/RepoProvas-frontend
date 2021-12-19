import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer } from "../components/containers/PageContainer";
import { getFormInfo } from "../services/service";

function SendExam() {
    const [fillFormData, setFillFormData] = useState({
        subjects: [],
        types: [],
        years: [],
    });
    const [teachersList, setTeachersList] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        typeId: 0,
        yearId: 0,
        subjectId: 0,
        teacherId: 0,
    });

    useEffect(() => {
        getFormInfo()
            .then((response) => setFillFormData(response.data))
            .catch((error) => console.error(error.response.data));
    }, []);

    function selectSubject(e: React.ChangeEvent<HTMLSelectElement>) {
        const subjectId = Number(e.target.value);

        const chosenSubject: any = fillFormData.subjects.find(
            (subject: any) => subject.id === subjectId
        );

        setFormData({
            ...formData,
            subjectId: subjectId,
        });

        setTeachersList(chosenSubject.teachers);
    }

    function postExam(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <PageContainer>
            <form onSubmit={(e) => postExam(e)}>
                <FormContainer>
                    <label>
                        Materia
                        <select
                            value={formData.subjectId}
                            onChange={(e) => selectSubject(e)}
                            required
                        >
                            <option value="">Escolha uma materia</option>
                            {fillFormData.subjects.map((subject: any) => (
                                <option value={subject.id} key={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Professor
                        <select
                            disabled={teachersList.length < 1}
                            value={formData.teacherId}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    teacherId: Number(e.target.value),
                                })
                            }
                            required
                        >
                            <option value="">Escolha um professor</option>
                            {teachersList.map((teacher: any) => (
                                <option value={teacher.id} key={teacher.id}>
                                    {teacher.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Tipo
                        <select
                            value={formData.typeId}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    typeId: Number(e.target.value),
                                })
                            }
                            required
                        >
                            <option value="">Escolha um tipo</option>
                            {fillFormData.types.map((type: any) => (
                                <option value={type.id} key={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Ano
                        <select
                            value={formData.yearId}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    yearId: Number(e.target.value),
                                })
                            }
                            required
                        >
                            <option value="">Escolha um ano</option>
                            {fillFormData.years.map((year: any) => (
                                <option value={year.id} key={year.id}>
                                    {year.year}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Nome da Prova
                        <input
                            placeholder="Ex: 2020.1"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                    </label>
                    <label>
                        Link para o PDF
                        <input
                            placeholder="Ex: www.website.com/provas/prova.pdf"
                            type="text"
                            value={formData.link}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    link: e.target.value,
                                })
                            }
                            required
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </FormContainer>
            </form>
        </PageContainer>
    );
}

export default SendExam;

const FormContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    font-size: 22px;
    justify-content: space-between;

    label {
        display: flex;
        flex-direction: column;
    }

    input,
    select,
    button {
        height: 40px;
        font-size: 20px;
    }
`;
