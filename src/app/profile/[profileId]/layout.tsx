import React, { ReactNode } from 'react'

const ProfileLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        {children}
        <h2>Profile Sub-Layout Section</h2>
    </div>
  )
}

export default ProfileLayout