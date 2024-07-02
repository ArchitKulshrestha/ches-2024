import { getNotifications } from "@/sanity/utilsSanity";
export const Notifications = async () => {
  const notifications = await getNotifications();

  return (
    <section className="mb-16 w-full px-4 md:px-28">
      <h2 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 mt-4 decoration-4 decoration-accent-500 underline underline-offset-8">
        Notifications
      </h2>
      <div className="mt-6">
        <ul className="list-disc list-inside space-y-4">
          {notifications.map((notification, index) => (
            <li
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
              key={index}
              className="text-base sm:text-lg font-normal text-accent-500">
              {notification.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
