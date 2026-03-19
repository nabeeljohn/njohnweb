import { pageTitle } from "@/lib/metadata/metadata";
import JWTTools from "./jwttools";

export const metadata = {
    title: pageTitle("JWT Tools"),
    description: "Decode, inspect, and analyze JSON Web Tokens (JWTs) safely. View token headers, payloads, and signatures to help debug authentication and authorization flows."
};

export default function JWT() {
  return (
    <JWTTools />
  );
}