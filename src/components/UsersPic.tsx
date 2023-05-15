import Image from "next/image"

type UserPic = {
    image : string, 
    width : number, 
    height : number
    userName : string
    Jobtitle : string
}

const UsersPic = ({image , width, height, userName, Jobtitle } : UserPic) => {
  return (
    <div  className="flex ">
        <Image className="rounded-full w-32 h-32 object-cover" src={image} width={width} height={height} alt="" />

        <span className="m-2">
        <h2 className="font-semibold">
{userName}
        </h2>
        <h6>
        {Jobtitle}
        </h6>
        </span>
        
    </div>
  )
}
export default UsersPic