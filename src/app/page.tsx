import Link from 'next/link'

export default function Home() {
  return (
   <div className='flex gap-4 flex-col'>
    <Link href="/glassmorphim-zapatilla">glassmorphim-zapatilla</Link>
    <Link href="/card-hover-effect">card-hover-effect</Link>
   </div>
  );
}
