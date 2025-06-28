"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, BarChart3, Target, Shield, AlertTriangle, Clock, DollarSign } from "lucide-react"
import Image from "next/image"

export default function TradingAnalysis() {
  const [riskAmount, setRiskAmount] = useState("1000")
  const [entryPrice, setEntryPrice] = useState("103560")
  const [stopLoss, setStopLoss] = useState("102800")
  const [takeProfit, setTakeProfit] = useState("105200")

  const calculateRiskReward = () => {
    const entry = Number.parseFloat(entryPrice)
    const sl = Number.parseFloat(stopLoss)
    const tp = Number.parseFloat(takeProfit)
    const risk = Math.abs(entry - sl)
    const reward = Math.abs(tp - entry)
    return reward / risk
  }

  const calculatePositionSize = () => {
    const riskUSD = Number.parseFloat(riskAmount)
    const entry = Number.parseFloat(entryPrice)
    const sl = Number.parseFloat(stopLoss)
    const riskPerUnit = Math.abs(entry - sl)
    return (riskUSD / riskPerUnit).toFixed(6)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">BTCUSD Trading Analysis</h1>
          <p className="text-gray-600">Multi-timeframe analysis for 15-minute entry strategy</p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingUp className="w-4 h-4 mr-1" />
              Current: $103,560
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Clock className="w-4 h-4 mr-1" />
              15M Entry Setup
            </Badge>
          </div>
        </div>

        {/* Chart Analysis */}
        <Tabs defaultValue="1day" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="1day">1 Day</TabsTrigger>
            <TabsTrigger value="4hour">4 Hours</TabsTrigger>
            <TabsTrigger value="15min">15 Minutes</TabsTrigger>
          </TabsList>

          <TabsContent value="1day" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Daily Timeframe Analysis
                </CardTitle>
                <CardDescription>Long-term trend and major market structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/charts/1day-chart.png"
                    alt="BTCUSD daily chart"
                    width={800}
                    height={400}
                    className="w-full rounded-lg border"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">Bullish Structure</h4>
                      <ul className="text-sm text-green-700 mt-2 space-y-1">
                        <li>• Massive rally from $76K to $112K</li>
                        <li>• Strong uptrend since April</li>
                        <li>• Higher highs and higher lows</li>
                        <li>• Volume expansion on breakouts</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Current Phase</h4>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>• Healthy pullback from highs</li>
                        <li>• Testing $103K support zone</li>
                        <li>• Consolidation after strong move</li>
                        <li>• Potential continuation pattern</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Key Levels</h4>
                      <ul className="text-sm text-purple-700 mt-2 space-y-1">
                        <li>• All-time high: ~$112,000</li>
                        <li>• Major support: $100,000</li>
                        <li>• Current: $103,555</li>
                        <li>• Next resistance: $107,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="4hour" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  4-Hour Timeframe Analysis
                </CardTitle>
                <CardDescription>Medium-term trend and structure analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/charts/4hour-chart.png"
                    alt="BTCUSD 4-hour chart"
                    width={800}
                    height={400}
                    className="w-full rounded-lg border"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">Market Structure</h4>
                      <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                        <li>• Range-bound between $102K-$107K</li>
                        <li>• Multiple resistance tests at $107K</li>
                        <li>• Support holding at $103K level</li>
                        <li>• Consolidation triangle forming</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800">Technical Setup</h4>
                      <ul className="text-sm text-orange-700 mt-2 space-y-1">
                        <li>• Decreasing volatility</li>
                        <li>• Coiling price action</li>
                        <li>• Breakout setup developing</li>
                        <li>• Volume drying up (typical before breakout)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="15min" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  15-Minute Timeframe Analysis
                </CardTitle>
                <CardDescription>Entry timeframe - precise timing for trade execution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/charts/15min-chart.png"
                    alt="BTCUSD 15-minute chart"
                    width={800}
                    height={400}
                    className="w-full rounded-lg border"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">Entry Signals</h4>
                      <ul className="text-sm text-green-700 mt-2 space-y-1">
                        <li>• Sharp spike to $107K visible</li>
                        <li>• Pullback to $103.5K support</li>
                        <li>• Recent consolidation phase</li>
                        <li>• Potential double bottom forming</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Current Setup</h4>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>• Price at key support $103.5K</li>
                        <li>• Low volatility environment</li>
                        <li>• Tight range trading</li>
                        <li>• Awaiting directional move</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800">Risk Factors</h4>
                      <ul className="text-sm text-red-700 mt-2 space-y-1">
                        <li>• Break below $103K = bearish</li>
                        <li>• Low volume on recent moves</li>
                        <li>• Potential false breakout risk</li>
                        <li>• Weekend/low liquidity risk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trading Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                15-Minute Entry Strategy
              </CardTitle>
              <CardDescription>Optimal entry conditions for today's trade</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-800">Bias</span>
                  <Badge className="bg-green-100 text-green-800">Long (Bullish)</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Entry Scenarios:</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-800">Scenario 1: Breakout Play</div>
                      <ul className="text-sm text-blue-700 mt-1 space-y-1">
                        <li>• Entry: Break above $104,000 with volume</li>
                        <li>• Confirmation: 15-min close above level</li>
                        <li>• Target: $105,500 - $106,000</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium text-purple-800">Scenario 2: Support Bounce</div>
                      <ul className="text-sm text-purple-700 mt-1 space-y-1">
                        <li>• Entry: Bounce from $103,200-$103,500</li>
                        <li>• Confirmation: Bullish reversal candle</li>
                        <li>• Target: $104,500 - $105,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Stop Loss Conditions:</h4>
                  <ul className="text-sm space-y-1 text-red-700">
                    <li>• Break below $102,800 (key support)</li>
                    <li>• 15-min close below $103,000</li>
                    <li>• High volume rejection at resistance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Risk Management Calculator
              </CardTitle>
              <CardDescription>Position sizing and risk-reward analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="risk">Risk Amount ($)</Label>
                  <Input
                    id="risk"
                    value={riskAmount}
                    onChange={(e) => setRiskAmount(e.target.value)}
                    placeholder="1000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="entry">Entry Price</Label>
                  <Input
                    id="entry"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    placeholder="103560"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stop">Stop Loss</Label>
                  <Input
                    id="stop"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(e.target.value)}
                    placeholder="102800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Take Profit</Label>
                  <Input
                    id="target"
                    value={takeProfit}
                    onChange={(e) => setTakeProfit(e.target.value)}
                    placeholder="105200"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Risk:Reward Ratio</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    1:{calculateRiskReward().toFixed(2)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Position Size (BTC)</span>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    {calculatePositionSize()}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Potential Profit</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    ${(Number.parseFloat(riskAmount) * calculateRiskReward()).toFixed(2)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Risk Amount</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700">
                    ${riskAmount}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Context */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Multi-Timeframe Context
            </CardTitle>
            <CardDescription>How all timeframes align for this trade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="text-lg font-bold text-green-600">DAILY</div>
                <div className="text-sm text-green-700 mt-1">Bullish Trend</div>
                <div className="text-xs text-green-600 mt-2">
                  Strong uptrend from $76K to $112K. Healthy pullback to $103K support.
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <div className="text-lg font-bold text-yellow-600">4-HOUR</div>
                <div className="text-sm text-yellow-700 mt-1">Consolidation</div>
                <div className="text-xs text-yellow-600 mt-2">Range-bound $102K-$107K. Breakout setup forming.</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="text-lg font-bold text-blue-600">15-MIN</div>
                <div className="text-sm text-blue-700 mt-1">Entry Zone</div>
                <div className="text-xs text-blue-600 mt-2">
                  At key support $103.5K. Awaiting breakout or bounce signal.
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Timeframe Alignment Analysis:</h4>
              <p className="text-sm text-gray-700">
                <strong>Bullish Confluence:</strong> Daily trend is strongly bullish, 4-hour shows consolidation after
                the rally (typical before continuation), and 15-minute is at a key decision point. The setup favors a
                long position, but wait for confirmation on the 15-minute timeframe before entering. The risk-reward is
                favorable with clear levels defined.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Levels */}
        <Card>
          <CardHeader>
            <CardTitle>Critical Price Levels</CardTitle>
            <CardDescription>Key levels to monitor for trade execution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">$102,800</div>
                <div className="text-sm text-red-700">Stop Loss</div>
                <div className="text-xs text-red-600 mt-1">Break = Exit</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">$103,560</div>
                <div className="text-sm text-blue-700">Current Price</div>
                <div className="text-xs text-blue-600 mt-1">Entry Zone</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">$104,000</div>
                <div className="text-sm text-green-700">Breakout Level</div>
                <div className="text-xs text-green-600 mt-1">Entry Trigger</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-xl font-bold text-purple-600">$105,200</div>
                <div className="text-sm text-purple-700">Take Profit</div>
                <div className="text-xs text-purple-600 mt-1">Target Zone</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <TrendingUp className="w-4 h-4 mr-2" />
            Execute Long Trade
          </Button>
          <Button size="lg" variant="outline">
            <DollarSign className="w-4 h-4 mr-2" />
            Set Price Alerts
          </Button>
        </div>
      </div>
    </div>
  )
}
