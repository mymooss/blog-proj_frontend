import React from 'react'
import Postbox from '../PostBox'
import "../../styles/contents.css"

const Contents = () => {
  return (
   <div class="big_postbox">
      <ul>
        <li class="dual_postbox"><Postbox/></li>
        <li class="dual_postbox"><Postbox/></li>
        <li class="dual_postbox"><Postbox/></li>
        <li class="dual_postbox"><Postbox/></li>
    </ul>
   </div>
  )
}

export default Contents