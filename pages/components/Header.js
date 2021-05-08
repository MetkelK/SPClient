import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Sick Pay Solidarity Fund</title>
        <meta
          name="description"
          content="As COVID-19 numbers surge, the Ontario Government has routinely rejected demands to implement a paid sick leave program, forcing many workers to choose between wages or their health. The Sick Pay Solidarity Fund responds to the urgent and immediate need for paid sick relief now for all workers in Ontario. We invite anyone who is feeling sick or needs to isolate and is concerned about the financial implications of staying home, to apply to this fund. We aim to provide this relief fund until there are universal, accessible and permanent paid sick days in Ontario."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          rel="preconnect"
          src="https://kit.fontawesome.com/3ce30db80b.js"
          crossorigin="anonymous"
        ></script>
      </Head>
    </div>
  );
}
