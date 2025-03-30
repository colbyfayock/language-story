import { cn } from "@/lib/utils";

interface ChecklistAudioProps {
  className?: string;
}

const ChecklistAudio = ({ className }: ChecklistAudioProps) => {
  return (
    <svg
      className={cn("inline-block", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="157"
      height="124"
      fill="none"
      viewBox="0 0 157 124"
    >
      <title>Checklist with Audio Icon</title>
      <rect width="112" height="124" className="fill-ls-sand-100" rx="12" />
      <rect
        width="50"
        height="6"
        x="44"
        y="22"
        className="fill-ls-sand-400"
        rx="3"
      />
      <rect
        width="50"
        height="6"
        x="44"
        y="47"
        className="fill-ls-sand-400"
        rx="3"
      />
      <rect
        width="26"
        height="6"
        x="44"
        y="72"
        className="fill-ls-sand-400"
        rx="3"
      />
      <rect
        width="16"
        height="6"
        x="44"
        y="97"
        className="fill-ls-sand-400"
        rx="3"
      />
      <path
        className="fill-ls-blue-400"
        fillRule="evenodd"
        d="M36.268 15.732a2.5 2.5 0 0 1 0 3.536l-11 11a2.5 2.5 0 0 1-3.536 0l-5-5a2.5 2.5 0 0 1 3.536-3.536l3.232 3.233 9.232-9.233a2.5 2.5 0 0 1 3.536 0M36.268 42.732a2.5 2.5 0 0 1 0 3.536l-11 11a2.5 2.5 0 0 1-3.536 0l-5-5a2.5 2.5 0 0 1 3.536-3.536l3.232 3.233 9.232-9.233a2.5 2.5 0 0 1 3.536 0"
        clipRule="evenodd"
      />
      <path
        className="fill-ls-sand-400"
        fillRule="evenodd"
        d="M36.268 67.732a2.5 2.5 0 0 1 0 3.536l-11 11a2.5 2.5 0 0 1-3.536 0l-5-5a2.5 2.5 0 0 1 3.536-3.536l3.232 3.233 9.232-9.233a2.5 2.5 0 0 1 3.536 0M36.268 92.732a2.5 2.5 0 0 1 0 3.536l-11 11a2.5 2.5 0 0 1-3.536 0l-5-5a2.5 2.5 0 0 1 3.536-3.536l3.232 3.232 9.232-9.232a2.5 2.5 0 0 1 3.536 0"
        clipRule="evenodd"
      />
      <path
        className="fill-ls-blue-400"
        d="M114.979 58.815a2.82 2.82 0 0 0-4.811-1.991L96.638 70.35a5.6 5.6 0 0 1-3.987 1.651h-9.66a4 4 0 0 0-4 3.999v23.99a4 4 0 0 0 4 3.999h9.66a5.6 5.6 0 0 1 3.986 1.651l13.527 13.531a2.82 2.82 0 0 0 3.075.613 2.815 2.815 0 0 0 1.74-2.608z"
      />
      <path
        className="fill-ls-blue-400"
        fillRule="evenodd"
        d="M125.661 72.802a4 4 0 0 1 5.598.8 23.995 23.995 0 0 1 0 28.788 3.998 3.998 0 1 1-6.398-4.798 15.99 15.99 0 0 0 0-19.193 4 4 0 0 1 .8-5.597"
        clipRule="evenodd"
      />
      <path
        className="fill-ls-blue-400"
        fillRule="evenodd"
        d="M138.684 59.722a4 4 0 0 1 5.654 0 39.98 39.98 0 0 1 11.712 28.274 39.98 39.98 0 0 1-11.712 28.274 3.999 3.999 0 0 1-5.654-5.655 32 32 0 0 0 9.369-22.62 31.98 31.98 0 0 0-9.369-22.618 4 4 0 0 1 0-5.655"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ChecklistAudio;
