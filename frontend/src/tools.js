const isValidUrl = (url) => {
  const urlRegEx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  return urlRegEx.test(url);
}

export default isValidUrl;