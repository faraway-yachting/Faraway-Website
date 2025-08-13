export interface TermSection {
  id: string;
  title: string;
  icon: string;
  subsections: TermSubsection[];
}

export interface TermSubsection {
  id: string;
  title: string;
  content: string;
}

export const termsData: TermSection[] = [
  {
    id: "booking",
    title: "1. Booking",
    icon: "MdCreditCard",
    subsections: [
      {
        id: "1.1",
        title: "1.1",
        content: "To book a trip, please confirm availability with us and notify us."
      },
      {
        id: "1.2",
        title: "1.2",
        content: "Upon confirmation, you will receive an invoice (formal or informal, but written) stating the amounts to be paid as a deposit and the outstanding balance. The deposit is due immediately after the invoice has been sent."
      },
      {
        id: "1.3",
        title: "1.3",
        content: "After depositing, please inform us of your payment with a payment slip or similar. Upon receiving this payment into our accounts, we will immediately send you a confirmation."
      },
      {
        id: "1.4",
        title: "1.4",
        content: "We reserve the right to sell the charter to another party after sending the invoice if not paid in time after receiving the invoice. If you require an original copy of this invoice, please state so when making the booking."
      },
      {
        id: "1.5",
        title: "1.5",
        content: "Late payments of the balance may result in your booked space not being secured. Should we be forced to forego your reserved space due to late payment, your booking will be seen as a cancellation, and the relevant charges will apply."
      },
      {
        id: "daycharter-payments",
        title: "1.6 Day Charter Payments",
        content: "Deposit for day charters is 50%, and the outstanding amount needs to be paid 7 days prior to the departure of the boat if not otherwise agreed upon. Bookings made less than 7 days prior to departure are to be paid in full."
      },
      {
        id: "overnight-charter-payments",
        title: "1.7 Overnight Charter Payments",
        content: "The deposit for overnight charters is 30%, and the outstanding balance is to be paid no later than 45 days before the departure date. Bookings made less than 45 days before departure are to be paid in full."
      },
      {
        id: "1.8",
        title: "1.8",
        content: "The booked yacht will not leave the marina before the outstanding amount is paid in full."
      },
      {
        id: "1.9",
        title: "1.9",
        content: "Discounted Charters: All discounted charters are non-refundable."
      },
      {
        id: "1.10",
        title: "1.10",
        content: "Balance Payment for Day Charters: Balance payment for day charters must be made 7 days prior to the charter date. Alternatively, payment can be made in cash onboard (only in THB). If payment is made in another currency, the rate of Kasikorn Bank will apply plus an additional 500 THB to cover the time required for our accounting to exchange the currency at the bank."
      }
    ]
  },
  {
    id: "altering-a-booking",
    title: "2. Altering a Booking",
    icon: "MdSchedule",
    subsections: [
      {
        id: "2.1",
        title: "",
        content: "Minor alterations are usually free of charge, provided they do not interfere with our schedules. Major alterations that interfere with our booking schedules may be treated as cancellations and re-bookings, and the relevant charges may apply."
      }
    ]
  },
  {
    id: "cancellations-and-insurance",
    title: "3. Cancellations and Insurance",
    icon: "MdCancel",
    subsections: [
      {
        id: "3.1",
        title: "3.1",
        content: "We need to be notified of cancellations in writing by email."
      },
      {
        id: "3.2",
        title: "3.2",
        content: "The date we receive the message is the one used in calculating the charge. The following cancellation charges apply:"
      },
      {
        id: "3.2.1",
        title: "3.2.1 Day charter cancellation",
        content: "Longer than 14 days prior to the charter date – there will be a 100 Euro administration fee for cancellations. Less than 14 days prior to the charter date – 50% of the full charter fee will be charged. Less than 7 days prior to departure date – 100% of the full charter fee will be charged."
      },
      {
        id: "3.2.2",
        title: "3.2.2 Overnight charter cancellation",
        content: "60 days or prior to the charter – there will be a 100 Euro administration fee for cancellations. Between 60 and 45 days prior to the charter – 30% of the total charter fee. Less than 45 days – 100% of the charter fee will be charged."
      },
      {
        id: "3.3",
        title: "3.3",
        content: "If the weather is deemed unsafe by the meteorology department of Thailand, then Faraway Yachting Co. Ltd. will cancel the charter and first offer an alternate charter date. If this is not possible (other pre-booked appointments or flights back), a full refund is provided."
      },
      {
        id: "3.4",
        title: "3.4",
        content: "Cancellation by Guests During Charter: No refunds will be given if the charter is canceled by the guests during the charter period."
      }
    ]
  },
  {
    id: "force-majeure",
    title: "4. Force Majeure",
    icon: "MdWarning",
    subsections: [
      {
        id: "4.1",
        title: "",
        content: "No compensation will be paid in the case of unforeseeable and unusual circumstances beyond our control, the consequences of which could not have been avoided even if all due care had been exercised. Such circumstances or events include, but are not limited to, war or threat of war, riot, civil strife, industrial dispute, unavoidable technical problems with transport, closure or congestion of airports, terrorist activity, natural or nuclear disaster, fire, pandemic, and adverse weather conditions."
      }
    ]
  },
  {
    id: "safety",
    title: "5. Safety",
    icon: "MdSecurity",
    subsections: [
      {
        id: "5.1",
        title: "5.1",
        content: "We take safety very seriously, and the captain of the yacht has the discretion to change the planned route if he deems it unsafe. In the event of a route change, no refunds will be provided."
      },
      {
        id: "5.2",
        title: "5.2",
        content: "Where itineraries are given, they may be subject to change based on weather conditions, guest preferences, or other unforeseen circumstances."
      },
      {
        id: "5.3",
        title: "5.3",
        content: "The final decision regarding the itinerary lies with the captain of the trip."
      },
      {
        id: "5.4",
        title: "5.4",
        content: "Passengers must follow the safety instructions provided by our professional crew. Failure to follow instructions may result in the cancellation of the charter without a refund."
      },
      {
        id: "5.5",
        title: "5.5",
        content: "Please note that our insurance does not cover intoxicated passengers. Guests who consume intoxicating substances, including alcohol and drugs, do so at their own risk and may be denied participation in activities or access to certain areas of the yacht for safety reasons."
      },
      {
        id: "5.6",
        title: "5.6",
        content: "Compliance with Team Recommendations: No liability will be accepted if guests act against the recommendations of the Faraway Yachting team."
      }
    ]
  },
  {
    id: "liability",
    title: "6. Liability",
    icon: "MdDescription",
    subsections: [
      {
        id: "6.1",
        title: "6.1",
        content: "Faraway Yachting accepts no responsibility for the acts or omissions of our clients, whether negligent or otherwise, and shall not be held liable for any claims made against them (or as a result of their actions) either by other clients of Faraway Yachting or third parties."
      },
      {
        id: "6.2",
        title: "6.2",
        content: "We accept no liability for losses that were not caused by any breach on our part and were unforeseeable at the time of booking."
      },
      {
        id: "6.3",
        title: "6.3",
        content: "Personal Belongings: Faraway Yachting does not take responsibility for any personal loss, particularly expensive electronics, under any circumstances. Guests are advised to carry expensive electronics in waterproof containers and ensure they are insured. Faraway Yachting accepts no liability for these items."
      },
      {
        id: "6.4",
        title: "6.4",
        content: "Damage Responsibility: Guests are responsible for any damage caused to the vessel or its equipment as a result of their actions, negligence, or misuse. Costs for repairs or replacements will be charged directly to the guest."
      }
    ]
  },
  {
    id: "insurance",
    title: "7. Holiday & Cancellation Insurance",
    icon: "MdSecurity",
    subsections: [
      {
        id: "7.1",
        title: "7.1",
        content: "We highly recommend that guests obtain travel insurance covering sailing and watersports activities and cancellation insurance. Faraway Yachting Co. Ltd. ensures that they obtain all the required licenses and insurances required at operation location."
      },
      {
        id: "7.2",
        title: "7.2",
        content: "Please note that there will be no refunds by Faraway Yachting in case of any kind of cancellation. We highly recommend taking holiday cancellation insurance for any charter."
      }
    ]
  },
  {
    id: "equipment",
    title: "8. Equipment Breakdown",
    icon: "MdWarning",
    subsections: [
      {
        id: "8.1",
        title: "8.1",
        content: "While we take great care to maintain all systems and equipment, equipment failures or malfunctions can occur. Yachts are complex machines subject to a range of conditions and stresses, including heavy use, weather, and sea conditions. Our crew is trained and experienced in handling equipment failures and malfunctions, and we have procedures in place to address these situations promptly and effectively."
      },
      {
        id: "8.2",
        title: "8.2",
        content: "Please note that we do not offer refunds for minor issues that do not affect the overall charter experience. If a significant issue occurs that affects the safety of your charter, we will take all necessary steps to address the issue and provide a satisfactory resolution."
      },
      {
        id: "8.3",
        title: "8.3",
        content: "If Faraway Yachting is unable, even through no fault of their own, to deliver the chartered yacht or a similar yacht at the commencement of the charter period, we will be obliged to reimburse a pro-rata sum of the charter fee."
      }
    ]
  },
  {
    id: "complaints",
    title: "9. Complaints",
    icon: "MdDescription",
    subsections: [
      {
        id: "9.1",
        title: "9.1",
        content: "Should a client have a complaint, they have to inform the skipper of the yacht, or in the case of a bareboat charter, the shore base immediately. The skipper or shore base will do their utmost to rectify the problem. If the outcome is not satisfactory, the client will have to inform us in writing within 14 days after the end of the charter."
      },
      {
        id: "9.2",
        title: "9.2",
        content: "Complaints that have not first been expressed to the skipper on the trip concerned or to the shore base in the case of a bareboat charter will not be taken into consideration. If problems can not be resolved onboard, please contact us immediately under +66612345623. Any problems that have not been expressed immediately are deemed not valid."
      },
      {
        id: "9.3",
        title: "9.3",
        content: "To handle complaints, we require the original complaint of the client, signed by the client him/herself."
      },
      {
        id: "9.4",
        title: "9.4",
        content: "If the matter is deemed fair, the client will have their trip partly or wholly reimbursed."
      }
    ]
  },
  {
    id: "information",
    title: "10. Information Provided",
    icon: "MdDescription",
    subsections: [
      {
        id: "10.1",
        title: "",
        content: "The information we provide regarding the yachts, itineraries, crew, sites, transfers, arrival/departures, prices, and all other aspects of the charters is correct to the best of our knowledge. However, we reserve the right to change any of the above as circumstances dictate without prior notice."
      }
    ]
  },
  {
    id: "price",
    title: "11. Price Changes & Promotions",
    icon: "MdCreditCard",
    subsections: [
      {
        id: "11.1",
        title: "11.1",
        content: "We reserve the right to change prices at any time or run promotions. The price quoted at the time of booking will be valid for the duration of your charter, but any promotions or discounts cannot be applied later on to the charter."
      },
      {
        id: "11.2",
        title: "11.2",
        content: "You can stay informed about our promotions and discounts by checking our social media channels."
      }
    ]
  },
  {
    id: "intellectual",
    title: "12. Intellectual Property & Privacy Policy",
    icon: "MdDescription",
    subsections: [
      {
        id: "12.1",
        title: "12.1",
        content: "All content on the Faraway Yachting Co. Ltd. website, including text, images, logos, and videos, is the property of the company and protected by copyright laws. The content may not be used, reproduced, or distributed without the company's written permission. However, all media apart from the text on our website can be used for the purpose of promoting our services."
      },
      {
        id: "12.2",
        title: "12.2",
        content: "We reserve the rights to all media created on your yachts."
      },
      {
        id: "12.3",
        title: "12.3",
        content: "Faraway Yachting Co. Ltd. is committed to protecting our customers' personal data and respecting their privacy. The company will only use personal data provided by the customer for the purpose of fulfilling the charter and will not disclose this data to any third party, except where necessary to fulfill the charter or as required by law."
      }
    ]
  },
  {
    id: "additional",
    title: "13. Additional Terms",
    icon: "MdDescription",
    subsections: [
      {
        id: "13.1",
        title: "13.1",
        content: "Surcharge for Complex Bookings: A surcharge of up to 20% may be applied for complex bookings such as weddings, corporate events, charters with a high level of customization, or instances requiring extensive communication (e.g., phone calls or group chats)."
      },
      {
        id: "13.2",
        title: "13.2",
        content: "Weather Conditions: There is no guarantee of the best weather conditions unless the charter price is paid double. Faraway Yachting, if accepted the double charter rate for the best weather guarantee, will then refund if there is rain on the charter day. Otherwise Faraway Yachting will not cancel charters if all other charter operators are operating that day. We typically prioritize safety and may be among the first to cancel charters in adverse weather conditions."
      }
    ]
  },
  {
    id: "final",
    title: "14. Final Note",
    icon: "MdDescription",
    subsections: [
      {
        id: "14.1",
        title: "14.1",
        content: "By booking with Faraway Yachting Co. Ltd., you agree to our booking terms and conditions. These terms are valid on our vessels (SY Amadeus, SY Shindig, SY Mozart, MY Hot Chilli and MY Sail La Vie) for clients booking directly with us or through an agency."
      },
      {
        id: "14.2",
        title: "14.2",
        content: "These terms and conditions for Charters booked through Faraway Yachting as an agency on other boats than SY Amadeus, SY Shindig, SY Mozart, MY Hot Chilli and MY Sail La Vie do not apply. The current charter operators terms and conditions apply accordingly. Many charter operators' contracts change frequently, so please ask us for the most recent Terms and Conditions of the charter operator."
      },
      {
        id: "14.3",
        title: "14.3",
        content: "Any deviation from these booking terms and conditions must be agreed upon in writing by both parties. Verbal agreements do not hold any validity."
      },
      {
        id: "14.4",
        title: "14.4",
        content: "These terms and conditions are governed by the laws of the jurisdiction of the Kingdom of Thailand. Any disputes arising from these terms and conditions or the booking will be subject to the jurisdiction of the Thai courts."
      },
      {
        id: "14.5",
        title: "14.5",
        content: "If any part of these booking terms and conditions is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable."
      },
      {
        id: "14.6",
        title: "14.6",
        content: "If you have any questions or concerns regarding these terms and conditions, please feel free to contact us for clarification before making a booking."
      }
    ]
  }
];

export const cancellationDetails = {
  dayCharter: [
    "Longer than 14 days prior to the charter date – there will be a 100 Euro administration fee for cancellations.",
    "Less than 14 days prior to the charter date – 50% of the full charter fee will be charged.",
    "Less than 7 days prior to departure date – 100% of the full charter fee will be charged."
  ],
  overnightCharter: [
    "60 days or prior to the charter – there will be a 100 Euro administration fee for cancellations.",
    "Between 60 and 45 days prior to the charter – 30% of the total charter fee.",
    "Less than 45 days – 100% of the charter fee will be charged."
  ]
};

export const insuranceRecommendation = {
  title: "💡 Insurance Recommendation",
  content: "Considering travel insurance for your trip? World Nomads offers coverage for more than 150 adventure activities as well as emergency medical, lost luggage, trip cancellation, and more."
};

export const finalMessage = {
  title: "We hope that you find these terms and conditions clear and concise.",
  subtitle: "We wish you a great charter,",
  signature: "Your Team Faraway Yachting Co., Ltd."
}; 