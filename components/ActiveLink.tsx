import NextLink from 'next/link';
import { Link } from '@mui/material';
import { useRouter } from 'next/router'

export function NavLink({ href, children, ...props }: any) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }
  const color = router.asPath === href ? '#8b9ad9' : '#fff'
  const line = router.asPath === href ? 'always' : 'none'
  return (
    <NextLink href={href}>
      <Link onClick={handleClick}{...props} color={color} underline={line}>
        {children}
      </Link>
    </NextLink>
  );
}
