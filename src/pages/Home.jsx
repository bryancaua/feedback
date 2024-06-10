import { CardContainer, IconContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg"


export function Home() {
  return (
    <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icone de estrela" />
        </IconContainer>
    </CardContainer>
  )
}
