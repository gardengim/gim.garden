export default (data: Lume.Data) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{data.title}</title>
      <script src="main.js" inline></script>
    </head>
    <body>
      <main>
        <header>
          <div style="font-size: 2.25em; font-weight: bold;">{data.title}</div>
          <hr/>
        </header>
        {data.children}
      </main>
    </body>
  </html>
);