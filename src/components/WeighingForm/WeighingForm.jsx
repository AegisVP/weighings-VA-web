const { StyledForm } = require('./WeighingForm.styled');

export const WeighingForm = submitHandler => {
  //

  return (
    <StyledForm
      onSubmit={() => {
        return;
      }}
      method="POST"
      autoComplete="on"
    >
      <label>
        <span>Login:</span>
        <input type="text" name="email" autoComplete="email" />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" name="password" autoComplete="current-password" />
      </label>
      <button type="submit">Login</button>
    </StyledForm>
  );
};
