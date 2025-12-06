import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModuleCardProps {
  title: string
  description: string
  to: string
  icon: LucideIcon
  color?: string
}

export function ModuleCard({ title, description, to, icon: Icon, color = 'bg-primary' }: ModuleCardProps) {
  return (
    <Link to={to} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
        <CardHeader>
          <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center mb-4', color)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
