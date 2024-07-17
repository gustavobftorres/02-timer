import { Play } from "phosphor-react";
import { FormContainer, HomeContainer } from "./styles";
import { CountDownContainer } from "./styles";
import { Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task"></input>

          <label htmlFor="task">durante</label>
          <input id="minutesAmonut" type="number"></input>

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit" >
          <Play/>
          Começar
        </button>
      </form>

    </HomeContainer>

  )
}
