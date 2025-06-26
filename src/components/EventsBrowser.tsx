import Link from 'next/link';
import Image from 'next/image';
import events from '@/data/events.json';

type EventType = {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
};

export default function EventsBrowser() {
  const isSmallSet = events.length < 4;

  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="text-sm dark:text-gray-600">
            Join our charity tournaments to support the San Diego community.
          </p>
        </div>

        <div
          className={
            isSmallSet
              ? 'flex flex-wrap justify-center gap-8'
              : 'grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'
          }
        >
          {events.map((event: EventType) => (
            <article key={event.id} className="flex flex-col dark:bg-gray-50 rounded-xl max-w-xs">
              <Link href={`/events/${event.id}`} aria-label={event.title}>
                <Image
                  src={`/events/${event.image}`}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-xl"
                />
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs tracking-wider uppercase">{event.category}</p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug !text-gray-800">{event.title}</h3>
                  <div className="flex flex-wrap justify-between pt-2 space-x-2 text-xs dark:text-gray-600">
                    <span>{event.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
