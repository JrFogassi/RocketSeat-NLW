import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Send
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
    </main>
  );
}
