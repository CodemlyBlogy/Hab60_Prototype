type PropertiesImages = {
  Proimages: string;
  titles: string;
};

const ImagesProperties = ({ Proimages, titles }: PropertiesImages) => {
  return (
    <>
      <section >
        <img className="rounded w-56 m-4 object-cover" src={Proimages} alt="" />
        <h3 className="ml-4 mt-1">{titles}</h3>
      </section>
    </>
  );
};
export default ImagesProperties;
