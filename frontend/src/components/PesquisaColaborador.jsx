import { Search } from "lucide-react";

export const PesquisaColaborador = () => {

    return (

        <div className="mb-5">

            <div className="w-[420px] h-14 rounded-xl border border-gray-300 bg-white flex items-center px-5 gap-3">

                <Search
                    size={22}
                    className="text-gray-500"
                />

                <input
                    type="text"
                    placeholder="Pesquisar colaborador..."
                    className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                />

            </div>

        </div>

    );

};