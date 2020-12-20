import Link from "next/link";

const PageTitle = ({bgImage, titleHead }) => (<section className="page-title" style={{backgroundImage: `url(images/background/${bgImage})`}}>
    <div className="auto-container">
        <div className="title-box">
            <h1>{titleHead}</h1>
            <ul className="bread-crumb clearfix">
                <li><Link href="/"><a>Home</a></Link></li>
                <li>{titleHead}</li>
            </ul>
        </div>
    </div>
</section>);

export default PageTitle;