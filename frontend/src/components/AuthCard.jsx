export default function AuthCard({ title, children, footerText, onFooterClick }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {title}
        </h2>

        <div className="space-y-4">
          {children}
        </div>

        {footerText && (
          <p
            className="text-sm text-blue-600 text-center mt-4 cursor-pointer hover:underline"
            onClick={onFooterClick}
          >
            {footerText}
          </p>
        )}
      </div>
    </div>
  );
}
