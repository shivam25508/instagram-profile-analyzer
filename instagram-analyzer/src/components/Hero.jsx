import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-screen'>
      <h1 className='bg-[#49B9FF]/80 px-4 py-2 rounded-full text-center font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-4xl'>
        Beyond the Likes — Real Insights, Real Influence.
      </h1>
      <ProfileCard />
    </div>
  );
};

export default Hero;
