import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function IHCPage() {
  const sections = [
    {
      title: 'Cytokeratin Patterns',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pan-Cytokeratin (AE1/AE3, CAM5.2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Broad-spectrum markers for epithelial differentiation</li>
                <li>Positive in most carcinomas</li>
                <li>Useful for confirming carcinoma vs sarcoma/melanoma</li>
                <li>Negative in lymphoma, most sarcomas</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">CK7 & CK20</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1">CK7+ / CK20-</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Salivary gland tumors</li>
                    <li>Thyroid carcinomas</li>
                    <li>Lung adenocarcinoma</li>
                    <li>Breast carcinoma</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">CK7- / CK20+</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Colorectal carcinoma</li>
                    <li>Merkel cell carcinoma (also neuroendocrine markers+)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">CK7+ / CK20+</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Intestinal-type sinonasal adenocarcinoma</li>
                    <li>Urothelial carcinoma</li>
                    <li>Some pancreaticobiliary carcinomas</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">CK7- / CK20-</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Most squamous cell carcinomas</li>
                    <li>Hepatocellular carcinoma</li>
                    <li>Renal cell carcinoma (some)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">High Molecular Weight Cytokeratins (CK5/6, p63, p40)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>CK5/6:</strong> Squamous differentiation, myoepithelial cells</li>
                <li><strong>p63:</strong> Squamous and myoepithelial marker, ΔNp63 in SCC</li>
                <li><strong>p40:</strong> More specific than p63 for squamous (ΔNp63 isoform)</li>
                <li><strong>Use:</strong> Confirm squamous differentiation, identify myoepithelial layer in salivary tumors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Thyroid Markers',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>TTF-1 (Thyroid Transcription Factor-1)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Positive:</strong> Thyroid follicular-derived tumors (PTC, FTC, medullary)</li>
                <li><strong>Also positive:</strong> Lung adenocarcinoma</li>
                <li><strong>Pattern:</strong> Nuclear staining</li>
                <li><strong>Use:</strong> Thyroid vs other primaries, lung adenocarcinoma</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>PAX8</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Positive: Thyroid, renal, Müllerian tumors</li>
                <li>Nuclear staining</li>
                <li>More specific than TTF-1 when combined with thyroglobulin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Thyroglobulin</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Highly specific for thyroid follicular epithelium</li>
                <li>Positive in PTC, FTC, follicular adenoma</li>
                <li>Negative in medullary thyroid carcinoma (C-cell origin)</li>
                <li>Use: Confirm thyroid origin of metastasis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Calcitonin</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Specific for C-cells (parafollicular cells)</li>
                <li>Positive in medullary thyroid carcinoma</li>
                <li>Also useful: CEA, chromogranin, synaptophysin</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Salivary Gland Markers',
      content: (
        <div className="space-y-3">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>DOG1</CardTitle>
              <CardDescription>Discovered on GIST-1</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Highly sensitive:</strong> Acinic cell carcinoma</li>
                <li><strong>Also positive:</strong> Intercalated duct lesions, normal salivary tissue</li>
                <li><strong>Pattern:</strong> Membranous and cytoplasmic</li>
                <li><strong>Note:</strong> Originally identified in GI stromal tumors (GIST)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>Mammaglobin & GATA3</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Positive:</strong> Secretory carcinoma (mammary analogue)</li>
                <li><strong>Mammaglobin:</strong> Cytoplasmic staining</li>
                <li><strong>GATA3:</strong> Nuclear staining</li>
                <li><strong>Also positive:</strong> Breast carcinoma (differential consideration)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>Myoepithelial Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>p63/p40:</strong> Nuclear, highlights outer myoepithelial layer</li>
                <li><strong>SMA:</strong> Cytoplasmic, smooth muscle actin</li>
                <li><strong>Calponin:</strong> Cytoplasmic</li>
                <li><strong>S100:</strong> Nuclear and cytoplasmic, less specific</li>
                <li><strong>SOX10:</strong> Nuclear, myoepithelial and neural</li>
                <li><strong>Use:</strong> Confirm dual population in pleomorphic adenoma, identify myoepithelial carcinoma</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>Androgen Receptor (AR)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Positive in salivary duct carcinoma</li>
                <li>Nuclear staining</li>
                <li>Therapeutic target (similar to prostate cancer)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>c-kit (CD117)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Positive in adenoid cystic carcinoma</li>
                <li>Membranous staining</li>
                <li>Also positive in some other salivary tumors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'HPV & Viral Markers',
      content: (
        <div className="space-y-3">
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>p16</CardTitle>
              <CardDescription>Surrogate marker for HPV pathway activation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Interpretation:</strong> Strong, diffuse nuclear and cytoplasmic ({'>'}70% of cells)</li>
                <li><strong>Positive:</strong> Suggests HPV-associated SCC (confirm with HR-HPV testing if needed)</li>
                <li><strong>Site:</strong> Oropharynx (tonsil, base of tongue) most common</li>
                <li><strong>Pitfall:</strong> p16 overexpression can occur without HPV; weak/patchy staining not specific</li>
                <li><strong>Clinical significance:</strong> Better prognosis in HPV+ oropharyngeal SCC</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>EBER (EBV Encoded RNA) ISH</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Detects Epstein-Barr virus</li>
                <li>Positive in nasopharyngeal carcinoma (endemic type)</li>
                <li>Also positive in some lymphomas (Burkitt, PTLD)</li>
                <li>Nuclear staining on in situ hybridization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Neuroendocrine & Neural Markers',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Synaptophysin</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Neuroendocrine marker</li>
                <li>Positive: Medullary thyroid, olfactory neuroblastoma, neuroendocrine carcinomas</li>
                <li>Cytoplasmic and membranous staining</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Chromogranin</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Neuroendocrine marker</li>
                <li>Less sensitive than synaptophysin but more specific</li>
                <li>Positive in well-differentiated neuroendocrine tumors</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">S100</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Neural:</strong> Schwannoma, neurofibroma</li>
                <li><strong>Melanocytic:</strong> Melanoma (with SOX10, Melan-A, HMB-45)</li>
                <li><strong>Salivary:</strong> Myoepithelial cells, pleomorphic adenoma</li>
                <li><strong>Other:</strong> Sustentacular cells in olfactory neuroblastoma</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">SOX10</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Neural crest-derived tissues</li>
                <li>Positive: Melanoma, schwannoma, myoepithelial cells</li>
                <li>Nuclear staining</li>
                <li>Useful in salivary gland tumor diagnosis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Special Markers',
      content: (
        <div className="space-y-3">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>NUT</CardTitle>
              <CardDescription>Nuclear protein in testis</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Diagnostic for:</strong> NUT carcinoma (NUTM1 rearrangement)</li>
                <li><strong>Pattern:</strong> Nuclear staining</li>
                <li><strong>Site:</strong> Sinonasal, thorax, other midline structures</li>
                <li><strong>Clinical:</strong> Aggressive tumor, young patients</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>CDX2</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Intestinal differentiation marker</li>
                <li>Positive in intestinal-type sinonasal adenocarcinoma (ITAC)</li>
                <li>Also positive in colorectal carcinoma</li>
                <li>Nuclear staining</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>p53</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Abnormal patterns:</strong> Complete loss OR strong diffuse nuclear staining</li>
                <li><strong>Indicates:</strong> TP53 mutation</li>
                <li><strong>Common in:</strong> HPV-negative SCC, high-grade carcinomas</li>
                <li><strong>Wild-type pattern:</strong> Variable, moderate staining</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    }
  ]

  const keyPoints = [
    'p16 must be strong and diffuse (>70%) to suggest HPV-positivity; weak/patchy not specific',
    'TTF-1 is positive in thyroid AND lung adenocarcinoma; use with thyroglobulin for thyroid',
    'DOG1 is highly sensitive for acinic cell carcinoma',
    'NUT IHC is diagnostic for NUT carcinoma when positive',
    'Myoepithelial markers (p63, SMA, SOX10) identify dual population in salivary tumors'
  ]

  const pitfalls = [
    'p16 overexpression without HPV can occur - consider HR-HPV testing if clinically relevant',
    'TTF-1 alone cannot distinguish thyroid from lung - need thyroglobulin for thyroid confirmation',
    'S100 is sensitive but not specific - positive in many cell types',
    'p53 wild-type shows variable staining - only complete absence or strong diffuse staining is abnormal',
    'CK7/CK20 patterns have exceptions - use in context with morphology and clinical history'
  ]

  return (
    <ModulePage
      title="IHC Frameworks"
      description="Immunohistochemical markers for H&N pathology diagnosis and tumor classification"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
