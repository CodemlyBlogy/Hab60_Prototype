import Link from 'next/link';
import ButtonComponent from './Dashboard';
import ImagesProperties from './ImagesProperties';
import Settings from './Settings';
import Title from './Tilte';
import UsersPic from './UsersPic';

const Containers = () => {
  return (
    <>
      <div className="text-center mt-10 font-bold text-xl">
        <Title title="Dashboard" />
      </div>
      <UsersPic
         image="/assets/pictures/Kouley Scarf Profil.jpeg"
         width={60}
        height={60}
        userName={'Moussa'}
        Jobtitle={'Promotor'}
      />
      <ButtonComponent Btntitle="Edit Profil" />
      <Settings />
      <div className="grid grid-cols-3 gap-4">

      <ImagesProperties titles={"House 1"} Proimages={'/assets/pictures/picHouse2.jpeg'} />
      <ImagesProperties titles={"House 2"} Proimages={'/assets/pictures/picHouse2.jpeg'} />
      <ImagesProperties titles={"House 3"} Proimages={'/assets/pictures/picHouse2.jpeg'} />
      </div>
        <article className=" bg-blue-500 text-white text-center w-52 mx-auto mt-12 gap-6 font-bold">
         <Link href="/Form">
            <ButtonComponent Btntitle='Add Property'/>   
            </Link>      
        </article>
      
    </>
  );
};
export default Containers;
