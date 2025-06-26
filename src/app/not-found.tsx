import Link from "next/link";

function NotFound() {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-center min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="block text-9xl font-bold">404</h1>
      <p className="mt-3">Oops, something went wrong.</p>
      <p>Sorry, we couldn’t find your page.</p>
      <Link href="/" className='w-40 mt-4'>Return Home</Link> 
    </div>
    </>
  );
}

export default NotFound;