import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
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
      <Navbar />
      <Image
        src="/2+sick+pay+banner.png"
        alt="Banner Image"
        layout="intrinsic"
        width={1200}
        height={800}
      />
      <div className="mainSection">
        <h2>Who is the Sick Pay Solidarity Collective?</h2>
        <p>
          The Sick Pay Solidarity Collective are workers who want universal paid
          sick days. Until we get them, we created this fund to support our
          community.
        </p>
        <p>
          Though many of us are part of many different organizations with
          diverse social justice goals, the aim of this particular constellation
          of people is to create immediate relief for any workers facing
          financial instability and who lack paid sick days, all while the
          battle for permanent and universal sick leave is being waged.
        </p>
        <h3>
          *THIS PAGE IS UNDER DEVELOPMENT - APPLICATION FORM, TRANSLATIONS AND
          MORE RESOURCES ARE COMING SOON*
        </h3>
      </div>

      <div className="donationSection">
        <Link href="/donation">
          <a className="donateButton">Contribute Now</a>
        </Link>
        <h2>
          SUPPORT YOUR COMMUNITY BY DONATING TO THE SICK PAY SOLIDARITY FUND
        </h2>
        <p>
          As COVID-19 numbers surge, the Ontario Government has routinely
          rejected demands to implement a paid sick leave program, forcing many
          workers to choose between wages or their health.{" "}
        </p>
        <p>
          The Sick Pay Solidarity Fund responds to the urgent and immediate need
          for paid sick relief now for all workers in Ontario.{" "}
        </p>
        <p>
          We invite anyone who is feeling sick or needs to isolate and is
          concerned about the financial implications of staying home, to apply
          to this fund. We aim to provide this relief fund until there are
          universal, accessible and permanent paid sick days in Ontario.
        </p>
      </div>

      <div className="faqSection">
        <h2>FAQs</h2>
        <div className="faqGrid">
          <div className="faqGridSection">
            <h3>Who can access this fund?</h3>
            <p>
              This fund is for anyone who needs to call in sick to work, but is
              worried about the financial risk. We will not require
              documentation of your workplace, but trust that those accessing
              the fund are in need of immediate support.
            </p>
          </div>
          <div className="faqGridSection">
            <h3>When will I receive funds?</h3>
            <p>
              We are aiming to be fast at processing the requests. The delay
              depends on how much money we receive, when we can process your
              request, and how urgently you say you need your money. We are
              hoping for between 2-5 days for each request, and we will try our
              best to be as fast as possible.
            </p>
          </div>
          <div className="faqGridSection">
            <h3>How many times can I apply?</h3>
            <p>
              You can apply as many times as you would like, but for right now,
              we can give out a maximum of $500 per person. This may change
              depending on how much money we have access to!
            </p>
          </div>
          <div className="faqGridSection">
            <h3>How can I support the cause?</h3>
            <p>
              Contributing money to our fund helps provide immediate relief to
              workers, allowing them to stay home, keep everyone safe and put
              food on the table. You can{" "}
              <Link href="/donation">
                <a className="anchorlink">contribute here at the GoFundMe. </a>
              </Link>
            </p>
          </div>
          <div className={styles.faqGridSection}>
            <h3>How much can I apply for?</h3>
            <p>
              You let us know how much money you will be losing by taking the
              time off work, and we will do our best to give you as much as
              possible, up to $500 total. This maximum may change depending on
              wider circumstances.
            </p>
          </div>
          <div className="faqGridSection">
            <h3>How can I support the cause?</h3>
            <p>
              This fund cannot remove the need for mandated paid sick days for
              all workers being becoming part of policy. The fight for paid sick
              days in Ontario has been an ongoing effort by activists for
              decades. You can support their work right now by taking action,
              signing petitions and contacting your MPPs, and checking out more
              information about the fight for paid sick days in Ontario by
              groups like the{" "}
              <a className="anchorlink" href="https://workersactioncentre.org/">
                Workers’ Action Centre
              </a>{" "}
              and{" "}
              <a className="anchorlink" href="https://www.15andfairness.org/">
                Fight for $15 and Fairness.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="actionSection">
        <h2>Take Action</h2>
        <p>
          Ready to take the next step? You can become a contributor to the
          cause, or participate yourself.
        </p>
        <Link href="/donation">
          <a className={styles.donateButton}>Support Workers Now</a>
        </Link>
      </div>

      <div className="alertSection">
        <h3>
          *THIS PAGE IS UNDER DEVELOPMENT - APPLICATION FORM, TRANSLATIONS AND
          MORE RESOURCES ARE COMING SOON*
        </h3>
      </div>
      <Footer />
    </div>
  );
}
