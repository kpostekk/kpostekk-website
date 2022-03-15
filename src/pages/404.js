import * as React from "react";
import { Link } from "gatsby";
import Root from "../components/sassy";

/*
// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
*/

export default function NotFoundPage() {
  const body = (
    <div style={{ textAlign: "center", fontStyle: "italic" }}>
      <h1 style={{ fontWeight: 100, letterSpacing: "2px" }}>Not found</h1>
      <p>404</p>
      <p style={{ margin: 0 }}>
        <Link to={"/"}>go back home</Link>
      </p>
    </div>
  );

  return (
    <Root>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "88vh",
        }}
      >
        {body}
        <hr style={{ width: "50vw" }} />
        <div style={{ transform: "scaleY(-1)" }}>{body}</div>
      </div>
    </Root>
  );
}
