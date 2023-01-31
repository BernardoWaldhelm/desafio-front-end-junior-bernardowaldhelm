import * as Yup from 'yup';
const birthDay = /\d{2}.\d{2}.\d{4}/;

export default Yup.object().shape({
  email: Yup.string().email("*Email inválido").required("*Campo Obrigatório"),
  password: Yup.string().required("*Campo Obrigatório").min(6, "*No mínimo 3 digitos"),
  confirmationPassword: Yup.string().required("*Campo Obrigatório").min(6, "*No mínimo 3 digitos").oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
  name: Yup.string().required("*Campo Obrigatório").min(3, "*No mínimo 3 digitos"),
  lastName: Yup.string().required("*Campo Obrigatório").min(3, "*No mínimo 3 digitos"),
  birthDate: Yup.string().matches(birthDay, "Data Inválida").required("*Campo Obrigatório"),
  adrress: Yup.string().required('*Campo Obrigatório'),
})
