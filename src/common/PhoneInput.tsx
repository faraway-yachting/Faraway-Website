"use client";
import { parsePhoneNumber, getCountryCallingCode } from "react-phone-number-input";
import { styles, combine } from "@/styles";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CountrySelector from "./CountrySelector";

interface PhoneInputProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    isFocused: boolean;
    hasValue: boolean;
    required?: boolean;
    label: string;
}

export default function PhoneInput({
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    isFocused,
    hasValue,
    required,
    label,
}: PhoneInputProps) {
    const [isFocusedInternal, setIsFocusedInternal] = useState(false);
    const [countryCode, setCountryCode] = useState<string>("TH");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const isInitialMount = useRef(true);

    // Parse existing value to extract country and number
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (value) {
                try {
                    const parsed = parsePhoneNumber(value);
                    if (parsed) {
                        setCountryCode(parsed.country || "TH");
                        setPhoneNumber(parsed.nationalNumber || "");
                    } else {
                        const match = value.match(/^\+(\d+)/);
                        if (match) {
                            setPhoneNumber(value.replace(/^\+\d+\s*/, ""));
                        } else {
                            setPhoneNumber(value);
                        }
                    }
                } catch {
                    setPhoneNumber(value);
                }
            }
        }
        // Only sync external value changes, not internal state changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const hasPhoneData = useMemo(() => !!phoneNumber, [phoneNumber]);
    
    const getFieldBorderClasses = useCallback(() => {
        return (isFocused || isFocusedInternal || hasPhoneData) ? "border-zink" : "border-[#BFCFD3]";
    }, [isFocused, isFocusedInternal, hasPhoneData]);

    const updatePhoneValue = useCallback((country: string, number: string) => {
        if (number) {
            try {
                const callingCode = getCountryCallingCode(country as any);
                const fullNumber = `+${callingCode}${number}`;
                onChange(fullNumber);
            } catch {
                onChange(number);
            }
        } else {
            onChange("");
        }
    }, [onChange]);

    const handleCountryChange = useCallback((country: string) => {
        setCountryCode(country);
        updatePhoneValue(country, phoneNumber);
    }, [phoneNumber, updatePhoneValue]);

    const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = e.target.value.replace(/[^0-9]/g, '');
        setPhoneNumber(newNumber);
        updatePhoneValue(countryCode, newNumber);
    }, [countryCode, updatePhoneValue]);

    const getLabelClasses = useCallback(() =>
        combine(
            "absolute left-0 pointer-events-none transition-all duration-300 ease-in-out font-inter z-10",
            hasPhoneData
                ? "opacity-0 invisible -top-1.3 text-[14px] font-semibold text-zink"
                : `opacity-100 visible top-[26px] ${styles.p2} text-gray-400`
        ), [hasPhoneData]);

    const borderClass = useMemo(() => getFieldBorderClasses(), [getFieldBorderClasses]);
    const textColor = useMemo(() => hasPhoneData ? "text-zink" : "text-transparent", [hasPhoneData]);
    const labelClasses = useMemo(() => getLabelClasses(), [getLabelClasses]);

    const handleInputFocus = useCallback(() => {
        setIsFocusedInternal(true);
        onFocus();
    }, [onFocus]);

    const handleInputBlur = useCallback(() => {
        setIsFocusedInternal(false);
        onBlur();
    }, [onBlur]);

    return (
        <div className="relative">
            <div className="flex items-end gap-2">
                <CountrySelector
                    value={countryCode}
                    onChange={handleCountryChange}
                    isFocused={isFocused || isFocusedInternal}
                    hasValue={hasPhoneData}
                    borderClass={borderClass}
                    textColor={(hasPhoneData || isFocused || isFocusedInternal) ? "text-zink" : "text-gray-400"}
                />
                
                <div className="relative flex-1">
                    <label
                        htmlFor={name}
                        className={labelClasses}
                    >
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    
                    <input
                        ref={inputRef}
                        type="tel"
                        id={name}
                        name={name}
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        required={required}
                        inputMode="tel"
                        className={combine(
                            "w-full px-0 pb-2 border-0 border-b-2 focus:outline-none focus:border-zink transition-all duration-300 ease-in-out bg-transparent",
                            styles.p2,
                            "font-sourceSanspro",
                            borderClass,
                            textColor
                        )}
                        style={{
                            paddingTop: hasPhoneData ? "8px" : "28px",
                            paddingBottom: "8px",
                            borderBottomWidth: "2px",
                            borderBottomStyle: "solid",
                            borderBottomColor: (isFocused || isFocusedInternal || hasPhoneData) ? "#012A50" : "#BFCFD3",
                            boxSizing: "border-box",
                            transition: "padding-top 0.3s ease-in-out, border-color 0.3s ease-in-out",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

