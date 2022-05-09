import HomeBannerImg from '../../assets/homebanner.png'

export default function HomeBanner() {
    return (
        <div style={{ backgroundImage: `url(${HomeBannerImg?.src})` }}
            // className='bg-cover bg-center'
            className='rounded bg-no-repeat bg-cover  bg-center h-40 lg:h-80 md:h-64 mx-4'
        ></div>
    )
}
