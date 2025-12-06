import { ModuleCard } from '@/components/ModuleCard'
import {
  Microscope,
  Wind,
  Layers,
  Droplet,
  Shield,
  Hexagon,
  Skull,
  MapPin,
  FlaskConical,
  Dna,
  AlertTriangle,
  FileText
} from 'lucide-react'

export function HomePage() {
  const modules = [
    {
      title: 'Oral Cavity & Oropharynx',
      description: 'Squamous pathology, dysplasia, HPV-associated and HPV-independent SCC patterns',
      to: '/oral',
      icon: Microscope,
      color: 'bg-blue-500'
    },
    {
      title: 'Larynx & Hypopharynx',
      description: 'Dysplasia-carcinoma sequence, vocal cord pathology, SCC patterns',
      to: '/larynx',
      icon: Wind,
      color: 'bg-purple-500'
    },
    {
      title: 'Sinonasal Tract',
      description: 'Schneiderian papillomas, SNUC, NUT carcinoma, olfactory neuroblastoma',
      to: '/sinonasal',
      icon: Layers,
      color: 'bg-green-500'
    },
    {
      title: 'Salivary Gland Pathology',
      description: 'Tumor families, molecular hallmarks, ACC, mucoepidermoid, acinic cell patterns',
      to: '/salivary',
      icon: Droplet,
      color: 'bg-cyan-500'
    },
    {
      title: 'Thyroid Pathology',
      description: 'PTC variants, follicular-patterned lesions, medullary and anaplastic carcinoma',
      to: '/thyroid',
      icon: Shield,
      color: 'bg-indigo-500'
    },
    {
      title: 'Parathyroid Pathology',
      description: 'Adenoma vs hyperplasia vs carcinoma, PTH patterns',
      to: '/parathyroid',
      icon: Hexagon,
      color: 'bg-pink-500'
    },
    {
      title: 'Odontogenic Lesions',
      description: 'Cysts and tumors, ameloblastoma, odontogenic keratocyst patterns',
      to: '/odontogenic',
      icon: Skull,
      color: 'bg-orange-500'
    },
    {
      title: 'Neck Masses & Metastasis',
      description: 'Lymph node patterns, metastatic SCC, thyroid and salivary metastasis',
      to: '/neck-masses',
      icon: MapPin,
      color: 'bg-red-500'
    },
    {
      title: 'IHC Frameworks',
      description: 'Cytokeratin patterns, SOX10, TTF-1, PAX8, p16/p53 interpretation',
      to: '/ihc',
      icon: FlaskConical,
      color: 'bg-teal-500'
    },
    {
      title: 'Molecular Patterns',
      description: 'BRAF, RAS, MYB-NFIB, ETV6-NTRK3, NUT, HPV/EBV associations',
      to: '/molecular',
      icon: Dna,
      color: 'bg-violet-500'
    },
    {
      title: 'Pitfalls & Mimics',
      description: 'Common diagnostic challenges and morphologic mimics across H&N pathology',
      to: '/pitfalls',
      icon: AlertTriangle,
      color: 'bg-yellow-500'
    },
    {
      title: 'Integrated Cases',
      description: 'Synthetic case bank with morphology, IHC, and molecular integration',
      to: '/cases',
      icon: FileText,
      color: 'bg-slate-500'
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Head & Neck Path Master</h1>
        <p className="text-muted-foreground text-lg">
          Pattern-driven learning for Head & Neck pathology residents
        </p>
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-sm text-yellow-600 dark:text-yellow-500">
            <strong>Educational Use Only:</strong> This platform is designed for educational purposes only.
            All content is conceptual and schematic. Not for clinical diagnosis or patient care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.to} {...module} />
        ))}
      </div>
    </div>
  )
}
