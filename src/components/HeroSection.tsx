import nicholasSparksPortrait from "@/assets/Nicholas-Sparks-min.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Author Portrait */}
        <div className="lg:order-1 fade-in">
          <div className="relative">
            <img
              src={nicholasSparksPortrait}
              alt="Nicholas Sparks - Author Portrait"
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg shadow-book hover-lift"
            />
          </div>
        </div>

        {/* Author Info */}
        <div className="lg:order-2 slide-up">
          <h1 className="heading-display mb-8">
            Nicholas Sparks
          </h1>
          
          <div className="space-y-6">
{/*             <h2 className="heading-primary text-primary">
              About Nicholas Sparks
            </h2> */}
            
            <div className="body-large space-y-4">
              <p>
                Nicholas Sparks is one of the world's most beloved storytellers, known for his 
                deeply emotional novels about love, loss, and second chances. All of his books 
                have been New York Times bestsellers, with over 130 million copies sold worldwide 
                in more than 50 languages.
              </p>
              
              <p className="body-elegant">
                Born in Omaha, Nebraska, Nicholas graduated from the University of Notre Dame 
                and published his first novel, "The Notebook," in 1996. Eleven of his novels 
                have been adapted into major motion pictures, including The Notebook, Dear John, 
                and A Walk to Remember.
              </p>
              
              <p className="body-elegant">
                His stories explore themes of faith, destiny, and the enduring power of love 
                that transcends time and circumstance. Nicholas lives in North Carolina with 
                his family and continues to inspire readers around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
