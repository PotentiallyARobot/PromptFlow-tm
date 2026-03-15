/*
  PromptFlow™ — Downloadable computer software featuring a programming
  language for prompting neural networks; computer software files in the 
  nature of downloadable electronic data files featuring programming data 
  in the field of AI. USPTO Classes 009, 042. Notice of Allowance issued.
*/

// ─── DATA ─────────────────────────────────────────────────────────────

const MODELS = {
  "gpt-5.2": { name: "GPT-5.2", color: "#10A37F", short: "GPT-5.2" },
  "claude-opus-4.6": { name: "Claude Opus 4.6", color: "#D97706", short: "Opus 4.6" },
  "gemini-ultra-2": { name: "Gemini Ultra 2", color: "#4285F4", short: "Gemini U2" },
  "llama-4-405b": { name: "Llama 4 405B", color: "#7C3AED", short: "Llama 4" },
  "mistral-large-3": { name: "Mistral Large 3", color: "#F97316", short: "Mistral L3" },
  "deepseek-r2": { name: "DeepSeek R2", color: "#06B6D4", short: "DS-R2" },
};

const TOOLS = {
  web_search: { name: "Web Search", icon: "🔍" },
  email_send: { name: "Email (Send)", icon: "📧" },
  email_read: { name: "Email (Read)", icon: "📨" },
  voice_call: { name: "AI Voice Call", icon: "📞" },
  tts: { name: "Text-to-Speech", icon: "🔊" },
  stt: { name: "Speech-to-Text", icon: "🎙️" },
  pdf_gen: { name: "PDF Generator", icon: "📄" },
  browser_agent: { name: "Browser Agent", icon: "🌐" },
  calendar_api: { name: "Calendar API", icon: "📅" },
  spreadsheet: { name: "Spreadsheet Engine", icon: "📊" },
  file_io: { name: "File I/O", icon: "📁" },
  code_exec: { name: "Code Sandbox", icon: "⚙️" },
  id_verify: { name: "ID Verification", icon: "🪪" },
  notary_api: { name: "Digital Notary", icon: "📜" },
  payment_api: { name: "Payment Processing", icon: "💳" },
  geo_maps: { name: "Geolocation / Maps", icon: "🗺️" },
  ocr: { name: "OCR / Vision", icon: "👁️" },
  database: { name: "Database Query", icon: "🗄️" },
  mcp: { name: "MCP Protocol", icon: "🔗" },
  esign: { name: "E-Signature", icon: "✍️" },
  gov_portal: { name: "Gov Portal Agent", icon: "🏛️" },
  shipping_api: { name: "Shipping / Tracking", icon: "📦" },
  image_gen: { name: "Image Generation", icon: "🎨" },
  video_gen: { name: "Video Generation", icon: "🎬" },
  crm_api: { name: "CRM Integration", icon: "👥" },
};

const PROGRAMS = [
  {
    id: "insurance-denial-appeal",
    title: "Insurance Claim Denial — Full Appeal",
    desc: "This PromptFlow™ software file researches your state's insurance appeal regulations and relevant case law, analyzes your specific denial reason against policy language, identifies procedural violations by the insurer, drafts a multi-page formal appeal with legal citations, and prepares a parallel complaint to your state insurance commissioner as leverage.",
    category: "Insurance & Legal", price: 0, runCost: "$0.11", rating: 4.9, reviews: 11420, downloads: 187000, confidence: 93, steps: 28, estTime: "5 min",
    tags: ["insurance", "denial", "appeal", "health insurance", "claim"], featured: true,
    models: ["claude-opus-4.6", "gpt-5.2"], tools: ["web_search", "pdf_gen", "ocr"], mcpServers: ["legal-research-mcp"],
    inputs: [
      { id: "provider", label: "Insurance Company", placeholder: "e.g. Anthem Blue Cross" },
      { id: "claim_id", label: "Claim / Reference Number", placeholder: "e.g. CLM-2026-00482" },
      { id: "denial_reason", label: "Denial Reason (exact wording from letter)", placeholder: "e.g. 'The requested service is not medically necessary based on clinical guidelines'" },
      { id: "procedure", label: "Procedure / Service Denied", placeholder: "e.g. Lumbar MRI (CPT 72148)" },
      { id: "state", label: "State", placeholder: "e.g. California" },
      { id: "doctor", label: "Ordering Physician", placeholder: "e.g. Dr. Sarah Chen, Neurology" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Research {state} insurance appeal process, deadlines, and patient rights" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Find {state} insurance commissioner complaints re: {provider} denial patterns" },
      { n: 3, act: "search", model: "gpt-5.2", d: "Look up clinical guidelines supporting medical necessity of {procedure}" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Analyze denial reason against {state} insurance code — identify procedural violations" },
      { n: 5, act: "llm", model: "claude-opus-4.6", d: "Build medical necessity argument citing clinical evidence and treatment guidelines" },
      { n: 6, act: "llm", model: "gpt-5.2", d: "Draft formal internal appeal letter with legal citations and regulatory references" },
      { n: 7, act: "llm", model: "claude-opus-4.6", d: "Draft parallel state insurance commissioner complaint as leverage" },
      { n: 8, act: "tool", tool: "pdf_gen", d: "Generate appeal package: letter, complaint form, evidence checklist, timeline" },
    ],
  },
  {
    id: "medical-debt-eliminator",
    title: "Medical Debt Elimination System",
    desc: "A comprehensive PromptFlow™ software file that audits medical bills for CPT/ICD-10 coding errors (found in ~40% of bills), cross-references fair market pricing, identifies eligible financial assistance programs at your specific hospital, drafts dispute letters, and generates phone negotiation scripts with real-time coaching audio.",
    category: "Healthcare & Finance", price: 0, runCost: "$0.14", rating: 4.9, reviews: 8341, downloads: 142000, confidence: 94, steps: 46, estTime: "8 min",
    tags: ["medical bills", "debt", "healthcare", "coding errors"], featured: true,
    models: ["gpt-5.2", "claude-opus-4.6", "gemini-ultra-2"], tools: ["web_search", "ocr", "code_exec", "pdf_gen", "tts", "spreadsheet"], mcpServers: ["healthcare-pricing-mcp"],
    inputs: [
      { id: "bill_photo", label: "Upload Bill or Paste Itemized Charges", placeholder: "e.g. ER visit 99285: $4,200 / CT abdomen 74177: $3,800 / IV fluids: $890...", multi: true },
      { id: "hospital", label: "Hospital / Provider Name", placeholder: "e.g. Memorial Hermann - Texas Medical Center" },
      { id: "location", label: "City & State", placeholder: "e.g. Houston, TX" },
      { id: "insurance", label: "Insurance Details", placeholder: "e.g. United Healthcare PPO, patient responsibility after insurance" },
      { id: "household_income", label: "Household Income (for assistance programs)", placeholder: "e.g. ~$52,000/year, family of 3" },
    ],
    pipeline: [
      { n: 1, act: "llm", model: "gemini-ultra-2", d: "Parse and structure all line items, CPT/ICD-10 codes from bill" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Look up fair market price for each procedure code in {location}" },
      { n: 3, act: "search", model: "gpt-5.2", d: "Research {hospital} financial assistance / charity care policy" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Audit each line item: flag upcoding, unbundling, duplicate charges" },
      { n: 5, act: "tool", tool: "code_exec", d: "Calculate total overcharge estimate with confidence intervals" },
      { n: 6, act: "tool", tool: "spreadsheet", d: "Build line-by-line comparison: billed vs. fair price vs. Medicare rate" },
      { n: 7, act: "llm", model: "claude-opus-4.6", d: "Draft itemized dispute letter citing specific billing errors found" },
      { n: 8, act: "llm", model: "gpt-5.2", d: "Generate phone negotiation script with objection handlers" },
      { n: 9, act: "tool", tool: "tts", d: "Generate audio coaching walkthrough for the negotiation call" },
      { n: 10, act: "tool", tool: "pdf_gen", d: "Compile complete dispute package" },
    ],
  },
  {
    id: "llc-formation-engine",
    title: "Business Formation — LLC to Launch",
    desc: "A multi-day PromptFlow™ software file that automates LLC formation end-to-end: validates your business name, files articles of organization, obtains an EIN, drafts an operating agreement, builds a brand kit, deploys a landing page, and executes a 30-day launch marketing plan. Orchestrates 4 models and 14 tool integrations.",
    category: "Business Formation", price: 29.99, runCost: "$4.80", rating: 4.8, reviews: 1847, downloads: 12400, confidence: 86, steps: 924, estTime: "3–7 days",
    tags: ["LLC", "business", "startup", "formation", "EIN"], featured: true,
    models: ["claude-opus-4.6", "gpt-5.2", "gemini-ultra-2", "deepseek-r2"],
    tools: ["web_search", "browser_agent", "gov_portal", "email_send", "pdf_gen", "code_exec", "payment_api", "file_io", "image_gen", "spreadsheet", "geo_maps", "mcp", "database"],
    mcpServers: ["stripe-mcp", "vercel-deploy-mcp", "google-workspace-mcp", "legal-templates-mcp"],
    inputs: [
      { id: "business_name", label: "Proposed Business Name", placeholder: "e.g. Evergreen Dog Grooming" },
      { id: "business_type", label: "What the Business Does", placeholder: "e.g. Mobile dog grooming service", multi: true },
      { id: "state", label: "State of Formation", placeholder: "e.g. Texas" },
      { id: "owner_name", label: "Owner Full Legal Name", placeholder: "e.g. Maria Elena Rodriguez" },
      { id: "budget", label: "Startup Budget", placeholder: "e.g. $8,000" },
      { id: "target_market", label: "Target Location & Customers", placeholder: "e.g. Austin metro area, dog owners in suburbs" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Check {business_name} availability in {state} Secretary of State database" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Research {state} LLC formation requirements, fees, annual obligations" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Validate business concept viability in {target_market}" },
      { n: 4, act: "llm", model: "deepseek-r2", d: "Generate 3-year financial projection with break-even analysis" },
      { n: 5, act: "llm", model: "claude-opus-4.6", d: "Draft comprehensive 40-page business plan" },
      { n: 6, act: "tool", tool: "browser_agent", d: "File Articles of Organization with {state} Secretary of State" },
      { n: 7, act: "tool", tool: "gov_portal", d: "Apply for EIN via IRS SS-4 online portal" },
      { n: 8, act: "llm", model: "claude-opus-4.6", d: "Draft LLC operating agreement per {state} law" },
      { n: 9, act: "llm", model: "gemini-ultra-2", d: "Generate brand identity: logo, palette, typography, voice" },
      { n: 10, act: "tool", tool: "code_exec", d: "Build and deploy landing page via Vercel MCP" },
      { n: 11, act: "llm", model: "gpt-5.2", d: "Create 30-day launch marketing plan" },
      { n: 12, act: "tool", tool: "email_send", d: "Send owner confirmation with all documents" },
    ],
  },
  {
    id: "first-home-buyer",
    title: "First Home Purchase — Complete Guidance",
    desc: "This PromptFlow™ software file runs continuously over weeks, guiding first-time buyers from pre-approval through closing. Compares mortgage rates from 12+ lenders daily, scores neighborhoods on 23 factors, monitors listing feeds for matches, generates offer strategy, and manages the entire timeline.",
    category: "Real Estate", price: 14.99, runCost: "$3.20", rating: 4.7, reviews: 3891, downloads: 28700, confidence: 90, steps: 1340, estTime: "14–60 days",
    tags: ["home buying", "mortgage", "real estate", "first-time buyer"], featured: true,
    models: ["gpt-5.2", "claude-opus-4.6", "gemini-ultra-2"],
    tools: ["web_search", "browser_agent", "email_send", "email_read", "spreadsheet", "pdf_gen", "geo_maps", "calendar_api", "mcp", "id_verify"],
    mcpServers: ["zillow-mcp", "plaid-financial-mcp", "google-workspace-mcp"],
    inputs: [
      { id: "location", label: "Target Area", placeholder: "e.g. Portland, OR metro" },
      { id: "budget", label: "Budget Range", placeholder: "e.g. $380,000–$460,000" },
      { id: "preapproval", label: "Pre-approval Status", placeholder: "e.g. Pre-approved $440k through Wells Fargo at 6.1%" },
      { id: "needs", label: "Must-Haves", placeholder: "e.g. 3BR/2BA, garage, yard, under 25 min commute" },
      { id: "timeline", label: "Target Timeline", placeholder: "e.g. Within 4 months" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Pull current mortgage rates from 12 lenders for {location}" },
      { n: 2, act: "llm", model: "claude-opus-4.6", d: "Analyze pre-approval terms and recommend rate shopping" },
      { n: 3, act: "llm", model: "gemini-ultra-2", d: "Score {location} neighborhoods on schools, crime, commute, appreciation" },
      { n: 4, act: "tool", tool: "browser_agent", d: "Monitor Zillow/Redfin feeds — flag matching listings daily" },
      { n: 5, act: "tool", tool: "spreadsheet", d: "Build comparison matrix of top properties" },
      { n: 6, act: "llm", model: "claude-opus-4.6", d: "Generate offer strategy with escalation clauses" },
      { n: 7, act: "llm", model: "gpt-5.2", d: "Create home inspection checklist for {location} climate" },
      { n: 8, act: "tool", tool: "pdf_gen", d: "Compile buyer's guide with all analysis and checklists" },
    ],
  },
  {
    id: "immigration-eb2-niw",
    title: "Immigration — EB-2 NIW Green Card",
    desc: "The most complex file in the PromptFlow™ software marketplace. Orchestrates 5 models to prepare an EB-2 National Interest Waiver petition: Dhanasar three-prong test arguments, I-140 petition letter, reference letter drafts, and complete USCIS filing package. Includes AI mock interview preparation.",
    category: "Immigration", price: 49.99, runCost: "$9.40", rating: 4.6, reviews: 876, downloads: 5200, confidence: 78, steps: 2000, estTime: "7–21 days",
    tags: ["green card", "EB-2", "NIW", "immigration", "USCIS"],
    models: ["claude-opus-4.6", "gpt-5.2", "gemini-ultra-2", "deepseek-r2", "llama-4-405b"],
    tools: ["web_search", "browser_agent", "pdf_gen", "ocr", "email_send", "code_exec", "database", "file_io", "tts", "gov_portal", "id_verify"],
    mcpServers: ["uscis-tracker-mcp", "google-scholar-mcp", "legal-research-mcp"],
    inputs: [
      { id: "field", label: "Professional Field", placeholder: "e.g. Machine Learning / Computer Science" },
      { id: "qualifications", label: "Key Qualifications", placeholder: "e.g. PhD from Stanford, 15 publications, 890 citations", multi: true },
      { id: "proposed_endeavor", label: "Proposed Endeavor in the US", placeholder: "e.g. Developing energy-efficient AI training methods", multi: true },
      { id: "current_status", label: "Current Immigration Status", placeholder: "e.g. H-1B with Google, valid through Oct 2027" },
      { id: "country_of_birth", label: "Country of Birth", placeholder: "e.g. India" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Research EB-2 NIW processing times and approval trends for {country_of_birth}" },
      { n: 2, act: "tool", tool: "browser_agent", d: "Pull citation metrics and h-index from Google Scholar" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Analyze qualifications against Dhanasar three-prong test" },
      { n: 4, act: "llm", model: "deepseek-r2", d: "Quantitative analysis: citation impact, field percentile ranking" },
      { n: 5, act: "llm", model: "claude-opus-4.6", d: "Draft I-140 petition letter (30+ pages)" },
      { n: 6, act: "llm", model: "gpt-5.2", d: "Draft 6 reference letters from different perspectives" },
      { n: 7, act: "llm", model: "llama-4-405b", d: "Adversarial review: identify weaknesses, strengthen arguments" },
      { n: 8, act: "tool", tool: "tts", d: "Generate AI mock interview for USCIS preparation" },
      { n: 9, act: "tool", tool: "pdf_gen", d: "Compile complete I-140 filing package" },
    ],
  },
  {
    id: "salary-counter-offer",
    title: "Salary Negotiation — Data-Driven Counter",
    desc: "This PromptFlow™ software file pulls compensation data from 6 sources, calculates your market percentile, builds a counter-offer rationale, and generates a complete toolkit: counter email, pushback response, acceptance letter, and real-time coaching script for the phone call.",
    category: "Career & Compensation", price: 4.99, runCost: "$0.32", rating: 4.8, reviews: 5671, downloads: 78400, confidence: 93, steps: 34, estTime: "6 min",
    tags: ["salary", "negotiation", "job offer", "counter-offer"], featured: true,
    models: ["gpt-5.2", "claude-opus-4.6"], tools: ["web_search", "spreadsheet", "pdf_gen", "code_exec"], mcpServers: [],
    inputs: [
      { id: "role", label: "Job Title", placeholder: "e.g. Senior Product Manager" },
      { id: "company", label: "Company", placeholder: "e.g. Stripe" },
      { id: "location", label: "Location / Remote", placeholder: "e.g. San Francisco, CA" },
      { id: "offer", label: "Current Offer Details", placeholder: "e.g. $195k base, $50k/yr RSU, $30k signing", multi: true },
      { id: "experience", label: "Your Experience", placeholder: "e.g. 9 years PM, currently Meta L6" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Pull {role} comp data from Levels.fyi, Glassdoor, Blind" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Research {company}-specific comp structure and levels" },
      { n: 3, act: "tool", tool: "code_exec", d: "Calculate percentile placement: base, equity, TC" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Build data-driven counter-offer rationale" },
      { n: 5, act: "llm", model: "gpt-5.2", d: "Draft counter-offer email" },
      { n: 6, act: "llm", model: "claude-opus-4.6", d: "Draft pushback response email" },
      { n: 7, act: "llm", model: "claude-opus-4.6", d: "Generate live negotiation coaching script" },
      { n: 8, act: "tool", tool: "pdf_gen", d: "Compile complete negotiation kit" },
    ],
  },
  {
    id: "tax-max-refund",
    title: "Tax Optimization — Maximum Legal Refund",
    desc: "This PromptFlow™ software file performs a deep audit of your tax situation across federal and state returns. Identifies missed deductions, runs tax-loss harvesting simulations, flags eligible credits, and generates a prioritized action list. Built for W-2, 1099, crypto, RSU, and rental income.",
    category: "Tax & Finance", price: 9.99, runCost: "$1.40", rating: 4.7, reviews: 6234, downloads: 89200, confidence: 91, steps: 168, estTime: "22 min",
    tags: ["tax", "deductions", "refund", "1099", "crypto"], featured: true,
    models: ["gpt-5.2", "claude-opus-4.6", "deepseek-r2"], tools: ["web_search", "code_exec", "spreadsheet", "pdf_gen", "ocr"], mcpServers: ["plaid-financial-mcp"],
    inputs: [
      { id: "employment", label: "Income Sources", placeholder: "e.g. W-2 salary $135k, freelance 1099 ~$28k, RSU vests ~$40k" },
      { id: "situation", label: "Key Details", placeholder: "e.g. Home office, student loans, crypto losses, new heat pump", multi: true },
      { id: "filing", label: "Filing Status", placeholder: "e.g. Married filing jointly, 2 dependents" },
      { id: "state", label: "State", placeholder: "e.g. California" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Research 2026 tax law changes and {state} deductions" },
      { n: 2, act: "llm", model: "claude-opus-4.6", d: "Identify all applicable deductions and credits" },
      { n: 3, act: "tool", tool: "code_exec", d: "Run standard vs. itemized comparison" },
      { n: 4, act: "llm", model: "deepseek-r2", d: "Simulate tax-loss harvesting scenarios" },
      { n: 5, act: "tool", tool: "spreadsheet", d: "Build deduction worksheet with savings per item" },
      { n: 6, act: "tool", tool: "pdf_gen", d: "Generate tax prep checklist for CPA" },
    ],
  },
  {
    id: "tenant-rights-enforcer",
    title: "Tenant Rights Enforcer",
    desc: "A free PromptFlow™ software file that fights back against bad landlords. Researches your jurisdiction's tenant protection laws, identifies violations, calculates penalty damages, and generates a demand letter that cites specific statutes. Covers security deposits, habitability, illegal entry, and retaliation.",
    category: "Housing & Tenant Rights", price: 0, runCost: "$0.07", rating: 4.9, reviews: 5890, downloads: 94300, confidence: 96, steps: 16, estTime: "3 min",
    tags: ["tenant", "landlord", "security deposit", "housing"],
    models: ["gpt-5.2", "claude-opus-4.6"], tools: ["web_search", "pdf_gen"], mcpServers: [],
    inputs: [
      { id: "issue", label: "Issue Type", placeholder: "e.g. Security deposit not returned after 40 days" },
      { id: "landlord", label: "Landlord / Management Company", placeholder: "e.g. Brookstone Property Management LLC" },
      { id: "jurisdiction", label: "City & State", placeholder: "e.g. Portland, OR" },
      { id: "details", label: "What Happened", placeholder: "e.g. Moved out March 1, left unit spotless, $2,400 deposit, no response", multi: true },
      { id: "desired", label: "What You Want", placeholder: "e.g. Full deposit refund plus statutory penalties" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Research {jurisdiction} tenant rights: {issue}" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Find {jurisdiction} small claims court process" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Analyze violations and calculate statutory penalties" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Draft formal demand letter citing specific code sections" },
      { n: 5, act: "tool", tool: "pdf_gen", d: "Generate demand letter + small claims filing guide" },
    ],
  },
  {
    id: "corporate-complaint-nuke",
    title: "Corporate Complaint — Nuclear Option",
    desc: "When customer service says no for the 4th time. This free PromptFlow™ software file identifies executive contacts, regulatory bodies, and complaint channels, then generates a synchronized multi-front campaign: executive email, BBB complaint, FTC complaint, state AG complaint, and social media posts. 91% resolution rate.",
    category: "Consumer Rights", price: 0, runCost: "$0.12", rating: 4.8, reviews: 7841, downloads: 112000, confidence: 92, steps: 26, estTime: "5 min",
    tags: ["complaint", "refund", "corporate", "BBB", "escalation"], featured: true,
    models: ["gpt-5.2", "claude-opus-4.6"], tools: ["web_search", "email_send", "pdf_gen", "browser_agent"], mcpServers: [],
    inputs: [
      { id: "company", label: "Company", placeholder: "e.g. Comcast / Xfinity" },
      { id: "issue", label: "Issue", placeholder: "e.g. Charged $380 early termination fee despite 'no contract' promise", multi: true },
      { id: "amount", label: "Amount in Dispute", placeholder: "e.g. $380" },
      { id: "attempts", label: "What You've Tried", placeholder: "e.g. Called 4 times, chatted twice, supervisor said nothing they can do" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Find {company} executive contacts: CEO office, VP of CX" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Identify regulatory bodies: FTC, state AG, FCC/CFPB, BBB" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Draft executive escalation email" },
      { n: 4, act: "llm", model: "gpt-5.2", d: "Generate BBB complaint text" },
      { n: 5, act: "llm", model: "claude-opus-4.6", d: "Draft state AG consumer protection complaint" },
      { n: 6, act: "llm", model: "gpt-5.2", d: "Write social media posts" },
      { n: 7, act: "tool", tool: "pdf_gen", d: "Compile all letters and complaint forms" },
    ],
  },
  {
    id: "ats-resume-rewrite",
    title: "Resume — ATS Optimization & Rewrite",
    desc: "This PromptFlow™ software file reverse-engineers Applicant Tracking Systems. Extracts keyword patterns via NLP, scores your resume's match rate, identifies gaps, and rewrites every bullet for maximum ATS pass-through. Before/after scoring and ATS-safe PDF output.",
    category: "Career", price: 1.99, runCost: "$0.22", rating: 4.8, reviews: 9834, downloads: 156000, confidence: 95, steps: 32, estTime: "7 min",
    tags: ["resume", "ATS", "job search", "keywords"],
    models: ["gpt-5.2", "claude-opus-4.6", "gemini-ultra-2"], tools: ["web_search", "code_exec", "pdf_gen", "ocr"], mcpServers: [],
    inputs: [
      { id: "job_posting", label: "Job Posting (paste full text)", placeholder: "Paste the entire job description...", multi: true },
      { id: "resume", label: "Your Current Resume", placeholder: "Paste your resume text...", multi: true },
      { id: "target", label: "Target Role", placeholder: "e.g. Senior Product Manager" },
    ],
    pipeline: [
      { n: 1, act: "llm", model: "gemini-ultra-2", d: "NLP extraction: keywords, skills, deal-breakers" },
      { n: 2, act: "llm", model: "claude-opus-4.6", d: "Score current resume against keyword matrix" },
      { n: 3, act: "llm", model: "gpt-5.2", d: "Rewrite every bullet for keyword match" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Truthfulness check — flag overstatements" },
      { n: 5, act: "tool", tool: "code_exec", d: "Generate before/after ATS score comparison" },
      { n: 6, act: "tool", tool: "pdf_gen", d: "Output ATS-safe PDF + analysis report" },
    ],
  },
  {
    id: "divorce-uncontested",
    title: "Uncontested Divorce — Document Suite",
    desc: "A sensitive, thorough PromptFlow™ software file for uncontested divorces. Generates jurisdiction-specific paperwork, asset/debt division worksheets, parenting plans, child support calculators, and a complete filing checklist. Designed for attorney review.",
    category: "Family Law", price: 24.99, runCost: "$5.10", rating: 4.5, reviews: 1203, downloads: 8900, confidence: 81, steps: 520, estTime: "2–5 days",
    tags: ["divorce", "custody", "family law", "settlement"],
    models: ["claude-opus-4.6", "gpt-5.2"], tools: ["web_search", "pdf_gen", "spreadsheet", "esign", "notary_api", "id_verify", "code_exec"], mcpServers: ["legal-templates-mcp"],
    inputs: [
      { id: "state", label: "State", placeholder: "e.g. Texas" },
      { id: "children", label: "Children", placeholder: "e.g. 2 children — ages 5 and 9" },
      { id: "agreement", label: "What You've Agreed On", placeholder: "e.g. 50/50 custody, sell house, keep own retirement", multi: true },
      { id: "assets", label: "Major Assets & Debts", placeholder: "e.g. House $420k, 2 cars, 401k $180k, $12k credit card debt" },
      { id: "income", label: "Both Incomes", placeholder: "e.g. Husband: $95k/yr, Wife: $72k/yr" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Research {state} uncontested divorce requirements" },
      { n: 2, act: "tool", tool: "code_exec", d: "Calculate child support using {state} formula" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Draft Marital Settlement Agreement" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Draft parenting plan with custody schedule" },
      { n: 5, act: "tool", tool: "spreadsheet", d: "Build asset/debt division spreadsheet" },
      { n: 6, act: "tool", tool: "pdf_gen", d: "Compile filing package with all court forms" },
    ],
  },
  {
    id: "patent-provisional",
    title: "Provisional Patent Application",
    desc: "The highest-complexity file in the PromptFlow™ software marketplace. Uses 5-model consensus for prior art search across USPTO/EPO/WIPO, novelty analysis, claims drafting, specification writing, and a complete USPTO filing package. Multi-model adversarial review ensures claim strength.",
    category: "Intellectual Property", price: 44.99, runCost: "$10.80", rating: 4.3, reviews: 487, downloads: 3200, confidence: 74, steps: 1800, estTime: "7–14 days",
    tags: ["patent", "provisional", "USPTO", "claims", "IP"],
    models: ["claude-opus-4.6", "gpt-5.2", "gemini-ultra-2", "deepseek-r2", "llama-4-405b"],
    tools: ["web_search", "browser_agent", "pdf_gen", "code_exec", "database", "ocr", "file_io"],
    mcpServers: ["google-patents-mcp", "legal-research-mcp", "arxiv-mcp"],
    inputs: [
      { id: "invention", label: "Detailed Invention Description", placeholder: "Describe your invention completely...", multi: true },
      { id: "field", label: "Technical Field", placeholder: "e.g. Photovoltaic cell manufacturing" },
      { id: "novel", label: "What Makes It New?", placeholder: "e.g. Room-temperature deposition achieving 24% efficiency", multi: true },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Prior art search: USPTO, EPO, WIPO" },
      { n: 2, act: "tool", tool: "browser_agent", d: "Deep search Google Patents for similar claims" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Analyze novelty against all found prior art" },
      { n: 4, act: "llm", model: "claude-opus-4.6", d: "Draft independent and dependent claims" },
      { n: 5, act: "llm", model: "gpt-5.2", d: "Write detailed specification and embodiments" },
      { n: 6, act: "llm", model: "llama-4-405b", d: "Adversarial review: attack claims from examiner perspective" },
      { n: 7, act: "llm", model: "claude-opus-4.6", d: "Strengthen claims based on adversarial feedback" },
      { n: 8, act: "tool", tool: "pdf_gen", d: "Compile USPTO provisional application package" },
    ],
  },
  {
    id: "debt-freedom-plan",
    title: "Debt Freedom Accelerator",
    desc: "A PromptFlow™ software file that builds a mathematically optimal debt payoff plan. Compares avalanche vs. snowball, identifies balance transfer opportunities, generates creditor negotiation scripts, and produces a month-by-month calendar to debt freedom.",
    category: "Personal Finance", price: 4.99, runCost: "$0.90", rating: 4.8, reviews: 4562, downloads: 52100, confidence: 94, steps: 92, estTime: "15 min",
    tags: ["debt", "payoff", "snowball", "avalanche", "credit card"],
    models: ["gpt-5.2", "claude-opus-4.6", "deepseek-r2"], tools: ["web_search", "code_exec", "spreadsheet", "pdf_gen", "voice_call", "tts"], mcpServers: ["plaid-financial-mcp"],
    inputs: [
      { id: "debts", label: "List All Debts", placeholder: "e.g. Chase Visa: $8,400 @ 24.99% / Car: $14,200 @ 5.9% / Student: $38k @ 5.5%", multi: true },
      { id: "income", label: "Monthly Take-Home Pay", placeholder: "e.g. $5,400" },
      { id: "extra", label: "Extra Available Per Month", placeholder: "e.g. $550 above minimums" },
      { id: "credit_score", label: "Approximate Credit Score", placeholder: "e.g. 680" },
    ],
    pipeline: [
      { n: 1, act: "llm", model: "deepseek-r2", d: "Parse debts, calculate avalanche vs. snowball payoff dates" },
      { n: 2, act: "search", model: "gpt-5.2", d: "Find 0% APR balance transfer offers for score {credit_score}" },
      { n: 3, act: "llm", model: "claude-opus-4.6", d: "Analyze balance transfer ROI vs. fees" },
      { n: 4, act: "llm", model: "gpt-5.2", d: "Generate rate negotiation scripts per creditor" },
      { n: 5, act: "tool", tool: "code_exec", d: "Monte Carlo simulation of payoff scenarios" },
      { n: 6, act: "tool", tool: "spreadsheet", d: "Build month-by-month payoff calendar" },
      { n: 7, act: "tool", tool: "pdf_gen", d: "Compile freedom plan with milestones" },
    ],
  },
  {
    id: "relocation-autopilot",
    title: "Complete Relocation — Move Autopilot",
    desc: "A multi-week PromptFlow™ software file that manages your entire move. Compares movers, generates inventories, submits USPS mail forwarding, sends address changes to 40+ services, transfers utilities, and finds new doctors near your destination.",
    category: "Life Events", price: 12.99, runCost: "$3.40", rating: 4.7, reviews: 3456, downloads: 24100, confidence: 91, steps: 640, estTime: "5–21 days",
    tags: ["moving", "relocation", "address change", "utilities"],
    models: ["gpt-5.2", "claude-opus-4.6", "gemini-ultra-2"],
    tools: ["web_search", "email_send", "email_read", "voice_call", "browser_agent", "calendar_api", "geo_maps", "spreadsheet", "shipping_api", "mcp"],
    mcpServers: ["google-workspace-mcp", "usps-mcp"],
    inputs: [
      { id: "from", label: "Moving From", placeholder: "e.g. 2BR apartment, Brooklyn, NY" },
      { id: "to", label: "Moving To", placeholder: "e.g. 3BR house, Durham, NC" },
      { id: "date", label: "Move Date", placeholder: "e.g. May 15, 2026" },
      { id: "household", label: "Household", placeholder: "e.g. 2 adults, 1 toddler, 1 cat" },
    ],
    pipeline: [
      { n: 1, act: "search", model: "gpt-5.2", d: "Get moving company quotes for {from} → {to}" },
      { n: 2, act: "llm", model: "gemini-ultra-2", d: "Generate room-by-room inventory and packing schedule" },
      { n: 3, act: "tool", tool: "browser_agent", d: "Submit USPS mail forwarding" },
      { n: 4, act: "tool", tool: "email_send", d: "Send address change emails to 40+ services" },
      { n: 5, act: "search", model: "gpt-5.2", d: "Find doctors, dentists, vets near {to}" },
      { n: 6, act: "tool", tool: "calendar_api", d: "Build day-by-day move timeline" },
    ],
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROGRAMS.map(p => p.category)))];

// ─── STATE ────────────────────────────────────────────────────────────

let state = {
  view: "home", // home | detail | run
  search: "",
  category: "All",
  sort: "popular",
  prog: null,
  inputs: {},
  logs: [],
  done: false,
  dlModal: false,
  runTimer: null,
};

// ─── HELPERS ──────────────────────────────────────────────────────────

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function confColor(s) {
  return s >= 90 ? "#22C55E" : s >= 80 ? "#EAB308" : s >= 70 ? "#F97316" : "#EF4444";
}

function modelBadgeHTML(id, sm) {
  const m = MODELS[id]; if (!m) return "";
  return `<span class="mbadge${sm ? " sm" : ""}" style="background:${m.color}14;color:${m.color};border:1px solid ${m.color}28">${sm ? m.short : m.name}</span>`;
}

function toolBadgeHTML(id) {
  const t = TOOLS[id]; if (!t) return "";
  return `<span class="tbadge">${t.icon} ${esc(t.name)}</span>`;
}

function starsHTML(r, sz = 12) {
  let h = "";
  for (let i = 0; i < 5; i++) {
    const f = i < Math.floor(r) ? 1 : i === Math.floor(r) ? r % 1 : 0;
    h += `<svg width="${sz}" height="${sz}" viewBox="0 0 20 20"><defs><linearGradient id="st${i}${r}"><stop offset="${f*100}%" stop-color="#EAB308"/><stop offset="${f*100}%" stop-color="#2A2D35"/></linearGradient></defs><polygon points="10,1.5 12.6,7.1 18.8,7.6 14,11.8 15.4,17.9 10,14.7 4.6,17.9 6,11.8 1.2,7.6 7.4,7.1" fill="url(#st${i}${r})"/></svg>`;
  }
  return `<span style="display:inline-flex;gap:0.5px">${h}</span>`;
}

function confHTML(s) {
  const c = confColor(s);
  return `<div class="conf"><div class="conf-bar"><div class="conf-fill" style="width:${s}%;background:${c}"></div></div><span class="conf-num" style="color:${c}">${s}%</span></div>`;
}

function getFiltered() {
  let arr = [...PROGRAMS];
  const { sort, category, search } = state;
  if (sort === "popular") arr.sort((a, b) => b.downloads - a.downloads);
  else if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  else if (sort === "confidence") arr.sort((a, b) => b.confidence - a.confidence);
  else if (sort === "complexity") arr.sort((a, b) => b.steps - a.steps);
  else if (sort === "price-low") arr.sort((a, b) => a.price - b.price);
  return arr.filter(p => {
    const mc = category === "All" || p.category === category;
    const q = search.toLowerCase();
    return mc && (!q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
  });
}

// ─── RENDER ───────────────────────────────────────────────────────────

function render() {
  const app = document.getElementById("app");
  app.innerHTML = renderNav() + renderModal() + renderView() + renderFooter();
  bindEvents();
}

function renderNav() {
  return `<nav class="nav">
    <div style="display:flex;align-items:center;gap:14px">
      <button class="nav-logo" data-action="home">
        <div class="nav-logo-icon">⚡</div>
        <span class="nav-logo-text">PromptFlow<sup>™</sup></span>
      </button>
      ${state.view !== "home" ? `<button class="nav-back" data-action="home">← Marketplace</button>` : ""}
    </div>
    <div class="nav-right">
      <button class="btn-dl" data-action="toggle-dl">⬇ Interpreter</button>
      <button class="btn-signin">Sign In</button>
    </div>
  </nav>`;
}

function renderModal() {
  if (!state.dlModal) return "";
  return `<div class="modal-overlay" data-action="close-dl">
    <div class="modal" onclick="event.stopPropagation()">
      <h2>Download PromptFlow™ Software</h2>
      <p>The PromptFlow™ interpreter runs <code>.pflow</code> files locally — downloadable computer software files featuring programming data for prompting neural networks. It chains web search, multi-model API calls, tool integrations, and MCP server connections.</p>
      ${[
        { os: "macOS", cmd: "brew install promptflow" },
        { os: "Windows", cmd: "winget install PromptFlow.Interpreter" },
        { os: "Linux", cmd: "curl -fsSL https://promptflow.dev/install.sh | bash" },
        { os: "Docker", cmd: "docker pull promptflow/interpreter:latest" },
        { os: "npm", cmd: "npm install -g @promptflow/cli" },
      ].map(p => `<div class="dl-row"><div><div class="dl-row-os">${p.os}</div><code class="dl-row-cmd">${p.cmd}</code></div><button class="dl-row-btn">Get</button></div>`).join("")}
      <div class="dl-quickstart">
        <div class="dl-quickstart-label">Quick Start</div>
        <pre>$ export OPENAI_API_KEY=sk-...
$ export ANTHROPIC_API_KEY=sk-ant-...

$ promptflow run insurance-denial-appeal.pflow \\
    --provider "Anthem Blue Cross" \\
    --state "California"

⚡ PromptFlow™ software v3.1.0
   28 steps | 2 models | 3 tools | Est: 5 min
   Running...</pre>
      </div>
      <button class="modal-close" data-action="close-dl">Close</button>
    </div>
  </div>`;
}

function renderView() {
  if (state.view === "home") return renderHome();
  if (state.view === "detail") return renderDetail();
  if (state.view === "run") return renderRunner();
  return "";
}

function renderHome() {
  const filtered = getFiltered();
  return `<div class="container">
    <div class="hero">
      <div class="hero-badge">AI Workflow Marketplace</div>
      <h1>AI Workflows that actually <span>improve your life</span></h1>
      <p>PromptFlow™ software files chain prompts, tools, code, and agents — targeting multiple models and MCP servers in orchestrated sequences. From 2‑minute fixes to 60‑day life events. Run online or download the files.</p>
      <div class="hero-search">
        <span class="icon">🔍</span>
        <input id="search-input" value="${esc(state.search)}" placeholder="Search — insurance, business, immigration, salary…">
      </div>
    </div>
    <div class="filters">
      <div class="cat-pills">
        ${CATEGORIES.map(c => `<button class="cat-pill${state.category === c ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
      </div>
      <select class="sort-select" id="sort-select">
        ${["popular|Most Popular","rating|Highest Rated","confidence|Confidence","complexity|Most Complex","price-low|Price: Low→High"].map(s => {
          const [v, l] = s.split("|");
          return `<option value="${v}"${state.sort === v ? " selected" : ""}>${l}</option>`;
        }).join("")}
      </select>
    </div>
    <div class="grid">
      ${filtered.map(p => renderCard(p)).join("")}
    </div>
    ${!filtered.length ? `<div class="empty">No files match your search.</div>` : ""}
    <div class="hiw">
      <h2>How PromptFlow™ Software Works</h2>
      <p>PromptFlow™ is downloadable computer software featuring a programming language for prompting neural networks. Each <code>.pflow</code> file chains prompts, tools, and code — targeting multiple models, agents, and MCP servers.</p>
      <div class="hiw-grid">
        ${[
          ["📝", "Choose a File", "Browse rated PromptFlow™ software files — from 10‑step quick fixes to 2,000‑step life events."],
          ["⌨️", "Enter Your Details", "Fill in specifics. Your data stays local until execution."],
          ["⚡", "Multi‑Model Orchestration", "The interpreter chains GPT‑5.2, Claude Opus 4.6, Gemini, Llama, Mistral, and DeepSeek."],
          ["🔗", "Tools & MCP Servers", "Web search, email, phone, browser agents, e‑sign, gov portals, and MCP integrations."],
          ["📄", "Get Professional Output", "Letters, plans, applications, analyses — generated in minutes to days."],
        ].map(([i, t, d]) => `<div><div class="hiw-item-icon">${i}</div><div class="hiw-item-title">${t}</div><div class="hiw-item-desc">${d}</div></div>`).join("")}
      </div>
    </div>
  </div>`;
}

function renderCard(p) {
  return `<div class="card" data-open="${p.id}">
    <div class="card-top">
      <span class="card-cat">${esc(p.category)}</span>
      <span class="card-price ${p.price === 0 ? "free" : "paid"}">${p.price === 0 ? "FREE" : "$" + p.price.toFixed(2)}</span>
    </div>
    <div class="card-title">${esc(p.title)}</div>
    <div class="card-desc">${esc(p.desc.slice(0, 120))}…</div>
    <div class="card-stats">
      <div class="card-stat"><div class="card-stat-val">${p.steps.toLocaleString()}</div><div class="card-stat-label">Steps</div></div>
      <div class="card-stat"><div class="card-stat-val">${esc(p.estTime)}</div><div class="card-stat-label">Runtime</div></div>
      <div class="card-stat"><div class="card-stat-val accent">${esc(p.runCost)}</div><div class="card-stat-label">API Cost</div></div>
    </div>
    <div class="card-models">${p.models.slice(0, 3).map(m => modelBadgeHTML(m, true)).join("")}${p.models.length > 3 ? `<span style="font-size:9px;color:#555D73;padding:1px 4px">+${p.models.length - 3}</span>` : ""}</div>
    <div class="card-bottom">
      <div class="card-rating">${starsHTML(p.rating)}<span class="card-rating-num">${p.rating}</span><span class="card-rating-count">(${p.reviews.toLocaleString()})</span></div>
      ${confHTML(p.confidence)}
    </div>
  </div>`;
}

function renderDetail() {
  const p = state.prog; if (!p) return "";
  const allOk = p.inputs.every(f => (state.inputs[f.id] || "").trim());
  return `<div class="detail fade-in">
    <div class="detail-header">
      <div class="detail-main">
        <div class="detail-cat">${esc(p.category)}</div>
        <h1 class="detail-title">${esc(p.title)}</h1>
        <p class="detail-desc">${esc(p.desc)}</p>
        <div class="detail-meta">
          ${starsHTML(p.rating, 14)}<span class="detail-meta-rating">${p.rating}</span>
          <span class="detail-meta-sub">(${p.reviews.toLocaleString()} reviews) · ${p.downloads.toLocaleString()} runs</span>
        </div>
      </div>
      <div class="detail-stats-card">
        <div class="detail-price ${p.price === 0 ? "free" : ""}">${p.price === 0 ? "Free" : "$" + p.price.toFixed(2)}</div>
        <div class="detail-runcost">+ ${esc(p.runCost)} API cost per run</div>
        <div class="detail-stat-grid">
          <div><div class="detail-stat-label">Steps</div><div class="detail-stat-val">${p.steps.toLocaleString()}</div></div>
          <div><div class="detail-stat-label">Runtime</div><div class="detail-stat-val">${esc(p.estTime)}</div></div>
          <div style="grid-column:1/-1"><div class="detail-stat-label" style="margin-bottom:3px">Confidence</div>${confHTML(p.confidence)}</div>
        </div>
      </div>
    </div>
    <div style="margin-bottom:12px"><div class="section-label">Models</div><div class="badge-row">${p.models.map(m => modelBadgeHTML(m)).join("")}</div></div>
    <div style="margin-bottom:12px"><div class="section-label">Tools & Integrations</div><div class="badge-row tight">${p.tools.map(t => toolBadgeHTML(t)).join("")}</div></div>
    ${p.mcpServers?.length ? `<div style="margin-bottom:20px"><div class="section-label">MCP Servers</div><div class="badge-row">${p.mcpServers.map(s => `<span class="mcp-badge">🔗 ${esc(s)}</span>`).join("")}</div></div>` : ""}
    <div class="pipeline-box">
      <div class="section-label">Pipeline — ${p.pipeline.length} stages (of ${p.steps.toLocaleString()} total steps)</div>
      ${p.pipeline.map((s, i) => `<div class="pipeline-step">
        <div style="display:flex;flex-direction:column;align-items:center;min-width:22px">
          <div class="pipeline-dot ${s.act}">${s.n}</div>
          ${i < p.pipeline.length - 1 ? `<div class="pipeline-line"></div>` : ""}
        </div>
        <div style="padding-bottom:${i < p.pipeline.length - 1 ? 8 : 0}px;flex:1">
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:1px">
            <span class="pipeline-action ${s.act}">${s.act === "search" ? "🔍 Web Search" : s.act === "llm" ? "🤖 LLM" : `${TOOLS[s.tool]?.icon || "⚙️"} ${esc(TOOLS[s.tool]?.name || "Tool")}`}</span>
            ${s.model ? modelBadgeHTML(s.model, true) : ""}
          </div>
          <div class="pipeline-desc">${esc(s.d)}</div>
        </div>
      </div>`).join("")}
    </div>
    <div class="input-form">
      <h3>Your Information</h3>
      <p>Data stays in your browser. Sent only to model APIs during execution.</p>
      <div class="input-fields">
        ${p.inputs.map(f => `<div>
          <label class="input-label">${esc(f.label)}</label>
          ${f.multi
            ? `<textarea class="input-textarea" data-field="${f.id}" rows="3" placeholder="${esc(f.placeholder)}">${esc(state.inputs[f.id] || "")}</textarea>`
            : `<input class="input-field" data-field="${f.id}" value="${esc(state.inputs[f.id] || "")}" placeholder="${esc(f.placeholder)}">`}
        </div>`).join("")}
      </div>
      <button class="btn-execute ${allOk ? "ready" : "disabled"}" ${allOk ? 'data-action="run"' : "disabled"}>
        ⚡ Execute — ${p.steps.toLocaleString()} steps · Est. ${esc(p.estTime)} · ${esc(p.runCost)} API${p.price > 0 ? ` · $${p.price.toFixed(2)}` : ""}
      </button>
    </div>
    <details style="margin-top:16px"><summary class="source-toggle">View .pflow source</summary>
    <pre class="source-pre">${esc(`# ${p.title}
# PromptFlow™ software file v3.1 | ${p.steps.toLocaleString()} steps
# Confidence: ${p.confidence}% | API cost: ${p.runCost}

@meta
  name: "${p.title}"
  version: "1.0.0"
  category: "${p.category}"
  confidence: ${p.confidence}
  est_time: "${p.estTime}"

@models
${p.models.map(m => `  - ${m}`).join("\n")}

@tools
${p.tools.map(t => `  - ${t}  # ${TOOLS[t]?.name}`).join("\n")}
${p.mcpServers?.length ? `\n@mcp_servers\n${p.mcpServers.map(s => `  - "${s}"`).join("\n")}` : ""}

@inputs
${p.inputs.map(f => `  ${f.id}: string "${f.label}"`).join("\n")}

@pipeline
${p.pipeline.map(s => `  step_${s.n}:
    action: ${s.act}${s.model ? `\n    model: ${s.model}` : ""}${s.tool ? `\n    tool: ${s.tool}` : ""}
    prompt: "${s.d}"`).join("\n\n")}

@output
  format: [markdown, pdf]
  human_review: ${p.confidence < 85 ? "recommended" : "optional"}`)}</pre>
    </details>
  </div>`;
}

function renderRunner() {
  const p = state.prog; if (!p) return "";
  const doneSteps = state.logs.filter(l => l.t === "done").length;
  const pct = state.done ? 100 : Math.min(95, (doneSteps / p.pipeline.length) * 100);
  return `<div class="runner fade-in">
    <div class="runner-header">
      ${!state.done ? `<div class="runner-spinner"></div>` : `<span style="font-size:18px">✅</span>`}
      <h2 style="font-size:18px;font-weight:800">${state.done ? "Execution Complete" : "Running: " + esc(p.title)}</h2>
    </div>
    <p class="runner-sub">${p.steps.toLocaleString()} steps · ${p.models.length} models · ${p.tools.length} tools${p.mcpServers?.length ? ` · ${p.mcpServers.length} MCP` : ""}</p>
    <div class="progress-bar"><div class="progress-fill ${state.done ? "done" : "running"}" style="width:${pct}%"></div></div>
    <div class="log-box">
      <div class="log-label">Execution Log</div>
      <div id="log-entries">${state.logs.map(renderLogEntry).join("")}</div>
    </div>
    ${state.done ? renderOutput() : ""}
  </div>`;
}

function renderLogEntry(l) {
  let icon = "·", cls = "info";
  if (l.t === "start") { icon = "▶"; cls = "start"; }
  else if (l.t === "info") { icon = l.m?.includes("Search") ? "🔍" : l.m?.includes("API") ? "🤖" : "⚙️"; cls = "info"; }
  else if (l.t === "ok") { icon = "✓"; cls = "ok"; }
  else if (l.t === "done") { icon = "✅"; cls = "ok"; }
  else if (l.t === "fin") { icon = "🎉"; cls = "fin"; }
  
  let text = "";
  if (l.t === "start") text = `Step ${l.n}: ${l.act === "search" ? "Web Search" : l.act === "llm" ? "LLM (" + (MODELS[l.model]?.name || "") + ")" : "Tool: " + (TOOLS[l.tool]?.name || "")} — ${esc(l.d)}`;
  else if (l.t === "fin") text = `PromptFlow™ software execution complete. ${state.prog.pipeline.length} stages finished.`;
  else text = esc(l.m || "");

  return `<div class="log-entry"><span class="log-icon">${icon}</span><div class="log-msg ${cls}">${text}</div></div>`;
}

function renderOutput() {
  const p = state.prog;
  return `<div class="output-box">
    <div class="output-header">
      <span style="font-size:18px">📄</span>
      <h3 style="font-size:16px;font-weight:800">Generated Output</h3>
      <span class="output-conf">Confidence: ${p.confidence}%</span>
    </div>
    <pre class="output-pre">══════════════════════════════════════════════════════
  PromptFlow™ Software Output
  ${p.title.toUpperCase()}
  ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
══════════════════════════════════════════════════════

Pipeline:   ${p.steps.toLocaleString()} steps executed
Models:     ${p.models.map(m => MODELS[m]?.name).join(", ")}
Tools:      ${p.tools.map(t => TOOLS[t]?.name).join(", ")}${p.mcpServers?.length ? "\nMCP:        " + p.mcpServers.join(", ") : ""}
Runtime:    ${p.estTime}
API Cost:   ${p.runCost}
Confidence: ${p.confidence}%

──────────────────────────────────────────────────────

[Complete output generated from ${p.pipeline.length} pipeline
 stages across ${p.models.length} models with ${p.tools.length} tool
 integrations]

All web searches, LLM generations, and tool operations
completed successfully. Output includes all generated
documents, analysis, and recommended action items.

──────────────────────────────────────────────────────
  Generated by PromptFlow™ software v3.1.0
══════════════════════════════════════════════════════</pre>
    <div class="output-btns">
      <button class="output-btn primary" data-action="run-again">Run Again</button>
      <button class="output-btn secondary">Copy</button>
      <button class="output-btn secondary">PDF</button>
      <button class="output-btn secondary">DOCX</button>
    </div>
  </div>`;
}

function renderFooter() {
  return `<footer>
    <div class="footer-brand">PromptFlow™ Software</div>
    <div class="footer-motto">AI Workflows that actually improve your life</div>
    <div class="footer-desc">Downloadable computer software featuring a programming language for prompting neural networks</div>
    <div class="footer-models">Orchestrates: GPT-5.2 · Claude Opus 4.6 · Gemini Ultra 2 · Llama 4 405B · Mistral Large 3 · DeepSeek R2</div>
    <div class="footer-links">${["Docs", "API", "GitHub", "MCP Registry", "Terms", "Privacy"].map(l => `<span>${l}</span>`).join("")}</div>
    <div class="footer-tm">PromptFlow™ is a trademark identifying downloadable computer software and computer software files featuring programming data in the field of AI. © 2026</div>
  </footer>`;
}

// ─── EVENTS ───────────────────────────────────────────────────────────

function bindEvents() {
  // Nav & modal
  document.querySelectorAll("[data-action='home']").forEach(el => el.addEventListener("click", () => { state.view = "home"; state.search = ""; state.category = "All"; clearRunner(); render(); window.scrollTo(0, 0); }));
  document.querySelectorAll("[data-action='toggle-dl']").forEach(el => el.addEventListener("click", () => { state.dlModal = true; render(); }));
  document.querySelectorAll("[data-action='close-dl']").forEach(el => el.addEventListener("click", () => { state.dlModal = false; render(); }));

  // Search
  const si = document.getElementById("search-input");
  if (si) si.addEventListener("input", (e) => { state.search = e.target.value; render(); requestAnimationFrame(() => { const el = document.getElementById("search-input"); if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; } }); });

  // Categories
  document.querySelectorAll("[data-cat]").forEach(el => el.addEventListener("click", () => { state.category = el.dataset.cat; render(); }));

  // Sort
  const ss = document.getElementById("sort-select");
  if (ss) ss.addEventListener("change", (e) => { state.sort = e.target.value; render(); });

  // Cards
  document.querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", () => {
    state.prog = PROGRAMS.find(p => p.id === el.dataset.open);
    state.inputs = {}; state.logs = []; state.done = false; state.view = "detail";
    clearRunner(); render(); window.scrollTo(0, 0);
  }));

  // Input fields
  document.querySelectorAll("[data-field]").forEach(el => el.addEventListener("input", (e) => { state.inputs[e.target.dataset.field] = e.target.value; updateExecuteButton(); }));

  // Run
  document.querySelectorAll("[data-action='run']").forEach(el => el.addEventListener("click", startRun));
  document.querySelectorAll("[data-action='run-again']").forEach(el => el.addEventListener("click", () => { state.logs = []; state.done = false; state.view = "detail"; clearRunner(); render(); window.scrollTo(0, 0); }));
}

function updateExecuteButton() {
  const btn = document.querySelector(".btn-execute");
  if (!btn || !state.prog) return;
  const allOk = state.prog.inputs.every(f => (state.inputs[f.id] || "").trim());
  btn.className = "btn-execute " + (allOk ? "ready" : "disabled");
  btn.disabled = !allOk;
  if (allOk && !btn.dataset.action) btn.dataset.action = "run";
  if (allOk) btn.addEventListener("click", startRun);
}

// ─── RUNNER ───────────────────────────────────────────────────────────

function clearRunner() {
  if (state.runTimer) { clearTimeout(state.runTimer); state.runTimer = null; }
}

function startRun() {
  clearRunner();
  const p = state.prog;
  const filled = p.pipeline.map(s => {
    let d = s.d;
    Object.entries(state.inputs).forEach(([k, v]) => { d = d.replaceAll(`{${k}}`, v || `[${k}]`); });
    return { ...s, d };
  });
  state.logs = []; state.done = false; state.view = "run";
  render();
  runStep(filled, 0);
}

function runStep(pipeline, idx) {
  if (idx >= pipeline.length) {
    state.logs.push({ t: "fin" });
    state.done = true;
    render();
    return;
  }
  const s = pipeline[idx];
  state.logs.push({ t: "start", ...s });
  render(); scrollLog();

  const delay1 = 700 + Math.random() * 1000;
  state.runTimer = setTimeout(() => {
    const model = s.model ? MODELS[s.model]?.name : null;
    const tool = s.tool ? TOOLS[s.tool] : null;
    if (s.act === "search") {
      state.logs.push({ t: "info", n: s.n, m: `[${model} → Web Search] ${s.d}` });
      render(); scrollLog();
      state.runTimer = setTimeout(() => {
        state.logs.push({ t: "ok", n: s.n, m: `${2 + Math.floor(Math.random() * 5)} results compiled (${(600 + Math.floor(Math.random() * 1500)).toLocaleString()} tokens)` });
        state.logs.push({ t: "done", n: s.n });
        render(); scrollLog();
        state.runTimer = setTimeout(() => runStep(pipeline, idx + 1), 200);
      }, 500 + Math.random() * 700);
    } else if (s.act === "llm") {
      state.logs.push({ t: "info", n: s.n, m: `[${model} API] Generating…` });
      render(); scrollLog();
      state.runTimer = setTimeout(() => {
        state.logs.push({ t: "ok", n: s.n, m: `Complete. ${(200 + Math.floor(Math.random() * 1000)).toLocaleString()} tokens · $${(0.001 + Math.random() * 0.04).toFixed(4)}` });
        state.logs.push({ t: "done", n: s.n });
        render(); scrollLog();
        state.runTimer = setTimeout(() => runStep(pipeline, idx + 1), 200);
      }, 1000 + Math.random() * 1800);
    } else {
      state.logs.push({ t: "info", n: s.n, m: `${tool?.icon || "⚙️"} [${tool?.name}] ${s.d}` });
      render(); scrollLog();
      state.runTimer = setTimeout(() => {
        state.logs.push({ t: "ok", n: s.n, m: `${tool?.name} → success` });
        state.logs.push({ t: "done", n: s.n });
        render(); scrollLog();
        state.runTimer = setTimeout(() => runStep(pipeline, idx + 1), 200);
      }, 600 + Math.random() * 1200);
    }
  }, delay1);
}

function scrollLog() {
  const box = document.querySelector(".log-box");
  if (box) box.scrollTop = box.scrollHeight;
}

// ─── INIT ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", render);
