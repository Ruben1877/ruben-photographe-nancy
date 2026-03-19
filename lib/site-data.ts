import { Camera, Heart, Briefcase, Calendar, MapPin, Phone, Mail, Clock, Star, Users, Image as ImageIcon, Award } from "lucide-react";

export const siteData = {
  business: {
    name: "RUBEN PHOTOGRAPHE",
    trade: "Photographe",
    city: "Nancy",
    address: "18 Quai Claude le Lorrain, 54000 Nancy",
    phone: "0665522442",
    email: "axtracom18@gmail.com",
    hours: "Lundi au vendredi de 9h à 19h",
    emergency: false,
    experience: 10,
    tagline: "Capturer vos moments précieux avec élégance et authenticité.",
    description: "Je suis photographe professionnel basé à Nancy, spécialisé dans les mariages, anniversaires, séminaires et événements. Avec 10 ans d'expérience, j'accompagne les particuliers, les professionnels et les collectivités dans la création de souvenirs intemporels au style classique et raffiné.",
    serviceArea: "Nancy et dans un rayon de 100 km",
    clientTypes: ["Collectivités", "Professionnels", "Particuliers"],
    style: "Classique"
  },
  services: [
    {
      id: "mariage",
      title: "Photographe Mariage",
      description: "Des préparatifs jusqu'à la pièce montée, je capture chaque émotion de votre grand jour avec discrétion et élégance. Des clichés intemporels pour revivre ces instants uniques.",
      price: "à partir de 90€",
      icon: Heart,
      image: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843381375-0tme.jpg"
    },
    {
      id: "anniversaire",
      title: "Photographe Anniversaire",
      description: "Immortalisez vos fêtes d'anniversaire, qu'il s'agisse d'une célébration intime ou d'une grande réception. Je saisis la joie, les rires et les moments de partage.",
      price: "à partir de 150€",
      icon: Calendar,
      image: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843380414-9ycr.jpg"
    },
    {
      id: "seminaire",
      title: "Photographe Séminaire",
      description: "Couverture photographique professionnelle pour vos événements d'entreprise, séminaires, et conférences. Valorisez l'image de votre société avec des visuels de haute qualité.",
      price: "à partir de 200€",
      icon: Briefcase,
      image: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843379520-cn9u.jpg"
    },
    {
      id: "portrait",
      title: "Shooting Portrait",
      description: "Séances photos individuelles, en couple ou en famille. En studio ou en extérieur, je mets en lumière votre personnalité à travers des portraits authentiques.",
      price: "Sur devis",
      icon: Users,
      image: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843379204-aj3r.jpg"
    },
    {
      id: "collectivites",
      title: "Événements Collectivités",
      description: "Reportages photographiques pour les mairies, associations et institutions. Mise en valeur de votre patrimoine, de vos événements culturels et cérémonies officielles.",
      price: "Sur devis",
      icon: Award,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
    },
    {
      id: "produit",
      title: "Photographie Produit",
      description: "Mettez en valeur vos créations et vos produits pour votre site e-commerce ou vos supports de communication avec des clichés nets, lumineux et professionnels.",
      price: "Sur devis",
      icon: ImageIcon,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
    }
  ],
  gallery: [
    {
      url: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843381375-0tme.jpg",
      alt: "Photographie de mariage élégante à Nancy",
      category: "Mariage"
    },
    {
      url: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843380414-9ycr.jpg",
      alt: "Célébration d'anniversaire et moments de joie",
      category: "Événement"
    },
    {
      url: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843379520-cn9u.jpg",
      alt: "Séminaire d'entreprise et photographie corporate",
      category: "Professionnel"
    },
    {
      url: "https://caaopiwhzqebbobdbkpm.supabase.co/storage/v1/object/public/client-uploads/photos/ETH-CSQBGC/1773843379204-aj3r.jpg",
      alt: "Portrait classique en extérieur",
      category: "Portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
      alt: "Détail des alliances lors d'une cérémonie de mariage",
      category: "Mariage"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
      alt: "Salle de réception préparée pour un événement",
      category: "Événement"
    }
  ],
  testimonials: [
    {
      name: "Sophie & Maxime",
      city: "Nancy",
      rating: 5,
      text: "Ruben a su capturer l'essence même de notre mariage. Ses photos sont tout simplement magnifiques, d'un style classique et intemporel comme nous le souhaitions. Discret et professionnel, nous le recommandons les yeux fermés."
    },
    {
      name: "Laurent D.",
      city: "Metz",
      rating: 5,
      text: "Nous avons fait appel à Ruben pour le séminaire annuel de notre entreprise. Le résultat est impeccable. Les photos mettent parfaitement en valeur nos équipes et nos intervenants. Un travail de grande qualité."
    },
    {
      name: "Claire M.",
      city: "Lunéville",
      rating: 5,
      text: "Pour les 50 ans de mon mari, Ruben a réalisé un reportage exceptionnel. Il a su saisir les sourires et les émotions de tous nos invités. Les souvenirs que nous en gardons sont inestimables grâce à son talent."
    },
    {
      name: "Mairie de Toul",
      city: "Toul",
      rating: 5,
      text: "Une excellente collaboration avec Ruben Photographe pour la couverture de nos événements culturels. Ponctuel, rigoureux et doté d'un véritable œil artistique. Ses clichés valorisent grandement notre communication."
    }
  ],
  faq: [
    {
      question: "Combien de temps à l'avance dois-je réserver pour un mariage ?",
      answer: "Il est conseillé de réserver au moins 6 à 12 mois à l'avance, surtout pour la période estivale (de mai à septembre) qui est très demandée. Cependant, n'hésitez pas à me contacter pour vérifier mes disponibilités, même à la dernière minute."
    },
    {
      question: "Vous déplacez-vous en dehors de Nancy ?",
      answer: "Oui, je suis basé à Nancy (18 Quai Claude le Lorrain) et je me déplace dans un rayon de 100 kilomètres autour de la ville pour couvrir vos événements (mariages, séminaires, anniversaires)."
    },
    {
      question: "Combien de photos livrez-vous et sous quel format ?",
      answer: "Le nombre de photos dépend de la durée de la prestation. Pour un mariage complet, comptez entre 400 et 800 photos. Toutes les images sont triées, retouchées professionnellement et livrées en haute définition via une galerie privée en ligne."
    },
    {
      question: "Proposez-vous des albums photos ?",
      answer: "Absolument. Je propose la création d'albums photos haut de gamme, imprimés sur du papier de qualité professionnelle. Nous pourrons discuter des différentes finitions et formats lors de notre rencontre."
    },
    {
      question: "Quel est votre style photographique ?",
      answer: "Mon approche est classique, élégante et intemporelle. J'aime la lumière naturelle et les compositions soignées. Mon but est de créer des images qui traverseront les années sans se démoder."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Mes prestations débutent à 90€ pour la couverture d'un mariage civil court, à 150€ pour un anniversaire et à 200€ pour un séminaire. Chaque événement étant unique, je vous invite à me contacter pour obtenir un devis personnalisé."
    }
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Galerie", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ],
  socials: [
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "LinkedIn", href: "#", icon: "linkedin" }
  ]
};

