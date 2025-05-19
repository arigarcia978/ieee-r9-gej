import "server-only"

// Define the dictionary type
export type Dictionary = {
  navigation: {
    about: string
    experience: string
    proposals: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    joinButton: string
    learnButton: string
  }
  about: {
    title: string
    description: string
    family: {
      title: string
      description: string
    }
    residence: {
      title: string
      description: string
    }
    career: {
      title: string
      description: string
    }
  }
  experience: {
    title: string
    description: string
    tabs: {
      academic: string
      volunteer: string
    }
    academic: {
      degree1: {
        title: string
        institution: string
        description: string
      }
      degree2: {
        title: string
        institution: string
        description: string
      }
      certification: {
        title: string
        institution: string
        description: string
      }
    }
    volunteer: {
      role1: {
        title: string
        position: string
        description: string
      }
      role2: {
        title: string
        position: string
        description: string
      }
      role3: {
        title: string
        position: string
        description: string
      }
    }
  }
  proposals: {
    title: string
    description: string
    viewAll: string
    categories: {
      economic: {
        title: string
        description: string
        items: string[]
      }
      infrastructure: {
        title: string
        description: string
        items: string[]
      }
      safety: {
        title: string
        description: string
        items: string[]
      }
      education: {
        title: string
        description: string
        items: string[]
      }
      environment: {
        title: string
        description: string
        items: string[]
      }
      housing: {
        title: string
        description: string
        items: string[]
      }
    }
  }
  gallery: {
    title: string
    description: string
    images: {
      alt1: string
      alt2: string
      alt3: string
      alt4: string
      alt5: string
      alt6: string
    }
  }
  events: {
    title: string
    description: string
    viewAll: string
    event1: {
      title: string
      date: string
      location: string
      description: string
      button: string
    }
    event2: {
      title: string
      date: string
      location: string
      description: string
      button: string
    }
    event3: {
      title: string
      date: string
      location: string
      description: string
      button: string
    }
    event4: {
      title: string
      date: string
      location: string
      description: string
      button: string
    }
  }
  contact: {
    title: string
    description: string
    email: string
    phone: string
    address: string
    volunteerButton: string
    donateButton: string
    form: {
      title: string
      subtitle: string
      firstName: string
      lastName: string
      email: string
      phone: string
      message: {
        label: string
        placeholder: string
      }
      submitButton: string
    }
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    contact: string
  }
  languageSwitcher: {
    label: string
  }
}

// Import dictionaries
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.en()
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}
