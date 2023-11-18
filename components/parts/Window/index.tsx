type Props = {
  children: React.ReactNode
}

export const Window = (props: Props) => {
  return (
    <div className=" transition-colors ease-linear shadow-stone-800 shadow-2xl border-[0.1px] border-secondary-content rounded-md mb-10">
      <div className="w-full h-12 rounded-t-lg bg-base-200 flex justify-start items-center space-x-2 px-4">
        <span className="w-3 h-3 border-2 border-transparent  rounded-full bg-red-400 "></span>
        <span className="w-3 h-3 border-2 border-transparent rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 border-2 border-transparent rounded-full bg-green-400"></span>
      </div>
      <div className="bg-base-300 border-t-0 justify-center w-full items-center rounded-b-lg p-10 grid grid-cols-1 md:grid-cols-2">
        {props.children}
      </div>
    </div>
  )
}
