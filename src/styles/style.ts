// Common Styles - ONE FILE ONLY
// Contains only the most basic styles used everywhere on the website

export const styles = {
  // H tags - Same styling everywhere
  h1: "text-[30px] md:text-[34px] lg:text-[38px] xl:text-[48px] font-bold font-playfair",
  h2: "text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold font-playfair",
  h3: "text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-playfair ",
  h4: "text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-sourceSansPro",
  h5: "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] ",
  h6: "text-[18px] md:text-[20px] lg:text-[22px] font-normal font-playfair",

  // P tags - Same styling everywhere (3 sizes with responsiveness)

  p1: "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]",
  p2: "text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-inter",
  p3: "text-[15px] md:text-[14px] lg:text-[18px] xl:text-[19px] font-inter",
  p4: "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]  font-inter",
  text1: "text-sm md:text-base lg:text-lg",
  gap1: "gap-8 lg:gap-12",
  // bg Styling
  bgImage: "relative w-full bg-cover bg-center bg-no-repeat overflow-hidden",
  grid3Col: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15",
  grid4Col: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 xl:gap-15",
  grid2Col: "grid grid-cols-1 md:grid-cols-2 gap-8",

  // Layout - Same containers everywhere
  container: "max-w-7xl mx-auto px-4",
  containerLarge: "max-w-[78.2rem] mx-auto",
  containerXl: "md:max-w-xl lg:max-w-2xl xl:max-w-3xl leading-relaxed",
  // Flex - Same alignment everywhere
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexCol: "flex flex-col",

  // Responsive classes actually used in website
  px1: "px-4 xl:px-0",
  px2: "px-8 md:px-6",
  px3: "px-4 md:px-6",
  px4: "px-6 lg:px-8 xl:px-10",
  px5: "px-4 xl:px-8",

  padding1: "p-7 md:p-7 lg:p-8",
  mt1: "mt-5 md:mt-6 lg:mt-7 xl:mt-9",
  py1: "py-1.5 md:py-2.5",
  py2: "py-3 md:py-4",
  py4: "py-6 lg:py-10",
  pb1: "pb-5 lg:pb-7",

  // Height REsponsive classes
  minH1: "min-h-[57vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh]",
  minH3: "bg-center min-h-[52vh] md:min-h-[62vh] lg:min-h-[72vh] xl:min-h-[70vh]",
  minH2: "min-h-[70vh] md:min-h-[73vh] lg:min-h-[79vh] xl:min-h-[85vh]",
  top1: "top-3 md:top-4 lg:top-5 xl:top-6",

  w1: "w-20 md:w-24 lg:w-32 xl:w-36",
  w2: "w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px]",
  w3: "w-[100px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px]",

  height1: "h-[320px] md:h-[410px] lg:h-[440px] xl:h-[450px]",

  mb1: "mb-3 md:mb-4",
  my1: "my-4 md:my-6",
  mt2: "mt-6 md:mt-8",
  mb2: "mb-10 md:mb-14 lg:mb-16 xl:mb-18",
  mt3: "mt-5 lg:mt-7",
  margin4: "mt-8 lg:mt-2 xl:mt-0",
  mt5: "mt-5 lg:mt-0",
  my2: "my-6 md:my-8",
  my3: "xl:my-14 lg:my-10 md:my-8 my-7",

  // Loading spinner
  loadingSpinner: "w-12 h-12 border-4 border-gray-200 border-t-zink rounded-full animate-spin",
};

// Simple function to combine classes
export const combine = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

