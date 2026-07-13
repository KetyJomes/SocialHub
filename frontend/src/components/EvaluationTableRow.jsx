import {
  ArrowDown,
  ArrowUp,
  Circle,
  Star,
} from "lucide-react";

const optionStyle = {
  critico: {
    bg: "bg-red-100",
    border: "border-red-500",
    ring: "ring-red-200",
    hover: "hover:bg-red-50",
    icon: <Star size={16} className="text-red-500" />,
  },

  abaixo: {
    bg: "bg-amber-100",
    border: "border-amber-500",
    ring: "ring-amber-200",
    hover: "hover:bg-amber-50",
    icon: <ArrowDown size={16} className="text-amber-500" />,
  },

  dentro: {
    bg: "bg-green-100",
    border: "border-green-500",
    ring: "ring-green-200",
    hover: "hover:bg-green-50",
    icon: <Circle size={16} className="text-green-500" />,
  },

  acima: {
    bg: "bg-blue-100",
    border: "border-blue-500",
    ring: "ring-blue-200",
    hover: "hover:bg-blue-50",
    icon: <ArrowUp size={16} className="text-blue-500" />,
  },
};

export const EvaluationTableRow = ({
  topic,
  answer,
  onSelect,
}) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-slate-50 transition-colors">

      {/* Número */}

      <td className="w-20 px-4 py-6 text-center align-top">

        <div className="flex justify-center">

          <span
            className="
              w-10
              h-10
              rounded-lg
              bg-indigo-50
              text-indigo-600
              font-semibold
              flex
              items-center
              justify-center
            "
          >
            {String(topic.id).padStart(2, "0")}
          </span>

        </div>

      </td>

      {/* Competência */}

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
              onClick={() => onSelect(topic.id, option.value)}
              className={`
                block
                h-full
                cursor-pointer
                rounded-xl
                border-2
                p-4
                transition-all
                duration-200
                transform

                ${
                  selected
                    ? `
                        ${optionStyle[option.value].bg}
                        ${optionStyle[option.value].border}
                        ring-2
                        ${optionStyle[option.value].ring}
                        shadow-md
                        scale-[1.02]
                      `
                    : `
                        border-gray-200
                        bg-white
                        ${optionStyle[option.value].hover}
                        hover:border-gray-300
                        hover:shadow-sm
                      `
                }
              `}
            >

              <div className="flex items-start gap-3">

                <input
                  type="radio"
                  name={`topic-${topic.id}`}
                  checked={selected}
                  onChange={() => onSelect(topic.id, option.value)}
                  className="mt-1 accent-[#21528A]"
                />

                <div className="flex-1">

                  <div className="flex items-center gap-2 mb-3">

                    {optionStyle[option.value].icon}

                    <span className="font-semibold text-sm capitalize">

                      {option.value === "critico" && "Crítico"}
                      {option.value === "abaixo" && "Abaixo"}
                      {option.value === "dentro" && "Dentro"}
                      {option.value === "acima" && "Acima"}

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