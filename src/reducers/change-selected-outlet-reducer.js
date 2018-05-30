export const changeSelectedOutletReducer = (state = 'trending', action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_OUTLET': 
      return action.outlet;
    default:
      return state;
  }
}