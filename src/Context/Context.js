import React, { useReducer, createContext } from 'react';

const initialState = {

  gameOfThronesCharacters: [
    { id: 1, name: 'Jon Snow', house: 'Stark' },
    { id: 2, name: 'Daenerys Targaryen', house: 'Targaryen' },
    { id: 3, name: 'Tyrion Lannister', house: 'Lannister' },
    { id: 4, name: 'Arya Stark', house: 'Stark' },
    { id: 5, name: 'Sansa Stark', house: 'Stark' },
    { id: 6, name: 'Cersei Lannister', house: 'Lannister' },
    { id: 7, name: 'Jaime Lannister', house: 'Lannister' },
    { id: 8, name: 'Bran Stark', house: 'Stark' },
    { id: 9, name: 'Theon Greyjoy', house: 'Greyjoy' },
    { id: 10, name: 'Samwell Tarly', house: 'Tarly' },
  ]

};
//A reducer in React (or generally in the context of state management) is essentially a function that takes
//  the current state and an action, and returns the new state based on that action.

//  reducer function  reduces a collection of actions (or updates) to produce a new state. 

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CHAR":
      return {
        ...state,
        gameOfThronesCharacters: state.gameOfThronesCharacters.filter(u => u.name !== action.data)
      };
      case "ADD_CHARACTER":
        return {
          ...state,
          gameOfThronesCharacters: [...state.gameOfThronesCharacters, {name:action.data.name, house: action.data.house}]
        };
        case "EDIT_CHAR_HOUSE":
            const index = state.gameOfThronesCharacters.findIndex((ch)=>ch.name == action.data.name)
            if(index!= -1){
                const updatedCharacters = [...state.gameOfThronesCharacters]
                updatedCharacters[index] = {...updatedCharacters[index], house: action.data.house}
                return{
                    ...state,
                    gameOfThronesCharacters: updatedCharacters
                }
            }else{
                return{
                    state
                }
            }
       
    default:
      return state;
  }
};


export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
