import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from 'vitest'
import { App } from './App'

test('renders the Worldglance starting page', () => {
  const markup = renderToStaticMarkup(<App />)

  expect(markup).toContain('<h1>Worldglance</h1>')
  expect(markup).toContain('A calm, stylized view of our living Earth.')
})
