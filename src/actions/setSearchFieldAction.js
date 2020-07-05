import { SEARCH_FIELD_CHANGED } from "../actionsConstants";

const setSearchField = (text) => {
  return {
    type: SEARCH_FIELD_CHANGED,
    payload: text,
  };
};

export default setSearchField;
