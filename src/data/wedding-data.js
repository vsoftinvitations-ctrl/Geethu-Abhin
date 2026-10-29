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
    bio: "Daughter of our beloved family, taking the hand of her best friend and partner to begin a lifetime of joy and togetherness.",
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
    bio: "Son of our esteemed family, blessed to start this divine voyage of love and companionship with his closest friend.",
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
    venueImage: "/assets/guruvayoor.png",
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

  // Friends & Lifelong Companions Invitation
  friendsInvite: {
    badge: "From The Bride's Side & The Groom's Side",
    heading: "To All Our Cherished Friends",
    subtitle: "To our childhood friends, school companions, and every dear soul who walked this journey with us",
    quote: "“Friends are the family we choose along the way. From childhood memories and classroom laughter to life's sweetest milestones, each of you holds an irreplaceable place in our story.”",
    brideNote: {
      side: "From Geethu’s Side",
      title: "To My Dearest Friends",
      message: "To the friends who have known me since childhood, shared my growing years, laughter, and milestones, and to every wonderful friend who has been part of my life—having your blessings as I begin this new chapter with my best friend means everything to me!",
      sign: "— Geethu"
    },
    groomNote: {
      side: "From Abhin’s Side",
      title: "To My Dearest Friends",
      message: "To my childhood buddies, lifelong companions, and everyone who has stood beside me through every phase of growing up—you made every memory unforgettable. As our worlds unite, I can’t wait to celebrate this milestone together with all of you!",
      sign: "— Abhin"
    },
    jointNote: "To all our friends from both sides: you are family to us. Come celebrate, reminisce cherished memories, and create new ones together as we begin our forever!"
  },

  // Sacred Text & Blessings
  texts: {
    elderBlessingsEng: "With the blessings of our elders,\nthe warmth of our families, and the love of our friends",
    twoHeartsEng: "Two hearts,\none beautiful forever.",
    greetingEnglish: "With Warm Wishes & Love",
    coupleIntroHeading: "Two Friends, One Beautiful Beginning",
    coupleIntroTagline: "Blessed with the love of our families and the warmth of lifelong friendships.",
    weddingTogethernessQuote: "A celebration of love is made complete by the presence of those who have known us best—our families, our childhood friends, and lifelong companions.",
    invitationHeading: "Cordially Inviting You",
    invitationSubtitleEng: "Together with our families and our dearest friends from both sides,\nwe warmly invite you to celebrate our wedding and reception.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments to our wedding...",
    locationHeading: "Locations & Directions",
    finalBlessingEnglish: "Your presence, laughter, and blessings\nwill make our celebration truly complete.",
    withLove: "With Love, Geethu & Abhin"
  }
};


