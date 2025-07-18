import Link from '@workspace/ui/components/link';

export function PoweredByNeon() {
  return (
    <Link
      href="https://neon.tech"
      target="_blank"
      event="powered_by_neon_clicked"
      rel="noopener"
      className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
    >
      <span className="text-gray-400">Powered by</span>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" fill="none" className="h-4">
        <path
          fill="#12FFF7"
          fillRule="evenodd"
          d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
          clipRule="evenodd"
        />
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
          clipRule="evenodd"
        />
        <path
          fill="url(#b)"
          fillRule="evenodd"
          d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
          clipRule="evenodd"
        />
        <path
          fill="#B9FFB3"
          d="M23.287 0c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.319-6.809v8.256c0 2.4-1.954 4.345-4.366 4.345a.484.484 0 0 0 .485-.483V12.584c0-2.758 3.508-3.955 5.21-1.777l5.318 6.808V.965a.97.97 0 0 0-.97-.965"
        />
        <path
          fill="#fff"
          d="M48.112 7.432v8.032l-7.355-8.032H36.93v13.136h3.49v-8.632l8.01 8.632h3.173V7.432zM58.075 17.64v-2.326h7.815v-2.797h-7.815V10.36h9.48V7.432H54.514v13.136H67.75v-2.927zM77.028 21c4.909 0 8.098-2.552 8.098-7s-3.19-7-8.098-7c-4.91 0-8.081 2.552-8.081 7s3.172 7 8.08 7m0-3.115c-2.73 0-4.413-1.408-4.413-3.885s1.701-3.885 4.413-3.885c2.729 0 4.412 1.408 4.412 3.885s-1.683 3.885-4.412 3.885M98.508 7.432v8.032l-7.355-8.032h-3.828v13.136h3.491v-8.632l8.01 8.632H102V7.432z"
        />
        <defs>
          <linearGradient
            id="a"
            x1="28.138"
            x2="3.533"
            y1="28"
            y2="-.12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B9FFB3" />
            <stop offset="1" stopColor="#B9FFB3" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="28.138"
            x2="11.447"
            y1="28"
            y2="21.476"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A1A1A" stopOpacity=".9" />
            <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}
