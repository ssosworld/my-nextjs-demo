import { atom, selector } from "recoil";

/**
 * TodoList
 *
 */
// for interfaces
export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

// recoil
export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// type FilterState:String = "Show Completed" | "Show All" | "Show Uncompleted";
// export const todoListFilterState = atom<FilterState>({
//   key: "todoListFilterState",
//   default: "Show All",
// });

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
