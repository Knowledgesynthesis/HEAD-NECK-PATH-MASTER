import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertTriangle } from 'lucide-react'

export function PitfallsPage() {
  const pitfallCategories = [
    {
      category: 'Squamous Lesions',
      pitfalls: [
        {
          title: 'Pseudoepitheliomatous Hyperplasia vs Invasive SCC',
          mimic: 'Pseudoepitheliomatous hyperplasia',
          mimics: 'Invasive squamous cell carcinoma',
          clues: 'PEH shows lack of true cytologic atypia, organized maturation, and often occurs adjacent to ulcers or granular cell tumors. True SCC has infiltrative pattern with desmoplastic stroma and cytologic atypia.'
        },
        {
          title: 'Reactive Atypia vs Dysplasia',
          mimic: 'Reactive atypia',
          mimics: 'True dysplasia',
          clues: 'Reactive changes show preserved maturation, organized architecture, and inflammatory context. Dysplasia has disordered maturation, loss of polarity, and nuclear atypia extending beyond the basal layer.'
        },
        {
          title: 'Tangential Sectioning Artifact',
          mimic: 'Tangentially cut normal epithelium',
          mimics: 'Dysplasia or invasion',
          clues: 'Tangential sections can create false impression of architectural disorder. Look for adjacent properly oriented epithelium and lack of true cytologic atypia.'
        },
        {
          title: 'Weak/Patchy p16 Staining',
          mimic: 'Weak or patchy p16',
          mimics: 'HPV-positive SCC',
          clues: 'Only strong, diffuse nuclear and cytoplasmic p16 staining (>70% of tumor) suggests HPV-positivity. Weak or patchy staining is not specific and can occur in HPV-negative tumors.'
        }
      ]
    },
    {
      category: 'Thyroid',
      pitfalls: [
        {
          title: 'PTC Nuclear Features from Artifact',
          mimic: 'Nuclear clearing from fixation/processing',
          mimics: 'True papillary thyroid carcinoma nuclei',
          clues: 'Artifactual clearing is often in scattered cells, lacks nuclear grooves and pseudoinclusions, and doesn\'t show other architectural features of PTC.'
        },
        {
          title: 'Follicular Adenoma vs Minimally Invasive Carcinoma',
          mimic: 'Follicular adenoma with thick capsule',
          mimics: 'Minimally invasive follicular carcinoma',
          clues: 'Entire capsule must be thoroughly examined. True capsular invasion shows tumor penetrating through capsule into adjacent tissue. Vascular invasion requires tumor within vessel wall.'
        },
        {
          title: 'NIFTP Criteria',
          mimic: 'Follicular variant PTC',
          mimics: 'NIFTP',
          clues: 'NIFTP requires strict criteria: encapsulated/well-circumscribed, NO papillae, NO psammoma bodies, NO invasion, follicular architecture with PTC nuclei. Presence of any papillae excludes NIFTP.'
        },
        {
          title: 'Hashimoto Thyroiditis Hürthle Cell Change',
          mimic: 'Hürthle cell change in Hashimoto',
          mimics: 'Hürthle cell neoplasm',
          clues: 'Background lymphocytic thyroiditis, lack of capsule, and patchy distribution suggest Hashimoto. True Hürthle neoplasms are circumscribed/encapsulated masses.'
        }
      ]
    },
    {
      category: 'Salivary Gland',
      pitfalls: [
        {
          title: 'Polymorphous Adenocarcinoma vs Adenoid Cystic',
          mimic: 'Polymorphous adenocarcinoma with cribriform pattern',
          mimics: 'Adenoid cystic carcinoma',
          clues: 'PA has bland, uniform cytology despite varied architecture. ACC has basaloid cells with basement membrane material and often perineural invasion. Site matters: PA in minor glands (palate), ACC in major or minor.'
        },
        {
          title: 'Pleomorphic Adenoma Incomplete Excision',
          mimic: 'Capsulated pleomorphic adenoma',
          mimics: 'Complete excision',
          clues: 'PA can have pseudopods extending beyond visible capsule. Incomplete excision leads to recurrence. Recommend adequate margins to surgeon.'
        },
        {
          title: 'Basal Cell Adenoma vs Adenoid Cystic',
          mimic: 'Basal cell adenoma',
          mimics: 'Adenoid cystic carcinoma',
          clues: 'BCA is benign despite basaloid appearance. Well-circumscribed, lacks infiltrative growth and perineural invasion. ACC is infiltrative with characteristic cribriform pattern.'
        },
        {
          title: 'Acinic Cell High-Grade Transformation',
          mimic: 'High-grade transformation in acinic cell',
          mimics: 'Original low-grade acinic cell',
          clues: 'High-grade transformation dramatically changes prognosis. Look for increased mitoses, necrosis, pleomorphism. Communicating this finding is crucial.'
        }
      ]
    },
    {
      category: 'Sinonasal',
      pitfalls: [
        {
          title: 'Inverted Papilloma with Severe Dysplasia vs Carcinoma',
          mimic: 'Inverted papilloma with severe dysplasia',
          mimics: 'Invasive carcinoma',
          clues: 'Look for breach of basement membrane and infiltrative growth. Severe dysplasia confined to papilloma without invasion is still treated as dysplastic IP. Carcinoma ex IP requires true invasion.'
        },
        {
          title: 'SNUC vs Poorly Differentiated Neuroendocrine Carcinoma',
          mimic: 'Sinonasal undifferentiated carcinoma',
          mimics: 'Neuroendocrine carcinoma',
          clues: 'SNUC is negative for chromogranin and synaptophysin. Neuroendocrine carcinoma shows neuroendocrine differentiation by IHC. Both are high-grade and aggressive.'
        },
        {
          title: 'NUT Carcinoma vs SNUC',
          mimic: 'NUT carcinoma without IHC',
          mimics: 'SNUC',
          clues: 'NUT carcinoma can be misdiagnosed as SNUC without NUT IHC. Young age, abrupt keratinization, and midline location suggest NUT. Always include NUT IHC in sinonasal undifferentiated tumors.'
        },
        {
          title: 'HPV-Related Multiphenotypic Sinonasal Carcinoma',
          mimic: 'HPV-related multiphenotypic carcinoma',
          mimics: 'SNUC',
          clues: 'p16 positivity and adenoid/papillary features suggest HPV-related carcinoma. Better prognosis than SNUC. Emerging entity.'
        }
      ]
    },
    {
      category: 'Odontogenic',
      pitfalls: [
        {
          title: 'Odontogenic Keratocyst vs Dentigerous Cyst',
          mimic: 'Odontogenic keratocyst',
          mimics: 'Dentigerous cyst',
          clues: 'OKC has palisaded basal layer with hyperchromatic nuclei and corrugated parakeratotic surface. Dentigerous cyst has thin (2-3 cell) non-keratinized lining. OKC has high recurrence rate.'
        },
        {
          title: 'Ameloblastoma vs Basaloid SCC',
          mimic: 'Ameloblastoma',
          mimics: 'Basaloid squamous cell carcinoma',
          clues: 'Ameloblastoma lacks high-grade cytologic features and has characteristic peripheral palisading with stellate reticulum. Basaloid SCC shows significant cytologic atypia and necrosis.'
        },
        {
          title: 'Unicystic Ameloblastoma from Dentigerous Cyst',
          mimic: 'Simple dentigerous cyst',
          mimics: 'Dentigerous cyst with ameloblastoma',
          clues: 'Complete microscopic examination of cyst wall needed. Unicystic ameloblastoma can arise in dentigerous cyst. Look for ameloblastomatous epithelium.'
        },
        {
          title: 'Fragment Limitation in Cyst Diagnosis',
          mimic: 'Small curettage fragments',
          mimics: 'Definitive cyst typing',
          clues: 'Small fragments may not allow definitive distinction between cyst types. Comment on limitations and describe features present.'
        }
      ]
    },
    {
      category: 'Neck Masses',
      pitfalls: [
        {
          title: 'Cystic PTC Metastasis vs Branchial Cleft Cyst',
          mimic: 'Cystic PTC metastasis',
          mimics: 'Branchial cleft cyst',
          clues: 'Look carefully for PTC nuclear features in cyst lining. TTF-1 and thyroglobulin IHC confirm thyroid origin. "Branchial cleft cyst" in adults should raise concern for cystic metastasis.'
        },
        {
          title: 'Cystic HPV+ SCC Metastasis',
          mimic: 'Cystic lymph node metastasis',
          mimics: 'Benign cyst',
          clues: 'Cystic SCC in neck node, especially if p16+, suggests HPV+ oropharyngeal primary. Look carefully for carcinoma in cyst wall. p16 IHC helps confirm.'
        },
        {
          title: 'Reactive Follicular Hyperplasia vs Follicular Lymphoma',
          mimic: 'Reactive follicular hyperplasia',
          mimics: 'Follicular lymphoma',
          clues: 'Reactive: variable sized follicles, tingible body macrophages, polarization, preserved sinuses. Lymphoma: monotonous follicles, lack tingible bodies, back-to-back pattern. Flow cytometry confirms.'
        },
        {
          title: 'Micrometastasis in "Reactive" Node',
          mimic: 'Reactive lymph node',
          mimics: 'Node without metastasis',
          clues: 'Careful examination of subcapsular sinus and node parenchyma. Isolated tumor cells or small clusters can be missed. Cytokeratin IHC can help if suspicious.'
        }
      ]
    },
    {
      category: 'Parathyroid',
      pitfalls: [
        {
          title: 'Parathyroid Adenoma vs Hyperplasia',
          mimic: 'Parathyroid adenoma',
          mimics: 'Hyperplasia',
          clues: 'Cannot reliably distinguish on single gland biopsy. Adenoma: single gland, rim of normal parathyroid. Hyperplasia: multiple glands (clinical/surgical info). Clinical correlation essential.'
        },
        {
          title: 'Atypical Adenoma vs Carcinoma',
          mimic: 'Atypical adenoma with worrisome features',
          mimics: 'Parathyroid carcinoma',
          clues: 'Fibrous bands and mitoses are worrisome but not diagnostic alone. Carcinoma requires vascular invasion, capsular invasion with invasion into adjacent tissue, or metastasis. Follow-up may be needed.'
        },
        {
          title: 'Parathyroid vs Thyroid Tissue',
          mimic: 'Parathyroid tissue',
          mimics: 'Thyroid tissue',
          clues: 'Parathyroid can be within thyroid gland. PTH IHC confirms parathyroid origin. Lack of colloid-filled follicles favors parathyroid.'
        },
        {
          title: 'Age-Related Fat Content',
          mimic: 'Decreased fat in elderly parathyroid',
          mimics: 'Pathologic process',
          clues: 'Fat content varies with age. Decreased fat alone is not diagnostic of adenoma or hyperplasia. Must correlate with clinical PTH and calcium levels.'
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Pitfalls & Dangerous Mimics</h1>
        <p className="text-muted-foreground text-lg">
          Common diagnostic challenges and morphologic mimics in H&N pathology
        </p>
      </div>

      <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-yellow-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-yellow-600 dark:text-yellow-500 mb-1">
              Educational Purpose Only
            </p>
            <p className="text-sm text-yellow-600 dark:text-yellow-500">
              These pitfalls are presented for educational purposes to enhance diagnostic awareness.
              Always correlate with clinical context and use appropriate ancillary studies when needed.
            </p>
          </div>
        </div>
      </div>

      {pitfallCategories.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <div className="space-y-4">
            {category.pitfalls.map((pitfall, pidx) => (
              <Card key={pidx} className="border-yellow-500/20 bg-yellow-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="text-yellow-500" size={20} />
                    {pitfall.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-background rounded border">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">MIMIC:</p>
                        <p className="text-sm">{pitfall.mimic}</p>
                      </div>
                      <div className="p-3 bg-background rounded border">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">CAN BE MISTAKEN FOR:</p>
                        <p className="text-sm">{pitfall.mimics}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded">
                      <p className="text-xs font-semibold text-green-600 dark:text-green-500 mb-1">KEY TO DISTINCTION:</p>
                      <p className="text-sm text-green-600 dark:text-green-500">{pitfall.clues}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>General Principles for Avoiding Pitfalls</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Always correlate with clinical context:</strong> Age, site, symptoms, imaging</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Use IHC judiciously:</strong> Don't rely on single marker; use panels</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Examine entire specimen:</strong> Don't rely on limited sampling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Recognize technical artifacts:</strong> Fixation, processing, staining issues</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Know your limitations:</strong> Consult or defer when uncertain</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span><strong>Communicate clearly:</strong> Explain differential and limitations in report</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
