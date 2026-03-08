export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  image: string;
  heroVideo?: string;
  fullDescription: string[];
  // New fields for redesigned service pages
  situations?: { title: string; description: string; icon: string }[];
  galleryImages?: string[];
  expectations?: { timeline: string; priceRange: string; details: string[] };
  testimonial?: { quote: string; name: string; location: string; project: string };
  // Legacy fields (still supported)
  included: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

// ─── Original services (keep existing URLs working) ───────────────────────────
export const services: ServiceData[] = [
  {
    slug: "site-preparation",
    title: "Site Preparation",
    shortTitle: "Site Prep",
    description: "Complete clearing, grubbing, and rough grading to prepare your land for construction.",
    metaDescription: "Professional site preparation services in Cincinnati. Land clearing, grubbing, rough grading, and construction site prep. Get your property build-ready with Liteworks Co.",
    image: "/images/site-prep.png",
    heroVideo: "/videos/drone-excavator-topdown.mp4",
    fullDescription: [
      "Before any construction project can begin, the land needs to be properly prepared. Site preparation is the foundation of every successful build — whether you're constructing a new home, a commercial building, a garage, a pole barn, or any other structure on your Greater Cincinnati area property.",
      "At Liteworks Co., we handle the complete site preparation process from start to finish. That means clearing vegetation, removing stumps and debris, establishing proper grades, and ensuring your site is fully ready for your contractors to break ground without delays or surprises.",
      "Our experienced crew uses professional-grade equipment — including track loaders, excavators, and forestry mulchers — to efficiently prepare sites of all sizes. From a single residential building lot in Anderson Township or Loveland to a multi-acre commercial development in West Chester or Florence, KY, we bring the same level of precision and professionalism to every job."
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
    heroVideo: "/videos/excavator-main.mp4",
    fullDescription: [
      "Excavation is at the heart of what we do. Whether you need a basement dug for a new home, a foundation prepared for an addition, a pond excavated on your acreage, or a pool installed in your backyard, Liteworks Co. delivers precise, efficient excavation throughout Greater Cincinnati and Northern Kentucky.",
      "Our fleet of excavators and skilled operators can handle projects ranging from small residential digs to large-scale commercial earthwork. We work closely with builders, contractors, and homeowners to ensure every excavation meets exact plan specifications — depth, width, and grade.",
      "Before any digging begins, we contact Ohio Utilities Protection Service (OUPS) and Kentucky 811 as appropriate to locate and mark all underground utilities. Safety is never an afterthought on our job sites."
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
      { step: "Plan Review", description: "We review your plans, survey the site, and locate underground utilities before any digging begins." },
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
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "Proper grading is one of the most important — and most overlooked — elements of any property improvement or construction project. Whether you need finish grading for a new lawn, slope correction to prevent water damage, precise construction grading, or a major earthwork project, Liteworks Co. has the expertise and equipment to deliver results throughout Greater Cincinnati.",
      "Grading isn't just about moving dirt. It's about understanding water flow, soil composition, and the long-term goals for your property. Get the grade wrong, and water ends up where it shouldn't — against your foundation, in your basement, or pooling in your yard.",
      "Greater Cincinnati's heavy clay soils make proper grading especially critical. Clay soil doesn't drain the way sandy or loamy soil does, and it expands and contracts significantly with moisture changes. Our crews understand how to work with local soil conditions to create grades that perform year-round."
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
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "Overgrown land can feel completely overwhelming — dense brush, invasive species, thorny thickets, and years of neglect can make a property seem unusable or even inaccessible. Our land clearing services transform overgrown lots into usable, beautiful space, whether you're preparing to build, establishing pasture, creating trails, or simply reclaiming land that got away from you.",
      "Liteworks Co. specializes in forestry mulching, one of the most efficient and environmentally responsible land clearing methods available. Our purpose-built forestry mulchers grind vegetation — brush, saplings, and trees — into fine mulch directly on site. This eliminates the need for burning or hauling massive amounts of debris, and the resulting mulch layer returns nutrients to the soil while providing immediate erosion control.",
      "Our forestry mulching equipment can handle trees up to 8-10 inches in diameter in a single pass. For larger trees, we can fell them first and then mulch the stumps and debris. This makes our process significantly faster than traditional cut-and-haul methods, which translates directly to lower cost for you."
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
    heroVideo: "/videos/bulldozer-tracking.mp4",
    fullDescription: [
      "Sometimes you need to tear down before you can build up. Liteworks Co. provides professional demolition services for structures, concrete, and other obstacles standing in the way of your next project — serving homeowners and contractors throughout Greater Cincinnati and Northern Kentucky.",
      "We handle demolition projects of all sizes, from removing an old shed or detached garage to tearing down larger structures like barns, outbuildings, and commercial structures. Our approach prioritizes safety, efficiency, and proper disposal or recycling of materials.",
      "Safety is our top priority on demolition jobs. We assess every structure before work begins, identify potential hazards, secure the area, and work systematically to bring structures down in a controlled manner. We always check for utilities and work with property owners to disconnect services before demolition begins."
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
    heroVideo: "/videos/drainage-aerial.mp4",
    fullDescription: [
      "Water problems are one of the most destructive and frustrating issues a Greater Cincinnati property owner can face. Standing water, foundation seepage, yard erosion, and soggy low spots aren't just inconvenient — they can cause serious long-term damage to your home, your landscaping, and the overall value of your property. Liteworks Co. designs and installs drainage solutions that actually solve the problem at the source.",
      "Cincinnati's climate makes drainage particularly challenging. The region averages over 40 inches of rainfall annually, with heavy spring rains being especially intense. Combined with the area's heavy clay soils, many properties in Hamilton, Clermont, Warren, and Butler counties deal with chronic water management issues.",
      "We design and install comprehensive drainage systems tailored to each property's specific needs and topography. We start by diagnosing the actual problem — tracing where water is coming from and what's preventing it from draining properly. Too many drainage installations fail because they address symptoms rather than causes."
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
    heroVideo: "/videos/excavator-burying-trench.mp4",
    fullDescription: [
      "Underground utilities are the essential infrastructure that makes modern properties functional — water, sewer, electric, gas, communications, and fiber optic lines all need to get from point A to point B through properly excavated trenches. When you need trenching done right, Liteworks Co. delivers clean, precisely-graded utility trenches throughout Greater Cincinnati and Northern Kentucky.",
      "We work with licensed plumbers, electricians, gas contractors, and communications companies to ensure every trench meets the depth, width, and bedding specifications required by code and by the installing contractor. Our role is to have the trench ready when your utility contractor shows up — to spec, on time, and with minimal disruption to the surrounding property.",
      "Before any digging, we contact OUPS (Ohio Utilities Protection Service) or Kentucky 811 to have all existing utilities located and marked. This is not optional — it's the law and it's critical for safety. We take this step seriously on every project, every time."
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
    heroVideo: "/videos/concrete-crew.mp4",
    fullDescription: [
      "A well-built driveway or access road is one of those things you don't think about until it fails. A poorly constructed driveway washes out in heavy rain, develops ruts under vehicle weight, or turns into a muddy mess every spring. Liteworks Co. builds gravel driveways and access roads that hold up — throughout Greater Cincinnati's wet springs, hot summers, and freezing winters.",
      "The key to a long-lasting gravel driveway is what you can't see: the base. We start by removing organic material and weak subgrade soils, then install and compact a suitable base aggregate before applying the finish surface. Skipping or skimping on this step is why so many DIY and low-bid driveways fail within a few years.",
      "Drainage is the other critical factor. We design every driveway with proper crown to shed water to the sides, and we install culverts or drainage swales where needed to prevent water from pooling on or alongside the driveway. This is especially important in Greater Cincinnati, where heavy rainfall is common and clay soils drain slowly."
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

// ─── Commercial Services ──────────────────────────────────────────────────────
export const commercialServices: ServiceData[] = [
  {
    slug: "site-preparation",
    title: "Commercial Site Preparation",
    shortTitle: "Site Prep",
    description: "Full-scale commercial clearing, grubbing, and rough grading to make your development site build-ready.",
    metaDescription: "Commercial site preparation in Greater Cincinnati. Land clearing, grubbing, mass grading for development projects. Liteworks Co. delivers build-ready sites on schedule.",
    image: "/images/site-prep.png",
    heroVideo: "/videos/drone-excavator-topdown.mp4",
    fullDescription: [
      "Commercial construction projects live or die by what happens before the first foundation wall goes in. Site preparation sets the stage for every trade that follows — grading mistakes, inadequate clearing, and improper erosion control at this phase create cascading problems that cost far more to fix mid-project than to prevent upfront. Liteworks Co. specializes in commercial site preparation throughout Greater Cincinnati, Northern Kentucky, and Southeast Indiana.",
      "We work directly with developers, general contractors, and civil engineers to execute site prep according to approved grading and SWPPP (Stormwater Pollution Prevention Plan) requirements. Our team is experienced reading civil plans and coordinating with other trades, so we integrate seamlessly into your project schedule rather than creating a bottleneck.",
      "Our commercial site prep capabilities include mass clearing and grubbing, topsoil stripping and stockpiling, construction access road establishment, erosion and sediment control installation per permit requirements, rough mass grading to engineering plan elevations, and subgrade preparation for building pads and parking areas.",
      "Greater Cincinnati's soil conditions add complexity to commercial site prep that contractors from outside the region often underestimate. Much of Hamilton County, Butler County, and Clermont County sits on heavy clay subsoils that expand and contract dramatically with moisture. We strip topsoil to appropriate depths, identify areas of unsuitable subgrade that need to be undercut and replaced, and grade for drainage patterns that account for clay's slow infiltration rate.",
      "Erosion and sediment control isn't a checkbox — it's an ongoing field responsibility throughout the site prep phase. Our crews install silt fence, construction entrances, and inlet protection per the approved SWPPP, and we inspect and maintain controls throughout our time on-site. An NOV from the Ohio EPA or a local MS4 municipality can stall a project; we don't give inspectors a reason to issue one.",
      "We've completed commercial site prep projects across the I-275 corridor, in the West Chester and Mason development corridors of Butler and Warren counties, along the Highway 32 corridor in Clermont County, and on industrial sites in Hamilton County and Northern Kentucky. If your project is in Greater Cincinnati, we know the region, the soils, and the local regulatory landscape."
    ],
    situations: [
      {
        title: "New Commercial Development",
        description: "Breaking ground on a retail center, office building, or industrial facility in the I-275 corridor or suburban Cincinnati.",
        icon: "🏗️"
      },
      {
        title: "Residential Subdivision",
        description: "Preparing raw acreage in Clermont or Warren County for a new residential subdivision — roads, pads, and drainage all start here.",
        icon: "🏘️"
      },
      {
        title: "Infill Redevelopment",
        description: "An existing commercial site needs demolition and re-prep before a new building can go up. Every phase needs to stay on schedule.",
        icon: "🔄"
      },
      {
        title: "Industrial or Warehouse Site",
        description: "Large flat pads, heavy truck access, and specific drainage requirements for industrial users in the Florence/Erlanger corridor.",
        icon: "🏭"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/site-preparation-1.png",
      "/images/gallery/commercial/site-preparation-2.png",
      "/images/gallery/commercial/site-preparation-3.png"
    ],
    expectations: {
      timeline: "1–3 weeks for most commercial site prep; larger multi-acre developments may run 3–6 weeks depending on phasing",
      priceRange: "$15,000 – $80,000+ depending on acreage, vegetation density, and earthwork volume",
      details: [
        "Full site walk and civil plan review before mobilization",
        "Mass clearing, grubbing, and topsoil stripping",
        "Rough mass grading to design elevations",
        "Construction entrance and haul road establishment",
        "SWPPP erosion and sediment control installation",
        "Coordination with GC, civil engineer, and testing agency"
      ]
    },
    testimonial: {
      quote: "Liteworks kept our site prep on schedule when we had to compress the timeline by two weeks. They read the civil plans, coordinated with our engineer directly, and delivered a build-ready site without us babysitting. That's what you need on a commercial job.",
      name: "Brian M.",
      location: "Mason, OH",
      project: "Commercial retail pad site preparation"
    },
    included: [
      "Mass clearing and grubbing",
      "Topsoil stripping and stockpiling",
      "Construction access road establishment",
      "Erosion and sediment control (SWPPP)",
      "Mass rough grading to plan elevations",
      "Building pad and parking subgrade prep",
      "Utility corridor clearing",
      "Final cleanup and inspection"
    ],
    process: [
      { step: "Plan Review", description: "We review civil grading plans, SWPPP requirements, and coordinate with the GC on phasing and schedule." },
      { step: "Clearing & Grubbing", description: "We remove all vegetation, root systems, and organic material from the development footprint." },
      { step: "Mass Grading", description: "We execute cut and fill operations to bring the site to rough plan elevations with proper drainage." },
      { step: "Controls & Handoff", description: "We install erosion controls, clean up haul roads, and verify the site is ready for the next phase." }
    ],
    faqs: [
      { question: "How much does commercial site prep cost?", answer: "Most commercial site prep projects run $15,000–$80,000 depending on acreage, vegetation density, soil conditions, and the amount of earthwork required. We provide detailed quotes after reviewing your civil plans and walking the site." },
      { question: "How long will site prep take before our GC can mobilize?", answer: "For a typical commercial pad site, plan on 1–3 weeks. Larger subdivision or industrial sites with significant earthwork may take 3–6 weeks. We'll give you a milestone schedule tied to your project timeline." },
      { question: "Can you coordinate directly with our civil engineer?", answer: "Absolutely. We regularly work directly with civil engineers and project owners to ensure grading is executed per plan. We can submit photos and compaction data for project documentation." },
      { question: "Do you handle SWPPP compliance?", answer: "We install required erosion and sediment controls and assist with SWPPP documentation. The licensed engineer typically prepares and certifies the SWPPP plan itself — we execute it in the field." },
      { question: "What's your typical crew size for a large commercial site?", answer: "For large commercial site prep, we deploy 2–4 pieces of equipment depending on scope — typically a dozer, excavator, and compactor as a minimum package. This keeps your project moving efficiently." }
    ]
  },
  {
    slug: "excavation",
    title: "Commercial Excavation",
    shortTitle: "Excavation",
    description: "Large-scale excavation for commercial foundations, basements, retention ponds, and site development.",
    metaDescription: "Commercial excavation services in Greater Cincinnati. Foundation excavation, basement digging, retention ponds, commercial earthwork. Liteworks Co. delivers precision at scale.",
    image: "/images/excavation.png",
    heroVideo: "/videos/excavator-main.mp4",
    fullDescription: [
      "Commercial excavation demands precision, scale, and the kind of project coordination that keeps complex construction timelines on track. Liteworks Co. delivers commercial excavation services across Greater Cincinnati, handling projects from multi-unit residential foundations to large commercial building footprints, retention basins, and infrastructure excavation.",
      "We operate full-sized excavation equipment — not residential-scale mini excavators — which means we can move material efficiently on large commercial projects. Time is money on commercial jobs, and the right equipment for the scope makes a significant difference in how quickly we can turn the site over to your foundation contractor.",
      "Greater Cincinnati's geology varies significantly by location. In some areas — particularly parts of Boone County, KY and hillside sites in Hamilton County — you'll encounter limestone bedrock close to the surface. We have hydraulic breakers and rock excavation capability to handle these conditions without stopping the project.",
      "Before any excavation begins, we contact OUPS and Kentucky 811 to have all underground utilities located and marked. On commercial sites with existing infrastructure — particularly infill redevelopment sites in established Cincinnati neighborhoods — the existing utility picture can be complex. We treat every utility locate as a serious step, not a formality.",
      "Spoil management is a significant cost and logistics consideration on large commercial excavation projects. We discuss material handling strategy during the quoting process: what can be stockpiled and reused for structural fill, what needs to be hauled off-site, and where. Coordinating spoil export efficiently can save meaningful money on larger jobs in Hamilton County and surrounding counties.",
      "We coordinate the excavation handoff directly with your foundation contractor or engineer of record. We provide grade verification photos and can produce simple documentation of excavation dimensions for project records. Getting the foundation crew on-site quickly after excavation is complete is the goal — we don't create delays at the transition."
    ],
    situations: [
      {
        title: "Commercial Foundation",
        description: "Your GC needs the foundation hole dug to spec before the concrete crew can mobilize. Schedule matters.",
        icon: "🏢"
      },
      {
        title: "Retention or Detention Basin",
        description: "Stormwater management requirements for your development include a basin that needs to be excavated and graded to precise elevations.",
        icon: "💧"
      },
      {
        title: "Below-Grade Parking or Loading",
        description: "Your project includes below-grade structure — a parking deck, loading dock cut, or mechanical room that requires significant excavation.",
        icon: "🅿️"
      },
      {
        title: "Rock Conditions",
        description: "Your site has bedrock close to the surface — common in parts of Boone County and hillside Cincinnati sites — and you need a contractor with breaking capability.",
        icon: "🪨"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/excavation-1.png",
      "/images/gallery/commercial/excavation-2.png",
      "/images/gallery/commercial/excavation-3.png"
    ],
    expectations: {
      timeline: "3–10 days for most commercial foundation excavations; large basins or rock conditions may extend to 2–3 weeks",
      priceRange: "$8,000 – $60,000+ depending on volume, depth, rock conditions, and spoil management",
      details: [
        "Pre-excavation utility locating (OUPS / KY 811)",
        "Full-size excavation equipment sized to project scope",
        "Spoil management — on-site stockpile or haul-off",
        "Rock breaking capability for bedrock conditions",
        "Grade verification to engineering plan tolerances",
        "Coordination with foundation contractor for handoff"
      ]
    },
    testimonial: {
      quote: "We hit rock about four feet down on our Florence site — not a surprise in Boone County but still a problem. Liteworks had a hammer on-site the next morning and pushed through without killing our schedule. Solid communication the whole way through.",
      name: "Derek W.",
      location: "Florence, KY",
      project: "Commercial building foundation excavation with rock breaking"
    },
    included: [
      "Building foundation excavation",
      "Below-grade structure excavation",
      "Retention and detention basin construction",
      "Utility corridor excavation",
      "Rock breaking and excavation",
      "Spoil management and hauling",
      "Shoring coordination",
      "Grade verification and documentation"
    ],
    process: [
      { step: "Pre-Excavation", description: "Utility locates, plan review, equipment staging, and spoil disposal planning." },
      { step: "Bulk Excavation", description: "Major material removal to approach final grades using appropriately sized equipment." },
      { step: "Fine Excavation", description: "Precise excavation to foundation dimensions per engineering plans." },
      { step: "Verification", description: "Grade checks, documentation photos, and site prep for foundation contractor." }
    ],
    faqs: [
      { question: "What does commercial excavation typically cost?", answer: "Most commercial foundation excavations run $8,000–$60,000 depending on the volume of material, depth, soil/rock conditions, and whether spoil needs to be hauled off-site. We provide detailed quotes after reviewing plans and walking the site." },
      { question: "How do you handle rock excavation?", answer: "We have hydraulic breakers that attach to our excavators for rock work. Rock excavation is slower and affects pricing, but we have the capability to push through most conditions encountered in Greater Cincinnati and Northern Kentucky." },
      { question: "Do you provide compaction testing?", answer: "We can arrange third-party compaction testing through a geotechnical firm. Many commercial projects require this for structural documentation — we're experienced working with testing agencies on this." },
      { question: "Can you work around existing underground utilities?", answer: "Yes. We always obtain utility locates before excavating and exercise care around marked utilities. For complex sites with dense existing utilities, we use vacuum excavation methods for safe exposure." },
      { question: "How long until my foundation contractor can get in after you're done?", answer: "We coordinate the handoff directly. For most projects, the excavation is complete and ready for the foundation crew within 1–2 days of finishing. We provide photos and verification data so there are no disputes about dimensions." }
    ]
  },
  {
    slug: "grading",
    title: "Grading & Earthwork",
    shortTitle: "Grading",
    description: "Precision mass grading, cut and fill operations, and commercial earthwork for development projects.",
    metaDescription: "Commercial grading and earthwork in Greater Cincinnati. Mass grading, cut and fill, building pad preparation, parking lot grading. Liteworks Co. executes to civil plan specs.",
    image: "/images/grading.png",
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "Commercial grading and earthwork is a discipline that separates companies with real experience from those who just run equipment. Getting a large site to proper plan elevations — balancing cut and fill to minimize material import/export, maintaining constructable slopes, and establishing grades that drain correctly — requires skill, experience, and the right tools. Liteworks Co. handles commercial grading projects throughout Greater Cincinnati and the surrounding region.",
      "We work from approved civil grading plans to execute mass earthwork on commercial development projects. Our team understands contour lines, spot elevations, cross-sections, and the relationship between rough grading tolerances and the finish work that comes later. We execute grading that sets up the flatwork and paving contractors for success rather than creating problems they have to work around.",
      "Material balance is critical on large commercial projects. Importing or exporting significant quantities of material is expensive. We work with your civil engineer to optimize cut and fill balance, identify areas where material can be redistributed on-site, and minimize costly truck traffic.",
      "Ohio's clay-heavy soils require specific compaction strategies on commercial grading projects. Clay compacts well when moisture content is near optimum, but gets unworkable when too wet — and Greater Cincinnati gets plenty of rain. We monitor soil conditions, work in appropriate lifts, and coordinate with your geotechnical testing agency to document that structural fill meets the specified compaction requirements for building pads and pavement areas.",
      "Building pad grading tolerances matter more than most GCs realize until they're already in trouble. A building pad that's 0.3 feet high in one corner forces your foundation contractor to either over-excavate or accommodate the error, and those corrections cost time and money. We use GPS grade control on precision pad work and verify elevations throughout — not just at the end when it's harder to fix.",
      "We've completed commercial grading and earthwork across Butler County's growing development corridors in West Chester and Liberty Township, Warren County residential subdivisions near Mason and Lebanon, Clermont County industrial sites, and throughout Hamilton County's redevelopment projects. We understand the regional municipality inspection processes and how to document grading work properly for project records."
    ],
    situations: [
      {
        title: "Building Pad Preparation",
        description: "Your structural engineer has specific bearing capacity and elevation requirements for the building pad. It needs to be right.",
        icon: "📐"
      },
      {
        title: "Parking Lot Subgrade",
        description: "Parking lot failure almost always starts with subgrade. You need proper grading and compaction before the paving contractor shows up.",
        icon: "🅿️"
      },
      {
        title: "Large-Scale Cut & Fill",
        description: "Your site has significant grade changes that need to be balanced — material moved from high areas to fill low ones — to hit design elevations.",
        icon: "⚖️"
      },
      {
        title: "Athletic Field or Recreation",
        description: "Sports fields and recreational spaces require tight grading tolerances across large flat areas — work for GPS-equipped equipment and experienced operators.",
        icon: "⚽"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/grading-1.png",
      "/images/gallery/commercial/grading-2.png",
      "/images/gallery/commercial/grading-3.png"
    ],
    expectations: {
      timeline: "1–4 weeks for most commercial grading scopes; large multi-acre sites with significant cut and fill may run 4–8 weeks",
      priceRange: "$12,000 – $100,000+ depending on site acreage, earthwork volume, and material import/export requirements",
      details: [
        "Civil grading plan review and earthwork quantity analysis",
        "Full-size dozer and motor grader for efficient mass earthwork",
        "GPS grade control for precision building pad and finish work",
        "Compaction in lifts with coordination for third-party testing",
        "Material balance optimization to minimize import/export cost",
        "Coordination with paving and flatwork contractors for handoff"
      ]
    },
    testimonial: {
      quote: "Our site had about 40,000 yards of cut and fill to balance. Liteworks reviewed our civil plans, gave us a realistic schedule, and executed it without a bunch of surprises. The building pad passed compaction testing first try. That's what you want.",
      name: "Jason T.",
      location: "West Chester, OH",
      project: "Multi-acre commercial development grading and building pad prep"
    },
    included: [
      "Mass cut and fill operations",
      "Building pad grading and preparation",
      "Parking lot subgrade grading",
      "Roadway and access drive grading",
      "Compaction to specification",
      "Material import/export management",
      "GPS grade control for precision work",
      "Drainage and stormwater grading"
    ],
    process: [
      { step: "Plan Review", description: "We review civil grading plans, calculate material balance, and develop an earthwork execution strategy." },
      { step: "Rough Grading", description: "We execute mass earthwork, establishing approximate grades and managing material on the site." },
      { step: "Fine Grading", description: "We bring the site to design elevations with precision equipment and GPS grade control." },
      { step: "Compaction & Verification", description: "We compact to specification, arrange testing as required, and document finished grades." }
    ],
    faqs: [
      { question: "What does commercial grading typically cost?", answer: "Most commercial grading projects run $12,000–$100,000+ depending on acreage, earthwork volume, and material import/export needs. Large sites with significant cut and fill can exceed this range. We quote after reviewing your civil plans." },
      { question: "Do you use GPS grade control?", answer: "Yes, we have GPS-equipped machines for precision grading work where tight tolerances are required, such as building pads and athletic fields. For rough grading, we work from grade stakes and civil plan elevations." },
      { question: "How do you handle material balance?", answer: "We work with your civil engineer to optimize cut and fill balance on-site. When material needs to be exported or imported, we coordinate with area suppliers and disposal sites to minimize project costs." },
      { question: "What compaction standards do you work to?", answer: "We work to whatever compaction specifications your geotechnical engineer requires — typically 95% standard Proctor for structural fill under buildings and pavements. We coordinate with your testing agency throughout the fill operation." },
      { question: "Will you damage my paving contractor's subgrade if they follow you?", answer: "We hand off at the subgrade elevation your paving contractor needs, and we don't run heavy equipment over finished subgrade. Coordination between trades is part of how we operate on commercial jobs." }
    ]
  },
  {
    slug: "land-clearing",
    title: "Commercial Land Clearing",
    shortTitle: "Land Clearing",
    description: "Large-scale vegetation removal and forestry mulching for commercial development sites.",
    metaDescription: "Commercial land clearing in Greater Cincinnati. Large-scale vegetation removal, forestry mulching, commercial lot clearing. Liteworks Co. clears the way for your development.",
    image: "/images/land-clearing.png",
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "Commercial land clearing is the critical first step that transforms raw wooded or overgrown acreage into a productive development site. Whether you're a developer breaking ground on a new residential subdivision, a contractor clearing a commercial building lot, or a business acquiring land for industrial use, Liteworks Co. handles large-scale land clearing throughout Greater Cincinnati, Northern Kentucky, and Southeast Indiana.",
      "We bring commercial-scale clearing equipment to commercial-scale projects. Our forestry mulching machines process trees and vegetation at rates that keep large projects moving on development timelines. For mixed clearing situations — some areas ready for mulching, others requiring tree removal and haul-off — we deploy the right combination of equipment and methods to clear efficiently.",
      "We work closely with your project team to understand clearing limits — the difference between what gets cleared and what gets preserved matters for both regulatory compliance and neighbor relations. We mark and respect tree preservation zones, buffer areas, and other areas where clearing is prohibited by local zoning or permit conditions.",
      "Greater Cincinnati's wooded development sites are often heavily infiltrated with invasive species — primarily bush honeysuckle and multiflora rose — mixed through native hardwood stands. Our forestry mulchers process these indiscriminately, which is actually an advantage: invasive species get cleared as thoroughly as everything else, and the site comes out cleaner than methods that selectively cut. On sites where the developer wants to preserve native hardwood canopy outside the clearing limit, we operate carefully at the edges.",
      "Erosion control starts at the clearing phase, not after grading. We install silt fence and construction entrances as part of our clearing work, which keeps your SWPPP compliance current from day one. Hamilton County and surrounding municipalities have active stormwater inspection programs — having controls in place at first disturbance is required and keeps the project on the right side of regulators.",
      "We regularly transition directly from clearing to site prep on commercial projects, often with the same crew and equipment. This keeps your project timeline tight and eliminates the scheduling gap between the clearing contractor finishing and the earthwork contractor mobilizing. If you need one contractor who can take you from raw woods to graded site ready for utilities, that's what we do."
    ],
    situations: [
      {
        title: "Subdivision Development",
        description: "Raw wooded acreage in Clermont or Warren County needs to be cleared before subdivision roads and lots can be graded.",
        icon: "🏘️"
      },
      {
        title: "Commercial Building Site",
        description: "A wooded infill lot in suburban Cincinnati needs to be cleared and ready for site prep and foundation excavation.",
        icon: "🏗️"
      },
      {
        title: "Pipeline or Utility Corridor",
        description: "A linear corridor needs to be cleared through wooded land for a utility line, pipeline, or access road.",
        icon: "⚡"
      },
      {
        title: "Industrial Land Acquisition",
        description: "A business purchased acreage for expansion and needs it cleared and prepped before construction begins.",
        icon: "🏭"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/land-clearing-1.png",
      "/images/gallery/commercial/land-clearing-2.png",
      "/images/gallery/commercial/land-clearing-3.png"
    ],
    expectations: {
      timeline: "2–5 days per acre for moderate vegetation; dense mature hardwood may run slower. Most commercial clearing projects take 1–4 weeks",
      priceRange: "$3,500 – $8,000 per acre depending on vegetation density, tree size, and debris management requirements",
      details: [
        "Site walk to confirm clearing limits and preservation areas",
        "Commercial-scale forestry mulching equipment",
        "Large tree felling and processing where needed",
        "Debris management — mulch spread, stockpiled, or hauled per project spec",
        "Stump grinding included in most scopes",
        "Coordination with site prep team for immediate transition to grading"
      ]
    },
    testimonial: {
      quote: "We had 22 acres of heavy woods in Clermont County that needed to be cleared before the subdivider could start grading. Liteworks cleared it in just under two weeks — clean, within our clearing limits, and ready for the earthwork crew. No drama, just results.",
      name: "Curtis P.",
      location: "Batavia, OH",
      project: "22-acre residential subdivision clearing"
    },
    included: [
      "Full acreage clearing and grubbing",
      "Forestry mulching",
      "Large tree felling and processing",
      "Selective clearing with preservation areas",
      "Invasive species removal",
      "Debris management and disposal",
      "Stump grinding",
      "Topsoil considerations"
    ],
    process: [
      { step: "Site Assessment", description: "We walk the site, review clearing limits per plans, and identify preservation areas and special conditions." },
      { step: "Equipment Deployment", description: "We mobilize the right combination of clearing equipment for the site's vegetation type and density." },
      { step: "Clearing Operations", description: "We systematically clear the site, processing vegetation via mulching or haul-off per the project plan." },
      { step: "Site Handoff", description: "We remove or spread debris per specifications and leave a clean site ready for the next phase." }
    ],
    faqs: [
      { question: "How much does commercial land clearing cost per acre?", answer: "Commercial clearing typically runs $3,500–$8,000 per acre depending on vegetation density, tree size, and debris management method. Light brush clears much faster than dense mature hardwood. We quote per acre after a site visit." },
      { question: "How do you handle large trees?", answer: "Trees beyond our mulcher's capacity are felled first, then stumps and debris are mulched. Large timber can also be salvaged or sold in some cases — we can discuss this option if you have merchantable timber on-site." },
      { question: "Can you work within regulatory clearing limits?", answer: "Yes — we work with marked clearing limits, tree preservation zones, and buffer areas required by your municipality or permit conditions. We take regulatory compliance seriously on commercial projects." },
      { question: "How long will it take to clear our site?", answer: "A rough rule of thumb is 2–5 days per acre for moderate vegetation, but this varies significantly with tree size and density. After a site visit, we can give you a project timeline tied to your development schedule." },
      { question: "Do you need to be on-site to coordinate, or can we be remote?", answer: "We're capable of running the project with your PM remote. We communicate via photos and status updates and flag any issues or boundary questions before proceeding. Most commercial clients manage this remotely." }
    ]
  },
  {
    slug: "demolition",
    title: "Commercial Demolition",
    shortTitle: "Demolition",
    description: "Commercial structure teardowns, concrete removal, and site clearing for redevelopment.",
    metaDescription: "Commercial demolition services in Greater Cincinnati. Building teardowns, concrete removal, site clearing for redevelopment. Liteworks Co. handles commercial demo safely and efficiently.",
    image: "/images/demolition.png",
    heroVideo: "/videos/bulldozer-tracking.mp4",
    fullDescription: [
      "Commercial demolition is a different discipline than residential work — larger structures, more complex utility disconnections, potential for regulated materials, and stricter permitting requirements all demand a contractor with real commercial demo experience. Liteworks Co. handles commercial demolition projects throughout Greater Cincinnati, delivering safe, efficient teardowns that prepare sites for redevelopment.",
      "Concrete removal is a major component of most commercial demolition projects. Old parking lots, foundation slabs, concrete piers, underground vault structures, and deteriorated commercial flooring all need to come out before redevelopment can proceed. We break and remove commercial concrete efficiently, crushing it on-site for aggregate reuse where appropriate, or hauling it to recycling facilities.",
      "Pre-demolition planning is essential on commercial projects. We coordinate with your team on utility disconnections, assess structures for potential regulated materials and recommend abatement contractors if needed, review permitting requirements by municipality, and plan material management so the project stays compliant with waste disposal regulations.",
      "Permitting requirements for commercial demolition vary significantly across Greater Cincinnati's municipalities. Hamilton County jurisdictions, Warren County townships, and Northern Kentucky cities all have different processes and timelines. We have experience navigating demolition permits across the region and can advise on expected timelines for your specific location — this matters because permit delays can push your GC's mobilization date.",
      "Structures built before 1980 frequently contain asbestos-containing materials — floor tile, ceiling tile, pipe insulation, roofing materials, and exterior siding among others. We do not perform asbestos abatement, and we won't demo a structure suspected to contain regulated materials without proper abatement first. We can connect you with certified abatement contractors who work in Greater Cincinnati, and we'll return once they've issued a clearance document.",
      "Material recycling reduces disposal costs and makes commercial demolition more sustainable. We separate concrete for crushing and reuse, recover ferrous and non-ferrous metal for recycling, and minimize what goes to the landfill. On large commercial demo projects in Hamilton County and surrounding counties, proper material management can reduce overall disposal costs meaningfully and supports your project's sustainability documentation if required."
    ],
    situations: [
      {
        title: "Site Redevelopment",
        description: "An older commercial building or obsolete retail pad needs to come down before a new development can break ground.",
        icon: "🔄"
      },
      {
        title: "Old Parking Lot Removal",
        description: "A deteriorated commercial parking lot or concrete slab needs to be broken up and removed before repaving or new construction.",
        icon: "🏗️"
      },
      {
        title: "Industrial Structure Teardown",
        description: "An aging industrial building, warehouse, or outbuilding on a commercial property has reached end of life.",
        icon: "🏭"
      },
      {
        title: "Foundation and Below-Grade Removal",
        description: "Old foundation walls, piers, underground vaults, or below-grade structures need to be removed before new construction.",
        icon: "⛏️"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/demolition-1.png",
      "/images/gallery/commercial/demolition-2.png",
      "/images/gallery/commercial/demolition-3.png"
    ],
    expectations: {
      timeline: "2–5 days for most commercial building teardowns; large structures or those with significant concrete may take 1–2 weeks",
      priceRange: "$8,000 – $75,000+ depending on structure size, material type, concrete volume, and disposal requirements",
      details: [
        "Pre-demolition structural assessment and hazmat check",
        "Permit coordination with local municipality",
        "Utility disconnection coordination",
        "Systematic structure removal with material sorting",
        "Concrete breaking and recycling or haul-off",
        "Site grading and cleanup after demolition"
      ]
    },
    testimonial: {
      quote: "We bought an older strip center in Anderson Township and needed the existing building down before we could start on the new build. Liteworks handled the permits, coordinated the utility disconnections, and had the site cleared and graded in four days. Exactly what we needed.",
      name: "Mark D.",
      location: "Anderson Township, OH",
      project: "Strip center demolition and site clearing for redevelopment"
    },
    included: [
      "Commercial building teardowns",
      "Industrial structure demolition",
      "Concrete slab and pavement removal",
      "Foundation and basement demolition",
      "Underground structure removal",
      "Material sorting and recycling",
      "Debris hauling and disposal",
      "Site grading after demolition"
    ],
    process: [
      { step: "Assessment & Planning", description: "Structural assessment, utility disconnection coordination, permit review, and regulated materials check." },
      { step: "Setup", description: "Site security, exclusion zones, utility disconnections, and equipment staging." },
      { step: "Demolition", description: "Systematic structure removal with material sorting for recycling and proper disposal." },
      { step: "Site Clearing", description: "Debris removal, concrete crushing or hauling, site grading, and cleanup." }
    ],
    faqs: [
      { question: "What does commercial demolition typically cost?", answer: "Most commercial demolition projects run $8,000–$75,000+ depending on structure size, material type, concrete volume, and disposal requirements. We provide detailed quotes after inspecting the structure and reviewing the scope." },
      { question: "How do you handle regulated materials like asbestos?", answer: "We do not perform asbestos or lead paint abatement. For structures built before 1980, we recommend a pre-demolition hazmat assessment. We can connect you with certified abatement contractors to complete this work before demo begins." },
      { question: "What permits are required for commercial demolition?", answer: "Most commercial demolition requires permits from the local municipality. Requirements vary significantly by jurisdiction across Greater Cincinnati. We assist with the permitting process and have experience with requirements across the region." },
      { question: "How long does the permit process take?", answer: "Permit timelines vary by municipality — some can issue demolition permits in a few days, others take 2–4 weeks. We recommend starting this process as early as possible. We can advise on expected timelines for your specific location." },
      { question: "Do you provide demolition waste manifests?", answer: "Yes, we can provide documentation of material disposal for project records, which is increasingly required for commercial redevelopment projects and environmental compliance." }
    ]
  },
  {
    slug: "drainage",
    title: "Drainage & Storm Water Management",
    shortTitle: "Drainage",
    description: "Commercial French drains, retention ponds, detention basins, and comprehensive stormwater management systems.",
    metaDescription: "Commercial drainage and stormwater management in Greater Cincinnati. Retention ponds, detention basins, French drains, storm sewer. Liteworks Co. executes civil drainage plans.",
    image: "/images/drainage.png",
    heroVideo: "/videos/drainage-aerial.mp4",
    fullDescription: [
      "Stormwater management is one of the most regulated and technically complex aspects of commercial development in Greater Cincinnati. The region's municipalities have implemented increasingly stringent stormwater requirements, and executing the drainage infrastructure correctly — on time and to specification — is critical for project approval and long-term performance. Liteworks Co. executes commercial drainage and stormwater infrastructure throughout the region.",
      "We work directly from civil engineer stormwater management plans to construct basins, install drainage systems, and establish the grades and channels that direct water where it needs to go. Our crews are experienced reading civil drainage plans, understanding basin grading to precise elevation tolerances, and coordinating with the structural components of stormwater systems — outlet structures, weirs, emergency spillways, and riser pipes.",
      "Commercial detention and retention pond construction is a core service. We excavate and grade basins to design volumes and contours, work with your civil engineer on outlet structure placement, install rip-rap and other erosion protection per plan, and coordinate with contractors installing mechanical components.",
      "Greater Cincinnati's annual rainfall — over 43 inches — combined with heavy clay subsoils creates significant stormwater management challenges for commercial development throughout Hamilton, Clermont, Warren, and Butler counties. Clay's low permeability means surface runoff is high, and basins need to be sized and built to handle peak flows from major storm events. We understand these regional hydrology conditions and how they factor into the drainage infrastructure we're building.",
      "SWPPP erosion and sediment control is part of every commercial drainage project we touch. We install and maintain erosion controls throughout construction, and we document inspections as required under Ohio EPA Construction General Permit requirements. Stormwater inspections from local MS4 municipalities are increasingly common across Greater Cincinnati — having properly maintained controls isn't optional.",
      "We've built commercial detention and retention basins for retail developments, office parks, and residential subdivisions across the Greater Cincinnati region, from Warren County's fast-growing corridors near Mason and Lebanon to Clermont County developments in the Milford and Batavia areas. We know the local watershed management districts' requirements and how to get drainage infrastructure through engineer review the first time."
    ],
    situations: [
      {
        title: "Stormwater Permit Requirement",
        description: "Your development permit requires a detention or retention basin — it needs to be built to precise design elevations and volumes before CO.",
        icon: "📋"
      },
      {
        title: "Parking Lot Drainage Issues",
        description: "An existing commercial parking lot ponds water after rain — drainage corrections are needed before the asphalt fails.",
        icon: "🌧️"
      },
      {
        title: "Foundation Water Intrusion",
        description: "A commercial building has chronic water issues around its foundation — subsurface drainage and grading corrections are needed.",
        icon: "🏢"
      },
      {
        title: "Site Drainage Infrastructure",
        description: "New commercial development needs storm sewer, swales, and basin infrastructure installed per civil plans before paving begins.",
        icon: "🔧"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/drainage-1.png",
      "/images/gallery/commercial/drainage-2.png",
      "/images/gallery/commercial/drainage-3.png"
    ],
    expectations: {
      timeline: "1–3 weeks for drainage system installation; detention pond construction may run 2–4 weeks depending on size",
      priceRange: "$10,000 – $80,000+ depending on basin size, pipe system scope, and site complexity",
      details: [
        "Civil drainage plan review and key elevation confirmation",
        "Detention/retention basin excavation and grading to design contours",
        "GPS grade control for precise basin bottom elevation",
        "Rip-rap and erosion protection installation per plan",
        "Outlet structure coordination with mechanical contractor",
        "SWPPP erosion and sediment control installation and maintenance"
      ]
    },
    testimonial: {
      quote: "The basin on our West Chester project had tight elevation specs — the outlet structure wouldn't work if we were off more than a tenth. Liteworks hit it with GPS grade control and the system passed the engineer's inspection first time. That's the standard we expect.",
      name: "Phil R.",
      location: "West Chester, OH",
      project: "Commercial detention basin construction"
    },
    included: [
      "Detention and retention pond construction",
      "Commercial French drain systems",
      "Swale and channel construction",
      "Storm sewer infrastructure preparation",
      "Rip-rap and erosion protection",
      "Outlet structure coordination",
      "SWPPP erosion control installation",
      "Grading for stormwater flow"
    ],
    process: [
      { step: "Plan Review", description: "We review civil drainage plans, stormwater calculations, and identify key elevation control points." },
      { step: "Basin & Channel Construction", description: "We excavate ponds, swales, and channels to design contours with precise grade control." },
      { step: "Infrastructure Installation", description: "We install pipe, aggregate, inlet structures, and erosion protection per plan specifications." },
      { step: "As-Built Verification", description: "We verify key elevations and document as-built conditions for your project records." }
    ],
    faqs: [
      { question: "What does commercial stormwater infrastructure typically cost?", answer: "Drainage system installation typically runs $10,000–$80,000+ depending on basin size, pipe system scope, and site complexity. Detention ponds require precise grading and tend to run higher than simple swale systems. We quote after reviewing your civil plans." },
      { question: "How precise does detention pond grading need to be?", answer: "Detention pond bottom elevations typically need to be within ±0.1 feet of design to achieve proper storage volumes. We use GPS grade control for pond construction to achieve this precision consistently." },
      { question: "Do you install storm sewer pipe?", answer: "We excavate for storm sewer and can work with your licensed mechanical contractor for pipe installation, or we can manage the full installation package depending on project requirements and local licensing." },
      { question: "How do you handle stormwater compliance during construction?", answer: "We install and maintain required erosion and sediment controls throughout our work and can provide photographic documentation for SWPPP compliance records — a common requirement for permit inspections." },
      { question: "What happens if the basin doesn't pass engineer inspection?", answer: "We stand behind our work. If grading doesn't meet the civil engineer's tolerances, we come back and correct it. This rarely happens because we verify elevations throughout the process, not just at the end." }
    ]
  },
  {
    slug: "utilities",
    title: "Underground Utilities",
    shortTitle: "Utilities",
    description: "Commercial underground utility installation — water, sewer, electric, gas, and communications infrastructure.",
    metaDescription: "Commercial underground utility installation in Greater Cincinnati. Water, sewer, electric, gas, fiber infrastructure. Liteworks Co. handles utility excavation and installation coordination.",
    image: "/images/trenching.png",
    heroVideo: "/videos/excavator-burying-trench.mp4",
    fullDescription: [
      "Commercial development projects require extensive underground utility infrastructure — from water and sewer mains serving multiple buildings to electrical duct banks, gas distribution, telecommunications conduit, and fire suppression systems. Getting utility infrastructure installed correctly and on schedule is one of the most coordination-intensive aspects of commercial construction. Liteworks Co. handles the earthwork side of commercial utility work throughout Greater Cincinnati and Northern Kentucky.",
      "We excavate utility corridors, install conduit and casing, prepare trenches to the bedding specifications required by each utility type, and backfill and compact to the standards required for pavement and structure loading above. Our role is to create utility trenches that are ready for the licensed contractors installing the actual utility — and to backfill those trenches in a way that provides long-term support.",
      "Before any utility work begins, we obtain all required utility locates through OUPS and Kentucky 811, and we maintain a safe working distance from located utilities throughout the project. We also work with property surveys and building records when available to know what to expect underground.",
      "Commercial water and sanitary sewer main depths in Greater Cincinnati depend on the local utility district's requirements. Cincinnati Water Works, Greater Cincinnati Water Works, and the various county sewer districts each have their own specifications for bedding, cover depth, and backfill compaction. We've worked with most of the major districts across Hamilton, Clermont, Warren, and Butler counties and understand what their inspectors look for during installation.",
      "Trench backfill compaction under commercial pavement is critical and frequently under-documented. Pavement failure over utility trenches is common when backfill is poorly compacted — the trench settles, the pavement cracks and sinks, and you're patching it two years after the project is complete. We backfill in controlled lifts, coordinate with your testing agency for compaction testing, and provide documentation. This step takes more time than dumping fill and running a plate tamper once — but it's the difference between a trench that holds up and one that fails.",
      "We regularly coordinate multi-utility trench packages on commercial developments — water main, sanitary sewer, and storm sewer trenching in sequence, coordinated with licensed contractors for pipe installation and with the civil engineer for grade verification on gravity utilities. Managing this coordination is part of how we add value beyond just operating equipment."
    ],
    situations: [
      {
        title: "New Development Utility Runs",
        description: "A commercial development site needs water main, sanitary sewer, and electrical duct bank trenching before building construction begins.",
        icon: "🔌"
      },
      {
        title: "Water or Sewer Main Extension",
        description: "Your project requires extending public water or sewer infrastructure to serve the site — working with the utility district's requirements.",
        icon: "🚰"
      },
      {
        title: "Electrical Duct Bank",
        description: "Your electrical engineer has specified a duct bank configuration for power distribution across a commercial campus or parking structure.",
        icon: "⚡"
      },
      {
        title: "Utility Line Replacement",
        description: "Aging underground infrastructure on an existing commercial property needs to be excavated and replaced before it fails.",
        icon: "🔧"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/utilities-1.png",
      "/images/gallery/commercial/utilities-2.png",
      "/images/gallery/commercial/utilities-3.png"
    ],
    expectations: {
      timeline: "Timeline scales with total linear feet — most commercial utility runs are completed in 1–3 weeks. Long main extensions may take 3–6 weeks",
      priceRange: "$15,000 – $120,000+ depending on total footage, depth, pipe size, and restoration requirements",
      details: [
        "OUPS / KY 811 utility locating before any excavation",
        "Trenching to required depth for each utility type",
        "Bedding material installation per utility district specs",
        "Coordination with licensed plumber/electrician for pipe/conduit installation",
        "Controlled backfill in lifts with compaction testing under pavement",
        "Trench restoration and pavement subgrade prep"
      ]
    },
    testimonial: {
      quote: "Liteworks ran about 800 feet of water main and sanitary sewer trench for our Lebanon development. They coordinated with both utility districts, had the right bedding materials on-site, and backfilled to the compaction specs without us having to chase them. Smooth operation.",
      name: "Greg H.",
      location: "Lebanon, OH",
      project: "Commercial water main and sewer main trenching"
    },
    included: [
      "Water and sewer main trenching",
      "Electrical duct bank installation",
      "Gas main trenching",
      "Communications conduit installation",
      "Proper bedding material installation",
      "Compaction to specification",
      "Utility locating coordination",
      "Trench restoration and paving prep"
    ],
    process: [
      { step: "Utility Coordination", description: "OUPS/811 locates, coordination with serving utilities, review of installation specifications." },
      { step: "Trenching", description: "Excavation to required depth and width, maintaining grades specified for gravity utilities." },
      { step: "Bedding & Installation", description: "Prepare bedding, coordinate with utility installer, ensure pipe is properly supported." },
      { step: "Backfill & Compaction", description: "Controlled backfill in lifts with compaction testing, restoring trench to pavement subgrade." }
    ],
    faqs: [
      { question: "What does commercial utility trenching typically cost?", answer: "Commercial utility runs typically cost $15,000–$120,000+ depending on total linear footage, depth, pipe or conduit size, and restoration requirements. Rock conditions or deep gravity sewer runs significantly affect price. We quote by the linear foot after reviewing plans." },
      { question: "What depths do commercial water and sewer lines require?", answer: "Water mains in Ohio are typically installed at 5–6 feet of cover (below frost line). Sewer main depth is driven by grade requirements — shallow sanitary sewers may be 4 feet, while deep gravity mains can exceed 20 feet." },
      { question: "Do you coordinate with the utility companies?", answer: "Yes, we work with Cincinnati Water Works, Greater Cincinnati Water Works, local sewer districts, and private utilities on commercial projects. We understand their inspection and approval requirements and have worked with most of the major districts." },
      { question: "What compaction is required in utility trenches under pavement?", answer: "Under pavement, trench backfill typically requires 95–100% standard Proctor compaction. We work with your testing agency to achieve and document specified compaction throughout the backfill operation." },
      { question: "Can you trench through existing pavement and restore it?", answer: "Yes. We saw-cut existing asphalt or concrete, trench, backfill, and prepare the trench for pavement restoration. Pavement patching is typically performed by a paving contractor — we coordinate the handoff." }
    ]
  },
  {
    slug: "driveways",
    title: "Driveways & Parking Lots",
    shortTitle: "Driveways",
    description: "Commercial gravel drives, parking area subgrades, and access road construction for business and industrial properties.",
    metaDescription: "Commercial driveway and parking lot construction in Greater Cincinnati. Gravel drives, parking subgrade, access roads for business properties. Liteworks Co. builds commercial access infrastructure.",
    image: "/images/driveway.png",
    heroVideo: "/videos/concrete-crew.mp4",
    fullDescription: [
      "Commercial driveways, access roads, and parking lots serve a different load demand than residential — delivery trucks, heavy equipment, and high vehicle frequency require proper subgrade preparation, adequate base depth, and drainage that handles commercial-scale impervious surface runoff. Liteworks Co. builds commercial access infrastructure throughout Greater Cincinnati, from gravel construction access roads to permanent commercial drive entrances and parking area subgrades.",
      "Parking lot subgrade preparation is one of the most important — and most frequently skipped — components of long-lasting commercial paving. Poor subgrade is the primary cause of premature commercial parking lot failure. We prepare subgrades to the specifications required by your paving engineer, removing unsuitable material, ensuring proper compaction, and establishing the design grade before the paving contractor arrives.",
      "Larger commercial access road networks — for industrial parks, agricultural operations, or rural commercial developments — require road design considerations including horizontal and vertical alignment, drainage on both sides of the road, culvert sizing for cross-drainage, and surface management strategies. We build these systems to standards that keep your operations moving year-round.",
      "Construction access roads are often treated as an afterthought, but a poorly built construction entrance becomes a problem immediately — trucks track mud onto public roads, Ohio EPA gets called, and you're dealing with a nuisance that should have been handled upfront. We build construction entrances that actually work: geotextile base, proper depth of clean stone, and a configuration that shakes mud off tires. ODOT and local municipality requirements for construction entrances on state and county roads are something we understand and comply with.",
      "Geotextile fabric under commercial aggregate base isn't optional when subgrade conditions are poor — and in Greater Cincinnati's clay-heavy soils, subgrade conditions are frequently poor. Fabric prevents the aggregate base from migrating down into soft clay subgrade over time, which is exactly what causes parking lots and access drives to fail prematurely. We specify and install fabric as a standard practice on commercial base construction where subgrade soils warrant it.",
      "We work across Greater Cincinnati's commercial real estate landscape — industrial facilities and warehouses in the Northern Kentucky corridor from Florence to Erlanger, business parks in Mason and West Chester, agricultural and rural commercial properties throughout Clermont and Warren counties, and infill commercial development in established Hamilton County neighborhoods. The access infrastructure needs of each of these contexts are different, and we build accordingly."
    ],
    situations: [
      {
        title: "Construction Site Access",
        description: "Your commercial job site needs a proper access road before equipment and material deliveries can start — built to last through the whole project.",
        icon: "🚧"
      },
      {
        title: "Permanent Gravel Parking Lot",
        description: "An industrial facility, warehouse, or rural commercial property needs a gravel parking or staging area built to handle truck and equipment traffic.",
        icon: "🏭"
      },
      {
        title: "Paving Subgrade Failure",
        description: "Your commercial parking lot is failing — asphalt cracking and sinking because the subgrade wasn't built right the first time.",
        icon: "⚠️"
      },
      {
        title: "New Commercial Entrance",
        description: "Your development needs a properly built commercial driveway entrance from the public road — including apron, culvert, and ADA compliance.",
        icon: "🚗"
      }
    ],
    galleryImages: [
      "/images/gallery/commercial/driveways-1.png",
      "/images/gallery/commercial/driveways-2.png",
      "/images/gallery/commercial/driveways-3.png"
    ],
    expectations: {
      timeline: "3–7 days for most commercial drives and parking subgrades; larger projects with significant earthwork may take 1–2 weeks",
      priceRange: "$8,000 – $60,000+ depending on square footage, subgrade conditions, depth of base required, and drainage scope",
      details: [
        "Subgrade assessment and unsuitable material removal",
        "Geotextile fabric installation to prevent mixing",
        "Deep aggregate base (8–18 inches depending on loading)",
        "Compaction in lifts — sized for commercial vehicle loading",
        "Drainage crown, edge swales, and culvert installation",
        "Coordination with paving contractor for pavement subgrade handoff"
      ]
    },
    testimonial: {
      quote: "We needed a construction access road that could handle loaded concrete trucks on a tight Milford site. Liteworks built it right — geotextile, proper base depth, good drainage — and it held up through the entire build without turning into a mud pit. Worth every dollar.",
      name: "Tom A.",
      location: "Milford, OH",
      project: "Commercial construction access road for multi-family project"
    },
    included: [
      "Construction access road establishment",
      "Permanent commercial gravel drives",
      "Parking area subgrade preparation",
      "Commercial parking lot grading",
      "Geotextile fabric installation",
      "Deep aggregate base construction",
      "Drainage and culvert installation",
      "Entrance and apron construction"
    ],
    process: [
      { step: "Planning & Design", description: "Route planning, drainage design, subgrade assessment, and material specification." },
      { step: "Subgrade Prep", description: "Remove unsuitable material, compact subgrade, and install geotextile if specified." },
      { step: "Base Construction", description: "Install and compact base aggregate in lifts to design depth and compaction." },
      { step: "Surface & Drainage", description: "Apply surface material, establish drainage crowns and swales, install culverts." }
    ],
    faqs: [
      { question: "How much does a commercial gravel parking lot cost?", answer: "Commercial gravel parking lots typically run $8,000–$60,000+ depending on square footage, subgrade conditions, and base depth required. Lots serving heavy trucks or equipment need deeper base construction and cost more per square foot than car-only areas." },
      { question: "How deep should base be for a commercial gravel parking lot?", answer: "Commercial gravel parking serving cars and light trucks typically requires 8–10 inches of compacted aggregate. Areas serving semi trucks or heavy equipment may require 12–18 inches. We size the base to your actual loading requirements." },
      { question: "What's the difference between a construction access road and a permanent road?", answer: "Construction access roads are built for the construction period — functional but not necessarily finished. Permanent roads include proper drainage infrastructure, finished grading, and surface material specified for long-term use." },
      { question: "Can my existing failed parking lot be repaired, or does it need full replacement?", answer: "It depends on how bad the subgrade failure is. Sometimes we can address problem areas without full reconstruction. We assess the existing conditions and give you an honest recommendation — repair when it makes sense, replace when it doesn't." },
      { question: "Do you handle asphalt paving?", answer: "We specialize in earthwork and aggregate construction. For asphalt paving, we prepare the subgrade and base to your paving engineer's specs and coordinate with paving contractors for the final surface. We can recommend paving contractors we've worked with." }
    ]
  }
];

export function getCommercialServiceBySlug(slug: string): ServiceData | undefined {
  return commercialServices.find(s => s.slug === slug);
}

// ─── Residential Services ─────────────────────────────────────────────────────
export const residentialServices: ServiceData[] = [
  {
    slug: "excavation",
    title: "Residential Excavation",
    shortTitle: "Excavation",
    description: "Expert residential excavation for foundations, basements, pools, and ponds.",
    metaDescription: "Residential excavation services in Greater Cincinnati. Foundation excavation, basement digging, pool excavation, pond construction. Liteworks Co. digs it right the first time.",
    image: "/images/excavation.png",
    heroVideo: "/videos/excavator-digs-trench.mp4",
    fullDescription: [
      "Your home is your biggest investment, and excavation is where that investment gets its foundation — literally. Whether you're building a new home, adding a basement to an existing structure, installing an in-ground pool, or creating a backyard pond, Liteworks Co. delivers precision residential excavation throughout Greater Cincinnati and Northern Kentucky.",
      "We understand that residential excavation on an occupied property has unique challenges. Access is often limited through narrow gates or around existing landscaping. Neighbors are close. The homeowner is right there watching — and deserves a contractor who communicates clearly, protects the surrounding yard, and cleans up after themselves. We take those expectations seriously.",
      "Before any digging, we call OUPS (or Kentucky 811 for Northern Kentucky properties) to locate all underground utilities. We take this step on every residential project, every time — it protects your home, our crew, and the utility infrastructure your household depends on.",
      "Cincinnati's heavy clay soils affect residential excavation in ways that surprise homeowners who haven't been through it before. Clay excavates cleanly and holds a wall face well, which is a plus — but excavated clay is bulky, doesn't compact back to its original volume easily, and can become very heavy and sticky when wet. We plan spoil management accordingly and discuss your options for the excavated material during the quoting process.",
      "Pool excavation is one of our most common residential jobs, particularly in established neighborhoods like Indian Hill, Anderson Township, and the suburbs of Clermont and Warren counties where lots are large enough for in-ground pools. We work directly from your pool contractor's dig specs, coordinate access through your yard to minimize damage, and use the right size equipment for the specific access conditions on your property. If your pool contractor needs the hole by a specific date, we build our schedule around that.",
      "Foundation excavation for new home construction — whether in a new subdivision in Liberty Township or Mason, or on a custom lot in Loveland or Milford — is work where precision matters from the start. We excavate to your builder's exact dimensions and verify depths before we leave the site. A foundation hole that's off in depth or dimension creates problems for every trade that follows, and we don't leave that problem behind for someone else to deal with."
    ],
    situations: [
      {
        title: "Building a New Home",
        description: "You're breaking ground on a new home in Loveland, Mason, or elsewhere in the Cincinnati suburbs and need the foundation excavated to your builder's specs.",
        icon: "🏠"
      },
      {
        title: "Adding an In-Ground Pool",
        description: "You're installing a gunite, fiberglass, or vinyl liner pool and need the hole dug to the pool company's exact specifications.",
        icon: "🏊"
      },
      {
        title: "Backyard Pond or Water Feature",
        description: "You're creating a pond on your acreage in Clermont or Warren County and need it excavated to the right depth and shape.",
        icon: "🐟"
      },
      {
        title: "Basement or Crawlspace Addition",
        description: "You want to add usable space beneath an existing structure — foundation excavation that needs to be done carefully around the existing building.",
        icon: "🏚️"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/excavation-1.png",
      "/images/gallery/residential/excavation-2.png",
      "/images/gallery/residential/excavation-3.png"
    ],
    expectations: {
      timeline: "1–3 days for most residential foundation and pool excavations; pond construction may vary by size",
      priceRange: "$3,500 – $18,000 depending on excavation depth, volume, soil conditions, and spoil management",
      details: [
        "OUPS / KY 811 utility locating before any digging",
        "Excavation to exact dimensions per your builder's or pool contractor's plans",
        "Spoil management — stockpile on-site or haul off",
        "Minimal disturbance to surrounding lawn and landscaping",
        "Verification of depth and dimensions before handoff",
        "Clean, stable walls ready for foundation or pool crew"
      ]
    },
    testimonial: {
      quote: "We were nervous about the excavator fitting through our side gate and not tearing up the yard. They used a compact machine for the approach, protected the lawn with mats, and had the pool hole dug in a day and a half. Yard looked fine after. Exactly what we hoped for.",
      name: "Sarah K.",
      location: "Indian Hill, OH",
      project: "In-ground pool excavation"
    },
    included: [
      "Foundation excavation to builder specs",
      "Basement and crawlspace excavation",
      "In-ground pool excavation",
      "Pond and water feature excavation",
      "Soil removal and hauling",
      "Backfilling and compaction",
      "Grade restoration",
      "Utility locating (OUPS/811)"
    ],
    process: [
      { step: "Site Review", description: "We review your plans, assess access, and locate utilities before any digging begins." },
      { step: "Excavation", description: "We excavate to the precise dimensions your plans require, maintaining clean, stable walls." },
      { step: "Material Management", description: "We manage spoil on-site or haul it away, keeping the rest of your property protected." },
      { step: "Handoff", description: "We verify dimensions and depth, leave the excavation ready for your next contractor." }
    ],
    faqs: [
      { question: "How much does residential excavation cost?", answer: "Most residential foundation and pool excavations run $3,500–$18,000 depending on depth, volume of material, soil conditions, and whether spoil needs to be hauled off-site. We provide detailed quotes after reviewing your plans and visiting the site." },
      { question: "How do you protect my yard during excavation?", answer: "We use tracked equipment to minimize ground pressure, protect lawn areas with equipment mats where needed, and plan our spoil management to avoid spreading mud across the property. We can't guarantee zero impact, but we're careful." },
      { question: "What happens to the excavated dirt?", answer: "We discuss this during quoting. Options include stockpiling on your property for future use, spreading in another area you designate, or hauling it off-site completely. Hauling adds to cost but leaves your property cleaner." },
      { question: "How long does a residential foundation excavation take?", answer: "Most residential foundation excavations are completed in one to two days. Pool and pond excavations are similar. Access restrictions and difficult soil conditions affect timing — we'll give you a realistic timeline with your quote." },
      { question: "Do I need permits for excavation?", answer: "Excavation permits are typically included in your building permit for new construction. For pools and ponds, your contractor usually pulls the necessary permits. We can advise on what's required for your specific situation." }
    ]
  },
  {
    slug: "land-clearing",
    title: "Residential Land Clearing",
    shortTitle: "Land Clearing",
    description: "Residential lot clearing, brush removal, and forestry mulching to reclaim your property.",
    metaDescription: "Residential land clearing in Greater Cincinnati. Lot clearing, brush removal, forestry mulching for homeowners. Reclaim your property with Liteworks Co.",
    image: "/images/land-clearing.png",
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "You bought the property for a reason — but maybe it's hard to enjoy it with overgrown brush, invasive honeysuckle, and trees you never wanted taking over. Or maybe you're building on a wooded lot and need it cleared before construction can begin. Either way, Liteworks Co. makes residential land clearing straightforward, efficient, and surprisingly affordable throughout Greater Cincinnati.",
      "Forestry mulching is our primary clearing method for residential properties. Our machine processes trees and brush right where they stand, grinding everything into fine mulch that gets spread on the ground. No burn piles, no haul trucks, no debris-strewn mess — just clear ground and a light mulch layer that protects the soil, feeds earthworms, and suppresses weed regrowth while the vegetation you want establishes.",
      "Invasive species removal is one of the most requested residential clearing services in Greater Cincinnati. Honeysuckle and multiflora rose are a massive problem throughout Hamilton, Clermont, and Warren counties — they can completely fill an understory in a few years, turning beautiful wooded land into an impenetrable, wildlife-hostile thicket. We clear even heavily infested properties efficiently.",
      "Selective clearing — taking out the brush and unwanted trees while preserving the mature native hardwoods you actually want — is something we do carefully. Before we start, we walk the property with you and identify exactly what stays and what goes. Good oaks, hickories, and native understory trees are worth preserving, and our operators are experienced working around them without damage. This is especially common in the wooded residential neighborhoods of Anderson Township, Loveland, and Indian Hill.",
      "Residential lot clearing for new home construction requires thinking about more than just what's in the clearing footprint. We consider where equipment access comes from, which trees outside the clearing zone are close enough to be at risk from root compaction, and how the clearing sequence keeps the property as protected as possible during construction. Working in established residential neighborhoods in Clermont County suburbs like Milford or Hamilton County's eastern townships means keeping the surrounding landscape intact.",
      "After clearing, many homeowners want to know what to do with the cleared ground. The forestry mulch layer is a good natural ground cover while you figure out your next step — whether that's establishing lawn, installing landscaping, or starting construction. We can discuss timing and what to expect for the cleared area during your site visit. We give you an honest picture of what the property will look like when we're done, not a sales pitch."
    ],
    situations: [
      {
        title: "Overgrown Wooded Lot",
        description: "Honeysuckle, multiflora rose, and years of brush growth have made your wooded property unusable. Time to take it back.",
        icon: "🌿"
      },
      {
        title: "New Home Construction",
        description: "You're building on a wooded lot in Loveland or Liberty Township and need the construction zone cleared while preserving the trees you want to keep.",
        icon: "🏠"
      },
      {
        title: "Fence Line or Property Boundary",
        description: "The fence line or property boundary has grown in completely — you need it cleared so you can see the line and maintain it.",
        icon: "📏"
      },
      {
        title: "Trail or Pasture Creation",
        description: "You want trails through your wooded acreage or to open up an overgrown area for pasture — selective clearing without taking everything down.",
        icon: "🌲"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/land-clearing-1.png",
      "/images/gallery/residential/land-clearing-2.png",
      "/images/gallery/residential/land-clearing-3.png"
    ],
    expectations: {
      timeline: "1–3 days for most residential clearing projects (up to 2 acres); larger acreage or dense woods may take 3–5 days",
      priceRange: "$2,500 – $7,000 per acre depending on vegetation density and tree size; most residential projects are 0.5–3 acres",
      details: [
        "Property walk to mark clearing boundaries and preservation areas",
        "Forestry mulching — no burn piles, no debris haul",
        "Selective tree preservation around structures and property lines",
        "Stump grinding included for trees felled separately",
        "Mulch spread or removed based on your preference",
        "Minimal disturbance outside the clearing zone"
      ]
    },
    testimonial: {
      quote: "Our back two acres had been overtaken by honeysuckle for years — you literally couldn't walk through it. Liteworks came out, looked at it, and had a realistic plan. They cleared it in two days and left the good trees standing. We can actually enjoy our property now.",
      name: "Laura M.",
      location: "Loveland, OH",
      project: "2-acre residential land clearing, invasive species removal"
    },
    included: [
      "Forestry mulching",
      "Invasive species removal (honeysuckle, multiflora rose)",
      "Selective tree and brush clearing",
      "Construction zone clearing",
      "Fence line and property boundary clearing",
      "Stump grinding",
      "Debris management",
      "Trail and access path clearing"
    ],
    process: [
      { step: "Property Walk", description: "We walk your property together, identify clearing boundaries, and mark any trees or features to preserve." },
      { step: "Clearing Plan", description: "We confirm the approach — full clear, selective clearing, or specific area targeting." },
      { step: "Mulching", description: "Our forestry mulcher processes vegetation, clearing efficiently with minimal site disturbance." },
      { step: "Final Pass", description: "We spread mulch evenly or remove it, leaving your property clean and ready for the next step." }
    ],
    faqs: [
      { question: "How much does residential land clearing cost?", answer: "Residential clearing typically runs $2,500–$7,000 per acre depending on vegetation density and tree size. Light brush clears much faster than dense woods. Most residential projects are under 3 acres — we can give you a firm quote after a site visit." },
      { question: "Will the mulch attract termites near my house?", answer: "Fresh wood mulch can attract termites if spread right against your foundation. We typically keep mulch at least 12–18 inches away from structures, or remove it entirely from those areas." },
      { question: "Can you clear right up to my property line?", answer: "Yes, but we need clear boundaries. Survey stakes, photos, or a walking tour with you before we start ensures we clear exactly what you want without going beyond your property." },
      { question: "Is forestry mulching loud? How long will it run?", answer: "It's not quiet — our machines run at about 85–90 dB at distance. Most residential clearing projects take 1–3 days depending on acreage. We work during normal business hours and won't start before 7:30 AM." },
      { question: "Do I need a permit to clear land on my own property?", answer: "In most cases, no permit is required for standard residential clearing in Greater Cincinnati. Some municipalities have tree preservation ordinances that restrict removal of large trees. We can advise based on your location." }
    ]
  },
  {
    slug: "demolition",
    title: "Home Demolition",
    shortTitle: "Demo",
    description: "Residential structure teardowns — old sheds, garages, barns, driveways, and concrete removal.",
    metaDescription: "Residential demolition services in Greater Cincinnati. Shed and garage teardowns, concrete removal, driveway demolition. Liteworks Co. clears the way for your next project.",
    image: "/images/demolition.png",
    heroVideo: "/videos/bulldozer-tracking.mp4",
    fullDescription: [
      "That old shed that's falling down. The detached garage that's too far gone to repair. The cracked concrete driveway that's been an eyesore for years. The above-ground pool that nobody's used in a decade. These are the residential demolition projects Liteworks Co. handles every week throughout Greater Cincinnati — quick, clean, and out of your way so you can move forward with whatever you've got planned.",
      "Old concrete removal is one of our most common residential jobs. Driveways crack. Patios sink and heave. Old sidewalks break apart. Concrete doesn't have to stay there forever just because it's heavy — we have the equipment to break it up and haul it away efficiently, and in many cases, old concrete can be recycled into aggregate rather than going to a landfill.",
      "Before any demolition, we check for utilities and coordinate disconnection if needed. We also ask about the history of the structure — age, prior uses — to flag anything that might suggest the need for a hazardous materials check before demo begins. Your safety and ours comes first.",
      "Older structures common in Greater Cincinnati's established neighborhoods — 1950s and 1960s garages in Anderson Township, aging bank barns on rural Clermont County properties, deteriorating outbuildings throughout Hamilton County's eastern suburbs — often contain materials that require careful handling. We ask about structure age and history before demo, and for structures built before 1980, we recommend at minimum a visual assessment for obvious asbestos-containing materials. We'd rather have that conversation upfront than encounter a problem mid-job.",
      "Permit requirements vary across Greater Cincinnati's many municipalities and townships. Most small outbuilding removals don't require permits, but detached garage demolitions, in-ground pool demolitions, and larger structure teardowns may. We can advise based on your municipality — whether you're in a City of Cincinnati neighborhood, an unincorporated Hamilton County township, or a Warren County municipality like Mason or Lebanon — and help you understand what's required before work begins.",
      "We leave job sites clean. Everything comes with us — no debris pile left behind, no concrete chunks for you to deal with. We grade the site level after demolition so the area is usable, not just cleared. If you're planning to immediately build something new on the cleared footprint, we can discuss grade preparation to make that next step easier."
    ],
    situations: [
      {
        title: "Old Shed or Garage",
        description: "An outbuilding that's past the point of repair needs to come down so you can reclaim the space or build something new.",
        icon: "🏚️"
      },
      {
        title: "Cracked Concrete Driveway",
        description: "Your driveway has deteriorated to the point where repair doesn't make sense — time to break it up and start fresh.",
        icon: "🔨"
      },
      {
        title: "Old Pool Removal",
        description: "An above-ground pool that's sat unused for years, or an in-ground pool you want to fill and reclaim as yard space.",
        icon: "🏊"
      },
      {
        title: "Barn or Outbuilding",
        description: "An old barn or farm outbuilding on a suburban property that's become a liability needs to come down cleanly.",
        icon: "🚜"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/demolition-1.png",
      "/images/gallery/residential/demolition-2.png",
      "/images/gallery/residential/demolition-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential demolition projects (shed, garage, concrete); larger barns or in-ground pools may take 2–3 days",
      priceRange: "$1,500 – $12,000 depending on structure size, material type, concrete volume, and disposal requirements",
      details: [
        "Structure assessment and utility check before starting",
        "Permit coordination if required by your municipality",
        "Systematic teardown with material sorting",
        "Concrete breaking and haul-off (recycled when possible)",
        "Debris removal — everything goes with us",
        "Site graded level and clean after completion"
      ]
    },
    testimonial: {
      quote: "Had a huge old bank barn on a property I bought in Batavia. It was falling in on itself and needed to go before I could do anything with the land. Liteworks knocked it down, sorted the metal for recycling, and had the site cleaned up in two days. Very professional.",
      name: "Dave R.",
      location: "Batavia, OH",
      project: "Bank barn demolition and site clearing"
    },
    included: [
      "Shed and outbuilding teardowns",
      "Detached garage demolition",
      "Concrete driveway and patio removal",
      "Above-ground pool removal",
      "In-ground pool demolition",
      "Barn and outbuilding removal",
      "Debris hauling and disposal",
      "Site grading after demolition"
    ],
    process: [
      { step: "Assessment", description: "We look at the structure, check for utilities, and confirm the scope of work and any special considerations." },
      { step: "Preparation", description: "We disconnect utilities if needed, set up for safe demolition, and coordinate any permits." },
      { step: "Demolition", description: "We bring down the structure systematically, sorting materials for proper disposal or recycling." },
      { step: "Cleanup", description: "We haul everything away, grade the area, and leave your property clean and level." }
    ],
    faqs: [
      { question: "How much does residential demolition cost?", answer: "Most residential demolition projects run $1,500–$12,000 depending on what's being removed. Shed teardowns start around $1,500–$2,500. Detached garage demolition typically runs $2,500–$5,000. Larger barns, in-ground pools, and concrete-heavy projects run higher." },
      { question: "Do I need a permit to tear down my shed or garage?", answer: "Many municipalities don't require permits for small structure removal, but it varies across Greater Cincinnati. We can advise based on your location and structure size, and assist with permits if needed. Never costs you anything to check." },
      { question: "What do you do with the demolished materials?", answer: "We sort materials when possible — metal is recycled, concrete goes to recycling facilities, wood and other materials are properly disposed of. We handle all of it so you don't have to deal with the dumpster or transfer station." },
      { question: "Can you break up my old concrete driveway and haul it?", answer: "Absolutely — this is one of our most common jobs. We break the concrete, load it, and haul it away. Old concrete is typically recycled as aggregate rather than going to a landfill, which reduces disposal costs." },
      { question: "How long will it take and will you leave a mess?", answer: "Most residential demo projects wrap up in 1–2 days. We haul everything with us — we don't leave a debris pile. The site is graded level so it's usable when we're done, not just cleared." }
    ]
  },
  {
    slug: "drainage",
    title: "Residential Drainage Solutions",
    shortTitle: "Drainage",
    description: "French drains, yard drainage, and downspout routing to keep water away from your home.",
    metaDescription: "Residential drainage solutions in Greater Cincinnati. French drains, yard drainage, downspout routing, water management. Liteworks Co. keeps water where it belongs.",
    image: "/images/drainage.png",
    heroVideo: "/videos/drainage-aerial.mp4",
    fullDescription: [
      "Water in the wrong place is one of the most damaging — and most stressful — problems a homeowner can face. Water seeping into your basement, pooling in your backyard after every rain, eroding your landscaping, or coming too close to your foundation aren't just inconveniences. Left unaddressed, they cause real structural damage, mold, and degraded home value. Liteworks Co. provides residential drainage solutions that fix the actual problem throughout Greater Cincinnati.",
      "We start by diagnosing before we dig. A lot of drainage installations fail because they treat symptoms rather than causes — a French drain in the wrong location, an outlet that doesn't actually drain anywhere, grading that sends water back toward the house. Before we propose any solution, we assess where the water is coming from, why it's pooling, and what path it would take if properly directed.",
      "Greater Cincinnati's heavy clay soils make drainage especially tricky. Clay doesn't drain on its own — water saturates it and stays. This is why so many Greater Cincinnati homes deal with wet basements and soggy yards that take forever to dry after rain. Proper drainage solutions account for the clay: collecting water in permeable gravel and pipe before it saturates the clay, and routing it to outlets that actually drain.",
      "French drains work by intercepting groundwater before it reaches your foundation or saturates your yard. A properly installed French drain — with the right gravel, the right perforated pipe, and most importantly a working outlet that actually takes water somewhere lower — can transform a chronically wet area. The outlet is where most DIY and low-bid French drains fail: a pipe that dead-ends in more clay isn't draining anything. We design outlets that daylight to a lower elevation on the property, connect to storm sewer where available, or discharge to a proper drainage easement.",
      "Freeze-thaw cycles in Greater Cincinnati's climate add another layer of complexity to drainage. Water that pools near your foundation in winter expands when it freezes, exerting pressure on foundation walls and causing cracking and movement over time. Addressing drainage issues before they become freeze-thaw structural problems is significantly cheaper than foundation repair. If you're seeing new cracks in basement walls after a wet winter, water management is almost certainly part of the conversation.",
      "We've solved residential drainage problems in neighborhoods throughout the Greater Cincinnati area — from older homes in Anderson Township and Madeira where downspouts dump roof water right next to foundations, to newer construction in Liberty Township and Mason where grading settled unevenly after construction, to rural properties in Clermont and Warren counties where natural drainage patterns were disrupted by prior development. The causes vary; the fix always starts with an honest assessment."
    ],
    situations: [
      {
        title: "Water in Your Basement",
        description: "Groundwater is seeping through your basement walls or floor after heavy rain — a perimeter French drain may be the solution.",
        icon: "💧"
      },
      {
        title: "Soggy Backyard",
        description: "Your backyard stays wet for days after rain, ruining your lawn and making it unusable. Cincinnati clay soils make this a common problem.",
        icon: "🌧️"
      },
      {
        title: "Water Against the Foundation",
        description: "Your yard slopes toward your house instead of away, directing rainwater right to your foundation — a grading correction problem.",
        icon: "🏠"
      },
      {
        title: "Downspout Flooding",
        description: "Your gutters dump roof water right next to the foundation. Underground downspout routing will move it well away from the house.",
        icon: "🍂"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/drainage-1.png",
      "/images/gallery/residential/drainage-2.png",
      "/images/gallery/residential/drainage-3.png"
    ],
    expectations: {
      timeline: "1–3 days for most residential drainage projects; larger yard systems or complex regrading may take 3–5 days",
      priceRange: "$2,000 – $10,000 depending on system type, linear footage, and scope of grading corrections",
      details: [
        "On-site drainage assessment before any proposal",
        "French drain installation with proper outlet to daylight",
        "Downspout burial and outlet routing",
        "Grading corrections to direct surface flow away from house",
        "Catch basin installation in low-lying yard areas",
        "Surface restoration — grading, seeding, or sod as appropriate"
      ]
    },
    testimonial: {
      quote: "After every rain we had water coming into the basement. We'd tried other fixes that didn't work. Liteworks actually walked the yard, figured out where the water was coming from, and installed a French drain with a proper outlet downhill. First heavy rain — dry basement. Should have called them two years ago.",
      name: "Nancy B.",
      location: "Anderson Township, OH",
      project: "Perimeter French drain installation, basement water intrusion"
    },
    included: [
      "French drain installation",
      "Yard drainage swales",
      "Foundation perimeter drainage",
      "Downspout extension and burial",
      "Grading corrections",
      "Outlet and discharge installation",
      "Catch basin installation",
      "Surface and subsurface system design"
    ],
    process: [
      { step: "Assessment", description: "We walk your property, trace water sources, and understand your drainage problem before proposing solutions." },
      { step: "Solution Design", description: "We design a drainage system that addresses the root cause and works with your property's grading." },
      { step: "Installation", description: "We excavate, install drainage components, grade properly, and restore disturbed areas." },
      { step: "Verification", description: "We walk through the completed work with you and confirm the system is properly installed." }
    ],
    faqs: [
      { question: "How much does residential drainage work cost?", answer: "Most residential drainage projects run $2,000–$10,000. A simple downspout burial system might be $1,500–$2,500. A full perimeter French drain with proper outlet typically runs $4,000–$8,000. Larger yard drainage systems with regrading can exceed $10,000. We provide detailed quotes after assessing your specific situation." },
      { question: "How do I know if I need a French drain or regrading?", answer: "It depends on whether your issue is primarily surface water or subsurface groundwater. Surface pooling often responds well to regrading. Groundwater that saturates the soil or enters the basement typically needs a French drain. Often both are needed — we'll be honest about what you actually need." },
      { question: "Where does the drain water go?", answer: "Drainage needs a legal outlet — typically daylight at a lower point on the property, a storm sewer connection, or a dry well in areas where this is permitted. We design the outlet as part of the system. A French drain without a proper outlet won't solve your problem." },
      { question: "How disruptive is drainage installation to my yard?", answer: "French drain trenches are relatively narrow — 12–18 inches wide. We restore the surface after installation and seed or sod disturbed areas. Within a growing season, you typically won't see where we worked. We tell you honestly what to expect before we start." },
      { question: "Will this actually fix my wet basement, or is it a band-aid?", answer: "It depends on the cause. A properly designed and installed perimeter French drain addresses the most common cause of basement water intrusion — groundwater pressure from saturated clay soil. But if water is entering through foundation cracks or a high water table, additional waterproofing measures may be needed. We'll be straight with you about what drainage alone can and can't fix." }
    ]
  },
  {
    slug: "utilities",
    title: "Underground Utilities",
    shortTitle: "Utilities",
    description: "Residential underground utility installation — water, sewer, electric, and communications lines.",
    metaDescription: "Residential underground utility installation in Greater Cincinnati. Water lines, sewer connections, electric burial, communications. Liteworks Co. handles residential utility excavation.",
    image: "/images/trenching.png",
    heroVideo: "/videos/excavator-burying-trench.mp4",
    fullDescription: [
      "Underground utilities are the invisible infrastructure your home depends on — water, sewer, electricity, and communications running through the ground to your house every day. When those systems need to be installed, repaired, or extended, the excavation work needs to be done carefully, to the right depth, and with proper backfill to protect both the utility and your yard. Liteworks Co. handles residential underground utility excavation throughout Greater Cincinnati.",
      "Water service line replacement is one of the most common residential utility projects we handle. Older homes throughout Hamilton, Clermont, and Boone counties often have aging water service lines — galvanized steel or lead pipes that need to be replaced with modern materials. We excavate the service line trench from the meter pit to the house, working around existing landscaping and structures as much as possible.",
      "We always call OUPS and/or Kentucky 811 before any utility excavation. This is non-negotiable — locating existing utilities before we dig protects your utility service, our crew, and the surrounding infrastructure. We also work with property surveys and building records when available to know what to expect underground.",
      "Sewer line replacement is one of the more disruptive residential utility jobs, but often unavoidable when tree roots have infiltrated clay tile pipe or old cast iron has corroded through. We excavate sewer trenches to the depth required, coordinate with your licensed plumber for pipe installation, and backfill carefully to prevent settlement that would change the grade of a gravity sewer line. Sewer trench backfill that settles creates low spots in the pipe where solids collect — we take backfill compaction seriously.",
      "Running underground electric to a new detached garage, workshop, or outbuilding is a very common residential project throughout the suburban and rural areas around Greater Cincinnati. We trench the route from your electrical panel to the new structure, typically at 24-inch minimum depth for direct-buried cable or 18 inches in conduit under driveways. We coordinate with your electrician and work around existing landscaping to minimize yard disruption.",
      "Ohio's frost depth — approximately 30 inches in the Greater Cincinnati area — dictates minimum burial depths for water lines. Water service lines that aren't deep enough freeze in hard winters, and Cincinnati does get cold snaps that push the ground well below freezing. We dig water line trenches to the depth your plumber specifies, which should account for local frost depth requirements under Ohio building code."
    ],
    situations: [
      {
        title: "Water Service Line Replacement",
        description: "Your plumber says the old galvanized or lead water service line from the meter to your house needs to be replaced — the excavation is the first step.",
        icon: "🚰"
      },
      {
        title: "Power to a New Garage or Shop",
        description: "You're building a detached garage, workshop, or outbuilding and need underground electric run from the house to the new structure.",
        icon: "⚡"
      },
      {
        title: "Sewer Line Replacement",
        description: "Root infiltration or pipe collapse means your sewer line needs to be excavated and replaced — a job that requires careful, deep trenching.",
        icon: "🔧"
      },
      {
        title: "Burying Overhead Lines",
        description: "You want to bury overhead electric or communications lines to your home or outbuilding — cleaner look and better storm protection.",
        icon: "🌩️"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/utilities-1.png",
      "/images/gallery/residential/utilities-2.png",
      "/images/gallery/residential/utilities-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential utility runs; deep sewer replacements or long runs may take 2–3 days",
      priceRange: "$2,500 – $12,000 depending on length of run, depth, soil conditions, and restoration scope",
      details: [
        "OUPS / KY 811 utility locating before any digging",
        "Trenching to required depth per utility type",
        "Coordination with your licensed plumber or electrician",
        "Bedding material installation for pipe protection",
        "Controlled backfill and compaction to prevent settling",
        "Grade and lawn restoration after backfill"
      ]
    },
    testimonial: {
      quote: "Our water line from the meter to the house was original galvanized from the 1960s — had a pinhole leak and the plumber said replacement was the only option. Liteworks dug the trench from the road to the house in a day, working around our mature landscaping without damaging anything. Plumber finished the next day and everything was buried and backfilled by the end of the week.",
      name: "Tom G.",
      location: "Madeira, OH",
      project: "Water service line trench, 85 linear feet"
    },
    included: [
      "Water service line trenching",
      "Sewer and septic trenching",
      "Electric service burial trenching",
      "Communications and conduit installation",
      "Trench bedding preparation",
      "Backfilling and compaction",
      "Grade and lawn restoration",
      "Utility locating coordination"
    ],
    process: [
      { step: "Utility Locates", description: "We call OUPS/811, review property records, and understand what's already underground before we dig." },
      { step: "Trenching", description: "We excavate to required depth, working around existing utilities, landscaping, and structures." },
      { step: "Utility Installation", description: "We coordinate with your licensed plumber or electrician for utility installation in the prepared trench." },
      { step: "Backfill & Restore", description: "We backfill, compact, and restore grade and lawn surface as close to original condition as possible." }
    ],
    faqs: [
      { question: "How much does residential utility trenching cost?", answer: "Most residential utility runs cost $2,500–$12,000 depending on length, depth, and restoration needed. A typical water service line replacement (50–100 feet) usually runs $3,000–$6,000 for the excavation. Longer or deeper runs cost more." },
      { question: "Do you install the utility lines or just dig?", answer: "We handle the excavation and trench preparation. Licensed plumbers and electricians install the actual utility lines. We coordinate closely with your utility contractor to make the process smooth, or we can recommend contractors we've worked with." },
      { question: "How deep does electric need to be buried?", answer: "Direct-buried electric cable typically requires 24 inches of cover in most residential situations (18 inches if in conduit under a residential driveway). Your electrician will specify the exact depth required for your installation." },
      { question: "Can you work without tearing up my whole yard?", answer: "We plan our trench route carefully, use the smallest appropriate equipment for the job, and restore grade and seeding after backfill. Some disruption is unavoidable, but we minimize it and are upfront about what to expect." },
      { question: "How long until my yard recovers after the trench is backfilled?", answer: "We restore the grade and seed disturbed areas after backfill. Grass will fill in over one growing season. In high-visibility areas, we can discuss sod instead of seed for faster recovery — just ask during the quoting process." }
    ]
  },
  {
    slug: "driveways",
    title: "Driveways & Sidewalks",
    shortTitle: "Driveways",
    description: "Quality residential gravel driveways, walkways, and access improvements built to last.",
    metaDescription: "Residential driveway construction in Greater Cincinnati. Gravel driveways, sidewalks, access improvements for homes. Liteworks Co. builds driveways that hold up.",
    image: "/images/driveway.png",
    heroVideo: "/videos/concrete-crew.mp4",
    fullDescription: [
      "Your driveway gets used multiple times every day, year after year, through Ohio's wet springs, summer heat, and freeze-thaw winters. A properly built gravel driveway should handle all of that without washing out, rutting, or turning into a muddy obstacle. Liteworks Co. builds residential gravel driveways throughout Greater Cincinnati — new construction, replacements, and expansions — focused on the base and drainage that make the difference between a driveway that lasts and one that doesn't.",
      "The secret to a driveway that holds up isn't the gravel on top — it's the base underneath and the drainage around it. We excavate to remove organic topsoil and soft subgrade, install a geotextile fabric to prevent mixing of base and subgrade, compact a layer of larger crushed aggregate base, and then apply a finish surface of smaller crushed stone. This layered approach is what separates a driveway that's still performing in 20 years from one that's rutted and washed out in three.",
      "Drainage is the second critical factor. We build every driveway with a slight crown to shed water to the sides, install ditches or swales along the edges to carry water away, and add culverts wherever the driveway crosses a low spot or natural drainage channel. In Greater Cincinnati's clay soil environment, getting water off the driveway and away from the subgrade is essential.",
      "Ohio's freeze-thaw cycles are hard on driveways that weren't built to handle them. Water gets into the subgrade, freezes, expands, and causes heave — the driveway shifts and cracks if it's paved, or loses its crown and drainage if it's gravel. A properly built gravel driveway with good drainage actually handles freeze-thaw better than improperly drained paved driveways, because water can't accumulate in the subgrade when the drainage system is working correctly.",
      "Rural and semi-rural properties throughout Clermont County — from Milford and Loveland out through Batavia and Goshen — and Warren County around Lebanon and Waynesville frequently need long driveway runs with multiple drainage crossings. These longer driveways require culverts wherever the driveway crosses a natural drainage channel, properly sized to handle the upstream watershed. Undersized culverts fill with debris and back up water against the driveway — we size culverts for actual drainage conditions, not just what's convenient.",
      "Driveway turnarounds and parking areas are often added at the same time as the main driveway, and it's smart to build them as part of the same project. We design turnarounds that actually work — large enough for a pickup truck or SUV to turn around without multiple-point turns, properly graded to drain, and built to the same base standard as the main drive. If you're going to pay for the mobilization, adding a turnaround at the same time is almost always the right call."
    ],
    situations: [
      {
        title: "New Driveway on Rural Property",
        description: "You're building on a lot in Clermont or Warren County with a long driveway run from the road — needs proper base, drainage, and culverts from the start.",
        icon: "🚜"
      },
      {
        title: "Washout and Ruts",
        description: "Your existing gravel driveway washes out every spring or ruts under vehicle weight because it was never built right — it can be fixed.",
        icon: "⚠️"
      },
      {
        title: "Driveway Extension or Turnaround",
        description: "You need a wider driveway, additional parking area, or a proper turnaround so you're not backing into the road.",
        icon: "↩️"
      },
      {
        title: "New Home Construction Driveway",
        description: "Your builder put in a temporary gravel path during construction — now you need a proper finished driveway built the right way.",
        icon: "🏠"
      }
    ],
    galleryImages: [
      "/images/gallery/residential/driveways-1.png",
      "/images/gallery/residential/driveways-2.png",
      "/images/gallery/residential/driveways-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential driveways up to 200 feet; longer driveways or those requiring significant clearing may take 2–3 days",
      priceRange: "$3,000 – $15,000 for most residential driveways depending on length, terrain, and drainage requirements",
      details: [
        "Route survey and drainage planning before quoting",
        "Subgrade excavation and soft material removal",
        "Geotextile fabric to prevent base/subgrade mixing",
        "Compacted crushed limestone base (4–6 inches)",
        "Finish surface application with proper crown",
        "Edge ditches and culverts for drainage"
      ]
    },
    testimonial: {
      quote: "We had a 300-foot driveway that turned into a mud pit every spring. Three different guys had thrown gravel on it and it never held. Liteworks actually excavated it, put down fabric, proper base, and then the finish stone. That was two years ago — it's still looking great after two winters. Wish we'd done it right the first time.",
      name: "Kevin L.",
      location: "Liberty Township, OH",
      project: "Residential gravel driveway reconstruction, 300 linear feet"
    },
    included: [
      "Route clearing and preparation",
      "Subgrade excavation and preparation",
      "Geotextile fabric installation",
      "Base aggregate compaction",
      "Finish surface application",
      "Crown and drainage grading",
      "Culvert and drainage installation",
      "Turnaround and parking expansion"
    ],
    process: [
      { step: "Planning", description: "We survey the route, plan drainage, and assess subgrade conditions before quoting final materials." },
      { step: "Preparation", description: "We clear vegetation, excavate unsuitable subgrade, and prepare for base installation." },
      { step: "Base Construction", description: "Geotextile, base aggregate, and compaction — the work that makes the driveway last." },
      { step: "Finishing", description: "Surface material, crown grading, edge ditches, and any culverts — ready to drive on." }
    ],
    faqs: [
      { question: "How much does a new gravel driveway cost?", answer: "Most residential gravel driveways run $3,000–$15,000 depending on length, terrain, and drainage requirements. A simple 100-foot suburban driveway is on the lower end; a 400-foot rural driveway with multiple drainage crossings is on the higher end. We provide detailed quotes after visiting the site." },
      { question: "How long does it take to build a new gravel driveway?", answer: "Most residential driveways are completed in one to two days. Longer driveways, those with multiple drainage crossings, or those requiring significant clearing may take longer. We'll give you a realistic timeline with your quote." },
      { question: "What's the best gravel for a residential driveway?", answer: "We typically use crushed limestone. The base layer is #57 or #304 stone (larger aggregate that compacts well), and the surface is #57 or #8 stone (smaller, drivable surface). The right combination depends on your specific driveway and traffic." },
      { question: "My existing driveway is rutted and soft — can it be repaired without full replacement?", answer: "In some cases, yes. We assess the existing conditions — if it's just surface loss and the base is still sound, we can add material and regrade. If the base has failed or was never properly built, reconstruction makes more sense. We'll tell you honestly what the situation is." },
      { question: "Will you damage the road or ditch getting equipment onto my property?", answer: "We're careful about road entrances and existing drainage structures. We use equipment appropriate for the access conditions and take responsibility for any entrance apron damage caused by our work. We typically protect the area during construction and leave it cleaner than we found it." }
    ]
  },
  {
    slug: "grading",
    title: "Grading & Leveling",
    shortTitle: "Grading",
    description: "Yard regrading, slope correction, and pad preparation for patios, sheds, pools, and garages.",
    metaDescription: "Professional yard grading and leveling in Cincinnati. Slope correction, building pad prep, drainage grading for homeowners. Liteworks Co. gets your ground right.",
    image: "/images/residential/grading.png",
    fullDescription: [
      "Water pooling against your foundation. A backyard that slopes the wrong way. A spot where you want to put a patio or shed but the ground isn't level. These are grading problems, and they're some of the most common — and most fixable — issues homeowners deal with across Greater Cincinnati.",
      "Grading is one of those jobs that looks simple but requires experience to do right. It's not just pushing dirt around — it's understanding where water needs to go, how much slope is enough, and what the soil conditions will do after the first heavy rain. Cincinnati's clay soils hold water and shift more than most homeowners expect, which means proper grading is even more critical here than in areas with sandier, more forgiving ground.",
      "We handle yard regrading for drainage correction, building pad preparation for patios, sheds, garages, pools, and additions, and finish grading for new construction lots. Whether you're in a hilly Anderson Township neighborhood where water sheets across your yard during storms, or on a flat lot in Mason where poor original grading is sending water toward your house instead of away from it, the solution is the same: move the dirt to where it needs to be.",
      "Our equipment — skid steers with grading attachments and mid-size excavators — lets us work efficiently on residential lots without destroying the rest of your property. For tight access situations in established neighborhoods in Loveland, Milford, or Indian Hill, we use compact equipment that fits through gates and between structures. We laser-check grades on pad prep work so your contractor has a level surface to build on.",
      "Building pad preparation is precise work. If you're pouring a concrete patio, the pad needs to be level, compacted, and at the right elevation relative to your house. If you're setting a prefab shed or garage, the pad needs to drain properly so water doesn't pool under the structure. We establish the grade, compact the subgrade, and leave you with a surface that's ready for the next step — whether that's your concrete contractor, your shed delivery, or your own landscaping work.",
      "Most residential grading jobs are completed in one to two days. We provide a clear scope during quoting so you know exactly what's being regraded, where the dirt is going, and what the finished product will look like. No surprises on job day."
    ],
    situations: [
      { title: "Water Pooling Near Your Foundation", description: "Your yard slopes toward your house instead of away from it, and water pools against the foundation after every rain.", icon: "💧" },
      { title: "Building a Patio or Shed", description: "You need a level pad prepared for a concrete patio, deck, prefab shed, or detached garage on your property.", icon: "🏗️" },
      { title: "Backyard Won't Drain", description: "Standing water sits in your yard for days after rain because the grade is flat or bowled — you need proper drainage slope established.", icon: "🌊" },
      { title: "New Construction Finish Grading", description: "Your builder finished the house but the yard is rough — you need finish grading before sod, seed, or landscaping.", icon: "🏠" }
    ],
    galleryImages: [
      "/images/gallery/residential/grading-1.png",
      "/images/gallery/residential/grading-2.png",
      "/images/gallery/residential/grading-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential grading projects",
      priceRange: "$2,000 – $8,000 depending on area size, soil volume, and complexity",
      details: [
        "Grade assessment and drainage plan before work begins",
        "Proper slope established away from structures (minimum 2% grade)",
        "Subgrade compaction for building pads",
        "Laser-verified elevations on pad prep work",
        "Topsoil respread or imported as needed",
        "Clean site ready for landscaping or construction"
      ]
    },
    testimonial: {
      quote: "Our backyard was a swamp after every storm. They regraded the whole thing in a day and a half, and we haven't had standing water since. Should have done this years ago.",
      name: "Mike D.",
      location: "Anderson Township, OH",
      project: "Backyard regrading for drainage"
    },
    included: [
      "Grade assessment and drainage evaluation",
      "Cut and fill earthwork",
      "Subgrade compaction",
      "Drainage slope establishment",
      "Building pad preparation",
      "Topsoil management",
      "Finish grading",
      "Site cleanup"
    ],
    process: [
      { step: "Assessment", description: "We evaluate existing grades, identify drainage issues, and plan the earthwork needed to fix them." },
      { step: "Rough Grading", description: "We cut high spots and fill low spots to establish the correct slope and elevation across your yard." },
      { step: "Compaction", description: "We compact the subgrade, especially on building pads, to prevent settling after construction." },
      { step: "Finish & Cleanup", description: "We fine-grade the surface, spread topsoil where needed, and leave the site ready for your next step." }
    ],
    faqs: [
      { question: "How much does yard grading cost in Cincinnati?", answer: "Most residential grading projects run $2,000–$8,000 depending on the size of the area, how much dirt needs to move, and whether we need to import or export soil. Small pad prep jobs are on the lower end; full-yard regrading with drainage correction is on the higher end. We quote after visiting the site." },
      { question: "How do I know if my yard needs regrading?", answer: "If water pools against your foundation, sits in your yard for more than 24 hours after rain, or your yard slopes toward your house instead of away from it, you likely need regrading. We can assess your situation during a free site visit." },
      { question: "Will grading fix my wet basement?", answer: "In many cases, yes — improper grading is one of the most common causes of wet basements. If the ground around your foundation slopes toward the house, regrading to create proper drainage away from the foundation often solves the problem without expensive interior waterproofing." },
      { question: "How long does a grading job take?", answer: "Most residential grading projects are done in one to two days. Larger properties or jobs requiring significant soil import/export may take longer. We'll give you a realistic timeline with your quote." },
      { question: "Do I need grading before pouring a concrete patio?", answer: "Yes. A concrete patio needs a level, compacted subgrade at the correct elevation. Pouring concrete on unprepped ground leads to cracking and settling. We prepare the pad to your concrete contractor's specifications." }
    ]
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    shortTitle: "Retaining Walls",
    description: "Boulder, block, and timber retaining walls for hillside properties and slope stabilization.",
    metaDescription: "Retaining wall construction in Cincinnati. Boulder walls, block walls, timber walls for hillside properties. Professional slope stabilization by Liteworks Co.",
    image: "/images/residential/retaining-walls.png",
    fullDescription: [
      "Cincinnati is built on hills. That's what makes the neighborhoods beautiful — and what makes retaining walls one of the most common residential construction needs in the region. If your yard is losing ground to erosion, your hillside is creeping toward your house, or you want to create usable flat space on a sloped lot, a retaining wall is the answer.",
      "We build retaining walls using natural boulders, segmental concrete block, and timber — depending on your site conditions, aesthetic preferences, and budget. Boulder walls work well for naturalistic settings and can handle significant height with proper engineering. Block walls offer a clean, uniform look and are ideal for walls that need to be perfectly straight or follow precise curves. Timber walls are cost-effective for shorter walls and garden terracing.",
      "The excavation and base preparation behind a retaining wall is where most of the work — and most of the structural integrity — comes from. A wall is only as good as what's behind it. We excavate the hillside, install proper drainage behind the wall (perforated pipe and drainage gravel), compact the base, and build the wall with adequate batter and drainage to handle the lateral earth pressure it'll face. Cincinnati's clay soils exert significant pressure on retaining walls, especially when saturated, so proper drainage behind the wall isn't optional — it's what keeps the wall standing.",
      "For walls over four feet in retained height, Hamilton County and most surrounding municipalities require engineered plans and a building permit. We work with local engineers and can help coordinate the permit process. We've built walls throughout the steep neighborhoods of Mt. Adams, Columbia Tusculum, Anderson Township, and the hillside communities along the Ohio River in Northern Kentucky.",
      "Multi-tier walls are common on Cincinnati's steeper properties. Instead of one tall wall, we build two or three shorter walls with terraced levels between them. This distributes the load, reduces the engineering requirements, creates usable space on each terrace, and often looks better than a single imposing wall. We design the tier spacing and heights based on the specific slope and soil conditions on your property.",
      "Every retaining wall project starts with a site visit where we assess the slope, soil conditions, drainage patterns, and access. We discuss material options, provide a clear quote with no hidden costs, and give you a realistic timeline. Most residential retaining wall projects are completed in three to five days."
    ],
    situations: [
      { title: "Hillside Eroding Toward Your Home", description: "The slope above or below your house is losing soil with every rain, threatening your foundation or yard.", icon: "⛰️" },
      { title: "Creating Usable Yard Space", description: "Your sloped lot doesn't have enough flat space — you want to terrace the hillside to create a patio area, play space, or garden.", icon: "🏡" },
      { title: "Driveway or Walkway Support", description: "The ground next to your driveway or walkway is washing out and needs structural support to prevent collapse.", icon: "🛤️" },
      { title: "Replacing a Failed Wall", description: "Your existing retaining wall is leaning, cracking, or has already partially collapsed and needs to be rebuilt properly.", icon: "🧱" }
    ],
    galleryImages: [
      "/images/gallery/residential/retaining-walls-1.png",
      "/images/gallery/residential/retaining-walls-2.png",
      "/images/gallery/residential/retaining-walls-3.png"
    ],
    expectations: {
      timeline: "3–5 days for most residential retaining walls; larger or multi-tier projects may take 1–2 weeks",
      priceRange: "$5,000 – $25,000+ depending on wall height, length, material, and site access",
      details: [
        "Site assessment and material recommendation",
        "Engineered plans coordination for walls over 4 feet",
        "Excavation and base preparation with compacted aggregate",
        "Drainage system behind wall (perforated pipe + gravel)",
        "Wall construction with proper batter and setback",
        "Backfill, compaction, and finish grading"
      ]
    },
    testimonial: {
      quote: "Our hillside was sliding toward the neighbor's property. They built a three-tier boulder wall that looks like it's been there forever and completely stopped the erosion. Worth every dollar.",
      name: "Tom R.",
      location: "Mt. Lookout, OH",
      project: "Multi-tier boulder retaining wall"
    },
    included: [
      "Site assessment and wall design",
      "Permit assistance for walls over 4 feet",
      "Hillside excavation and shaping",
      "Compacted aggregate base installation",
      "Drainage pipe and gravel behind wall",
      "Wall construction (boulder, block, or timber)",
      "Backfill and compaction",
      "Finish grading and site cleanup"
    ],
    process: [
      { step: "Site Assessment", description: "We evaluate the slope, soil, drainage, and access to determine the right wall type, height, and placement." },
      { step: "Excavation & Base", description: "We excavate into the hillside, prepare a compacted aggregate base, and install the drainage system behind the wall." },
      { step: "Wall Construction", description: "We build the wall with proper batter, setback, and drainage — whether natural boulders, concrete block, or timber." },
      { step: "Backfill & Grade", description: "We backfill behind and above the wall, compact the fill, and finish grade the surrounding area." }
    ],
    faqs: [
      { question: "How much does a retaining wall cost in Cincinnati?", answer: "Residential retaining walls typically run $5,000–$25,000+ depending on height, length, material choice, and site access. Boulder walls tend to cost more per foot but look more natural. Block walls are moderately priced with a clean appearance. Timber walls are the most affordable for shorter applications. We provide detailed quotes after a site visit." },
      { question: "Do I need a permit for a retaining wall?", answer: "In Hamilton County and most surrounding jurisdictions, walls retaining more than four feet of soil require engineered plans and a building permit. Shorter walls typically don't need a permit, but we recommend checking with your local building department. We can help coordinate the engineering and permit process." },
      { question: "What type of retaining wall is best for Cincinnati's hills?", answer: "It depends on the specific site. Boulder walls handle Cincinnati's clay soils well and look natural on wooded hillsides. Block walls are ideal for precise lines and taller applications. The key for any wall type in this area is proper drainage behind the wall — clay soil holds water and creates significant pressure when saturated." },
      { question: "How long does a retaining wall last?", answer: "A properly built retaining wall with adequate drainage should last 50+ years for boulder and block walls, and 15–25 years for timber walls. The most common reason walls fail early is poor drainage behind the wall — water pressure builds up and pushes the wall over. We install drainage on every wall we build." },
      { question: "Can you fix a leaning or collapsed retaining wall?", answer: "In most cases, a leaning wall needs to be dismantled and rebuilt with proper drainage and base preparation. We can sometimes salvage the existing wall materials. Patching a failing wall is usually a temporary fix — the underlying drainage problem needs to be corrected for a permanent solution." }
    ]
  },
  {
    slug: "pool-removal",
    title: "Pool Removal",
    shortTitle: "Pool Removal",
    description: "Inground pool demolition, backfill, and regrading to reclaim your backyard.",
    metaDescription: "Inground pool removal in Cincinnati. Pool demolition, backfill, and regrading for homeowners. Reclaim your backyard with Liteworks Co.",
    image: "/images/residential/pool-removal.png",
    fullDescription: [
      "That pool seemed like a great idea twenty years ago. Now it's cracked, the liner's shot, the pump barely works, and you're spending more to maintain it than you ever spent enjoying it. Or maybe you bought a house with a pool you never wanted. Either way, removing an inground pool is one of the fastest ways to reclaim usable backyard space and eliminate an ongoing maintenance headache.",
      "Pool removal in Greater Cincinnati is straightforward work for the right equipment and crew. We handle both partial removal (punch holes in the bottom for drainage, break down the walls to 18 inches below grade, backfill) and full removal (complete demolition and extraction of all pool material). Partial removal is more common and more affordable — it works for most residential situations where you're converting the area to lawn or garden. Full removal is sometimes required if you plan to build a structure over the former pool location.",
      "The backfill process matters more than most homeowners realize. We don't just dump dirt in the hole. We backfill in lifts — layers of material, each compacted before the next is added — to minimize settling. Even with proper compaction, some settling is normal over the first year or two and we'll discuss what to expect so you're not surprised. We use clean fill material, not construction debris or organic matter that would decompose and create voids.",
      "Cincinnati's clay soils actually help with pool removal in one important way — clay provides a natural moisture barrier that helps with drainage around the former pool area. We punch drainage holes in the pool bottom before backfilling so groundwater doesn't accumulate in the old pool shell and create a bathtub effect under your yard. This step is critical and we don't skip it.",
      "Permits are typically required for pool demolition in Hamilton County and surrounding jurisdictions. The pool also needs to be disconnected from electrical and gas lines before demolition — we coordinate with you and your electrician to ensure all utilities are properly disconnected and capped before we start breaking concrete. We also handle the disposal of all demolition debris.",
      "Most residential pool removals are completed in two to three days. We quote based on pool size, type (concrete, fiberglass, or vinyl with concrete walls), access conditions, and whether you want partial or full removal. After backfill and grading, the area is ready for topsoil and seeding — typically within a few weeks you'll have a usable yard where the pool used to be."
    ],
    situations: [
      { title: "Pool Is Beyond Repair", description: "Your inground pool is cracked, leaking, or the repair costs exceed what it's worth — it's time to fill it in and get your yard back.", icon: "🏊" },
      { title: "Inherited a Pool You Don't Want", description: "You bought a house with a pool you never planned on maintaining — it's costing money and taking up the best part of your backyard.", icon: "🏠" },
      { title: "Safety Concern", description: "You have young children or grandchildren and an aging pool is a liability — removing it eliminates the risk entirely.", icon: "⚠️" },
      { title: "Selling Your Home", description: "Your realtor advised that the old pool is hurting your home value — removing it and restoring the yard makes the property more appealing to buyers.", icon: "💰" }
    ],
    galleryImages: [
      "/images/gallery/residential/pool-removal-1.png",
      "/images/gallery/residential/pool-removal-2.png",
      "/images/gallery/residential/pool-removal-3.png"
    ],
    expectations: {
      timeline: "2–3 days for most residential pool removals",
      priceRange: "$5,000 – $15,000 depending on pool size, type, and partial vs. full removal",
      details: [
        "Utility disconnection coordination (electric, gas, water)",
        "Pool shell demolition with hydraulic breaker",
        "Drainage holes punched in pool bottom",
        "Backfill in compacted lifts with clean fill material",
        "Debris removal and disposal",
        "Finish grading ready for topsoil and seed"
      ]
    },
    testimonial: {
      quote: "The pool hadn't been opened in three years and was basically a mosquito pond. They had it demolished, filled, and graded in two days. Kids now play in the yard where the pool was. Best money we've spent on this house.",
      name: "Jennifer L.",
      location: "West Chester, OH",
      project: "Partial inground pool removal"
    },
    included: [
      "Pool shell demolition",
      "Drainage hole installation in pool bottom",
      "Plumbing and utility disconnection coordination",
      "Backfill with clean fill material in compacted lifts",
      "Concrete and debris hauling and disposal",
      "Finish grading",
      "Permit assistance",
      "Post-project settling guidance"
    ],
    process: [
      { step: "Assessment & Permits", description: "We evaluate pool size, type, access, and pull the necessary demolition permits." },
      { step: "Utility Disconnect", description: "All electrical, gas, and water connections to the pool are disconnected and capped before any demolition." },
      { step: "Demolition & Drainage", description: "We break up the pool shell, punch drainage holes, and haul out debris." },
      { step: "Backfill & Grade", description: "We fill in compacted lifts, finish grade the surface, and leave it ready for topsoil and seeding." }
    ],
    faqs: [
      { question: "What's the difference between partial and full pool removal?", answer: "Partial removal means we break the walls down to about 18 inches below grade, punch drainage holes, and backfill over the remaining shell. Full removal means we extract everything — all concrete, rebar, and liner material. Partial is cheaper and works for most situations. Full removal is recommended if you plan to build a structure over the pool location." },
      { question: "How much does pool removal cost?", answer: "Most residential pool removals in Cincinnati run $5,000–$15,000. The main cost drivers are pool size, type (concrete pools cost more to demolish than fiberglass), access for equipment, and whether you choose partial or full removal. We provide a detailed quote after seeing the pool." },
      { question: "Will the filled area settle?", answer: "Some settling is normal, even with proper compaction. You may see 2–4 inches of settling over the first year or two. We backfill in compacted lifts to minimize this, but we're honest that some settling will occur. Adding topsoil and reseeding after settling is straightforward." },
      { question: "Do I need a permit to remove a pool?", answer: "Yes, most jurisdictions in Greater Cincinnati require a demolition permit for pool removal. We handle the permit application as part of our service. You'll also need to notify your homeowners insurance that the pool has been removed." },
      { question: "How long until I can use the yard after pool removal?", answer: "The area is ready for topsoil and seeding immediately after we finish grading. Grass seed typically establishes in 2–4 weeks depending on the season. You can walk on the area right away, but we recommend waiting for grass to establish before heavy use." }
    ]
  },
  {
    slug: "pond",
    title: "Ponds & Water Features",
    shortTitle: "Ponds",
    description: "Custom pond excavation, stock tanks, and decorative water features for residential properties.",
    metaDescription: "Pond construction and water feature excavation in Cincinnati. Farm ponds, decorative ponds, stock tanks for homeowners. Professional pond digging by Liteworks Co.",
    image: "/images/residential/pond.png",
    fullDescription: [
      "There's something about a pond on your property that changes the whole feel of the place. Whether you want a half-acre farm pond for fishing and livestock, a small decorative pond near the house, or a natural-looking water feature that attracts wildlife, it starts with a hole in the ground — and that's what we do.",
      "Pond construction in Greater Cincinnati is well-suited to our clay soils. Unlike areas with sandy or rocky ground where ponds need expensive liners to hold water, Cincinnati's heavy clay naturally seals and retains water. A properly excavated pond in our area will hold water without any liner in most cases. We assess your specific soil conditions during the site visit and will tell you honestly if your site is a good candidate for a natural clay-bottom pond.",
      "The shape and depth of a pond matter for both function and longevity. A fish pond needs adequate depth — at least 8–10 feet in the deepest section — to prevent winter kill and maintain healthy water temperatures in summer. Stock ponds for livestock need gradual entry slopes for animal access. Decorative ponds near the house need careful grading to look natural and drain properly without threatening your foundation. We excavate to the specifications that match what you actually want to use the pond for.",
      "Dam construction is part of most pond projects on sloped terrain — and it's the most critical part to get right. A pond dam needs to be built with the right clay material, compacted in lifts, and keyed into the hillside to prevent seepage around the edges. We've built ponds on rural residential properties throughout Clermont, Brown, and Warren counties where the terrain is ideal for impoundment ponds. A well-built dam will last decades; a poorly built one can wash out in the first big rain.",
      "Spoil management is something we discuss during quoting. Digging a pond produces a significant volume of excavated material — a half-acre pond might generate 1,000+ cubic yards of clay. That material can be used to build the dam, spread on another part of the property, or hauled off-site. We plan this in advance so there are no surprises about where the dirt goes.",
      "Most residential pond projects take three to five days depending on size. We handle the excavation, dam construction, spillway installation, and finish grading around the pond perimeter. We don't do the landscaping, planting, or stocking — but we can recommend local suppliers for those finishing touches."
    ],
    situations: [
      { title: "Want a Fishing Pond", description: "You have acreage in Clermont or Warren County and want a stocked pond for bass, bluegill, or catfish.", icon: "🎣" },
      { title: "Livestock Water Source", description: "You need a stock pond for cattle, horses, or other livestock on your rural property.", icon: "🐴" },
      { title: "Decorative Water Feature", description: "You want a small ornamental pond or water garden near your home for aesthetics and wildlife habitat.", icon: "🌿" },
      { title: "Property Value Enhancement", description: "A well-placed pond on acreage adds significant property value — you're investing in your land.", icon: "💎" }
    ],
    galleryImages: [
      "/images/gallery/residential/pond-1.png",
      "/images/gallery/residential/pond-2.png",
      "/images/gallery/residential/pond-3.png"
    ],
    expectations: {
      timeline: "3–5 days for most residential ponds; larger impoundment ponds may take 1–2 weeks",
      priceRange: "$5,000 – $25,000+ depending on pond size, depth, dam construction, and site conditions",
      details: [
        "Soil assessment for natural clay seal viability",
        "Pond excavation to specified depth and shape",
        "Dam construction with compacted clay (if applicable)",
        "Spillway installation for overflow management",
        "Spoil management — spread on-site or haul off",
        "Finish grading around pond perimeter"
      ]
    },
    testimonial: {
      quote: "We wanted a pond on our back five acres for years but didn't know where to start. They came out, walked the property, and found the perfect spot where a natural drainage fed into a low area. Pond filled up within two months. We stocked it last spring and my kids caught their first bass this summer.",
      name: "Craig M.",
      location: "Bethel, OH",
      project: "Half-acre farm pond construction"
    },
    included: [
      "Site assessment and pond location recommendation",
      "Soil testing for clay seal potential",
      "Pond excavation to specified dimensions",
      "Dam construction and compaction",
      "Spillway installation",
      "Spoil management",
      "Perimeter grading",
      "Site cleanup"
    ],
    process: [
      { step: "Site Walk", description: "We assess your property's terrain, drainage patterns, and soil to recommend the best pond location and type." },
      { step: "Excavation", description: "We dig the pond to the specified shape and depth, managing spoil material as planned." },
      { step: "Dam & Spillway", description: "If needed, we build a compacted clay dam and install a spillway for controlled overflow." },
      { step: "Finish Grading", description: "We grade the perimeter, manage the remaining spoil, and leave the site clean and ready to fill." }
    ],
    faqs: [
      { question: "How much does it cost to dig a pond in Cincinnati?", answer: "Residential ponds typically run $5,000–$25,000+ depending on size, depth, and whether dam construction is needed. A small decorative pond near the house is on the lower end; a half-acre or larger farm pond with a dam is on the higher end. We provide detailed quotes after walking your property." },
      { question: "Will a pond hold water on my property?", answer: "In most of Greater Cincinnati, yes. Our heavy clay soils naturally seal and hold water. We assess your specific soil during the site visit. If your property has unusually sandy or rocky soil, we'll tell you — and discuss liner options if needed." },
      { question: "How deep should a pond be?", answer: "For fishing, at least 8–10 feet at the deepest point to prevent winter kill and maintain cool water in summer. Stock ponds for livestock can be shallower. Decorative ponds are typically 3–5 feet. We'll recommend the right depth based on your intended use." },
      { question: "Do I need permits to build a pond?", answer: "Permit requirements vary by jurisdiction and pond size. Small decorative ponds typically don't need permits. Larger impoundment ponds may require permits from the county or the Ohio Department of Natural Resources. We can advise on what's likely needed for your specific project." },
      { question: "How long does it take for a new pond to fill?", answer: "It depends on the water source. Ponds fed by natural drainage or springs can fill within a few weeks to a few months. Ponds that rely primarily on rainfall may take longer. We site ponds to take advantage of natural drainage whenever possible." }
    ]
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal",
    shortTitle: "Concrete Removal",
    description: "Old patio, sidewalk, driveway, and foundation concrete demolition and removal.",
    metaDescription: "Concrete removal and demolition in Cincinnati. Old patios, sidewalks, driveways, pool decks, and foundation removal. Clean demolition by Liteworks Co.",
    image: "/images/residential/concrete-removal.png",
    fullDescription: [
      "Old concrete doesn't age gracefully. It cracks, heaves, sinks, and eventually becomes more of an eyesore and trip hazard than a functional surface. Whether it's a 30-year-old patio that's broken into pieces, a driveway that's sunk and cracked beyond repair, or old foundation remnants from a structure that's long gone, removing concrete is the first step toward whatever comes next.",
      "Concrete removal is a demolition job that requires the right equipment and a plan for disposal. We use hydraulic breakers on our excavator to fracture the concrete, then load the broken material with our skid steer for hauling. For thinner slabs like sidewalks and patios, the work goes quickly. Thicker pours like driveways and foundations take more time to break but the process is the same. Reinforced concrete with rebar takes longer — the rebar needs to be cut and separated during demolition.",
      "Disposal is a significant part of the cost on any concrete removal job. Broken concrete is heavy — a standard 4-inch patio slab weighs about 50 pounds per square foot. A 400 square foot patio generates roughly 10 tons of material that needs to go somewhere. We haul to local recycling facilities in Greater Cincinnati where the concrete is crushed and reused as aggregate. This keeps the cost reasonable and keeps material out of landfills.",
      "After the concrete is removed, most homeowners want the area graded and ready for whatever's next — new concrete, a paver patio, landscaping, or just a clean lawn. We handle the grading as part of the project. If you're having new concrete poured, we can coordinate timing with your concrete contractor so the subgrade is prepared and ready when they arrive.",
      "Access is a common concern on concrete removal jobs — especially when the concrete is in a backyard behind the house. We assess access during the site visit and plan equipment routing to minimize damage to your lawn and landscaping. In tight situations, we use compact equipment that can fit through standard gates and work in confined spaces.",
      "Most residential concrete removal jobs are completed in one day. Larger projects — like a full driveway removal or multiple areas — may take two days. We include all demolition, loading, hauling, and disposal in our quote. No surprise fees for the dumpster or the dump."
    ],
    situations: [
      { title: "Cracked and Heaving Patio", description: "Your concrete patio has cracked, shifted, and become uneven — it's a trip hazard and an eyesore that needs to go.", icon: "🔨" },
      { title: "Old Driveway Replacement", description: "Your driveway is beyond patching — the concrete is crumbled, sunken, and needs to be removed before a new surface goes in.", icon: "🚗" },
      { title: "Removing Old Foundation", description: "There's old foundation concrete from a previous structure — shed, garage, or addition — that needs to be demolished and removed.", icon: "🏚️" },
      { title: "Pool Deck Removal", description: "You're redoing your pool area or removing the pool entirely, and the surrounding concrete deck needs to come out.", icon: "🏊" }
    ],
    galleryImages: [
      "/images/gallery/residential/concrete-removal-1.png",
      "/images/gallery/residential/concrete-removal-2.png",
      "/images/gallery/residential/concrete-removal-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential concrete removal projects",
      priceRange: "$1,500 – $8,000 depending on area, thickness, reinforcement, and access",
      details: [
        "Concrete demolition with hydraulic breaker",
        "Rebar cutting and separation",
        "Loading and hauling of all debris",
        "Recycling at local concrete recycling facility",
        "Subgrade grading after removal",
        "Site cleanup with no debris left behind"
      ]
    },
    testimonial: {
      quote: "Had a 600 square foot patio and old sidewalk that were both in terrible shape. They broke it all out, hauled it away, and graded the area in one day. Ready for the new paver patio. Clean, fast, and the quote was exactly what we paid.",
      name: "Angela W.",
      location: "Loveland, OH",
      project: "Patio and sidewalk removal"
    },
    included: [
      "Concrete demolition",
      "Rebar cutting and removal",
      "Material loading and hauling",
      "Concrete recycling disposal",
      "Subgrade grading",
      "Access protection for lawn areas",
      "Complete debris removal",
      "Site cleanup"
    ],
    process: [
      { step: "Assessment", description: "We measure the concrete, assess thickness and reinforcement, check access, and provide a firm quote." },
      { step: "Demolition", description: "We break the concrete with hydraulic breakers and cut any rebar for separation." },
      { step: "Removal", description: "We load all material and haul it to a local concrete recycling facility." },
      { step: "Grading", description: "We grade the exposed subgrade smooth and clean up the surrounding area." }
    ],
    faqs: [
      { question: "How much does concrete removal cost?", answer: "Most residential concrete removal runs $1,500–$8,000 depending on area size, concrete thickness, whether it's reinforced with rebar, and access conditions. A standard patio removal is typically $1,500–$3,000. Full driveway removal runs $3,000–$8,000. We include demolition, hauling, and disposal in the quote." },
      { question: "Where does the old concrete go?", answer: "We haul it to local concrete recycling facilities where it's crushed and reused as road base and aggregate. This is more cost-effective than landfill disposal and better for the environment." },
      { question: "How long does concrete removal take?", answer: "Most residential jobs are done in one day. Larger projects like full driveways or multiple areas may take two days. We'll give you a timeline with your quote." },
      { question: "Will you damage my yard getting equipment to the concrete?", answer: "We plan our equipment access to minimize lawn damage. In tight situations, we use compact equipment and may lay equipment mats to protect the lawn. Some minor turf damage in the access path is typical but we repair the area as part of cleanup." },
      { question: "Can I pour new concrete right away after removal?", answer: "The subgrade needs to be properly prepared first — compacted and leveled to your concrete contractor's specifications. We can coordinate with your concrete contractor on timing and subgrade requirements so the area is ready when they arrive." }
    ]
  },
  {
    slug: "septic",
    title: "Septic Systems",
    shortTitle: "Septic",
    description: "Septic tank excavation, drain field trenching, and system replacements for residential properties.",
    metaDescription: "Septic system installation and replacement in Cincinnati. Tank excavation, drain field trenching, septic repairs. Professional septic work by Liteworks Co.",
    image: "/images/residential/septic.png",
    fullDescription: [
      "If you live outside the municipal sewer system in Clermont, Brown, Warren, or the rural parts of Hamilton County, your home depends on a septic system. When that system fails — or when you're building new and need one installed — the excavation work is the biggest part of the project. That's where we come in.",
      "Septic system excavation includes digging the tank hole, trenching for the drain field laterals, and connecting the system to your home's sewer line. We work directly with your septic installer or plumber — they design the system and handle the tank, distribution box, and piping. We do the digging. This coordination keeps costs down because you're not paying a plumber's rate for excavation work that an excavation crew does faster and cheaper.",
      "Drain field installation is where the bulk of the excavation happens. A typical residential drain field requires multiple parallel trenches — each 2–3 feet wide, 100+ feet long, and spaced several feet apart. In Cincinnati's clay soils, drain fields often require imported gravel or sand to provide the percolation that clay alone can't deliver. We excavate the trenches to the exact depths and dimensions specified by your system designer and the county health department.",
      "Replacement septic systems are more complex than new installations because we're working around an existing home with established landscaping, driveways, and utilities. We access the old system, excavate the failed tank or drain field, and install the new system with minimal disruption to the surrounding property. In many cases, the new drain field goes in a different location than the original — we coordinate with the system designer to identify the best placement.",
      "The county health department inspects septic installations in most jurisdictions around Cincinnati. Your septic designer or installer handles the permit application and inspection scheduling — we make sure the excavation is done to spec and ready for inspection when the inspector arrives. A failed inspection because of incorrect trench depth or spacing means rework for everyone, so we get it right the first time.",
      "Most residential septic excavation projects take two to three days. New installations on undeveloped lots are typically faster because access is easier and there are fewer obstacles. Replacement systems in established yards take a bit longer due to the additional care required around existing improvements."
    ],
    situations: [
      { title: "Septic System Has Failed", description: "Your drain field is saturated, sewage is backing up, or the health department has cited your system — you need a replacement.", icon: "🚽" },
      { title: "Building a New Home", description: "Your new home site is outside municipal sewer and needs a complete septic system installed before construction.", icon: "🏗️" },
      { title: "Adding to Your Home", description: "You're adding bedrooms or a mother-in-law suite that increases your septic load beyond the current system's capacity.", icon: "🏠" },
      { title: "Tank Replacement", description: "Your septic tank is cracked, collapsing, or undersized — you need the old one excavated and a new tank installed.", icon: "🔧" }
    ],
    galleryImages: [
      "/images/gallery/residential/septic-1.png",
      "/images/gallery/residential/septic-2.png",
      "/images/gallery/residential/septic-3.png"
    ],
    expectations: {
      timeline: "2–3 days for most residential septic excavation projects",
      priceRange: "$3,000 – $12,000 for the excavation portion (septic installer and materials are separate)",
      details: [
        "Tank hole excavation to specified depth and dimensions",
        "Drain field trenching per system design specifications",
        "Sewer line trench from house to tank",
        "Gravel or sand bed installation in drain field trenches",
        "Backfill and compaction after installation",
        "Finish grading and site restoration"
      ]
    },
    testimonial: {
      quote: "Our septic failed right before Thanksgiving. They had the old system dug out and the new trenches ready for the installer within two days. The plumber was able to finish the install that same week. Saved our holidays.",
      name: "Dave S.",
      location: "Batavia, OH",
      project: "Complete septic system replacement"
    },
    included: [
      "Septic tank excavation",
      "Drain field trenching",
      "Sewer line trench to house",
      "Gravel/sand bed placement",
      "Old system removal (replacements)",
      "Backfill and compaction",
      "Finish grading",
      "Site restoration"
    ],
    process: [
      { step: "Coordination", description: "We review the system design with your septic installer and plan the excavation sequence." },
      { step: "Excavation", description: "We dig the tank hole, drain field trenches, and connecting trenches to exact specifications." },
      { step: "Bed Preparation", description: "We place gravel or sand in the drain field trenches as specified by the system design." },
      { step: "Backfill & Restore", description: "After your installer finishes, we backfill, compact, and regrade the disturbed areas." }
    ],
    faqs: [
      { question: "How much does septic excavation cost?", answer: "The excavation portion of a septic project typically runs $3,000–$12,000 depending on system size, soil conditions, and site access. This doesn't include the septic tank, distribution box, piping, or installer labor — those are separate. We provide the excavation quote after reviewing the system design." },
      { question: "Do you install the septic system itself?", answer: "We do the excavation — digging the tank hole, trenching the drain field, and preparing the beds. Your licensed septic installer handles the tank, distribution box, piping, and connections. We coordinate closely with them for scheduling and specifications." },
      { question: "How long does a septic replacement take?", answer: "The excavation portion is typically two to three days. Your septic installer usually needs another one to two days for tank and piping installation. Total project time from start to backfill is usually about a week." },
      { question: "What about the mess in my yard?", answer: "Septic excavation is inherently disruptive — there's no way around it. We minimize the impact as much as possible, protect areas we don't need to access, and restore the grading when we're done. The disturbed areas will need reseeding. We're honest about this during quoting so you know what to expect." },
      { question: "Can you work in wet conditions?", answer: "We can work in light rain but heavy rain or saturated ground conditions make septic excavation impractical — trenches fill with water and the clay becomes unworkable. If we need to pause for weather, we communicate with you and your installer to reschedule. Cincinnati's clay soils are particularly sensitive to moisture." }
    ]
  },
  {
    slug: "foundation",
    title: "Foundation Work",
    shortTitle: "Foundation",
    description: "Foundation excavation for waterproofing, footer drains, crawl space access, and repair.",
    metaDescription: "Foundation excavation in Cincinnati. Waterproofing dig-outs, footer drain installation, crawl space access, foundation repair excavation. Liteworks Co.",
    image: "/images/residential/foundation.png",
    fullDescription: [
      "A wet basement or a cracking foundation isn't just annoying — it's your home's structure telling you something needs attention. Many foundation problems start with water, and the solution often starts with excavation. Digging down to the foundation wall lets waterproofing contractors, masons, and structural repair crews access the problem from the outside, where the fix is usually more effective and longer-lasting.",
      "Foundation waterproofing excavation is our most common foundation-related service in Cincinnati. We dig a trench along the exterior foundation wall — typically 3–4 feet wide and down to the footer — so your waterproofing contractor can apply membrane, install drain tile, and seal the wall from the outside. This is careful, precise work. We're digging right next to your house, often with landscaping, walkways, HVAC equipment, and utilities in the way. We use the right size equipment for the space and take the time to do it without damaging adjacent improvements.",
      "Footer drain installation goes hand-in-hand with waterproofing. A perforated drain pipe installed at the footer level, surrounded by washed gravel and wrapped in filter fabric, intercepts groundwater before it reaches your foundation wall. Cincinnati's clay soils are notorious for holding water against foundations — a footer drain gives that water somewhere to go. We excavate the trench, place the gravel bed, and leave it ready for your plumber or waterproofing contractor to install the pipe.",
      "Foundation repair excavation is needed when structural issues require access to the exterior of the foundation wall. Bowing walls, significant cracks, and settling foundations often need repair from the outside — which means excavating down to the footer so the repair contractor can install wall anchors, carbon fiber straps, or other structural reinforcement. We coordinate with your structural repair contractor on access requirements and timing.",
      "Crawl space access excavation is less common but comes up when homeowners need equipment or contractors to access beneath their home and the existing crawl space opening is too small or in the wrong location. We can excavate a proper access point and regrade around it for drainage. This is especially common in older Cincinnati homes in neighborhoods like Mariemont, Madeira, and the east side communities where crawl spaces were built with minimal access.",
      "Most foundation excavation projects take one to three days depending on the length of wall being exposed, depth to footer, and site access conditions. We backfill after your contractor completes their work — using proper backfill material and compaction to prevent settling against the foundation."
    ],
    situations: [
      { title: "Wet Basement", description: "Water is entering your basement through the walls or floor — you need exterior waterproofing that requires excavation to the foundation wall.", icon: "💧" },
      { title: "Foundation Cracks", description: "Significant cracks in your foundation wall need structural repair from the exterior — the wall needs to be exposed.", icon: "🏚️" },
      { title: "Installing Footer Drains", description: "Your home has no footer drains and groundwater pressure is pushing through the foundation — drains need to be installed at the footer level.", icon: "🔧" },
      { title: "Crawl Space Access", description: "You need better access to your crawl space for maintenance, repairs, or encapsulation work.", icon: "🏠" }
    ],
    galleryImages: [
      "/images/gallery/residential/foundation-1.png",
      "/images/gallery/residential/foundation-2.png",
      "/images/gallery/residential/foundation-3.png"
    ],
    expectations: {
      timeline: "1–3 days for most foundation excavation projects",
      priceRange: "$3,000 – $15,000 depending on wall length, depth, and site conditions",
      details: [
        "Careful excavation along foundation wall to footer depth",
        "Protection of adjacent landscaping, walkways, and utilities",
        "Gravel bed preparation for footer drain installation",
        "Coordination with waterproofing or repair contractor",
        "Proper backfill and compaction after contractor work",
        "Finish grading and site restoration"
      ]
    },
    testimonial: {
      quote: "Our basement leaked every time it rained. They dug out along two walls, the waterproofing guys did their thing, and they backfilled and graded it perfectly. Haven't had a drop of water in the basement since. The landscaping recovered within a season.",
      name: "Karen P.",
      location: "Madeira, OH",
      project: "Foundation waterproofing excavation"
    },
    included: [
      "Foundation wall excavation to footer",
      "Utility identification and protection",
      "Adjacent improvement protection",
      "Gravel bed for footer drains",
      "Coordination with repair contractors",
      "Backfill with proper material",
      "Compaction and finish grading",
      "Site restoration"
    ],
    process: [
      { step: "Planning", description: "We coordinate with your waterproofing or repair contractor, identify utilities, and plan equipment access." },
      { step: "Excavation", description: "We carefully dig along the foundation wall to footer depth, protecting adjacent improvements." },
      { step: "Contractor Access", description: "Your waterproofing or repair contractor completes their work with full access to the foundation wall." },
      { step: "Backfill & Restore", description: "We backfill in lifts, compact properly, and regrade the area to restore drainage away from the foundation." }
    ],
    faqs: [
      { question: "How much does foundation excavation cost?", answer: "Foundation excavation typically runs $3,000–$15,000 depending on how much wall length needs to be exposed, depth to footer, and access conditions. A single wall on an accessible side of the house is on the lower end; multiple walls with difficult access are higher. This is just the excavation cost — your waterproofing or repair contractor quotes their work separately." },
      { question: "Will digging next to my foundation damage the house?", answer: "Not when done properly. We use appropriately sized equipment, maintain safe distances, and never undercut the foundation. We're experienced working in tight spaces next to occupied homes and take precautions to protect the structure throughout the process." },
      { question: "How long do I have to leave the trench open?", answer: "That depends on your contractor's schedule. We coordinate timing so the trench is open for the minimum time necessary. Typically, the waterproofing contractor works within a day or two of us completing the excavation, and we backfill shortly after they finish." },
      { question: "Is exterior waterproofing better than interior?", answer: "We're excavators, not waterproofing contractors, so we'll let your waterproofing specialist advise on the best approach. What we can say is that exterior waterproofing addresses the problem at the source — the outside of the wall where water is entering. Many waterproofing contractors consider it the gold standard when it's feasible." },
      { question: "What about my landscaping?", answer: "Landscaping along the foundation wall will need to be removed or temporarily relocated during excavation. We're careful with adjacent areas we don't need to disturb. Plants, shrubs, and garden beds can be replanted after backfill. Most landscaping recovers within one growing season." }
    ]
  },
  {
    slug: "lot-prep",
    title: "Lot Preparation",
    shortTitle: "Lot Prep",
    description: "Clearing and grading building pads for garages, barns, sheds, ADUs, and outbuildings.",
    metaDescription: "Residential lot preparation in Cincinnati. Building pad prep for garages, barns, sheds, ADUs, and outbuildings. Professional clearing and grading by Liteworks Co.",
    image: "/images/residential/lot-prep.png",
    fullDescription: [
      "You've decided to build — a detached garage, a pole barn, a workshop, a storage building, or maybe an accessory dwelling unit. Before your builder can start, the site needs to be ready. That means clearing vegetation, establishing the building pad at the right elevation, compacting the subgrade, and making sure water drains away from the finished structure. That's lot preparation, and it's what we do every day.",
      "Lot prep for outbuildings is simpler than full home construction site prep, but the fundamentals are the same. The pad needs to be level, compacted, at the right elevation relative to the surrounding grade, and designed to shed water away from the structure. Skip any of these steps and you'll have problems — a building that settles unevenly, water that pools against the foundation, or a floor slab that cracks because the subgrade wasn't properly compacted.",
      "For pole barns and garages on rural or semi-rural properties in Clermont, Warren, and Brown counties, lot prep often includes clearing trees and brush from the building footprint plus a working area around it. We clear the site, grub the stumps and roots, establish the pad elevation, and compact the subgrade. If gravel base is needed for the pad, we can place and compact that as well. Your builder shows up to a clean, level pad that's ready for their work.",
      "ADUs (accessory dwelling units) are becoming more popular in Cincinnati's suburbs as zoning has loosened in many jurisdictions. These require more precise lot prep because they're closer to the main house, have utility connections, and need to meet the same building standards as the primary residence. We coordinate with your builder on pad specifications and utility trench locations so everything lines up when construction begins.",
      "Access and material staging are things we plan during the quoting process. If the building site is behind the house and we need to bring equipment through a gate or along the side yard, we plan the route and protect the areas we're traveling through. If fill material needs to be imported for the pad, we need a place to stockpile it and a route to get it to the building site. These details matter and we figure them out before we start.",
      "Most lot prep projects for residential outbuildings are completed in one to two days. Larger sites requiring significant clearing or earthwork may take longer. We provide a complete quote that includes clearing, grading, compaction, and any material import or export needed to get the pad right."
    ],
    situations: [
      { title: "Building a Detached Garage", description: "You're adding a garage to your property and need the site cleared, leveled, and compacted for the foundation.", icon: "🏗️" },
      { title: "Pole Barn or Workshop", description: "You're putting up a pole barn on your rural property and need the building pad prepared — clearing, grading, and gravel base.", icon: "🔨" },
      { title: "Shed or Storage Building", description: "You're installing a larger shed or storage building that needs a proper graded and compacted pad.", icon: "🏚️" },
      { title: "ADU or Guest House", description: "You're building an accessory dwelling unit and need precise lot prep with utility connections coordinated.", icon: "🏡" }
    ],
    galleryImages: [
      "/images/gallery/residential/lot-prep-1.png",
      "/images/gallery/residential/lot-prep-2.png",
      "/images/gallery/residential/lot-prep-3.png"
    ],
    expectations: {
      timeline: "1–2 days for most residential lot prep projects; larger sites with clearing may take 3–4 days",
      priceRange: "$2,000 – $10,000 depending on clearing needs, pad size, and earthwork volume",
      details: [
        "Vegetation clearing from building footprint and work area",
        "Stump and root removal from pad area",
        "Building pad grading to specified elevation",
        "Subgrade compaction",
        "Gravel base placement and compaction (if specified)",
        "Drainage grading around pad perimeter"
      ]
    },
    testimonial: {
      quote: "Had them prep the pad for a 30x40 pole barn on our property in Bethel. They cleared the brush, graded it flat, put down the gravel base, and it was perfect. Builder said it was the best-prepped site he'd worked on all year.",
      name: "Josh H.",
      location: "Bethel, OH",
      project: "Pole barn building pad preparation"
    },
    included: [
      "Site clearing and vegetation removal",
      "Stump and root grubbing",
      "Building pad grading",
      "Subgrade compaction",
      "Gravel base placement (if needed)",
      "Drainage grading around pad",
      "Access route protection",
      "Site cleanup"
    ],
    process: [
      { step: "Planning", description: "We review your building plans, assess the site, and coordinate pad specifications with your builder." },
      { step: "Clearing", description: "We clear vegetation, remove stumps and roots, and prepare the building footprint." },
      { step: "Grading & Compaction", description: "We establish the pad at the correct elevation, compact the subgrade, and place gravel if specified." },
      { step: "Final Prep", description: "We verify grades, establish drainage around the pad, and leave the site ready for construction." }
    ],
    faqs: [
      { question: "How much does lot prep cost for a garage or pole barn?", answer: "Most residential lot prep projects run $2,000–$10,000 depending on how much clearing is needed, pad size, and whether fill or gravel needs to be imported. A simple pad on an already-clear site is on the lower end; clearing a wooded area and building a large pad with gravel base is higher. We provide a detailed quote after reviewing your plans and visiting the site." },
      { question: "Do I need a gravel base for my pole barn?", answer: "Most pole barn builders recommend a gravel base — typically 4–6 inches of compacted aggregate. It provides a stable, well-drained surface that keeps the building interior dry. We place and compact the gravel as part of lot prep if your builder specifies it." },
      { question: "Can you clear trees for the building site?", answer: "Yes. We clear the building footprint plus the working area your builder needs around the structure. We use forestry mulching for brush and smaller trees, and can fell and remove larger trees. We'll discuss what needs to come out during the site visit." },
      { question: "How level does the pad need to be?", answer: "Building pads need to be level within tight tolerances — typically within an inch or two across the pad. We laser-check grades and make adjustments until the pad meets specifications. Your builder will verify before starting construction." },
      { question: "What if my building site is on a slope?", answer: "We can cut into the hillside and build up the downhill side to create a level pad on sloped terrain. This may involve a retaining wall on the downhill side, depending on the cut depth. We'll discuss the best approach during the site visit and quote accordingly." }
    ]
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    shortTitle: "Snow Removal",
    description: "Residential snow plowing and driveway clearing with professional equipment.",
    metaDescription: "Residential snow removal in Cincinnati. Driveway plowing, snow pushing, and property clearing for homeowners. Professional snow removal by Liteworks Co.",
    image: "/images/residential/snow-removal.png",
    fullDescription: [
      "Cincinnati averages about 15 inches of snow per year, and it tends to come in a few big dumps rather than steady light dustings. When 6+ inches drops overnight and you're looking at a 200-foot driveway that your garden-variety snow blower can't handle, that's when professional snow removal with real equipment makes the difference between getting to work on time and being stuck until noon.",
      "We use skid steers with snow pusher attachments for residential snow removal — the same equipment we use for excavation the rest of the year. A skid steer clears a residential driveway in a fraction of the time it takes a pickup with a plow, and it can stack snow where you want it instead of just pushing it off to one side. For longer driveways, large parking areas, and properties with multiple buildings, a skid steer is the right tool.",
      "We offer both per-push pricing and seasonal contracts for residential snow removal in Greater Cincinnati. Per-push works if you only want us when the big storms hit — we come out when accumulation exceeds a trigger depth you set (typically 3–4 inches). Seasonal contracts give you priority service and a fixed monthly cost from December through March, regardless of how many times we push. You know what it costs, and you know you're at the top of the list when it snows.",
      "Response time matters when it's snowing. Our seasonal contract customers are prioritized — we start plowing residential routes as soon as accumulation hits the trigger depth, and we make repeat passes during extended storms. Per-push customers are served after contract customers, so if you're someone who absolutely needs their driveway clear by 6 AM, a seasonal contract is the way to go.",
      "We handle driveways, turnarounds, and access roads on residential properties. We don't do sidewalks or hand shoveling — if you need walks cleared, you'll want to pair our service with someone who does hand work. We also don't salt or treat surfaces — we clear the snow and you can apply your own ice melt. This keeps our service focused on what we do best: moving material with machines.",
      "Our snow removal service area covers Greater Cincinnati, Northern Kentucky, and Southeast Indiana — the same area we serve for excavation. If you're a current or past excavation customer, you're already in our system and setup is easy."
    ],
    situations: [
      { title: "Long Driveway", description: "Your driveway is too long for a snow blower and too much for a shovel — you need a machine to clear it when the big storms hit.", icon: "❄️" },
      { title: "Rural Property Access", description: "You live on a rural property with a long access road that becomes impassable after heavy snow.", icon: "🏡" },
      { title: "Multiple Buildings", description: "You have a detached garage, barn, or workshop and need paths cleared between buildings after snow events.", icon: "🏗️" },
      { title: "Physical Limitations", description: "You can't shovel due to age, injury, or health — you need reliable snow removal you don't have to think about.", icon: "🤝" }
    ],
    galleryImages: [
      "/images/gallery/residential/snow-removal-1.png",
      "/images/gallery/residential/snow-removal-2.png",
      "/images/gallery/residential/snow-removal-3.png"
    ],
    expectations: {
      timeline: "Service within 2–4 hours of trigger depth for contract customers; same-day for per-push customers",
      priceRange: "$75 – $200 per push, or $300 – $800/month seasonal contract depending on driveway size",
      details: [
        "Driveway and turnaround clearing with skid steer",
        "Snow stacked in designated areas",
        "Repeat passes during extended storms (contract customers)",
        "Trigger depth set to your preference (typically 3–4 inches)",
        "Priority response for seasonal contract customers",
        "Service December through March"
      ]
    },
    testimonial: {
      quote: "We have a 300-foot gravel driveway that used to take me two hours with the tractor. They clear it in 15 minutes with the skid steer. The seasonal contract is worth every penny just for not having to worry about it anymore.",
      name: "Bill T.",
      location: "Goshen, OH",
      project: "Seasonal residential snow removal"
    },
    included: [
      "Driveway clearing",
      "Turnaround and parking area clearing",
      "Access road clearing",
      "Snow stacking in designated areas",
      "Repeat passes during storms (contract)",
      "Priority scheduling (contract)",
      "Season-long service December–March",
      "No per-event surprise charges (contract)"
    ],
    process: [
      { step: "Setup", description: "We visit your property, identify driveway dimensions, snow stacking areas, and any obstacles to avoid." },
      { step: "Trigger", description: "When accumulation hits your trigger depth, we dispatch equipment to your property." },
      { step: "Clearing", description: "We push snow from the driveway and turnaround, stacking it in the designated areas." },
      { step: "Repeat", description: "During extended storms, we make additional passes to keep your driveway accessible." }
    ],
    faqs: [
      { question: "How much does residential snow removal cost?", answer: "Per-push pricing typically runs $75–$200 depending on driveway length and complexity. Seasonal contracts run $300–$800/month from December through March. The contract gives you predictable costs and priority service — you're first in line when it snows." },
      { question: "What's the trigger depth?", answer: "The trigger depth is the accumulation level at which we come out to plow. Most customers set it at 3–4 inches. You can set it lower if you want more frequent service, or higher if you only want us for bigger storms. Contract customers can adjust this anytime." },
      { question: "Do you do sidewalks and hand shoveling?", answer: "No — we focus on driveway and access clearing with skid steer equipment. If you need sidewalks and walkways cleared, we recommend pairing our service with a landscaping company that does hand snow removal." },
      { question: "Do you salt or treat surfaces?", answer: "We don't apply salt or ice melt — we clear the snow and you apply your own treatment as needed. This keeps our service straightforward and our pricing simple." },
      { question: "How fast will you get to my property after it snows?", answer: "Seasonal contract customers are prioritized and typically serviced within 2–4 hours of reaching trigger depth. Per-push customers are served after contract customers, usually same-day. During major storms, response times may be longer as we work through our route." }
    ]
  },
  {
    slug: "stump-removal",
    title: "Stump Removal",
    shortTitle: "Stump Removal",
    description: "Tree stump grinding and full root ball extraction for residential properties.",
    metaDescription: "Stump removal and grinding in Cincinnati. Tree stump extraction, root ball removal, stump grinding for homeowners. Professional stump removal by Liteworks Co.",
    image: "/images/residential/stump-removal.png",
    fullDescription: [
      "That tree's been gone for a while but the stump is still there — sitting in the middle of your yard, getting in the way of mowing, and slowly becoming a termite hotel. Or maybe you just had trees taken down and the tree service left the stumps. Either way, stumps don't remove themselves, and the two options are grinding or full extraction. We do both.",
      "Stump grinding is the more common approach. We use a skid steer-mounted stump grinder that chews the stump down 6–12 inches below grade, turning it into a pile of wood chips. The root system stays in the ground and decomposes naturally over several years. Grinding is faster, cheaper, and less disruptive to the surrounding lawn than full extraction. For most homeowners who just want the stump gone so they can mow over the spot, grinding is the right choice.",
      "Full root ball extraction is the heavier option — we use our excavator to pull the entire stump and root ball out of the ground. This leaves a bigger hole that needs to be backfilled, but it removes everything. Full extraction is the right call when you're doing construction over the stump location (pouring concrete, building a structure), when the stump is from a species that sends up aggressive suckers from the root system, or when you just want everything gone completely.",
      "Multiple stumps are common — especially after land clearing or storm damage. We price multiple stumps per-stump with volume discounts. If you have a dozen stumps from a recent clearing job, we'll handle them all in one visit. Our skid steer-mounted grinder moves between stumps quickly without tearing up the lawn the way a trailer-mounted grinder being dragged across the yard does.",
      "Stump size matters for pricing and approach. Small stumps under 12 inches grind in minutes. Large hardwood stumps — 24 inches and up — take longer and produce significantly more chips. Species matters too: soft maples and pines grind fast; old oaks and hickories are dense and take more time. We quote based on what's actually there, not a one-size-fits-all price.",
      "After grinding, we typically leave the wood chips in the hole and mound them slightly above grade to account for settling. You can seed over the chips or rake them out and bring in topsoil — your choice. For full extraction, we backfill the hole with clean fill, compact it, and grade it level with the surrounding ground."
    ],
    situations: [
      { title: "Stumps in Your Yard", description: "You have one or more tree stumps in your lawn that are in the way of mowing and making your yard look rough.", icon: "🌳" },
      { title: "Post-Tree Removal Cleanup", description: "A tree service took down your trees but left the stumps — you need them ground down or pulled out.", icon: "🪓" },
      { title: "Building Over a Stump Location", description: "You're pouring a patio, building a shed, or doing construction where a stump is — it needs to be fully extracted.", icon: "🏗️" },
      { title: "Termite or Pest Concern", description: "Old stumps attract termites and carpenter ants — removing them eliminates a pest risk near your home.", icon: "🐜" }
    ],
    galleryImages: [
      "/images/gallery/residential/stump-removal-1.png",
      "/images/gallery/residential/stump-removal-2.png",
      "/images/gallery/residential/stump-removal-3.png"
    ],
    expectations: {
      timeline: "Same-day for most stump grinding jobs; full extraction may take 1–2 days for multiple large stumps",
      priceRange: "$150 – $500 per stump for grinding; $300 – $1,000+ per stump for full extraction depending on size",
      details: [
        "Stump grinding to 6–12 inches below grade",
        "Or full root ball extraction with excavator",
        "Wood chip management (left in hole or hauled away)",
        "Backfill and grading for extracted stumps",
        "Volume discounts for multiple stumps",
        "Minimal lawn disturbance with skid steer-mounted grinder"
      ]
    },
    testimonial: {
      quote: "Had eight stumps from trees we took down last year. They ground all eight in about three hours. No torn-up lawn, no ruts from dragging equipment around. Way better than the trailer-mounted grinder we used last time at our old house.",
      name: "Scott N.",
      location: "Mason, OH",
      project: "Multiple stump grinding"
    },
    included: [
      "Stump grinding or full extraction",
      "Below-grade grinding (6–12 inches)",
      "Root ball removal (extraction)",
      "Wood chip management",
      "Hole backfill (extraction)",
      "Finish grading",
      "Volume pricing for multiple stumps",
      "Site cleanup"
    ],
    process: [
      { step: "Assessment", description: "We count stumps, measure sizes, identify species, and determine whether grinding or extraction is appropriate." },
      { step: "Grinding or Extraction", description: "We grind stumps below grade with our skid steer attachment, or extract root balls with our excavator." },
      { step: "Chip/Hole Management", description: "We manage wood chips from grinding or backfill holes from extraction." },
      { step: "Cleanup", description: "We grade any disturbed areas and leave the site clean and mow-ready." }
    ],
    faqs: [
      { question: "What's the difference between stump grinding and full removal?", answer: "Grinding chews the stump 6–12 inches below grade and leaves the root system to decompose naturally underground. Full removal extracts the entire stump and root ball, leaving a larger hole that gets backfilled. Grinding is faster, cheaper, and less disruptive. Full removal is for situations where you're building over the location or need everything gone." },
      { question: "How much does stump grinding cost?", answer: "Most stumps cost $150–$500 to grind depending on size, species, and accessibility. Large hardwood stumps (24 inches+) are on the higher end. We offer volume discounts for multiple stumps — if you have several, the per-stump price drops. We quote after seeing the stumps." },
      { question: "Will the roots grow back?", answer: "After grinding, most tree species will not regrow from the remaining roots. A few aggressive species (like silver maples and willows) may send up suckers from the root system for a season or two — these can be mowed over and will eventually stop. Full extraction eliminates any regrowth possibility." },
      { question: "What happens to the wood chips?", answer: "After grinding, we leave the chips in and around the hole. Most homeowners let them settle, add topsoil over them, and seed. You can also rake them out for use as mulch elsewhere in your yard. We can haul chips away for an additional charge if you prefer." },
      { question: "Can you grind stumps in tight spaces?", answer: "Our skid steer-mounted grinder can access most residential areas, including through standard gates. For stumps in very tight spaces next to buildings or fences, we assess accessibility during the site visit and let you know what's possible." }
    ]
  },
  {
    slug: "erosion-control",
    title: "Erosion Control",
    shortTitle: "Erosion Control",
    description: "Hillside stabilization, drainage solutions, and erosion prevention for residential properties.",
    metaDescription: "Erosion control in Cincinnati. Hillside stabilization, riprap installation, drainage solutions, silt fencing for homeowners. Stop erosion with Liteworks Co.",
    image: "/images/residential/erosion-control.png",
    fullDescription: [
      "Cincinnati is hills, and hills erode. Every heavy rain moves a little more of your property downhill — and once erosion starts, it accelerates. Gullies get deeper, slopes get steeper, and what started as a minor washout becomes a serious problem that threatens your yard, your neighbor's property, or the stability of your home's foundation. Erosion control is about stopping that process and stabilizing your property for good.",
      "Cincinnati's clay soils are a double-edged sword when it comes to erosion. Clay resists erosion better than sandy soil when it's vegetated and stable. But once the surface is broken — by a drainage change, tree removal, construction activity, or just a really heavy storm — exposed clay erodes aggressively. Clay also doesn't absorb water well, so heavy rain runs off the surface rather than soaking in, concentrating water flow and carving channels through your property.",
      "We use several approaches to erosion control depending on the specific situation. Riprap (large stone) stabilizes drainage channels and steep slopes where water flow is concentrated. Erosion control blankets and matting protect slopes while new vegetation establishes. French drains and surface drainage improvements redirect water away from vulnerable areas. Regrading can reduce slope angles to prevent future erosion. Often, the right solution is a combination of these methods.",
      "Hillside stabilization on residential properties in Cincinnati neighborhoods like Mt. Adams, Columbia Tusculum, Price Hill, and the east-side hillside communities is some of the most common erosion work we do. These neighborhoods were built on steep terrain, and decades of development have altered natural drainage patterns. A slope that held fine for fifty years can start eroding after a nearby construction project changes how water flows across the hillside.",
      "Drainage is usually the root cause of erosion problems. Water that's concentrated into channels or flowing where it didn't historically flow will carve through clay soil quickly. Before we install riprap or matting, we assess where the water is coming from and why it's flowing where it is. Sometimes the fix is upstream — redirecting water through a proper drainage system before it reaches the eroding slope. We address the cause, not just the symptom.",
      "Most residential erosion control projects take two to four days. Larger hillside stabilization projects involving significant earthwork and riprap installation may take longer. We provide a thorough assessment during the site visit and a clear plan for how we'll stop the erosion and prevent it from returning."
    ],
    situations: [
      { title: "Hillside Washing Away", description: "A slope on your property is eroding with every rain — you're losing ground and it's getting worse.", icon: "⛰️" },
      { title: "Gully Forming in Yard", description: "Water runoff has carved a channel through your yard that's getting deeper and wider after each storm.", icon: "🌊" },
      { title: "Neighbor's Water Damaging Your Property", description: "Development or grading changes uphill are sending more water onto your property than it used to get.", icon: "💧" },
      { title: "Post-Construction Erosion", description: "Recent construction on your property disturbed the soil and now the bare areas are eroding before vegetation can establish.", icon: "🏗️" }
    ],
    galleryImages: [
      "/images/gallery/residential/erosion-control-1.png",
      "/images/gallery/residential/erosion-control-2.png",
      "/images/gallery/residential/erosion-control-3.png"
    ],
    expectations: {
      timeline: "2–4 days for most residential erosion control projects",
      priceRange: "$3,000 – $15,000 depending on slope size, severity, and solution type",
      details: [
        "Site assessment and drainage analysis",
        "Slope regrading where appropriate",
        "Riprap installation in drainage channels and on steep slopes",
        "Erosion control blanket and matting installation",
        "French drain or surface drainage improvements",
        "Seeding or stabilization of disturbed areas"
      ]
    },
    testimonial: {
      quote: "The hill behind our house had a gully that was getting worse every year. They regraded the slope, installed riprap in the drainage channel, and put in a French drain at the base. That was two years ago and we haven't had any erosion since — even in the heavy spring rains.",
      name: "Lisa M.",
      location: "Anderson Township, OH",
      project: "Hillside erosion control and drainage"
    },
    included: [
      "Erosion assessment and drainage analysis",
      "Slope regrading and reshaping",
      "Riprap and stone installation",
      "Erosion control matting",
      "French drain installation",
      "Surface drainage improvements",
      "Seeding of disturbed areas",
      "Site cleanup and stabilization"
    ],
    process: [
      { step: "Assessment", description: "We evaluate the erosion, identify water sources, and design a solution that addresses the root cause." },
      { step: "Drainage", description: "We install drainage improvements to redirect water away from vulnerable slopes." },
      { step: "Stabilization", description: "We install riprap, matting, and/or regrade slopes to stop active erosion." },
      { step: "Restoration", description: "We seed disturbed areas, install final erosion protection, and verify drainage patterns." }
    ],
    faqs: [
      { question: "How much does erosion control cost?", answer: "Most residential erosion control projects run $3,000–$15,000 depending on the size of the affected area, severity of erosion, and what solutions are needed. A simple riprap-lined drainage channel might be $3,000–$5,000. A major hillside stabilization with regrading, drainage, and riprap can be $10,000–$15,000+. We provide a detailed assessment and quote after visiting the site." },
      { question: "What's the best way to stop erosion on a hillside?", answer: "It depends on the specific situation. Addressing the drainage — where water is coming from and how it's flowing — is always the first step. Riprap stabilizes areas with concentrated water flow. Regrading can reduce slope angles. Erosion control blankets protect slopes while vegetation establishes. Usually, the right answer is a combination of methods. We assess your specific situation and recommend what will work." },
      { question: "Is erosion covered by homeowners insurance?", answer: "Generally, no. Most homeowners insurance policies exclude erosion and earth movement from coverage. Erosion caused by a specific sudden event (like a burst pipe) may be covered, but gradual erosion is typically the homeowner's responsibility. Check with your insurance agent for your specific policy." },
      { question: "Will the erosion fix be permanent?", answer: "When we address the root cause — usually a drainage issue — the fix is long-term. Riprap is essentially permanent. Erosion control matting biodegrades over 1–2 years as vegetation establishes and takes over slope stabilization. If the underlying drainage pattern changes in the future (new construction uphill, for example), the erosion problem could return. We design solutions to handle the current and foreseeable drainage conditions." },
      { question: "Can you help if my neighbor's runoff is causing erosion on my property?", answer: "Yes. We can install drainage improvements on your property to manage the water coming from uphill, regardless of its source. Ohio law generally holds uphill property owners responsible for changes that increase runoff to downhill properties, but the practical solution is usually managing the water on your own property rather than waiting for a legal resolution." }
    ]
  }
];

export function getResidentialServiceBySlug(slug: string): ServiceData | undefined {
  return residentialServices.find(s => s.slug === slug);
}
