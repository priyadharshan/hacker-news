import url from 'url';

export const getHostname = siteUrl => {
  let hostname = '';

  if (siteUrl) {
    if (!siteUrl.includes('//')) {
      siteUrl = `http://${siteUrl}`;
    }

    hostname = url.parse(siteUrl).hostname;
  }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1];
  }

  return hostname;
};
