import { combineReducers } from "redux";
import todo from "./modules/Todo";
import counter from "./modules/Counter";
import cancerInfo from "./modules/CancerInfo";
import filterCondition from "./modules/FilterCondition";
import currentState from "./modules/CurrentState";

export const rootReducer = combineReducers({
  // 비교메인
  cancerInfo,
  filterCondition,
  currentState,

  // test sample
  todo,
  counter,
});

// export type RootState = ReturnType<typeof rootReducer>;
