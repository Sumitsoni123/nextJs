import { notFound } from "next/navigation"
import { Metadata } from "next";

interface Props {
  params: {
    profileId: string
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Product ${params.profileId}`
  }
}

const ProfileDetails = ({ params }: Props) => {

  if(parseInt(params.profileId) >=100) 
    notFound();

  return (
    <div>ProfileDetails {params.profileId}</div>
  )
}

export default ProfileDetails