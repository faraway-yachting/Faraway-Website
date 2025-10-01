import { styles, combine } from "@/styles";

type HeadingContentProps = {
    heading: string;
    description?: string;
};

const HeadingContent = ({ heading, description }: HeadingContentProps) => {
    return (
        <div className={styles.container}>
            <h2 className={combine(styles.h2, "font-extrabold text-zink text-center text-zink capitalize")} style={{ boxShadow: "#00000040" }}>
                {heading}
               </h2>

            <img src="/images/rframe.png" alt="" className={combine(" md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto")} />
            {description &&(
            <p className={combine(styles.p3, "text-center font-inter text-zink", styles.px1, styles.containerXl, "mx-auto")}>
                {description}
            </p>
            )}
        </div>
    )
}
export default HeadingContent