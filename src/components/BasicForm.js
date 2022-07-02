import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameIsInvalid,
    enteredValueIsValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    enteredValueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  const {
    value: enteredPassward,
    hasError: passwardIsInvalid,
    enteredValueIsValid: enteredPasswardIsValid,
    valueChangeHandler: passwardChangeHandler,
    valueInputBlurHandler: passwardInputBlurHandler,
    reset: resetPassward
  } = useInput(value => value.length >= 8);

  let formIsValid = false;

  if (nameIsValid && enteredEmailIsValid && enteredPasswardIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDafault();

    if (!formIsValid) {
      return;
    };

    resetName();
    resetEmail();
    resetPassward();
  }

  const nameclasses = nameIsInvalid ? 'form-control invalid' : 'form-control'
  const emailclasses = emailIsInvalid ? 'form-control invalid' : 'form-control'
  const passwardclasses = passwardIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameclasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName} />
          {nameIsInvalid && <p className='error-text'>Name must not be empty.</p>}
        </div>
        <div className={emailclasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input
            type='email'
            id='name'
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail} />
          {emailIsInvalid && <p className='error-text'>@ must be included.</p>}
        </div>
        <div className={passwardclasses}>
          <label htmlFor='name'>Passward</label>
          <input
            type='text'
            id='name'
            onChange={passwardChangeHandler}
            onBlur={passwardInputBlurHandler}
            value={enteredPassward} />
          {passwardIsInvalid && <p className='error-text'>must be 8 digit.</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
