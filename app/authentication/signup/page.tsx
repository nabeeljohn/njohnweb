import { handleGetCurrentUser } from "@/lib/authentication/actions";
import { pageTitle } from "@/lib/metadata/metadata";
import SignUpClient from "./signupclient";
import AlreadySignedIn from "../alreadysignedin";

export const metadata = {
    title: pageTitle("Sign Up"),
    description: "Create a new NJohn Web account to access personalized productivity tools and features. Sign up with your email, set a password, and start your journey towards enhanced productivity.",
};

export default async function SignUp() {
    const contact = await handleGetCurrentUser();

    // If user is already signed in, show a friendly message
    if (contact) {
        return (
            <AlreadySignedIn contact={contact} />
        );
    }

    return (
        <SignUpClient />
    )
}