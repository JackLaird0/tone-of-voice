import { changeSelectedOutletReducer } from './change-selected-outlet-reducer';
import { changeSelectedOutlet } from '../actions/actions';

describe('Change Selected Outlet Reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = 'trending';
    
    expect(changeSelectedOutletReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with a new outlet when called', () => {
    let initialState = 'trending';
    let outlet = 'abcNews';
    let selectOutletAction = {
      type: 'CHANGE_SELECTED_OUTLET',
      outlet
    };

    let newState = changeSelectedOutletReducer(initialState, selectOutletAction);

    expect(newState).toEqual(outlet);
  });
});