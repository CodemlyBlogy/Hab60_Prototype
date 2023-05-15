import Link from 'next/link';
import Header from './Header';
import Title from './Tilte';
import AddArea from './AddArea';
import { useState } from 'react';
import Steps from './Steps-3';

const Submit360 = () => {
  const [isClicked, setIsClicked] = useState(false);

  function HandleClicked() {
    setIsClicked(true);
  }
  return (
    <div>
      <Header />
      <article className="text-center m-8">
        <span className="font-bold">
          <Title title="Picture Uploading" />
        </span>
        <p>Upload pictures by clicking on each boxes to submit pictures </p>
      </article>
      <Steps steps1=" 1-Start" steps2="2-Uplaod" steps3="3-Submit" />
      <AddArea />
      <article>
        <div className="flex justify-center m-1">
          <button className="
                    px-6
                    py-2
                    mt-4
                    text-sm
                    font-medium
                    leading-5
                    text-center text-blue-600
                    transition-colors
                    duration-150
                    outline 
                    rounded-lg border-4
                    focus:outline-none"  onClick={HandleClicked}>
                    Add More Area</button>
          <h3 className="text-center p-2">or</h3>
          <button
            className="
                    px-6
                    py-2
                    mt-4
                    text-sm font-bold
                    leading-5 align-middle
                    text-center text-white
                    transition-colors
                    duration-150
                    bg-blue-600
                    border border-transparent
                    rounded-lg
                    hover:bg-blue-700
                    focus:outline-none"
          >
            <Link href="/SuccessfullySent">Next</Link>
          </button>
          <div className='flex justify-center m-1'>

        
          {isClicked && <AddArea/>}
          </div>
        </div>
        <div>

        </div>
      </article>
    </div>
  );
};
export default Submit360;
