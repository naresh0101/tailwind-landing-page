import HomeBanner from "../components/homeBanner";
import Navbar from "../components/navbar";
import homeModuleStyle from '../../styles/Home.module.css'
import HomeHeroInto from "../components/heroIntro";
import FeatureOption from "../components/featureOption";

export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <div className={homeModuleStyle.homelayout}>
                <HomeBanner />
                <HomeHeroInto />
                <FeatureOption />
            </div>
        </>
    )
}
