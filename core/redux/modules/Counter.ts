// 1.액션타입 (리덕스 액션 안에 들어가게 될 type값)
export const INCREMENT = "counter/INCREMENT" as const;
export const DECREMENT = "counter/DECREMENT" as const;

// 2.액션생성자(action creators)
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// 3.액션 객체들에 대한 TypeScript의 type 선언
export type Actions = ReturnType<typeof increment | typeof decrement>;

// 4.모듈에서 관리할 상태의 타입정의
interface State {
  count: number;
}
// 초기상태값
const initialState: State = {
  count: 0,
};

// 리듀서 작성
// eslint-disable-next-line default-param-last
export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 툴킷
// export const Actions = { ...Count.actions}
