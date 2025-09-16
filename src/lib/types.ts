export type ServiceType = {
  id: number;
  image: string;
  title: string;
  descr: string;
};

// footerData.ts

export type FooterDataTypes = {
  brand: {
    mainLogoImg: string;
    description: string;
  };
  workingHours: {
    day: string;
    hours: string;
  }[];
  services: string[][];
  socialLinks: {
    name: string;
    url: string;
    hover: string;
  }[];
  form: {
    title: string;
    inputs: string[];
    button: string;
  };
  helpBox: {
    text: string;
    phone: string;
  };
  bottom: {
    copyright: string;
    privacy: {
      label: string;
      url: string;
    };
  };
};
