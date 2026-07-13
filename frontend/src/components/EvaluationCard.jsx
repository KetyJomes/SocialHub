import { StatusBadge } from "./StatusBadge";


export const EvaluationCard = ({ title, color, data }) => {

  const titleColor =
    color === "purple"
      ? "text-purple-600"
      : "text-blue-600";

  return (

    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col">

      {/* Cabeçalho */}

      <div className="px-8 py-6 border-b border-gray-100">

        <div className="flex items-center justify-between">

          <div>

            <h2 className={`text-2xl font-bold ${titleColor}`}>
              {title}
            </h2>

            <p className="text-gray-500 mt-1">
              Resultado por competência
            </p>

          </div>

        </div>

      </div>

      {/* Conteúdo */}

      <div className="px-8 py-3">


        {data.map((item, index) => (


          <div className="h-70 py-7  border-b border-gray-100 last:border-none flex flex-col "
            key={index}
          >

            {/* Competência */}

            <h3 className="text-lg font-bold text-gray-800">
              {item.title}
            </h3>

            {/* Descrição */}

            <div className="mt-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-xl p-5 h-32.5 overflow-hidden">

              <p className="text-[15px] leading-6 text-gray-700 text-justify line-clamp-4">
                {item.description}
              </p>

            </div>

            {/* Resultado */}

            <div className="mt-auto pt-5 flex flex-col gap-3">


              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Resultado da avaliação
              </p>

              <div

                className={`flex items-center justify-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm 
                  ${
                    item.color === "green"
                    ?
                      "bg-green-50 text-green-700 border border-green-200"
                    :
                    item.color === "blue"
                      ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      :
                        "bg-orange-50 text-orange-700 border border-orange-200"
                  }

                `}>

                <span

                  className={`w-3 h-3 rounded-full
                    ${
                        item.color === "green"
                        ?
                          "bg-green-500"
                        :
                        item.color === "blue"
                        ?
                          "bg-blue-500"
                        :
                          "bg-orange-500"
                      }

                  `}/>

                {item.status}

              </div>

            </div>

          </div>
        ))}

      </div>


    </div>

  );

};