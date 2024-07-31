import React from 'react'
import './Step.css'

const Step = () => {
  return (
    <div>
        <div className="how-we-work">
            <h2>How We Work</h2>
            <div className="steps">
                <div className="step">
                    <div className="icon_background">
                        <h2 className="num">1</h2>
                    </div>
                    <h3>Consultation</h3>
                    <p>Schedule a meeting with our experts to understand your unique HR needs. We understand that every business is unique, which is why we offer customized HR solutions</p>
                </div>
                <div className="step">
                    <div className="icon_background">
                        <h2 className="num">2</h2>
                    </div>
                    <h3>Strategy Development</h3>
                    <p>We create a tailored HR strategy to address your specific challenges and goals. Our team implements the strategy, ensuring seamless integration with your existing processes.</p>
                </div>
                <div className="step">
                    <div className="icon_background">
                        <h2 className="num">3</h2>
                    </div>
                    <h3>Ongoing Support</h3>
                    <p>We provide continuous support and optimization to ensure sustained success. Leverage our expertise to develop and refine your HR strategies and policies and elevate your organization</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step