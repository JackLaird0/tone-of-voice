import { addToneDataReducer } from './add-tone-data-reducer';
import { addToneData } from '../actions/actions';

describe('Add Tone Data Reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(addToneDataReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with a new tone when called', () => {
    let initialState = {};
    let expected = {'trending 0': [{score: 100}]}
    let addToneDataAction = {
      type: 'ADD_TONE_DATA',
      name: 'trending 0',
      tone: [{score: 100}]
    };

    let newState = addToneDataReducer(initialState, addToneDataAction);

    expect(newState).toEqual(expected);
  });
});