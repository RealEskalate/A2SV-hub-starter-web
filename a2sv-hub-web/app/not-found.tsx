import Link from "next/link";

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go Home
        </Link>
      </div>
    );
  }

  export default NotFound;
  