import type { ServiceType } from "./types";

export const services: ServiceType[] = [
  {
    id: 1,
    image: "/images/cubes.jpg",
    title: "სახლის რემონტი",
    descr:
      "სწრაფი და საიმედო სარემონტო მომსახურება, თქვენი სახლის სიცოცხლის გასახანგრძლივებლად.",
  },
  {
    id: 2,
    image: "/images/cubes.jpg",
    title: "ახალი აშენება",
    descr:
      "პროფესიონალური და მაღალი ხარისხის სამშენებლო მომსახურება გრძელვადიანი დაცვისთვის.",
  },
  {
    id: 3,
    image: "/images/cubes.jpg",
    title: "განახლება და რენოვაცია",
    descr:
      "განაახლეთ და მოდერნიზეთ არსებული სახლი ჩვენი ექსპერტული სარემონტო მომსახურებით.",
  },
  {
    id: 4,
    image: "/images/cubes.jpg",
    title: "სასწრაფო მომსახურება",
    descr:
      "24/7 სასწრაფო სარემონტო დახმარება, თქვენი სახლის დასაცავად მაშინ, როცა ყველაზე მეტად გჭირდებათ.",
  },
];

export const navLinks = [
  { id: 1, href: "#home", label: "მთავარი" },
  { id: 2, href: "#about", label: "ჩვენ შესახებ" },
  { id: 3, href: "#projects", label: "პროექტები" },
  { id: 4, href: "#services", label: "სერვისები" },
  { id: 5, href: "#contact", label: "კონტაქტი" },
];

export const heroSection = {
  title: "კეთილი იყოს თქვენი მობრძანება ჩვენს პლატფორმაზე",
  descr:
    "ჩვენ გთავაზობთ საუკეთესო გადაწყვეტებს თქვენი სახლის რემონტისა და განახლებისთვის.",
};

export const aboutSection = {
  title: "ჩვენ შესახებ",
  subTitle: "ჩვენ გთავაზობთ ხარისხიან სარემონტო მომსახურებას",
  descr:
    "ჩვენი კომპანია უზრუნველყოფს პროფესიონალურ სახლის რემონტსა და სერვისებს. გამოცდილება, სანდოობა და ხარისხი – ჩვენი მთავარი ღირებულებებია.",
  years: "10",
  xp: "წლიანი გამოცდილება",
};

export const servicesSection = {
  title: "რას ვაკეთებთ",
  subTitle: "ჩვენ გთავაზობთ მაღალი ხარისხის სარემონტო მომსახურებას",
};

export const trustSection = {
  title: "სანდო და საუკეთესო კომპანია",
  subTitle: "ჩვენ დაგეხმარებით წარსულსა და მომავალზე აშენებაში.",
  descr:
    "ჩვენი გუნდი უზრუნველყოფს პროფესიონალურ სერვისებს, რათა თქვენი სახლი იყოს დაცული, კომფორტული და თანამედროვე. გამოცდილება და სანდოობა ჩვენი მთავარი უპირატესობაა.",
};

export const trustSectionCards = [
  {
    id: 1,
    title: "სტანდარტული მშენებლობა",
    descr:
      "პროფესიონალური და ხარისხიანი სამშენებლო სტანდარტების დაცვით სამუშაოების შესრულება.",
    img: "/images/innovation.png",
  },
  {
    id: 2,
    title: "რენოვაცია",
    descr:
      "არსებული სახლის ან ბინის განახლება და თანამედროვე სტანდარტებზე მორგება.",
    img: "/images/asbestos.png",
  },
];

export const suppliersSectionImages = [
  { id: 1, image: "/images/logo.png" },
  { id: 2, image: "/images/logo.png" },
  { id: 3, image: "/images/logo.png" },
  { id: 4, image: "/images/logo.png" },
  { id: 5, image: "/images/logo.png" },
  { id: 6, image: "/images/logo.png" },
];

// footerData.ts
export const footerData = {
  brand: {
    mainLogoImg: "/images/main-logo.png",
    description:
      "მაღალი ხარისხის სახლის რემონტისა და სარენოვაციო სერვისები, თქვენი სახლის უსაფრთხოებისა და სილამაზისთვის.",
  },
  workingHours: [
    { day: "ორშაბათი – ხუთშაბათი", hours: "10:00 – 16:00" },
    { day: "პარასკევი", hours: "დაკეტილი" },
  ],
  services: [
    ["სახლის რემონტი", "ფასადის მოპირკეთება", "ინტერიერის განახლება"],
    ["გაჟონვის აღმოფხვრა", "ლოქოკინის შეკეთება", "სრული რენოვაცია"],
  ],
  socialLinks: [
    { name: "X", url: "#", hover: "hover:text-blue-400" },
    { name: "YouTube", url: "#", hover: "hover:text-red-500" },
    { name: "Facebook", url: "#", hover: "hover:text-blue-600" },
    { name: "Instagram", url: "#", hover: "hover:text-pink-400" },
  ],
  form: {
    title: "მიიღეთ უფასო შეფასება",
    inputs: ["სახელი", "ელ-ფოსტა", "ტელეფონი", "სერვისი", "შეტყობინება"],
    button: "გაგზავნა",
  },
  helpBox: {
    text: "გჭირდებათ სახლის რემონტის დახმარება?",
    phone: "956(326)-56",
  },
  bottom: {
    copyright: "© Copyright RemontLine 2025. ყველა უფლება დაცულია.",
    privacy: { label: "პოლიტიკა", url: "#" },
  },
};
