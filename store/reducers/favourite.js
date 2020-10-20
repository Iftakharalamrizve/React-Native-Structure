const initState = {
    list: [],
  };
  const favouriteLIst = (state = initState, action) => {
    switch (action.type) {
      case "REMOVE_FAVOURITE":
        const newList = state.list.filter((item) => item !== action);
        return {
          list: newList,
        };
      case "ADD_FAVOURITE":
        return {
          list: [action.item,...state.list],
        };
      default:
        return state;
    }
  };
  
  export default favouriteLIst;