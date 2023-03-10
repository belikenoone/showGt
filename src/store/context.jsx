import { createContext, useReducer, useState } from "react";
const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRENDING":
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case "GET_SINGLE":
      return {
        ...state,
        single: action.payload,
        loading: false,
      };
    case "SEARCHED":
      return {
        ...state,
        searchResults: action.payload,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searchResults: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      state;
      break;
  }
};
export const AppContextProvider = ({ children }) => {
  const initialState = {
    trending: [],
    single: {},
    searchResults: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  const fetchTrending = async () => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=e4858760be842d650c511c256fdf2cd9`
    );
    const { results } = await response.json();
    dispatch({ type: "FETCH_TRENDING", payload: results });
  };
  const fetchSingle = async (mediaType, id) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e4858760be842d650c511c256fdf2cd9&language=en-US`
    );
    const data = await response.json();
    dispatch({ type: "GET_SINGLE", payload: data });
    window.scroll(0, 0);
  };
  const searchContent = async (contentName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=e4858760be842d650c511c256fdf2cd9&language=en-US&query=${contentName}&page=1&include_adult=false`
    );
    const { results } = await response.json();
    dispatch({ type: "SEARCHED", payload: results });
  };
  const clearSearchResults = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <AppContext.Provider
      value={{
        fetchTrending,
        trending: state.trending,
        single: state.single,
        fetchSingle,
        darkMode,
        setDarkMode,
        searchResults: state.searchResults,
        searchContent,
        clearSearchResults,
        loading: state.loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
