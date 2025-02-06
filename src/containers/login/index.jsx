import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container, LeftContainer, RightContainer, Title, InputContainer, Ipuntes, Link } from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/button";
import { api } from "../../services/api"; // Importando o Axios configurado

// Esquema de validação com Yup
const validationSchema = yup.object({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("A senha é obrigatória"),
});

export function Login() {

  const navegate = useNavigate()
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      console.log("🔍 Enviando requisição...", values);

      const {data:{token}} = await toast.promise(api.post("/users/login", {
        email: values.email,
        password: values.password,
      }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navegate('/');
              }, '2000');
              return'Seja Bem Vindo(a)'
            } 
          },
          error: 'Email ou Senha Incorretas'
        },
      )
      localStorage.setItem('token',token);

      // Aqui você pode armazenar o token no localStorage ou redirecionar o usuário
      // localStorage.setItem("token", response.data.token);
      // window.location.href = "/dashboard"; // Exemplo de redirecionamento
    } catch (error) {
      console.error("❌ Erro ao fazer login:", error);

      if (error.response) {
        console.error("📌 Resposta do servidor:", error.response.data);
        setErrors({ email: "" });
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
          Olá, seja bem-vindo ao <span>Edson Burguer!</span>
          <br /> Acesse com seu <span>Login e senha.</span>
        </Title>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Ipuntes>
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
              </Ipuntes>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Entrando..." : "Entrar"}
              </Button>
            </Form>
          )}
        </Formik>

        <p>Não possui conta? <Link to='/registro'> Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
