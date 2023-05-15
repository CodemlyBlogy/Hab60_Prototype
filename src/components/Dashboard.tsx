type BtnTitles = {Btntitle : string}


const ButtonComponent = ({Btntitle} : BtnTitles) => {
  return (
    <div>
        <button className="text-center m-2 p-0.5"  >
        {Btntitle}
        </button>
        </div>
  )
}
export default ButtonComponent