import Head from 'next/head';
import Header from '../components/Reuseables/Header'
import SideBar from '../components/Profile/Sidebar'

const order = () => {
    return (
        <div>
        <Head>
            <title>Order</title>
            <meta
                name='description'
                content='Generated by create next app'
            />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <div className='w-full h-auto tmin-h-screen flex flex-wrap bg-white lg lg:mh lg:xm lg:pb-8'>
            <SideBar />
        </div>
    </div>
    )
}

export default order