import { styles, combine } from "@/styles";
const Destinations_Section = () => {
  //  Array Data
  const data = [
    {
      label: "Private yacht in phuket",
      Description: "At Faraway Yachting Co. Ltd., we understand that your holiday is a special time, and we want to make it as unique and unforgettable as possible. That's why we offer a wide range of private yacht charters in Phuket, tailored to your individual needs and interests. Our private yacht charters are the perfect way to explore the stunning islands and coastline of Phuket. With our experienced and knowledgeable crew, you can be sure that you're in good hands every step of the way."
    },
    {
      label: "Bareboat charter phuket",
      Description:
        "Set sail for adventure with a bareboat charter in Phuket! Experience the freedom of exploring the Andaman Sea at your own pace, choosing your own itinerary and anchoring wherever you please. With its stunning islands, crystal-clear waters and vibrant marine life, Phuket is the ideal destination for a bareboat charter. Our bareboat fleet includes a variety of yachts and catamarans to choose from, all fully equipped and well-maintained.",
    },
    {
      label: "Best Phuket Catamaran Charter",
      Description:
        "Embark on an unforgettable adventure with a Phuket catamaran charter! These luxurious yachts offer the perfect way to explore the Andaman Sea at your own pace, visiting stunning islands, secluded coves, and vibrant coral reefs. Our catamarans are fully equipped with everything you need for a comfortable and enjoyable stay, including spacious cabins, private bathrooms, and spacious sundecks. You can also enjoy a variety of water activities, such as snorkeling, diving and fishing. Get in touch toady !",
    },
    {
      label: "Luxury yacht in Phuket",
      Description:
        "Imagine sailing through the crystal-clear waters of the Andaman Sea, surrounded by lush green islands and breathtaking scenery. On board your own luxury yacht, you'll enjoy the ultimate in relaxation and comfort, with every detail taken care of by your experienced crew. No matter what you choose to do, a luxury yacht charter Phuket is an unforgettable experience. It's the perfect way to celebrate a special occasion, or simply to indulge in the ultimate vacation.",
    },
    {
      label: "Phuket Boat Rental: Your Gateway to Unforgettable Adventures",
      Description:
        "Phuket is a boater's paradise, with its stunning coastline, secluded islands, and vibrant marine life. A boat rental is the perfect way to explore all that Phuket has to offer, at your own pace and on your own terms. With a boat rental, you can customize your itinerary to suit your interests, whether you're looking for a relaxing getaway or an action-packed adventure. Visit popular tourist destinations like Phang Nga Bay and Phi Phi Islands, or discover hidden gems off the beaten path. Book your Phuket boat rental today with us and start planning your unforgettable maritime adventure!",
    },
    {
      label: "Phuket Yachting: A Luxurious and Unforgettable Experience",
      Description:
        "Phuket, a jewel in the Andaman Sea, is a renowned yachting destination. With its stunning scenery, abundant marine life, and luxurious amenities, Phuket offers an unforgettable experience for boat lovers. From secluded coves to bustling marinas, there's something for everyone to discover on a Phuket yachting charter. Explore hidden coves and beaches, visit idyllic islands, and experience the vibrant marine life. Indulge in luxury and relaxation on a Phuket yachting charter. Enjoy spacious cabins, gourmet meals, and attentive service provided by your experienced crew. Spend your days exploring the island's hidden gems and your nights unwinding on deck under the stars. Plan your trip with us now !",
    },
  ];
  return (
    <section className={combine("bg-white py-16 ",styles.px1)}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {data.map((item, index) => (
            <div key={index} className="max-w-xl bg-white rounded-lg">
              <h3 className={combine("mb-3 leading-tight text-zink",styles.h3)}>
                {item.label}
              </h3>
              <div className="mb-2">
                <img src="/images/rframe4.png" alt="" />
              </div>
              <p className={combine("text-zink leading-relaxed",styles.p3)}>
                {item.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

export default Destinations_Section;
