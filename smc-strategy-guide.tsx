"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  Target,
  Zap,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lightbulb,
} from "lucide-react"

export default function SMCStrategyGuide() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    { id: 1, title: "BOS/MSS", icon: TrendingUp, color: "blue" },
    { id: 2, title: "INDUCEMENT", icon: Zap, color: "yellow" },
    { id: 3, title: "POI ENTRY", icon: Target, color: "green" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Smart Money Concepts Strategy</h1>
          <p className="text-lg text-gray-600">BOS/MSS → INDUCEMENT → POI Entry Method</p>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-blue-100 text-blue-800">Institutional Trading</Badge>
            <Badge className="bg-purple-100 text-purple-800">High Probability</Badge>
            <Badge className="bg-green-100 text-green-800">Smart Money</Badge>
          </div>
        </div>

        {/* Strategy Flow */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-center">Strategy Flow</CardTitle>
            <CardDescription className="text-center">
              Follow this 3-step process for high-probability entries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                      activeStep === step.id ? "scale-110" : "hover:scale-105"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                        step.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : step.color === "yellow"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                      } ${activeStep === step.id ? "ring-4 ring-offset-2 ring-blue-300" : ""}`}
                    >
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-semibold text-center">{step.title}</div>
                  </div>
                  {index < steps.length - 1 && <ArrowRight className="w-6 h-6 text-gray-400 mx-2 md:mx-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Explanation */}
        <Tabs
          value={`step${activeStep}`}
          onValueChange={(value) => setActiveStep(Number.parseInt(value.replace("step", "")))}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="step1">1. BOS/MSS</TabsTrigger>
            <TabsTrigger value="step2">2. INDUCEMENT</TabsTrigger>
            <TabsTrigger value="step3">3. POI ENTRY</TabsTrigger>
          </TabsList>

          <TabsContent value="step1" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Step 1: BOS/MSS (Break of Structure / Market Structure Shift)
                </CardTitle>
                <CardDescription>Identify when smart money changes market direction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">What is BOS/MSS?</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800">Break of Structure (BOS)</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          When price breaks a significant swing high (bullish BOS) or swing low (bearish BOS),
                          indicating continuation of the current trend.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Market Structure Shift (MSS)</h4>
                        <p className="text-sm text-purple-700 mt-1">
                          When price breaks counter-trend structure, signaling a potential trend reversal. This is the
                          first sign that smart money is changing direction.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600">How to Identify</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Bullish BOS/MSS</div>
                          <div className="text-sm text-gray-600">Price breaks above previous swing high</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Bearish BOS/MSS</div>
                          <div className="text-sm text-gray-600">Price breaks below previous swing low</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Volume Confirmation</div>
                          <div className="text-sm text-gray-600">Look for increased volume on the break</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Key Point:</strong> BOS/MSS is your first signal that institutional money is moving. It
                    tells you the direction smart money wants to take the market, but don't enter yet!
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">BTCUSD Example:</h4>
                  <p className="text-sm text-gray-700">
                    Looking at your charts, the daily timeframe shows a clear bullish BOS when price broke above the
                    previous high around $73K in April, signaling the start of the major rally to $112K. The recent
                    pullback to $103K could be setting up for another BOS if it breaks above $107K resistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="step2" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  Step 2: INDUCEMENT (Liquidity Grab)
                </CardTitle>
                <CardDescription>Wait for smart money to trap retail traders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-yellow-600">What is Inducement?</h3>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Inducement is when smart money creates a false move to trigger retail stop losses and grab
                        liquidity before the real move begins. It's essentially a "stop hunt" or "liquidity grab" that
                        traps retail traders on the wrong side.
                      </p>
                    </div>

                    <h4 className="font-semibold text-gray-800">Common Inducement Patterns:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">False breakouts above/below key levels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Wicks that grab stops and reverse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Sweep of previous highs/lows</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Equal highs/lows getting taken out</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-orange-600">How to Spot Inducement</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Before BOS</h4>
                        <p className="text-sm text-orange-700">
                          Look for liquidity sweeps opposite to the expected BOS direction
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800">Volume Characteristics</h4>
                        <p className="text-sm text-red-700">
                          Often low volume on the inducement move, high volume on the reversal
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Time Factor</h4>
                        <p className="text-sm text-purple-700">Inducement moves are usually quick and don't sustain</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Warning:</strong> Never enter during inducement! This is when retail traders get trapped.
                    Wait for the inducement to complete and price to return to your Point of Interest.
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">BTCUSD Example:</h4>
                  <p className="text-sm text-gray-700">
                    On your 15-minute chart, if you see price spike down below $103K support (inducement) to grab stops,
                    then quickly reverse back above $103.5K, that's your inducement complete. Now you wait for price to
                    return to a Point of Interest for entry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="step3" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Step 3: POI ENTRY (Point of Interest)
                </CardTitle>
                <CardDescription>Enter at institutional levels where smart money accumulates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600">What are Points of Interest?</h3>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        POIs are key levels where institutional traders (smart money) are likely to enter positions.
                        These are areas of previous institutional activity that often act as support/resistance.
                      </p>
                    </div>

                    <h4 className="font-semibold text-gray-800">Types of POIs:</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded text-sm">
                        <strong>Order Blocks:</strong> Areas where institutions placed large orders
                      </div>
                      <div className="p-2 bg-purple-50 rounded text-sm">
                        <strong>Fair Value Gaps:</strong> Imbalances in price that need to be filled
                      </div>
                      <div className="p-2 bg-yellow-50 rounded text-sm">
                        <strong>Breaker Blocks:</strong> Previous resistance that becomes support (or vice versa)
                      </div>
                      <div className="p-2 bg-pink-50 rounded text-sm">
                        <strong>Institutional Levels:</strong> Round numbers, previous highs/lows
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">Entry Criteria</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">BOS/MSS Confirmed</div>
                          <div className="text-sm text-gray-600">Market structure is clear</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Inducement Complete</div>
                          <div className="text-sm text-gray-600">Liquidity grab has occurred</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Price at POI</div>
                          <div className="text-sm text-gray-600">Touching institutional level</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Confirmation Signal</div>
                          <div className="text-sm text-gray-600">Reversal candle or pattern</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Entry Execution:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Entry:</strong> At POI with confirmation
                    </div>
                    <div>
                      <strong>Stop Loss:</strong> Below/above POI (opposite side)
                    </div>
                    <div>
                      <strong>Take Profit:</strong> Next major level or liquidity pool
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Success Tip:</strong> The best entries happen when all three elements align perfectly: Clear
                    BOS/MSS + Completed Inducement + Price at strong POI = High probability trade!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* BTCUSD Application */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Applying SMC Strategy to Your BTCUSD Analysis
            </CardTitle>
            <CardDescription>How to use BOS/MSS → INDUCEMENT → POI on your current setup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">1. BOS/MSS Analysis</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Daily: Bullish BOS from $76K to $112K</li>
                  <li>• 4H: Consolidation phase (no clear BOS yet)</li>
                  <li>• 15M: Waiting for BOS above $104K</li>
                  <li>• Watch for MSS if breaks below $102K</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-100 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">2. Inducement Levels</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Liquidity below $102.5K (stops)</li>
                  <li>• Equal highs around $107K (stops)</li>
                  <li>• Watch for false breaks of these levels</li>
                  <li>• Quick reversal = inducement complete</li>
                </ul>
              </div>

              <div className="p-4 bg-green-100 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">3. POI Entry Zones</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Order block: $103.2K - $103.8K</li>
                  <li>• Previous resistance turned support</li>
                  <li>• Round number: $103K psychological level</li>
                  <li>• Enter with confirmation candle</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Current Setup Strategy:</h4>
              <p className="text-sm text-gray-700">
                <strong>Scenario 1 (Bullish):</strong> Wait for inducement below $103K (liquidity grab), then enter long
                when price returns to $103.2-$103.8K POI with bullish confirmation.
                <br />
                <br />
                <strong>Scenario 2 (Continuation):</strong> If price breaks above $104K (BOS), wait for pullback to
                $103.5K POI for entry with the trend.
                <br />
                <br />
                <strong>Risk Management:</strong> Stop loss below the POI, target the next liquidity level around
                $105-107K.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <Card>
          <CardHeader>
            <CardTitle>SMC Strategy Quick Reference</CardTitle>
            <CardDescription>Checklist for executing the strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">✅ BOS/MSS Checklist</h4>
                <div className="text-sm space-y-1">
                  <div>□ Identify market structure</div>
                  <div>□ Mark swing highs/lows</div>
                  <div>□ Wait for clear break</div>
                  <div>□ Confirm with volume</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">⚡ Inducement Checklist</h4>
                <div className="text-sm space-y-1">
                  <div>□ Identify liquidity levels</div>
                  <div>□ Watch for false breaks</div>
                  <div>□ Confirm quick reversal</div>
                  <div>□ Don't enter during inducement</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">🎯 POI Entry Checklist</h4>
                <div className="text-sm space-y-1">
                  <div>□ Price reaches POI level</div>
                  <div>□ Wait for confirmation signal</div>
                  <div>□ Set stop below/above POI</div>
                  <div>□ Target next major level</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Eye className="w-4 h-4 mr-2" />
            Apply to BTCUSD
          </Button>
          <Button size="lg" variant="outline">
            <Target className="w-4 h-4 mr-2" />
            Set SMC Alerts
          </Button>
        </div>
      </div>
    </div>
  )
}
