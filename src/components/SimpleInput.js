import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameIsInvalid,
    enteredValueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    enteredValueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetemail
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    };

    //nameInputRef.current.value = ''; //NOT IDEAL, DON'T MANIPULATE DOM
    resetName();
    resetemail();
  };

  const nameInputClasses = nameIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='email'
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {nameIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
      <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
        {emailIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
