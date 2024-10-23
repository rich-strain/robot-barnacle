// Function to validate email
export const validateEmail = (email) => {
  // Basic email regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Function to handle email change
export const handleEmailChange = (e, setEmail, setError, validateEmail) => {
  const emailValue = e.target.value;
  setEmail(emailValue);
  console.log('OC-Email:', emailValue);
  console.log('ValidEmail:', validateEmail(emailValue));
  if (!validateEmail(emailValue)) {
    setError(true);
  } else {
    setError(false);
  }
};

// Function to handle email change
export const handleFirstNameChange = (e, setFirstName, setFirstError) => {
  const firstNameValue = e.target.value;
  console.log('OC-First Name:', firstNameValue);
  // setFirstName(firstNameValue);

  if (firstNameValue === '') {
    setFirstError(true);
  } else {
    setFirstError(false);
  }
};

// Function to handle email change
export const handleLastNameChange = (e, setFirstName, setLastError) => {
  const lastNameValue = e.target.value;
  console.log('OC-Last Name:', lastNameValue);
  // setFirstName(firstNameValue);

  if (lastNameValue === '') {
    setLastError(true);
  } else {
    setLastError(false);
  }
};
export const handleCommentChange = (e, setComment, setMessageError) => {
  console.log('OC-Comment:', e.target.value);
  const commentValue = e.target.value;
  setComment(commentValue);
  if (commentValue === '') {
    setMessageError(true);
  } else {
    setMessageError(false);
  }
};

export const handleFormSubmit = (e, email, firstName, lastName, contactMessage, error, setError, setFirstError, setLastError, setMessageError) => {
  e.preventDefault();
  // Debugging
  // console.log('SBMT-Email:', email);
  // console.log('SBMT-First Name:', firstName);
  // console.log('SBMT-Last Name:', lastName);
  // console.log('SBMT-Message:', contactMessage);
  let fail = false;

  if (email === '' || error) {
    setError(true);
    fail = true;
  } else {
    setError(false);
  }
  // Debugging
  // console.log('Email Value: ', email);
  // console.log('Error Value: ', error);
  // console.log('Failed After Email Check: ', fail);

  if (firstName) {
    setFirstError(false);
  } else {
    setFirstError(true);
    fail = true;
  }
  // Debugging
  //console.log('Failed After First Name Check: ', fail);

  if (lastName) {
    setLastError(false);
  } else {
    setLastError(true);
    fail = true;
  }
  // Debugging
  //console.log('Failed After Last Name Check: ', fail);

  if (contactMessage) {
    setMessageError(false);
  } else {
    setMessageError(true);
    fail = true;
  }
  // Debugging
  // console.log('Failed After Message Checks: ', fail);

  if (fail) {
    console.log('Form Validation Failed');
  } else {
    console.log('Form Submitted');
  }
};
