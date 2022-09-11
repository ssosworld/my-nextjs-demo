/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { rootReducer } from "./rootReducer";

// 스토어 병합 (server-side store + client-side store)
const reducer = (state: any, action: any) => {
  // HYDRATE : 서버에서 처음 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 주입하는 역할
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return rootReducer(state, action);
};

// 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

// redux의 환경 상태에 따라 "redux-devtools-extension" 미들웨어를 적용할지 지정
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// persist 관련 설정
const persistConfig = {
  key: "root", // 리듀서의 어느지점부터 데이터를 저장할 것인지 설정
  storage, // localStorage 저장
  // whitelist: ["clientLogin"], // 리듀서 별로 설정을하고싶을때 설정
};

// persisConfig가 추가된 reducer 반환
const persistedReducer = persistReducer(persistConfig, reducer);

// wrapper로 가져갈 store 설정
const initStore = () => {
  // persistedReducer로 스토어 생성
  const store = createStore(persistedReducer, bindMiddleware([]));
  const persistor = persistStore(store);
  return { ...store, persistor };
};

export const wrapper = createWrapper(initStore);

// 타입 지원되는 커스텀 useSeletor 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
