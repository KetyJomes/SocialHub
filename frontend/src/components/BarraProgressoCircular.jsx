export const BarraProgressoCircular = ({
    porcentagem
}) => {

    const radius = 70;
    const stroke = 12;

    const normalizedRadius = radius - stroke / 2;

    const circumference =
        normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
        circumference -
        (porcentagem / 100) * circumference;

    return (

        <div className="relative w-44 h-44">

            <svg
                width="176"
                height="176"
                className="-rotate-90"
            >

                <circle
                    stroke="#ECECEC"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="88"
                    cy="88"
                />

                <circle
                    stroke="#5B4CF5"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx="88"
                    cy="88"
                />

            </svg>

            <div className="absolute inset-0 flex items-center justify-center">

                <span className="text-5xl font-bold text-gray-900">
                    {porcentagem}%
                </span>

            </div>

        </div>

    );
}