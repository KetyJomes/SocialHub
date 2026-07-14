export const StatusBadge = ({ status, color }) => {
  const colors = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-700",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
    },
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-700",
    },
  };

  const selected = colors[color] || colors.gray;

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        whitespace-nowrap
        ${selected.bg}
        ${selected.text}
      `}
    >
      {status}
    </span>
  );
};