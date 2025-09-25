// Common content types for reusable components

export interface HeroContentProps {
  heading: string;
  subheading?: string;
  backgroundImage: string;
  dividerImage?: string;
  button?: string;
  description: string;
  buttontext?: string;
  contactRef?: React.RefObject<HTMLDivElement | null>;
  showContactButton?: boolean;
}

export interface HeadingContentProps {
  heading: string;
  description?: string;
}

export interface AboutFarawayContentProps {
  heading: string;
  description: string;
  highlightedText1: string;
  highlightedText2: string;
  missionLink: string;
}

export interface VoyageCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface VoyageSectionProps {
  heading: string;
  description: string;
  cards: VoyageCardProps[];
}

export interface SetDealProps {
  heading: string;
  description: string;
}
