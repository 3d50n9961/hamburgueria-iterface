import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { Container, LeftContainer, RightContainer, Title, InputContainer, Ipuntes,Link } from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/button";
import { api } from "../../services/api"; // Importando o Axios configurado

// Esquema de validação com Yup
const validationSchema = yup.object({
  name: yup.string().required('O nome e obrigatório'),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha'),
});

export function Registro() {
  const navegate = useNavigate()
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      console.log("🔍 Enviando requisição...", values);

      const response = await toast.promise(api.post("/users", {
        name: values.name,
        email: values.email,
        password: values.password,
        role: ["user"],
      }),
          {
            pending: 'Verificando seus dados',
            success: {
              render() {
                setTimeout(() => {
                  navegate("/login");
                }, '2000');
                return'cadastro realizado com sucesso(a)'
              } 
            },
            error: 'Ops! Algo deu errado tente novamnte',
          }
      )    
      console.log("✅ Cadastro efetuado co sucesso!", response.data);

      // Aqui você pode armazenar o token no localStorage ou redirecionar o usuário
      // localStorage.setItem("token", response.data.token);
      // window.location.href = "/dashboard"; // Exemplo de redirecionamento
    } catch (error) {
      console.error("❌ Erro ao se Cadastrar:", error);

      if (error.response) {
        console.error("📌 Resposta do servidor:", error.response.data);
        setErrors({ email: "Erro no cadastro" });
      } else {
        setErrors({ email: "" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo Edson Burger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar Cadastro
        </Title>

        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Ipuntes>
                <InputContainer>
                  <label htmlFor="name">Nome</label>
                  <Field type="name" name="name" />
                  <ErrorMessage name="name" component="p" />
                </InputContainer>

                <InputContainer>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="p" />
                </InputContainer>


                <InputContainer>
                  <label htmlFor="password">Senha</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="p" />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="password">Confirme o password</label>
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="p" />
                </InputContainer>

              </Ipuntes>

              <Button type="submit"  disabled={isSubmitting}>
                {isSubmitting ? "Registrando..." : "Registrar"}
              </Button>
            </Form>
          )}
        </Formik>

        <p>Não possui conta? <Link to='/login'> Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
