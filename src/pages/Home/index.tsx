import { Play } from "phosphor-react";
import { FormContainer, HomeContainer, MinutesAmountInput, StartCountdownButton, TaskInput } from "./styles";
import { CountDownContainer } from "./styles";
import { Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task" 
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto">
          </TaskInput>

          <datalist id="task-sugestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Banana"></option>
          </datalist>

          <label htmlFor="task">durante</label>
          <MinutesAmountInput 
            id="minutesAmonut" 
            type="number" 
            placeholder="00"
            step={5}
            min={5}
            max={60}
          >
            
          </MinutesAmountInput>

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24}/>
          Começar
        </StartCountdownButton>
      </form>

    </HomeContainer>

  )
}
