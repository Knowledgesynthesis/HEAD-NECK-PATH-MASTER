import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function SalivaryPage() {
  const sections = [
    {
      title: 'Normal Salivary Gland Histology',
      content: (
        <div className="space-y-4">
          <p>Salivary glands consist of acini (serous, mucous, or mixed) and a ductal system.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Major Glands</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Parotid: Serous acini, Stensen duct</li>
                <li>Submandibular: Mixed serous/mucous</li>
                <li>Sublingual: Predominantly mucous</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Minor Glands</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Distributed throughout oral cavity</li>
                <li>Palate most common site</li>
                <li>Higher malignancy rate</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Benign Tumors',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Pleomorphic Adenoma</CardTitle>
              <CardDescription>Most common salivary gland tumor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Pattern:</strong> Epithelial and myoepithelial cells in chondromyxoid stroma</li>
                <li><strong>Growth:</strong> Well-circumscribed, may lack complete capsule</li>
                <li><strong>IHC:</strong> Dual population: Luminal cells (CK+) and myoepithelial (p63+, SMA+, S100+)</li>
                <li><strong>Risk:</strong> Recurrence if incompletely excised; rare malignant transformation</li>
                <li><strong>Molecular:</strong> PLAG1 or HMGA2 rearrangements</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>Warthin Tumor</CardTitle>
              <CardDescription>Papillary cystadenoma lymphomatosum</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Location:</strong> Almost exclusively parotid</li>
                <li><strong>Pattern:</strong> Bilayer oncocytic epithelium + dense lymphoid stroma</li>
                <li><strong>Demographics:</strong> More common in males, smokers</li>
                <li><strong>Bilateral/multifocal:</strong> Up to 10% of cases</li>
                <li><strong>Behavior:</strong> Benign</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Malignant Tumors - Part 1',
      content: (
        <div className="space-y-3">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle>Mucoepidermoid Carcinoma</CardTitle>
              <CardDescription>Most common malignant salivary tumor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Cell types:</strong> Mucous, epidermoid (squamoid), intermediate cells</li>
                <li><strong>Grading:</strong> Low, intermediate, high grade (based on multiple features)</li>
                <li><strong>Low grade:</strong> Cystic, abundant mucous cells, minimal atypia</li>
                <li><strong>High grade:</strong> Solid growth, more epidermoid cells, prominent atypia</li>
                <li><strong>Molecular:</strong> MAML2 rearrangement (t(11;19)) in ~50%, more common in low grade</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Adenoid Cystic Carcinoma</CardTitle>
              <CardDescription>"Swiss cheese" pattern</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Patterns:</strong> Cribriform (most common), tubular, solid</li>
                <li><strong>Cells:</strong> Basaloid cells forming cylindromas with basement membrane material</li>
                <li><strong>Behavior:</strong> Perineural invasion characteristic, slow growth but relentless</li>
                <li><strong>Grading:</strong> Based on solid component percentage</li>
                <li><strong>Molecular:</strong> MYB-NFIB fusion (~60%) or MYBL1-NFIB</li>
                <li><strong>IHC:</strong> c-kit (CD117)+, dual population with p63+ outer cells</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Malignant Tumors - Part 2',
      content: (
        <div className="space-y-3">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>Acinic Cell Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Cells:</strong> Resemble serous acinar cells with granular cytoplasm (zymogen granules)</li>
                <li><strong>Patterns:</strong> Solid, microcystic, papillary-cystic, follicular</li>
                <li><strong>IHC:</strong> DOG1+ (sensitive), SOX10+</li>
                <li><strong>Molecular:</strong> NR4A3 rearrangements (HTN3-MSANTD3 fusion)</li>
                <li><strong>Behavior:</strong> Generally low grade, but high-grade transformation can occur</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-teal-500/20">
            <CardHeader>
              <CardTitle>Secretory Carcinoma</CardTitle>
              <CardDescription>Formerly "mammary analogue secretory carcinoma"</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Pattern:</strong> Microcystic, tubular, solid with secretions</li>
                <li><strong>Cells:</strong> Bland, eosinophilic to clear cytoplasm</li>
                <li><strong>IHC:</strong> S100+, mammaglobin+, GATA3+</li>
                <li><strong>Molecular:</strong> ETV6-NTRK3 fusion (pathognomonic)</li>
                <li><strong>Behavior:</strong> Generally low grade but can metastasize</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>Polymorphous Adenocarcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Location:</strong> Minor salivary glands (palate most common)</li>
                <li><strong>Pattern:</strong> Diverse architectural patterns (hence "polymorphous")</li>
                <li><strong>Cells:</strong> Uniform, bland cytology despite varied patterns</li>
                <li><strong>Behavior:</strong> Low-grade malignancy</li>
                <li><strong>Pitfall:</strong> Cribriform pattern can mimic adenoid cystic</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'High-Grade Malignancies',
      content: (
        <div className="space-y-3">
          <Card className="border-red-600/20">
            <CardHeader>
              <CardTitle>Salivary Duct Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Pattern:</strong> Resembles breast ductal carcinoma (apocrine-like)</li>
                <li><strong>Morphology:</strong> Comedonecrosis, high-grade cytology</li>
                <li><strong>IHC:</strong> AR+ (androgen receptor), GCDFP-15+, often HER2+</li>
                <li><strong>Behavior:</strong> Aggressive, high metastatic potential</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-600/20">
            <CardHeader>
              <CardTitle>Myoepithelial Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Infiltrative growth of myoepithelial cells</li>
                <li>IHC: p63+, SMA+, S100+, calponin+</li>
                <li>Can arise de novo or ex-pleomorphic adenoma</li>
                <li>Variable behavior based on grade</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'IHC & Molecular Summary',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Key IHC Markers</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>DOG1:</strong> Acinic cell carcinoma, intercalated duct lesions</li>
              <li><strong>SOX10:</strong> Myoepithelial marker, various tumors</li>
              <li><strong>p63/p40:</strong> Myoepithelial cells, useful in dual population tumors</li>
              <li><strong>Mammaglobin/GATA3:</strong> Secretory carcinoma</li>
              <li><strong>AR:</strong> Salivary duct carcinoma</li>
            </ul>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Key Molecular Alterations</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>MAML2:</strong> Mucoepidermoid carcinoma</li>
              <li><strong>MYB-NFIB:</strong> Adenoid cystic carcinoma</li>
              <li><strong>ETV6-NTRK3:</strong> Secretory carcinoma</li>
              <li><strong>NR4A3:</strong> Acinic cell carcinoma</li>
              <li><strong>PLAG1/HMGA2:</strong> Pleomorphic adenoma</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Pleomorphic adenoma is the most common salivary tumor; complete excision needed to prevent recurrence',
    'Mucoepidermoid is the most common malignant salivary tumor; grading impacts prognosis',
    'Adenoid cystic carcinoma shows cribriform "Swiss cheese" pattern with perineural invasion',
    'Secretory carcinoma has ETV6-NTRK3 fusion and mimics breast secretory carcinoma',
    'DOG1 is sensitive for acinic cell carcinoma; mammaglobin/GATA3 for secretory carcinoma'
  ]

  const pitfalls = [
    'Polymorphous adenocarcinoma vs adenoid cystic: PA has bland cytology despite varied architecture',
    'Pleomorphic adenoma incomplete excision → recurrence risk; pseudopods can extend beyond capsule',
    'Basal cell adenoma vs adenoid cystic: BCA is benign despite basaloid appearance',
    'Cribriform adenocarcinoma of minor glands vs polymorphous adenocarcinoma - overlapping features',
    'Acinic cell carcinoma can undergo high-grade transformation - important prognostic change'
  ]

  return (
    <ModulePage
      title="Salivary Gland Pathology"
      description="Tumor families, molecular hallmarks, and key diagnostic features of salivary neoplasms"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
