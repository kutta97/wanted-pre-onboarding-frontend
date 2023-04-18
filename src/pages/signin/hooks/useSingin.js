const useSignin = () => {
  const handleSignin = (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    console.log(email.value, password.value);
  };

  return {
    handleSignin,
  };
};

export default useSignin;
