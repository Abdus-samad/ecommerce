import { useRouter } from "next/router"



const Topfiltered = (props) => {
    const { query } = useRouter()
    return (
        <div className='flex items-center justify-between w-full px-5 pb-4 bg-white pt-4 sticky lg:hidden  top-0 border-t'>
            <div className='flex items-baseline w-full'>
                {query.category ?   <span className='text-sm font-bold text-gray-800 py-1 px-3 bg-gray-100 rounded'>{query.category}</span> :
               <span className='text-base text-gray-800 font-bold'>No Category Selected</span>}
            </div>
                <a onClick={props.showDrawer}
                className='text-base font-bold cursor-pointer transition-all duration-200 rounded flex items-center justify-center flex-shrink-0 text-center text-green-600'>Filter</a>
        </div>
    )
}

export default Topfiltered