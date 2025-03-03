import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";
import BrowserWindow from "@site/src/components/BrowserWindow";
import clsx from "clsx";
import profile from "!!raw-loader!@site/static/profiles/tw.json";

// image carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  asset?: React.ReactNode;
};

const TerminalWindow = ({ children, ...props }): JSX.Element => (
  <BrowserWindow aria-hidden paddingLess hideAddressBar hideMenu {...props}>
    {children}
  </BrowserWindow>
);

const FeatureList: FeatureItem[] = [
  {
    title: "Modern web-based user interface",
    description: (
      <>
        Connect to the installer either locally or from a remote device using a
        regular web browser.
      </>
    ),
    asset: (
      <BrowserWindow aria-hidden url="https://agama.local" paddingLess>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img src={require("@site/static/img/user/overview.png").default} />
          </div>
          <div>
            <img src={require("@site/static/img/user/users.png").default} />
          </div>
          <div>
            <img src={require("@site/static/img/user/storage-overview.png").default} />
          </div>
          <div>
            <img src={require("@site/static/img/user/network.png").default} />
          </div>
          <div>
            <img src={require("@site/static/img/user/software.png").default} />
          </div>
          <div>
            <img src={require("@site/static/img/user/install-button.png").default} />
          </div>
        </Carousel>
      </BrowserWindow>
    ),
  },
  {
    title: "Powerful command-line interface",
    description: (
      <>
        Drive and monitor the installation process using its 1st class
        command-line interface.
      </>
    ),
    asset: (
      <TerminalWindow>
        <video controls autoPlay>
          <source
            src={require("@site/static/video/agama-cli.webm").default}
            type="video/webm"
          />
          <source
            src={require("@site/static/video/agama-cli.ogv").default}
            type="video/ogg"
          />
          <source
            src={require("@site/static/video/agama-cli.mp4").default}
            type="video/mp4"
          />
        </video>
      </TerminalWindow>
    ),
  },
  {
    title: "Easy automation and integration",
    description: (
      <>
        Automate the installation process using either the command-line
        interface or the HTTP API and integrate it into your workflow.
      </>
    ),
    asset: (
      <CodeBlock
        aria-hidden
        showLineNumbers
        language="json"
        title="profile.json"
        className={clsx(styles.codeBlock, "shadow--tl")}
      >
        {profile}
      </CodeBlock>
    ),
  },
];

function Feature({ title, asset, description }: FeatureItem) {
  return (
    <li>
      {asset}
      <div className={clsx(styles.descriptionBlock)}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="container padding-top--lg">
      <ul className={styles.features} aria-label="Agama key features">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
    </section>
  );
}
