import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";

const NavConfig = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Schedule",
    link: "schedule",
  },
  {
    name: "Trainings & Services",
    link: "trainings_and_services",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
const ServiceConfig = [
  {
    icon: "child",
    title: "Teens",
    description: `6 Hours teens drivers' training`,
  },
  {
    icon: "user",
    title: "Adults",
    description: `2 Hours minimum for adults per day`,
  },
  {
    icon: "universal-access",
    title: "Seniors",
    description: `1 Hour minimum for seniors' refresher'`,
  },
  {
    icon: "car",
    title: "Car Rental",
    description: `Car rental for the behind-wheel test with DMV`,
  },
];
const Home: NextPage = () => {
  const onScrollToView = useCallback((elemId: string) => {
    const elem = document.getElementById(elemId);
    console.log("🚀 ~ file: index.tsx ~ line 54 ~ onScrollToView ~ elem", elem);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div>
      <Head>
        <title>eStop Driving School</title>
        <meta name="description" content="Teaching driving since 1983" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main className="main">
        <div id="home" className="flex items-center justify-center py-4">
          <Image
            src="/logo.png"
            alt="eStop Driving School Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="flex items-center justify-center py-4">
          <ul>
            {NavConfig.map(({ name, link }) => (
              <li className="inline-block" key={name}>
                <a
                  className="text-xl px-2"
                  href={`#${link}`}
                  onClick={() => onScrollToView(link)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex items-end"
          style={{
            background: "url(./tony.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 400,
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto">
            <div className="text-2xl mb-16 p-4" style={{ maxWidth: 480 }}>
              Give me 6 hours, I'll give you 30,000 days.
              <a
                className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 m-2 text-xl"
                href="https://calendly.com/estop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now
              </a>
            </div>
          </div>
        </div>
        <div id="about" className="container mx-auto py-4">
          <h2 className="text-2xl text-center py-4 font-bold">About</h2>
          <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <Image
                src="/tony-good-morning.jpg"
                alt="EstopDrivingSchool Logo"
                width={300}
                height={300}
              />
            </div>
            <div className="p-4">
              <p className="font-bold leading-relaxed mb-4">
                Since 1983, 40 years training experience Teaching adults,
                teenagers and seniors
              </p>
              <p className="mb-2">
                Welcome to eStop Driving School. I am Tony, the founder of eStop
                Driving School school (also known as Nile Driving School). I
                have been teaching the behind-the-wheel driving since 1983. I’ve
                trained more than 5,000 teens, adults and seniors.I take pride
                and joy in what I am doing.
              </p>

              <p className="mb-2">
                My philosophy is “Speak STOP fluently and flawlessly for life”.
              </p>

              <p className="mb-2">
                Please feel free to contact any time by phone or email.
              </p>

              <p className="mb-2">
                Phone: (415) 897 7002 <br />
                Email:{" "}
                <a href="mailto:tony@estopdrivingschool.com">
                  tony@estopdrivingschool.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          id="schedule"
          className="flex py-20"
          style={{
            background: "url(./driving.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto py-2">
            <h2 className="text-2xl text-center py-2 font-bold text-white">
              Schedule An Appointment Today
            </h2>
            <p className="text-center text-white mx-2">
              Visit{" "}
              <a
                className="font-bold"
                href="https://calendly.com/estop"
                target="_blank"
                rel="noopener noreferrer"
              >
                calendly.com/estop{" "}
              </a>
              to schedule your training sessions.
            </p>
          </div>
        </div>
        <div id="trainings_and_services" className="bg-gray-100">
          <div className="container mx-auto py-4">
            <h2 className="text-2xl text-center py-4 font-bold">
              Trainings and Services
            </h2>
            <p className="text-center mx-2">
              The basic training and services are at 75$/hour flat rate. Should
              you need any additional services, please contact me for details.
            </p>
            <div className="py-4 grid xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ServiceConfig.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="p-4 flex flex-col text-center items-center"
                  style={{ fontSize: 12 }}
                >
                  <FontAwesomeIcon
                    // @ts-ignore
                    icon={icon}
                    className="text-red-500 m-4"
                    style={{ width: 96, height: 96 }}
                  />
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="contact" className="flex py-20 bg-gray-200">
          <div className="container mx-auto py-2">
            <h2 className="text-2xl text-center font-bold py-2">Contact</h2>
            <p className="text-center  mx-2">
              If you have any questions, feel free to call me any time at: (415)
              897 7002.
            </p>
            <div className="p-8 m-auto grid sm:grid-cols-1 md:grid-cols-2">
              <div className="flex justify-end px-8">
                <a href="https://www.yelp.com/biz/nile-driving-school-novato?utm_medium=biz_embedded_content&amp;utm_source=biz_badge">
                  <img
                    alt="Nile Driving School"
                    src="https://dyn.yelpcdn.com/extimg/en_US/fsc/aqPJ63Ipo5dYtkh9JfJYRQ.png"
                    height="55"
                    width="125"
                  />
                </a>
              </div>
              <div>
                <p className="mb-2 font-bold">Tony (Teshome Kebere)</p>
                <p>Address: Suite N, 7075 Redwood Blvd, CA 94945</p>
                <p>Phone: (415) 897 7002</p>
                <p className="mb-4">
                  Email:{" "}
                  <a href="mailto:tony@estopdrivingschool.com">
                    tony@estopdrivingschool.com
                  </a>
                </p>
                <p>
                  Licensed Instructor No. 3381 Please call in advance to
                  schedule a personal appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed bottom-2 right-2"
          onClick={() => onScrollToView("home")}
        >
          <FontAwesomeIcon
            icon="arrow-up"
            className="text-red-500"
            style={{ width: 36, height: 36 }}
          />
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-4 text-sm">
        <div className="container m-auto text-center">
          Copyright @2014{" "}
          <a
            className="text-gray-400"
            href="http://estopdrivingschool.com/"
            title="eStopDrivingSchool"
          >
            eStopDrivingSchool
          </a>{" "}
          <a
            className="text-gray-400"
            href="mailto:tony@estopdrivingschool.com"
          >
            Email
          </a>{" "}
          <a
            href="https://www.facebook.com/estopdrivingschool/"
            className="text-gray-400"
          >
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
