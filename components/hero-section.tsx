import SearchBar from "./search-bar";

const HeroSection = () => {
  return (
    <section>
      <div className="mb-16">
        <div className="text-center pt-5">
          <h1 className="font-bold text-5xl">
            <div className="text-dark-violet uppercase mb-4 mt-8">
              Join the circus
            </div>
            <div className="text-dark-violet uppercase hidden lg:block">
              of smart investments
            </div>
          </h1>
        </div>

        <div
          id="search"
          className="mt-8 flex flex-row justify-center items-center"
        >
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
