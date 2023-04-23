import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'

const NotFound = () => {
  return (
    <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
  )
}

export default NotFound