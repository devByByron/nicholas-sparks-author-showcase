import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import bookNotebook from "@/assets/nicholas-sparks-the-notebook-min.jpg";
import bookDearJohn from "@/assets/nicholas-sparks-dear-john-min.jpg";
import bookWalkToRemember from "@/assets/nicholas-sparks-a-walk-to-remember-min.jpg";
import bookSafeHaven from "@/assets/nicholas-sparks-safe-haven-min.jpg";
import bookTheLastSong from "@/assets/nicholas-sparks-the-last-song-min.jpg";

const booksData = {
  "the-notebook": {
    title: "The Notebook",
    cover: bookNotebook,
    year: "1996",
    publisher: "Warner Books",
    isbn: "978-0-446-60355-4",
    pages: 214,
    description: "A timeless love story that follows Noah and Allie through their passionate young romance and enduring love that withstands the test of time.",
    longDescription: "Set in the enchanting coastal town of New Bern, North Carolina, 'The Notebook' tells the unforgettable story of Noah Calhoun and Allie Nelson. Their summer romance is interrupted by family disapproval and World War II, but their love endures through letters, separation, and the passage of time. This deeply moving novel explores themes of destiny, devotion, and the belief that true love never dies.",
    amazonUrl: "https://www.amazon.com/Notebook-Nicholas-Sparks/dp/0446520802",
    awards: ["New York Times Bestseller", "Adapted into major motion picture"]
  },
  "dear-john": {
    title: "Dear John",
    cover: bookDearJohn,
    year: "2006",
    publisher: "Warner Books",
    isbn: "978-0-446-57997-6",
    pages: 276,
    description: "A soldier falls in love with a college student, but their relationship is tested by war, time, and the ultimate sacrifice of love.",
    longDescription: "John Tyree is a rebel who enlists in the Army after high school. While on leave, he meets Savannah Curtis, a college student volunteering with Habitat for Humanity. Their two-week romance leads to a long-distance relationship sustained by letters. But after September 11th, John must choose between love and duty. This heart-wrenching story explores the complexities of love, sacrifice, and the true meaning of patriotism.",
    amazonUrl: "https://www.amazon.com/Dear-John-Nicholas-Sparks/dp/0446567337/ref=sr_1_1?crid=1452B5S988ZZR&dib=eyJ2IjoiMSJ9.sYxnMVpIaVu2yAbOoJ8dh_AVOfNzMa_lPGixb6KH8F78hS5pvtZ_yGaOThE5ZqD1KFtN055wkSJcA3YXyob_1_V9_8NhAjOGrSdz8aaCSQ8JWYV604sQv4dmDxHO-ycmZ05NTXmKuqfYstnY11BnAixd4PokZY9Tle90TRnHhy_hCUAxsNE4oHSgTriKuRvrb80oI6iYipbdgpo3Zwe0wZeEGKKyJAHuzFiKTAKjOnk.J75TvXTFNqs6Ij4tg-OireVXMFSwPsZ-IIhkpXYzTIc&dib_tag=se&keywords=Nicholas+Sparks+dear+john&qid=1756461412&s=books&sprefix=nicholas+sparks+dear+john%2Cstripbooks-intl-ship%2C348&sr=1-1",
    awards: ["New York Times Bestseller", "#1 Bestseller", "Adapted into major motion picture"]
  },
  "a-walk-to-remember": {
    title: "A Walk to Remember",
    cover: bookWalkToRemember,
    year: "1999",
    publisher: "Warner Books",
    isbn: "978-0-446-52553-2",
    pages: 240,
    description: "A story of teenage love and faith that transforms a rebellious young man and teaches him the true meaning of love and loss.",
    longDescription: "Set in Beaufort, North Carolina, this touching novel tells the story of Landon Carter, a popular but aimless teenager, and Jamie Sullivan, the unpopular daughter of the town's minister. When circumstances bring them together, Landon discovers that Jamie is hiding a tragic secret. Their unlikely romance becomes a journey of discovery, faith, and the transformative power of unconditional love.",
    amazonUrl: "https://www.amazon.com/Walk-Remember-Nicholas-Sparks/dp/1538764695/ref=sr_1_1?crid=1CE07V9NH64XE&dib=eyJ2IjoiMSJ9.rcR2gsNimuvQHYlZYLMKmF_vtvmBprGXPloBD9itzdQzqIkKvuKQRmscSjMtsG0-Jo5tMe5la35Jyeo7IW23-zb-Sh4vgwo9j2Hu2sBkluKMOs6-NcVCAEGyod_nXUW_dz2MQYbMJ6kin2XEeXKNTCviKfNwSJZdm0wr9uA2EtJbf-A8jUfjVBtTzUHeuObhK-JxmTYimzFL2I0HhhmRTk2OGqwpsvsNgfK9wllJhcg.TgoNACywojzAbou0l5eQPN6FScYiTVkwwBVjFfCMfL0&dib_tag=se&keywords=Nicholas+Sparks+a+walk+to+remember&qid=1756461534&s=books&sprefix=nicholas+sparks+a+walk+to+remember%2Cstripbooks-intl-ship%2C336&sr=1-1",
    awards: ["New York Times Bestseller", "Adapted into major motion picture", "Young Adult Fiction Award"]
  },
  "safe-haven": {
    title: "Safe Haven",
    cover: bookSafeHaven,
    year: "2010",
    publisher: "Grand Central Publishing",
    isbn: "978-0-446-57999-0",
    pages: 352,
    description: "A woman with a mysterious past finds love and safety in a small North Carolina town, but her secrets threaten to destroy her new life.",
    longDescription: "Katie arrives in the small town of Southport, North Carolina, with little more than a mysterious past and the determination to start over. She finds work, makes friends, and meets Alex, a widowed father of two young children. But when Katie's past catches up with her, she must choose between the life she's built and the safety of those she's come to love. This gripping tale combines romance with suspense in classic Sparks fashion.",
    amazonUrl: "https://www.amazon.com/Safe-Haven-Nicholas-Sparks/dp/1455523550/ref=sims_dp_d_dex_popular_subs_t3_v6_d_sccl_1_1/138-6994111-2316622?pd_rd_w=ZbPNn&content-id=amzn1.sym.e94802a9-3b18-4cbd-b410-204abb9c6aed&pf_rd_p=e94802a9-3b18-4cbd-b410-204abb9c6aed&pf_rd_r=W0Y581H0801VYF325S68&pd_rd_wg=KnQ8T&pd_rd_r=2ebb15f5-6fd1-4415-8c70-8eaa9d2979d8&pd_rd_i=1455523550&psc=1",
    awards: ["New York Times Bestseller", "#1 Bestseller", "Adapted into major motion picture"]
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
                <p className="body-elegant">by Nicholas Sparks</p>
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