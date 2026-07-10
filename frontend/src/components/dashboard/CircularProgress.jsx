interface CircularProgressProps {
  percentage: number;
  color: string;
}

export function CircularProgress({
  percentage,
  color,
}: CircularProgressProps) {
  const radius = 54;
  const stroke = 12;

  const normalizedRadius = radius - stroke * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <svg
      width="120"
      height="120"
      className="-rotate-90"
    >
      <circle
        stroke="#ECECEC"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      <circle
        stroke={color}
        fill="transparent"
        strokeLinecap="round"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}