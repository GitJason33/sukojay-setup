function Html(): string{
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href="./favicon.ico"/>

    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <title>Sukojay-Setup</title>

    <link rel="stylesheet" href="./dist/css/index.css">
    <script src="./dist/js/index.js" defer></script>
  </head>
  <bod>
    <main>
      {{
        all your main content here, excluding other components that are fix in all your pages such as navigation bar, header, footer, etc.
      }}
    </main>
  </body>
</html>
`;
}
export default Html;