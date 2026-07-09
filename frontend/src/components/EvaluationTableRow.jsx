import {
  ArrowDown,
  ArrowUp,
  Circle,
  Star,
} from "lucide-react";

const optionStyle = {
  critico: {
    bg: "bg-red-50",
    border: "border-red-300",
    icon: <Star size={16} className="text-red-500" />,
  },

  abaixo: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    icon: <ArrowDown size={16} className="text-amber-500" />,
  },

  dentro: {
    bg: "bg-green-50",
    border: "border-green-300",
    icon: <Circle size={16} className="text-green-500" />,
  },

  acima: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    icon: <ArrowUp size={16} className="text-blue-500" />,
  },
};

export const EvaluationTableRow = ({
  topic,
  answer,
  onSelect,
}) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-slate-50/40 transition-colors">

      {/* Número */}

      <td className="w-20 px-4 py-6 text-center align-top">

        <div className="flex justify-center">

          <span className="
            w-10
            h-10
            rounded-lg
            bg-indigo-50
            text-indigo-600
            font-semibold
            flex
            items-center
            justify-center
          ">
            {String(topic.id).padStart(2, "0")}
          </span>

        </div>

      </td>

      {/* Critério */}

      <td className="w-[320px] px-6 py-6 align-top">

        <h3 className="font-semibold text-gray-800 text-[17px]">
          {topic.title}
        </h3>

        <p className="mt-2 text-[14px] text-gray-500 leading-6">
          {topic.description}
        </p>

      </td>

      {/* Alternativas */}

      {topic.options.map((option) => {
        const selected = answer === option.value;

        return (
          <td
            key={option.value}
            className="px-4 py-5 align-top"
          >
            <label
              onClick={() =>
                onSelect(topic.id, option.value)
              }
              className={`
                cursor-pointer
                block
                rounded-xl
                border
                transition-all
                duration-200
                p-4
                h-full

                ${
                  selected
                    ? `${optionStyle[option.value].bg} ${optionStyle[option.value].border} shadow-sm`
                    : "border-transparent hover:bg-gray-50"
                }
              `}
            >
              <div className="flex items-start gap-3">

                <input
                  type="radio"
                  name={`topic-${topic.id}`}
                  checked={selected}
                  onChange={() =>
                    onSelect(topic.id, option.value)
                  }
                  className="mt-1 accent-[#21528A]"
                />

                <div className="flex-1">

                  <div className="flex items-center gap-2 mb-3">

                    {optionStyle[option.value].icon}

                    <span className="font-medium text-sm capitalize">
                      {option.value === "critico" &&
                        "Crítico"}

                      {option.value === "abaixo" &&
                        "Abaixo"}

                      {option.value === "dentro" &&
                        "Dentro"}

                      {option.value === "acima" &&
                        "Acima"}
                    </span>

                  </div>

                  <p className="text-sm leading-6 text-gray-600">
                    {option.text}
                  </p>

                </div>

              </div>

            </label>

          </td>
        );
      })}
    </tr>
  );
};