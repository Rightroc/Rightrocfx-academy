"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Printer, Award, Star, CheckCircle, ArrowLeft, Trophy, Stamp } from "lucide-react"

interface CertificateProps {
  studentName: string
  onBack: () => void
  certificateNumber: string
}

export default function Certificate({ studentName, onBack, certificateNumber }: CertificateProps) {
  const completionDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real implementation, you'd generate a PDF here
    alert("PDF download feature would be implemented here")
  }

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center print:hidden">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Button>
        <Button onClick={handlePrint} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Printer className="w-4 h-4" />
          Print Certificate
        </Button>
        <Button onClick={handleDownload} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      {/* Certificate */}
      <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-50 border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-2xl print:shadow-none print:border-black">
        <CardContent className="p-12 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl text-blue-600 transform rotate-12">
              <Award />
            </div>
            <div className="absolute top-20 right-16 text-4xl text-purple-600 transform -rotate-12">
              <Star />
            </div>
            <div className="absolute bottom-20 left-20 text-5xl text-blue-600 transform rotate-45">
              <Trophy />
            </div>
            <div className="absolute bottom-16 right-12 text-4xl text-purple-600 transform -rotate-45">
              <Stamp />
            </div>
          </div>

          {/* Main Certificate Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  PROFESSIONAL CERTIFICATION
                </Badge>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  RIGHTROC FX
                </h1>
                <div className="text-lg text-gray-600 font-medium">Trading Academy</div>
              </div>
            </div>

            {/* Certificate Title */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">CERTIFICATE OF COMPLETION</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700">This is to certify that</div>

              <div className="py-4 px-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-blue-300">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {studentName}
                </div>
              </div>

              <div className="text-lg text-gray-700 leading-relaxed">
                has successfully completed the comprehensive
                <br />
                <span className="text-xl font-bold text-gray-800">Smart Money Concepts Trading Course</span>
                <br />
                and demonstrated proficiency in institutional trading strategies
              </div>
            </div>

            {/* Skills Acquired */}
            <div className="bg-white bg-opacity-80 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Skills & Knowledge Acquired:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Smart Money vs Retail Trading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Market Structure Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>BOS/MSS Identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Inducement Recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Points of Interest (POI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Risk Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>XAUUSD Trading Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>BTCUSD Trading Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>GBPUSD Trading Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Institutional Trading Psychology</span>
                </div>
              </div>
            </div>

            {/* Footer Information */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8 border-t border-gray-300">
              <div className="text-center md:text-left">
                <div className="text-sm text-gray-600">Date of Completion</div>
                <div className="font-bold text-gray-800">{completionDate}</div>
              </div>

              <div className="text-center">
                <div className="w-48 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold">
                    <div className="text-xs">OFFICIAL SEAL</div>
                    <div className="text-sm">RIGHTROC FX</div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-sm text-gray-600">Certificate No.</div>
                <div className="font-bold text-gray-800 font-mono">{certificateNumber}</div>
              </div>
            </div>

            {/* Signature Line */}
            <div className="pt-6">
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-48 border-b-2 border-gray-400 mb-2"></div>
                  <div className="text-sm font-semibold text-gray-700">Rightroc FX</div>
                  <div className="text-xs text-gray-500">Chief Trading Instructor</div>
                </div>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <div className="text-sm text-yellow-800">
                <strong>Certificate Verification:</strong> This certificate can be verified at rightroc-fx.com/verify
                <br />
                <span className="font-mono text-xs">{certificateNumber}</span>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-600 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-purple-600 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-blue-600 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-purple-600 rounded-br-lg"></div>
        </CardContent>
      </Card>

      {/* Certificate Features */}
      <div className="text-center text-sm text-gray-600 print:hidden">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <h4 className="font-semibold mb-2">Certificate Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>✅ Unique Certificate Number</div>
            <div>✅ Official Date of Completion</div>
            <div>✅ Detailed Skills Verification</div>
            <div>✅ Professional Rightroc FX Branding</div>
            <div>✅ Print & PDF Download Ready</div>
            <div>✅ Online Verification Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}
