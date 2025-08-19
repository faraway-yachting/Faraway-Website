type HeadingContentProps = {
    heading: string;
    description?: string;
};

const HeadingContent = ({ heading, description }: HeadingContentProps) => {
    return (
        <div className="max-w-7xl mx-auto">
            <p className="px-4 font-playfair capitalize text-zink font-extrabold text-[24px] md:text-[29px] lg:text-[32px] xl:text-[36px] text-center text-green" style={{ boxShadow: "#00000040" }}>
                {heading}
            </p>

            <img src="/images/rframe.png" alt="" className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] my-3 mx-auto" />
            {description &&(
            <p className="text-center font-inter px-4 text-zink text-[16px] lg:text-[19px] max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                {description}
            </p>
            )}
        </div>
    )
}
export default HeadingContent