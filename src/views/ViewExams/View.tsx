import { useHistory } from "react-router";
import { PageContainer } from "../../components/containers/PageContainer";
import { Button } from "../../components/buttons/Button";
import styled from "styled-components";

function ViewExams() {
    const history = useHistory();

    return (
        <PageContainer>
            <InnerWrapper>
                <h1>Ver provas por: </h1>
                <div>
                    <Button onClick={() => history.push("/view/subjects")}>
                        Disciplina
                    </Button>
                    <Button onClick={() => history.push("/view/teachers")}>
                        Professor
                    </Button>
                </div>
            </InnerWrapper>
        </PageContainer>
    );
}

export default ViewExams;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
