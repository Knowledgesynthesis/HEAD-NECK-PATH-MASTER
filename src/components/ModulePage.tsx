import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { AlertTriangle } from 'lucide-react'
import { ReactNode } from 'react'

interface Section {
  title: string
  content: ReactNode
}

interface ModulePageProps {
  title: string
  description: string
  sections: Section[]
  pitfalls?: string[]
  keyPoints?: string[]
}

export function ModulePage({ title, description, sections, pitfalls, keyPoints }: ModulePageProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

      {/* Key Points */}
      {keyPoints && keyPoints.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Key Learning Points</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Main Sections */}
      {sections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>{section.content}</CardContent>
        </Card>
      ))}

      {/* Pitfalls */}
      {pitfalls && pitfalls.length > 0 && (
        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              <CardTitle className="text-yellow-600 dark:text-yellow-500">Common Pitfalls</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pitfalls.map((pitfall, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-yellow-500">⚠</span>
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
