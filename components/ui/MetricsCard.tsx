import Image from "next/image"

const MetricsCard = ({title, value, percentage, icon}: {title: string, value: string | number, percentage: number, icon: React.ReactNode}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon}
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
            <div className="flex items-center gap-2">
                {percentage && percentage > 0 ? (
                    <span className="text-sm text-green-500 flex items-center">
                        <Image
                            src="https://img.icons8.com/material-outlined/100/00c951/up.png"
                            alt="Up"
                            className="w-3 h-3"
                            width={16}
                            height={16}
                        />
                        {percentage}%
                    </span>
                ) : percentage === 0 ?
                <span className="text-sm text-gray-500 flex items-center">
                    <Image 
                        src="https://img.icons8.com/material-outlined/100/989898/minus.png"
                        alt="Up"
                        className="w-3 h-3"
                        width={16}
                        height={16}
                    />
                    {percentage}%
                </span>
                : percentage && percentage < 0 ? (
                    <span className="text-sm text-red-500 flex items-center">
                        <Image 
                            src="https://img.icons8.com/material-outlined/100/fb2c36/down.png"
                            alt="Down"
                            className="w-3 h-3"
                            width={16}
                            height={16}
                        />
                        {percentage}%
                    </span>
                ) : null}
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className=" text-gray-900 font-bold text-2xl">{value}</span>
            </div>
        </div>
    </div>
  )
}

export default MetricsCard