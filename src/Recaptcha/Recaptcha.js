import React, { useEffect } from 'react'

const Recaptcha = (props) => {
    useEffect(() => {
        // Add reCaptcha
        const script = document.createElement("script")
        script.src = "https://qa-api.platform.brightlab.com/api.js?render=6LeNGL0ZAAAAAI3-xmkpu_66JnJwCM--V30miIxE"
        document.body.appendChild(script)
      }, []);

    return (
        <div
          className="g-recaptcha"
          data-sitekey="6LeNGL0ZAAAAAI3-xmkpu_66JnJwCM--V30miIxE"
          data-size="invisible"
        ></div>
      )
}

Recaptcha.propTypes = {
}
Recaptcha.defaultProps = {
}
export default Recaptcha;