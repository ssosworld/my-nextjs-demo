import { Todo } from "../types/Todo";

// 액션 타입
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST" as const;
export const ADD_TODO = "todo/ADD_TODO" as const;
export const TOGGLE_TODO = "todo/TOGGLE_TODO" as const;
export const REMOVE_TODO = "todo/REMOVE_TODO" as const;

// 액션 생성자
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const setTodo = (payload: Todo[]) => {
  return {
    type: INIT_TODO_LIST,
    payload,
  };
};

type Actions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof setTodo>;

// interface State {
//   todos: Todo[];
// }

type State = Todo[];

// 초기상태
const initialState: State = [
  // todos: [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: true,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ADD_TODO:
      // eslint-disable-next-line no-case-declarations
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case INIT_TODO_LIST:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
}
