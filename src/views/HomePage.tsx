import styled from "styled-components";

function HomePage() {
    return (
        <PageContainer>
            <Button>Enviar provas</Button>
            <Button>Baixar provas</Button>
        </PageContainer>
    );
}

export default HomePage;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    width: 80px;
    height: 80px;
    margin-right: 10px;
`;
