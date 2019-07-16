export const getMode = () => {
  const u = navigator.userAgent;
  const isMD = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isMD) {
    return "md";
  } else if (isIOS) {
    return "ios";
  } else {
    return "ios";
  }
};
