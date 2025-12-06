import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { OralPage } from './pages/OralPage'
import { LarynxPage } from './pages/LarynxPage'
import { SinonasalPage } from './pages/SinonasalPage'
import { SalivaryPage } from './pages/SalivaryPage'
import { ThyroidPage } from './pages/ThyroidPage'
import { ParathyroidPage } from './pages/ParathyroidPage'
import { OdontogenicPage } from './pages/OdontogenicPage'
import { NeckMassesPage } from './pages/NeckMassesPage'
import { IHCPage } from './pages/IHCPage'
import { MolecularPage } from './pages/MolecularPage'
import { PitfallsPage } from './pages/PitfallsPage'
import { CasesPage } from './pages/CasesPage'
import { AssessmentPage } from './pages/AssessmentPage'
import { SettingsPage } from './pages/SettingsPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oral" element={<OralPage />} />
          <Route path="/larynx" element={<LarynxPage />} />
          <Route path="/sinonasal" element={<SinonasalPage />} />
          <Route path="/salivary" element={<SalivaryPage />} />
          <Route path="/thyroid" element={<ThyroidPage />} />
          <Route path="/parathyroid" element={<ParathyroidPage />} />
          <Route path="/odontogenic" element={<OdontogenicPage />} />
          <Route path="/neck-masses" element={<NeckMassesPage />} />
          <Route path="/ihc" element={<IHCPage />} />
          <Route path="/molecular" element={<MolecularPage />} />
          <Route path="/pitfalls" element={<PitfallsPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
