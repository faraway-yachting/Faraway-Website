"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { styles, combine } from "@/styles";

interface CountrySelectorProps {
    value: string | undefined;
    onChange: (country: string) => void;
    isFocused: boolean;
    hasValue: boolean;
    borderClass: string;
    textColor: string;
}

export default function CountrySelector({
    value,
    onChange,
    isFocused,
    hasValue,
    borderClass,
    textColor,
}: CountrySelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const countries = useMemo(() => 
        getCountries().map((country) => ({
            code: country,
            name: (en as Record<string, string>)[country] || country,
            dialCode: `+${getCountryCallingCode(country)}`,
            flag: country,
        })), []
    );

    const selectedCountry = useMemo(() => 
        value 
            ? countries.find(c => c.code === value) || countries.find(c => c.code === "TH")
            : countries.find(c => c.code === "TH"),
        [value, countries]
    );

    const filteredCountries = useMemo(() => 
        countries.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.dialCode.includes(searchTerm) ||
            country.code.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [countries, searchTerm]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setSearchTerm("");
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleCountrySelect = useCallback((countryCode: string) => {
        onChange(countryCode);
        setIsOpen(false);
        setSearchTerm("");
    }, [onChange]);

    const getCountryFlag = useCallback((countryCode: string) => {
        // Convert country code to flag emoji
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }, []);

    const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(prev => !prev);
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                type="button"
                onClick={handleToggle}
                className={combine(
                    "flex items-center gap-2 border-0 border-b-2 focus:outline-none transition-all duration-300 ease-in-out bg-transparent",
                    "pb-2 pr-2 mr-2 cursor-pointer",
                    "font-sourceSanspro text-sm",
                    borderClass,
                    textColor
                )}
                style={{
                    paddingTop: "28px",
                    paddingBottom: "8px",
                    paddingLeft: "0",
                    paddingRight: "8px",
                    marginRight: "8px",
                    borderTop: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    borderBottomWidth: "2px",
                    borderBottomStyle: "solid",
                    borderBottomColor: (isFocused || hasValue) ? "#012A50" : "#BFCFD3",
                    backgroundColor: "transparent",
                    color: textColor,
                    fontSize: "14px",
                    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    transition: "border-color 0.3s ease-in-out, color 0.3s ease-in-out",
                }}
            >
                <span className="text-lg" style={{ lineHeight: "1" }}>
                    {selectedCountry ? getCountryFlag(selectedCountry.code) : "🇹🇭"}
                </span>
                <span>{selectedCountry?.dialCode || "+66"}</span>
                <svg
                    className={combine(
                        "w-4 h-4 transition-transform duration-300 ease-in-out",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-80 max-h-96 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200"
                >
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Search country..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zink text-sm"
                            autoFocus
                        />
                    </div>

                    {/* Country List */}
                    <div className="overflow-y-auto max-h-80">
                        {filteredCountries.map((country) => {
                            const isSelected = country.code === value;
                            return (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => handleCountrySelect(country.code)}
                                    className={combine(
                                        "w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors",
                                        isSelected ? "bg-gray-50" : ""
                                    )}
                                >
                                    <span className="text-xl" style={{ lineHeight: "1", minWidth: "28px" }}>
                                        {getCountryFlag(country.code)}
                                    </span>
                                    <span className="flex-1 text-sm font-sourceSanspro text-zink">
                                        {country.name}
                                    </span>
                                    <span className="text-sm text-gray-500 font-sourceSanspro">
                                        {country.dialCode}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

