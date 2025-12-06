import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { shuffle } from '@/lib/utils'

interface Question {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
  category: string
}

const allQuestions: Question[] = [
  {
    id: 'q1',
    question: 'A 28-year-old presents with a cystic neck mass. Biopsy shows non-keratinizing SCC with strong diffuse p16 positivity. What is the most likely primary site?',
    options: ['Oral cavity', 'Oropharynx (tonsil/base of tongue)', 'Larynx', 'Nasopharynx'],
    correct: 1,
    explanation: 'Cystic metastatic SCC with strong diffuse p16 positivity is characteristic of HPV-associated oropharyngeal SCC, typically from tonsil or base of tongue.',
    category: 'Neck Masses'
  },
  {
    id: 'q2',
    question: 'Which molecular alteration is most characteristic of adenoid cystic carcinoma?',
    options: ['BRAF V600E', 'MYB-NFIB fusion', 'ETV6-NTRK3 fusion', 'MAML2 rearrangement'],
    correct: 1,
    explanation: 'MYB-NFIB fusion is found in ~60% of adenoid cystic carcinomas and is characteristic of this tumor.',
    category: 'Salivary Gland'
  },
  {
    id: 'q3',
    question: 'What is the key histologic criterion to distinguish follicular adenoma from follicular carcinoma?',
    options: ['Nuclear atypia', 'Follicular architecture', 'Capsular or vascular invasion', 'BRAF mutation'],
    correct: 2,
    explanation: 'Follicular carcinoma requires demonstration of capsular invasion (penetrating through capsule) or vascular invasion. Morphology and architecture alone cannot distinguish adenoma from carcinoma.',
    category: 'Thyroid'
  },
  {
    id: 'q4',
    question: 'A salivary gland tumor shows duct-like structures, whorls, and occurs in a young patient in the anterior maxilla. What is the diagnosis?',
    options: ['Adenoid cystic carcinoma', 'Adenomatoid odontogenic tumor', 'Pleomorphic adenoma', 'Polymorphous adenocarcinoma'],
    correct: 1,
    explanation: 'Adenomatoid odontogenic tumor (AOT) characteristically shows duct-like structures and whorls, occurs in young patients, and has predilection for anterior maxilla associated with canines.',
    category: 'Odontogenic'
  },
  {
    id: 'q5',
    question: 'What is the most common mutation in classic papillary thyroid carcinoma?',
    options: ['RAS', 'BRAF V600E', 'RET-PTC', 'PAX8-PPARG'],
    correct: 1,
    explanation: 'BRAF V600E is the most common mutation in classic PTC, found in approximately 40-50% of cases. It is associated with more aggressive features.',
    category: 'Thyroid'
  },
  {
    id: 'q6',
    question: 'A parotid tumor shows bilayer oncocytic epithelium with dense lymphoid stroma. What is the diagnosis?',
    options: ['Pleomorphic adenoma', 'Warthin tumor', 'Acinic cell carcinoma', 'Mucoepidermoid carcinoma'],
    correct: 1,
    explanation: 'Warthin tumor (papillary cystadenoma lymphomatosum) characteristically shows bilayer oncocytic epithelium with dense lymphoid stroma and occurs almost exclusively in the parotid.',
    category: 'Salivary Gland'
  },
  {
    id: 'q7',
    question: 'Which IHC marker is most sensitive for acinic cell carcinoma?',
    options: ['S100', 'DOG1', 'Mammaglobin', 'c-kit'],
    correct: 1,
    explanation: 'DOG1 is highly sensitive for acinic cell carcinoma and helps confirm the diagnosis. It is also positive in normal salivary tissue and intercalated duct lesions.',
    category: 'IHC'
  },
  {
    id: 'q8',
    question: 'A sinonasal tumor in a young patient shows poorly differentiated morphology with abrupt keratinization. NUT IHC is positive. What is the diagnosis?',
    options: ['SNUC', 'NUT carcinoma', 'Olfactory neuroblastoma', 'Poorly differentiated SCC'],
    correct: 1,
    explanation: 'Positive NUT IHC is diagnostic for NUT carcinoma (NUTM1 rearrangement). These tumors occur in young patients, involve midline structures, and show abrupt keratinization.',
    category: 'Sinonasal'
  },
  {
    id: 'q9',
    question: 'What fusion is pathognomonic for secretory carcinoma of salivary gland?',
    options: ['MYB-NFIB', 'ETV6-NTRK3', 'MAML2', 'PLAG1'],
    correct: 1,
    explanation: 'ETV6-NTRK3 fusion is pathognomonic for secretory carcinoma (formerly mammary analogue secretory carcinoma). This fusion is therapeutically targetable with NTRK inhibitors.',
    category: 'Molecular'
  },
  {
    id: 'q10',
    question: 'An odontogenic cyst shows palisaded basal layer with hyperchromatic nuclei and corrugated parakeratotic surface. What is the diagnosis?',
    options: ['Dentigerous cyst', 'Radicular cyst', 'Odontogenic keratocyst', 'Ameloblastoma'],
    correct: 2,
    explanation: 'Odontogenic keratocyst (OKC) characteristically shows palisaded basal layer with hyperchromatic nuclei and corrugated parakeratotic surface. It has high recurrence rate and association with Gorlin syndrome.',
    category: 'Odontogenic'
  },
  {
    id: 'q11',
    question: 'Which pattern requires p16 to be considered positive as a surrogate for HPV in oropharyngeal SCC?',
    options: ['Weak nuclear staining', 'Patchy cytoplasmic staining', 'Strong diffuse nuclear and cytoplasmic (>70%)', 'Any positive staining'],
    correct: 2,
    explanation: 'p16 must show strong, diffuse nuclear AND cytoplasmic staining in >70% of tumor cells to be considered positive as a surrogate for HPV. Weak or patchy staining is not specific.',
    category: 'IHC'
  },
  {
    id: 'q12',
    question: 'A thyroid lesion shows follicular architecture, PTC nuclear features, encapsulation, and NO invasion. What is the diagnosis?',
    options: ['Follicular adenoma', 'Follicular variant PTC', 'NIFTP', 'Minimally invasive follicular carcinoma'],
    correct: 2,
    explanation: 'NIFTP (Noninvasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features) requires: encapsulated, follicular architecture, PTC nuclei, NO papillae, NO invasion. It is indolent.',
    category: 'Thyroid'
  },
  {
    id: 'q13',
    question: 'What is the most common cause of primary hyperparathyroidism?',
    options: ['Parathyroid hyperplasia', 'Parathyroid adenoma', 'Parathyroid carcinoma', 'MEN syndrome'],
    correct: 1,
    explanation: 'Parathyroid adenoma is the most common cause of primary hyperparathyroidism (~80%). It represents enlargement of a single parathyroid gland.',
    category: 'Parathyroid'
  },
  {
    id: 'q14',
    question: 'A minor salivary gland tumor of the palate shows diverse architectural patterns but uniform bland cytology. What is the diagnosis?',
    options: ['Adenoid cystic carcinoma', 'Pleomorphic adenoma', 'Polymorphous adenocarcinoma', 'Mucoepidermoid carcinoma'],
    correct: 2,
    explanation: 'Polymorphous adenocarcinoma shows diverse ("polymorphous") architectural patterns but maintains uniform, bland cytology. It typically occurs in minor salivary glands, especially palate.',
    category: 'Salivary Gland'
  },
  {
    id: 'q15',
    question: 'Which feature is most helpful in distinguishing SNUC from poorly differentiated neuroendocrine carcinoma?',
    options: ['High-grade morphology', 'Necrosis', 'Chromogranin/synaptophysin positivity', 'Location'],
    correct: 2,
    explanation: 'SNUC is negative for neuroendocrine markers (chromogranin, synaptophysin), while neuroendocrine carcinoma is positive. Both are high-grade sinonasal malignancies.',
    category: 'Sinonasal'
  },
  {
    id: 'q16',
    question: 'What is the most common odontogenic cyst?',
    options: ['Odontogenic keratocyst', 'Dentigerous cyst', 'Radicular (periapical) cyst', 'Lateral periodontal cyst'],
    correct: 2,
    explanation: 'Radicular (periapical) cyst is the most common odontogenic cyst. It is inflammatory in origin and associated with non-vital teeth.',
    category: 'Odontogenic'
  },
  {
    id: 'q17',
    question: 'A laryngeal SCC is located at the true vocal cord. What is expected regarding lymph node metastasis?',
    options: ['Early nodal metastasis', 'Late nodal metastasis', 'No difference from other sites', 'Higher risk than supraglottic'],
    correct: 1,
    explanation: 'Glottic (true vocal cord) SCC has minimal lymphatic drainage and typically shows late nodal metastasis. This contrasts with supraglottic SCC which has rich lymphatics and earlier spread.',
    category: 'Larynx'
  },
  {
    id: 'q18',
    question: 'Which cell type produces calcitonin in the thyroid?',
    options: ['Follicular cells', 'C-cells (parafollicular)', 'Hürthle cells', 'Stromal cells'],
    correct: 1,
    explanation: 'C-cells (parafollicular cells) produce calcitonin. Medullary thyroid carcinoma arises from C-cells and is positive for calcitonin by IHC.',
    category: 'Thyroid'
  },
  {
    id: 'q19',
    question: 'A salivary tumor shows cribriform pattern in a minor salivary gland. What helps distinguish polymorphous adenocarcinoma from adenoid cystic carcinoma?',
    options: ['Location', 'Bland cytology vs basaloid cells', 'Size', 'Patient age'],
    correct: 1,
    explanation: 'Polymorphous adenocarcinoma has bland, uniform cytology despite varied architecture, while ACC has basaloid cells. ACC also typically shows perineural invasion.',
    category: 'Salivary Gland'
  },
  {
    id: 'q20',
    question: 'What molecular alteration is associated with medullary thyroid carcinoma in MEN 2 syndrome?',
    options: ['BRAF V600E', 'RAS mutation', 'Germline RET mutation', 'PAX8-PPARG fusion'],
    correct: 2,
    explanation: 'Germline RET mutations cause MEN 2A/2B syndromes and hereditary medullary thyroid carcinoma. All MTC patients should be tested for germline RET (25% hereditary).',
    category: 'Molecular'
  }
]

export function AssessmentPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0)
  const [quizStarted, setQuizStarted] = useState(false)

  const startQuiz = (count: number) => {
    const shuffled = shuffle(allQuestions).slice(0, count)
    setQuestions(shuffled)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions(0)
    setQuizStarted(true)
  }

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setShowExplanation(true)
    setAnsweredQuestions(prev => prev + 1)

    if (selectedAnswer === questions[currentIndex].correct) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setQuizStarted(false)
    setQuestions([])
  }

  if (!quizStarted) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Assessment</h1>
          <p className="text-muted-foreground text-lg">
            Test your knowledge with session-only assessment questions
          </p>
        </div>

        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-sm text-blue-600 dark:text-blue-500">
            <strong>Session-Only Scoring:</strong> Your score will be displayed immediately after completing the quiz
            but will not be saved or tracked. Each session starts fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startQuiz(5)}>
            <CardHeader>
              <CardTitle>Quick Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">5 random questions</p>
              <Button className="w-full">Start Quick Quiz</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startQuiz(10)}>
            <CardHeader>
              <CardTitle>Standard Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">10 random questions</p>
              <Button className="w-full">Start Standard Quiz</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startQuiz(20)}>
            <CardHeader>
              <CardTitle>Comprehensive Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">20 random questions</p>
              <Button className="w-full">Start Comprehensive Quiz</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Oral Cavity', 'Larynx', 'Sinonasal', 'Salivary Gland', 'Thyroid', 'Parathyroid', 'Odontogenic', 'Neck Masses', 'IHC', 'Molecular', 'Pitfalls'].map((topic) => (
                <div key={topic} className="p-2 bg-muted rounded text-sm text-center">
                  {topic}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1
  const isAnswered = answeredQuestions === questions.length

  if (isAnswered) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="space-y-6">
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="text-6xl font-bold mb-2">{percentage}%</div>
              <div className="text-2xl mb-4">
                {score} / {questions.length} correct
              </div>
              <p className="text-muted-foreground">
                {percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good job!' : 'Keep studying!'}
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={handleRestart}>Take Another Quiz</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Question {currentIndex + 1} of {questions.length}
          </h1>
          <p className="text-sm text-muted-foreground">Category: {currentQuestion.category}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Current Score</div>
          <div className="text-2xl font-bold">
            {score} / {answeredQuestions}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? showExplanation
                      ? index === currentQuestion.correct
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                      : 'border-primary bg-primary/10'
                    : showExplanation && index === currentQuestion.correct
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-border hover:border-primary/50'
                } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === currentQuestion.correct
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : 'border-primary bg-primary text-primary-foreground'
                      : showExplanation && index === currentQuestion.correct
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-border'
                  }`}>
                    {showExplanation && index === currentQuestion.correct && '✓'}
                    {showExplanation && selectedAnswer === index && index !== currentQuestion.correct && '✗'}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex gap-3">
            {!showExplanation ? (
              <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                Submit Answer
              </Button>
            ) : !isLastQuestion ? (
              <Button onClick={handleNext}>
                Next Question
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
