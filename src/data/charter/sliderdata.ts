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
    image3: PngIcons.review1,
    desp: "We had an amazing family trip! The staff onboard were truly outstanding—friendly, attentive, and made the experience even more enjoyable. The boat was very spacious and comfortable, providing plenty of room for everyone to relax. The food was absolutely delicious and exceeded our expectations. Highly recommended!",
    author: "Samer Zeinni",
  },
  {
    id: "2",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.review2,
    desp: "We booked the Sail La Vie yacht for an 8-hour cruise to Maithon and Coral Island, and it was the highlight of my bachelorette trip! The yacht was spacious for our group of 16, and the crew was outstanding—warm, attentive, and made everything seamless. From welcome drinks to fresh meals, clean cabins, snorkeling gear, paddleboard, and even an inflatable slide, everything was top-notch. Highly recommend Faraway Yacht for an unforgettable Phuket experience!",
    author: "Mamata Gopal",
  },
  {
    id: "3",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.review3,
    desp: "Had the most awesome day out with Faraway Yachting Team. #hotchilliteam were absolutely incredible. Very knowledgeable on the best places to go, where the best snorkelling is, ridiculously amazing food and really lovely. Very personalised Service, really easy communication on WhatsApp, we were greeted upon arrival and taken to the Boat. Boat was spotless and it was just a marvellous day.",
    author: "Freya Buckle",
  },
  {
    id: "4",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.review4,
    desp: "Unforgettable trip on the Amadeus! The crew was amazing – attentive, professional, and made us feel welcome right away. The route was perfectly planned with stunning bays, great snorkeling, and a magical sunset. Everything was well-organized, from the delicious food to the equipment and smooth coordination. Huge thanks to Milk, Sunny & K for making it so special. Highly recommended for a unique catamaran adventure in Thailand!",
    author: "Sarah T",
  },
  {
    id: "5",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.review5,
    desp: "Truly had such an incredible time with Faraway Yachting!!🥹 From start to finish, the team went above and beyond to make sure our day was nothing short of amazing. We had the best time sliding down the water slide on the boat, using the underwater scooter, eating the delicious food on board, and just being on the water. The crew just made us feel special! This was hands down the highlight of my trip to Thailand. If you’re thinking about booking, DO IT! Thank you Faraway for the best experience!!",
    author: "Kierra Maggs",
  },
  {
    id: "4",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.review6,
    desp:"How a wonderful and complete service ! A professional and responsible crew from the first impression. The boat is neat clean and the creo, so loving and responsive towards any need of the family, with kids on board we couldn't imagine taling another service. This was , is, THE best",
    author: "Efy Bona",
  },
];


