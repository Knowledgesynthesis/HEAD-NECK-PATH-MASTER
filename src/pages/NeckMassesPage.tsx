import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export function NeckMassesPage() {
  const sections = [
    {
      title: 'Approach to Neck Lymph Node Assessment',
      content: (
        <div className="space-y-4">
          <p>Neck lymph nodes are a common site for metastasis from H&N primary tumors. Systematic evaluation is essential.</p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Key Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Is the node architecture normal or effaced?</li>
                <li>If abnormal, is it reactive/inflammatory vs neoplastic?</li>
                <li>If neoplastic, is it lymphoma vs metastatic carcinoma?</li>
                <li>If metastatic, what is the likely primary site?</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Reactive Lymph Nodes',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Follicular Hyperplasia</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Prominent germinal centers with tingible body macrophages</li>
                <li>Mixed small and large lymphocytes with mitoses</li>
                <li>Preserved sinuses and architecture</li>
                <li>Polarization of germinal centers</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Acute/Chronic Lymphadenitis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Neutrophils (acute) or lymphocytes/plasma cells (chronic)</li>
                <li>Preserved node architecture</li>
                <li>May have granulomas (mycobacterial, fungal, sarcoid)</li>
                <li>Consider infectious etiologies and stains if indicated</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Metastatic Squamous Cell Carcinoma',
      content: (
        <div className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle>HPV-Associated SCC Metastasis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Primary:</strong> Usually oropharynx (tonsil, base of tongue)</li>
                <li><strong>Pattern:</strong> Non-keratinizing, basaloid morphology</li>
                <li><strong>Growth:</strong> May show cystic change in lymph node</li>
                <li><strong>IHC:</strong> p16 positive (strong, diffuse)</li>
                <li><strong>Clinical:</strong> Often presents as neck mass before primary identified</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>HPV-Independent SCC Metastasis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Primary:</strong> Oral cavity, larynx, hypopharynx, skin</li>
                <li><strong>Pattern:</strong> Keratinizing SCC</li>
                <li><strong>Features:</strong> Keratin pearls, intercellular bridges</li>
                <li><strong>IHC:</strong> p16 negative or weak/patchy</li>
              </ul>
            </CardContent>
          </Card>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-600 dark:text-yellow-500">
              <strong>Cystic SCC in lymph node:</strong> Think HPV+ oropharyngeal primary. p16 IHC essential.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Thyroid Metastasis',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Papillary Thyroid Carcinoma Metastasis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Most common thyroid malignancy to metastasize to nodes</strong></li>
                <li><strong>Pattern:</strong> May show papillary architecture or cystic change</li>
                <li><strong>Nuclei:</strong> Ground glass, grooves, pseudoinclusions</li>
                <li><strong>IHC:</strong> TTF-1+, thyroglobulin+, PAX8+</li>
                <li><strong>Pitfall:</strong> Cystic metastasis can mimic branchial cleft cyst</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Medullary Thyroid Carcinoma Metastasis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Neuroendocrine morphology</li>
                <li>Amyloid stroma may be present</li>
                <li>IHC: Calcitonin+, CEA+, chromogranin+, synaptophysin+, TTF-1+</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Salivary Gland Tumor Metastasis',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            High-grade salivary malignancies (salivary duct carcinoma, high-grade mucoepidermoid, adenoid cystic) can metastasize to cervical lymph nodes.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Diagnostic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Architecture:</strong> Look for glandular/adenocarcinoma pattern</li>
                <li><strong>Consider:</strong> Salivary origin if adenocarcinoma in neck node</li>
                <li><strong>IHC panel:</strong> CK7, TTF-1 (negative), p63 (dual pattern in some), DOG1, AR</li>
                <li><strong>Adenoid cystic:</strong> Cribriform pattern, c-kit+, MYB+</li>
                <li><strong>Salivary duct carcinoma:</strong> AR+, resembles breast ductal carcinoma</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Other Metastases & Differential',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Melanoma</h4>
            <p className="text-sm mb-2">Can metastasize to neck nodes. Variable morphology (epithelioid, spindle). IHC: S100+, SOX10+, Melan-A+, HMB-45+.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Distant Metastases</h4>
            <p className="text-sm mb-2">Lung, breast, GI, renal cell carcinoma can metastasize to neck. IHC panel based on morphology: TTF-1, napsin (lung), GATA3 (breast), CDX2 (GI), PAX8/RCC (renal).</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Lymphoma</h4>
            <p className="text-sm mb-2">Can present as neck mass. Architecture effaced by monotonous population. Requires flow cytometry and IHC for subtyping.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Unknown Primary Workup',
      content: (
        <div className="space-y-4">
          <p className="text-sm">
            When metastatic carcinoma is found in neck lymph node without known primary, systematic IHC workup helps narrow differential.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Initial IHC Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>p16:</strong> If positive → consider HPV+ oropharyngeal SCC</li>
                <li><strong>TTF-1:</strong> If positive → consider thyroid or lung primary</li>
                <li><strong>Thyroglobulin:</strong> If positive → thyroid primary</li>
                <li><strong>CK7/CK20:</strong> Pattern helps narrow differential</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Cystic SCC, p16+:</strong> HPV+ oropharyngeal primary (tonsil/BOT)</li>
                <li><strong>Papillary architecture, TTF-1+, thyroglobulin+:</strong> PTC metastasis</li>
                <li><strong>Keratinizing SCC, p16-:</strong> Oral cavity, larynx, skin primary</li>
                <li><strong>Adenocarcinoma, TTF-1+, thyroglobulin-:</strong> Lung primary</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Cystic SCC in neck node → think HPV+ oropharyngeal primary; confirm with p16 IHC',
    'PTC commonly metastasizes to neck nodes; TTF-1, thyroglobulin, PAX8 confirm thyroid origin',
    'IHC panel approach essential for unknown primary workup',
    'Preserved architecture and mixed cell population favor reactive over neoplastic',
    'High-grade salivary tumors (salivary duct, high-grade MEC, ACC) can metastasize to nodes'
  ]

  const pitfalls = [
    'Cystic PTC metastasis can mimic branchial cleft cyst - look for PTC nuclei, use TTF-1/thyroglobulin',
    'Reactive follicular hyperplasia vs follicular lymphoma - flow cytometry if concerned',
    'Not all cystic SCC is HPV+ - p16 IHC required for confirmation',
    'Mucoepidermoid carcinoma metastasis can be mistaken for SCC - look for mucin cells',
    'Palpable "reactive" node may harbor micrometastasis - careful examination needed'
  ]

  return (
    <ModulePage
      title="Neck Masses & Metastasis"
      description="Lymph node patterns, metastatic patterns, and workup of unknown primary"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
