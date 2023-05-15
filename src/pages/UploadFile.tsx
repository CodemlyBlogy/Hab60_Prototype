import Header from '@/components/Header';
import Steps from '@/components/Steps-2';
import UploadPictures from '@/components/UploadPictures';
import Link from 'next/link';


const UploadFile = () => {
  const stepStyles = [
    {
      className: 'text-xl font-bold mb-4 text-blue-500',
      background: 'bg-gray-200',
    },
    {
      className: 'text-xl font-bold mb-4 text-green-500',
      background: 'bg-gray-300',
    },
    {
      className: 'text-xl font-bold mb-4 text-red-500',
      background: 'bg-gray-400',
    },
  ];
  return (
    <div>
      <Header />
      <section className="text-center">
        <Steps steps1=" 1-Start" steps2="2-Uplaod" steps3="3-Submit" stepStyles={stepStyles} />
      </section>
      <article>
        <Link href = "SubmitFiles">
        <UploadPictures UplaodingPic="Upload Pic" TakingPic="Take Pictures" />
        </Link>
      </article>
    </div>
  );
};
export default UploadFile;
