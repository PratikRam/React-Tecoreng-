import React, { Suspense, useState } from 'react'
// import Lazycomponent from './Lazycomponent'
const Lazycomponent = React.lazy(() => import('./Lazycomponent'))

const App = () => {
  const [lazy, setLazy] = useState(false)

  return (
    <div className='text-5xl  bg-gray-500 h-screen'>
      <h2>Lazy Component example</h2>
      <button
        className='border rounded font-medium active:scale-95 bg-sky-200 m-2'
        onClick={() => {
          setLazy(true)
        }}
      >
        Click here to see
      </button>
      {lazy && (
        <Suspense fallback={<h2>loading...</h2>}>
          <Lazycomponent />
        </Suspense>
      )}
    </div>
  )
}

export default App
