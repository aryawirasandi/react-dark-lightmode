import { useContext } from "react";
import { ThemesContext } from "../context";
import { Card } from "../components/Card/index.styled";
import { Container } from "../components/Container/index.styled";
import { Description } from "../components/Description/index.styled";
import { Heading } from "../components/Heading/index.styled"
const About = () => {
    const { darkValue } = useContext(ThemesContext);
    return ( <div>
       <Container>
        <Card dark={darkValue}>
            <Heading dark={darkValue} align="center">
                About
            </Heading>
            <Container>
                <Description align="center">
                    <p>Hi this example of about page if you want to customize the description of this text then go to src/pages/About.js</p>
                </Description>
            </Container>
        </Card>
       </Container>
    </div> );
}
 
export default About;
