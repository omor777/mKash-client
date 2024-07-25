export const showUsersReducer = (state, action) => {
  switch (action.type) {
    case "pagination_control": {
      return {
        ...state,
        page: action.value,
      };
    }
    case 'change_pagination_limit':{
        return {
            ...state,
            limit:action.value
        }
    }
  }
};
