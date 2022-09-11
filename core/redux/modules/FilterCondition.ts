// 액션 타입
export const INIT_LIST = "filter/INIT_LIST" as const;
export const ADD_FILTER = "filter/ADD" as const;
export const REMOVE_FILTER = "filter/REMOVE" as const;
export const FOR_DETAIL_FILTER = "filter/FORDETAIL" as const;
export const INIT_STATE = "filter/INIT_STATE" as const; // initialState 초기화 용도

// 액션 생성자
export const setFilter = (payload: State[]) => {
  return {
    type: INIT_LIST,
    payload,
  };
};
export const addFilter = (id: string, payload: Obj) => ({
  type: ADD_FILTER,
  id,
  payload,
});
export const removeFilter = (id: string) => ({
  type: REMOVE_FILTER,
  payload: id,
});
export const forDetailFilter = (id: string) => ({
  type: FOR_DETAIL_FILTER,
  payload: id,
});
export const initState = () => ({
  type: INIT_STATE,
});

type Actions =
  | ReturnType<typeof setFilter>
  | ReturnType<typeof addFilter>
  | ReturnType<typeof removeFilter>
  | ReturnType<typeof forDetailFilter>
  | ReturnType<typeof initState>;

type Obj = {
  productCd: number;
  default: string[];
  renewal: string;
  payMaturity: string;
  isFilter: boolean;
  cancer?: {
    tag: string[];
    code: string[];
  };
};

type State = {
  [index: string]: Obj;
};

// 초기상태
const initialState: State = {
  "05": {
    productCd: 5, // 암
    default: ["YY", "p10m10"],
    renewal: "",
    payMaturity: "",
    isFilter: false,
    cancer: {
      tag: [],
      code: [],
    },
  },
  "08": {
    productCd: 8, // 치아
    default: ["YY", "p10m10"],
    renewal: "",
    payMaturity: "",
    isFilter: false,
  },
  "13": {
    productCd: 13, // 운전자
    default: ["NN", "p10m10"],
    renewal: "NN",
    payMaturity: "",
    isFilter: false,
  },
  "16": {
    productCd: 16, // 실손
    default: ["YY", "p1m1"],
    renewal: "YY",
    payMaturity: "",
    isFilter: false,
  },
  "02": {
    productCd: 2, // 정기
    default: ["NN", "p20m20"],
    renewal: "NN",
    payMaturity: "",
    isFilter: false,
  },
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case INIT_LIST:
      return { ...state };
    case ADD_FILTER:
      return action.id === "05"
        ? {
            ...state,
            [action.id]: {
              ...state[action.id],
              renewal: action.payload.renewal,
              payMaturity: action.payload.payMaturity,
              isFilter: true,
              cancer: {
                tag:
                  +action.payload.productCd === 5
                    ? action.payload.cancer?.tag
                    : [],
                code:
                  +action.payload.productCd === 5
                    ? action.payload.cancer?.code
                    : [],
              },
            },
          }
        : {
            ...state,
            [action.id]: {
              ...state[action.id],
              renewal: action.payload.renewal,
              payMaturity: action.payload.payMaturity,
              isFilter: true,
            },
          };
    case REMOVE_FILTER:
      return action.payload === "05"
        ? {
            ...state,
            [action.payload]: {
              ...state[action.payload],
              renewal: "",
              payMaturity: "",
              cancer: { tag: [], code: [] },
              isFilter: false,
            },
          }
        : {
            ...state,
            [action.payload]: {
              ...state[action.payload],
              renewal: "",
              payMaturity: "",
              isFilter: false,
            },
          };
    case INIT_STATE:
      return initialState;
    default:
      return state;
    // case ADD_FILTER:
    //   return state.map((item) =>
    //     item.productCd === +action.payload.productCd
    //       ? {
    //           ...item,
    //           renewal: action.payload.renewal,
    //           pay_maturity: action.payload.pay_maturity,
    //           cancer: {
    //             tag:
    //               +action.payload.productCd === 5
    //                 ? action.payload.cancer.tag
    //                 : [],
    //             code:
    //               +action.payload.productCd === 5
    //                 ? action.payload.cancer.code
    //                 : [],
    //           },
    //           filterOn: true,
    //         }
    //       : item,
    //   );
  }
}
