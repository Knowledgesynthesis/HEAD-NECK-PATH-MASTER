import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function ThyroidPage() {
  const sections = [
    {
      title: 'Normal Thyroid Histology',
      content: (
        <div className="space-y-4">
          <p>The thyroid is composed of follicles lined by follicular epithelium and filled with colloid. C-cells (parafollicular cells) are scattered between follicles.</p>
          <div className="p-4 bg-muted rounded-lg">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Follicular cells: Produce T3/T4, TTF-1+, PAX8+</li>
              <li>C-cells: Produce calcitonin, located in upper/middle poles</li>
              <li>Colloid: Thyroglobulin storage</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Non-Neoplastic Conditions',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Nodular Hyperplasia (Multinodular Goiter)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Most common thyroid disorder</li>
                <li>Multiple nodules of varying sizes</li>
                <li>Mixture of hyperplastic and involuting nodules</li>
                <li>No true capsule around nodules</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hashimoto Thyroiditis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Autoimmune destruction of thyroid</li>
                <li>Dense lymphoid infiltrate with germinal centers</li>
                <li>Hürthle cell (oncocytic) change</li>
                <li>Associated with increased risk of lymphoma</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Follicular-Patterned Lesions',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Follicular Adenoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Capsule:</strong> Complete fibrous capsule</li>
                <li><strong>Architecture:</strong> Follicular pattern, different from surrounding</li>
                <li><strong>Key feature:</strong> NO capsular or vascular invasion</li>
                <li><strong>Molecular:</strong> RAS mutations, PAX8-PPARG in some</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>Follicular Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Diagnosis requires:</strong> Capsular invasion or vascular invasion</li>
                <li><strong>Minimally invasive:</strong> Limited capsular/vascular invasion, excellent prognosis</li>
                <li><strong>Widely invasive:</strong> Extensive invasion, worse prognosis</li>
                <li><strong>Molecular:</strong> RAS mutations, PAX8-PPARG</li>
                <li><strong>Spread:</strong> Hematogenous (lung, bone)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>Noninvasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features (NIFTP)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Criteria:</strong> Follicular architecture, PTC-like nuclei, NO invasion</li>
                <li><strong>No:</strong> Papillae, psammoma bodies, high mitotic activity</li>
                <li><strong>Capsule:</strong> Encapsulated or well-circumscribed</li>
                <li><strong>Behavior:</strong> Indolent, reclassified from follicular variant PTC</li>
                <li><strong>Molecular:</strong> RAS mutations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Papillary Thyroid Carcinoma (PTC)',
      content: (
        <div className="space-y-3">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Classic PTC</CardTitle>
              <CardDescription>Most common thyroid malignancy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Architecture:</strong> Papillary structures with fibrovascular cores</li>
                <li><strong>Nuclear features:</strong> Grooves, pseudoinclusions, clearing ("Orphan Annie eyes")</li>
                <li><strong>Other features:</strong> Psammoma bodies</li>
                <li><strong>Molecular:</strong> BRAF V600E (~50%), RET-PTC</li>
                <li><strong>Spread:</strong> Lymphatic (cervical lymph nodes)</li>
                <li><strong>Prognosis:</strong> Excellent overall</li>
              </ul>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Follicular Variant PTC</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Follicular architecture</li>
                  <li>PTC nuclear features</li>
                  <li>Infiltrative vs encapsulated</li>
                  <li>Encapsulated non-invasive → NIFTP</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tall Cell Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cells 2-3x taller than wide</li>
                  <li>Abundant eosinophilic cytoplasm</li>
                  <li>More aggressive behavior</li>
                  <li>Older patients</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Columnar Cell Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pseudostratified columnar cells</li>
                  <li>Subnuclear vacuoles</li>
                  <li>Aggressive behavior</li>
                  <li>Rare variant</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hobnail Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Apical nuclear protrusion</li>
                  <li>Hobnail appearance</li>
                  <li>Aggressive behavior</li>
                  <li>Poor prognosis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: 'Other Thyroid Malignancies',
      content: (
        <div className="space-y-3">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle>Medullary Thyroid Carcinoma (MTC)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Origin:</strong> C-cells (parafollicular cells)</li>
                <li><strong>Pattern:</strong> Nests, trabeculae, solid sheets</li>
                <li><strong>Stroma:</strong> Amyloid deposition (from calcitonin)</li>
                <li><strong>IHC:</strong> Calcitonin+, CEA+, chromogranin+, synaptophysin+, TTF-1+</li>
                <li><strong>Associations:</strong> MEN 2A/2B syndromes (RET mutations)</li>
                <li><strong>Precursor:</strong> C-cell hyperplasia in hereditary cases</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-700/20">
            <CardHeader>
              <CardTitle>Anaplastic (Undifferentiated) Thyroid Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Age:</strong> Elderly patients</li>
                <li><strong>Pattern:</strong> Highly pleomorphic, sarcomatoid, or undifferentiated</li>
                <li><strong>Behavior:</strong> Extremely aggressive, poor prognosis</li>
                <li><strong>Often arises from:</strong> Pre-existing PTC or follicular carcinoma</li>
                <li><strong>IHC:</strong> PAX8+ (may be retained), TTF-1 often lost</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'IHC & Molecular Patterns',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Thyroid Lineage Markers</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>TTF-1:</strong> Follicular-derived tumors (PTC, FTC, adenomas)</li>
              <li><strong>PAX8:</strong> Follicular-derived tumors, retained in most carcinomas</li>
              <li><strong>Thyroglobulin:</strong> Follicular-derived, secretory product</li>
            </ul>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Key Molecular Alterations</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>BRAF V600E:</strong> Classic PTC (~50%), tall cell variant</li>
              <li><strong>RAS:</strong> Follicular adenoma/carcinoma, NIFTP, follicular variant PTC</li>
              <li><strong>RET-PTC:</strong> Classic PTC, radiation-associated</li>
              <li><strong>PAX8-PPARG:</strong> Follicular carcinoma subset</li>
              <li><strong>RET:</strong> Medullary carcinoma (germline in hereditary)</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'PTC diagnosis relies on nuclear features (grooves, pseudoinclusions) not architecture',
    'Follicular adenoma vs carcinoma distinction requires identification of capsular/vascular invasion',
    'NIFTP is encapsulated/well-circumscribed with PTC nuclei but NO invasion - indolent behavior',
    'Medullary carcinoma is C-cell derived, calcitonin+, associated with MEN 2 syndromes',
    'BRAF V600E is common in classic PTC; RAS mutations in follicular-patterned lesions'
  ]

  const pitfalls = [
    'PTC-like nuclear clearing can be artifact from fixation or processing',
    'Follicular adenoma vs minimally invasive carcinoma - entire capsule must be examined',
    'NIFTP requires strict criteria - presence of papillae excludes diagnosis',
    'Hürthle cell (oncocytic) change in Hashimoto thyroiditis should not be overcalled as neoplasm',
    'C-cell hyperplasia vs medullary microcarcinoma - size and architecture matter'
  ]

  return (
    <ModulePage
      title="Thyroid Pathology"
      description="PTC variants, follicular-patterned lesions, medullary and anaplastic carcinoma"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
