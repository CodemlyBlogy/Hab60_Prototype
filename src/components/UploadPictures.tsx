

type UploadsPictures= {
UplaodingPic : string, 
TakingPic:string,

}

const UploadPictures = ({UplaodingPic, TakingPic } : UploadsPictures) => {
  return (
    <div className="m-10">
        <section className="flex justify-center gap-4 bg-slate-200 border-r-4  w-3/5 mx-auto p-20 text-slate-950" >
            <div className=" bg-slate-100 p-2" >
                {UplaodingPic}
            </div>
            <h2>
                Or
            </h2>
            <div  className=" bg-slate-100 p-2">
                {TakingPic}
            </div>

        </section>
    </div>
  )
}
export default UploadPictures