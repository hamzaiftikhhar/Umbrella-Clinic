import { redirect } from "next/navigation";

export default function LegacyDiagnosticTestingRedirect() {
  redirect("/diagnostics");
}
