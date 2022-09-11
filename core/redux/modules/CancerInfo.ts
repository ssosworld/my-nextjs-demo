// 액션 타입
export const INIT_LIST = "cancerInfo/INIT_LIST" as const;
export const INIT_CONSONANT = "cancerInfo/INIT_CONSONANT" as const;

// 액션 생성자

export const initCancerInfo = (payload: infoList[]) => {
  return {
    type: INIT_LIST,
    payload,
  };
};
export const initConsonant = (payload: consonantList[]) => ({
  type: INIT_CONSONANT,
  payload,
});

type Actions =
  | ReturnType<typeof initCancerInfo>
  | ReturnType<typeof initConsonant>;

type infoList = {
  id: number;
  cancerCode: string;
  createdDate: string;
  modifiedDate: string;
  cancerName: string;
  cancerConsonant: string;
};
type consonantList = string;
interface State {
  cancerInfoList: infoList[];
  cancerConsonantList: consonantList[];
}

// 초기상태
const initialState: State = {
  cancerInfoList: [],
  cancerConsonantList: [],
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case INIT_LIST:
      return { cancerInfoList: action.payload };
    case INIT_CONSONANT:
      return { ...state, cancerConsonantList: action.payload };
    default:
      return state;
  }
}
