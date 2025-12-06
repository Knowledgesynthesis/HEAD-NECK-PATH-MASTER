import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function SinonasalPage() {
  const sections = [
    {
      title: 'Benign & Inflammatory Lesions',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Chronic Sinusitis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Chronic inflammation with eosinophils</li>
                <li>Mucosal thickening</li>
                <li>Polyp formation common</li>
                <li>Fungal forms may be present (allergic fungal sinusitis)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Schneiderian Papillomas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-sm mb-1">Inverted Papilloma</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Most common type</li>
                    <li>Inverted growth pattern into stroma</li>
                    <li>Squamous and respiratory epithelium</li>
                    <li>Risk of malignant transformation (~10%)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">Fungiform (Exophytic) Papilloma</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Exophytic growth</li>
                    <li>HPV-related (similar to oral papillomas)</li>
                    <li>Lower malignant potential</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">Oncocytic Papilloma</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Oncocytic (eosinophilic granular) epithelium</li>
                    <li>Exophytic and endophytic patterns</li>
                    <li>Rare type</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Malignant Tumors',
      content: (
        <div className="space-y-3">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle>Sinonasal Undifferentiated Carcinoma (SNUC)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Morphology:</strong> High-grade, undifferentiated small to medium cells</li>
                <li><strong>Growth:</strong> Sheets, nests, trabeculae</li>
                <li><strong>IHC:</strong> Broad cytokeratin+, neuroendocrine markers negative (vs neuroendocrine carcinoma)</li>
                <li><strong>Prognosis:</strong> Aggressive with poor outcomes</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>NUT Carcinoma</CardTitle>
              <CardDescription>NUTM1 rearrangement</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Age:</strong> Young adults and children</li>
                <li><strong>Pattern:</strong> Poorly differentiated with squamous differentiation</li>
                <li><strong>Key feature:</strong> Abrupt keratinization</li>
                <li><strong>IHC:</strong> NUT (nuclear staining) - diagnostic</li>
                <li><strong>Prognosis:</strong> Highly aggressive</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Olfactory Neuroblastoma (Esthesioneuroblastoma)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Origin:</strong> Olfactory neuroepithelium</li>
                <li><strong>Pattern:</strong> Lobular architecture, rosettes (Homer Wright type)</li>
                <li><strong>Background:</strong> Neurofibrillary matrix</li>
                <li><strong>IHC:</strong> Synaptophysin+, chromogranin+, S100+ (sustentacular cells)</li>
                <li><strong>Grading:</strong> Hyams grading (I-IV)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Adenocarcinomas',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Intestinal-Type Adenocarcinoma (ITAC)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Association:</strong> Wood dust exposure (furniture workers)</li>
                <li><strong>Pattern:</strong> Resembles colorectal adenocarcinoma</li>
                <li><strong>IHC:</strong> CDX2+, CK20+, villin+</li>
                <li><strong>Location:</strong> Ethmoid sinuses typically</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Non-Intestinal-Type Adenocarcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Lack intestinal differentiation</li>
                <li>Variable growth patterns (papillary, solid, mucinous)</li>
                <li>CDX2 negative</li>
                <li>May arise from seromucinous glands</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Other Sinonasal Malignancies',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Sinonasal Melanoma</h4>
            <p className="text-sm mb-2">Mucosal melanoma arising from sinonasal tract. Variable morphology. Requires IHC (S100, SOX10, Melan-A, HMB-45).</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Nasopharyngeal Carcinoma (NPC)</h4>
            <p className="text-sm mb-2">Non-keratinizing carcinoma associated with EBV. Common in endemic areas. EBER ISH positive.</p>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Inverted papilloma has malignant transformation risk (~10%) and requires complete excision',
    'SNUC is high-grade undifferentiated carcinoma, distinguished from neuroendocrine by negative chromogranin/synaptophysin',
    'NUT carcinoma shows NUTM1 rearrangement and NUT IHC positivity - key diagnostic marker',
    'Olfactory neuroblastoma shows lobular architecture with rosettes and neuronal differentiation',
    'ITAC is associated with wood dust exposure and shows intestinal differentiation (CDX2+)'
  ]

  const pitfalls = [
    'Inverted papilloma with severe dysplasia vs invasive carcinoma - look for breach of basement membrane',
    'SNUC vs poorly differentiated neuroendocrine carcinoma - neuroendocrine markers help distinguish',
    'NUT carcinoma can be misdiagnosed as SNUC without NUT IHC testing',
    'Olfactory neuroblastoma vs other small blue round cell tumors - IHC panel essential',
    'HPV-related multiphenotypic sinonasal carcinoma can mimic SNUC - p16 may be positive'
  ]

  return (
    <ModulePage
      title="Sinonasal Tract"
      description="Schneiderian papillomas, undifferentiated carcinoma, NUT carcinoma, and olfactory neuroblastoma"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
