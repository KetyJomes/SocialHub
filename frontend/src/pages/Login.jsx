import background from "../assets/supergraphic.svg";

export const Login = () => {
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
              className="w-full border-b border-gray-400 outline-none py-2 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-lg">Senha:</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full border-b border-gray-400 outline-none py-2 placeholder:text-gray-300"
              />
          </div>

          <div className="flex justify-center mb-10">
            <a href="#" className="underline">
              Se Cadastrar
            </a>
          </div>

          <button className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-3 rounded-xl transition">
            Entrar
          </button>

        </div>
      </div>
    </div>
  );
}