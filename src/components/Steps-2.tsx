type Steps = {
steps1 : string;
steps2: string;
steps3 : string;
stepStyles?: Array<{
    className: string;
    background: string;
  }>;
}
const Steps = ({steps1,steps2,steps3, stepStyles =[]} :Steps ) => { 
  return (
    <div className=" align-middle mx-auto text-center">
    <a
      className="
      inline-flex
      items-center
      justify-center
      w-1/2
      py-3
      font-medium
      leading-none
      tracking-wider
      border-b-2 border-gray-200
      sm:px-6 sm:w-auto sm:justify-start
      hover:text-gray-900
  "
    >
    {steps1}
    </a>
    <a
      className="

      inline-flex
      items-center
      justify-center
      w-1/2
      py-3
      font-medium
      leading-none
      tracking-wider
      text-indigo-500
      bg-gray-100
      border-b-2 border-indigo-500
      rounded-t
      sm:px-6 sm:w-auto sm:justify-start
  "
    >
      {steps2}
    </a>
    <a
      className="
    inline-flex
    items-center
    justify-center
    w-1/2
    py-3
    font-medium
    leading-none
    tracking-wider
    border-b-2 border-gray-200
    sm:px-6 sm:w-auto sm:justify-start
    hover:text-gray-900
  "
    >
    {steps3}
    </a>
  </div>
  )
}
export default Steps