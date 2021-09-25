import "tailwindcss/tailwind.css";
import "../components/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
