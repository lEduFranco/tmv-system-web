import type { Content } from 'pdfmake/interfaces'
import { logo } from '../../assets/logoPdfHeader'

export const generateDefaultHeader = (): Content => {
  return [
    {
      image: logo,
      fit: [350, 200],
      alignment: 'center',
      margin: [0, 25, 0, 0],
    },
  ]
}
