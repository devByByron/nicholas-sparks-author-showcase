import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import bookMountain from "@/assets/book-mountain.jpg";
import bookSea from "@/assets/book-sea.jpg";
import bookNight from "@/assets/book-night.jpg";
import bookForest from "@/assets/book-forest.jpg";

const booksData = {
  "the-mountain": {
    title: "The Mountain",
    cover: bookMountain,
    year: "2024",
    publisher: "Riverhead Books",
    isbn: "978-0-735-21234-5",
    pages: 312,
    description: "A haunting exploration of loss and redemption set against the backdrop of the Appalachian Mountains. When Sarah returns to her childhood home after her father's death, she must confront the ghosts of her past and the secrets her family has kept buried for decades.",
    longDescription: "Elena Richardson's latest masterpiece weaves together themes of environmental destruction, family legacy, and personal healing in this unforgettable novel. Set in the coal mining region of West Virginia, 'The Mountain' follows Sarah Chen as she inherits her estranged father's property and discovers a community fighting to preserve their way of life. Through Sarah's journey, Richardson examines how we can find hope and connection even in the face of seemingly insurmountable loss.",
    amazonUrl: "https://amazon.com/dp/example-mountain",
    awards: ["Longlisted for National Book Award", "New York Times Notable Book"]
  },
  "the-sea": {
    title: "The Sea",
    cover: bookSea,
    year: "2022",
    publisher: "Knopf",
    isbn: "978-0-307-26789-1",
    pages: 289,
    description: "An intimate portrait of a coastal community facing the inevitability of change. As rising seas threaten their island home, three families must decide whether to fight or flee.",
    longDescription: "In this powerful novel about climate change and community resilience, Richardson tells the story of Tidal Island, a fictional barrier island off the coast of North Carolina. Through the eyes of three interconnected families, we witness how environmental crisis can both divide and unite communities. 'The Sea' is both a love letter to coastal communities and a urgent call to action.",
    amazonUrl: "https://amazon.com/dp/example-sea",
    awards: ["Finalist for the Pulitzer Prize", "Winner of the Environmental Fiction Award"]
  },
  "the-night": {
    title: "The Night",
    cover: bookNight,
    year: "2021",
    publisher: "FSG",
    isbn: "978-0-374-28456-7",
    pages: 256,
    description: "A mesmerizing tale of three generations of women and the secrets they keep. Set across decades, this novel explores how family trauma echoes through time.",
    longDescription: "Richardson's most personal work to date traces the lives of grandmother, mother, and daughter as they navigate love, loss, and forgiveness. Beginning in 1960s Korea and spanning to present-day California, 'The Night' is a meditation on memory, identity, and the stories we tell ourselves to survive.",
    amazonUrl: "https://amazon.com/dp/example-night",
    awards: ["Winner of the Asian American Literary Award", "NPR Best Book of the Year"]
  },
  "forest": {
    title: "Forest",
    cover: bookForest,
    year: "2019",
    publisher: "Graywolf Press",
    isbn: "978-1-555-97789-3",
    pages: 234,
    description: "Elena's debut novel that launched her literary career with critical acclaim. A young botanist discovers ancient secrets hidden in an old-growth forest.",
    longDescription: "Richardson's stunning debut introduces us to Dr. Maya Patel, a botanist who stumbles upon evidence of an ancient civilization while studying endangered plants in the Pacific Northwest. As Maya delves deeper into the forest's mysteries, she must confront her own relationship with nature and science. 'Forest' established Richardson as a vital new voice in environmental literature.",
    amazonUrl: "https://amazon.com/dp/example-forest",
    awards: ["Debut Novel of the Year", "Pacific Northwest Book Award"]
  }
};

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  
  if (!bookId || !booksData[bookId as keyof typeof booksData]) {
    return <Navigate to="/books" replace />;
  }
  
  const book = booksData[bookId as keyof typeof booksData];

  return (
    <Layout>
      <article className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="lg:col-span-2 fade-in">
              <img
                src={book.cover}
                alt={`${book.title} book cover`}
                className="w-full max-w-sm mx-auto shadow-book rounded-lg"
              />
            </div>

            {/* Book Details */}
            <div className="lg:col-span-3 slide-up space-y-8">
              <header>
                <h1 className="heading-primary mb-4">{book.title}</h1>
                <p className="body-elegant">by Elena Richardson</p>
              </header>

              <div className="space-y-6">
                <p className="body-large">{book.description}</p>
                <p className="body-elegant">{book.longDescription}</p>
              </div>

              {/* Publication Details */}
              <div className="bg-gradient-card p-6 rounded-lg space-y-3">
                <h3 className="heading-secondary text-lg">Publication Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Year:</span>
                    <span className="ml-2 font-medium">{book.year}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Publisher:</span>
                    <span className="ml-2 font-medium">{book.publisher}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pages:</span>
                    <span className="ml-2 font-medium">{book.pages}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ISBN:</span>
                    <span className="ml-2 font-medium font-mono text-xs">{book.isbn}</span>
                  </div>
                </div>
              </div>

              {/* Awards */}
              {book.awards && book.awards.length > 0 && (
                <div className="space-y-3">
                  <h3 className="heading-secondary text-lg">Awards & Recognition</h3>
                  <ul className="space-y-2">
                    {book.awards.map((award, index) => (
                      <li key={index} className="body-elegant flex items-center">
                        <span className="w-2 h-2 bg-author-brand rounded-full mr-3"></span>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buy Button */}
              <div className="pt-4">
                <Button
                  variant="elegant"
                  size="lg"
                  asChild
                  className="hover-lift"
                >
                  <a 
                    href={book.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Buy on Amazon
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BookDetail;