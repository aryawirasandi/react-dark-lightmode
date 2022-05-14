
import { useContext } from "react";
import Food from "../assets/articles/food-and-book.jpg";
import style from "../app.module.css";
import { ThemesContext } from "../context";
import { Container } from "../components/Container/index.styled";
import { Card } from "../components/Card/index.styled";
import { Description } from "../components/Description/index.styled";
import { LinkMore } from "../components/LinkMore/index.styled";
import { Image } from "../components/Image/index.styled";
import articles from "../data/articles";

function Home() {
  const { darkValue } = useContext(ThemesContext)
  return (
    <div>
      <Container>
        <div className={style.wrapper}>
          {articles.map((article) => {
            const { id, title, desc } = article;
            return (
              <Card dark={darkValue} style={{ flexBasis: `${32}%` }} key={id}>
                <Image src={Food} loading="lazy" alt="article image"></Image>
                <div style={{ padding: `0px 10px 10px 10px` }}>
                  <h2>{ title }</h2>
                  <Description style={{ marginBottom: "1rem" }}>
                    <p>
                     {desc}
                    </p>
                  </Description>
                  <LinkMore dark={darkValue}>
                    See More
                  </LinkMore>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;