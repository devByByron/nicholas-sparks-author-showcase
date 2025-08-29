import { Link } from "react-router-dom";
import bookNotebook from "@/assets/nicholas-sparks-the-notebook-min.jpg";
import bookDearJohn from "@/assets/nicholas-sparks-dear-john-min.jpg";
import bookWalkToRemember from "@/assets/nicholas-sparks-a-walk-to-remember-min.jpg";
import bookSafeHaven from "@/assets/nicholas-sparks-safe-haven-min.jpg";
import bookTheLastSong from "@/assets/nicholas-sparks-the-last-song-min.jpg";

const books = [
  {
    id: "the-notebook",
    title: "The Notebook",
    cover: bookNotebook,
    year: "1996",
    description: "A timeless love story that follows Noah and Allie through their passionate young romance and enduring love."
  },
  {
    id: "dear-john",
    title: "Dear John",
    cover: bookDearJohn,
    year: "2006",
    description: "A soldier falls in love with a college student, but their relationship is tested by war and time."
  },
  {
    id: "a-walk-to-remember",
    title: "A Walk to Remember",
    cover: bookWalkToRemember,
    year: "1999",
    description: "A story of teenage love and faith that will stay with you long after the last page."
  },
  {
    id: "safe-haven",
    title: "Safe Haven",
    cover: bookSafeHaven,
    year: "2010",
    description: "A woman with a mysterious past finds love and safety in a small North Carolina town."
  },
  //   {
  //   id: "the-last-song",
  //   title: "The Last Song",
  //   cover: bookTheLastSong,
  //   year: "2009",
  //   description: "Seventeen year old Veronica Ronnie Miller's life was turned upside-down when her parents divorced and her father moved from New York City to Wilmington, North Carolina."
  // }
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