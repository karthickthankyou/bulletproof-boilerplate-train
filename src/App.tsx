import React from 'react'

function App() {
  return (
    <div className="flex">
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((num) => (
        <div className={`p-4 m-2 bg-primary-${num}`}></div>
      ))}
    </div>
  )
}

export default App
