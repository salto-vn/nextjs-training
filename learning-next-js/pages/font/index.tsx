import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'], weight: '100', })

const roboto = localFont({
    src: [
        {
        path: '../../styles/Roboto-Black.ttf',
        },
    ]
})

export default function () {
    return (
        <>
        <div>
            <h1 className={inter.className}>Font</h1>
            <p className={roboto.className}>Tua dep trai</p>
            <button className='btn btn-primary'>Back</button>
        </div>
        </>
    )
}