import authorPortrait from "@/assets/author-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Author Portrait */}
        <div className="lg:order-1 fade-in">
          <div className="relative">
            <img
              src={authorPortrait}
              alt="Elena Richardson - Author Portrait"
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg shadow-book hover-lift"
            />
          </div>
        </div>

        {/* Author Info */}
        <div className="lg:order-2 slide-up">
          <h1 className="heading-display mb-8">
            AUTHOR
          </h1>
          
          <div className="space-y-6">
            <h2 className="heading-primary text-primary">
              About Elena Richardson
            </h2>
            
            <div className="body-large space-y-4">
              <p>
                Elena Richardson is an award-winning author whose literary works explore the 
                intricate relationships between nature, memory, and human connection. Her novels 
                have been translated into twelve languages and have garnered critical acclaim 
                worldwide.
              </p>
              
              <p className="body-elegant">
                With a background in environmental science and a Master's in Creative Writing 
                from Columbia University, Elena brings a unique perspective to contemporary 
                fiction. She currently divides her time between her writing studio in Vermont 
                and traveling for research.
              </p>
              
              <p className="body-elegant">
                Her latest novel, "The Mountain," was longlisted for the National Book Award 
                and selected as a New York Times Notable Book of the Year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;