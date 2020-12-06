import { useEffect } from 'react';

const useScript = (url, html) => {
  useEffect(() => {
    const script = document.createElement('script');

    if (url) {
      script.src = url;
    }
    if (html) {
      script.innerHTML = html;
    }
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, html]);
};

export default useScript;
