import React from 'react'

const App: React.FC = () => {
  enum Color {
    Red = -20,
    Green = 22,
    Blue,
  }
  let a: Color = Color.Red
  let b: Color = Color.Green
  let c: Color = Color.Blue
  let colorName: string = Color[22]

  console.log(a, b, c, colorName)
  return <h1>Hi world!</h1>
}

export default App
