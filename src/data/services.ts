export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  image: string;
  fullDescription: string[];
  included: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "site-preparation",
    title: "Site Preparation",
    shortTitle: "Site Prep",
    description: "Complete clearing, grubbing, and rough grading to prepare your land for construction.",
    metaDescription: "Professional site preparation services in Cincinnati. Land clearing, grubbing, rough grading, and construction site prep. Get your property build-ready with Liteworks Co.",
    image: "/images/site-prep.png",
    fullDescription: [
      "Before any construction project can begin, the land needs to be properly prepared. Site preparation is the foundation of every successful build—whether you're constructing a new home, commercial building, or outdoor structure.",
      "At Liteworks Co., we handle the complete site preparation process from start to finish. We clear vegetation, remove stumps and debris, establish proper grades, and ensure your site is ready for your contractors to break ground.",
      "Our experienced crew uses professional-grade equipment to efficiently prepare sites of all sizes, from residential lots to commercial developments. We understand that proper site prep is critical to your project's success, and we take pride in delivering build-ready sites that meet or exceed specifications."
    ],
    included: [
      "Vegetation and brush clearing",
      "Tree removal and stump grinding",
      "Topsoil stripping and stockpiling",
      "Rough grading to specifications",
      "Debris removal and hauling",
      "Access road establishment",
      "Erosion control measures",
      "Site cleanup and final inspection"
    ],
    process: [
      { step: "Site Assessment", description: "We survey your property, review plans, and identify any challenges or special requirements." },
      { step: "Clearing & Grubbing", description: "We remove all vegetation, trees, stumps, and organic material from the construction area." },
      { step: "Rough Grading", description: "We shape the land to match your construction plans, establishing proper drainage and elevations." },
      { step: "Final Prep", description: "We install erosion controls, clean up the site, and verify everything is ready for construction." }
    ],
    faqs: [
      { question: "How long does site preparation typically take?", answer: "Most residential site prep projects take 2-5 days depending on the size and complexity. Larger commercial sites may take 1-2 weeks. We'll provide a detailed timeline with your quote." },
      { question: "Do you handle permits for site preparation?", answer: "We can advise on what permits may be required and assist with the application process. Requirements vary by municipality, so we'll help guide you through your local requirements." },
      { question: "What happens to the cleared material?", answer: "Organic material like brush and trees can be mulched on-site or hauled away. Topsoil is typically stockpiled for later use. We discuss disposal options during the quoting process." }
    ]
  },
  {
    slug: "excavation",
    title: "Excavation",
    shortTitle: "Excavation",
    description: "Professional excavation for foundations, basements, ponds, and pools.",
    metaDescription: "Expert excavation services in Greater Cincinnati. Foundation excavation, basement digging, pond construction, pool excavation. Precision earthwork by Liteworks Co.",
    image: "/images/excavation.png",
    fullDescription: [
      "Excavation is at the heart of what we do. Whether you need a basement dug for a new home, a foundation prepared for an addition, or a pond excavated on your property, Liteworks delivers precise, efficient excavation services.",
      "Our fleet of excavators and skilled operators can handle projects ranging from small residential digs to large-scale commercial excavation. We work closely with builders, contractors, and homeowners to ensure every dig meets exact specifications.",
      "Precision matters in excavation. An improperly dug foundation can lead to costly problems down the road. That's why we use modern equipment, experienced operators, and careful planning to ensure your excavation is done right the first time."
    ],
    included: [
      "Foundation excavation to specification",
      "Basement and crawlspace excavation",
      "Pond and pool excavation",
      "Utility line trenching",
      "Soil removal and hauling",
      "Backfilling and compaction",
      "Grade verification",
      "Site drainage considerations"
    ],
    process: [
      { step: "Plan Review", description: "We review your plans, survey the site, and identify underground utilities before any digging begins." },
      { step: "Excavation", description: "Our skilled operators excavate to the exact depths and dimensions specified in your plans." },
      { step: "Material Handling", description: "We remove excavated material from the site or stockpile it for backfilling as needed." },
      { step: "Verification", description: "We verify depths and dimensions, ensure proper drainage, and prepare the site for the next phase." }
    ],
    faqs: [
      { question: "How deep can you excavate?", answer: "Our equipment can handle excavations up to 20+ feet deep. For standard residential basements and foundations, typical depths range from 4-10 feet. We'll match equipment to your project requirements." },
      { question: "What do you do with the excavated dirt?", answer: "Depending on your project, we can haul away excess material, use it for backfilling, or spread it elsewhere on your property. We discuss material handling options during the quoting process." },
      { question: "Do you call OUPS before excavating?", answer: "Absolutely. We always contact Ohio Utilities Protection Service (OUPS) to locate underground utilities before any excavation work begins. Safety is our top priority." }
    ]
  },
  {
    slug: "grading",
    title: "Grading & Earthwork",
    shortTitle: "Grading",
    description: "Precision finish grading, leveling, and drainage shaping for your property.",
    metaDescription: "Professional grading and earthwork services in Cincinnati. Finish grading, land leveling, drainage solutions. Transform your terrain with Liteworks Co.",
    image: "/images/grading.png",
    fullDescription: [
      "Proper grading is essential for drainage, construction, and the overall usability of your property. Whether you need finish grading for a new lawn, slope correction to prevent water damage, or precise grading for a construction project, Liteworks has the expertise and equipment to deliver.",
      "Grading isn't just about moving dirt—it's about understanding water flow, soil composition, and the end goals for your property. Our experienced operators know how to shape land to promote proper drainage while achieving the aesthetic or functional results you need.",
      "From minor lawn grading to major earthwork projects, we approach every job with the same attention to detail. We use laser-guided equipment when precision is critical and work closely with you to ensure the final grade meets your expectations."
    ],
    included: [
      "Finish grading for lawns and landscaping",
      "Rough grading for construction",
      "Slope correction and leveling",
      "Drainage swale creation",
      "Cut and fill operations",
      "Topsoil spreading",
      "Compaction where required",
      "Final grade verification"
    ],
    process: [
      { step: "Survey & Plan", description: "We assess current grades, drainage patterns, and desired outcomes to develop a grading plan." },
      { step: "Rough Work", description: "We move material to establish approximate grades, handling major cut and fill operations." },
      { step: "Fine Grading", description: "We achieve final grades with precision equipment, ensuring proper slopes and smooth surfaces." },
      { step: "Finishing", description: "We apply topsoil if needed, verify grades, and ensure drainage flows as designed." }
    ],
    faqs: [
      { question: "What slope is needed for proper drainage?", answer: "Generally, a minimum 2% slope (about 1/4 inch per foot) is recommended to direct water away from structures. Steeper slopes may be needed depending on your specific situation and local conditions." },
      { question: "Can you grade in wet conditions?", answer: "Grading works best in moderate conditions. Very wet soil can compact poorly and create problems. We'll advise on optimal timing and may reschedule if conditions aren't suitable." },
      { question: "Do you provide topsoil?", answer: "Yes, we can supply and spread quality topsoil as part of your grading project. This is especially important for lawn establishment after grading." }
    ]
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    shortTitle: "Land Clearing",
    description: "Vegetation and brush removal, forestry mulching for overgrown properties.",
    metaDescription: "Land clearing and forestry mulching services in Cincinnati. Brush removal, vegetation clearing, lot clearing. Reclaim your property with Liteworks Co.",
    image: "/images/land-clearing.png",
    fullDescription: [
      "Overgrown land can feel overwhelming—dense brush, invasive species, and years of neglect can make a property seem unusable. Our land clearing services transform overgrown lots into usable space, whether you're preparing to build, creating pasture, or simply reclaiming your property.",
      "We specialize in forestry mulching, an efficient and environmentally-friendly method that grinds vegetation into mulch on-site. This eliminates the need for burning or hauling, returns nutrients to the soil, and provides immediate erosion control.",
      "From small residential lots to large acreage, we have the equipment and experience to clear your land efficiently. Our forestry mulchers can handle everything from dense brush to standing trees, leaving you with clean, usable ground."
    ],
    included: [
      "Brush and vegetation removal",
      "Forestry mulching",
      "Small tree removal",
      "Invasive species clearing",
      "Fence line clearing",
      "Trail and path creation",
      "Selective clearing (preserve specific trees)",
      "Debris grinding and spreading"
    ],
    process: [
      { step: "Property Walk", description: "We walk the property with you to identify clearing boundaries and any trees or features to preserve." },
      { step: "Clearing Plan", description: "We develop an approach based on vegetation type, density, and your end goals for the property." },
      { step: "Mulching", description: "Our forestry mulchers grind vegetation into fine mulch, clearing the land efficiently." },
      { step: "Cleanup", description: "We spread mulch evenly or remove it based on your preference, leaving clean, usable ground." }
    ],
    faqs: [
      { question: "What size trees can you mulch?", answer: "Our forestry mulchers can handle trees up to 8-10 inches in diameter. Larger trees may need to be cut first, then the stumps and debris can be mulched." },
      { question: "What happens to the mulch?", answer: "The mulched material can be left in place (it makes excellent ground cover and returns nutrients to the soil), spread more evenly across the cleared area, or removed if you prefer bare ground." },
      { question: "How much can you clear in a day?", answer: "This varies significantly based on vegetation density. In moderate brush, we can typically clear 1-2 acres per day. Dense woods with large trees takes longer. We'll provide an estimate during the site visit." }
    ]
  },
  {
    slug: "demolition",
    title: "Demolition",
    shortTitle: "Demolition",
    description: "Safe structure teardowns, concrete removal, and debris hauling.",
    metaDescription: "Professional demolition services in Greater Cincinnati. Building teardowns, concrete removal, debris hauling. Safe, efficient demolition by Liteworks Co.",
    image: "/images/demolition.png",
    fullDescription: [
      "Sometimes you need to tear down before you can build up. Liteworks provides professional demolition services for structures, concrete, and other obstacles standing in the way of your project.",
      "We handle demolition projects of all sizes—from removing an old shed or garage to tearing down larger structures. Our approach prioritizes safety, efficiency, and proper disposal of materials.",
      "Concrete removal is another common need. Whether it's an old driveway, patio, foundation, or other concrete structure, we have the equipment to break it up and haul it away, leaving your site clean and ready for what's next."
    ],
    included: [
      "Structure teardowns (sheds, garages, barns)",
      "Concrete breaking and removal",
      "Foundation removal",
      "Driveway and patio demolition",
      "Above-ground pool removal",
      "Debris sorting and recycling",
      "Material hauling and disposal",
      "Site cleanup after demolition"
    ],
    process: [
      { step: "Assessment", description: "We assess the structure, identify any hazardous materials, and plan the safest demolition approach." },
      { step: "Preparation", description: "We secure permits if required, disconnect utilities, and set up safety measures." },
      { step: "Demolition", description: "We tear down the structure systematically, separating materials for proper disposal or recycling." },
      { step: "Cleanup", description: "We remove all debris, fill any holes, and leave the site clean and level." }
    ],
    faqs: [
      { question: "Do you handle asbestos or hazardous materials?", answer: "We do not handle asbestos or other hazardous materials. If suspected hazardous materials are present, we can recommend certified abatement contractors to address those before demolition." },
      { question: "What permits are needed for demolition?", answer: "Permit requirements vary by municipality and project scope. We can advise on likely requirements and assist with the permitting process. Most residential outbuilding demolitions don't require permits, but it's best to verify." },
      { question: "Can materials be recycled?", answer: "Yes, we sort materials when possible. Metal is recycled, clean concrete can often be crushed and reused, and other materials are disposed of properly. This helps reduce landfill waste and may reduce disposal costs." }
    ]
  },
  {
    slug: "drainage",
    title: "Drainage & Erosion Control",
    shortTitle: "Drainage",
    description: "French drains, swales, and retention ponds to manage water flow.",
    metaDescription: "Drainage and erosion control services in Cincinnati. French drains, drainage swales, retention ponds. Solve water problems with Liteworks Co.",
    image: "/images/drainage.png",
    fullDescription: [
      "Water problems on your property can lead to foundation damage, erosion, standing water, and unusable land. Our drainage solutions address these issues at the source, directing water where it belongs and protecting your property from damage.",
      "We design and install comprehensive drainage systems tailored to your property's specific needs. From simple French drains to complex grading solutions with retention ponds, we have the expertise to solve your water management challenges.",
      "Erosion control is equally important, especially on slopes or disturbed soil. We implement measures that prevent soil loss while promoting proper water flow, protecting both your property and the surrounding environment."
    ],
    included: [
      "French drain installation",
      "Surface drainage swales",
      "Retention and detention ponds",
      "Downspout extensions and outlets",
      "Grading for drainage",
      "Culvert installation",
      "Erosion control measures",
      "Sump pump discharge solutions"
    ],
    process: [
      { step: "Diagnosis", description: "We assess your water issues, trace problem sources, and understand the full drainage picture." },
      { step: "Design", description: "We design a drainage solution that addresses your specific problems while working with your property's features." },
      { step: "Installation", description: "We excavate, install drainage components, and establish proper grades for water flow." },
      { step: "Verification", description: "We test the system, ensure proper function, and restore disturbed areas." }
    ],
    faqs: [
      { question: "How do I know if I need drainage work?", answer: "Signs include standing water after rain, water in your basement or crawlspace, erosion channels, soggy areas that never dry out, or water pooling near your foundation. If you're unsure, we can assess your property." },
      { question: "What's a French drain?", answer: "A French drain is a gravel-filled trench with a perforated pipe that collects and redirects groundwater. It's very effective for managing subsurface water and preventing water from reaching foundations." },
      { question: "Will drainage work tear up my yard?", answer: "Some disruption is unavoidable, but we minimize it as much as possible. We restore disturbed areas to grade and can apply seed or sod. Within a season, you typically won't see where we worked." }
    ]
  },
  {
    slug: "trenching",
    title: "Utility Trenching",
    shortTitle: "Trenching",
    description: "Professional trenching for water, sewer, electric, gas, and communications.",
    metaDescription: "Utility trenching services in Greater Cincinnati. Water, sewer, electric, gas, and communications lines. Professional trenching by Liteworks Co.",
    image: "/images/trenching.png",
    fullDescription: [
      "Underground utilities are the lifelines of modern properties. When you need to install, repair, or extend water, sewer, electric, gas, or communications lines, proper trenching is essential for a successful project.",
      "Our utility trenching services provide clean, properly-graded trenches for any type of underground utility. We work with plumbers, electricians, and other contractors to ensure trenches meet specifications and code requirements.",
      "We also handle the backfilling and compaction after utilities are installed, ensuring proper support for the lines and restoring your property to grade. Our careful approach minimizes disruption while delivering the access your project needs."
    ],
    included: [
      "Trenching for water lines",
      "Sewer and septic trenching",
      "Electric and gas line trenches",
      "Communications/fiber conduit trenches",
      "Proper bedding material installation",
      "Backfilling and compaction",
      "Grade restoration",
      "Utility locating coordination"
    ],
    process: [
      { step: "Planning", description: "We review your utility plans, coordinate with OUPS for locates, and plan the most efficient route." },
      { step: "Trenching", description: "We excavate trenches to the required depth and width, maintaining proper grade throughout." },
      { step: "Preparation", description: "We prepare the trench with bedding material if required, ready for utility installation." },
      { step: "Completion", description: "After utilities are installed, we backfill, compact, and restore the surface." }
    ],
    faqs: [
      { question: "How deep do utility trenches need to be?", answer: "Depth varies by utility type and local code. Water lines are typically 42-48 inches (below frost line), sewer lines vary by slope requirements, and electric/gas have their own specifications. We dig to whatever depth your project requires." },
      { question: "Do you install the actual utilities?", answer: "We dig the trenches and prepare them for installation, but licensed plumbers and electricians typically install the actual utility lines. We're happy to work with your contractors or recommend trusted partners." },
      { question: "Can you trench through rock?", answer: "Yes, we have equipment capable of breaking through rock and other difficult materials. Rock trenching takes longer and may affect pricing, but it's not a barrier to getting your project done." }
    ]
  },
  {
    slug: "driveway",
    title: "Driveway & Road Building",
    shortTitle: "Driveways",
    description: "Quality gravel driveways, access roads, and turnarounds.",
    metaDescription: "Driveway and road construction in Cincinnati. Gravel driveways, access roads, turnarounds. Professional driveway building by Liteworks Co.",
    image: "/images/driveway.png",
    fullDescription: [
      "A well-built driveway or access road is essential for reaching your property safely and comfortably. Whether you need a new residential driveway, an access road for your acreage, or a turnaround area, Liteworks builds drives and roads that last.",
      "We specialize in gravel driveways and roads, which offer excellent durability, drainage, and value. Our process includes proper site prep, grading, base material installation, and finishing to ensure your driveway handles traffic and weather for years to come.",
      "From simple residential driveways to longer access roads with curves and grades, we have the experience to plan and build roads that work for your property and your needs."
    ],
    included: [
      "Driveway planning and layout",
      "Tree and brush clearing for route",
      "Subgrade preparation",
      "Drainage provisions",
      "Base material installation",
      "Gravel surface application",
      "Grading and crowning",
      "Turnaround and parking areas"
    ],
    process: [
      { step: "Planning", description: "We survey the route, plan for drainage, and determine the best layout for your property." },
      { step: "Preparation", description: "We clear the route, remove organic material, and prepare the subgrade." },
      { step: "Base Work", description: "We install and compact base material to create a solid foundation." },
      { step: "Finishing", description: "We apply the final surface material, crown for drainage, and ensure smooth transitions." }
    ],
    faqs: [
      { question: "How thick should a gravel driveway be?", answer: "A properly built gravel driveway typically has 4-6 inches of compacted base material topped with 2-3 inches of surface gravel. Depth may vary based on soil conditions and expected traffic." },
      { question: "What type of gravel do you use?", answer: "We typically use crushed limestone or similar local stone. The base layer is larger aggregate that compacts well, while the surface layer is smaller material for a smooth finish. We can discuss options based on your preferences." },
      { question: "How long will a gravel driveway last?", answer: "With proper construction and occasional maintenance (adding surface gravel every few years, grading as needed), a gravel driveway can last indefinitely. The key is proper initial construction with good drainage." }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
