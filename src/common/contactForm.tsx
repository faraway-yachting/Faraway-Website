"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { styles, combine } from "@/styles";
import { type FieldName, type FieldConfig } from "@/data/contact/formFields";

type BaseFieldConfig = {
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";
    required?: boolean;
    options?: { value: string; label: string }[];
    gridCols?: number;
};

type ContactFormProps<T extends Record<string, string> = Record<FieldName, string>> = {
    formFields: BaseFieldConfig[];
    initialFormState: T;
    onSubmit: (formData: T) => void;
    submitButtonText?: string;
    formSpacing?: string;
    centerButton?: boolean;
};

function ContactForm<T extends Record<string, string> = Record<FieldName, string>>({ 
    formFields, 
    initialFormState, 
    onSubmit,
    submitButtonText = "Submit",
    formSpacing = "space-y-4",
    centerButton = false
}: ContactFormProps<T>) {
    const pathname = usePathname();
    const [focusedFields, setFocusedFields] = useState<Set<string>>(new Set());
    const [formData, setFormData] = useState<T>(initialFormState);

    // Get label for field, with conditional override for message field
    const getFieldLabel = (field: BaseFieldConfig) => {
        if (field.name === "message" && pathname === "/best-of-phukets-islands-cabincharter") {
            return "Any other comments or requests?";
        }
        return field.label;
    };

    const handleFocus = (fieldName: string) => {
        setFocusedFields(prev => new Set(prev).add(fieldName));
    };

    const handleBlur = (fieldName: string) => {
        setFocusedFields(prev => {
            const newSet = new Set(prev);
            newSet.delete(fieldName);
            return newSet;
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        // Only allow numbers and common phone characters for phone and whatsapp fields
        if (name === "phone" || name === "whatsapp") {
            // Allow only numbers, spaces, +, -, and parentheses
            const filteredValue = value.replace(/[^0-9+\-() ]/g, '');
            setFormData(prev => ({
                ...prev,
                [name]: filteredValue,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    
    const getLabelClasses = (fieldName: string) =>
        combine(
            "absolute left-0 pointer-events-none transition-all duration-200 font-inter",
            focusedFields.has(fieldName) || formData[fieldName]
                ? "-top-1.3 text-[14px] font-semibold text-zink"
                : `top-[26px] ${styles.p2} text-gray-400`
        );

    const getFieldBorderClasses = (fieldName: string) => {
        const hasValue = !!formData[fieldName];
        const isFocused = focusedFields.has(fieldName);
        return (isFocused || hasValue) ? "border-zink" : "border-[#BFCFD3]";
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const renderField = (field: BaseFieldConfig) => {
        const fieldValue = formData[field.name];
        const hasValue = !!fieldValue;
        const isFocused = focusedFields.has(field.name);
        const isSelect = field.type === "select";
        const isTextarea = field.type === "textarea";
        const isDateField = field.type === "date";
        const isPhoneField = field.name === "phone" || field.name === "whatsapp";
        const shouldShowDatePlaceholder = isDateField && !hasValue && isFocused;

        const baseInputClasses = combine(
            "w-full px-0 pt-7 pb-2 border-0 border-b-2 focus:outline-none focus:border-zink transition-colors bg-transparent",
            styles.p2,
            "font-sourceSanspro",
            getFieldBorderClasses(field.name)
        );

        const inputClasses = combine(
            baseInputClasses,
            isSelect 
                ? "ps-3 pr-8 appearance-none" 
                : isTextarea 
                    ? "pt-6 pb-3 resize-none" 
                    : "",
            hasValue && !isSelect && !isDateField ? "text-zink" : 
            hasValue && isDateField ? "text-zink" :
            isSelect && hasValue ? "text-zink" : 
            isSelect ? "text-[#7F8C8F]" : 
            isDateField && !hasValue && !isFocused ? "text-transparent placeholder:text-transparent" :
            isDateField && !hasValue && isFocused ? "text-gray-400" :
            "text-transparent",
            shouldShowDatePlaceholder ? "placeholder:text-gray-400 [&::-webkit-calendar-picker-indicator]:opacity-50" : 
            isDateField && !hasValue && !isFocused ? "[&::-webkit-calendar-picker-indicator]:opacity-0" : ""
        );

        const fieldElement = isSelect ? (
            <div className="relative">
                <select
                    id={field.name}
                    name={field.name}
                    value={fieldValue}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className={inputClasses}
                >
                    <option value="" disabled hidden></option>
                    {field.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-end pb-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        ) : isTextarea ? (
            <textarea
                id={field.name}
                name={field.name}
                rows={2}
                value={fieldValue}
                onChange={handleInputChange}
                onFocus={() => handleFocus(field.name)}
                onBlur={() => handleBlur(field.name)}
                className={inputClasses}
            />
        ) : (
            <input
                type={field.type}
                id={field.name}
                name={field.name}
                autoComplete={field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.name === "name" ? "name" : undefined}
                required={field.required}
                min={field.type === "number" ? "1" : undefined}
                inputMode={isPhoneField ? "numeric" : undefined}
                pattern={isPhoneField ? "[0-9+\\-() ]*" : undefined}
                placeholder={shouldShowDatePlaceholder ? "Select date" : undefined}
                value={fieldValue}
                onChange={handleInputChange}
                onFocus={() => handleFocus(field.name)}
                onBlur={() => handleBlur(field.name)}
                className={inputClasses}
            />
        );

        return (
            <div key={field.name}>
                <div className="relative">
                    <label
                        htmlFor={field.name}
                        className={getLabelClasses(field.name)}
                    >
                        {getFieldLabel(field)} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {fieldElement}
                </div>
            </div>
        );
    };

    const renderFormRows = () => {
        const rows: BaseFieldConfig[][] = [];
        let currentRow: BaseFieldConfig[] = [];

        formFields.forEach((field) => {
            if (field.gridCols === 2) {
                if (currentRow.length === 0) {
                    currentRow.push(field);
                } else {
                    currentRow.push(field);
                    rows.push(currentRow);
                    currentRow = [];
                }
            } else {
                if (currentRow.length > 0) {
                    rows.push(currentRow);
                    currentRow = [];
                }
                rows.push([field]);
            }
        });

        if (currentRow.length > 0) {
            rows.push(currentRow);
        }

        return rows.map((row, rowIndex) => {
            const gapClass = pathname === "/best-of-phukets-islands-cabincharter" 
                ? "gap-10" 
                : "gap-3 md:gap-6";
            
            return (
                <div key={rowIndex} className={combine(
                    row[0].gridCols === 2 ? `grid grid-cols-1 md:grid-cols-2 ${gapClass}` : "",
                    "mb-4"
                )}>
                    {row.map(field => renderField(field))}
                </div>
            );
        });
    };

    return (
        <form onSubmit={handleSubmit} className={formSpacing}>
            {renderFormRows()}
            
            {/* Submit Button */}
            <div className={combine("pt-2", centerButton ? "flex justify-center" : "")}>
                <button
                    type="submit"
                    className={combine(
                        " bg-zink text-white px-9 py-3 rounded-md hover:bg-[#D6AB62] transition-colors duration-200 font-semibold",
                        styles.p2
                    )}
                >
                    {submitButtonText}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;

