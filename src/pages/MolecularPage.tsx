import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function MolecularPage() {
  const sections = [
    {
      title: 'Thyroid Molecular Patterns',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>BRAF V600E</CardTitle>
              <CardDescription>Most common mutation in PTC</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Frequency:</strong> ~40-50% of classic PTC</li>
                <li><strong>Variants:</strong> More common in tall cell variant, less in follicular variant</li>
                <li><strong>Prognosis:</strong> Associated with more aggressive features</li>
                <li><strong>Pathway:</strong> MAPK pathway activation</li>
                <li><strong>Therapeutic:</strong> Targetable with BRAF inhibitors</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>RAS Mutations (NRAS, HRAS, KRAS)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Tumors:</strong> Follicular adenoma, follicular carcinoma, NIFTP, follicular variant PTC</li>
                <li><strong>Key concept:</strong> RAS-positive lesions have follicular architecture</li>
                <li><strong>Indeterminate:</strong> Cannot distinguish adenoma from carcinoma by mutation alone</li>
                <li><strong>NIFTP:</strong> Encapsulated follicular lesions with RAS, no invasion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>RET Rearrangements (RET-PTC)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Classic PTC, especially radiation-associated</li>
                <li>RET-PTC1 and RET-PTC3 most common</li>
                <li>More common in younger patients</li>
                <li>Targetable with RET inhibitors</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>PAX8-PPARG Fusion</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Subset of follicular carcinomas (~30%)</li>
                <li>Generally favorable prognosis</li>
                <li>Can also occur in follicular adenomas</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>RET Germline Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Medullary thyroid carcinoma in MEN 2A/2B syndromes</li>
                <li>Germline testing in all MTC patients (25% hereditary)</li>
                <li>Prophylactic thyroidectomy in carriers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Salivary Gland Molecular Signatures',
      content: (
        <div className="space-y-3">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>MYB-NFIB Fusion</CardTitle>
              <CardDescription>Adenoid cystic carcinoma hallmark</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Frequency:</strong> ~50-60% of adenoid cystic carcinoma</li>
                <li><strong>Alternative:</strong> MYBL1-NFIB fusion in some cases</li>
                <li><strong>IHC:</strong> MYB nuclear staining can be surrogate (though less specific)</li>
                <li><strong>Note:</strong> Not entirely specific - can rarely occur in other tumors</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>MAML2 Rearrangements</CardTitle>
              <CardDescription>Mucoepidermoid carcinoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Fusion:</strong> CRTC1-MAML2 most common (t(11;19))</li>
                <li><strong>Frequency:</strong> ~50% of mucoepidermoid carcinomas</li>
                <li><strong>Grade association:</strong> More common in low-grade tumors</li>
                <li><strong>Prognosis:</strong> MAML2+ tumors may have better prognosis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>ETV6-NTRK3 Fusion</CardTitle>
              <CardDescription>Pathognomonic for secretory carcinoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Diagnostic:</strong> Defines secretory carcinoma (mammary analogue)</li>
                <li><strong>Detection:</strong> FISH, RT-PCR, or NGS</li>
                <li><strong>IHC surrogate:</strong> Pan-TRK IHC available</li>
                <li><strong>Therapeutic:</strong> NTRK inhibitors (larotrectinib, entrectinib)</li>
                <li><strong>Also seen in:</strong> Secretory carcinoma of breast, congenital fibrosarcoma</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>NR4A3 Rearrangements</CardTitle>
              <CardDescription>Acinic cell carcinoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>HTN3-MSANTD3 most common fusion partner</li>
                <li>Present in subset of acinic cell carcinomas</li>
                <li>Can help confirm diagnosis in challenging cases</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>PLAG1 and HMGA2 Rearrangements</CardTitle>
              <CardDescription>Pleomorphic adenoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Common in pleomorphic adenoma</li>
                <li>PLAG1 IHC can be used as surrogate</li>
                <li>Can persist in carcinoma ex pleomorphic adenoma</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'HPV & Viral Associations',
      content: (
        <div className="space-y-3">
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>HPV in Oropharyngeal SCC</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>High-risk HPV:</strong> Types 16, 18 (HPV16 most common)</li>
                <li><strong>Mechanism:</strong> E6/E7 viral oncoproteins inactivate p53 and Rb</li>
                <li><strong>p16 IHC:</strong> Surrogate marker (p16 overexpression from Rb inactivation)</li>
                <li><strong>Sites:</strong> Tonsil and base of tongue most common</li>
                <li><strong>Morphology:</strong> Non-keratinizing, basaloid pattern</li>
                <li><strong>Prognosis:</strong> Better response to therapy, improved survival vs HPV-negative</li>
                <li><strong>Testing:</strong> p16 IHC first-line; HR-HPV ISH or PCR for confirmation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>EBV in Nasopharyngeal Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Association:</strong> Endemic (Asian) NPC strongly associated with EBV</li>
                <li><strong>Detection:</strong> EBER in situ hybridization</li>
                <li><strong>Morphology:</strong> Non-keratinizing, often with lymphoid stroma (lymphoepithelioma)</li>
                <li><strong>WHO classification:</strong> Type I (keratinizing, rare EBV), Type II/III (non-keratinizing, EBV+)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Sinonasal Molecular Markers',
      content: (
        <div className="space-y-3">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>NUTM1 Rearrangements</CardTitle>
              <CardDescription>NUT carcinoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Fusion partners:</strong> BRD4-NUTM1 most common, also BRD3-NUTM1</li>
                <li><strong>Sites:</strong> Midline structures (sinonasal, mediastinum)</li>
                <li><strong>Diagnosis:</strong> NUT IHC (nuclear staining) - highly specific</li>
                <li><strong>Morphology:</strong> Poorly differentiated with abrupt keratinization</li>
                <li><strong>Prognosis:</strong> Aggressive, poor outcomes</li>
                <li><strong>Age:</strong> Often young adults/children</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>IDH2 Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Sinonasal undifferentiated carcinoma (SNUC) subset</li>
                <li>Also seen in central chondrosarcomas</li>
                <li>Potentially targetable alteration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Squamous Cell Carcinoma Molecular Patterns',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">TP53 Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Common in:</strong> HPV-negative SCC</li>
                <li><strong>IHC pattern:</strong> Complete loss OR strong diffuse nuclear staining (mutant accumulation)</li>
                <li><strong>Prognosis:</strong> Often associated with tobacco/alcohol-related tumors</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">PIK3CA Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Seen in both HPV-positive and HPV-negative SCC</li>
                <li>PI3K pathway activation</li>
                <li>Potentially targetable</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">NOTCH1 Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Common in HPV-negative head and neck SCC</li>
                <li>Tumor suppressor role in squamous tissues</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Odontogenic & Other Molecular Alterations',
      content: (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">PTCH1 Mutations</CardTitle>
              <CardDescription>Odontogenic keratocyst</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Sonic hedgehog pathway alteration</li>
                <li>Germline PTCH1 in Gorlin syndrome (multiple OKCs)</li>
                <li>Explains aggressive behavior and high recurrence</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">BRAF V600E in Ameloblastoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Common in ameloblastoma (~60%)</li>
                <li>Same mutation as in PTC, melanoma</li>
                <li>Potentially targetable with BRAF inhibitors</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">CDC73 Mutations</CardTitle>
              <CardDescription>Parathyroid carcinoma</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Encodes parafibromin protein</li>
                <li>Loss of parafibromin IHC suggests CDC73 mutation</li>
                <li>Associated with hyperparathyroidism-jaw tumor syndrome</li>
                <li>Helps identify parathyroid carcinoma</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    }
  ]

  const keyPoints = [
    'BRAF V600E is common in classic PTC; RAS mutations in follicular-patterned lesions',
    'ETV6-NTRK3 fusion is pathognomonic for secretory carcinoma and therapeutically targetable',
    'MYB-NFIB fusion is characteristic of adenoid cystic carcinoma',
    'MAML2 rearrangements occur in ~50% of mucoepidermoid carcinomas, more in low grade',
    'HPV in oropharyngeal SCC has better prognosis; p16 IHC is surrogate marker'
  ]

  const pitfalls = [
    'RAS mutations cannot distinguish adenoma from minimally invasive carcinoma - histology required',
    'BRAF V600E in thyroid and ameloblastoma - different tumor types, same mutation',
    'MYB rearrangements not 100% specific for ACC - can occur in other tumors rarely',
    'p16 positivity requires confirmation with HR-HPV testing in ambiguous cases',
    'NTRK fusions in multiple tumor types - not specific to secretory carcinoma'
  ]

  return (
    <ModulePage
      title="Molecular Patterns"
      description="Key molecular alterations in H&N pathology with diagnostic and therapeutic implications"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
