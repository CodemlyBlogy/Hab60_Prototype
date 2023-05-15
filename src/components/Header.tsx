import Link from 'next/link';
import ButtonComponent from './Dashboard';
import Title from './Tilte';
import Image from 'next/image';
import ImagesProperties from './ImagesProperties';

const Header = () => {
  return (
    <>
      <article className="flex justify-between ">
        <section className="font-bold">
          <Link href="/">
            <Title title="Habitat60" />
          </Link>
        </section>
        <section className="flex justify-center align-middle gap-2 ">
          <ButtonComponent Btntitle={'Dashboard'} />
          <Title title="John Chris" />
        
          <Image className="rounded-full m-2 w-10 h-10 object-cover" src="/assets/pictures/Kouley Scarf Profil.jpeg" width="100" height="100" alt="" />

        </section>
      </article>
    </>
  );
};
export default Header;
