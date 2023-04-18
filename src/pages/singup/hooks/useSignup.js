const useSignup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    console.log(email.value, password.value);
  };

  return {
    handleSignup,
  };
};

export default useSignup;
