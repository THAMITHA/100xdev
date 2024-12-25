export const RevenueCard = ({title,amount, orderCount})=>{
    return <div className="bg-white rounded shadow-md p-4 justify-center flex-col text-gray-700"> 
        <div className= "flex">
            <span>{title}</span>
            <span className="ml-1 pt-1 flex justify-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
                ₹{amount}
            </div>
            {orderCount? <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
                <div className="flex">
                <div className="text-blue-700">
                {orderCount} order(s)
                </div>
            <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            </div>
            </div>: null}
        </div>
    </div>
}