import { SEARCH_FIELD_CHANGED } from "../actionsConstants";

const initialStateSearch = {
  searchField: "",
};

const searchField = (state = initialStateSearch, action = {}) => {
  if (action.type === SEARCH_FIELD_CHANGED)
    return { ...state, searchField: action.payload };
  else return state;
};

export default searchField;
