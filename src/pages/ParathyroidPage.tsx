import { ModulePage } from '@/components/ModulePage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export function ParathyroidPage() {
  const sections = [
    {
      title: 'Normal Parathyroid Histology',
      content: (
        <div className="space-y-4">
          <p>Normal parathyroid glands contain chief cells, oxyphil cells, and adipocytes. Fat content increases with age.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Chief Cells</h4>
              <p className="text-sm">Most abundant. Produce PTH. Small, round nuclei with moderate cytoplasm.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Oxyphil Cells</h4>
              <p className="text-sm">Eosinophilic granular cytoplasm (mitochondria-rich). Increase with age.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Adipocytes</h4>
              <p className="text-sm">Fat content increases with age. Typically 20-30% in adults.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Hyperplasia vs Adenoma vs Carcinoma',
      content: (
        <div className="space-y-3">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle>Parathyroid Hyperplasia</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Definition:</strong> Enlargement of multiple (usually all) parathyroid glands</li>
                <li><strong>Primary hyperplasia:</strong> Sporadic or familial (MEN syndromes)</li>
                <li><strong>Secondary hyperplasia:</strong> Response to chronic hypocalcemia (renal disease)</li>
                <li><strong>Histology:</strong> Decreased fat, chief cell proliferation</li>
                <li><strong>Nodularity:</strong> May show nodular pattern</li>
                <li><strong>Key:</strong> Multiple gland involvement</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle>Parathyroid Adenoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Definition:</strong> Solitary enlarged parathyroid gland</li>
                <li><strong>Most common cause:</strong> Primary hyperparathyroidism (~80%)</li>
                <li><strong>Histology:</strong> Hypercellular, decreased or absent fat</li>
                <li><strong>Capsule:</strong> Thin fibrous capsule</li>
                <li><strong>Rim:</strong> Normal parathyroid tissue at periphery (helps confirm adenoma)</li>
                <li><strong>Architecture:</strong> Chief cells, oxyphil cells, or mixed</li>
                <li><strong>Key:</strong> Single gland involvement</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle>Parathyroid Carcinoma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Rare:</strong> ~1% of primary hyperparathyroidism cases</li>
                <li><strong>Clinical:</strong> Severe hypercalcemia, palpable neck mass</li>
                <li><strong>Worrisome features:</strong> Thick fibrous bands, mitotic activity, necrosis</li>
                <li><strong>Definitive criteria:</strong> Vascular invasion, lymph node or distant metastasis</li>
                <li><strong>Capsular invasion:</strong> Alone not diagnostic but concerning</li>
                <li><strong>IHC:</strong> Loss of parafibromin (CDC73 mutation), high Ki-67</li>
                <li><strong>Prognosis:</strong> Variable, can have indolent course</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Diagnostic Challenges',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Distinguishing hyperplasia, adenoma, and carcinoma can be challenging. Clinical context (calcium, PTH, number of glands) is crucial.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Key Diagnostic Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-sm mb-1">Adenoma clues:</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Rim of normal parathyroid tissue</li>
                    <li>Single enlarged gland (clinical/surgical info)</li>
                    <li>Decreased/absent intracellular fat</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">Hyperplasia clues:</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Multiple enlarged glands (clinical/surgical info)</li>
                    <li>Absence of normal rim (entire gland involved)</li>
                    <li>May show nodular pattern</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">Carcinoma clues:</h5>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Vascular or capsular invasion</li>
                    <li>Thick fibrous bands</li>
                    <li>Mitotic activity and necrosis</li>
                    <li>Lymph node or distant metastasis (definitive)</li>
                  </ul>
                </div>
              </div>
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
            <h4 className="font-semibold mb-2">PTH Immunostaining</h4>
            <p className="text-sm">
              Confirms parathyroid origin. Useful when distinguishing from thyroid tissue or other masses.
              Generally positive in adenoma, hyperplasia, and carcinoma.
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Parafibromin (CDC73)</h4>
            <p className="text-sm">
              Loss of nuclear staining suggests CDC73 mutation. Seen in parathyroid carcinoma and hyperparathyroidism-jaw tumor syndrome.
              Can help identify carcinoma but not 100% specific.
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Ki-67</h4>
            <p className="text-sm">
              Proliferation index. Generally low in adenoma and hyperplasia. Elevated in carcinoma ({'>'}5% concerning).
            </p>
          </div>
        </div>
      )
    }
  ]

  const keyPoints = [
    'Adenoma is single gland enlargement; hyperplasia involves multiple glands - clinical correlation essential',
    'Normal parathyroid rim at periphery supports diagnosis of adenoma',
    'Parathyroid carcinoma is rare but should be considered with severe hypercalcemia and concerning histology',
    'Vascular invasion or metastasis is definitive for carcinoma; architectural features alone are insufficient',
    'Loss of parafibromin staining and high Ki-67 support carcinoma but are not definitive'
  ]

  const pitfalls = [
    'Fat content varies with age - decreased fat alone does not indicate pathology',
    'Nodular hyperplasia can mimic adenoma - number of enlarged glands is key',
    'Thick fibrous bands and mitotic activity are worrisome but not diagnostic of carcinoma alone',
    'Parathyroid tissue can be found within thyroid gland - PTH IHC helps confirm identity',
    'Atypical adenoma features (fibrous bands, mitoses) do not always indicate carcinoma - follow-up may be needed'
  ]

  return (
    <ModulePage
      title="Parathyroid Pathology"
      description="Hyperplasia, adenoma, and carcinoma with diagnostic criteria and pitfalls"
      sections={sections}
      keyPoints={keyPoints}
      pitfalls={pitfalls}
    />
  )
}
