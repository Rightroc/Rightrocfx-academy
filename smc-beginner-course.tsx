"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  BookOpen,
  TrendingUp,
  Zap,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BarChart3,
  Brain,
  Trophy,
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface CertificateProps {
  studentName: string
  onBack: () => void
  certificateNumber: string
}

const Certificate: React.FC<CertificateProps> = ({ studentName, onBack, certificateNumber }) => {
  return (
    <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-700">
          Rightroc FX - Smart Money Concepts Certificate
        </CardTitle>
        <CardDescription className="text-center text-blue-600">
          This certificate confirms that {studentName} has successfully completed the Smart Money Concepts Beginner's
          Course.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-lg font-semibold text-green-700 mb-4">Awarded to:</div>
        <div className="text-4xl font-extrabold text-purple-800 mb-6">{studentName}</div>
        <div className="text-gray-600 mb-4">
          For demonstrating a strong understanding of Smart Money Concepts and their application in financial markets.
        </div>
        <div className="text-sm text-gray-500 mb-2">Certificate Number: {certificateNumber}</div>
        <div className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</div>
        <Button onClick={onBack} className="mt-6 bg-blue-600 hover:bg-blue-700">
          Go Back
        </Button>
      </CardContent>
    </Card>
  )
}

export default function SMCBeginnerCourse() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [studentName, setStudentName] = useState("")
  const [showCertificate, setShowCertificate] = useState(false)
  const [certificateGenerated, setCertificateGenerated] = useState(false)

  const lessons = [
    { id: 1, title: "What is Smart Money?", icon: Brain, duration: "5 min" },
    { id: 2, title: "Market Structure Basics", icon: BarChart3, duration: "8 min" },
    { id: 3, title: "BOS/MSS Explained", icon: TrendingUp, duration: "10 min" },
    { id: 4, title: "Understanding Inducement", icon: Zap, duration: "12 min" },
    { id: 5, title: "Points of Interest (POI)", icon: Target, duration: "10 min" },
    { id: 6, title: "Putting It All Together", icon: Trophy, duration: "15 min" },
  ]

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const progressPercentage = (completedLessons.length / lessons.length) * 100

  const generateCertificateNumber = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
    return `RFX-SMC-${year}${month}${day}-${random}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 relative">
          {/* Watermark */}
          <div className="absolute top-0 right-0 opacity-20 text-gray-400 text-xs font-bold transform rotate-12">
            RIGHTROC FX
          </div>

          <h1 className="text-4xl font-bold text-gray-900">Smart Money Concepts</h1>
          <h2 className="text-2xl text-gray-700">Complete Beginner's Course</h2>
          <p className="text-lg text-gray-600">Learn to trade like institutions with XAUUSD, BTCUSD & GBPUSD</p>

          {/* Branding Badge */}
          <div className="flex items-center justify-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
              📈 RIGHTROC FX Trading Academy
            </Badge>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-yellow-100 text-yellow-800">🥇 XAUUSD (Gold)</Badge>
            <Badge className="bg-orange-100 text-orange-800">₿ BTCUSD (Bitcoin)</Badge>
            <Badge className="bg-blue-100 text-blue-800">£ GBPUSD (Pound)</Badge>
          </div>
        </div>

        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Course Progress</span>
                <span>
                  {completedLessons.length}/{lessons.length} lessons completed
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Lesson Navigation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Course Lessons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    currentLesson === lesson.id
                      ? "border-blue-500 bg-blue-50"
                      : completedLessons.includes(lesson.id)
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => setCurrentLesson(lesson.id)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        completedLessons.includes(lesson.id)
                          ? "bg-green-100 text-green-600"
                          : currentLesson === lesson.id
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {completedLessons.includes(lesson.id) ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <lesson.icon className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{lesson.title}</div>
                      <div className="text-xs text-gray-500">{lesson.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-6">
          {currentLesson === 1 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              {/* Existing card content */}
              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Lesson 1: What is Smart Money?
                </CardTitle>
                <CardDescription className="relative z-10">Understanding who moves the markets</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Think of it like this:</strong> Imagine the market is like a big swimming pool. Retail
                    traders (like us) are like small fish, but institutions are like whales. When a whale moves, it
                    creates big waves that affect all the small fish!
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">🐟 Retail Traders (Small Fish)</h3>
                    <div className="bg-red-50 p-4 rounded-lg space-y-2">
                      <div className="text-sm">
                        <strong>Who they are:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Individual traders like you and me</li>
                          <li>• Small trading accounts ($100 - $100,000)</li>
                          <li>• Trade from home or small offices</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>How they trade:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Follow popular indicators (RSI, MACD)</li>
                          <li>• Buy breakouts, sell breakdowns</li>
                          <li>• Use tight stop losses</li>
                          <li>• Often get trapped by false moves</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">🐋 Smart Money (Big Whales)</h3>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                      <div className="text-sm">
                        <strong>Who they are:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Banks (JPMorgan, Goldman Sachs)</li>
                          <li>• Hedge funds and institutions</li>
                          <li>• Central banks and governments</li>
                          <li>• Large corporations</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>How they trade:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Move billions of dollars</li>
                          <li>• Create market direction</li>
                          <li>• Hunt retail stop losses</li>
                          <li>• Plan moves weeks/months ahead</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 The Key Insight</h4>
                  <p className="text-sm text-yellow-700">
                    Smart Money Concepts teaches us to think like the whales, not the small fish. Instead of fighting
                    against institutional money, we learn to follow their footprints and trade in the same direction!
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Real Examples in Our Markets:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <h5 className="font-semibold text-yellow-800">XAUUSD (Gold)</h5>
                      <p className="text-xs text-yellow-700 mt-1">
                        Central banks buy/sell gold reserves. When they accumulate, gold price rises. When they sell, it
                        falls.
                      </p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <h5 className="font-semibold text-orange-800">BTCUSD (Bitcoin)</h5>
                      <p className="text-xs text-orange-700 mt-1">
                        Large institutions like MicroStrategy, Tesla buy billions in Bitcoin, moving the entire market.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <h5 className="font-semibold text-blue-800">GBPUSD (Pound)</h5>
                      <p className="text-xs text-blue-700 mt-1">
                        Bank of England decisions and large forex dealers control pound movements against the dollar.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    markLessonComplete(1)
                    setCurrentLesson(2)
                  }}
                  className="w-full"
                >
                  Complete Lesson 1 & Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentLesson === 2 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  Lesson 2: Market Structure Basics
                </CardTitle>
                <CardDescription className="relative z-10">Learning to read the market like a map</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Simple Analogy:</strong> Think of market structure like a staircase. In an uptrend, we're
                    climbing stairs (higher highs and higher lows). In a downtrend, we're going down stairs (lower highs
                    and lower lows).
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600">📈 Bullish Structure (Going Up)</h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="text-sm">
                          <strong>What to look for:</strong>
                          <ul className="mt-1 space-y-1 ml-4">
                            <li>• Higher Highs (HH) - Each peak is higher than the last</li>
                            <li>• Higher Lows (HL) - Each dip is higher than the last</li>
                            <li>• Price keeps climbing like stairs</li>
                          </ul>
                        </div>
                        <div className="text-xs bg-white p-2 rounded">
                          <strong>Example:</strong> If BTCUSD goes from $100K → $110K (HH), then dips to $105K (HL),
                          then rises to $115K (HH) - that's bullish structure!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">📉 Bearish Structure (Going Down)</h3>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="text-sm">
                          <strong>What to look for:</strong>
                          <ul className="mt-1 space-y-1 ml-4">
                            <li>• Lower Highs (LH) - Each peak is lower than the last</li>
                            <li>• Lower Lows (LL) - Each dip is lower than the last</li>
                            <li>• Price keeps falling like stairs</li>
                          </ul>
                        </div>
                        <div className="text-xs bg-white p-2 rounded">
                          <strong>Example:</strong> If GBPUSD goes from 1.3000 → 1.2800 (LL), then rises to 1.2900 (LH),
                          then falls to 1.2700 (LL) - that's bearish structure!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🔍 How to Identify Structure</h4>
                  <div className="text-sm text-purple-700 space-y-2">
                    <div>
                      <strong>Step 1:</strong> Look at your chart and find the obvious peaks (highs) and valleys (lows)
                    </div>
                    <div>
                      <strong>Step 2:</strong> Connect them with lines to see the pattern
                    </div>
                    <div>
                      <strong>Step 3:</strong> Ask yourself: "Are we making higher highs and higher lows, or lower highs
                      and lower lows?"
                    </div>
                    <div>
                      <strong>Step 4:</strong> That tells you if the structure is bullish or bearish
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Practice with Our Three Markets:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-yellow-50 rounded-lg border">
                      <h5 className="font-semibold text-yellow-800 mb-2">XAUUSD Exercise</h5>
                      <div className="text-xs text-yellow-700 space-y-1">
                        <div>Look at gold's daily chart</div>
                        <div>Mark the last 5 major highs and lows</div>
                        <div>Are they getting higher or lower?</div>
                        <div className="font-semibold mt-2">This tells you gold's current structure!</div>
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border">
                      <h5 className="font-semibold text-orange-800 mb-2">BTCUSD Exercise</h5>
                      <div className="text-xs text-orange-700 space-y-1">
                        <div>Open Bitcoin's 4-hour chart</div>
                        <div>Find the swing highs and lows</div>
                        <div>Draw lines connecting them</div>
                        <div className="font-semibold mt-2">What pattern do you see?</div>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border">
                      <h5 className="font-semibold text-blue-800 mb-2">GBPUSD Exercise</h5>
                      <div className="text-xs text-blue-700 space-y-1">
                        <div>Check pound's 1-hour chart</div>
                        <div>Identify recent peaks and valleys</div>
                        <div>Determine the current trend direction</div>
                        <div className="font-semibold mt-2">Is it bullish or bearish structure?</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Key Takeaway:</strong> Market structure is like reading a map. Once you can identify if
                    we're in bullish or bearish structure, you know which direction the smart money is pushing the
                    market!
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markLessonComplete(2)
                    setCurrentLesson(3)
                  }}
                  className="w-full"
                >
                  Complete Lesson 2 & Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentLesson === 3 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Lesson 3: BOS/MSS Explained
                </CardTitle>
                <CardDescription className="relative z-10">When smart money changes direction</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Real-World Analogy:</strong> Imagine you're following a crowd. BOS is when the crowd keeps
                    going in the same direction (following the trend). MSS is when the crowd suddenly changes direction
                    (trend reversal)!
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">🚀 BOS (Break of Structure)</h3>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <strong>What it means:</strong>
                        <p className="mt-1">The trend continues in the same direction by breaking a key level</p>
                      </div>
                      <div className="text-sm">
                        <strong>Bullish BOS:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Price breaks above the previous high</li>
                          <li>• Confirms uptrend is continuing</li>
                          <li>• Smart money is still buying</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Bearish BOS:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Price breaks below the previous low</li>
                          <li>• Confirms downtrend is continuing</li>
                          <li>• Smart money is still selling</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-600">🔄 MSS (Market Structure Shift)</h3>
                    <div className="bg-purple-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <strong>What it means:</strong>
                        <p className="mt-1">The trend is changing direction - smart money is switching sides</p>
                      </div>
                      <div className="text-sm">
                        <strong>Bullish MSS (Trend changing to up):</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• In a downtrend, price breaks above previous high</li>
                          <li>• First sign trend might reverse</li>
                          <li>• Smart money starting to buy</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Bearish MSS (Trend changing to down):</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• In an uptrend, price breaks below previous low</li>
                          <li>• First sign trend might reverse</li>
                          <li>• Smart money starting to sell</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 How to Spot BOS/MSS (Step by Step)</h4>
                  <div className="text-sm text-green-700 space-y-2">
                    <div>
                      <strong>Step 1:</strong> Identify the current market structure (bullish or bearish)
                    </div>
                    <div>
                      <strong>Step 2:</strong> Mark the most recent significant high and low
                    </div>
                    <div>
                      <strong>Step 3:</strong> Wait for price to approach these levels
                    </div>
                    <div>
                      <strong>Step 4:</strong> If price breaks the level in the same direction as trend = BOS
                    </div>
                    <div>
                      <strong>Step 5:</strong> If price breaks the level against the trend = MSS
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Real Examples in Our Markets:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-100 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">XAUUSD (Gold) Example</h5>
                      <div className="text-sm text-yellow-700">
                        <strong>Scenario:</strong> Gold is in an uptrend, making higher highs. The last high was $2,100.
                        <br />
                        <strong>BOS:</strong> If price breaks above $2,100 = Bullish BOS (uptrend continues)
                        <br />
                        <strong>MSS:</strong> If price breaks below the last major low = Bearish MSS (trend might
                        reverse)
                      </div>
                    </div>

                    <div className="p-4 bg-orange-100 rounded-lg">
                      <h5 className="font-semibold text-orange-800 mb-2">BTCUSD (Bitcoin) Example</h5>
                      <div className="text-sm text-orange-700">
                        <strong>Scenario:</strong> Bitcoin is in a downtrend, making lower lows. The last low was
                        $95,000.
                        <br />
                        <strong>BOS:</strong> If price breaks below $95,000 = Bearish BOS (downtrend continues)
                        <br />
                        <strong>MSS:</strong> If price breaks above the last major high = Bullish MSS (trend might
                        reverse)
                      </div>
                    </div>

                    <div className="p-4 bg-blue-100 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">GBPUSD (Pound) Example</h5>
                      <div className="text-sm text-blue-700">
                        <strong>Scenario:</strong> Pound is ranging between 1.2500 and 1.2800.
                        <br />
                        <strong>Bullish BOS:</strong> If price breaks above 1.2800 = Uptrend starting
                        <br />
                        <strong>Bearish BOS:</strong> If price breaks below 1.2500 = Downtrend starting
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> BOS/MSS tells you the direction smart money wants to go, but DON'T enter
                    trades yet! This is just step 1 of our 3-step strategy. We still need to wait for inducement and
                    POI!
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markLessonComplete(3)
                    setCurrentLesson(4)
                  }}
                  className="w-full"
                >
                  Complete Lesson 3 & Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentLesson === 4 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  Lesson 4: Understanding Inducement
                </CardTitle>
                <CardDescription className="relative z-10">How smart money traps retail traders</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Perfect Analogy:</strong> Imagine a mouse trap with cheese. The cheese (fake breakout)
                    attracts the mouse (retail traders), but it's actually a trap! Smart money sets the "cheese" to
                    catch retail traders before the real move.
                  </AlertDescription>
                </Alert>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">🪤 What is Inducement?</h3>
                  <p className="text-sm text-red-700">
                    Inducement is when smart money creates a <strong>fake move</strong> to trick retail traders into
                    entering bad positions. They do this to grab liquidity (stop losses) before making the real move in
                    the opposite direction.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-orange-600">🎣 How Smart Money Sets Traps</h3>
                    <div className="bg-orange-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <strong>Step 1: Identify Retail Behavior</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Retail traders put stops below support</li>
                          <li>• Or above resistance levels</li>
                          <li>• These create "liquidity pools"</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Step 2: Create False Move</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Push price to trigger stops</li>
                          <li>• Make it look like a real breakout</li>
                          <li>• Retail traders enter in wrong direction</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Step 3: Reverse Direction</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Quickly reverse the fake move</li>
                          <li>• Now retail is trapped</li>
                          <li>• Smart money profits from both sides</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">🔍 How to Spot Inducement</h3>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <strong>Visual Signs:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Long wicks above/below key levels</li>
                          <li>• Quick spike then immediate reversal</li>
                          <li>• Low volume on the fake move</li>
                          <li>• High volume on the reversal</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Timing Clues:</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Happens before major news</li>
                          <li>• During low liquidity hours</li>
                          <li>• At obvious support/resistance</li>
                          <li>• After long consolidation periods</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Real Inducement Examples:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-100 rounded-lg border">
                      <h5 className="font-semibold text-yellow-800 mb-2">XAUUSD (Gold) Inducement</h5>
                      <div className="text-sm text-yellow-700 space-y-2">
                        <div>
                          <strong>Setup:</strong> Gold is at $2,050 support. Retail traders have stops at $2,045.
                        </div>
                        <div>
                          <strong>Inducement:</strong> Price spikes down to $2,040, triggers all the stops.
                        </div>
                        <div>
                          <strong>Reversal:</strong> Price immediately shoots back up to $2,070+
                        </div>
                        <div className="font-semibold text-yellow-800">
                          Result: Retail got trapped selling, smart money bought cheap!
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-100 rounded-lg border">
                      <h5 className="font-semibold text-orange-800 mb-2">BTCUSD (Bitcoin) Inducement</h5>
                      <div className="text-sm text-orange-700 space-y-2">
                        <div>
                          <strong>Setup:</strong> Bitcoin at $105K resistance. Retail has stops above $105.5K.
                        </div>
                        <div>
                          <strong>Inducement:</strong> Price breaks to $106K, retail buys the "breakout".
                        </div>
                        <div>
                          <strong>Reversal:</strong> Price crashes back down to $102K
                        </div>
                        <div className="font-semibold text-orange-800">Result:</div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-100 rounded-lg border">
                      <h5 className="font-semibold text-blue-800 mb-2">GBPUSD (Pound) Inducement</h5>
                      <div className="text-sm text-blue-700 space-y-2">
                        <div>
                          <strong>Setup:</strong> Pound ranging between 1.2500-1.2800 for weeks.
                        </div>
                        <div>
                          <strong>Inducement:</strong> False break below 1.2500 to 1.2480.
                        </div>
                        <div>
                          <strong>Reversal:</strong> Quick recovery back into range and up to 1.2850
                        </div>
                        <div className="font-semibold text-blue-800">
                          Result: Range traders got stopped out before the real move!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🛡️ How to Protect Yourself</h4>
                  <div className="text-sm text-green-700 space-y-2">
                    <div>
                      <strong>1. Never chase breakouts immediately</strong> - Wait for confirmation
                    </div>
                    <div>
                      <strong>2. Watch for quick reversals</strong> - If price snaps back fast, it was likely inducement
                    </div>
                    <div>
                      <strong>3. Check volume</strong> - Real moves have volume, fake moves often don't
                    </div>
                    <div>
                      <strong>4. Wait for our POI entry</strong> - Don't enter during the inducement phase
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Golden Rule:</strong> NEVER enter trades during inducement! This is when retail gets
                    trapped. Wait for the inducement to complete, then look for your Point of Interest entry.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markLessonComplete(4)
                    setCurrentLesson(5)
                  }}
                  className="w-full"
                >
                  Complete Lesson 4 & Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentLesson === 5 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Target className="w-6 h-6 text-green-600" />
                  Lesson 5: Points of Interest (POI)
                </CardTitle>
                <CardDescription className="relative z-10">Where smart money actually enters trades</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Think of it like this:</strong> POIs are like VIP parking spots for smart money. These are
                    special price levels where institutions prefer to enter their positions because they get the best
                    prices!
                  </AlertDescription>
                </Alert>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">🎯 What are Points of Interest?</h3>
                  <p className="text-sm text-green-700">
                    POIs are specific price levels where smart money has previously shown interest. These areas often
                    act as magnets for price because institutions like to enter positions at these "familiar" levels
                    where they've traded before.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">📦 Types of POIs</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800">Order Blocks</h4>
                        <p className="text-xs text-blue-700 mt-1">
                          Areas where institutions placed large orders. Look for big candles that caused strong moves.
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Fair Value Gaps (FVG)</h4>
                        <p className="text-xs text-purple-700 mt-1">
                          Price gaps that need to be "filled". Smart money often returns to fill these gaps.
                        </p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-800">Breaker Blocks</h4>
                        <p className="text-xs text-yellow-700 mt-1">
                          Previous resistance that becomes support (or vice versa) after being broken.
                        </p>
                      </div>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <h4 className="font-semibold text-pink-800">Institutional Levels</h4>
                        <p className="text-xs text-pink-700 mt-1">
                          Round numbers (like $100K, $2000, 1.3000) and previous major highs/lows.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-orange-600">🔍 How to Find POIs</h3>
                    <div className="bg-orange-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <strong>Step 1: Look for Big Moves</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Find candles that moved price significantly</li>
                          <li>• These show where institutions were active</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Step 2: Mark the Origin</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Draw a box around where the big move started</li>
                          <li>• This is your POI zone</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>Step 3: Wait for Return</strong>
                        <ul className="mt-1 space-y-1 ml-4">
                          <li>• Price often comes back to test these levels</li>
                          <li>• That's when you look for entries</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">POI Examples in Our Markets:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-100 rounded-lg border">
                      <h5 className="font-semibold text-yellow-800 mb-2">XAUUSD (Gold) POI Example</h5>
                      <div className="text-sm text-yellow-700 space-y-2">
                        <div>
                          <strong>Scenario:</strong> Gold shoots up from $2,000 to $2,100 in one big daily candle.
                        </div>
                        <div>
                          <strong>POI Zone:</strong> The $2,000-$2,010 area where the big move started.
                        </div>
                        <div>
                          <strong>Entry Setup:</strong> Wait for gold to pull back to $2,000-$2,010, then look for
                          bullish signals.
                        </div>
                        <div className="font-semibold text-yellow-800">
                          Why it works: Institutions like to add to positions at levels where they previously bought!
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-100 rounded-lg border">
                      <h5 className="font-semibold text-orange-800 mb-2">BTCUSD (Bitcoin) POI Example</h5>
                      <div className="text-sm text-orange-700 space-y-2">
                        <div>
                          <strong>Scenario:</strong> Bitcoin drops from $110K to $100K in a strong bearish move.
                        </div>
                        <div>
                          <strong>POI Zone:</strong> The $108K-$110K area where the big drop started.
                        </div>
                        <div>
                          <strong>Entry Setup:</strong> If Bitcoin rallies back to $108K-$110K, look for bearish
                          signals.
                        </div>
                        <div className="font-semibold text-orange-800">
                          Why it works: This level now acts as resistance where institutions might sell!
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-100 rounded-lg border">
                      <h5 className="font-semibold text-blue-800 mb-2">GBPUSD (Pound) POI Example</h5>
                      <div className="text-sm text-blue-700 space-y-2">
                        <div>
                          <strong>Scenario:</strong> Pound breaks above 1.2800 resistance and rallies to 1.2950.
                        </div>
                        <div>
                          <strong>POI Zone:</strong> The 1.2800-1.2820 area (old resistance becomes support).
                        </div>
                        <div>
                          <strong>Entry Setup:</strong> Wait for pullback to 1.2800-1.2820, then look for bullish
                          continuation.
                        </div>
                        <div className="font-semibold text-blue-800">
                          Why it works: Broken resistance often becomes strong support!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">✅ POI Entry Checklist</h4>
                  <div className="text-sm text-purple-700 space-y-2">
                    <div>
                      <strong>1. BOS/MSS confirmed</strong> - We know the direction smart money wants
                    </div>
                    <div>
                      <strong>2. Inducement completed</strong> - The trap has been set and sprung
                    </div>
                    <div>
                      <strong>3. Price reaches POI</strong> - We're at an institutional level
                    </div>
                    <div>
                      <strong>4. Confirmation signal</strong> - Bullish/bearish candle pattern or rejection
                    </div>
                    <div>
                      <strong>5. Volume confirmation</strong> - Increased activity at the POI
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Key Insight:</strong> POIs are where smart money gets the best prices. By waiting for price
                    to return to these levels, you're essentially getting the same entry prices as the institutions!
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markLessonComplete(5)
                    setCurrentLesson(6)
                  }}
                  className="w-full"
                >
                  Complete Lesson 5 & Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentLesson === 6 && (
            <Card className="relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-6xl font-bold text-gray-400 transform rotate-45">RIGHTROC FX</div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Trophy className="w-6 h-6 text-gold-600" />
                  Lesson 6: Putting It All Together
                </CardTitle>
                <CardDescription className="relative z-10">
                  Complete trading strategy with real examples
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Alert>
                  <Trophy className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Congratulations!</strong> You now understand all three components. Let's combine them into a
                    complete trading strategy that you can use on XAUUSD, BTCUSD, and GBPUSD!
                  </AlertDescription>
                </Alert>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-center mb-4">The Complete SMC Strategy</h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-sm font-semibold">1. BOS/MSS</div>
                      <div className="text-xs text-gray-600">Direction</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                        <Zap className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-sm font-semibold">2. INDUCEMENT</div>
                      <div className="text-xs text-gray-600">Trap</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-sm font-semibold">3. POI ENTRY</div>
                      <div className="text-xs text-gray-600">Execute</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold">Complete Trade Examples:</h4>

                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h5 className="font-semibold text-yellow-800 mb-3">🥇 XAUUSD (Gold) Complete Trade</h5>
                    <div className="space-y-2 text-sm text-yellow-700">
                      <div>
                        <strong>1. BOS/MSS:</strong> Gold breaks above $2,080 (previous high) → Bullish BOS confirmed
                      </div>
                      <div>
                        <strong>2. INDUCEMENT:</strong> Price spikes down to $2,070 (below support) to grab stops, then
                        quickly reverses
                      </div>
                      <div>
                        <strong>3. POI ENTRY:</strong> Price returns to $2,075-$2,080 (order block), shows bullish
                        rejection candle
                      </div>
                      <div className="bg-yellow-100 p-2 rounded mt-2">
                        <strong>Trade Setup:</strong>
                        <br />• Entry: $2,078 (at POI with confirmation)
                        <br />• Stop Loss: $2,072 (below POI)
                        <br />• Take Profit: $2,120 (next resistance)
                        <br />• Risk:Reward = 1:7 (6 pips risk, 42 pips reward)
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h5 className="font-semibold text-orange-800 mb-3">₿ BTCUSD (Bitcoin) Complete Trade</h5>
                    <div className="space-y-2 text-sm text-orange-700">
                      <div>
                        <strong>1. BOS/MSS:</strong> Bitcoin breaks below $100K (previous low) → Bearish BOS confirmed
                      </div>
                      <div>
                        <strong>2. INDUCEMENT:</strong> Price spikes up to $102K (above resistance) to grab stops, then
                        quickly drops
                      </div>
                      <div>
                        <strong>3. POI ENTRY:</strong> Price returns to $101K-$102K (breaker block), shows bearish
                        rejection
                      </div>
                      <div className="bg-orange-100 p-2 rounded mt-2">
                        <strong>Trade Setup:</strong>
                        <br />• Entry: $101,500 (at POI with confirmation)
                        <br />• Stop Loss: $102,200 (above POI)
                        <br />• Take Profit: $98,000 (next support)
                        <br />• Risk:Reward = 1:5 ($700 risk, $3,500 reward)
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-semibold text-blue-800 mb-3">£ GBPUSD (Pound) Complete Trade</h5>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div>
                        <strong>1. BOS/MSS:</strong> Pound breaks above 1.2850 (previous high) → Bullish BOS confirmed
                      </div>
                      <div>
                        <strong>2. INDUCEMENT:</strong> Price dips to 1.2820 (below support) to grab stops, then
                        reverses up
                      </div>
                      <div>
                        <strong>3. POI ENTRY:</strong> Price returns to 1.2840-1.2850 (order block), shows bullish
                        hammer
                      </div>
                      <div className="bg-blue-100 p-2 rounded mt-2">
                        <strong>Trade Setup:</strong>
                        <br />• Entry: 1.2845 (at POI with confirmation)
                        <br />• Stop Loss: 1.2825 (below POI)
                        <br />• Take Profit: 1.2920 (next resistance)
                        <br />• Risk:Reward = 1:3.75 (20 pips risk, 75 pips reward)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">📋 Your Trading Checklist</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Before Entering Any Trade:</strong>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>□ Clear BOS/MSS identified</li>
                        <li>□ Inducement completed (trap sprung)</li>
                        <li>□ Price at valid POI level</li>
                        <li>□ Confirmation signal present</li>
                        <li>□ Risk:reward ratio at least 1:2</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Risk Management:</strong>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>□ Stop loss below/above POI</li>
                        <li>□ Position size calculated</li>
                        <li>□ Take profit at next major level</li>
                        <li>□ Never risk more than 1-2% per trade</li>
                        <li>□ Keep a trading journal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🎯 Next Steps for You</h4>
                  <div className="text-sm text-purple-700 space-y-2">
                    <div>
                      <strong>1. Practice on Demo:</strong> Use a demo account to practice this strategy without risking
                      real money
                    </div>
                    <div>
                      <strong>2. Start with One Market:</strong> Pick either XAUUSD, BTCUSD, or GBPUSD and master it
                      first
                    </div>
                    <div>
                      <strong>3. Keep a Journal:</strong> Record every trade setup you see, even if you don't take it
                    </div>
                    <div>
                      <strong>4. Be Patient:</strong> Wait for perfect setups - quality over quantity
                    </div>
                    <div>
                      <strong>5. Study Charts Daily:</strong> The more you practice identifying these patterns, the
                      better you'll get
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> This strategy works because you're following smart money, not fighting
                    it. Be patient, wait for all three conditions to align, and you'll be trading like the institutions!
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markLessonComplete(6)
                  }}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Complete Course! <Trophy className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Course Summary */}
        {completedLessons.length === lessons.length && (
          <div className="space-y-6">
            {!showCertificate ? (
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Trophy className="w-6 h-6" />
                    Course Completed! 🎉
                  </CardTitle>
                  <CardDescription>You're now ready to trade like smart money</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="text-lg font-semibold text-green-700">
                      Congratulations! You've mastered Smart Money Concepts
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold">XAUUSD Ready</div>
                        <div className="text-gray-600">Apply SMC to Gold trading</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold">BTCUSD Ready</div>
                        <div className="text-gray-600">Apply SMC to Bitcoin trading</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold">GBPUSD Ready</div>
                        <div className="text-gray-600">Apply SMC to Pound trading</div>
                      </div>
                    </div>

                    {/* Certificate Generation Section */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">🏆 Claim Your Professional Certificate</h3>
                      <p className="text-purple-600 mb-4">
                        Get your official Smart Money Concepts certification from Rightroc FX
                      </p>

                      <div className="max-w-md mx-auto space-y-4">
                        <div>
                          <Label htmlFor="studentName" className="text-sm font-medium text-purple-700">
                            Enter your full name for the certificate:
                          </Label>
                          <Input
                            id="studentName"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            placeholder="Your Full Name"
                            className="mt-1"
                          />
                        </div>
                        <Button
                          onClick={() => {
                            if (studentName.trim()) {
                              setShowCertificate(true)
                              setCertificateGenerated(true)
                            }
                          }}
                          disabled={!studentName.trim()}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                          size="lg"
                        >
                          <Trophy className="w-5 h-5 mr-2" />
                          Generate My Certificate
                        </Button>
                      </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Eye className="w-4 h-4 mr-2" />
                      Start Live Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Certificate Display
              <Certificate
                studentName={studentName}
                onBack={() => setShowCertificate(false)}
                certificateNumber={generateCertificateNumber()}
              />
            )}
          </div>
        )}

        {/* Footer Watermark */}
        <div className="text-center py-8 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              RIGHTROC FX
            </div>
            <div className="text-sm text-gray-600">Professional Trading Education</div>
            <div className="text-xs text-gray-500">© 2024 Rightroc FX. All rights reserved.</div>
          </div>
        </div>
        {/* Floating Watermark */}
        <div className="fixed bottom-4 right-4 opacity-30 pointer-events-none z-50">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            RIGHTROC FX
          </div>
        </div>
      </div>
    </div>
  )
}
