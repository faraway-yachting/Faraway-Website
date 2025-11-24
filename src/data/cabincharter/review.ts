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
export const momentsTestimonials: Testimonial[] = [
  {
    id: "1",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview1,
    desp: "I went on the 5 night/6 day cruise on Amadeus, and it was absolutely incredible!  The crew was amazing, and the food and views were to die for! It’s certainly an experience I won’t soon forget.For anyone who is looking into booking this, definitely check out the FAQ on their website before committing. If you are very prone to heat related illnesses (like heat exhaustion), it may be best to skip this. There wasn’t a ton of wind during our week, it got pretty hot at night and it was hard to get cool even with the fans and the hatch open in the cabin.",
    author: "Marina",
  },
  {
    id: "2",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview2,
    desp: "We spent 7 nights/8 days on Mozart and Amadeus cruising the islands, and it was an incredible experience. Captain Sunee and chef Milk were fantastic—keeping us safe and serving delicious meals. We saw whales, dolphins, and caught plenty of fish, with snorkeling in the south offering the clearest waters and marine life. SUPs, kayaks, pool noodles, and snorkel gear were available, making the trip even more fun. Cabins are compact with different layouts, so choose carefully, but overall this was a wonderful way to explore the islands of Phuket!",
    author: "Ronelle Tang",
  },
  {
    id: "3",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview3,
    desp: "We just returned from an exceptional 6 day boat trip aboard the Amadeus to the islands around Phuket. I highly recommend this trip for anyone who is an avid snorkeler, enjoys delicious Thai food and loves watching sunsets and sunrises in beautiful coves with new friends. The crew - Sunee, Milk and Bus - were truly and absolutely outstanding. We booked a double cabin with a bathroom, which was super comfortable. Don’t delay, book this amazing trip today!",
    author: "Claudia Williams",
  },
  {
    id: "4",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview4,
    desp: "We enjoyed a 5-day sailing cruise on the catamaran Amadeus, exploring beautiful islands east of Phuket. The crew was fantastic—Captain Sunee, his wife with her excellent Thai meals, and M, who was always helpful. Despite my disability (right foot amputation), I had no issues enjoying kayaking, snorkeling, or moving around the very comfortable catamaran (just protect the prosthesis when using the tender). I recommend booking 6–7 months in advance to secure the larger front cabins. Overall, a truly wonderful experience that I highly recommend for discovering Thailand in an authentic way.",
    author: "Roberto Bucher",
  },
  {
    id: "5",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview5,
    desp: "We were able to experience absolutely unique, wonderful, and relaxing days on the Amadeus with the SUPER crew Asuni, Milk, & M. Thanks to them, we saw the most beautiful spots and the most wonderful sunrises and sunsets. We enjoyed snorkeling, chilling on the catamaran, and the most delicious Thai dishes. The friendly crew was always there, so helpful and attentive. We felt very comfortable, and saying goodbye today was really hard. We'll come again ⛵️ Thank you, thank you, thank you for this wonderful time!",
    author: "Fra Bo",
  },
  {
    id: "6",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview6,
    desp: "An amazing 4D3N sailing trip around Phang Nga Bay and many stunning islands.The crew—Khun Sunee, Bus, and Milk—were incredible, looking after our every need. Khun Milk prepared delicious 5-star meals every day, with great variety and fresh fish caught by Bus. Captain Sunee carefully planned each day so we enjoyed new adventures as well as time to relax. From snorkeling, kayaking, and paddle boarding to swimming in crystal waters, everything was perfectly arranged. A truly unforgettable trip with a fantastic crew—I highly recommend the Faraway Amadeus team!",
    author: "Craig Horrigan",
  },
  {
    id: "7",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview7,
    desp: "Hello, I just spent 6 days on the Amadeus boat in Thailand. Everything was perfect. The boat, the cruise, the food, and the crew took great care of us... nothing to say, thank you for this vacation.",
    author: "Eric Robyn",
  },
  {
    id: "8",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.cabinreview8,
    desp: "An unforgettable 6-day sailing trip in Thailand, perfectly organized from start to finish. The Amadeus cabins were spacious, spotless, and cleaned daily. Milk’s cooking was outstanding—delicious, varied meals, fresh fruit, and snacks. The crew was exceptional: Bus anticipated every need, and Captain Sunee kept us smiling. From kayaking and SUP to stunning sunrises and sunsets, every moment was magical. Huge thanks to Sunee, Milk, Bus (and Flo!)—5 stars, we’ll definitely be back!",
    author: "Christian Lesting",
  },
];