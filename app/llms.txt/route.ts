import { generateLlmsTxt } from "@/lib/llms-txt";

export function GET() {
  return new Response(generateLlmsTxt(false), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
