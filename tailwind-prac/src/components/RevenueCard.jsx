export const RevenueCard = ({title,orderCount,amount})=>{
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-700 flex justify-center flex-col">
            <div className="flex">
            <div>
            {title}
            </div>
            <div className="ml-2 pt-1 bg-red-500 flex justify-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" stroke-width="1.5" stroke="currentColor" class="w-4 h-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-bold text-4xl">
                ₹{amount}
            </div>
            {orderCount? <div className="flex underline font-medium flex flex-col justify-center">
                <div className="flex">
                <div className="text-blue-700">{orderCount} order(s)
                </div>
                <div>
                <svg className="fill-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</div>
</div>
</div>:null}
        </div>
    </div>
}