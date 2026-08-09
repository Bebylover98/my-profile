export type SocialLink = {
  name: string
  href: string
  // icon name from lucide-react
  icon: 'Github' | 'Instagram' | 'Youtube' | 'Linkedin' | 'Facebook' | 'Music2' | 'MessageCircle'
}

// EDIT ME: delete any platform you don't use — only include what's real.
export const socials: SocialLink[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/share/1HC1PBcVng/?mibextid=wwXIfr', icon: 'Facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/its_mr.ankityadav', icon: 'Instagram' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@ankit__yadav33', icon: 'Music2' },
  { name: 'WhatsApp', href: 'https://wa.me/9779764569768', icon: 'MessageCircle' },
]
