// import React from 'react'
import PropTypes from "prop-types"
const AchieveCard = ({content,label,imgSrc,classes}) => {
  return (
    <div className={"bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]" +classes}>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
            <img src={imgSrc} alt={label} width={44} height={44} className="img-cover" />
        </figure>
        <div>
      <p className="text-zinc-400 mb-8">
        {content}
      </p>
            <p>{label}</p>
        </div>
      </div>
    </div>
  )
}
AchieveCard.propTypes={
    content:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    imgSrc:PropTypes.string.isRequired,
    classes:PropTypes.string,
}

export default AchieveCard
