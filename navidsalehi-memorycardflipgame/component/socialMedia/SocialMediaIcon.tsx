
import Tooltip from '@/ui/Tooltip'
import Link from 'next/link'
import React from 'react'

interface Props {
    socialMediaItem: {id:number, icon:React.ReactNode, tooltip:string, href:string, className:string}
}

const SocialMediaIcon = ({socialMediaItem}: Props) => {
    const {icon, tooltip, href, className} = socialMediaItem
  return (
      <Link href={href} target="_blank" className={`${className} relative group`}>
        {icon}
        <Tooltip>{tooltip}</Tooltip>
      </Link>
  )
}

export default SocialMediaIcon
