import { cn } from "@/lib/utils";

interface MessageBubblesProps {
  className?: string;
}

const MessageBubbles = ({ className }: MessageBubblesProps) => {
  return (
    <svg
      className={cn("inline-block", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="141"
      height="140"
      fill="none"
      viewBox="0 0 141 140"
    >
      <title>Message Bubbles with Hello in Different Languages</title>
      <path
        className="fill-ls-orange-300"
        d="M27.56 111.667a9.445 9.445 0 0 0 9.445 9.444h85.106L141 140V64.444A9.445 9.445 0 0 0 131.556 55H37.005a9.444 9.444 0 0 0-9.445 9.444z"
      />
      <path
        className="fill-ls-blue-400"
        d="M105 56.667a9.445 9.445 0 0 1-9.444 9.444H18.889L0 85V9.444A9.444 9.444 0 0 1 9.444 0h86.112A9.445 9.445 0 0 1 105 9.444z"
      />
      <path
        className="fill-white"
        d="M15.988 44V21.133h4.834v9.435h9.815v-9.435h4.823V44h-4.823v-9.446h-9.815V44zm31.185.335q-2.646 0-4.556-1.072a7.34 7.34 0 0 1-2.925-3.06q-1.027-1.986-1.027-4.7 0-2.646 1.027-4.645 1.028-1.998 2.892-3.115 1.876-1.116 4.399-1.116 1.697 0 3.16.547a7 7 0 0 1 2.568 1.619q1.105 1.083 1.72 2.724.613 1.63.613 3.819v1.306H40.563v-2.948h10.004q0-1.027-.447-1.82a3.2 3.2 0 0 0-1.239-1.24q-.782-.456-1.82-.457-1.083 0-1.92.503-.827.49-1.296 1.328a3.75 3.75 0 0 0-.48 1.843v2.802q0 1.273.47 2.2.48.926 1.35 1.429.871.502 2.066.502.792 0 1.451-.223.66-.223 1.128-.67.468-.446.715-1.094l4.399.29a6 6 0 0 1-1.373 2.77q-1.028 1.17-2.658 1.83-1.62.648-3.74.648m15.732-23.202V44h-4.757V21.133zm8.567 0V44h-4.757V21.133zM83.03 44.335q-2.602 0-4.5-1.105a7.57 7.57 0 0 1-2.914-3.104q-1.027-1.999-1.027-4.634 0-2.658 1.027-4.645 1.027-1.998 2.914-3.104 1.897-1.116 4.5-1.116 2.601 0 4.488 1.116 1.898 1.106 2.926 3.104 1.026 1.987 1.027 4.645 0 2.635-1.027 4.634a7.54 7.54 0 0 1-2.926 3.104q-1.887 1.105-4.488 1.105m.022-3.685q1.185 0 1.976-.67.793-.681 1.195-1.853.413-1.173.413-2.669t-.413-2.668q-.402-1.173-1.195-1.854-.792-.68-1.976-.68-1.194 0-2.01.68-.803.681-1.217 1.854-.402 1.171-.402 2.668 0 1.496.402 2.669.413 1.172 1.217 1.853.816.67 2.01.67M38.573 97V78.897h7.249q1.997 0 3.332.592t2.007 1.644q.67 1.043.671 2.405 0 1.06-.424 1.865-.424.795-1.167 1.308a4.8 4.8 0 0 1-1.68.716v.177q1.035.045 1.937.583a4.13 4.13 0 0 1 1.476 1.512q.566.963.566 2.298-.001 1.44-.716 2.572-.708 1.123-2.095 1.777T46.308 97zm3.828-3.13h3.12q1.6 0 2.334-.609.733-.619.733-1.644 0-.752-.362-1.326a2.46 2.46 0 0 0-1.034-.902q-.663-.327-1.583-.327h-3.208zm0-7.398h2.837q.787 0 1.397-.274.618-.282.972-.795.363-.513.363-1.229 0-.98-.699-1.582-.69-.6-1.962-.601h-2.908zm18.693 10.793q-2.06 0-3.562-.875a6 6 0 0 1-2.307-2.457q-.814-1.583-.814-3.669 0-2.103.814-3.677a5.9 5.9 0 0 1 2.307-2.457q1.502-.885 3.562-.884 2.06 0 3.553.884a5.9 5.9 0 0 1 2.316 2.457q.813 1.574.813 3.677 0 2.087-.813 3.669a5.97 5.97 0 0 1-2.316 2.457q-1.494.875-3.553.875m.018-2.917q.937 0 1.564-.53.628-.54.946-1.468.327-.927.327-2.112t-.327-2.113q-.319-.928-.946-1.467-.627-.54-1.564-.54-.946 0-1.592.54-.636.54-.963 1.467-.318.928-.318 2.113t.318 2.112q.328.929.963 1.468.645.53 1.592.53m12.878-5.197V97h-3.765V83.423h3.589v2.395h.159q.45-1.185 1.511-1.874 1.061-.698 2.573-.698 1.413 0 2.466.619 1.051.619 1.635 1.768.584 1.14.584 2.722V97h-3.766v-7.973q.009-1.247-.636-1.945-.645-.707-1.777-.707-.76 0-1.344.327a2.3 2.3 0 0 0-.901.955q-.32.618-.328 1.494m11.72-5.728h3.765v14.249q0 1.573-.619 2.546-.618.972-1.777 1.423-1.149.45-2.749.45a7 7 0 0 1-.37-.008q-.187 0-.39-.009V99.13q.15.01.265.01.107.008.23.008.91 0 1.273-.389.371-.38.371-1.15zm1.873-1.75a2.04 2.04 0 0 1-1.432-.557q-.6-.566-.6-1.353 0-.777.6-1.335.601-.565 1.432-.565a2 2 0 0 1 1.441.566q.6.556.601 1.334 0 .787-.6 1.353a2.03 2.03 0 0 1-1.442.556m11.043 15.592q-2.06 0-3.562-.875a6 6 0 0 1-2.307-2.457q-.814-1.583-.814-3.669 0-2.103.814-3.677a5.9 5.9 0 0 1 2.307-2.457q1.502-.885 3.562-.884 2.06 0 3.553.884a5.9 5.9 0 0 1 2.316 2.457q.813 1.574.813 3.677 0 2.087-.813 3.669a5.97 5.97 0 0 1-2.316 2.457q-1.494.875-3.553.875m.017-2.917q.938 0 1.565-.53.627-.54.946-1.468.327-.927.327-2.112t-.327-2.113q-.319-.928-.946-1.467-.627-.54-1.564-.54-.946 0-1.592.54-.636.54-.963 1.467-.318.928-.318 2.113t.318 2.112q.328.929.963 1.468.646.53 1.591.53m17.821-3.129v-7.796h3.765V97h-3.615v-2.466h-.142a4 4 0 0 1-1.529 1.918q-1.06.725-2.59.725-1.361 0-2.395-.619-1.035-.62-1.618-1.759-.574-1.14-.583-2.731v-8.645h3.765v7.973q.009 1.202.646 1.9.636.699 1.706.699.68 0 1.273-.31.592-.318.954-.937.372-.618.363-1.529M123.241 97V83.423h3.651v2.369h.141q.371-1.265 1.247-1.91a3.27 3.27 0 0 1 2.015-.654q.283 0 .61.036t.575.097v3.341a5 5 0 0 0-.734-.141 7 7 0 0 0-.858-.062 3 3 0 0 0-1.485.362q-.645.354-1.025.99-.37.637-.371 1.468V97z"
      />
    </svg>
  );
};

export default MessageBubbles;
