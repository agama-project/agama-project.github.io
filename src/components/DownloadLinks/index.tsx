import React, { JSX, useEffect, useState } from "react";
import xbytes from "xbytes";

// architecture header
const ArchHeader = ({ arch }): JSX.Element => (
  <h3 id={`download-${arch}`}>{arch}</h3>
);

// progress indicator
const Loading = (): JSX.Element => (
  <p>
    <em>Loading data...</em>
  </p>
);

// show a download link for a specified architecture
//  arch - the architecture name
//  files - data downloaded from OBS
const DownloadLink = ({ arch, files }): JSX.Element => {
  const file = files?.find((f) => f.name.includes(arch));
  // base URL where the images are located
  const url =
    "https://download.opensuse.org/repositories/systemsmanagement:/Agama:/Devel/images/iso";

  return (
    <p>
      {file ? (
        // found matching image, display the versioned link and the image size
        <>
          <a href={`${url}/${file.name}`}>{file.name}</a>
          {" ("}
          {/* one decimal place in the formatted size */}
          {xbytes(file.size, { fixed: 1 })}
          {")"}
        </>
      ) : (
        // download failed or missing data, display a generic static link without version
        <a href={`${url}/agama-installer.${arch}-openSUSE.iso`}>
          {`agama-installer.${arch}-openSUSE.iso`}
        </a>
      )}
      <br />
      {file ? (
        <a href={`${url}/${file.name}.sha256`}>{`${file.name}.sha256`}</a>
      ) : (
        <a href={`${url}/agama-installer.${arch}-openSUSE.iso.sha256`}>
          {`agama-installer.${arch}-openSUSE.iso.sha256`}
        </a>
      )}
    </p>
  );
};

// show download links for all supported architectures
export default function DownloadLinks(): JSX.Element {
  // this variable contains the downloaded data from OBS
  //   undefined => data not loaded yet (display loading status)
  //   empty array => download failed or timed out or invalid data was returned
  //     (display generic unversioned links)
  const [files, setFiles] = useState();

  // unfortunately the direct download from the download.opensuse.org server does not work because
  // of the CORS policy, as a workaround use a CORS proxy deployed in the Google Firebase cloud for
  // downloading the data
  // see https://github.com/lslezak/cors-proxy/blob/main/functions/index.js
  // it just forwards the data from
  // https://download.opensuse.org/repositories/systemsmanagement:/Agama:/Devel/images/iso/?jsontable
  const corsProxy = "https://corsproxy-kcuoblmnuq-uc.a.run.app/";

  const loadData = () => {
    // if the data is not loaded in 5 seconds then display the generic links
    const timer = setTimeout(() => !files && setFiles([]), 5000);
    // download data from the OBS server
    fetch(corsProxy)
      .then((response) => response.json())
      .then((json) => {
        // keep only the openSUSE ISO image data, we do not care about the rest
        const data = json.data.filter((f) =>
          f.name.match(/^agama-installer\..*-openSUSE-Build.*\.iso$/)
        );
        console.log("Downloaded OBS data:", data);
        setFiles(data);
      })
      .catch((err) => {
        console.error("OBS download failed:", err);
        setFiles([]);
      })
      .finally(() => clearTimeout(timer));
  };

  useEffect(() => {
    loadData();
    // refresh every 15 minutes to have up to date links when the page is displayed for a long time
    const timer = setInterval(() => loadData(), 15 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ArchHeader arch="x86_64" />
      {files ? <DownloadLink arch="x86_64" files={files} /> : <Loading />}
      <ArchHeader arch="aarch64" />
      {files ? <DownloadLink arch="aarch64" files={files} /> : <Loading />}
      <ArchHeader arch="ppc64le" />
      {files ? <DownloadLink arch="ppc64le" files={files} /> : <Loading />}
      <ArchHeader arch="s390x" />
      {files ? <DownloadLink arch="s390x" files={files} /> : <Loading />}
    </>
  );
}
