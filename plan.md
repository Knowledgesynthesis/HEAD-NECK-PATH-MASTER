# **HEAD & NECK PATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-resident–level educational platform that teaches **Head & Neck (H&N) Pathology** exactly as expected during a **Head & Neck surgical pathology rotation** or from standard texts (e.g., WHO Classification of Head & Neck Tumors, AFIP fascicles — conceptual only).

This app must cover:
- Oral cavity, larynx, pharynx, sinonasal tract, salivary glands, thyroid & parathyroid  
- Benign → atypical → malignant squamous & glandular lesions  
- Salivary gland tumor families & molecular hallmarks  
- Thyroid nodules, follicular-patterned lesions, papillary carcinoma variants  
- Parathyroid pathology (adenoma vs hyperplasia vs carcinoma, conceptually)  
- Nasopharyngeal carcinoma patterns  
- Odontogenic cysts & tumors  
- Neck masses & metastatic patterns  
- High-yield IHC & molecular patterns (conceptual only)  
- Pitfalls & mimics  
- Synthetic case reasoning  

All histology is represented with **schematic/diagrammatic icons only** — **no photomicrographs**.  
Assessments are **session-only**, **no tracking**, **no PHI**, **educational only**.

---

# **MASTER PROMPT — Head & Neck Path Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are:
- Product Manager  
- Senior Engineer  
- Instructional Designer  
- Head & Neck Pathology SME  
- Molecular/IHC SME  
- UX Writer  
- QA Specialist  

**Mission:**  
Build a complete learning system for Head & Neck Pathology that is pattern-driven, differential-based, and resident-friendly, covering both biopsy and resection-level complexity.

---

# **1. INPUTS (TO FILL WHEN USING PROMPT)**

- **PRIMARY TOPICS:** {{TOPICS}}  
  Default: oral cavity, sinonasal tract, salivary glands, thyroid, parathyroid, larynx/pharynx, neck masses, odontogenic lesions, IHC/molecular frameworks.

- **LEVEL:** {{LEVELS}}  
  Default: PGY1–PGY4 pathology residents; H&N pathology fellows.

- **CONTEXT:** {{CONTEXT}}  
  Default: Head & Neck pathology rotation, tumor board prep, boards prep.

- **LEARNING OBJECTIVES:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Distinguish dysplasia vs invasive SCC in oral cavity biopsies.  
  - Identify common salivary gland tumor families using morphology + molecular clues.  
  - Recognize thyroid carcinoma variants and follicular-patterned lesion pitfalls.  
  - Apply basic IHC frameworks for sinonasal & H&N tumors (concept-only).  
  - Diagnose common odontogenic cysts/tumors.  
  - Interpret neck mass patterns (lymph node metastasis vs primary).  
  - Recognize nasopharyngeal carcinoma patterns.  

- **CONSTRAINTS:** {{CONSTRAINTS}}  
  Must include:  
  - Mobile-first  
  - Dark-mode-first  
  - Offline-ready  
  - No real images  
  - No PHI  
  - No treatment recommendations  
  - No user tracking  

- **REFERENCES:** {{REFERENCES}}  
  Optional: conceptual alignment with WHO Head & Neck Tumors.

- **VOICE:** {{VOICE_TONE}}  
  Default: structured, pattern-focused, clear.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Deliver a structured, high-yield, pattern-based educational tool for the full spectrum of Head & Neck pathology.

**Name Options:**  
- **Head & Neck Path Master**  
- **H&N PatternLogic Studio**  
- **CranioDx Atlas**  

**Success Criteria:**  
- Users can classify H&N lesions into major families.  
- Learners recognize hallmark patterns of salivary, thyroid, and sinonasal tumors.  
- Residents understand SCC grading and dysplasia frameworks.  
- Trainees can identify high-yield IHC and molecular signatures conceptually.  
- Integrated synthetic cases mimic real signout workflows.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
**PGY-1/2 Resident**  
- Needs: Basic squamous & glandular patterns.  
- Pain: Complexity of sinonasal & salivary tumors.

**PGY-3/4 Resident**  
- Needs: Full tumor classification, IHC/molecular integration.  
- Pain: Many morphologic mimics.

**H&N Fellow**  
- Needs: Rare variant differentiation & pitfall avoidance.  

### USE CASES
- “Is this dysplasia vs reactive atypia?”  
- “Is this HPV-associated or HPV-independent SCC?”  
- “Which salivary tumor family does this fit?”  
- “Is this thyroid nodule benign vs malignant pattern?”  
- “Which molecular hallmark suggests this salivary tumor subtype?”  
- “Is this sinonasal adenocarcinoma vs mimics?”  
- “What type of odontogenic cyst/tumor is this?”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Normal & Foundational Anatomy
- Oral cavity mucosa  
- Squamous epithelium  
- Salivary gland acini & ducts  
- Thyroid follicles  
- Parathyroid cell types  
- Sinonasal mucosa  
- Laryngeal architecture  
- Odontogenic apparatus cartoons  

---

## MODULE B — Oral Cavity & Oropharynx
### Squamous Pathology
- Reactive atypia vs dysplasia  
- Mild → moderate → severe dysplasia (conceptual)  
- HPV-associated SCC (non-keratinizing cartoon)  
- HPV-independent SCC (keratinizing pattern)  
- Verrucous carcinoma (church-spire cartoon)

### IHC/Molecular (Conceptual)
- p16 for HPV pathway activity  
- Ki-67 distribution  
- p53 abnormal patterns  

Pitfalls:  
- Keratinizing SCC mimicking benign pseudoepitheliomatous hyperplasia.

---

## MODULE C — Larynx & Hypopharynx
- Dysplasia → carcinoma sequence  
- Reinke edema (cartoon)  
- SCC patterns  
- Rare tumors: chondrosarcoma-like patterns (high-level)

---

## MODULE D — Sinonasal Tract
### Inflammatory & Benign
- Chronic sinusitis patterns  
- Schneiderian papillomas (fungiform, inverted, oncocytic)

### Malignant Tumors
- Sinonasal squamous lesions  
- Sinonasal undifferentiated carcinoma (SNUC)  
- NUT carcinoma (NUTM1 rearrangement concept)  
- Olfactory neuroblastoma (rosette cartoon)  
- Intestinal-type adenocarcinoma  
- Non–intestinal-type adenocarcinoma  
- Melanocytic lesions of sinonasal tract (high-level)

### IHC/Molecular (High-Level)
- Cytokeratin subsets  
- NUT  
- Synaptophysin/chromogranin patterns  
- CDX2 for intestinal-type adenocarcinoma  

Pitfalls:  
- Inverted papilloma vs carcinoma  
- SNUC mimics (HPV-related forms)

---

## MODULE E — Salivary Gland Pathology (Core Module)
### Benign Tumors
- Pleomorphic adenoma (chondromyxoid cartoon)  
- Warthin tumor (bilayer oncocytic cells + lymphoid stroma)  

### Malignant Tumors
- Mucoepidermoid carcinoma (mucin/cartoon epidermoid mix)  
- Acinic cell carcinoma (granular cytoplasm cartoon)  
- Adenoid cystic carcinoma (cribriform “Swiss cheese” pattern)  
- Secretory carcinoma (ETV6–NTRK3 concept)  
- Polymorphous adenocarcinoma  
- Salivary duct carcinoma (apocrine-like cartoon)  
- Myoepithelial carcinoma  

### IHC/Molecular (Conceptual)
- DOG1, SOX10  
- p63/p40 patterns in salivary lesions  
- NTRK fusions (cartoon logic)  
- MYB–NFIB in adenoid cystic  
- NR4A3 in acinic cell carcinoma  

Pitfalls:  
- Cribriform adenocarcinoma of minor salivary glands vs ACC  
- PA vs low-grade carcinoma with chondromyxoid stroma  

---

## MODULE F — Thyroid Pathology
### Non-Neoplastic
- Nodular hyperplasia  
- Thyroiditis (Hashimoto, subacute, Riedel)  

### Follicular-Patterned Lesions
- Follicular adenoma vs carcinoma (capsular/vascular invasion conceptually)  
- NIFTP (cartoon criteria, educational only)  

### Papillary Thyroid Carcinoma (PTC)
- Classic PTC nuclear features (grooves, pseudoinclusions icons)  
- Follicular variant  
- Tall-cell variant  
- Columnar-cell & hobnail variants  

### Medullary Thyroid Carcinoma  
- Amyloid-like stroma cartoon  
- C-cell hyperplasia patterns  

### Anaplastic Thyroid Carcinoma  
- High-grade pleomorphic pattern  

### Molecular/IHC (Conceptual)
- BRAF pattern associations  
- RAS mutations (follicular-patterned)  
- Calcitonin, CEA for medullary  
- TTF-1, PAX8 profiles  

Pitfalls:  
- PTC-like nuclear clearing from artifacts  
- Adenoma vs minimally invasive carcinoma  

---

## MODULE G — Parathyroid
- Hyperplasia vs adenoma vs carcinoma  
- Fat content conceptual  
- Capsular features (non-diagnostic icons only)  
- IHC: PTH staining conceptually  

---

## MODULE H — Odontogenic Lesions
### Cysts
- Dentigerous cyst  
- Radicular cyst  
- Odontogenic keratocyst (palisaded basal layer icon)

### Tumors
- Ameloblastoma (peripheral palisading cartoon)  
- AOT (duct-like cartoon)  
- CEOT (Liesegang ring cartoon)  
- Odontoma (tooth-like structures)  

Pitfalls:  
- OKC vs dentigerous cyst  
- Ameloblastoma vs basaloid mimics  

---

## MODULE I — Neck Masses & Metastasis
- Reactive lymph nodes  
- Metastatic SCC patterns  
- Thyroid metastasis mimicking primary  
- Salivary gland metastasis mimics  

---

## MODULE J — IHC/Molecular Frameworks (Concept-Only)
- Cytokeratin patterns  
- SOX10, S100 for neural/melanocytic/salivary  
- TTF-1, PAX8  
- NUT  
- EBV/HPV cartoon logic  
- MYB, NR4A3, ETV6–NTRK3  
- p16/p53 cartoon interpretation  

---

## MODULE K — Pitfalls & Dangerous Mimics
- Pseudoepitheliomatous hyperplasia vs SCC  
- Cribriform adenocarcinoma vs ACC  
- Follicular thyroid patterns vs hyperplastic nodules  
- Parathyroid vs thyroid mimics  
- Sinonasal SNUC vs neuroendocrine carcinoma  
- Ameloblastoma vs basaloid tumors  

---

## MODULE L — Integrated H&N Case Bank
Synthetic cases covering:
- Oral cavity dysplasia vs SCC  
- HPV-associated vs non-HPV SCC  
- Salivary gland tumors  
- Thyroid nodules  
- Parathyroid lesions  
- Sinonasal malignant tumors  
- Odontogenic tumors  
- Neck metastases  
- IHC/molecular synthetic interpretive cases  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|----------|--------|----------|---------|------------|
| SCC Dysplasia Navigator | Distinguish reactive vs dysplasia | Nuclear + architectural icons | Category | Tile UI | Educational-only |
| Salivary Tumor Mapper | Morph + IHC + molecular clues | Cartoon features | Tumor family | Icons | Not diagnostic |
| Sinonasal Pattern Finder | Architecture + cell type icons | Pattern category | Diagram | Educational |
| Thyroid Follicular Pattern Tool | Architectural & capsule clues | Features | Category band | Icons | No real diagnosis |
| PTC Nuclear Feature Simulator | Nuclear grooves/pseudoinclusions icons | Pattern | PTC-like vs not | Educational |
| Odontogenic Lesion Classifier | Palisading & cystic patterns | Cartoon histology | Lesion family | Icons | Educational |
| Neck Mass Triage Engine | Morph + IHC | Likely category | Template | Non-clinical |
| Integrated H&N Case Builder | Morph + IHC + molecular | Synthetic report | Template only | Not for patient care |

---

# **6. ASSESSMENT (SESSION-ONLY)**

Item types:
- MCQs  
- Dysplasia classification  
- Salivary tumor identification  
- Thyroid nodule categorization  
- Sinonasal lesion pattern  
- Odontogenic tumor recognition  
- Metastasis evaluation  
- IHC/molecular conceptual clues  
- Integrated cases  

Score not saved; only:  
**“You answered X/Y correctly this session.”**

---

# **7. HEAD & NECK PATHOLOGY REASONING FRAMEWORK**

1. **Identify anatomic site**  
2. **Architecture → cell types → stromal patterns**  
3. **Assess atypia + invasion**  
4. **Classify into major family (squamous, salivary, thyroid, odontogenic, sinonasal)**  
5. **Apply conceptual IHC/molecular clues**  
6. **Narrow differential**  
7. **Identify pitfalls and mimics**  
8. **Integrate into synthetic impression**

Pitfalls include:  
- Squamous pseudoepitheliomatous hyperplasia = SCC mimic  
- Thyroid PTC-like nuclei from artifacts  
- ACC-like cribriform patterns in other tumors  
- Sinonasal SNUC vs NEC  
- Odontogenic cysts mimicking tumors  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- Dark-mode-first  
- Icons only, synthetic diagrams  
- Inclusive case phrasing  
- STRICT disclaimer:  
  “Educational only — not for diagnosis or clinical use.”  
- No tracking, no PHI  
- Offline-capable  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker for offline support  

Routes:
- `/oral`  
- `/larynx`  
- `/sinonasal`  
- `/salivary`  
- `/thyroid`  
- `/parathyroid`  
- `/odontogenic`  
- `/neck-masses`  
- `/ihc`  
- `/molecular`  
- `/pitfalls`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings:  
- Dark/light toggle  
- About  
- Disclaimer  

---

# **10. DATA SCHEMAS**

### Salivary Tumor Schema

{
"id": "salivary_22",
"architecture": ["cribriform"],
"stroma": ["basement membrane material"],
"molecular": ["MYB-NFIB"],
"interpretation": "Adenoid cystic carcinoma-like (synthetic)"
}


### Thyroid Pattern Schema


{
"id": "thyroid_11",
"nuclear_features": ["grooves", "pseudoinclusions"],
"architecture": "papillary",
"interpretation": "PTC-like pattern (synthetic)"
}


### Sinonasal Case Schema


{
"id": "sinonasal_07",
"features": ["rosette cartoon"],
"ihc": {"synaptophysin": "positive"},
"interpretation": "Olfactory neuroblastoma-like (synthetic)"
}


### Odontogenic Lesion Schema


{
"id": "odontogenic_03",
"pattern": ["peripheral palisading", "stellate reticulum-like areas"],
"interpretation": "Ameloblastoma-like pattern (synthetic)"
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
Sections: Oral • Larynx • Sinonasal • Salivary • Thyroid • Parathyroid • Odontogenic • Neck Masses • IHC • Molecular • Pitfalls • Cases • Assessment • Settings

### LESSON PAGE  
- Diagrammatic histology  
- Pattern tables  
- IHC/molecular clues  
- Pitfall alerts  
- Quick quiz  

### CASE ENGINE  
- Integrated multi-modality synthetic cases  
- Immediate feedback  

### ASSESSMENT  
- MCQ + pattern identification  
- Session-only scoring  

### SETTINGS  
- Dark/light mode  
- About  
- Disclaimers  

---

# **12. COPY & CONTENT KIT**

Examples:
- “HPV-associated SCC tends to be non-keratinizing and p16-positive (conceptual).”  
- “Adenoid cystic carcinoma has a Swiss cheese cartoon pattern with basement membrane material.”  
- “PTC nuclei show grooves + pseudoinclusions in cartoon form.”  
- “Ameloblastoma shows peripheral palisading and stellate reticulum-like areas.”  
- “MYB–NFIB fusion is conceptually associated with ACC.”  
- “EBV association is conceptual for nasopharyngeal carcinoma.”

Glossary includes:  
Koilocyte, palisading, pseudoinclusion, verrucous, NUT carcinoma, stellate reticulum, hobnail cells, amyloid-like stroma, oncocytic, etc.

---

# **13. CREATOR-SIDE A/B TESTING (No In-App Tracking)**  
Ideas:  
- Dysplasia vs reactive modules  
- Thyroid follicular-pattern differentiation  
- Salivary tumor family clustering logic  
- Sinonasal pattern clarity testing  

---

# **14. QA CHECKLIST**
- All morphology frameworks accurate (conceptual)  
- IHC/molecular logic non-clinical & conceptual  
- No photomicrographs  
- No PHI  
- No treatment logic  
- Dark-mode/offline tested  

---

# **15. ROADMAP**
- M0: Oral + Larynx + Sinonasal  
- M1: Salivary + Thyroid + Parathyroid  
- M2: Odontogenic + Neck Masses  
- M3: IHC/Molecular + Pitfalls  
- M4: 100+ Integrated Case Bank  

---

# **ACCEPTANCE CRITERIA**
- Covers complete H&N pathology curriculum at residency level  
- All diagrams synthetic  
- Educational-only  
- Mobile-first, dark-mode, offline  
- No tracking or PHI  

---

## **NOW GENERATE**
Using this blueprint, generate the full **Head & Neck Path Master** educational app specification in the required format and constraints.  
