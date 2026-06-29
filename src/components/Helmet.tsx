/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface HelmetProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function Helmet({
  title,
  description = "Get a modern, fast, and high-converting custom website coded from scratch by OTF WEBWORKS. Transform your online presence today.",
  image = "/og-image.png",
  url = window.location.href,
  type = "website"
}: HelmetProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
