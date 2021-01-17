/**
 * Simple images preload
 * @param {Array} urls - array of urls
 */
export const preloadImages = (urls) => {
  urls.forEach((url) => {
    const image = new Image();
    image.src = url;
  });
};

/**
   * Copy certain string to clipboard
   * @param {String} string - string to copy
   * @param {Function} callback - fired whether command was successful or not
   */
export const copyToClipboard = (string, callback) => {
  const input = document.createElement('textarea');
  let isSuccess = false;

  Object.assign(input.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    opacity: '0',
  });

  input.value = string;
  document.body.appendChild(input);
  input.select();

  try {
    document.execCommand('copy');
    isSuccess = true;
  } catch (e) { console.log(e); }

  document.body.removeChild(input);

  callback(isSuccess);
};
