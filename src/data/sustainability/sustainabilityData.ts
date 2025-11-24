export interface SustainabilityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

export interface SustainabilitySection {
  id: string;
  title: string;
  subtitle: string;
  features: SustainabilityFeature[];
}

export const greenTechnologyData: SustainabilitySection = {
  id: "green-technology",
  title: "Green Technology",
  subtitle: "Advanced eco-friendly systems that reduce our environmental impact",
  features: [
    {
      id: "solar-power",
      title: "Solar Power Systems",
      description: "Solar panels and lithium-ion batteries reduce diesel usage significantly",
      icon: "solar-panel",
      highlight: "48V Systems"
    },
    {
      id: "fuel-efficient",
      title: "Fuel-Efficient Design",
      description: "Our lightweight aluminum catamarans are among the most fuel-efficient in Phuket",
      icon: "fuel-efficiency",
      highlight: "Lightweight Aluminum"
    },
    {
      id: "battery-tech",
      title: "Advanced Battery Technology",
      description: "Lithium-ion batteries provide clean energy storage for onboard systems",
      icon: "battery",
      highlight: "Clean Energy Storage"
    }
  ]
};

export const ecoFriendlyPracticesData: SustainabilitySection = {
  id: "eco-practices",
  title: "Eco-Friendly Practices",
  subtitle: "Daily practices that protect the Andaman Sea and marine environment",
  features: [
    {
      id: "water-filtration",
      title: "Onboard Water Filtration",
      description: "Advanced filtration systems reduce bottled plastic use significantly",
      icon: "water-filter",
      highlight: "Plastic-Free"
    },
    {
      id: "waste-recycling",
      title: "Waste Separation & Recycling",
      description: "Comprehensive waste management with separation and recycling programs",
      icon: "recycling",
      highlight: "Zero Waste Goal"
    },
    {
      id: "ocean-safe-products",
      title: "Ocean-Safe Products",
      description: "Only biodegradable, ocean-safe cleaning products are used onboard",
      icon: "ocean-safe",
      highlight: "Biodegradable"
    }
  ]
};

export const sustainabilityHeroData = {
  title: "Sustainability and Eco-Friendly Yacht Rentals",
  subtitle: "Faraway Yachting is committed to protecting the Andaman Sea with sustainable practices",
  description: "By choosing us, you're helping preserve Phuket's marine beauty for the future",
  backgroundImage: "/images/sustainability-hero.jpg",
  stats: [
    { number: "75%", label: "Reduction in Diesel Usage" },
    { number: "100%", label: "Ocean-Safe Products" },
    { number: "90%", label: "Waste Recycled" }
  ]
};
