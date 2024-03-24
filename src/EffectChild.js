import React from 'react'
import EffectGrandChild from './EffectGrandChild'
import { useContext } from 'react'
import { EffectContext } from './context/effectContext'
function EffectChild() {
  const {user} = useContext(EffectContext)
  return (
    <div  >
      <div className='border'>

              <div>effect child</div>
            <div>{`name : ${user.name}`}</div>
            <div>{` is admin ? ${user.isAdmin}`}</div>
      </div>
      

        <EffectGrandChild></EffectGrandChild>
    </div>
  )
}

export default EffectChild