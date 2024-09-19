import Link from 'next/link';
import Image from 'next/image';
import { UrlObject } from 'url';

export const SingleUserStory = (props: {
  metaTitle: string;        // TODO unused
  metaDescription: string;  // TODO unused
  pageTitle: string;
  downloadFileImgSrc: string;
  downloadFileURL: string | UrlObject;
  companyName: string;
  imgSrc: string;
  contentHTML: any
}) => {
  return (
    <div>
      <section className="breadcrumbs pt-5">
        <div className="container conancontainer">
          <Link href="/user-stories">
            <div className="dark-blue"> &lt; Back to all resources </div>
          </Link>
        </div>
      </section>

      <section className="user-story-top py-4">
        <div className="container conancontainer">
          <div className="row">
            <div className="col-lg-9">
              <h1>
                <span>{props.pageTitle}</span>
              </h1>
            </div>
            <div className="col-lg-3">
              <div className="position-relative">
                <div className="position-absolute d-none d-lg-block">
                  <div className="download text-center">
                    <div className="image pb-3">
                      <Image
                        className="img-fluid"
                        alt="Download File"
                        height="405"
                        src={props.downloadFileImgSrc}
                        width="317"
                      ></Image>
                    </div>
                    <Link href={props.downloadFileURL} rel="noopener noreferrer" target="_blank">
                      <div className="btn conan-blue-gradient-bg"> Download </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container conancontainer pt-5">
          <div className="col-lg-8">
            <div className="d-flex justify-content-center align-items-center top-together-images">
              <Image alt="Conan" height="115" src="/favicon.png"></Image>
              <b><h2>&nbsp;&nbsp;+&nbsp;&nbsp;</h2></b>
              <Image alt={props.companyName} height="115" src={props.imgSrc}></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="user-story-content">
        <div className="container conancontainer py-5">

          <div className="row justify-content-between">
            <div className="col-lg-8">
              <div className="content">
                {props.contentHTML}
              </div>
            </div>
            <div className="col-lg-4 d-lg-none mt-4">
              <div className="download text-center border-top pt-4">
                <div className="image pb-3">
                  <Image src={props.downloadFileImgSrc} alt="Download File" className="img-fluid"></Image>
                </div>
                <Link href={props.downloadFileURL} rel="noopener noreferrer" target="_blank">
                  <div className="btn conan-blue-gradient-bg">
                    Download
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
