import Image from 'next/image'
import Link from 'next/link'

export default function ButtonWA() {
  return (
      <Link href="https://wa.me/62895802778484" className='fixed bottom-24 right-10 sm:bottom-12 sm:right-14 z-20'>
        <Image src={'/wa.svg'} alt="Whatsapp Icon" className="invert bg-red-400 drop-shadow-lg rounded-full p-0.5" width={44} height={44} />
      </Link>
  )
}
