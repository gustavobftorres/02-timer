import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null;
}


export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // Forma convencional de realizar alterações em um estado imutável:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.data],
      //   activeCycleId: action.payload.data.id,
      // };

     // Forma de realizar alterações em um estado imutável utilizando o immer: 
      return produce(state, draft => {
        draft.cycles.push(action.payload.data)
        draft.activeCycleId = action.payload.data.id
      })
    
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(cycle => {
        return cycle.id == state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, draft => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })

    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
        const currentCycleIndex = state.cycles.findIndex(cycle => {
          return cycle.id == state.activeCycleId
        })
  
        if (currentCycleIndex < 0) {
          return state;
        }
  
        return produce(state, draft => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].finishedDate = new Date()
        })
  
      }

    default:
      return state;
    
    }
}