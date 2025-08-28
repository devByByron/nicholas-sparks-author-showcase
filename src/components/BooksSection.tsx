import { Link } from "react-router-dom";
import bookMountain from "@/assets/book-mountain.jpg";
import bookSea from "@/assets/book-sea.jpg";
import bookNight from "@/assets/book-night.jpg";
import bookForest from "@/assets/book-forest.jpg";

const books = [
  {
    id: "the-mountain",
    title: "The Mountain",
    cover: bookMountain,
    year: "2024",
    description: "A haunting exploration of loss and redemption set against the backdrop of the Appalachian Mountains."
  },
  {
    id: "the-sea",
    title: "The Sea",
    cover: bookSea,
    year: "2022",
    description: "An intimate portrait of a coastal community facing the inevitability of change."
  },
  {
    id: "the-night",
    title: "The Night",
    cover: bookNight,
    year: "2021",
    description: "A mesmerizing tale of three generations of women and the secrets they keep."
  },
  {
    id: "forest",
    title: "Forest",
    cover: bookForest,
    year: "2019",
    description: "Elena's debut novel that launched her literary career with critical acclaim."
  }
];

const BooksSection = () => {
  return (
    <section className="bg-gradient-card py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="slide-up">
          <h2 className="heading-primary mb-12 lg:mb-16">
            Books
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {books.map((book, index) => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className="group fade-in block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg shadow-book group-hover:shadow-elegant transition-all duration-500 group-hover:scale-105">
                    <img
                      src={book.cover}
                      alt={`${book.title} book cover`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="heading-secondary group-hover:text-author-brand transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      {book.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;