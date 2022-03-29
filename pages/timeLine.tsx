import React, { useState, useEffect } from 'react'

const AboutMe = () => {
  return (
    <div>
      此博主很懒啥也没有留下
    </div>
  )
}
AboutMe.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    resolve({})
  })
  return await promise
}
export default AboutMe
