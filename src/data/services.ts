export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  image: string;
  heroVideo?: string;
  fullDescription: string[];
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
      "Our experienced crew uses professional-grade equipment — including track loaders, excavators, and forestry mulchers — to efficiently prepare sites of all sizes. From a single residential building lot in Anderson Township or Loveland to a multi-acre commercial development in West Chester or Florence, KY, we bring the same level of precision and professionalism to every job.",
      "Proper site preparation protects your entire investment. Inadequate clearing or rough grading at this stage can lead to drainage problems, uneven foundations, and costly fixes later in the build. We work closely with your general contractor and follow your engineering plans to ensure the finished site meets or exceeds every specification.",
      "We also understand that Cincinnati-area soil can be challenging — heavy clay content in many parts of Hamilton, Clermont, and Warren counties requires careful attention during grading to establish drainage that actually works. Our crews know the local terrain and plan accordingly.",
      "Whether you're breaking ground on a dream home in the eastern suburbs or developing raw commercial land in the I-275 corridor, Liteworks Co. is the site prep partner that shows up on time, communicates clearly, and delivers a build-ready site you can be confident in."
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
      "Precision matters in excavation more than almost any other phase of construction. An improperly dug foundation can lead to settling, cracking, and costly structural problems years down the road. That's why we use well-maintained equipment, experienced operators, and careful planning to ensure your excavation is done right the first time.",
      "Greater Cincinnati's terrain presents unique excavation challenges. Much of the region sits on bedrock relatively close to the surface, and clay-heavy soils are common across Hamilton, Clermont, and Boone County. Our crews are experienced working in these conditions and adjust techniques and equipment selection accordingly.",
      "We handle all types of excavation work: full basement digs for new home construction, crawlspace excavations, foundation excavation for additions and garages, pond and lake excavations for properties in the rural eastern Cincinnati suburbs, in-ground pool excavations, and commercial foundation work for buildings and parking structures.",
      "Before any digging begins, we contact Ohio Utilities Protection Service (OUPS) and Kentucky 811 as appropriate to locate and mark all underground utilities. Safety is never an afterthought on our job sites. We also review all available plans and survey data so there are no surprises mid-project.",
      "From a simple residential foundation in Milford to a complex multi-phase commercial excavation in Mason or Erlanger, Liteworks brings the professionalism and precision your project deserves."
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
    heroVideo: "/videos/drone-land-clearing.mp4",
    fullDescription: [
      "Proper grading is one of the most important — and most overlooked — elements of any property improvement or construction project. Whether you need finish grading for a new lawn, slope correction to prevent water damage, precise construction grading, or a major earthwork project, Liteworks Co. has the expertise and equipment to deliver results throughout Greater Cincinnati.",
      "Grading isn't just about moving dirt. It's about understanding water flow, soil composition, and the long-term goals for your property. Our experienced operators know how to shape land to promote proper drainage while achieving the aesthetic or functional results you need. Get the grade wrong, and water ends up where it shouldn't — against your foundation, in your basement, or pooling in your yard.",
      "Greater Cincinnati's heavy clay soils make proper grading especially critical. Clay soil doesn't drain the way sandy or loamy soil does, and it expands and contracts significantly with moisture changes. Our crews understand how to work with local soil conditions to create grades that perform year-round, through Cincinnati's wet springs, summer storms, and freeze-thaw cycles.",
      "We handle all types of grading work: finish grading for new home lawns and landscaping, rough grading for construction sites, re-grading to correct drainage problems around existing structures, slope correction on steep residential lots, cut and fill operations for driveways and building pads, and grading for athletic fields and recreational spaces.",
      "For precision-critical applications like building pads and athletic fields, we utilize laser-guided grading equipment to achieve tight tolerances across large areas. For more straightforward residential finish grading, our experienced eye and skilled equipment operation get the job done efficiently.",
      "We serve homeowners and contractors across Hamilton, Clermont, Warren, Butler, and Boone counties. Whether you're a builder who needs a site graded and ready for landscaping or a homeowner whose backyard holds water after every rain, Liteworks has a grading solution that will work."
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
      "Liteworks Co. specializes in forestry mulching, one of the most efficient and environmentally responsible land clearing methods available. Our purpose-built forestry mulchers grind vegetation — brush, saplings, and trees — into fine mulch directly on site. This eliminates the need for burning (which requires permits and isn't always allowed in suburban Cincinnati) or hauling massive amounts of debris, and the resulting mulch layer returns nutrients to the soil while providing immediate erosion control.",
      "The Greater Cincinnati region is full of properties that have been reclaimed by vegetation — whether it's a wooded lot in Clermont County that sat undeveloped for years, overgrown pasture land in Warren County, or a residential property edge in Hamilton County that's been swallowed by invasive honeysuckle and multiflora rose. We know the local vegetation and know how to clear it effectively.",
      "Our forestry mulching equipment can handle trees up to 8-10 inches in diameter in a single pass. For larger trees, we can fell them first and then mulch the stumps and debris. This makes our process significantly faster than traditional cut-and-haul methods, which translates directly to lower cost for you.",
      "We handle all types of land clearing: residential lot clearing for new construction, acreage clearing for homesteads and farms, fence line clearing, trail and path creation through wooded properties, selective clearing to preserve specific trees while removing unwanted vegetation, and invasive species removal for properties dominated by honeysuckle, multiflora rose, or other non-native plants.",
      "After clearing, we leave you with clean, accessible ground that's ready for whatever comes next — whether that's construction, seeding, fencing, or simply enjoying your property the way it was meant to be used."
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
      "Concrete removal is one of the most common demolition needs we handle. Whether it's an old cracked driveway, a deteriorated patio, an abandoned swimming pool, a foundation from a structure that's already been removed, or a concrete barn floor, we have the equipment to break it up efficiently and haul it away, leaving your site clean and ready for what comes next.",
      "The Cincinnati area has a lot of older properties with aging outbuildings — barns, tobacco sheds, old garages, and chicken houses that have reached the end of their useful life. Many of these structures are past the point of repair and need to come down before the property can be improved, subdivided, or sold. We handle these teardowns routinely and can typically clear a residential-scale structure in one to two days.",
      "Above-ground and in-ground pool removal is another specialty. Many homeowners in Greater Cincinnati have aging pools they no longer want to maintain. We can remove above-ground pools entirely and handle partial or full in-ground pool demolitions, filling and compacting the void so the area can be safely repurposed.",
      "Safety is our top priority on demolition jobs. We assess every structure before work begins, identify potential hazards, secure the area, and work systematically to bring structures down in a controlled manner. We always check for utilities and work with property owners to disconnect services before demolition begins.",
      "When possible, we sort and recycle demolition materials — metal is recycled, clean concrete can often be crushed for aggregate reuse, and wood waste is handled responsibly. This reduces landfill impact and in some cases can reduce disposal costs."
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
      "Cincinnati's climate makes drainage particularly challenging. The region averages over 40 inches of rainfall annually, spread throughout the year with heavy spring rains being especially intense. Combined with the area's heavy clay soils — which absorb water slowly and stay saturated — many properties in Hamilton, Clermont, Warren, and Butler counties deal with chronic water management issues.",
      "We design and install comprehensive drainage systems tailored to each property's specific needs and topography. We start by diagnosing the actual problem — tracing where water is coming from, where it's going, and what's preventing it from draining properly. Too many drainage installations fail because they address symptoms rather than causes.",
      "Our drainage solutions include French drain systems (perforated pipe in gravel trenches that capture and redirect subsurface water), surface drainage swales (engineered channels that move water across or off your property), retention and detention ponds for larger-scale water management on rural acreage, culvert installation for road and driveway crossings, downspout extension systems to get roof runoff away from foundations, and comprehensive re-grading to redirect surface flow.",
      "Erosion control is equally critical, particularly on slopes and freshly disturbed ground. We implement measures including silt fencing, erosion blankets, seeding programs, and engineered swales to prevent soil loss while the land stabilizes. This protects your property and keeps sediment out of neighboring properties and waterways.",
      "If you're dealing with water in your basement, chronic wet spots, eroding hillsides, or a yard that takes days to dry out after rain, contact Liteworks Co. for a drainage assessment. We'll diagnose the problem honestly and propose a solution that works long-term."
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
      "Utility trenching in Greater Cincinnati presents a range of challenges depending on location. Urban and suburban areas require careful utility coordination to avoid hitting existing lines. Many older properties in Hamilton County have aging water and sewer infrastructure that needs replacing or extending. Rural properties in Clermont and Warren counties often need long utility runs to reach buildings that weren't built with adequate services. Rock trenching is a reality in many parts of the region — we have the equipment to break through it.",
      "We handle all types of utility trenching: water service line installation and replacement, sewer and septic system trenching (working with your licensed plumber), electric service and subpanel feed trenches, natural gas line trenches, communications and fiber conduit installation, irrigation system trenching, and geothermal loop trenching for ground-source heat pump installations.",
      "Before any digging, we contact OUPS (Ohio Utilities Protection Service) or Kentucky 811 to have all existing utilities located and marked. This is not optional — it's the law and it's critical for safety. We take this step seriously on every project, every time.",
      "After your utility contractor completes installation, we return to backfill and compact the trench, restore the grade, and leave your property looking as close to its pre-dig condition as possible. Proper backfill and compaction isn't just cosmetic — it prevents settling that can damage the newly-installed utilities over time."
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
      "We specialize in gravel driveways and access roads, which offer an exceptional combination of durability, drainage performance, and value for Greater Cincinnati property owners. A properly built gravel drive with good drainage and a solid compacted base will outlast asphalt paving that was installed without adequate preparation — and it won't crack or heave from freeze-thaw cycles the way pavement can.",
      "The key to a long-lasting gravel driveway is what you can't see: the base. We start by removing organic material and weak subgrade soils, then install and compact a suitable base aggregate before applying the finish surface. Skipping or skimping on this step is why so many DIY and low-bid driveways fail within a few years.",
      "Drainage is the other critical factor. We design every driveway with proper crown (slight peak in the center) to shed water to the sides, and we install culverts or drainage swales where needed to prevent water from pooling on or alongside the driveway. This is especially important in Greater Cincinnati, where heavy rainfall is common and clay soils drain slowly.",
      "We build all types of driveways and access roads: new residential driveways for suburban and rural properties in Hamilton, Clermont, Warren, and Butler counties, long private access roads for acreage properties, farm lanes, equipment access roads for construction sites, and commercial access drives. We also repair and recondition existing gravel driveways that have deteriorated — adding material, regrading, and improving drainage.",
      "Beyond driveways, we handle turnaround areas, loading areas, equipment pads, and parking lots for rural and light commercial applications. If you need to get vehicles to a location on your property reliably and safely, Liteworks can build the road to get you there."
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
      "Commercial construction projects live or die by what happens before the first foundation wall goes in. Site preparation sets the stage for every trade that follows — grading mistakes, inadequate clearing, and improper erosion control at this phase create cascading problems that cost far more to fix mid-project than they would have to prevent. Liteworks Co. specializes in commercial site preparation throughout Greater Cincinnati, Northern Kentucky, and Southeast Indiana.",
      "We work directly with developers, general contractors, and civil engineers to execute site prep according to approved grading and SWPPP (Stormwater Pollution Prevention Plan) requirements. Our team is experienced reading civil plans and coordinating with other trades, so we can integrate seamlessly into your project schedule rather than creating a bottleneck.",
      "Our commercial site prep capabilities include full mass clearing and grubbing of large acreage parcels, topsoil stripping and stockpiling for later use or export, construction access road establishment (keeping your site accessible and your subcontractors productive), erosion and sediment control installation per permit requirements, rough mass grading to engineering plan elevations, and subgrade preparation for building pads and parking areas.",
      "We've prepared commercial sites along the I-275 corridor in Mason and West Chester, in the developing suburban markets of Loveland and Anderson Township, and in industrial zones in Florence and Erlanger, KY. Each market has its own permitting nuances, soil conditions, and utility challenges — our crews have navigated them all.",
      "Greater Cincinnati's clay-heavy soils require specific approaches during commercial site prep. Mass grading in wet conditions can destroy subgrade bearing capacity and create compaction problems that affect your structural engineer's assumptions. We monitor soil conditions, adjust our approach in wet weather, and maintain proper moisture and compaction standards throughout the work.",
      "Equipment selection matters at commercial scale. We run full-size excavators, dozers, and motor graders for large site work — not mini equipment that will take three times as long and cost you more in the end. We size equipment to the job so your timeline stays on track.",
      "From a single commercial building pad in a suburban office park to a multi-acre mixed-use development, Liteworks Co. brings the professionalism, coordination, and scale to deliver your site ready when your general contractor needs it."
    ],
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
      { question: "Can you coordinate with our civil engineer?", answer: "Absolutely. We regularly work directly with civil engineers and project owners to ensure grading is executed per plan. We can submit photos and compaction data for project documentation." },
      { question: "Do you handle SWPPP compliance?", answer: "We install required erosion and sediment controls and can assist with SWPPP documentation. However, a licensed engineer typically prepares and certifies the SWPPP plan itself." },
      { question: "What's your typical crew size for large commercial sites?", answer: "For large commercial site prep, we deploy multiple machines and operators — typically 2-4 pieces of equipment depending on scope. This keeps your project moving efficiently and on schedule." }
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
      "Our commercial excavation work includes building foundation excavation for office buildings, retail, industrial, and mixed-use projects; basement and below-grade parking structure excavation; retention and detention pond construction to meet stormwater management requirements; utility corridor excavation for water, sewer, electric, and communications infrastructure; rock excavation (common in parts of Hamilton and Boone counties where bedrock is close to surface); and mass excavation for grading projects requiring significant material export.",
      "We understand the coordination requirements of commercial construction. Foundation excavation needs to happen on the GC's schedule, with proper pre-excavation utility marking complete, shoring requirements considered where needed, and spoil management planned so excavated material doesn't create site access problems.",
      "Greater Cincinnati's geology varies significantly by location. In some areas — particularly parts of Boone County, KY and hillside sites in Hamilton County — you'll encounter limestone bedrock close to the surface. We have hydraulic breakers and rock excavation capability to handle these conditions without stopping the project.",
      "Retention and detention pond excavation is a major component of many commercial developments in the Cincinnati area, where stormwater management requirements are stringent. We work from civil engineer plans to construct basins to precise elevation, volume, and slope specifications, then coordinate with the project team on any liner, outlet structure, or rip-rap requirements.",
      "Whether you're a GC looking for a reliable excavation subcontractor or a developer managing your own project, Liteworks Co. is the commercial excavation partner that shows up with the right equipment, hits your schedule, and delivers excavations that meet engineering specifications the first time."
    ],
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
      { question: "Do you provide compaction testing?", answer: "We can arrange third-party compaction testing through a geotechnical firm. Many commercial projects require this for structural documentation — we're experienced working with testing agencies." },
      { question: "How do you handle rock excavation?", answer: "We have hydraulic breakers that attach to our excavators for rock work. Rock excavation is slower and may affect pricing, but we have the capability to push through most conditions encountered in Greater Cincinnati." },
      { question: "Can you work around existing underground utilities?", answer: "Yes. We always obtain utility locates before excavating and exercise care around marked utilities. For complex sites with dense existing utilities, we use vacuum excavation methods for safe exposure." }
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
      "Commercial grading services include mass cut and fill operations for site development, building pad preparation to design elevations and bearing capacity requirements, parking lot subgrade grading (one of the most common failures in commercial construction when done improperly), roadway and access drive grading to profile and cross-section, athletic field grading to precision tolerances, and industrial yard grading for equipment storage and operations areas.",
      "Material balance is critical on large commercial projects. Importing or exporting significant quantities of material is expensive. We work with your civil engineer to optimize cut and fill balance, identify areas where material can be redistributed on-site, and minimize costly truck traffic. When import or export is unavoidable, we have relationships with material sources and disposal sites throughout Greater Cincinnati.",
      "Compaction is where many grading projects succeed or fail. We understand the difference between fill for structural applications — which requires specific lift thickness, moisture, and compaction — and fill for non-structural areas. We work with project geotechnical engineers and testing agencies to ensure compaction meets specifications throughout.",
      "Our equipment fleet for commercial grading includes motor graders for precision flat work, dozers for efficient mass earthwork, compactors for proper lift compaction, and GPS-grade control systems for tight tolerance applications. We size equipment to project scope to keep your timeline moving.",
      "From the early stages of a large mixed-use development in Mason to the final subgrade prep on a retail center in Florence, KY, Liteworks Co. brings the commercial grading expertise your project needs."
    ],
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
      { question: "Do you use GPS grade control?", answer: "Yes, we have GPS-equipped machines for precision grading work where tight tolerances are required, such as building pads and athletic fields." },
      { question: "How do you handle material balance?", answer: "We work with your civil engineer to optimize cut and fill balance. When material needs to be exported or imported, we coordinate with area suppliers and disposal sites to minimize project costs." },
      { question: "What compaction standards do you work to?", answer: "We work to whatever compaction specifications your geotechnical engineer requires — typically 95% standard Proctor for structural fill. We coordinate with your testing agency throughout the fill operation." }
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
      "Greater Cincinnati and the surrounding region present a range of clearing challenges. Properties in Clermont and Warren counties often feature mature second-growth hardwood forests — oak, maple, and tulip poplar — that require real forestry clearing capability. Suburban infill sites in Hamilton County frequently deal with invasive honeysuckle and multiflora rose that has fully consumed available growing space. Industrial development sites along river corridors may involve clearing with special consideration for floodplain regulations.",
      "Our commercial land clearing services include full acreage clearing for development, selective clearing to preserve specimen trees and natural buffer areas required by zoning, clearing and mulching for residential subdivision lots, timber stand improvement for larger rural acreage, fence line and perimeter clearing, pipeline and utility corridor clearing, and clearing for stormwater management facilities.",
      "We work closely with your project team to understand clearing limits — the difference between what gets cleared and what gets preserved matters for both regulatory compliance and neighbor relations. We mark and respect tree preservation zones, buffer areas, and other areas where clearing is prohibited.",
      "After clearing, we can coordinate with your site prep team to transition directly into grading — or leave the site in a cleared state ready for your contractors to mobilize. We handle the debris management plan and ensure the site meets your project's environmental and regulatory requirements.",
      "From a 5-acre commercial development site in Mason to a 50-acre residential subdivision in Clermont County, Liteworks Co. has the equipment and experience to clear it efficiently and on schedule."
    ],
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
      { question: "How do you handle large trees?", answer: "Trees beyond our mulcher's capacity are felled first, then stumps and debris are mulched. Large timber can also be salvaged or sold in some cases." },
      { question: "Can you work within regulatory clearing limits?", answer: "Yes — we work with marked clearing limits, tree preservation zones, and buffer areas. We take regulatory compliance seriously on commercial projects." },
      { question: "What's your clearing rate per acre?", answer: "It varies significantly with vegetation density and type. Light brush clears much faster than dense woods. We'll provide an acreage estimate after reviewing the site." }
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
      "We handle commercial demolition projects ranging from small outbuildings and accessory structures on development sites to mid-size commercial buildings and industrial structures. Our equipment — large hydraulic excavators with demolition attachments — processes commercial structures efficiently, sorting materials as we go for proper recycling and disposal.",
      "Concrete removal is a major component of most commercial demolition projects. Old parking lots, foundation slabs, concrete piers, underground vault structures, and deteriorated commercial flooring all need to come out before redevelopment can proceed. We break and remove commercial concrete efficiently, crushing it on-site for aggregate reuse where appropriate, or hauling it to recycling facilities.",
      "The Cincinnati metro area has significant commercial redevelopment activity — older industrial properties, obsolete retail buildings, and aging commercial structures are being cleared for new uses throughout Hamilton, Clermont, and Boone counties. We've participated in many of these projects and understand the coordination requirements, regulatory environment, and timeline pressures involved.",
      "Pre-demolition planning is essential on commercial projects. We coordinate with your team on utility disconnections (water, gas, electric, telecommunications), assess structures for potential regulated materials (asbestos, lead paint) and recommend abatement contractors if needed, review permitting requirements by municipality, and plan material management so the project stays compliant with waste disposal regulations.",
      "Safety on commercial demolition sites requires active hazard management. We establish exclusion zones, notify adjacent property owners when required, manage dust, and work systematically to prevent uncontrolled structural collapse. Our operators are experienced reading structure behavior during demolition and working safely in challenging conditions.",
      "Whether it's clearing an old shopping center pad for a new development, removing a deteriorated industrial building, or demolishing a commercial building for a mixed-use redevelopment, Liteworks Co. approaches commercial demolition with the planning, equipment, and expertise the project demands."
    ],
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
      { question: "How do you handle regulated materials like asbestos?", answer: "We do not perform asbestos or lead paint abatement. We can help identify when an assessment is needed and recommend certified abatement contractors to complete this work before demolition begins." },
      { question: "What permits are required for commercial demolition?", answer: "Most commercial demolition requires permits from the local municipality. Requirements vary significantly by jurisdiction. We can assist with the permitting process and have experience with permit requirements across Greater Cincinnati communities." },
      { question: "Do you provide demolition waste manifests?", answer: "Yes, we can provide documentation of material disposal for project records, which is increasingly required for commercial redevelopment projects." }
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
      "Commercial detention and retention pond construction is a core service. We excavate and grade basins to design volumes and contours, work with your civil engineer on outlet structure placement, install rip-rap and other erosion protection per plan, and coordinate with contractors installing mechanical components. Basin construction often requires precise grade work — a few inches of error in bottom elevation can significantly affect basin storage volume and performance.",
      "Commercial French drain and subsurface drainage systems protect building foundations, prevent parking lot heave in Cincinnati's freeze-thaw climate, and manage groundwater around below-grade structures. We install these systems per civil plans, using properly sized pipe, appropriate backfill media, and correct outlet locations.",
      "Storm sewer infrastructure — installing storm drain pipe, inlets, manholes, and connecting the system to basins or public infrastructure — is another major component of commercial site drainage. We excavate for and prepare the system for your mechanical contractor, or work with licensed contractors to complete the full installation.",
      "Erosion and sediment control during construction is a regulatory requirement on virtually all commercial sites in Greater Cincinnati. We install and maintain SWPPP-required controls — silt fence, inlet protection, check dams, sediment traps, and construction exits — and can document installation for your project records.",
      "Poor stormwater management creates problems that can follow a commercial property for decades — chronic basement flooding, pavement heave, pond failures, and regulatory violations. Getting it right at construction is far cheaper than fixing it later. Liteworks Co. has the experience and technical capability to execute your drainage infrastructure correctly."
    ],
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
      { question: "How precise does detention pond grading need to be?", answer: "Detention pond bottom elevations typically need to be within ±0.1 feet of design to achieve proper storage volumes. We use GPS grade control for pond construction to achieve this precision." },
      { question: "Do you install storm sewer pipe?", answer: "We excavate for storm sewer and can work with your licensed mechanical contractor for pipe installation, or we can manage the full installation package depending on project requirements." },
      { question: "How do you handle stormwater compliance during construction?", answer: "We install and maintain required erosion and sediment controls throughout our work and can provide photographic documentation for SWPPP compliance records." }
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
      "Water and sewer main installation is among the most common commercial utility work we support. New developments in Greater Cincinnati connect to public water and sewer systems through main extensions — often significant pipe runs that require careful coordination with the serving utility district. We excavate to required depths (typically 5-6 feet for water in Ohio's frost zone), provide required bedding material, and backfill with compaction testing as required by the utility district.",
      "Electrical duct bank installation for commercial projects involves trenching to required depth, installing conduit in the bank configuration specified by the electrical engineer, encasing in concrete where required, and providing proper cover before backfilling. We handle the trenching and conduit placement coordination, working with your electrical contractor on the specifics.",
      "Gas main extensions for commercial development require trenching to utility company depth requirements and working within their safety protocols for proximity to the pipe. We have experience working with Columbia Gas and other regional utilities on commercial gas main work.",
      "Communications infrastructure — fiber optic conduit, telecommunications manholes, cable routing — is increasingly critical on commercial sites. We install conduit systems per your telecom contractor's requirements, including pull boxes and duct bank configurations.",
      "Before any utility work begins, we obtain all required utility locates through OUPS and Kentucky 811, and we maintain a safe working distance from located utilities throughout the project. This isn't just best practice — it's the law, and it prevents the costly and dangerous utility strikes that can derail a project schedule."
    ],
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
      { question: "What depths do commercial water and sewer lines require?", answer: "Water mains in Ohio are typically installed at 5-6 feet of cover (below frost line). Sewer main depth is driven by grade requirements — shallow sanitary sewers may be 4 feet, while deep gravity mains can exceed 20 feet." },
      { question: "Do you coordinate with the utility companies?", answer: "Yes, we work with Cincinnati Water Works, Greater Cincinnati Water Works, local sewer districts, and private utilities on commercial projects. We understand their inspection and approval requirements." },
      { question: "What compaction is required in utility trenches under pavement?", answer: "Under pavement, trench backfill typically requires 95-100% standard Proctor compaction. We work with your testing agency to achieve and document specified compaction throughout the backfill operation." }
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
      "Gravel access roads and construction site drives are often the first earthwork task on a commercial project. Getting equipment onto the site, establishing haul routes, and maintaining access for subcontractors throughout construction requires a well-built temporary road that doesn't turn into a muddy obstacle every time it rains. We build construction access roads that hold up through the construction process and can be incorporated into permanent site access if the project design allows.",
      "Permanent commercial gravel driveways and parking areas serve industrial facilities, agricultural operations, rural commercial properties, and businesses where gravel surfacing is appropriate. These areas handle heavy vehicle loading and require deeper base construction than residential drives — typically 8-12 inches of properly compacted aggregate on a prepared and geotextile-protected subgrade.",
      "Parking lot subgrade preparation is one of the most important — and most frequently skipped — components of long-lasting commercial paving. Poor subgrade is the primary cause of premature commercial parking lot failure. We prepare subgrades to the specifications required by your paving engineer, removing unsuitable material, ensuring proper compaction, and establishing the design grade before the paving contractor arrives.",
      "Commercial driveway entrances — where your access road meets the public road — require proper construction with adequate compaction, appropriate culvert sizing, and grades that shed water away from the travel surface. We work with your civil engineer and local highway department requirements for entrance construction.",
      "Larger commercial access road networks — for industrial parks, agricultural operations, or rural commercial developments — require road design considerations including horizontal and vertical alignment, drainage on both sides of the road, culvert sizing for cross-drainage, and surface management strategies. We build these systems to standards that keep your operations moving year-round.",
      "From construction site access in West Chester to permanent gravel parking for an industrial facility in Milford, Liteworks Co. builds commercial access infrastructure that handles real-world commercial demands."
    ],
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
      { question: "How deep should base be for a commercial gravel parking lot?", answer: "Commercial gravel parking serving cars and light trucks typically requires 8-10 inches of compacted aggregate. Areas serving semi trucks or heavy equipment may require 12-18 inches. We size the base to your actual loading requirements." },
      { question: "What's the difference between a construction access road and a permanent road?", answer: "Construction access roads are built for the construction period — functional but not necessarily finished. Permanent roads include proper drainage infrastructure, finished grading, and surface material specified for long-term use." },
      { question: "Do you handle asphalt paving?", answer: "We specialize in earthwork and aggregate construction. For asphalt paving, we prepare the subgrade and base and coordinate with paving contractors for the final surface." }
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
      "Foundation excavation is the most critical residential dig we perform. The difference between a properly excavated foundation and a sloppy one shows up decades later in settling, water intrusion, and structural issues. We work from your builder's plans to excavate to the exact dimensions and depth required — no more, no less — and we leave clean, vertical walls and a level bottom that your foundation contractor can work with.",
      "Basement excavation for new home construction is common throughout Greater Cincinnati's suburban markets. Many of the eastern and northern suburbs — Mason, Lebanon, Loveland, Milford — feature newer subdivisions where full basements are standard. We dig these efficiently while managing soil in a way that doesn't damage the rest of the lot.",
      "In-ground pool excavation requires accuracy and care. The hole needs to be the right shape and depth per the pool manufacturer's specifications, with proper access for the pool installation crew and minimal disturbance to the surrounding yard. We've excavated for gunite, fiberglass, and vinyl liner pools and know what each system needs.",
      "Backyard pond excavation for residential properties — a popular addition for acreage properties in Clermont and Warren counties — involves creating the basin shape, depth, and shelf contours for a healthy water feature. We work with your pond designer to execute the excavation properly.",
      "Before any digging, we call OUPS (or Kentucky 811 for Northern Kentucky properties) to locate all underground utilities. We take this step on every residential project, every time — it protects your home, our crew, and the utility infrastructure your household depends on."
    ],
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
      { question: "How do you protect my yard during excavation?", answer: "We use tracked equipment to minimize ground pressure, protect lawn areas with equipment mats where needed, and haul spoil out in a way that avoids spreading mud across the property." },
      { question: "What happens to the excavated dirt?", answer: "We discuss this during quoting. Options include stockpiling on your property for future use, spreading in another area you designate, or hauling it off-site completely." },
      { question: "How long does a residential foundation excavation take?", answer: "Most residential foundation excavations are completed in one to two days. Pool and pond excavations are similar. Access and soil conditions affect timing — we'll give you a realistic timeline with your quote." }
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
      "Forestry mulching is our primary clearing method for residential properties, and it's the right choice for most situations. Our machine processes trees and brush right where they stand, grinding everything into fine mulch that gets spread on the ground. No burn piles, no haul trucks, no debris-strewn mess. Just clear ground and a light mulch layer that protects the soil, feeds earthworms, and suppresses weed regrowth while the vegetation you want establishes.",
      "Invasive species removal is one of the most requested residential clearing services in Greater Cincinnati. Honeysuckle and multiflora rose are a massive problem throughout Hamilton, Clermont, and Warren counties — they can completely fill an understory in a few years, turning what could be beautiful wooded land into an impenetrable, wildlife-hostile thicket. We can clear even heavily infested properties efficiently, getting your woods back.",
      "For residential new construction lots, we clear and prepare the area where the home, garage, and initial landscaping will go — preserving trees you want to keep while efficiently removing everything in the construction zone. We're careful about root systems and drip lines of trees you want to save; bringing heavy equipment too close to a tree you're keeping can damage it years before the impact shows.",
      "Selective clearing — removing specific trees and brush while preserving others — requires more planning and care than a full clear, but we do it well. Many homeowners with wooded acreage want to thin the trees, remove dead wood and invasives, and create a more park-like appearance without taking everything down.",
      "After clearing, your property can look completely different — open, usable, and ready for whatever comes next. Whether you want to seed it for lawn, plant a garden, build a structure, or simply be able to walk through your own woods without fighting through brush, the work we do unlocks that potential.",
      "We serve residential customers throughout Hamilton, Clermont, Warren, Butler, Brown, and Boone counties. If you're not sure whether your property is a good candidate for forestry mulching versus other clearing methods, we're happy to look at it and give you our honest assessment."
    ],
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
      { question: "Will the mulch attract termites near my house?", answer: "Fresh wood mulch can attract termites if spread right against your foundation. We typically keep mulch at least 12-18 inches away from structures, or remove it entirely from those areas." },
      { question: "Can you clear right up to my property line?", answer: "Yes, but we need clear boundaries. Survey stakes, photos, or a walking tour with you before we start ensures we clear exactly what you want without going beyond." },
      { question: "Is forestry mulching loud? How long will it run?", answer: "It's not quiet! Our machines run at about 85-90 dB at distance. Most residential clearing projects take 1-3 days depending on acreage. We work during normal business hours." }
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
      "Residential demolition sounds dramatic, but most of what we do is straightforward: bring the structure down systematically, sort the material for recycling or proper disposal, haul everything away, and leave the site clean. The whole process for a typical shed or garage teardown usually wraps up in a day or two, depending on size and material.",
      "Old concrete removal is one of our most common residential jobs. Driveways crack. Patios sink and heave. Old sidewalks break apart. Pool surrounds deteriorate. Concrete doesn't have to stay there forever just because it's heavy — we have the equipment to break it up and haul it away efficiently, and in many cases, old concrete can be recycled into aggregate rather than going to a landfill.",
      "Greater Cincinnati has a lot of older properties with structures that have outlived their usefulness. Barns and outbuildings that were standard on mid-century rural lots are now on properties that have been subdivided or developed, and these structures often need to come down before the property can be properly improved or sold. We remove these routinely — including the concrete slab footers underneath them — leaving a clean, level site.",
      "Above-ground pool removal is a specialty service we do frequently. Many Greater Cincinnati homeowners have aging above-ground pools that leak, are beyond repair, or simply aren't being used. We remove the pool, deck, and any associated fencing, and restore the yard to a usable condition.",
      "For partial in-ground pool demolition (where the pool is filled rather than fully removed), we can break the bottom of the pool for drainage, partially demolish the walls, backfill properly, and compact the area so it settles appropriately. Full in-ground pool removal — removing all concrete and filling to grade — is also something we handle.",
      "Before any demolition, we check for utilities and coordinate disconnection if needed. We also ask about the history of the structure — age, prior uses — to flag anything that might suggest the need for a hazardous materials check before demo begins. Your safety and ours comes first."
    ],
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
      { question: "Do I need a permit to tear down my shed or garage?", answer: "Many municipalities don't require permits for small structure removal, but it varies. We can advise based on your location and the structure size, and assist with permits if needed." },
      { question: "What do you do with the demolished materials?", answer: "We sort materials when possible — metal is recycled, concrete goes to recycling facilities, wood and other materials are properly disposed of. We handle all of it so you don't have to." },
      { question: "Can you break up my old concrete driveway and haul it?", answer: "Absolutely — this is one of our most common jobs. We break the concrete, load it, and haul it away. Old concrete is typically recycled as aggregate rather than going to a landfill." }
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
      "French drain systems are the workhorse of residential water management. A properly designed and installed French drain — perforated pipe in a gravel-filled trench — intercepts subsurface water before it reaches your foundation or basement and directs it to a safe outlet away from the structure. We install French drains around foundations, in low-lying yard areas, and at the base of slopes where groundwater collects.",
      "Greater Cincinnati's heavy clay soils make drainage especially tricky. Clay doesn't drain on its own — water saturates it and stays. This is why so many Greater Cincinnati homes deal with wet basements and soggy yards that take forever to dry after rain. Proper drainage solutions account for the clay: collecting water in permeable gravel and pipe before it saturates the clay, and routing it to outlets that actually drain.",
      "Surface grading corrections are often the most effective — and most overlooked — drainage solution. If your yard slopes toward your house rather than away from it, no amount of French drain will fully solve the problem. We regrade to direct surface water away from your foundation, correcting negative grades that send rainwater right where you don't want it.",
      "Downspout management matters more than most homeowners realize. Your gutters collect roof water — often thousands of gallons during a significant rain event — and if the downspouts deposit that water right next to the foundation, you've concentrated the problem. We install downspout extensions and underground outlet systems that carry roof water well away from the structure.",
      "Every residential drainage project is different, and every solution needs to be matched to the specific property. We don't have a one-size-fits-all package — we assess your situation and propose what will actually work for your home and yard in Cincinnati's climate."
    ],
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
      { question: "How do I know if I need a French drain or regrading?", answer: "It depends on whether your issue is primarily surface water or subsurface groundwater. Surface pooling often responds well to regrading. Groundwater that saturates the soil or enters the basement typically needs a French drain. Often both are needed." },
      { question: "Where does the drain water go?", answer: "Drainage needs a legal outlet — typically daylight at a lower point on the property, a storm sewer connection, or a dry well in areas where this is permitted. We design the outlet as part of the system." },
      { question: "How disruptive is drainage installation to my yard?", answer: "We try to minimize disturbance. French drain trenches are relatively narrow, and we restore the surface after installation. Seeded or sodded areas will recover within a season. We tell you what to expect before we start." }
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
      "Water service line replacement is one of the most common residential utility projects we handle. Older homes throughout Hamilton, Clermont, and Boone counties often have aging water service lines — galvanized steel or lead pipes that need to be replaced with modern materials. We excavate the service line trench from the meter pit to the house, working around existing landscaping and structures as much as possible, and prepare the trench for your plumber's pipe installation.",
      "Sewer line excavation is another frequent request. When a residential sewer line needs replacement — due to root infiltration, collapse, or pipe material degradation — the trench work is significant. We excavate to the required depth (residential sewer lines can be anywhere from 4-10 feet deep depending on grade requirements), prepare the trench for your plumber, and backfill carefully after installation to prevent future settling.",
      "Electric service burial — converting overhead electric service to underground, or running underground feeds to garages, outbuildings, and outdoor electrical needs — requires trenching to the depth your electrical contractor specifies. We excavate the trench, install conduit if required, and prepare the route for your electrician's wire pull.",
      "New utilities to outbuildings are increasingly common as homeowners build garages, workshops, she-sheds, and detached offices. Getting water, electric, and communications to these structures requires underground runs from the house — we excavate the trenches to proper depth and coordinate the work with your electrician and plumber so the project flows smoothly.",
      "Greater Cincinnati's older neighborhoods have utility infrastructure that's reaching end of life on a lot of properties. Many homes in the established suburbs of Cincinnati — Hyde Park, Anderson, Madeira, Blue Ash — have utility lines that are decades old and are beginning to fail. Catching these issues before they become emergencies is worth it; we handle the excavation side of these replacement projects efficiently.",
      "We always call OUPS and/or Kentucky 811 before any utility excavation. This is non-negotiable — locating existing utilities before we dig protects your utility service, our crew, and the surrounding infrastructure. We also work with property surveys and building records when available to know what to expect underground."
    ],
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
      { question: "Do you install the utility lines or just dig?", answer: "We handle the excavation and trench preparation. Licensed plumbers and electricians install the actual utility lines. We're happy to coordinate with your utility contractor or recommend ones we've worked with." },
      { question: "How deep does electric need to be buried?", answer: "Direct-buried electric cable typically requires 24 inches of cover (18 inches if in conduit under a residential driveway). Your electrician will specify the depth required for your specific installation." },
      { question: "Can you work without tearing up my whole yard?", answer: "We try to minimize disturbance. We plan our trench route carefully, use the smallest equipment that's appropriate for the job, and restore grade and seeding after backfill. Some disruption is unavoidable, but we respect your yard." }
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
      "Drainage is the second critical factor. A driveway without proper drainage is a driveway that will eventually fail. We build every driveway with a slight crown to shed water to the sides, install ditches or swales along the edges to carry water away, and add culverts wherever the driveway crosses a low spot or natural drainage channel. In Greater Cincinnati's clay soil environment, getting water off the driveway and away from the subgrade is essential.",
      "New residential driveways are common on properties in the rural suburbs of Cincinnati — Clermont County, Warren County, and the rural parts of Hamilton County where longer driveways are standard. We build these from scratch: clearing the route, preparing the subgrade, installing the base, and applying the finish surface. Most residential driveways in this range are completed in one to two days.",
      "Driveway extensions and improvements are just as common as new construction. Expanding an existing driveway for additional parking, adding a turnaround, or widening a narrow lane are all jobs we handle. We match materials to your existing driveway as closely as possible and blend the new work seamlessly into the old.",
      "Driveway repair and reconditioning addresses driveways that have lost their surface material, developed ruts, or lost their crown and proper drainage. We add material, regrade the surface, improve drainage where needed, and restore the driveway to proper condition — at a fraction of what a full replacement would cost.",
      "For properties with longer access roads or significant terrain challenges — steep slopes, multiple drainage crossings, tight access through wooded areas — we bring the earthwork expertise to plan and build access that actually works long-term. We've built driveways on challenging lots throughout the eastern and northern Cincinnati suburbs where getting it right required real planning."
    ],
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
      { question: "How long does it take to build a new gravel driveway?", answer: "Most residential driveways are completed in one to two days. Longer driveways, driveways with multiple drainage crossings, or those requiring significant clearing may take longer. We'll give you a realistic timeline with your quote." },
      { question: "What's the best gravel for a residential driveway?", answer: "We typically use crushed limestone. The base layer is #57 or #304 stone (larger aggregate that compacts well), and the surface is #57 or #8 stone (smaller, drivable surface). The right choice depends on your specific situation." },
      { question: "My existing driveway is rutted and soft — can it be fixed?", answer: "In most cases, yes. We assess the existing conditions, address drainage issues if present, and add base material and surface aggregate to restore proper function. Full replacement is only needed when the subgrade has failed significantly." }
    ]
  }
];

export function getResidentialServiceBySlug(slug: string): ServiceData | undefined {
  return residentialServices.find(s => s.slug === slug);
}
