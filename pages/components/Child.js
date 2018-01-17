import Link from 'next/link'
export default function Child(props) {
    return (
      <h5><Link href={props.href}><a>{props.name}</a></Link></h5>
    )
}