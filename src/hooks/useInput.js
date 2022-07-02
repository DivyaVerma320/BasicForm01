import { useReducer } from "react";

const intialInput = {
    value: '',
    isTouched: false
};

const inputReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return {value: action.value, isTouched: state.isTouched};
    };
    if(action.type === 'BLUR'){
        return {isTouched: false, value: state.value};
    };
    if(action.type === 'RESET'){
        return {isTouched: false, value: ''};
    };

    return intialInput;
}

const useInput = (validatevalue) => {

    const [inputState, dispatch] =useReducer(inputReducer, intialInput)
  
    const enteredValueIsValid = validatevalue(inputState.value);
    const hasError = !enteredValueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value})
      };
    
      const valueInputBlurHandler = event => {
        dispatch({type: 'BLUR'});
      };

      const reset = () => {
        dispatch({type: 'RESET'})
      };

      return{
          value: inputState.value,
          hasError,
          enteredValueIsValid,
          valueChangeHandler,
          valueInputBlurHandler,
          reset
      };
};

export default useInput;