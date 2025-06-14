
const validateForm = (...data)=>{
  const [email,password] = data;

  const emailValiadte = /\S+@\S+\.\S+/.test(email);
  const passValiadte = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if(!emailValiadte){
        return "Please eneter correct email";
     }
    if(!passValiadte){
        return "Please eneter correct Password";
     }
  return null;
}
export default validateForm;