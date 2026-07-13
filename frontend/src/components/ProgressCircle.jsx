export const ProgressCircle = ({ value, color }) => {

    const radius = 45;

    const stroke = 8;

    const normalizedRadius = radius - stroke * 0.5;

    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
        circumference - (value / 100) * circumference;

    return (

        <div className="relative w-28 h-28">

            <svg
                height={radius * 2}
                width={radius * 2}
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
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />

            </svg>

        </div>

    );

};