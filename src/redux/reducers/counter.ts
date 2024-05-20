// src/redux/reducers/counter.ts

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    case 'DECREASE':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
