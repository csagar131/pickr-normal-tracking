import { Outlet, LiveReload, Links, Meta } from "remix";
import {
  // Links,
  // LiveReload,
  // Meta,
  // Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import { useContext } from "react";
import globalStylesUrl from "~/styles/global.css";
import antdStyles from "antd/dist/antd.css";
import PickrrHeader from "~/components/pickrr-header";
import StylesContext from "./styles-context";
import { Result } from "antd";

export const links = () => [
  { rel: "stylesheet", href: antdStyles },
  { rel: "stylesheet", href: globalStylesUrl },
];

export const meta = () => {
  const description = "Pickrr Tracking page";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {title ? <title>{title}</title> : null}
        <Meta />
        {typeof document === "undefined" ? "__STYLES__" : null}
        {styles}
        <Links />
      </head>
      <body>
        <div className="container"> {children}</div>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  // const { user } = useLoaderData();

  return (
    <div className="MainContainer">
      <div className="container">
        <PickrrHeader />
        {children}
      </div>
      <img
        style={{ width: "100%" }}
        src="https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg"
      />
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <div
              style={{
                fontSize: "16px",
              }}
            >
              We apologize for the inconvenicence. Please reload the page and
              try again.
              <div>
                If you continue to encounter this error contact our{" "}
                <a href="mailto:support@pickrr.com" target="blank">
                  pickrr support.
                </a>
              </div>
            </div>
          }
        />
      </Layout>
    </Document>
  );
}
