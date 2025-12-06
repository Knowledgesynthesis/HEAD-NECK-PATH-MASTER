import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useThemeStore } from '@/store/themeStore'
import { Sun, Moon, BookOpen, AlertTriangle, Shield, Info } from 'lucide-react'

export function SettingsPage() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground text-lg">
          Customize your experience and learn more about this application
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the visual appearance of the application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Choose between dark and light mode
              </div>
            </div>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Moon size={18} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={18} />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="text-primary" />
            <CardTitle>About Head & Neck Path Master</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Head & Neck Path Master is a comprehensive educational platform designed to teach
              Head & Neck pathology at the pathology resident level. The platform provides
              pattern-driven, differential-based learning covering oral cavity, sinonasal tract,
              salivary glands, thyroid, parathyroid, larynx, odontogenic lesions, and neck masses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <BookOpen size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Comprehensive Coverage:</strong> All major Head & Neck pathology topics
                  organized by anatomic site and system
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Pattern-Based Learning:</strong> Focus on morphologic patterns, IHC markers,
                  and molecular signatures
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Integrated Cases:</strong> Synthetic cases combining clinical, morphologic,
                  IHC, and molecular data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Pitfalls & Mimics:</strong> Common diagnostic challenges and how to avoid them
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Session-Only Assessments:</strong> Test your knowledge with immediate feedback,
                  no tracking or data collection
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Technology</h3>
            <p className="text-sm text-muted-foreground">
              Built with modern web technologies (React, TypeScript, Tailwind CSS) for a fast,
              responsive, and accessible experience across all devices. The application is designed
              to work offline and optimized for mobile-first usage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">Version 1.0.0</p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Data */}
      <Card className="border-green-500/20 bg-green-500/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="text-green-500" />
            <CardTitle className="text-green-600 dark:text-green-500">
              Privacy & Data Protection
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold mb-1">No User Tracking</h4>
            <p className="text-muted-foreground">
              This application does not track, collect, or store any user data, assessment scores,
              progress, or personal information. All assessments are session-only with no persistent
              storage.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">No PHI (Protected Health Information)</h4>
            <p className="text-muted-foreground">
              This platform contains no real patient data, images, or protected health information.
              All cases and examples are entirely synthetic and created for educational purposes only.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Offline Capability</h4>
            <p className="text-muted-foreground">
              This application is designed to work offline once loaded, ensuring your learning can
              continue without an internet connection. No data is transmitted to external servers
              during offline use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-yellow-500/20 bg-yellow-500/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" />
            <CardTitle className="text-yellow-600 dark:text-yellow-500">
              Important Disclaimers
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">Educational Use Only</h4>
              <p className="text-muted-foreground">
                This platform is designed exclusively for educational purposes to support pathology
                resident training and continuing medical education. It is NOT intended for clinical
                diagnosis, patient care, or treatment decisions.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">No Clinical Recommendations</h4>
              <p className="text-muted-foreground">
                This application does not provide clinical recommendations, treatment guidelines,
                or patient management advice. All content is conceptual and educational in nature.
                Always consult appropriate clinical resources and specialists for patient care decisions.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">Schematic Representations Only</h4>
              <p className="text-muted-foreground">
                All histologic and pathologic features are represented through text descriptions and
                schematic concepts only. No real photomicrographs or patient images are included.
                This approach emphasizes pattern recognition and conceptual understanding.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">IHC & Molecular Markers - Conceptual</h4>
              <p className="text-muted-foreground">
                Immunohistochemical and molecular information is presented at a conceptual level for
                educational understanding. Actual clinical testing requires proper validation,
                controls, and interpretation in the context of morphology and clinical findings.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">Not a Substitute for Expert Consultation</h4>
              <p className="text-muted-foreground">
                Difficult cases, unusual findings, and complex diagnostic scenarios require expert
                consultation. This educational tool supplements but does not replace the need for
                second opinions, tumor boards, and subspecialty pathology consultation.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">Accuracy and Updates</h4>
              <p className="text-muted-foreground">
                While every effort has been made to ensure accuracy, pathology classification and
                molecular understanding evolve rapidly. Users should consult current literature,
                WHO classification updates, and institutional protocols for the most current
                diagnostic criteria and nomenclature.
              </p>
            </div>

            <div className="p-4 bg-background border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold mb-2">No Liability</h4>
              <p className="text-muted-foreground">
                The creators and contributors of this educational platform assume no liability for
                any errors, omissions, or consequences arising from the use of this material. This
                tool is provided "as is" for educational purposes only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact/Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback & Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            This educational platform is designed to support pathology education and training.
            We welcome feedback to improve the content and user experience.
          </p>
          <p className="text-muted-foreground">
            For questions about Head & Neck pathology concepts, please consult appropriate
            textbooks, WHO classification, and expert pathologists at your institution.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
