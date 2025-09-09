export interface TermSection {
  id: string;
  title: string;
  icon: string;
  subsections: TermSubsection[];
}

export interface TermSubsection {
  id: string;
  title: string;
  content?: string[];
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
        content: ["To book a trip, please confirm availability with us and notify us."],
      },
      {
        id: "1.2",
        title: "1.2",
        content: ["Upon confirmation, you will receive an invoice (formal or informal, but written) stating the amounts to be paid as a deposit and the outstanding balance. The deposit is due immediately after the invoice has been sent."],
      },
      {
        id: "1.3",
        title: "1.3",
        content: ["After depositing, please inform us of your payment with a payment slip or similar. Upon receiving this payment into our accounts, we will immediately send you a confirmation."],
      },
      {
        id: "1.4",
        title: "1.4",
        content: ["We reserve the right to sell the charter to another party after sending the invoice if not paid in time after receiving the invoice. If you require an original copy of this invoice, please state so when making the booking."],
      },
      {
        id: "1.5",
        title: "1.5",
        content: ["Discounted Charters: All discounted charters are non-refundable."],
      },
    ]
  },
  {
    id: "altering-a-booking",
    title: "2. Altering a Booking",
    icon: "MdSchedule",
    subsections: [
      {
        id: "2.1",
        title: "2.1",
        content: ["Minor alterations are usually free of charge, provided they do not interfere with our schedules. Major alterations that interfere with our booking schedules may be treated as cancellations and re-bookings, and the relevant charges may apply."],
      }
    ]
  },
  {
    id: "payments",
    title: "3. Payments",
    icon: "MdCancel",
    subsections: [
      {
        id: "3.1",
        title: "3.1 Payment Methods & Accepted Currencies",
        content: ["Payment is to be made using the methods approved by Faraway Yachting Co. Ltd. at the time of booking. Bank transfer is the preferred method. Payments are accepted in Thai Baht (THB), Euro (EUR), or US Dollars (USD), using the Google exchange rate of the invoice date. ",
          "If paying in cash in USD or EUR, the exact amount must be provided as we do not carry change in those currencies."],
      },
      {
        id: "3.2",
        title: "3.2 Service & Administration Fee",
        content: ["A 5% service and administration fee applies to all bookings to cover operational and handling costs.",
          "This fee is waived for payments made by bank transfer or in cash, resulting in no additional charges for those transactions.",
          "For payments made via cryptocurrency or PayPal, a 10% surcharge applies to cover additional transaction and conversion costs."]
      },
      {
        id: "3.3",
        title: "3.3 Payment Deadlines",
        content: ["Payment deadlines for different charter types are outlined below."]
      },
      {
        id: "day-charter-cancellation",
        title: "Day charters:",
        content: ["50% deposit at booking, remaining balance at least 7 days prior to departure. Bookings made less than 7 days prior must be paid in full."],
      },
      {
        id: "overnight-charter-cancellation",
        title: "Overnight charters:",
        content: ["30% deposit at booking, remaining balance at least 45 days prior to departure. Bookings made less than 45 days prior must be paid in full."],
      },
      {
        id: "3.4",
        title: "3.4",
        content: ["The Charterer is responsible for ensuring that the full charter amount stated in the invoice is received in our designated account by the payment deadlines above, regardless of the payment method used. Any transaction, bank, currency conversion, or processing fees must be covered by the Charterer."],
      },
      {
        id: "3.5",
        title: "3.5  Late or Non-Payment Consequences",
        content: ["The Charterer must ensure that the full balance is received in our designated account by the payment deadlines stated in Clause 3.3. If payment is not received in full and on time, Faraway Yachting Co. Ltd. reserves the right to cancel the charter without refund of any amounts already paid. In addition, a late payment fee of 10% of the outstanding balance will apply, and any associated delays may result in operational disruptions or denial of boarding."],
      }
    ]
  },
  {
    id: "cancellations-and-insurance",
    title: "4. Cancellations and Insurance",
    icon: "MdWarning",
    subsections: [
      {
        id: "4.1",
        title: "4.1",
        content: ["We need to be notified of cancellations in writing by email."]
      },
      {
        id: "4.2",
        title: "4.2",
        content: ["The date we receive the message is the one used in calculating the charge. The following cancellation charges apply:"]
      },
      {
        id: "4.2.1",
        title: "4.2.1 Day charter cancellation",
        content: ["Longer than 14 days prior to the charter date - there will be a 100 Euro administration fee for cancellations.",
          "Less than 14 days prior to the charter date – 50% of the full charter fee will be charged.",
          "Less than 7 days prior to departure date – 100% of the full charter fee will be charged."]
      },
      {
        id: "4.2.2",
        title: "4.2.2 Overnight charter cancellation",
        content: ["60 days or prior to the charter – there will be a 100 Euro administration fee for cancellations.",
          "Between 60 and 45 days prior to the charter – 30% of the total charter fee.",
          "Less than 45 days – 100% of the charter fee will be charged."]
      },
      {
        id: "4.3",
        title: "4.3",
        content: ["If the weather is deemed unsafe by the meteorology department of Thailand, Faraway Yachting Co. Ltd. will cancel the charter and first offer an alternate date. If this is not possible, a full refund will be provided."]
      },
      {
        id: "4.4",
        title: "4.4",
        content: ["No refunds will be given if the charter is canceled by the guests during the charter period."]
      },
      {
        id: "4.5",
        title: "4.5",
        content: ["Late Arrival - If the Charterer or their party arrives late to the embarkation point for any reason not attributable to Faraway Yachting, the charter time will not be extended. The charter will finish at the originally scheduled time, and no refunds or partial reimbursements will be given for lost time."]
      },
    ]
  },
  {
    id: "force-majeure",
    title: "5. Force Majeure",
    icon: "MdWarning",
    subsections: [
      {
        id: "5.1",
        title: "5.1",
        content: ["No compensation will be paid in the case of unforeseeable and unusual circumstances beyond our control, the consequences of which could not have been avoided even if all due care had been exercised. Such circumstances or events include, but are not limited to, war or threat of war, riot, civil strife, industrial dispute, unavoidable technical problems with transport, closure or congestion of airports, terrorist activity, natural or nuclear disaster, fire, pandemic, and adverse weather conditions."]
      }
    ]
  },
  {
    id: "safety",
    title: "6. Safety",
    icon: "MdSecurity",
    subsections: [
      {
        id: "6.1",
        title: "6.1",
        content: ["We take safety very seriously, and the captain of the yacht has the discretion to change the planned route if he deems it unsafe. In the event of a route change, no refunds will be provided."],
      },
      {
        id: "6.2",
        title: "6.2",
        content: ["Where itineraries are given, they may be subject to change based on weather conditions, guest preferences, or other unforeseen circumstances."],
      },
      {
        id: "6.3",
        title: "6.3",
        content: ["The final decision regarding the itinerary lies with the captain of the trip."],
      },
      {
        id: "6.4",
        title: "6.4",
        content: ["Passengers must follow the safety instructions provided by our professional crew. Failure to follow instructions may result in the cancellation of the charter without a refund."],
      },
      {
        id: "6.5",
        title: "6.5",
        content: ["Please note that our insurance does not cover intoxicated passengers. Guests who consume intoxicating substances, including alcohol and drugs, do so at their own risk and may be denied participation in activities or access to certain areas of the yacht for safety reasons."],
      },
      {
        id: "6.6",
        title: "6.6",
        content: ["Compliance with Team Recommendations: No liability will be accepted if guests act against the recommendations of the Faraway Yachting team."],
      }
    ]
  },
  {
    id: "liability",
    title: "7. Liability",
    icon: "MdDescription",
    subsections: [
      {
        id: "7.1",
        title: "7.1",
        content: ["Faraway Yachting accepts no responsibility for the acts or omissions of our clients, whether negligent or otherwise, and shall not be held liable for any claims made against them (or as a result of their actions) either by other clients of Faraway Yachting or third parties."],
      },
      {
        id: "7.2",
        title: "7.2",
        content: ["We accept no liability for losses that were not caused by any breach on our part and were unforeseeable at the time of booking."],
      },
      {
        id: "7.3",
        title: "7.3",
        content: ["Personal Belongings: Faraway Yachting does not take responsibility for any personal loss, particularly expensive electronics, under any circumstances. Guests are advised to carry expensive electronics in waterproof containers and ensure they are insured. Faraway Yachting accepts no liability for these items."],
      },
      {
        id: "7.4",
        title: "7.4",
        content: ["Damage Responsibility: Guests are responsible for any damage caused to the vessel or its equipment as a result of their actions, negligence, or misuse. Costs for repairs or replacements will be charged directly to the guest."],
      }
    ]
  },
  {
    id: "holiday&cancellation-insurance",
    title: "8. Holiday & Cancellation Insurance",
    icon: "MdSecurity",
    subsections: [
      {
        id: "8.1",
        title: "8.1",
        content: ["We strongly recommend that guests obtain comprehensive travel insurance covering sailing and watersports activities, as well as holiday cancellation insurance. Faraway Yachting Co. Ltd. holds all required licenses and operational insurances at the charter location. Please note that, except where explicitly stated in Clause 4 (e.g., unsafe weather cancellations), no refunds will be provided for any form of cancellation."]
      }
    ]
  },
  {
    id: "equipment-breakdown",
    title: "9. Equipment Breakdown",
    icon: "MdWarning",
    subsections: [
      {
        id: "9.1",
        title: "9.1",
        content: ["While we take great care to maintain all systems and equipment, equipment failures or malfunctions can occur. Yachts are complex machines subject to a range of conditions and stresses, including heavy use, weather, and sea conditions. Our crew is trained and experienced in handling equipment failures and malfunctions, and we have procedures in place to address these situations promptly and effectively."],
      },
      {
        id: "9.2",
        title: "9.2",
        content: ["Please note that we do not offer refunds for minor issues that do not affect the overall charter experience. If a significant issue occurs that affects the safety of your charter, we will take all necessary steps to address the issue and provide a satisfactory resolution."],
      },
      {
        id: "9.3",
        title: "9.3",
        content: ["If Faraway Yachting is unable, even through no fault of their own, to deliver the chartered yacht or a similar yacht at the commencement of the charter period, we will be obliged to reimburse a pro-rata sum of the charter fee."],
      }
    ]
  },
  {
    id: "complaints",
    title: "10. Complaints",
    icon: "MdDescription",
    subsections: [
      {
        id: "10.1",
        title: "10.1",
        content: ["Should a client have a complaint, they have to inform the skipper of the yacht, or in the case of a bareboat charter, the shore base immediately. The skipper or shore base will do their utmost to rectify the problem. If the outcome is not satisfactory, the client will have to inform us in writing within 14 days after the end of the charter."]
      },
      {
        id: "10.2",
        title: "10.2",
        content: ["Complaints that have not first been expressed to the skipper on the trip concerned or to the shore base in the case of a bareboat charter will not be taken into consideration. If problems can not be resolved onboard, please contact us immediately under +66612345623. Any problems that have not been expressed immediately are deemed not valid."]
      },
      {
        id: "10.3",
        title: "10.3",
        content: ["To handle complaints, we require the original complaint of the client, signed by the client him/herself."]
      },
      {
        id: "10.4",
        title: "10.4",
        content: ["If the matter is deemed fair, the client will have their trip partly or wholly reimbursed."]
      }
    ]
  },
  {
    id: "information-provided",
    title: "11. Information Provided",
    icon: "IoMdInformationCircleOutline",
    subsections: [
      {
        id: "11.1",
        title: "11.1",
        content: ["The information we provide regarding the yachts, itineraries, crew, sites, transfers, arrival/departures, prices, and all other aspects of the charters is correct to the best of our knowledge. However, we reserve the right to change any of the above as circumstances dictate without prior notice.",
          "Information provided by digital tools, including but not limited to artificial intelligence (AI) systems, chatbots, or automated communication platforms, is for informational purposes only. Only the official written invoice issued by Faraway Yachting Co. Ltd. constitutes a binding agreement. Any errors, discrepancies, or miscommunications resulting from AI or automated systems shall not be considered valid or enforceable."]
      }
    ]
  },
  {
    id: "price-changes&promotions",
    title: "12. Price Changes & Promotions",
    icon: "MdCreditCard",
    subsections: [
      {
        id: "12.1",
        title: "12.1",
        content: ["We reserve the right to change prices at any time or run promotions. The price quoted at the time of booking will be valid for the duration of your charter, but any promotions or discounts cannot be applied later on to the charter."]
      },
      {
        id: "12.2",
        title: "12.2",
        content: ["You can stay informed about our promotions and discounts by checking our social media channels."]
      },
      {
        id: "12.3",
        title: "12.3",
        content: ["12.3 Faraway Yachting Co. Ltd. is not responsible for any additional charges, applied by third-party agents or intermediaries. Any disputes regarding agent markups must be resolved directly between the client and the respective agent."],
      }
    ]
  },
  {
    id: "intellectual-property&privacy-policy",
    title: "13. Intellectual Property & Privacy Policy",
    icon: "MdOutlinePrivacyTip",
    subsections: [
      {
        id: "13.1",
        title: "13.1",
        content: ["All content on the Faraway Yachting Co. Ltd. website, including text, images, logos, and videos, is the property of the company and protected by copyright laws. The content may not be used, reproduced, or distributed without the company's written permission. However, all media apart from the text on our website can be used for the purpose of promoting our services."],
      },
      {
        id: "13.2",
        title: "13.2",
        content: ["We reserve the rights to all media created on your yachts."],
      },
      {
        id: "13.3",
        title: "13.3",
        content: ["Faraway Yachting Co. Ltd. is committed to protecting our customers' personal data and respecting their privacy. The company will only use personal data provided by the customer for the purpose of fulfilling the charter and will not disclose this data to any third party, except where necessary to fulfill the charter or as required by law."],
      }
    ]
  },
  {
    id: "additional-terms",
    title: "14. Additional Terms",
    icon: "LuFileTerminal",
    subsections: [
      {
        id: "14.1",
        title: "14.1",
        content: ["Surcharge for Complex Bookings: A surcharge of up to 20% may be applied for complex bookings such as weddings, corporate events, charters with a high level of customization, or instances requiring extensive communication (e.g., phone calls or group chats)."],
      },
      {
        id: "14.2",
        title: "14.2",
        content: ["Notwithstanding Clause 5, there is no guarantee of the best weather conditions unless the charter price is paid double. If Faraway Yachting accepts the double charter rate for the “Best Weather Guarantee”, we will refund if there is heavy rain or adverse sea conditions (e.g. large waves) on the charter day. Otherwise, Faraway Yachting will not cancel charters if all other charter operators are operating that day."],
      }
    ]
  },
  {
    id: "final-note",
    title: "15. Final Note",
    icon: " BiSolidCommentDetail",
    subsections: [
      {
        id: "15.1",
        title: "15.1",
        content: ["By booking with Faraway Yachting Co. Ltd., you agree to our booking terms and conditions. These terms are valid on our vessels (SY Amadeus, SY Shindig, SY Mozart, MY Hot Chilli and MY Sail La Vie) for clients booking directly with us or through an agency."]
      },
      {
        id: "15.2",
        title: "15.2",
        content: ["These terms and conditions for Charters booked through Faraway Yachting as an agency on other boats than SY Amadeus, SY Shindig, SY Mozart, MY Hot Chilli and MY Sail La Vie do not apply. The current charter operators terms and conditions apply accordingly. Many charter operators' contracts change frequently, so please ask us for the most recent Terms and Conditions of the charter operator."]
      },
      {
        id: "15.3",
        title: "15.3",
        content: ["Any deviation from these booking terms and conditions must be agreed upon in writing by both parties. Verbal agreements do not hold any validity."]
      },
      {
        id: "15.4",
        title: "15.4",
        content: ["These terms and conditions are governed by the laws of the jurisdiction of the Kingdom of Thailand. Any disputes arising from these terms and conditions or the booking will be subject to the jurisdiction of the Thai courts."]
      },
      {
        id: "15.5",
        title: "15.5",
        content: ["If any part of these booking terms and conditions is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable."]
      },
      {
        id: "15.6",
        title: "15.6",
        content: ["If you have any questions or concerns regarding these terms and conditions, please feel free to contact us for clarification before making a booking."]
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
  title: "💡 Travel Insurance Recommendation",
  content: "Considering travel insurance for your trip? World Nomads offers coverage for more than 150 adventure activities as well as emergency medical, lost luggage, trip cancellation, and more."
};

export const finalMessage = {
  title: "We hope that you find these terms and conditions clear and concise.",
  subtitle: "We wish you a great charter,",
  signature: "Your Team Faraway Yachting Co., Ltd."
}; 