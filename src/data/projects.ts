export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  type: string;
  location: string;
  status: string;
  heroImage: string;
  facadeImage: string;
  gallery: { url: string; title: string; category: string }[];
  blueprints: { url: string; title: string; desc: string }[];
  overview: string;
  keyHighlights: string[];
  configurations: {
    type: string;
    area: string;
    description: string;
  }[];
  specifications: {
    category: string;
    items: string[];
  }[];
  amenities: {
    category: string;
    items: string[];
  }[];
  connectivity: {
    landmark: string;
    detail: string;
  }[];
  faqs: { q: string; a: string }[];
  reraStatus: string;
  collaborators?: {
    developer?: string;
    architecture?: string;
    rccConsultancy?: string;
    legalEntity?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'casa-bliss',
    slug: 'casa-bliss',
    name: 'CASA BLISS',
    tagline: 'The First Boutique Premium Address of Dronagiri',
    type: 'Boutique Mixed-Use (Residences & Curated Retail)',
    location: 'Plot No. 74 A, Sector 55, Dronagiri, Navi Mumbai',
    status: 'Upcoming / New Launch',
    heroImage: '/assets/casa-bliss-render.png',
    facadeImage: '/assets/casa-bliss-facade.png',
    overview: 'Casa Bliss is a limited collection of 24 boutique residences thoughtfully planned above curated convenience retail in Dronagiri, Navi Mumbai. Designed for modern families and discerning investors, it combines generous natural light, cross-ventilation, open vistas, and prime 22-metre road frontage overlooking a school and playground.',
    keyHighlights: [
      'Limited collection of only 24 premium boutique residences',
      'Ground + 1 curated convenience retail podium (Casa Arcade)',
      'Spacious 500+ sq.ft Urban Collection & 740+ sq.ft Signature Family Homes',
      'Prime 22-metre roadside visibility & corner plot location',
      'Overlooking dedicated educational & playground open spaces',
      '13 documented essential lifestyle & wellness amenities'
    ],
    configurations: [
      {
        type: '1 BHK — Urban Collection',
        area: '500+ Sq. Ft. Lifestyle Homes',
        description: 'Optimized space with cross-ventilation, spacious living lounge, and private balconies designed according to Vastu principles.'
      },
      {
        type: '2 BHK — Signature Collection',
        area: '740+ Sq. Ft. Family Homes',
        description: 'Generous corner residences featuring expansive master bedrooms, natural light, open views, and curated privacy for modern families.'
      }
    ],
    amenities: [
      {
        category: 'Rooftop & Wellness in the Sky',
        items: [
          'Yoga Zone with serene sunrise views',
          'Kids Play Area with specialized play equipment',
          'Rooftop Recreational Lounge & Gazebo with sit-out pergolas',
          'Walking deck with lush potted landscape'
        ]
      },
      {
        category: 'Building & Safety Features',
        items: [
          'Designer Grand Entrance Lobby',
          '24x7 CCTV Surveillance across all access zones',
          'Video Door Phone integration for every home',
          'Invisible Grills on balconies for safety and clear views',
          '24/7 Power Backup for common areas & lifts',
          'Dedicated Car Parking spaces',
          'Fire Safety Systems and fire fighting installations',
          'Multi-Purpose / Telecom Room'
        ]
      },
      {
        category: 'Eco & Convenience',
        items: [
          'EV Charging Points for electric vehicles',
          'High-speed branded elevators',
          'Ground Floor Casa Arcade retail for daily essentials'
        ]
      }
    ],
    specifications: [
      {
        category: 'Flooring & Surfaces',
        items: [
          'High-end vitrified tile flooring in living, dining, and bedrooms',
          'Anti-skid ceramic tiles in bathrooms and balconies',
          'Full-height designer dado wall tiles in bathrooms'
        ]
      },
      {
        category: 'Kitchen',
        items: [
          'Granite kitchen platform with stainless steel (SS) sink',
          'Provision for water purifier and exhaust fan',
          'Glazed wall tiles above platform'
        ]
      },
      {
        category: 'Doors & Windows',
        items: [
          'Premium marble / granite frames for doors and windows',
          'Powder-coated aluminium sliding windows with clear glass',
          'Heavy quality wooden main flush door with designer laminate'
        ]
      },
      {
        category: 'Hardware, Electrical & Paint',
        items: [
          'Branded CP fittings and premium sanitary ware',
          'Concealed copper wiring with modular switches & MCB distribution',
          'Internal walls finished with premium distemper paints',
          'External walls finished with weather-proof acrylic paint for durability'
        ]
      }
    ],
    blueprints: [
      {
        url: '/assets/casa-bliss-brochure-spread.jpg',
        title: 'Project Brochure & Architectural Layout',
        desc: 'Official master layout showcase detailing specifications, elevations, and unit plans.'
      },
      {
        url: '/assets/dronagiri-location-aurrum.jpg',
        title: 'Dronagiri Strategic Connectivity Map',
        desc: 'Regional connectivity overview featuring Atal Setu, Navi Mumbai Airport, and suburban railway networks.'
      }
    ],
    gallery: [
      { url: '/assets/casa-bliss-facade.png', title: 'Architectural Elevation & Retail Arcade', category: 'Exterior' },
      { url: '/assets/casa-bliss-render.png', title: 'Perspective Render', category: 'Exterior' },
      { url: '/assets/casa-bliss-brochure-spread.jpg', title: 'Amenities & Floor Layouts', category: 'Brochure' },
      { url: '/assets/dronagiri-location-aurrum.jpg', title: 'Macro Infrastructure Connectivity', category: 'Location' }
    ],
    connectivity: [
      { landmark: 'Navi Mumbai International Airport (NMIA)', detail: 'Fast access via express arterial corridor' },
      { landmark: 'Atal Setu (MTHL)', detail: 'Direct rapid connectivity to South Mumbai in ~20 minutes' },
      { landmark: 'Local Railway Station (Dronagiri / Uran line)', detail: 'Proximity to local suburban railway transit' },
      { landmark: '22-Metre Frontage Road', detail: 'Prime roadside positioning with easy vehicle turnaround' },
      { landmark: 'Educational & Public Spaces', detail: 'Immediately adjacent to sector school and playground plot' }
    ],
    faqs: [
      {
        q: 'Where exactly is Casa Bliss located?',
        a: 'Casa Bliss is situated at Plot No. 74 A, Sector 55, Dronagiri, Navi Mumbai, on a wide 22-metre road facing school and playground zones.'
      },
      {
        q: 'What unit configurations are available in Casa Bliss?',
        a: 'Casa Bliss offers 24 boutique residences comprising 1 BHK Urban Collection (500+ sq. ft.) and 2 BHK Signature Collection (740+ sq. ft.) family homes.'
      },
      {
        q: 'Who are the collaborative partners and consultants on this project?',
        a: 'The project is developed by Falcon Realty in collaboration with Aurrum Rise Lifestyle & Multi-Aul Builders. Architectural planning is by Gagan Vives Architects, and RCC Consultancy is handled by Ashwin Wankhade & Associates.'
      },
      {
        q: 'What commercial spaces are available on the ground floor?',
        a: 'The ground and first floor comprise Casa Arcade — curated retail spaces for everyday convenience such as daily marts, pharmacies, and specialty cafes.'
      }
    ],
    reraStatus: 'Registered under MahaRERA guidelines. For exact verification numbers and project files, refer to the MahaRERA public portal or request documentation via our sales team.',
    collaborators: {
      developer: 'Falcon Realty & Aurrum Rise Lifespace / Multi-Aul Builders',
      architecture: 'Gagan Vives Architects',
      rccConsultancy: 'Ashwin Wankhade & Associates',
      legalEntity: 'Falcon Realty'
    }
  },
  {
    id: 'casa-one',
    slug: 'casa-one',
    name: 'CASA ONE',
    tagline: '7 Storeyed Abode of Elevated Serenity',
    type: 'Boutique Residential Development (G+7 Floors)',
    location: 'Plot No. 129, Sector 53, Dronagiri, Navi Mumbai (Adjacent to 11m Wide Road & Open Spaces)',
    status: 'New Launch',
    heroImage: '/assets/casa-one-render.png',
    facadeImage: '/assets/casa-one-facade.png',
    overview: 'CASA ONE is a 7-storeyed boutique residential development located in Sector 53, Dronagiri, Navi Mumbai. Designed for serene, low-density family living, each floor accommodates thoughtfully organized 1 BHK residences (383 sq. ft. & 443 sq. ft.) with dual balconies, independent multi-purpose facilities, and an exclusive rooftop retreat.',
    keyHighlights: [
      'G+7 Storeyed private boutique residential building',
      '4 residences per floor with wide central passage & high-speed lift',
      'Documented 1 BHK configurations: 383 sq.ft and 443 sq.ft',
      'Dual balcony provisions with 3\'3" wide open spaces',
      'Ground floor driveway with covered vehicle parking and telecom room',
      'Exclusive rooftop leisure terrace with Buddha water feature, kids play area & gazebo'
    ],
    configurations: [
      {
        type: '1 BHK — Type A',
        area: '383 Sq. Ft. Carpet Area',
        description: 'Smartly configured 1-bedroom home with dedicated living zone, master bedroom, twin toilets, kitchen, and dry balcony passage.'
      },
      {
        type: '1 BHK — Type B',
        area: '443 Sq. Ft. Carpet Area',
        description: 'Spacious 1-bedroom home offering expansive open living room, extended kitchen platform, dual balconies, and private master bedroom sanctuary.'
      }
    ],
    amenities: [
      {
        category: 'Rooftop Lifestyle Amenities',
        items: [
          'Pergola Gazebo with draped lounge seating',
          'Tranquil Buddha Meditation Garden & water wall',
          'Kids Play Area with slides & safe rubberized activity zone',
          'Landscaped rooftop terrace with ornamental lighting'
        ]
      },
      {
        category: 'Building Amenities & Security',
        items: [
          'Grand Designer Lobby',
          '24x7 CCTV Security system covering perimeter & entry',
          'Video Door Phone security in every home',
          'Multi-Purpose / Telecom Room at ground floor',
          'Dedicated EV Charging Points',
          'High-speed branded passenger lift (6\'0" x 5\'6")',
          'Ground floor peripheral driveway with wide entry/exit'
        ]
      }
    ],
    specifications: [
      {
        category: 'Flooring & Wall Finishes',
        items: [
          'Vitrified tile flooring in all living spaces and bedrooms',
          'Anti-skid tiles and full-height designer dado tiles in WC & bathrooms',
          'Distemper paints on internal walls'
        ]
      },
      {
        category: 'Doors, Windows & Frames',
        items: [
          'Marble / granite framing for all doors and windows',
          'Powder-coated aluminium sliding windows with high-durability seals'
        ]
      },
      {
        category: 'Kitchen & Plumbing',
        items: [
          'Granite kitchen platform with stainless steel (SS) sink',
          'Branded CP fittings and quality sanitary ware'
        ]
      },
      {
        category: 'Electrical & Convenience',
        items: [
          'Concealed copper wiring with modular switches',
          'Provision for modular kitchen fittings & video intercom'
        ]
      }
    ],
    blueprints: [
      {
        url: '/assets/casa-one-facade.png',
        title: 'Architectural Elevation',
        desc: '7-storeyed facade showcasing rhythmic vertical balconies, terracotta detailing, and ground stilt lobby.'
      },
      {
        url: '/assets/casa-one-render.png',
        title: 'Perspective Architectural View',
        desc: 'Full perspective rendering showing expansive corner windows and rooftop amenities.'
      }
    ],
    gallery: [
      { url: '/assets/casa-one-render.png', title: 'CASA ONE Perspective Elevation', category: 'Exterior' },
      { url: '/assets/casa-one-facade.png', title: 'Street Elevation View', category: 'Exterior' },
      { url: '/assets/dronagiri-location-aurrum.jpg', title: 'Dronagiri Regional Growth Corridor', category: 'Location' }
    ],
    connectivity: [
      { landmark: 'Sector 53 Main Corridor', detail: 'Fronting 11m wide road with direct access to arterial routes' },
      { landmark: 'Reliance SEZ & Dronagiri Commercial Hub', detail: 'Strategically located near major trade & SEZ growth zones' },
      { landmark: 'Social Facility & Schools', detail: 'Walking distance to planned sector playground, social center and daily bazaars' },
      { landmark: 'Atal Setu & Airport Transit', detail: 'Rapid transit connection to South Mumbai and NMIA' }
    ],
    faqs: [
      {
        q: 'What is the structure and configuration of CASA ONE?',
        a: 'CASA ONE is a G+7 storeyed residential project featuring four 1 BHK apartments per typical floor (383 sq. ft. and 443 sq. ft.).'
      },
      {
        q: 'What amenities are offered at the rooftop level?',
        a: 'The rooftop features an open-air leisure sanctuary including a yoga & meditation Buddha court, kids play equipment, and an architectural pergola lounge.'
      },
      {
        q: 'Where is CASA ONE located?',
        a: 'CASA ONE is located at Plot 129, Sector 53, Dronagiri, Navi Mumbai, adjacent to an 11-metre road and planned CIDCO social open spaces.'
      }
    ],
    reraStatus: 'Registered under applicable MahaRERA guidelines. Detailed registration certificates, floor maps, and commencement sanctions are available on MahaRERA official website or by direct consultation.',
    collaborators: {
      developer: 'Falcon Realty & Aurrum Rise Lifespace / Aaum Constructions',
      legalEntity: 'Falcon Realty'
    }
  }
];
