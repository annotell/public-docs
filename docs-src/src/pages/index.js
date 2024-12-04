import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Upload 2D data",
    pageUrl: "docs/upload-your-first-scene",
    imageUrl: "https://www.kognic.com/images/uploads/laptop-annotation.png",
    description: (
      <>
        Learn how to upload 2D data for Annotation in the Kognic Platform for simpler use-cases.
      </>
    ),
  },
  {
    title: "Upload 3D data",
    pageUrl: "docs/upload-your-first-scene",
    imageUrl: "https://www.kognic.com/images/uploads/laptop-annotation.png",
    description: (
      <>
        Learn how to upload 3D data to the Kognic Platform, including powerful multi-sensor scenes.
      </>
    ),
  },{
    title: "Download annotations",
    pageUrl: "docs/download-annotations",
    imageUrl: "https://www.kognic.com/images/uploads/laptop-annotation.png",
    description: (
      <>
        Download your completed annotations from the Kognic Platform in the industry-standard OpenLABEL format.
      </>
    ),
  },

];

const count = features?.length ?? 0;
const cw = Math.min(12, Math.max(3, Math.floor(12 / count)));
function Feature({ imageUrl, title, description, pageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--" + cw, styles.feature)} style={{display: "flex", flexDirection: "column"}}>
      {/*{imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}*/}
      <h3>{title}</h3>
      <p style={{flexGrow: "1" }}>{description}</p>
      <div style={{verticalAlign: 'bottom'}}>
        <Link
          className={clsx("button button--outline button--secondary button--lg", styles.getStarted, "button", "button--secondary", "button--block")}
          to={useBaseUrl(pageUrl)}>
            Show me!
          </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title} SDK`} description="The Annotation Platform for Sensor-Fusion">
      <header
        className={clsx("hero hero--primary", styles.heroBanner)}
        style={{ backgroundImage: `url(${useBaseUrl("img/background.png")})` }}
      >
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              style={{ color: "white" }}
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/quickstart")}
            >
              Quickstart Guide
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
