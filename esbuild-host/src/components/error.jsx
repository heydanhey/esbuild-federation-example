import React from "react";

export default function Error() {

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Error</title>
      </head>
      <body>
        <React.Suspense fallback="">
          <div>Something went wrong</div>
        </React.Suspense>
      </body>
    </html>
  );
}
