import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CycleContext";


export function NewCycleForm () {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  
  return (
  <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      id="task" 
      list="task-sugestions"
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register('task')}
      >
    </TaskInput>

    <datalist id="task-sugestions">
      <option value="Projeto 1"></option>
      <option value="Projeto 2"></option>
      <option value="Projeto 3"></option>
      <option value="Banana"></option>
    </datalist>

    <label htmlFor="task">durante</label>
    <MinutesAmountInput 
      id="minutesAmount" 
      type="number" 
      placeholder="00"
      step={5}
      min={1}
      max={60}
      disabled={!!activeCycle}
      {...register('minutesAmount', { valueAsNumber: true})}
    >
      
    </MinutesAmountInput>

    <span>minutos.</span>
  </FormContainer>

  )
}