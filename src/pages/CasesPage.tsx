import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface CaseData {
  id: string
  title: string
  category: string
  clinical: string
  morphology: string[]
  ihc?: { marker: string; result: string }[]
  molecular?: string
  diagnosis: string
  rationale: string
  keyPoints: string[]
}

const cases: CaseData[] = [
  {
    id: 'case1',
    title: 'Cystic Neck Mass in Young Adult',
    category: 'Neck Mass',
    clinical: '28-year-old male with 2 cm cystic left neck mass. No known primary tumor.',
    morphology: [
      'Lymph node architecture partially effaced',
      'Cystic spaces lined by non-keratinizing epithelium',
      'Nests of basaloid cells',
      'Minimal keratinization'
    ],
    ihc: [
      { marker: 'p16', result: 'Strong, diffuse nuclear and cytoplasmic (95% of cells)' },
      { marker: 'CK5/6', result: 'Positive' },
      { marker: 'TTF-1', result: 'Negative' }
    ],
    diagnosis: 'Metastatic HPV-associated squamous cell carcinoma in lymph node',
    rationale: 'Cystic neck mass with non-keratinizing SCC and strong diffuse p16 positivity is characteristic of HPV-associated oropharyngeal SCC metastasis. Primary likely in tonsil or base of tongue.',
    keyPoints: [
      'Cystic morphology common in HPV+ SCC metastases',
      'p16 must be strong and diffuse (>70%) to suggest HPV',
      'Recommend ENT evaluation for oropharyngeal primary'
    ]
  },
  {
    id: 'case2',
    title: 'Parotid Mass with Cribriform Architecture',
    category: 'Salivary Gland',
    clinical: '55-year-old female with slowly growing right parotid mass. Facial nerve symptoms.',
    morphology: [
      'Infiltrative tumor',
      'Cribriform "Swiss cheese" pattern',
      'Basaloid cells forming cylindromas',
      'Basement membrane-like material in lumina',
      'Perineural invasion present'
    ],
    ihc: [
      { marker: 'c-kit (CD117)', result: 'Positive' },
      { marker: 'p63', result: 'Positive in outer cells' },
      { marker: 'SMA', result: 'Positive in outer cells' }
    ],
    molecular: 'MYB-NFIB fusion detected',
    diagnosis: 'Adenoid cystic carcinoma',
    rationale: 'Cribriform pattern with basement membrane material, perineural invasion, and MYB-NFIB fusion are characteristic of ACC. Dual cell population (p63+ outer cells) supports diagnosis.',
    keyPoints: [
      'Perineural invasion is hallmark of ACC',
      'MYB-NFIB fusion in ~60% of ACC',
      'Slow growing but relentless; distant metastases can occur years later'
    ]
  },
  {
    id: 'case3',
    title: 'Thyroid Nodule with Nuclear Grooves',
    category: 'Thyroid',
    clinical: '42-year-old female with 1.5 cm right thyroid nodule on ultrasound.',
    morphology: [
      'Papillary architecture with fibrovascular cores',
      'Nuclear clearing ("ground glass")',
      'Nuclear grooves prominent',
      'Intranuclear pseudoinclusions',
      'Psammoma bodies present'
    ],
    ihc: [
      { marker: 'TTF-1', result: 'Positive' },
      { marker: 'Thyroglobulin', result: 'Positive' },
      { marker: 'PAX8', result: 'Positive' }
    ],
    molecular: 'BRAF V600E mutation detected',
    diagnosis: 'Papillary thyroid carcinoma, classic type',
    rationale: 'Papillary architecture with characteristic nuclear features (grooves, pseudoinclusions, clearing) and BRAF V600E mutation are diagnostic of classic PTC.',
    keyPoints: [
      'Nuclear features (not architecture alone) define PTC',
      'BRAF V600E in ~50% of classic PTC',
      'Excellent prognosis with appropriate treatment'
    ]
  },
  {
    id: 'case4',
    title: 'Oral Cavity Lesion with Dysplastic Features',
    category: 'Oral Cavity',
    clinical: '58-year-old male smoker with white patch on lateral tongue. Tobacco use 40 pack-years.',
    morphology: [
      'Squamous epithelium with full-thickness atypia',
      'Loss of normal maturation',
      'Nuclear hyperchromasia and pleomorphism',
      'Increased mitotic activity including upper layers',
      'No breach of basement membrane',
      'Intact underlying lamina propria'
    ],
    ihc: [
      { marker: 'p16', result: 'Negative' },
      { marker: 'Ki-67', result: 'Positive in full thickness of epithelium' }
    ],
    diagnosis: 'Severe dysplasia / Carcinoma in situ',
    rationale: 'Full-thickness epithelial atypia with loss of maturation but intact basement membrane indicates severe dysplasia/CIS. p16 negativity supports HPV-independent pathway (tobacco-related).',
    keyPoints: [
      'Severe dysplasia/CIS has high risk of progression to invasive carcinoma',
      'Requires complete excision with margin assessment',
      'Tobacco-related, HPV-independent pathway (p16 negative)'
    ]
  },
  {
    id: 'case5',
    title: 'Minor Salivary Gland Tumor of Palate',
    category: 'Salivary Gland',
    clinical: '35-year-old female with 1 cm firm palatal mass.',
    morphology: [
      'Well-circumscribed tumor',
      'Diverse architectural patterns: tubular, solid, cribriform',
      'Uniform, bland cytology throughout',
      'Low mitotic activity',
      'No necrosis'
    ],
    ihc: [
      { marker: 'CK7', result: 'Positive' },
      { marker: 'S100', result: 'Patchy positive' },
      { marker: 'p63', result: 'Positive in subset of cells' }
    ],
    diagnosis: 'Polymorphous adenocarcinoma',
    rationale: 'Minor salivary gland tumor (palate) with diverse architectural patterns but uniform bland cytology is characteristic of polymorphous adenocarcinoma. Low-grade malignancy.',
    keyPoints: [
      'Polymorphous = diverse architecture, uniform cytology',
      'Contrast with ACC which has basaloid cytology and perineural invasion',
      'Low-grade malignancy; excellent prognosis with excision'
    ]
  },
  {
    id: 'case6',
    title: 'Sinonasal Mass in Young Patient',
    category: 'Sinonasal',
    clinical: '22-year-old male with rapidly growing ethmoid sinus mass. Poor prognosis on imaging.',
    morphology: [
      'Poorly differentiated carcinoma',
      'Sheets of monotonous cells',
      'Areas of abrupt keratinization',
      'High mitotic rate',
      'Necrosis present'
    ],
    ihc: [
      { marker: 'Pan-cytokeratin', result: 'Positive' },
      { marker: 'NUT', result: 'Strong nuclear positivity' },
      { marker: 'Synaptophysin', result: 'Negative' },
      { marker: 'Chromogranin', result: 'Negative' }
    ],
    molecular: 'BRD4-NUTM1 fusion detected',
    diagnosis: 'NUT carcinoma',
    rationale: 'Poorly differentiated midline carcinoma in young patient with abrupt keratinization and NUT nuclear positivity is diagnostic of NUT carcinoma. BRD4-NUTM1 fusion confirms.',
    keyPoints: [
      'NUT IHC is diagnostic when positive',
      'Young patients, midline structures, aggressive behavior',
      'NUTM1 rearrangements (BRD4-NUTM1 most common)'
    ]
  },
  {
    id: 'case7',
    title: 'Jaw Lesion with Palisading Epithelium',
    category: 'Odontogenic',
    clinical: '45-year-old male with expansile radiolucent lesion of posterior mandible.',
    morphology: [
      'Islands and cords of odontogenic epithelium',
      'Peripheral palisading of columnar cells',
      'Central areas with stellate reticulum-like tissue',
      'Reverse polarity of nuclei',
      'Infiltrative growth into bone'
    ],
    ihc: [
      { marker: 'CK', result: 'Positive' },
      { marker: 'p63', result: 'Positive' }
    ],
    molecular: 'BRAF V600E mutation detected',
    diagnosis: 'Ameloblastoma',
    rationale: 'Peripheral palisading of columnar cells with stellate reticulum-like centers and infiltrative growth is characteristic of ameloblastoma. BRAF V600E found in ~60%.',
    keyPoints: [
      'Locally aggressive with high recurrence if inadequately excised',
      'Requires wide surgical excision',
      'BRAF V600E in ~60% (same mutation as PTC, melanoma)'
    ]
  },
  {
    id: 'case8',
    title: 'Follicular-Patterned Thyroid Neoplasm',
    category: 'Thyroid',
    clinical: '38-year-old female with 2.5 cm encapsulated thyroid nodule.',
    morphology: [
      'Well-circumscribed, encapsulated tumor',
      'Follicular architecture throughout',
      'Nuclear features: grooves, some clearing',
      'No papillae',
      'No psammoma bodies',
      'No capsular or vascular invasion',
      'Low mitotic activity'
    ],
    ihc: [
      { marker: 'TTF-1', result: 'Positive' },
      { marker: 'Thyroglobulin', result: 'Positive' }
    ],
    molecular: 'NRAS mutation detected',
    diagnosis: 'Noninvasive follicular thyroid neoplasm with papillary-like nuclear features (NIFTP)',
    rationale: 'Encapsulated follicular tumor with PTC-like nuclei but NO papillae, NO psammoma bodies, and NO invasion meets NIFTP criteria. RAS mutation typical. Indolent behavior.',
    keyPoints: [
      'NIFTP is not carcinoma - indolent neoplasm',
      'Strict criteria: NO papillae, NO invasion, follicular architecture',
      'RAS mutations common; excellent prognosis'
    ]
  }
]

export function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleCaseClick = (caseId: string) => {
    setSelectedCase(caseId)
    setShowAnswer(false)
  }

  const currentCase = cases.find(c => c.id === selectedCase)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Integrated Case Bank</h1>
        <p className="text-muted-foreground text-lg">
          Synthetic cases integrating morphology, IHC, and molecular findings
        </p>
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-500">
          <strong>Educational Cases:</strong> All cases are synthetic and created for educational purposes only.
          They integrate clinical, morphologic, IHC, and molecular data to simulate real-world diagnostic scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Case List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Case Library ({cases.length} cases)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCaseClick(c.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCase === c.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{c.title}</div>
                        <div className="text-xs opacity-80 mt-1">{c.category}</div>
                      </div>
                      <ChevronRight size={16} className="flex-shrink-0 mt-0.5" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Case Details */}
        <div className="lg:col-span-2">
          {currentCase ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{currentCase.title}</CardTitle>
                  <CardDescription>{currentCase.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Clinical Information</h4>
                    <p className="text-sm p-3 bg-muted rounded">{currentCase.clinical}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Morphologic Features</h4>
                    <ul className="space-y-1">
                      {currentCase.morphology.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mr-2 text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentCase.ihc && (
                    <div>
                      <h4 className="font-semibold mb-2">Immunohistochemistry</h4>
                      <div className="space-y-2">
                        {currentCase.ihc.map((marker, idx) => (
                          <div key={idx} className="flex items-start text-sm p-2 bg-muted rounded">
                            <span className="font-semibold min-w-[120px]">{marker.marker}:</span>
                            <span className="text-muted-foreground">{marker.result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentCase.molecular && (
                    <div>
                      <h4 className="font-semibold mb-2">Molecular Findings</h4>
                      <p className="text-sm p-3 bg-muted rounded">{currentCase.molecular}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button onClick={() => setShowAnswer(!showAnswer)}>
                      {showAnswer ? 'Hide Diagnosis' : 'Show Diagnosis'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {showAnswer && (
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardHeader>
                    <CardTitle className="text-green-600 dark:text-green-500">Diagnosis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-background rounded border font-semibold">
                      {currentCase.diagnosis}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Rationale</h4>
                      <p className="text-sm">{currentCase.rationale}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Learning Points</h4>
                      <ul className="space-y-1">
                        {currentCase.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="mr-2 text-green-500">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12">
                <div className="text-center text-muted-foreground">
                  <p>Select a case from the library to begin</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
