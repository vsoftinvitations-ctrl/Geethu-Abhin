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

  // Friends & Mutual Circle Invitation
  friendsInvite: {
    badge: "From The Bride's Side & The Groom's Side",
    heading: "To All Our Mutual Friends & Loved Ones",
    subtitle: "Because we share the same amazing circle, there are no separate sides—you belong to both of us!",
    quote: "“What started as an unforgettable friendship filled with laughs, late-night talks, and shared memories has blossomed into our forever promise.”",
    brideNote: {
      side: "From Geethu’s Side",
      title: "To Our Beloved Gang",
      message: "To all the friends who've shared my laughs, dreams, and milestones—and especially to our common gang who've cheered for both of us—having you by our side as I marry my best friend means the world!",
      sign: "— Geethu"
    },
    groomNote: {
      side: "From Abhin’s Side",
      title: "To Our Favorite People",
      message: "To all our buddies who know our story from day one and walked this path with us—you're not just guests, you're our family. Since both our circles are one and the same, come celebrate with your own gang!",
      sign: "— Abhin"
    },
    jointNote: "Team Bride? Team Groom? You’re simply Team Geethu & Abhin! Join us in Kozhikode for the Reception on 22 Nov and Guruvayoor for the Wedding Ceremony on 26 Nov!"
  },

  // Sacred Text & Blessings
  texts: {
    elderBlessingsEng: "With the blessings of our elders,\nthe warmth of our families, and the love of our friends",
    twoHeartsEng: "Two best friends,\none beautiful forever.",
    greetingEnglish: "With Warm Wishes & Love",
    coupleIntroHeading: "Two Friends, One Beautiful Beginning",
    coupleIntroTagline: "We started as great friends sharing smiles & dreams, and today we take the leap into forever together.",
    weddingTogethernessQuote: "The greatest marriages are built on deep friendships. To all our mutual friends who've been part of our journey from the start—your presence makes our big day complete!",
    invitationHeading: "Cordially Inviting You",
    invitationSubtitleEng: "From best friends to life partners.\nTogether with our families and our shared circle of friends, we warmly invite you from both Geethu's side & Abhin's side to celebrate our wedding and reception.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments to our wedding...",
    locationHeading: "Locations & Directions",
    finalBlessingEnglish: "Your presence, laughter, and blessings\nwill make our beginning even more special.",
    withLove: "With Love, Geethu & Abhin"
  }
};


