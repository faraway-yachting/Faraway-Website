import PngIcons from "@/icons/pngIcon";

// Type for testimonials
export interface Testimonial {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  desp: string;
  author: string;
}
// Testimonials data
export const overnightTestimonials: Testimonial[] = [
  {
    id: "1",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.nreview1,
    desp: "Our private charter on the Hot Chili was absolutely incredible! The crew — Captain Sam, Russell, and Nok — made our 2-day, 1-night trip to Phi Phi Island unforgettable. Their warm hospitality, spot-on recommendations, and patience made every moment special. The food was outstanding — fresh, flavorful, and clearly made with care. They even taught us a few Thai phrases and surprised us with a birthday celebration on board. More than just a boat trip, it was a truly memorable experience we’ll cherish forever. Highly recommend!",
    author: "Kimberly A",
  },
  {
    id: "2",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.nreview2,
    desp: "Our private charter on the Hot Chili was absolutely incredible! Captain Sam, Russell, and Nok made our 2-day, 1-night trip to Phi Phi Island unforgettable with their warm hospitality, great recommendations, and patience. The food was fresh, flavorful, and clearly made with care. They even taught us Thai phrases and surprised us with a birthday celebration. More than just a boat trip — it was a truly memorable experience we’ll cherish forever. Highly recommend!",
    author: "Ronelle Tang",
  },
  {
    id: "3",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.nreview3,
    desp: "I just returned from an amazing 6-day sailing trip with Faraway Yachting aboard the beautiful catamaran Mozart. The islands were stunning, peaceful, and uncrowded — perfect before the Christmas rush. Captain Lon, Keeta, and Christina were exceptional, from skilled sailing to warm hospitality and delicious meals. Even the brief daily rain added charm. A truly unforgettable experience filled with beauty, laughter, and memories — can’t wait to sail with them again!",
    author: "Gabi Tretter",
  },
  {
    id: "4",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.nreview4,
    desp: "We enjoyed a 5-day sailing cruise on the catamaran Amadeus, exploring beautiful islands east of Phuket. The crew was fantastic—Captain Sunee, his wife with her excellent Thai meals, and M, who was always helpful. Despite my disability (right foot amputation), I had no issues enjoying kayaking, snorkeling, or moving around the very comfortable catamaran (just protect the prosthesis when using the tender). I recommend booking 6–7 months in advance to secure the larger front cabins. Overall, a truly wonderful experience that I highly recommend for discovering Thailand in an authentic way.",
    author: "Karen Harkin",
  },
  {
    id: "5",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.nreview5,
    desp: "I just returned from an incredible 5-night sailing trip with Faraway Yachting aboard the Mozart, and it couldn’t have been better! The islands were stunning, peaceful, and almost tourist-free — a perfect escape before the Christmas rush. The crew was amazing: Captain Lon handled everything expertly, Keeta was friendly and informative, and Christina wowed us with delicious meals from her tiny kitchen. Even the short daily rain added to the experience. It was an unforgettable trip we’ll cherish forever — huge thanks to the wonderful Faraway Yachting team!",
    author: "Ronny Sieber",
  },
];