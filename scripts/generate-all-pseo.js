#!/usr/bin/env node
/**
 * Liteworks Co. Programmatic SEO Generator
 * Generates all page types: locations, cost, problem/solution, guides, comparisons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_OUTPUT = path.join(__dirname, '..', 'src', 'content', 'programmatic');

const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, 'clawd', '.credentials', 'gemini.json'), 'utf8'));
const API_KEY = creds.api_key;
const MODEL = 'gemini-2.0-flash';

// ═══════════════════════════════════════════════════════════════
// SHARED DATA
// ═══════════════════════════════════════════════════════════════

const CITIES = [
  { city: 'Cincinnati', state: 'OH', slug: 'cincinnati-oh', region: 'Greater Cincinnati' },
  { city: 'Mason', state: 'OH', slug: 'mason-oh', region: 'Greater Cincinnati' },
  { city: 'West Chester', state: 'OH', slug: 'west-chester-oh', region: 'Greater Cincinnati' },
  { city: 'Liberty Township', state: 'OH', slug: 'liberty-township-oh', region: 'Greater Cincinnati' },
  { city: 'Loveland', state: 'OH', slug: 'loveland-oh', region: 'Greater Cincinnati' },
  { city: 'Milford', state: 'OH', slug: 'milford-oh', region: 'Greater Cincinnati' },
  { city: 'Batavia', state: 'OH', slug: 'batavia-oh', region: 'Clermont County' },
  { city: 'Lebanon', state: 'OH', slug: 'lebanon-oh', region: 'Warren County' },
  { city: 'Middletown', state: 'OH', slug: 'middletown-oh', region: 'Butler County' },
  { city: 'Hamilton', state: 'OH', slug: 'hamilton-oh', region: 'Butler County' },
  { city: 'Fairfield', state: 'OH', slug: 'fairfield-oh', region: 'Butler County' },
  { city: 'Dayton', state: 'OH', slug: 'dayton-oh', region: 'Miami Valley' },
  { city: 'Springboro', state: 'OH', slug: 'springboro-oh', region: 'Warren County' },
  { city: 'Monroe', state: 'OH', slug: 'monroe-oh', region: 'Butler County' },
  { city: 'Franklin', state: 'OH', slug: 'franklin-oh', region: 'Warren County' },
  { city: 'Centerville', state: 'OH', slug: 'centerville-oh', region: 'Miami Valley' },
  { city: 'Xenia', state: 'OH', slug: 'xenia-oh', region: 'Greene County' },
  { city: 'Wilmington', state: 'OH', slug: 'wilmington-oh', region: 'Clinton County' },
  { city: 'Hillsboro', state: 'OH', slug: 'hillsboro-oh', region: 'Highland County' },
  { city: 'Georgetown', state: 'OH', slug: 'georgetown-oh', region: 'Brown County' },
  { city: 'Amelia', state: 'OH', slug: 'amelia-oh', region: 'Clermont County' },
  { city: 'New Richmond', state: 'OH', slug: 'new-richmond-oh', region: 'Clermont County' },
  { city: 'Harrison', state: 'OH', slug: 'harrison-oh', region: 'Hamilton County' },
  { city: 'Florence', state: 'KY', slug: 'florence-ky', region: 'Northern Kentucky' },
  { city: 'Covington', state: 'KY', slug: 'covington-ky', region: 'Northern Kentucky' },
  { city: 'Independence', state: 'KY', slug: 'independence-ky', region: 'Northern Kentucky' },
  { city: 'Burlington', state: 'KY', slug: 'burlington-ky', region: 'Northern Kentucky' },
  { city: 'Lawrenceburg', state: 'IN', slug: 'lawrenceburg-in', region: 'Southeast Indiana' },
  { city: 'Aurora', state: 'IN', slug: 'aurora-in', region: 'Southeast Indiana' },
  { city: 'Batesville', state: 'IN', slug: 'batesville-in', region: 'Southeast Indiana' },
];

const SERVICES = [
  { slug: 'excavation', name: 'Excavation', type: 'residential' },
  { slug: 'grading', name: 'Grading & Earthwork', type: 'residential' },
  { slug: 'drainage', name: 'Drainage Solutions', type: 'residential' },
  { slug: 'driveways', name: 'Driveway Construction', type: 'residential' },
  { slug: 'retaining-walls', name: 'Retaining Walls', type: 'residential' },
  { slug: 'land-clearing', name: 'Land Clearing', type: 'residential' },
  { slug: 'demolition', name: 'Demolition', type: 'residential' },
  { slug: 'concrete-removal', name: 'Concrete Removal', type: 'residential' },
  { slug: 'septic', name: 'Septic System Installation', type: 'residential' },
  { slug: 'foundation', name: 'Foundation Work', type: 'residential' },
  { slug: 'pool-removal', name: 'Pool Removal', type: 'residential' },
  { slug: 'stump-removal', name: 'Stump Removal', type: 'residential' },
  { slug: 'lot-prep', name: 'Lot Preparation', type: 'residential' },
  { slug: 'pond', name: 'Pond Construction', type: 'residential' },
];

const COST_PAGES = [
  { slug: 'excavation-cost', title: 'Excavation Cost', keyword: 'excavation cost per cubic yard' },
  { slug: 'french-drain-cost', title: 'French Drain Installation Cost', keyword: 'french drain installation cost' },
  { slug: 'grading-cost-per-acre', title: 'Land Grading Cost Per Acre', keyword: 'grading cost per acre' },
  { slug: 'septic-system-cost', title: 'Septic System Installation Cost', keyword: 'septic system installation cost' },
  { slug: 'driveway-excavation-cost', title: 'Driveway Excavation Cost', keyword: 'driveway excavation cost' },
  { slug: 'land-grading-cost', title: 'Land Grading Cost Per Square Foot', keyword: 'land grading cost per square foot' },
  { slug: 'demolition-cost', title: 'Demolition Cost Per Square Foot', keyword: 'demolition cost per square foot' },
  { slug: 'retaining-wall-cost', title: 'Retaining Wall Cost', keyword: 'retaining wall cost per linear foot' },
  { slug: 'concrete-removal-cost', title: 'Concrete Removal Cost', keyword: 'concrete removal cost per square foot' },
  { slug: 'pool-removal-cost', title: 'Pool Removal Cost', keyword: 'pool removal cost' },
  { slug: 'stump-removal-cost', title: 'Stump Removal Cost', keyword: 'stump removal cost per stump' },
  { slug: 'pond-excavation-cost', title: 'Pond Excavation Cost', keyword: 'pond excavation cost per acre' },
  { slug: 'basement-excavation-cost', title: 'Basement Excavation Cost', keyword: 'basement excavation cost' },
  { slug: 'trenching-cost', title: 'Trenching Cost Per Foot', keyword: 'trenching cost per linear foot' },
  { slug: 'site-prep-cost', title: 'Site Preparation Cost', keyword: 'site preparation cost for new home' },
  { slug: 'erosion-control-cost', title: 'Erosion Control Cost', keyword: 'erosion control cost' },
];

const PROBLEM_PAGES = [
  { slug: 'yard-flooding-after-rain', title: 'Yard Flooding After Rain', problem: 'yard floods every time it rains' },
  { slug: 'standing-water-in-backyard', title: 'Standing Water in Backyard', problem: 'standing water that won\'t drain in backyard' },
  { slug: 'driveway-sinking-cracking', title: 'Driveway Sinking and Cracking', problem: 'driveway is sinking, cracking, or washing out' },
  { slug: 'septic-system-failing', title: 'Septic System Failing or Backing Up', problem: 'septic system is backing up or failing' },
  { slug: 'basement-water-leaking', title: 'Basement Leaking Water', problem: 'basement leaks water during rain' },
  { slug: 'neighbor-runoff-flooding', title: 'Neighbor\'s Runoff Flooding My Yard', problem: 'neighbor\'s property runoff is flooding my yard' },
  { slug: 'how-to-level-sloped-yard', title: 'How to Level a Sloped Yard', problem: 'yard is too sloped to use and needs leveling' },
  { slug: 'foundation-settling-cracks', title: 'Foundation Settling and Cracking', problem: 'foundation is settling with visible cracks' },
  { slug: 'muddy-yard-wont-drain', title: 'Muddy Yard That Won\'t Drain', problem: 'yard is constantly muddy and soggy' },
  { slug: 'erosion-washing-away-yard', title: 'Erosion Washing Away My Yard', problem: 'erosion is washing away soil in the yard' },
  { slug: 'tree-roots-damaging-foundation', title: 'Tree Roots Damaging Foundation', problem: 'tree roots are pushing against or damaging foundation' },
  { slug: 'old-concrete-patio-crumbling', title: 'Old Concrete Patio Crumbling', problem: 'concrete patio is crumbling and needs removal' },
  { slug: 'overgrown-property-cleanup', title: 'Overgrown Property Cleanup', problem: 'inherited or bought an overgrown property that needs complete cleanup' },
  { slug: 'pool-i-dont-want', title: 'Removing a Pool I Don\'t Want', problem: 'have an old pool I want removed and filled in' },
  { slug: 'cant-build-on-sloped-lot', title: 'Can\'t Build on Sloped Lot', problem: 'want to build on a sloped lot but need it leveled first' },
  { slug: 'water-pooling-near-foundation', title: 'Water Pooling Near Foundation', problem: 'water pools around the foundation of the house' },
  { slug: 'driveway-too-steep', title: 'Driveway is Too Steep', problem: 'driveway is dangerously steep and needs regrading' },
  { slug: 'need-retaining-wall', title: 'Hillside Needs a Retaining Wall', problem: 'hillside is eroding and needs a retaining wall' },
];

const GUIDE_PAGES = [
  { slug: 'building-house-site-prep', title: 'Building a House: Complete Site Prep Checklist', topic: 'preparing a site for new home construction' },
  { slug: 'adding-pool-excavation', title: 'Adding a Pool: Excavation Guide', topic: 'what to expect when excavating for a new pool' },
  { slug: 'building-retaining-wall', title: 'Retaining Wall Guide: What to Know', topic: 'planning and building a retaining wall' },
  { slug: 'installing-driveway-on-hill', title: 'Installing a Driveway on a Hill', topic: 'building a driveway on sloped or hilly terrain' },
  { slug: 'waterproofing-basement', title: 'Basement Waterproofing Guide', topic: 'exterior waterproofing and drainage solutions for basements' },
  { slug: 'building-pond-property', title: 'How to Build a Pond on Your Property', topic: 'planning and excavating a pond' },
  { slug: 'septic-to-sewer-conversion', title: 'Septic to Sewer Conversion Guide', topic: 'converting from septic system to municipal sewer' },
  { slug: 'french-drain-installation', title: 'French Drain Installation Guide', topic: 'planning, installing, and maintaining a French drain system' },
  { slug: 'new-construction-excavation', title: 'New Construction Excavation: What to Expect', topic: 'the full excavation process for new construction' },
  { slug: 'land-clearing-before-building', title: 'Land Clearing Before Building: Complete Guide', topic: 'clearing land for residential or commercial construction' },
  { slug: 'ohio-excavation-permits', title: 'Ohio Excavation Permit Requirements', topic: 'permits required for excavation work in Ohio' },
  { slug: 'kentucky-grading-permits', title: 'Kentucky Grading & Excavation Permits', topic: 'permit requirements for grading and excavation in Kentucky' },
  { slug: 'cincinnati-building-permits', title: 'Cincinnati Building Permit Guide', topic: 'navigating the building permit process in Cincinnati' },
  { slug: 'ohio-septic-regulations', title: 'Ohio Septic System Regulations', topic: 'septic system installation and maintenance regulations in Ohio' },
  { slug: 'erosion-control-requirements', title: 'Erosion Control Requirements: Hamilton County', topic: 'erosion and sediment control requirements for construction in Hamilton County OH' },
];

const COMPARISON_PAGES = [
  { slug: 'french-drain-vs-catch-basin', title: 'French Drain vs Catch Basin', optionA: 'French drain', optionB: 'catch basin' },
  { slug: 'concrete-vs-asphalt-driveway', title: 'Concrete vs Asphalt Driveway', optionA: 'concrete driveway', optionB: 'asphalt driveway' },
  { slug: 'septic-vs-sewer', title: 'Septic vs Sewer: Pros and Cons', optionA: 'septic system', optionB: 'municipal sewer connection' },
  { slug: 'retaining-wall-types', title: 'Retaining Wall Types Compared', optionA: 'different retaining wall types (concrete block, poured, timber, natural stone, gabion)' , optionB: '' },
  { slug: 'diy-grading-vs-professional', title: 'DIY Grading vs Hiring a Professional', optionA: 'DIY grading', optionB: 'hiring a professional grading contractor' },
  { slug: 'partial-vs-full-pool-removal', title: 'Partial vs Full Pool Removal', optionA: 'partial pool removal (fill-in)', optionB: 'full pool removal (complete excavation)' },
  { slug: 'mini-excavator-vs-full-size', title: 'Mini Excavator vs Full-Size: Which Do You Need?', optionA: 'mini excavator', optionB: 'full-size excavator' },
  { slug: 'gravel-vs-paved-driveway', title: 'Gravel vs Paved Driveway', optionA: 'gravel driveway', optionB: 'paved (concrete or asphalt) driveway' },
  { slug: 'sump-pump-vs-french-drain', title: 'Sump Pump vs French Drain', optionA: 'sump pump system', optionB: 'exterior French drain' },
  { slug: 'clearing-mulching-vs-bulldozing', title: 'Forestry Mulching vs Bulldozing for Land Clearing', optionA: 'forestry mulching', optionB: 'traditional bulldozing' },
];

// ═══════════════════════════════════════════════════════════════
// SCHEMAS
// ═══════════════════════════════════════════════════════════════

const LOCATION_SCHEMA = {
  type: "OBJECT",
  properties: {
    city: { type: "STRING" }, state: { type: "STRING" }, service: { type: "STRING" },
    slug: { type: "STRING" },
    metaTitle: { type: "STRING", description: "SEO title 50-60 chars. '{Service} in {City}, {State} | Liteworks Co.'" },
    metaDescription: { type: "STRING", description: "150-160 chars" },
    h1: { type: "STRING" },
    heroText: { type: "STRING", description: "2-3 sentences mentioning the city and service" },
    localContext: {
      type: "OBJECT",
      properties: {
        terrain: { type: "STRING" },
        soilConditions: { type: "STRING", description: "Typical soil types in this area (clay, limestone, shale, etc.)" },
        commonProjects: { type: "ARRAY", items: { type: "STRING" }, description: "5-6 common project types in this area" },
        seasonalNotes: { type: "STRING" },
        localRegulations: { type: "STRING" }
      },
      required: ["terrain", "soilConditions", "commonProjects", "seasonalNotes", "localRegulations"]
    },
    benefits: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { title: { type: "STRING" }, description: { type: "STRING" } }, required: ["title", "description"] },
      description: "5 benefits"
    },
    process: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { step: { type: "STRING" }, description: { type: "STRING" } }, required: ["step", "description"] },
      description: "4-5 process steps"
    },
    pricingInfo: {
      type: "OBJECT",
      properties: {
        startingAt: { type: "STRING" }, averageRange: { type: "STRING" },
        factors: { type: "ARRAY", items: { type: "STRING" } },
        note: { type: "STRING" }
      },
      required: ["startingAt", "averageRange", "factors", "note"]
    },
    faqs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { question: { type: "STRING" }, answer: { type: "STRING" } }, required: ["question", "answer"] },
      description: "5-6 FAQs"
    },
    nearbyAreas: { type: "ARRAY", items: { type: "STRING" }, description: "4-6 nearby city slugs" }
  },
  required: ["city", "state", "service", "slug", "metaTitle", "metaDescription", "h1", "heroText", "localContext", "benefits", "process", "pricingInfo", "faqs", "nearbyAreas"]
};

const COST_SCHEMA = {
  type: "OBJECT",
  properties: {
    slug: { type: "STRING" }, title: { type: "STRING" },
    metaTitle: { type: "STRING" }, metaDescription: { type: "STRING" },
    h1: { type: "STRING" }, intro: { type: "STRING", description: "3-4 sentence intro" },
    costBreakdown: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          category: { type: "STRING" },
          lowEnd: { type: "STRING" }, average: { type: "STRING" }, highEnd: { type: "STRING" },
          unit: { type: "STRING", description: "e.g. 'per cubic yard', 'per linear foot', 'per project'" },
          notes: { type: "STRING" }
        },
        required: ["category", "lowEnd", "average", "highEnd", "unit", "notes"]
      },
      description: "4-6 cost categories"
    },
    factorsAffectingCost: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { factor: { type: "STRING" }, explanation: { type: "STRING" } }, required: ["factor", "explanation"] },
      description: "6-8 factors"
    },
    savingTips: { type: "ARRAY", items: { type: "STRING" }, description: "5-6 money-saving tips" },
    faqs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { question: { type: "STRING" }, answer: { type: "STRING" } }, required: ["question", "answer"] },
      description: "5-6 cost-related FAQs"
    },
    relatedServices: { type: "ARRAY", items: { type: "STRING" }, description: "3-4 related service slugs" }
  },
  required: ["slug", "title", "metaTitle", "metaDescription", "h1", "intro", "costBreakdown", "factorsAffectingCost", "savingTips", "faqs", "relatedServices"]
};

const PROBLEM_SCHEMA = {
  type: "OBJECT",
  properties: {
    slug: { type: "STRING" }, title: { type: "STRING" },
    metaTitle: { type: "STRING" }, metaDescription: { type: "STRING" },
    h1: { type: "STRING" },
    problemDescription: { type: "STRING", description: "3-4 sentences describing the problem from the homeowner's perspective" },
    causes: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { cause: { type: "STRING" }, explanation: { type: "STRING" } }, required: ["cause", "explanation"] },
      description: "4-6 common causes"
    },
    solutions: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          solution: { type: "STRING" }, description: { type: "STRING" },
          estimatedCost: { type: "STRING" }, timeline: { type: "STRING" },
          effectiveness: { type: "STRING", description: "e.g. 'Permanent fix', 'Temporary', 'Long-term'" }
        },
        required: ["solution", "description", "estimatedCost", "timeline", "effectiveness"]
      },
      description: "3-5 solutions from DIY to professional"
    },
    warningSignsToActNow: { type: "ARRAY", items: { type: "STRING" }, description: "4-5 red flags that mean act NOW" },
    preventionTips: { type: "ARRAY", items: { type: "STRING" }, description: "4-5 prevention tips" },
    faqs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { question: { type: "STRING" }, answer: { type: "STRING" } }, required: ["question", "answer"] },
      description: "5-6 FAQs"
    }
  },
  required: ["slug", "title", "metaTitle", "metaDescription", "h1", "problemDescription", "causes", "solutions", "warningSignsToActNow", "preventionTips", "faqs"]
};

const GUIDE_SCHEMA = {
  type: "OBJECT",
  properties: {
    slug: { type: "STRING" }, title: { type: "STRING" },
    metaTitle: { type: "STRING" }, metaDescription: { type: "STRING" },
    h1: { type: "STRING" },
    intro: { type: "STRING", description: "3-4 sentence intro" },
    sections: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          heading: { type: "STRING" },
          content: { type: "STRING", description: "2-4 paragraphs" },
          tips: { type: "ARRAY", items: { type: "STRING" }, description: "2-3 tips per section" }
        },
        required: ["heading", "content", "tips"]
      },
      description: "5-7 detailed sections"
    },
    checklist: { type: "ARRAY", items: { type: "STRING" }, description: "8-12 checklist items" },
    estimatedCosts: {
      type: "OBJECT",
      properties: { low: { type: "STRING" }, average: { type: "STRING" }, high: { type: "STRING" }, note: { type: "STRING" } },
      required: ["low", "average", "high", "note"]
    },
    faqs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { question: { type: "STRING" }, answer: { type: "STRING" } }, required: ["question", "answer"] },
      description: "5-6 FAQs"
    }
  },
  required: ["slug", "title", "metaTitle", "metaDescription", "h1", "intro", "sections", "checklist", "estimatedCosts", "faqs"]
};

const COMPARISON_SCHEMA = {
  type: "OBJECT",
  properties: {
    slug: { type: "STRING" }, title: { type: "STRING" },
    metaTitle: { type: "STRING" }, metaDescription: { type: "STRING" },
    h1: { type: "STRING" },
    intro: { type: "STRING", description: "2-3 sentence intro" },
    optionA: {
      type: "OBJECT",
      properties: {
        name: { type: "STRING" }, description: { type: "STRING" },
        pros: { type: "ARRAY", items: { type: "STRING" } },
        cons: { type: "ARRAY", items: { type: "STRING" } },
        costRange: { type: "STRING" }, bestFor: { type: "STRING" }
      },
      required: ["name", "description", "pros", "cons", "costRange", "bestFor"]
    },
    optionB: {
      type: "OBJECT",
      properties: {
        name: { type: "STRING" }, description: { type: "STRING" },
        pros: { type: "ARRAY", items: { type: "STRING" } },
        cons: { type: "ARRAY", items: { type: "STRING" } },
        costRange: { type: "STRING" }, bestFor: { type: "STRING" }
      },
      required: ["name", "description", "pros", "cons", "costRange", "bestFor"]
    },
    comparisonTable: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: { factor: { type: "STRING" }, optionAValue: { type: "STRING" }, optionBValue: { type: "STRING" } },
        required: ["factor", "optionAValue", "optionBValue"]
      },
      description: "6-8 comparison factors"
    },
    verdict: { type: "STRING", description: "2-3 sentences — opinionated recommendation" },
    faqs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { question: { type: "STRING" }, answer: { type: "STRING" } }, required: ["question", "answer"] },
      description: "4-5 FAQs"
    }
  },
  required: ["slug", "title", "metaTitle", "metaDescription", "h1", "intro", "optionA", "optionB", "comparisonTable", "verdict", "faqs"]
};

// ═══════════════════════════════════════════════════════════════
// GENERATION ENGINE
// ═══════════════════════════════════════════════════════════════

async function callGemini(prompt, schema) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json", responseSchema: schema, temperature: 0.7 }
    })
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Empty response');
  return JSON.parse(text);
}

async function generateBatch(items, outputDir, promptFn, schema, label) {
  fs.mkdirSync(outputDir, { recursive: true });
  let success = 0, failed = 0;
  
  for (const item of items) {
    const slug = typeof item === 'string' ? item : (item.slug || item.outSlug);
    const outPath = path.join(outputDir, `${slug}.json`);
    
    if (fs.existsSync(outPath) && !process.argv.includes('--force')) {
      process.stdout.write(`⏭️  ${label}: ${slug} — exists\n`);
      success++;
      continue;
    }
    
    try {
      process.stdout.write(`⚙️  ${label}: ${slug}...`);
      const start = Date.now();
      const content = await callGemini(promptFn(item), schema);
      content._generated = new Date().toISOString();
      content._model = MODEL;
      fs.writeFileSync(outPath, JSON.stringify(content, null, 2));
      console.log(` ✅ (${((Date.now() - start) / 1000).toFixed(1)}s)`);
      success++;
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      console.log(` ❌ ${err.message}`);
      failed++;
    }
  }
  return { success, failed };
}

// ═══════════════════════════════════════════════════════════════
// PROMPTS
// ═══════════════════════════════════════════════════════════════

function locationPrompt(item) {
  return `You are an excavation and sitework expert serving ${item.city.city}, ${item.city.state} (${item.city.region}). Generate a "${item.service.name}" service page for Liteworks Co.

BUSINESS: Liteworks Co. — excavation & sitework company in Loveland, Ohio. Phone: (513) 927-9675. Services: excavation, grading, drainage, driveways, retaining walls, land clearing, demolition, septic, foundation work.

Be SPECIFIC to ${item.city.city}, ${item.city.state}. Mention local geography, soil conditions, neighborhoods. Pricing should reflect real ${item.city.region} market rates.
Slug: "${item.service.slug}-${item.city.slug}"
Nearby slugs: ${CITIES.filter(c => c.slug !== item.city.slug).slice(0, 8).map(c => c.slug).join(', ')}`;
}

function costPrompt(item) {
  return `You are an excavation cost estimator for the Greater Cincinnati / Northern Kentucky area (2025-2026 market rates). Generate a comprehensive cost guide for: "${item.title}".

Target keyword: "${item.keyword}"
Business: Liteworks Co., Loveland, OH. Phone: (513) 927-9675.
Include realistic costs by project size. Reference Ohio/Kentucky/Indiana market rates. Slug: "${item.slug}"
Related services: excavation, grading, drainage, driveways, retaining-walls, land-clearing, demolition, septic, foundation, pool-removal, stump-removal, pond`;
}

function problemPrompt(item) {
  return `You are a homeowner-focused excavation expert. A homeowner's problem: "${item.problem}". Generate a comprehensive problem/solution page.

Business: Liteworks Co., Loveland, OH. Phone: (513) 927-9675. Serves Greater Cincinnati, Northern KY, SE Indiana.
Write from the homeowner's perspective — they're frustrated and searching for help. Solutions should range from DIY to professional. Be honest about when they need a pro. Slug: "${item.slug}"`;
}

function guidePrompt(item) {
  return `You are an excavation and construction expert writing a detailed guide about: "${item.topic}".

Business: Liteworks Co., Loveland, OH. Phone: (513) 927-9675. Greater Cincinnati area.
Write for homeowners who are planning a project. Be thorough but accessible. Include costs, timelines, permits, and practical advice specific to Ohio/Kentucky. Slug: "${item.slug}"`;
}

function comparisonPrompt(item) {
  return `You are an excavation expert comparing: ${item.optionA} vs ${item.optionB}. Generate an honest, opinionated comparison.

Business: Liteworks Co., Loveland, OH. Phone: (513) 927-9675. Greater Cincinnati area.
Be genuinely helpful — give a real verdict, not "it depends." Include costs for the Cincinnati/Ohio market. Slug: "${item.slug}"`;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

async function main() {
  const mode = process.argv[2] || 'all';
  console.log(`\n🏗️  Liteworks pSEO Generator — Mode: ${mode}\n`);
  
  let totalSuccess = 0, totalFailed = 0;

  // 1. Location pages
  if (mode === 'all' || mode === 'locations') {
    const locationItems = [];
    for (const city of CITIES) {
      for (const service of SERVICES) {
        locationItems.push({ city, service, slug: `${service.slug}-${city.slug}`, outSlug: `${service.slug}-${city.slug}` });
      }
    }
    console.log(`\n📍 Location Pages: ${locationItems.length}`);
    const r = await generateBatch(locationItems, path.join(BASE_OUTPUT, 'locations'), locationPrompt, LOCATION_SCHEMA, 'Location');
    totalSuccess += r.success; totalFailed += r.failed;
  }

  // 2. Cost pages
  if (mode === 'all' || mode === 'cost') {
    console.log(`\n💰 Cost Pages: ${COST_PAGES.length}`);
    const r = await generateBatch(COST_PAGES, path.join(BASE_OUTPUT, 'cost-pages'), costPrompt, COST_SCHEMA, 'Cost');
    totalSuccess += r.success; totalFailed += r.failed;
  }

  // 3. Problem pages
  if (mode === 'all' || mode === 'problems') {
    console.log(`\n🔧 Problem Pages: ${PROBLEM_PAGES.length}`);
    const r = await generateBatch(PROBLEM_PAGES, path.join(BASE_OUTPUT, 'problem-pages'), problemPrompt, PROBLEM_SCHEMA, 'Problem');
    totalSuccess += r.success; totalFailed += r.failed;
  }

  // 4. Guide pages
  if (mode === 'all' || mode === 'guides') {
    console.log(`\n📖 Guide Pages: ${GUIDE_PAGES.length}`);
    const r = await generateBatch(GUIDE_PAGES, path.join(BASE_OUTPUT, 'guides'), guidePrompt, GUIDE_SCHEMA, 'Guide');
    totalSuccess += r.success; totalFailed += r.failed;
  }

  // 5. Comparison pages
  if (mode === 'all' || mode === 'comparisons') {
    console.log(`\n⚖️  Comparison Pages: ${COMPARISON_PAGES.length}`);
    const r = await generateBatch(COMPARISON_PAGES, path.join(BASE_OUTPUT, 'comparisons'), comparisonPrompt, COMPARISON_SCHEMA, 'Compare');
    totalSuccess += r.success; totalFailed += r.failed;
  }

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 TOTAL: ${totalSuccess} generated, ${totalFailed} failed`);
  console.log(`${'═'.repeat(50)}\n`);
}

main();
