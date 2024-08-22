import type { Content } from 'pdfmake/interfaces'

export const GenerateDefaultFooter = (): Content => {
  return [
    {
      text: `_____________________________________________________________________________________________________________________________`,
      fontSize: 7,
      alignment: 'center',
      margin: [20, 0, 20, 5],
      color: '#cbd5e1',
    },
    {
      text: `TÔ MAIS VIP - DIARISTAS TECNOLOGIA E INTERMEDIAÇÃO LTDA`,
      fontSize: 7,
      margin: [20, 0, 20, 0],
      alignment: 'center',
    },
    {
      text: `TELEFONES: (61) 9 9393-1844 (whatsapp) / (61) 3022-2325 (Fixo)`,
      margin: [20, 0, 20, 0],
      fontSize: 7,
      alignment: 'center',
    },
    {
      text: `QE 01 CONJ I CASA 74 – GUARÁ 1 – 71.020-091`,
      margin: [20, 0, 20, 0],
      fontSize: 7,
      alignment: 'center',
    },
    {
      text: `https://www.tomaisvip.com.br`,
      link: `https://www.tomaisvip.com.br`,
      decoration: 'underline',
      margin: [20, 0, 20, 0],
      fontSize: 7,
      alignment: 'center',
      color: '#3b82f6',
    },
  ]
}
