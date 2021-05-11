import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full bg-black">
        <img
          className="object-cover mx-auto"
          src="/2+sick+pay+banner.png"
          alt="Banner Image"
        />
      </div>
      <div className="xl:w-3/4 mx-auto">
        <div className="px-12 pt-12 space-y-8">
          <h2 className="text-center text-4xl ">
            Who is the Sick Pay Solidarity Collective?
          </h2>
          <p className="">
            The Sick Pay Solidarity Collective are workers who want universal
            paid sick days. Until we get them, we created this fund to support
            our community.
          </p>
          <p className="">
            Though many of us are part of many different organizations with
            diverse social justice goals, the aim of this particular
            constellation of people is to create immediate relief for any
            workers facing financial instability and who lack paid sick days,
            all while the battle for permanent and universal sick leave is being
            waged.
          </p>
          <h3 className="text-3xl text-center ">
            *THIS PAGE IS UNDER DEVELOPMENT - APPLICATION FORM, TRANSLATIONS AND
            MORE RESOURCES ARE COMING SOON*
          </h3>
        </div>

        <div className="px-12 pt-12 space-y-8 text-center">
          <Link href="/donation">
            <a className="mb-4 rounded-full inline-block text-white bg-indigo-500 py-4 px-6 transition-opacity duration-150 ease-in-out transform hover:opacity-80">
              Contribute Now
            </a>
          </Link>
          <h2 className="text-center text-4xl">
            SUPPORT YOUR COMMUNITY BY DONATING TO THE SICK PAY SOLIDARITY FUND
          </h2>
          <p className="text-left">
            As COVID-19 numbers surge, the Ontario Government has routinely
            rejected demands to implement a paid sick leave program, forcing
            many workers to choose between wages or their health.{" "}
          </p>
          <p className="text-left">
            The Sick Pay Solidarity Fund responds to the urgent and immediate
            need for paid sick relief now for all workers in Ontario.{" "}
          </p>
          <p className="text-left">
            We invite anyone who is feeling sick or needs to isolate and is
            concerned about the financial implications of staying home, to apply
            to this fund. We aim to provide this relief fund until there are
            universal, accessible and permanent paid sick days in Ontario.
          </p>
        </div>

        <div className="px-12 pt-12">
          <h2 className="text-4xl mb-12">FAQs</h2>
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-2 md:grid-cols-1 md:grid-rows-6">
            <div className="p-1">
              <h3 className="text-3xl mb-8">Who can access this fund?</h3>
              <p>
                This fund is for anyone who needs to call in sick to work, but
                is worried about the financial risk. We will not require
                documentation of your workplace, but trust that those accessing
                the fund are in need of immediate support.
              </p>
            </div>
            <div className="p-1">
              <h3 className="text-3xl mb-8">When will I receive funds?</h3>
              <p>
                We are aiming to be fast at processing the requests. The delay
                depends on how much money we receive, when we can process your
                request, and how urgently you say you need your money. We are
                hoping for between 2-5 days for each request, and we will try
                our best to be as fast as possible.
              </p>
            </div>
            <div className="p-1">
              <h3 className="text-3xl mb-8">How many times can I apply?</h3>
              <p>
                You can apply as many times as you would like, but for right
                now, we can give out a maximum of $500 per person. This may
                change depending on how much money we have access to!
              </p>
            </div>
            <div className="p-1">
              <h3 className="text-3xl mb-8">How can I support the cause?</h3>
              <p>
                Contributing money to our fund helps provide immediate relief to
                workers, allowing them to stay home, keep everyone safe and put
                food on the table. You can{" "}
                <Link href="/donation">
                  <a className="anchorlink">
                    contribute here at the GoFundMe.{" "}
                  </a>
                </Link>
              </p>
            </div>
            <div className="p-1">
              <h3 className="text-3xl mb-8">How much can I apply for?</h3>
              <p>
                You let us know how much money you will be losing by taking the
                time off work, and we will do our best to give you as much as
                possible, up to $500 total. This maximum may change depending on
                wider circumstances.
              </p>
            </div>
            <div className="p-1">
              <h3 className="text-3xl mb-8">How can I support the cause?</h3>
              <p>
                This fund cannot remove the need for mandated paid sick days for
                all workers being becoming part of policy. The fight for paid
                sick days in Ontario has been an ongoing effort by activists for
                decades. You can support their work right now by taking action,
                signing petitions and contacting your MPPs, and checking out
                more information about the fight for paid sick days in Ontario
                by groups like the{" "}
                <a
                  className="text-indigo-500 underline"
                  href="https://workersactioncentre.org/"
                >
                  Workers’ Action Centre
                </a>{" "}
                and{" "}
                <a
                  className="text-indigo-500 underline"
                  href="https://www.15andfairness.org/"
                >
                  Fight for $15 and Fairness.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="p-12 m-0 text-center">
          <h2 className="text-4xl mb-4">Take Action</h2>
          <p className="mb-4">
            Ready to take the next step? You can become a contributor to the
            cause, or participate yourself.
          </p>
          <Link href="/donation">
            <a className="mb-4 rounded-full inline-block text-white bg-indigo-500 py-4 px-6 transition-opacity duration-150 ease-in-out transform hover:opacity-80">
              Support Workers Now
            </a>
          </Link>
        </div>

        <div className="text-center p-12 m-0">
          <h3>
            *THIS PAGE IS UNDER DEVELOPMENT - APPLICATION FORM, TRANSLATIONS AND
            MORE RESOURCES ARE COMING SOON*
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
