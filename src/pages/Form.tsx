import Image from 'next/image';
import Containers from '../components/Containers';
import Header from '../components/Header';
import Maps from '@/components/Maps';
import Steps from '@/components/Steps';
import Title from '@/components/Tilte';
import Link from 'next/link';


function Form() {
  return (
    <>
      <section className="container">
        <Header />
        <div className="flex items-center min-h-screen bg-gray-50">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="text-center font-bold m-10">
              <Title title="Property Form" />
              <p className=" font-normal">
                Fill the below form and click Next for the next Step
              </p>
            </div>
            <section className="text-center">
              <Steps steps1='Step 1' steps2='2' steps3='3'/>
            </section>
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                <label htmlFor="Select">Select Type:</label>
                    <select name="" id="Select">
                      <option value="Promotor">Promotor</option>
                      <option value="Promotor">Consummer</option>
                    </select>
                  <div className="mt-4 mb-4">
                    <label className="block text-sm"> First Name </label>
                    <input
                      type="text"
                      className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm"> Last Name </label>
                    <input
                      type="text"
                      className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm"> Phone Number </label>
                    <input
                      className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                      placeholder="Phone Number"
                      type="number"
                    />
                  </div>
                  <div className="flex justify-end">
                      <a
                        className="
                    px-6
                    py-2
                    mt-4
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-150
                    bg-blue-600
                    border border-transparent
                    rounded-lg
                    hover:bg-blue-700
                    focus:outline-none"
                        href="#"
                      >
                    <Link href="/UploadFile">

                        Next
                        </Link>

                      </a>
                  </div>
                </div>
              </div>
              <div className="h-32 md:h-auto md:w-1/2">
                {/* <Image
            src={}
              className="object-cover w-full h-full"
              
            /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
