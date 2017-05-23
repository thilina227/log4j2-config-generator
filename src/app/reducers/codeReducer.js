export default function reducer(
  state={
    code : null
  }, action){

  switch(action.type){
    case "UPDATE_CODE" : {
      return Object.assign({}, state, {
        code: action.code
      })
      break;
    }   
  }

  return state;
}