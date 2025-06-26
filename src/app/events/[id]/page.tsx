import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import events from '@/data/events.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

import styles from './page.module.css';

import Breadcrumb from '@/components/Breadcrumb';

type EventType = {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  image: string;
  subtitle?: string;
  location: string;
  address: string;
  collaborators: string;
  buyin: string;
  winnings: string;
  other: string
};

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | Upcoming Event`,
    description: event.subtitle ?? 'Join us for a meaningful tournament in support of the homeless community.',
    openGraph: {
      title: `${event.title} | Upcoming Event`,
      description: event.subtitle ?? 'Join us for a meaningful tournament in support of the homeless community.',
      images: [`/events/${event.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${event.title} | Upcoming Event`,
      description: event.subtitle ?? 'Join us for a meaningful tournament in support of the homeless community.',
      images: [`/events/${event.image}`],
    },
  };
}

export default function EventPage({ params }: Props) {
  const event: EventType | undefined = events.find((e) => e.id === params.id);

  if (!event) return notFound();

  return (
    <>
    <section className="max-w-[85rem] mx-auto mt-12 px-4 sm:px-6 md:px-8">
      <Breadcrumb
        items={[
          { label: 'Events', href: '/events' },
          { label: event.title },
        ]}
      />
      <div className="grid md:flex md:gap-x-12 md:items-center">
      <div className="md:col-span-4">
          <Image
            className="rounded-xl"
            src={`/events/${event.image}`}
            alt={event.title}
            width={500}
            height={200}
            priority
          />
        </div>
        <div className="max-w-[35rem] text-center mt-10 md:mt-0 md:text-left md:col-span-3">
          <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            {event.title}
          </h1>
          <p className="mt-3 text-lg text-gray-800 !font-normal">
            {event.subtitle ?? 'Join us for a meaningful tournament in support of the homeless community.'}
          </p>

          <div className="mt-4 items-center md:flex gap-2 sm:flex-row sm:gap-3">
          <Link className="!text-white inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 !hover:from-violet-600 !hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4" href="https://docs.google.com/forms/d/e/1FAIpQLSfLgZ0nl9k_9Vn4dRRugOlr_xl-_ipdKDomslKiQ-GK_XAN-g/viewform?usp=header">
            Register <FaChevronRight />
            </Link>
          </div>
        </div>

         
      </div>

    </section>

    {/* Bottom section */}
    <section className="items-center space-y-3 mx-auto my-10">
      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Date:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.date}
          </span>
        </dd>
      </dl>
      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Time:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.time}
          </span>
        </dd>
      </dl>
      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Location:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.location}
          </span>
        </dd>
      </dl>

      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Address:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.address}
          </span>
        </dd>
      </dl>

      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Buy-in:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.buyin}
          </span>
        </dd>
      </dl>

      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Winnings:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.winnings}
          </span>
        </dd>
      </dl>
      <dl className="flex flex-col sm:flex-row gap-1">
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500">Collaborators:</span>
        </dt>
        <dd>
          <span className="me-1 inline-flex items-center text-sm text-gray-800">
          {event.collaborators}
          </span>
        </dd>
      </dl>
    </section>
    <section className="prose prose-p:font-normal prose-p:mb-4">
      <div 
        className={`font-normal max-w-[70rem] items-center mx-auto px-4 mb-10 ${styles.articleContent}`}
        dangerouslySetInnerHTML={{ __html: event.other }} 
      />
    </section>
    </>
  );
}
