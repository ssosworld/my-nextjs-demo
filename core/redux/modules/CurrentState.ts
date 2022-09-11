// 1.액션타입 (리덕스 액션 안에 들어가게 될 type값)
export const ADD_CODE = "currentCode/ADD" as const;
export const ADD_CHIPS = "currentCode/ADD_CHIPS" as const;
export const SELECT_CODE = "currentCode/SELECT" as const;
export const INIT_STATE = "currentCode/INIT_STATE" as const;

// 2.액션생성자(action creators)
export const addCurCode = (payload: string) => ({
  type: ADD_CODE,
  payload,
});
export const addCurchips = (payload: boolean) => ({
  type: ADD_CHIPS,
  payload,
});
export const selectCurCode = () => ({
  type: SELECT_CODE,
});
export const initState = () => ({
  type: INIT_STATE,
});

// 3.액션 객체들에 대한 TypeScript의 type 선언
export type Actions = ReturnType<
  | typeof addCurCode
  | typeof addCurchips
  | typeof selectCurCode
  | typeof initState
>;

// 4.모듈에서 관리할 상태의 타입정의
interface State {
  code: string;
  chipOn: boolean;
}
// 초기상태값
const initialState: State = {
  code: "",
  chipOn: true,
};

// 리듀서 작성
// eslint-disable-next-line default-param-last
export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case SELECT_CODE:
      return { ...state };
    case ADD_CODE:
      return { ...state, code: action.payload };
    case ADD_CHIPS:
      return { ...state, chipOn: action.payload };
    case INIT_STATE:
      return initialState;
    default:
      return state;
  }
};
