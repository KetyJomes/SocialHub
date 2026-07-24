// Integração
import { createUser } from "../services/userService";

import {Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

import background from "../assets/supergraphic.svg";

export const Register = () => {
  const navigate = useNavigate();
  
  // Integração
  const [user, setUser] = useState({
    name: "", 
    email: "", 
    password: "", 
    EDV: "",
    role: ""
  })

  const create = async () => {

    try {

      const response = await createUser(user);

      console.log(
        "Usuário criado:",
        resposta.data
      );

      navigate('/login')

    } catch(error) {

      console.log(
        "Erro ao criar usuário",
        error
      );

    }

  }


  function handleRegister() {
    navigateRegister("/login");
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
                Cadastre-se
            </h2>

          <div className="mb-5">
            <label className="block mb-2 text-lg">
              Nome:
            </label>

            <input

              value={user.name}
              onChange={
                (e) =>
                  setUser({
                    ...user,
                    name:e.target.value
                  }) 
              }

              type="text"
              placeholder="Digite seu nome completo"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-800 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-lg">
              EDV:
            </label>

            <input

              value={user.EDV}
              onChange={
                (e) =>
                  setUser({
                    ...user,
                    EDV:e.target.value
                  }) 
              }

              type="text"
              placeholder="Digite seu EDV"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-800 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-lg">
              Senha:
            </label>

            <input
            
              value={user.password}
              onChange={
                (e) =>
                  setUser({
                    ...user,
                    password:e.target.value
                  }) 
              }

              type="password"
              placeholder="Digite sua senha"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-800 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-lg">
              Confirmar senha:
            </label>

            <input

              value={user.password}
              onChange={
                (e) =>
                  setUser({
                    ...user,
                    password:e.target.value
                  }) 
              }

              type="password"
              placeholder="Confirme sua senha"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-800 placeholder:text-gray-300"
            />
          </div>

          <Link
            to="/login"
            className="block text-center underline mb-10"
          >
            Já possui conta?
          </Link>


          <button
            onClick={createUser}
            className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-3 rounded-xl transition"
          >
            Cadastrar
          </button>

        </div>
      </div>
    </div>
  );
};