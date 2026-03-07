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
