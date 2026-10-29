/**
 * Wedding Digital Invitation Data Configuration
 * Geethu & Abhin Wedding Invitation
 */

export const weddingData = {
  // Couple Information
  bride: {
    name: "Geethu Girish Babu",
    shortName: "Geethu",
    qualifications: "",
    image: "/assets/bride.jpg",
    bio: "Daughter of our beloved family, embarking on a sacred new chapter of life with grace and devotion.",
    parents: {
      father: "Girish Babu P",
      mother: "Sujitha Girish Babu",
      houseName: "",
      city: ""
    },
    siblingLabel: "",
    siblingsDisplay: "",
    siblings: []
  },
  groom: {
    name: "Abhin A S",
    shortName: "Abhin",
    qualifications: "",
    image: null,
    bio: "Son of our esteemed family, blessed to begin this divine voyage of love, harmony, and togetherness.",
    parents: {
      father: "Anilkumar S.S",
      mother: "Sudhakumari V.S",
      houseName: "",
      city: ""
    },
    siblingLabel: "",
    siblingsDisplay: "",
    siblings: []
  },

  // Wedding Muhurtham & Event Details
  event: {
    muhurthamLabel: "Wedding Ceremony (Muhurtham)",
    dateDisplay: "Thursday, 26 November 2026",
    timeDisplay: "7:00 AM – 8:00 AM",
    muhurthamTimeWindow: "Muhurtham: 7:00 AM – 8:00 AM",
    traditionalDate: "1202 Vrischikam 10",
    venueName: "Guruvayoor Temple",
    venueAddress: "Guruvayoor Temple",
    city: "Guruvayur, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Guruvayoor+Temple,+Guruvayur,+Kerala",
    googleCalendarTitle: "Wedding Ceremony of Geethu & Abhin",
    googleCalendarDescription: "You are cordially invited with family to celebrate the wedding ceremony of Geethu Girish Babu & Abhin A S at Guruvayoor Temple, Guruvayur, Kerala (1202 Vrischikam 10).",
    // Target ISO date for the live countdown timer (YYYY-MM-DDTHH:mm:ss)
    targetCountdownDate: "2026-11-26T07:00:00"
  },

  // Reception Details
  reception: {
    label: "Wedding Reception",
    dateDisplay: "Sunday, 22 November 2026",
    timeDisplay: "6:00 PM – 10:00 PM",
    venueName: "Snehanjali Community Hall",
    venueAddress: "Kallayi Road",
    city: "Kozhikode, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Snehanjali+Community+Hall,+Kallayi+Road,+Kozhikode,+Kerala",
    googleCalendarTitle: "Wedding Reception of Geethu & Abhin",
    googleCalendarDescription: "You are cordially invited with family to celebrate the wedding reception of Geethu Girish Babu & Abhin A S at Snehanjali Community Hall, Kallayi Road, Kozhikode, Kerala."
  },

  // RSVP Details (Accept & Decline Scenarios)
  rsvp: {
    whatsappNumber: "919778137459",
    acceptMessage: "Hello Geethu & Abhin, we are delighted to attend your wedding celebration!🎉🤍",
    declineMessage: "Hello Geethu & Abhin, we won't be able to attend your wedding celebration, but our heartfelt blessings and warm wishes are with you both!🤍✨"
  },

  // Sacred Ceremonies Timeline
  ceremonies: [
    {
      id: "ceremony-1",
      englishTitle: "Wedding Reception",
      dateBadge: "Sun, 22 Nov 2026",
      time: "6:00 PM – 10:00 PM",
      description: "Grand reception celebration with family and friends at Snehanjali Community Hall, Kallayi Road, Kozhikode.",
      icon: "party"
    },
    {
      id: "ceremony-2",
      englishTitle: "Sacred Wedding Ceremony (Muhurtham)",
      dateBadge: "Thu, 26 Nov 2026",
      time: "7:00 AM – 8:00 AM",
      description: "Sacred thali tying and marriage rituals at Guruvayoor Temple in the auspicious presence of Lord Krishna (1202 Vrischikam 10).",
      icon: "lamp"
    },
    {
      id: "ceremony-3",
      englishTitle: "Traditional Feast & Blessings",
      dateBadge: "Thu, 26 Nov 2026",
      time: "Following Ceremony",
      description: "Traditional feast served to celebrate the joyful union of Geethu & Abhin.",
      icon: "leaf"
    }
  ],

  // Couple Photo Gallery
  galleryImages: [
    {
      src: "/assets/couple.jpg",
      alt: "Geethu Girish Babu & Abhin A S",
      caption: "A journey of eternal companionship"
    },
    {
      src: "/assets/bride.jpg",
      alt: "Radiant Bride Geethu Girish Babu",
      caption: "Radiant bride adorned in traditional Kerala Kasavu"
    },
    {
      src: "/assets/details.jpg",
      alt: "Sacred traditional wedding offerings",
      caption: "Sacred rituals & auspicious beginnings"
    }
  ],

  // Sacred Text & Blessings
  texts: {
    elderBlessingsEng: "With the blessings of our elders\nand the grace of the divine",
    twoHeartsEng: "Two hearts,\none beautiful beginning.",
    greetingEnglish: "With Warm Wishes & Blessings",
    coupleIntroHeading: "Together with our families",
    coupleIntroTagline: "Two souls, one journey, and a lifetime of beautiful moments.",
    weddingTogethernessQuote: "A wedding is the sacred union of two souls and the joyful coming together of two families—bound by love, cherished traditions, and the blessing of a lifetime of togetherness.",
    invitationHeading: "Cordially Inviting You",
    invitationSubtitleEng: "With joy in our hearts,\nwe invite you to celebrate our wedding and reception.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments to our wedding...",
    locationHeading: "Locations & Directions",
    finalBlessingEnglish: "Your presence and blessings\nwill make our beginning even more beautiful.",
    withLove: "With Love"
  }
};

