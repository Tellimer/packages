import React, { Component } from 'react'
import dom from 'react-dom/server'

export class EmailMobileOnly extends Component {
  render() {
    return (
      <div
        className="email-mobile-only"
        dangerouslySetInnerHTML={{
          __html: `<!--[if !mso]><!-- -->
            ${dom.renderToString(this.props.children)}
          <!--<![endif]-->`,
        }}
      ></div>
    )
  }
}
