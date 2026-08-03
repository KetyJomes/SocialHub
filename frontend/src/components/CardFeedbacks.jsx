import { useState } from "react";
import {
  Users,
  UserRound,
  Handshake,
  UserCheck,
  ChartColumn,
  ChevronRight,
} from "lucide-react";

export const CardAvaliacao360 = ({
  tipo,
  descricao,
  status,
  onClick,
}) => {
  function escolherIcone() {
    if (tipo.includes("Alunos")) {
      return <Users size={20} />;
    }

    if (tipo.includes("Pares")) {
      return <Handshake size={20} />;
    }

    if (tipo.includes("Líder")) {
      return <UserRound size={20} />;
    }

    if (tipo.includes("Equipe")) {
      return <UserCheck size={20} />;
    }

    return <ChartColumn size={20} />;
  }

  return (
    <div
      onClick={onClick}
      className="
        flex
        items-center
        justify-between
        p-4
        bg-white
        rounded-xl
        border
        border-gray-200
        transition
        hover:shadow-sm
        hover:border-[#0291F7]
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-[#F1EDFF]
            text-[#0291F7]
            flex
            items-center
            justify-center
          "
        >
          {escolherIcone()}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{tipo}</h3>
          <p className="text-sm text-gray-500">{descricao}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span
            className={`
              w-2
              h-2
              rounded-full
              ${
                status === "concluido"
                  ? "bg-green-500"
                  : "bg-yellow-400"
              }
            `}
          />

          <span className="text-sm text-gray-500">
            {status === "concluido" ? "Concluído" : "Pendente"}
          </span>
        </div>

        <ChevronRight
          size={22}
          className="text-[#0291F7]"
        />
      </div>
    </div>
  );
};