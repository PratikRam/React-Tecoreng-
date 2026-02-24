import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos', 'videos']

  const dispatch = useDispatch()

  const activeTab = useSelector(state => state.search.activeTab)
  return (
    <div>
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            className={`${
              activeTab === elem ? 'bg-blue-500' : 'bg-gray-400'
            } active:scale-95 border rounded  px-3 py-2 font-semibold m-5 transition ease-in-out duration-150`}
            onClick={() => {
              dispatch(setActiveTabs(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
