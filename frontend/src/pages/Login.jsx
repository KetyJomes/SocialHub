import { useState } from "react";
import background from "../assets/supergraphic.svg";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/apiService";

// // Integração
export const Login = () => {
  const navigateLogin = useNavigate();

  const [EDV, setEDV] = useState("")
  const [password, setPassword] = useState("")


  const handleLogin = async () => {

      console.log("CLICOU NO LOGIN");

      try {
        console.log(EDV,password)
      const response = await api.post('/auth/login',{ EDV, password});
      
      console.log(response)

      const { token, user } = response.data;

        console.log(token,user)

      localStorage.setItem("token", token);

      localStorage.setItem("role", user.role);
      localStorage.setItem("name", user.name);

      if (user.role === "ADM") {
        navigateLogin("/adm-main");
      } else if (user.role === "Leader") {
        navigateLogin("/management-main");
      } else if (user.role === "Student") {
        navigateLogin("/user-main");
      } else {
        navigateLogin("/");
      }

    } catch (error) {
      console.log(error);
      alert("EDV ou Senha invalidos");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >

      <div className="bg-white w-[90%] max-w-6xl h-[650px] rounded-lg shadow-lg flex">
        
        <div className="w-1/2 flex items-center justify-center">

          <h1 className="text-6xl font-bold text-black">
            SocialHub
          </h1>

        </div>

        <div className="w-px bg-gray-300 my-16"></div>

        <div className="w-1/2 flex flex-col justify-center px-16">

          <h2 className="text-5xl font-bold text-center mb-10">
            Bem-Vindo!
          </h2>

          <div className="mb-8">
            <label className="block mb-2 text-lg">EDV:</label>
            <input
              type="text"
              placeholder="Digite seu EDV"
              value={EDV}
              onChange={(e) => setEDV(e.target.value)}
              className="w-full border-b border-gray-400 outline-none py-2 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-lg">Senha:</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-400 outline-none py-2 placeholder:text-gray-300"
              />
          </div>

          <Link
            to="/register"
            className="block text-center underline mb-10"
          >
            Se Cadastrar
          </Link>

          <button
            onClick={handleLogin}
            className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-3 rounded-xl transition"
          >
            Entrar
          </button>

        </div>

      </div>

    </div>
  );
}