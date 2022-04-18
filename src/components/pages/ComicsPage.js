import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {

    return (
        <>
            <AppBanner/>
            <ComicsList/>
            <img className="bg-decoration" src='https://images.squarespace-cdn.com/content/v1/558dd098e4b04b60d9638dc5/1438504501153-41OR78PUBMIUB4LZ51MS/image-asset.jpeg' alt="vision"/>
        </>
    )
}

export default ComicsPage;