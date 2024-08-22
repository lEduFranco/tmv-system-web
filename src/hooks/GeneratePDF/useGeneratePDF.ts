import { useCallback, useState } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'

import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { generateDefaultHeader } from './generateDefaultHeader'
import { GenerateDefaultFooter } from './generateDefaultFooter'

interface GeneratePDFProps {
  PDFContent: any
  downloadPDF?: boolean
  fileName?: string
}

export function useGeneratePDF() {
  const [isBeingGenerated, setIsBeingGenerated] = useState(false)

  const generatePDF = useCallback(
    async ({
      PDFContent,
      downloadPDF = false,
      fileName = '',
    }: GeneratePDFProps) => {
      setIsBeingGenerated(true)

      const PDFGenerate = new Promise((resolve) => {
        pdfMake.fonts = {
          OpenSans: {
            normal: 'https://fonts.cdnfonts.com/s/14884/OpenSans-Regular.woff',
            bold: 'https://fonts.cdnfonts.com/s/14884/OpenSans-Bold.woff',
          },
        }

        const docDefinition: TDocumentDefinitions = {
          header: generateDefaultHeader(),
          content: PDFContent,
          footer: GenerateDefaultFooter(),
          defaultStyle: {
            font: 'OpenSans',
          },
          pageMargins: [40, 180, 40, 60],
        }

        const pdfDocGenerator = pdfMake.createPdf(docDefinition)

        if (!downloadPDF) {
          pdfDocGenerator.open()
        }

        if (downloadPDF) {
          pdfDocGenerator.download(fileName)
        }

        resolve('PDF gerado com sucesso!')
      })

      await PDFGenerate

      setIsBeingGenerated(false)
    },
    [],
  )

  return {
    isBeingGenerated,
    generatePDF,
  }
}
