import React from 'react'

function QnA_Left() {
  return (
    <div className="my-10 mx-5 lg:m-auto md:mx-auto">
      <div>
      <p className='text-2xl w-[80%] leading-relaxed'>
        <span className="text-lime-600">Why should you invest?</span>
        </p>

        <p className='text-3xl w-[80%] leading-relaxed'>
        Because the <span className="text-lime-600">world</span> belongs,<b> <span className="text-lime-600">to you!</span></b> 
        </p>
      </div>
      <div className="my-5 w-[80%] text-xl text-justify leading-relaxed">
        <p className=''>
        Under the pressure of industry in the decentralized world, 
        ecological objectives are vanishing. 
        We at GREENHYDROMOTION want the future to be green with your help. <br/>
        <b>Do you desire to participate in a revolution?</b> <br/>
        Would you like to take your own religion and the faith of future generations into your own hands? Then join us and begin transforming the world together.
        </p>
      </div>
        <a href="#BuyNow">
      <div className="my-5 mx-5">
        <button className="bg-lime-600 p-3 px-10 rounded-full text-white font-bold">
          Buy Now
        </button>
      </div>
          </a>
    </div>
  )
}

export default QnA_Left