import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function OralPage() {
  const sections = [
    {
      title: 'Normal Anatomy & Histology',
      content: (
        <div className="space-y-4">
          <p>The oral cavity is lined by stratified squamous epithelium, which varies in keratinization depending on anatomic site.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Keratinized Sites</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Hard palate</li>
                <li>Gingiva</li>
                <li>Dorsal tongue</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Non-Keratinized Sites</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Buccal mucosa</li>
                <li>Soft palate</li>
                <li>Ventral tongue</li>
                <li>Floor of mouth</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dysplasia Spectrum',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Dysplasia represents disordered maturation and cytologic atypia confined to the epithelium.
          </p>
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Mild Dysplasia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Architectural changes in lower third of epithelium</li>
                  <li>Basilar hyperplasia</li>
                  <li>Minimal nuclear atypia</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Moderate Dysplasia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Involvement of lower two-thirds of epithelium</li>
                  <li>More prominent nuclear atypia</li>
                  <li>Increased mitotic activity</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Severe Dysplasia / CIS</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Full-thickness or near full-thickness involvement</li>
                  <li>Marked nuclear atypia</li>
                  <li>Abnormal mitoses may be present</li>
                  <li>No invasion through basement membrane</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: 'Squamous Cell Carcinoma (SCC) Patterns',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle>HPV-Associated SCC</CardTitle>
                <CardDescription>Typically oropharyngeal (tonsillar, base of tongue)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Pattern:</strong> Non-keratinizing or basaloid</li>
                  <li><strong>Morphology:</strong> Syncytial growth, minimal keratinization</li>
                  <li><strong>IHC:</strong> p16 positive (strong, diffuse)</li>
                  <li><strong>Prognosis:</strong> Generally better than HPV-negative</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle>HPV-Independent SCC</CardTitle>
                <CardDescription>Oral cavity, larynx</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Pattern:</strong> Keratinizing</li>
                  <li><strong>Morphology:</strong> Keratin pearls, intercellular bridges</li>
                  <li><strong>IHC:</strong> p16 negative or patchy</li>
                  <li><strong>Risk factors:</strong> Tobacco, alcohol</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Verrucous Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Well-differentiated variant of SCC</li>
                <li>"Church spire" or "Cathedral" growth pattern</li>
                <li>Minimal cytologic atypia</li>
                <li>Pushing, not infiltrative borders</li>
                <li>Excellent prognosis with surgery</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'IHC & Molecular Markers',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">p16</h4>
            <p className="text-sm">Surrogate marker for HPV pathway activation. Strong, diffuse nuclear and cytoplasmic staining suggests HPV-associated SCC.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">p53</h4>
            <p className="text-sm">Abnormal patterns (complete loss or strong diffuse staining) suggest TP53 mutation, common in HPV-negative SCC.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Ki-67</h4>
            <p className="text-sm">Proliferation marker. Distribution pattern helps distinguish dysplasia grades and reactive changes.</p>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Distinguish reactive atypia from true dysplasia using architectural and cytologic criteria',
    'HPV-associated SCC is non-keratinizing, p16-positive, and has better prognosis',
    'HPV-independent SCC shows keratinization and is associated with tobacco/alcohol use',
    'Verrucous carcinoma is a well-differentiated variant with excellent prognosis',
    'p16 is a surrogate marker for HPV status in oropharyngeal SCC'
  ]

  const pitfalls = [
    'Reactive atypia vs dysplasia: Look for preserved maturation and organized architecture in reactive changes',
    'Pseudoepitheliomatous hyperplasia can mimic invasive SCC - look for lack of true cytologic atypia',
    'p16 staining must be strong and diffuse (>70% of tumor cells) to suggest HPV-positivity',
    'Tangential sectioning can create false impression of dysplasia',
    'Not all non-keratinizing SCC in oropharynx is HPV-positive - confirm with p16 IHC'
  ]

  return (
    <ModulePage
      title="Oral Cavity & Oropharynx"
      description="Squamous pathology, dysplasia grading, and HPV-associated vs HPV-independent SCC patterns"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
