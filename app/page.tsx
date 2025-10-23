
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to the Tech Day Event</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Join us for a day of insightful talks and hands-on workshops.
        </p>
      </main>
    </div>
  );
}
