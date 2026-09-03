function FloatingWhatsApp() {
  const phoneNumber = "919876543210";
  const defaultMessage = encodeURIComponent(
    "Hello LAX360 Real Estate, I am interested in your properties and would like more details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-pulse"></div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.777.978-.953 1.18-.176.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.928-2.238-.244-.588-.492-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.079 2.914 1.23 3.115.15.201 2.123 3.242 5.144 4.547.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351zM12.04 2c-5.464 0-9.91 4.446-9.91 9.91 0 1.75.457 3.456 1.325 4.965L2 22l5.253-1.378a9.88 9.88 0 0 0 4.787 1.228h.004c5.463 0 9.91-4.446 9.91-9.91 0-2.646-1.03-5.134-2.902-7.006A9.855 9.855 0 0 0 12.04 2zm0 18.156h-.003a8.214 8.214 0 0 1-4.188-1.144l-.3-.178-3.114.817.831-3.036-.195-.311a8.204 8.204 0 0 1-1.258-4.394c0-4.542 3.696-8.238 8.24-8.238 2.2 0 4.269.858 5.824 2.414a8.198 8.198 0 0 1 2.41 5.824c0 4.543-3.696 8.24-8.244 8.24z" />
      </svg>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}

export default FloatingWhatsApp;
