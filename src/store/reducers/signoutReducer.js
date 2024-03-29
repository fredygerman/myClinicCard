import { action_types } from "../action-types/action-types";

export const signoutReducer = (state = [], { type, payload }) => {
  switch (type) {
    case action_types.SIGNOUT:
      return [...state, payload];
    default:
      return state;
  }
};
