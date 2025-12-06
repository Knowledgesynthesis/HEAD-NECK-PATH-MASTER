import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export function LarynxPage() {
  const sections = [
    {
      title: 'Laryngeal Anatomy',
      content: (
        <div className="space-y-4">
          <p>The larynx is divided into supraglottis, glottis, and subglottis, each with distinct histology and clinical implications.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Supraglottis</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Epiglottis</li>
                <li>False vocal cords</li>
                <li>Arytenoids</li>
                <li>Rich lymphatics</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Glottis</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>True vocal cords</li>
                <li>Anterior commissure</li>
                <li>Minimal lymphatics</li>
                <li>Late nodal spread</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Subglottis</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Below vocal cords</li>
                <li>Extends to cricoid</li>
                <li>Rare primary site</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dysplasia-Carcinoma Sequence',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Similar to oral cavity, laryngeal dysplasia progresses through mild, moderate, and severe grades before invasive carcinoma.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Grading Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Mild:</strong> Lower third involvement, basilar hyperplasia</li>
                <li><strong>Moderate:</strong> Lower two-thirds involvement, increased atypia</li>
                <li><strong>Severe/CIS:</strong> Full-thickness atypia, no basement membrane invasion</li>
              </ul>
            </CardContent>
          </Card>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-600 dark:text-yellow-500">
              <strong>Note:</strong> Some pathologists use a two-tier system (low-grade vs high-grade dysplasia) instead of the traditional three-tier system.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Benign & Reactive Lesions',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Vocal Cord Polyp/Nodule</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Polypoid stromal change (Reinke edema)</li>
                <li>Myxoid stroma</li>
                <li>Variable vascular proliferation</li>
                <li>Intact overlying epithelium</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reinke Edema</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bilateral vocal cord swelling</li>
                <li>Myxoid/edematous superficial lamina propria</li>
                <li>Associated with smoking, voice overuse</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Laryngeal Squamous Cell Carcinoma',
      content: (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Glottic:</strong> Early symptoms (hoarseness), best prognosis, late nodal spread</li>
                <li><strong>Supraglottic:</strong> Later symptoms, earlier nodal spread, worse prognosis</li>
                <li><strong>Subglottic:</strong> Rare, late presentation, poor prognosis</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Histologic Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Conventional SCC:</strong> Keratinizing, infiltrative growth</li>
                <li><strong>Verrucous:</strong> Well-differentiated, pushing borders, excellent prognosis</li>
                <li><strong>Basaloid:</strong> Aggressive variant, high-grade features</li>
                <li><strong>Spindle cell:</strong> Sarcomatoid variant, biphasic pattern</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Rare Laryngeal Tumors',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Chondrosarcoma</h4>
            <p className="text-sm">Arises from laryngeal cartilage framework. Low-grade tumors most common. Distinction from benign cartilage can be challenging.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Neuroendocrine Tumors</h4>
            <p className="text-sm">Range from well-differentiated (carcinoid) to poorly-differentiated (small cell). Require IHC confirmation (synaptophysin, chromogranin).</p>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Glottic SCC presents early with hoarseness and has better prognosis due to limited lymphatics',
    'Supraglottic SCC has rich lymphatic drainage and earlier nodal metastasis',
    'Dysplasia grading follows same principles as oral cavity',
    'Verrucous carcinoma is a well-differentiated variant with excellent prognosis',
    'Reinke edema is a benign reactive process, not neoplastic'
  ]

  const pitfalls = [
    'Tangential sections through vocal cord polyps can mimic invasion',
    'Pseudoepitheliomatous hyperplasia adjacent to ulcers can mimic SCC',
    'Low-grade chondrosarcoma vs reactive cartilage changes can be difficult',
    'Spindle cell carcinoma can be misdiagnosed as sarcoma without IHC',
    'Not all laryngeal masses are squamous - consider neuroendocrine and salivary-type tumors'
  ]

  return (
    <ModulePage
      title="Larynx & Hypopharynx"
      description="Dysplasia-carcinoma sequence, vocal cord pathology, and laryngeal SCC patterns"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
