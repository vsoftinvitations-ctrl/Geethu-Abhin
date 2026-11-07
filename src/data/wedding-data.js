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
    bio: "",
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
    bio: "",
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
    muhurthamTimeWindow: "",
    traditionalDate: "1202 Vrischikam 10",
    venueName: "Guruvayoor Temple",
    venueAddress: "Guruvayoor Temple",
    city: "Guruvayur, Kerala",
    venueImage: "/assets/guruvayoor.png",
    venueImageMobile: "/assets/guru.png",
    googleMapsUrl: "https://maps.google.com/?q=Guruvayoor+Temple,+Guruvayur,+Kerala",
    googleCalendarTitle: "Wedding Ceremony of Geethu & Abhin",
    googleCalendarDescription: "You are cordially invited with family to celebrate the wedding ceremony of Geethu Girish Babu & Abhin A S at Guruvayoor Temple, Guruvayur, Kerala (1202 Vrischikam 10).",
    // Target ISO date for the live countdown timer (YYYY-MM-DDTHH:mm:ss)
    targetCountdownDate: "2026-11-26T07:00:00"
  },

  // Reception Details (Bride side)
  reception: {
    label: "Wedding Reception",
    traditionalDate: "Pre-Wedding Celebration from Bride side",
    dateDisplay: "Sunday, 22 November 2026",
    timeDisplay: "6:00 PM – 10:00 PM",
    venueName: "Snehanjali Community Hall",
    venueAddress: "Kallayi Road",
    city: "Kozhikode, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Snehanjali+Community+Hall,+Kallayi+Road,+Kozhikode,+Kerala",
    googleCalendarTitle: "Wedding Reception of Geethu & Abhin",
    googleCalendarDescription: "You are cordially invited with family to celebrate the wedding reception of Geethu Girish Babu & Abhin A S at Snehanjali Community Hall, Kallayi Road, Kozhikode, Kerala."
  },

  // Reception Details (Groom side)
  groomReception: {
    label: "Wedding Reception",
    traditionalDate: "Post-Wedding Celebration by the Groom’s Side",
    dateDisplay: "Saturday, 28 November 2026",
    timeDisplay: "3:30 PM – 8:30 PM",
    venueName: "Royal Convention Centre",
    venueAddress: "Neduvathoor",
    city: "Kottarakara, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Royal+Convention+Centre,+Neduvathoor,+Kottarakara,+Kerala",
    googleCalendarTitle: "Post-Wedding Celebration of Geethu & Abhin (Groom’s Side)",
    googleCalendarDescription: "You are cordially invited with family to celebrate the Post-Wedding Celebration of Geethu Girish Babu & Abhin A S at Royal Convention Centre, Neduvathoor, Kottarakara, Kerala."
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

  // Couple Photo Gallery & Featured Stories
  galleryImages: [
    {
      src: "/assets/story1.png",
      alt: "Geethu & Abhin - Our Story"
    },
    {
      src: "/assets/image.png",
      alt: "Geethu & Abhin - Cherished Moments"
    },
    {
      src: "/assets/frnd.png",
      alt: "With Dearest Friends & Family"
    },
    {
      src: "/assets/image copy 2.png",
      alt: "Geethu & Abhin Together"
    }
  ],

  // Family & Friends Invitation (Unified From Both Sides)
  friendsInvite: {
    heading: "To All Our Cherished Family & Friends",
    subtitle: "To our beloved elders, dear relatives, childhood companions, and every soul who has shared this journey with us",
    note: {
      tag: "With Love From Both Families",
      title: "Cordially Inviting You With Family",
      message: "To our dearest family and friends who have filled our lives with boundless love, laughter, and cherished memories. From our childhood days to this sacred celebration, each of you holds an irreplaceable place in our hearts. As two best friends embark on this lifelong journey together, we warmly invite you and your family to celebrate our wedding and reception. Having your presence, blessings, and love with us as we begin our forever means everything to us!",
      sign: "Geethu & Abhin"
    }
  },

  // Sacred Text & Blessings
  texts: {
    elderBlessingsEng: "With the blessings of our elders,\nthe warmth of our families, and the love of our friends",
    twoHeartsEng: "Two hearts,\none beautiful forever.",
    greetingEnglish: "With Warm Wishes & Love",
    coupleIntroHeading: "From Friendship to Forever",
    coupleIntroTagline: "Blessed with the love of our families and the warmth of lifelong friendships.",
    weddingTogethernessQuote: "A celebration of love is made complete by the presence of those who have known us best—our families, our childhood friends, and lifelong companions.",
    invitationHeading: "Cordially Inviting You",
    invitationSubtitleEng: "Together with our families,\nwe warmly invite you to celebrate our wedding and reception.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments to our wedding...",
    locationHeading: "Locations & Directions",
    finalBlessingEnglish: "Your presence, laughter, and blessings\nwill make our celebration truly complete.",
    withLove: "With Love, Geethu & Abhin"
  }
};


