import { getNotifications } from "@/sanity/utilsSanity";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export const Notifications = async () => {
  const notifications = await getNotifications();

  return (
    <section className="mb-4 mt-12 w-full px-4 md:px-28">
      <h2 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 my-8 decoration-4 decoration-accent-500 underline underline-offset-8">
        Announcements
      </h2>
      <div className="w-full">
        <Marquee speed={70}>
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link target="_blank" href={notification.link}>
                <Image
                  src={notification.ImageUrl}
                  width={500}
                  height={50}
                  alt="notification-icon"
                  className="mr-4 rounded-md sm:w-[35rem] w-[25rem] "
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Notifications;
