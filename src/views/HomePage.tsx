import { useHistory } from "react-router";
import { PageContainer } from "../components/containers/PageContainer";
import { Button } from "../components/buttons/Button";

function HomePage() {
    const history = useHistory();

    return (
        <PageContainer>
            <Button onClick={() => history.push("/send")}>Enviar provas</Button>
            <Button onClick={() => history.push("/view")}>Baixar provas</Button>
        </PageContainer>
    );
}

export default HomePage;
