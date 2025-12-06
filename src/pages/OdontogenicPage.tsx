import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export function OdontogenicPage() {
  const sections = [
    {
      title: 'Odontogenic Cysts',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Radicular (Periapical) Cyst</CardTitle>
              <CardDescription>Most common odontogenic cyst</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Origin:</strong> Inflammatory, epithelial rests of Malassez</li>
                <li><strong>Association:</strong> Non-vital tooth, apical periodontitis</li>
                <li><strong>Location:</strong> Tooth apex</li>
                <li><strong>Lining:</strong> Non-keratinized stratified squamous epithelium</li>
                <li><strong>Wall:</strong> Granulation tissue, chronic inflammation</li>
                <li><strong>Behavior:</strong> Benign, resolves with tooth extraction/root canal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>Dentigerous Cyst</CardTitle>
              <CardDescription>Associated with crown of unerupted tooth</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Origin:</strong> Developmental, from enamel organ</li>
                <li><strong>Association:</strong> Crown of unerupted/impacted tooth (commonly third molars)</li>
                <li><strong>Lining:</strong> Thin non-keratinized squamous epithelium (2-3 cells thick)</li>
                <li><strong>Wall:</strong> Fibrous connective tissue, minimal inflammation</li>
                <li><strong>Complications:</strong> Rarely ameloblastoma or SCC can arise</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>Odontogenic Keratocyst (OKC)</CardTitle>
              <CardDescription>Previously "keratocystic odontogenic tumor"</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Lining:</strong> Thin parakeratinized stratified squamous (6-8 cells)</li>
                <li><strong>Basal layer:</strong> Palisaded, hyperchromatic nuclei (characteristic)</li>
                <li><strong>Surface:</strong> Corrugated parakeratotic layer</li>
                <li><strong>Behavior:</strong> Locally aggressive, high recurrence rate (25-30%)</li>
                <li><strong>Association:</strong> Nevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple</li>
                <li><strong>Molecular:</strong> PTCH1 mutations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Odontogenic Tumors - Epithelial',
      content: (
        <div className="space-y-3">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle>Ameloblastoma</CardTitle>
              <CardDescription>Most common odontogenic tumor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Pattern:</strong> Peripheral palisading of columnar/cuboidal cells</li>
                <li><strong>Central area:</strong> Stellate reticulum-like tissue</li>
                <li><strong>Subtypes:</strong> Follicular (most common), plexiform, desmoplastic</li>
                <li><strong>Location:</strong> Posterior mandible (80%)</li>
                <li><strong>Behavior:</strong> Locally aggressive, infiltrative growth</li>
                <li><strong>Recurrence:</strong> High if inadequately excised</li>
                <li><strong>Molecular:</strong> BRAF V600E mutations common</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle>Adenomatoid Odontogenic Tumor (AOT)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Age:</strong> Young patients (teens, 20s)</li>
                <li><strong>Location:</strong> Anterior maxilla, associated with canines</li>
                <li><strong>Pattern:</strong> Duct-like structures, whorls, rosettes</li>
                <li><strong>Cells:</strong> Columnar/cuboidal epithelium</li>
                <li><strong>Behavior:</strong> Benign, encapsulated, low recurrence</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-pink-500/20">
            <CardHeader>
              <CardTitle>Calcifying Epithelial Odontogenic Tumor (CEOT, Pindborg Tumor)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Cells:</strong> Polyhedral epithelial cells with prominent intercellular bridges</li>
                <li><strong>Calcifications:</strong> Liesegang ring-like calcifications (characteristic)</li>
                <li><strong>Amyloid:</strong> Congo red positive material</li>
                <li><strong>Behavior:</strong> Locally aggressive but rarely metastasizes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Odontogenic Tumors - Mixed & Mesenchymal',
      content: (
        <div className="space-y-3">
          <Card className="border-teal-500/20">
            <CardHeader>
              <CardTitle>Odontoma</CardTitle>
              <CardDescription>Most common odontogenic tumor (if included)</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Types:</strong> Compound (tooth-like structures) vs Complex (disorganized mass)</li>
                <li><strong>Composition:</strong> All dental tissues (enamel, dentin, cementum, pulp)</li>
                <li><strong>Behavior:</strong> Hamartomatous, not true neoplasm</li>
                <li><strong>Treatment:</strong> Simple excision, no recurrence</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-indigo-500/20">
            <CardHeader>
              <CardTitle>Odontogenic Myxoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mesenchymal odontogenic tumor</li>
                <li>Myxoid stroma with stellate/spindle cells</li>
                <li>Locally aggressive, infiltrative</li>
                <li>High recurrence if incompletely excised</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-violet-500/20">
            <CardHeader>
              <CardTitle>Cementoblastoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>True neoplasm of cementum</li>
                <li>Fused to tooth root</li>
                <li>Cementum-like tissue with peripheral osteoblastic rim</li>
                <li>Benign but requires excision with associated tooth</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Key Diagnostic Features Summary',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-semibold">Lesion</th>
                <th className="text-left p-2 font-semibold">Key Feature</th>
                <th className="text-left p-2 font-semibold">Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Radicular Cyst</td>
                <td className="p-2">Non-vital tooth, inflammation</td>
                <td className="p-2">Benign</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Dentigerous Cyst</td>
                <td className="p-2">Crown of unerupted tooth</td>
                <td className="p-2">Benign</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">OKC</td>
                <td className="p-2">Palisaded basal layer, parakeratosis</td>
                <td className="p-2">Aggressive, high recurrence</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Ameloblastoma</td>
                <td className="p-2">Peripheral palisading, stellate reticulum</td>
                <td className="p-2">Locally aggressive</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">AOT</td>
                <td className="p-2">Duct-like structures, young patients</td>
                <td className="p-2">Benign, encapsulated</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">CEOT</td>
                <td className="p-2">Liesegang rings, amyloid</td>
                <td className="p-2">Locally aggressive</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Odontoma</td>
                <td className="p-2">Tooth-like structures/masses</td>
                <td className="p-2">Hamartoma, benign</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ]

  const keyPoints = [
    'OKC has palisaded basal layer and high recurrence rate; associated with Gorlin syndrome when multiple',
    'Ameloblastoma shows peripheral palisading and stellate reticulum; locally aggressive with high recurrence',
    'Dentigerous cyst is associated with crown of unerupted tooth; lined by thin epithelium',
    'CEOT (Pindborg tumor) has characteristic Liesegang ring calcifications and amyloid',
    'Radicular cyst is most common; associated with non-vital tooth and inflammation'
  ]

  const pitfalls = [
    'OKC vs dentigerous cyst - look for palisaded basal layer and parakeratosis in OKC',
    'Ameloblastoma vs basaloid SCC - ameloblastoma lacks high-grade cytologic features',
    'Small fragments from curettage may not allow definitive cyst diagnosis',
    'Unicystic ameloblastoma can arise from dentigerous cyst - complete examination needed',
    'OKC has high recurrence - communicate need for complete excision and follow-up'
  ]

  return (
    <ModulePage
      title="Odontogenic Lesions"
      description="Odontogenic cysts and tumors with diagnostic features and behavior patterns"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
