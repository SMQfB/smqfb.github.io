import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center font-sans dark:bg-black">
      <Navbar />
      <main className="min-h-screen w-screen max-w-6xl items-center grow py-32 px-16 bg-white dark:bg-black flex flex-col gap-6 text-center sm:items-start sm:text-left">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Scratch Movie: Quest for Bugs
          </h1>
          <p className="mt-2">
            The Scratch Movie: Quest for Bugs is a movie directed by
            scratchcode1_2_3 and mali3000 that we created since we wanted to
            have an official Scratch Movie, but, unfortunately, that is not one
            of the priorities of the Scratch Team. So we created this!
          </p>
          <a
            href="https://questforbugs.miraheze.org/wiki/Main_Page"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-yellow-100 hover:bg-yellow-300 px-4 py-2 text-sm font-medium text-white"
          >
            Check out the Wiki
          </a>
          <a
            className="mt-4 inline-block rounded-md bg-yellow-100 hover:bg-yellow-300 px-4 py-2 text-sm font-medium text-white"
            href="https://scratch.mit.edu/discuss/topic/831216/"
          >
            View The Discussion Topic
          </a>
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mt-8">
            Our Backstory
          </h1>
          <p className="mt-2">
            It all started when a user named{" "}
            <a
              href="https://scratch.mit.edu/users/A-MARIO-PLAYER"
              className="hover:underline"
            >
              A-MARIO-PLAYER
            </a>
            , now known as{" "}
            <a
              href="https://scratch.mit.edu/users/AmpElectrecuted"
              className="hover:underline"
            >
              AmpElectrecuted (who later got banned from Scratch)
            </a>
            , made a suggestion on Scratch's forums asking the Scratch Team to
            make a movie. Many were in favor of the suggestion, and it gained a
            lot of posts. However, one person brought up that the Scratch Team
            doesn't have the money, stating that if you look at Scratch's 2023
            tax returns it is troubling.
          </p>
          <p className="mt-2">
            Because of this, a user named{" "}
            <a
              href="https://scratch.mit.edu/users/scratchcode1_2_3"
              className="hover:underline"
            >
              scratchcode1_2_3
            </a>{" "}
            decided to start a collaboration to make an unofficial fan effort.
            He stated that he did the same thing with another topic called The
            Intergalactic Adventure, but suddenly it was cancelled because all
            of the voice actors suddenly left and the movie was never animated.
            The topic was created on September 15, 2024 and can be viewed{" "}
            <a
              href="https://scratch.mit.edu/discuss/topic/780011/"
              className="hover:underline"
            >
              here
            </a>
            . A lot of people joined very quickly, and the topic became one of
            the most active topics in the Collaboration forum. All was great
            until December 2, 2024, when a Scratch Team member shut the topic
            down for off-topic clean-up. It was reopened the next day. By
            December 31, 2024, the topic was completely derailed. Scratchcode
            decided to shut the topic down due to "useless speculation about
            sequels, constant king/queen no edit posts which had no purpose
            except to be themselves, and constant off-topic."
          </p>
          <p>
            {" "}
            He made{" "}
            <a
              className="hover:underline"
              href="https://scratch.mit.edu/discuss/topic/797462/"
            >
              a new one
            </a>{" "}
            that day, but the rules were stricter. There was a new a strike
            system - if one got 3 strikes, they would get kicked out of the
            forum. This has only happened to two users,{" "}
            <a
              className="hover:underline"
              href="https://scratch.mit.edu/users/zeldatheaxolotl"
            >
              zeldatheaxolotl
            </a>{" "}
            and{" "}
            <a
              className="hover:underline"
              href="https://scratch.mit.edu/users/ToastRoastBoast"
            >
              ToastRoastBoast
            </a>
            , the former of which was rehired. To be rehired, one would have to
            go into a training studio and prove they could be rehired. By the
            time the second topic reached 500 pages, many had accepted that it
            was too long. On July 18, 2025, scratchcode1_2_3 created a{" "}
            <a
              className="hover:underline"
              href="https://scratch.mit.edu/discuss/topic/831216"
            >
              third topic,
            </a>{" "}
            which is still used today.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
