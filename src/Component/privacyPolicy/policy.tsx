"use client"
import HeadingContent from "@/common/heading";
import PngIcons from "@/icons/pngIcon";
import { privacyPolicySections } from "@/data/privacypolicy/privacyPolicyData";
import SetSail from "@/common/yarchtcharter";
import { styles, combine } from "@/styles";

// Reusable components
const SectionHeading = ({ children, icon }: { children: string; icon?: string }) => (
    <h2 className={combine(styles.h5, "text-zink font-semibold mb-5 border-b-2 border-gray-300 pb-4")}>
        {icon && <img src={icon} alt="" className="w-8 h-8 inline mr-3" />}
        {children}
    </h2>
);

const BulletList = ({ items, columns = 2 }: { items: string[]; columns?: number }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} go-0 md:gap-8`}>
        {Array.from({ length: columns }, (_, colIndex) => {
            const startIndex = Math.ceil(items.length / columns) * colIndex;
            const endIndex = Math.min(startIndex + Math.ceil(items.length / columns), items.length);
            const columnItems = items.slice(startIndex, endIndex);

            return (
                <div key={colIndex} className="space-y-2">
                    {columnItems.map((item, index) => (
                        <div key={startIndex + index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-zink rounded-full mt-2 flex-shrink-0"></div>
                            <p className={combine("text-zink", styles.p3)}>{item}</p>
                        </div>
                    ))}
                </div>
            );
        })}
    </div>
);

const InfoCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
    <div className="bg-white rounded-lg p-4 lg:p-6 ">
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex-shrink-0">
                <img
                    src={icon}
                    alt={`${title} icon`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </div>
            <div>
                <p className={combine("font-semibold text-zink mb-2", styles.p3)}>{title}</p>
                <p className={combine("text-zink max-w-3xs", styles.p4)}>{description}</p>
            </div>
        </div>
    </div>
);

const ContentSection = ({ title, children, className = "", icon }: { title: string; children: React.ReactNode; className?: string; icon?: string }) => (
    <div className={`mb-7 ${className}`}>
        <SectionHeading icon={icon}>{title}</SectionHeading>
        {children}
    </div>
);

const PolicyInfo = () => {
    const renderSectionContent = (section: any) => {
        switch (section.type) {
            case 'cards':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 font-sourceSansPro">
                        {(section.data as any[]).map((item: any, index: number) => (
                            <InfoCard key={index} {...item} />
                        ))}
                    </div>
                );

            case 'bullets':
                return (
                    <>
                        {section.subtitle && <p className={combine("text-zink font-sourceSansPro font-semibold mb-3 md:mb-6", styles.p2)}>{section.subtitle}</p>}
                        <BulletList items={section.data as string[]} />
                    </>
                );

            case 'content':
                return (
                    <div className="">
                        {Array.isArray(section.data) ? (
                            <div className="space-y-4 font-sourceSansPro">
                                {(section.data as string[]).map((item, index) => (
                                    <p key={index} className={combine("text-zink leading-relaxed", styles.p4)}>{item}</p>
                                ))}
                            </div>
                        ) : (
                            <p className={combine("text-zink leading-relaxed", styles.p4)}>{section.data as string}</p>
                        )}
                    </div>
                );

            case 'contact':
                const contactData = section.data as any;
                return (
                    <div className="bg-white rounded-lg">
                        <p className="text-zink leading-relaxed mb-4 font-sourceSansPro">{contactData.description}</p>
                        <p className="text-zink">
                            <span className={combine("font-semibold me-2", styles.p2)}>By Email: </span>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=info@far-away.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zink hover:text-[#D6AB62] underline">
                                {contactData.email}
                            </a>
                        </p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <div className={combine(styles.container, "my-12 md:my-14 lg:my-16 xl:my-18")}>
                {/* Main Heading */}
                <div className="mb-7 md:mb-10 lg:mb-16">
                    <HeadingContent heading="Privacy Policy – Your Data, Your Trust" />
                </div>

                {/* Dynamic Sections */}
                {privacyPolicySections.map((section) => (
                    <ContentSection key={section.id} title={section.title} icon={section.icon}>
                        {renderSectionContent(section)}
                    </ContentSection>
                ))}
            </div>
            <div className="mt-12">
                <SetSail
                    bgImage={PngIcons.policyimg3}
                    bgColor="#00000066"
                    overlayOpacity={0.3}
                />
            </div>
        </div>

    );
};

export default PolicyInfo;