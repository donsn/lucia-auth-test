import { SignUpModel, signupUser } from "@/services";
import { redirect } from "next/navigation";

export default async function Page() {
	return (
		<>
			<h1>Create an account</h1>
			<form action={signup}>
                <label htmlFor="firstName">First Name</label>
                <input name='firstName' id="firstName"/>
                <label htmlFor="lastName">Last Name</label>
                <input name='lastName' id="lastName"/>
				<label htmlFor="email">Email</label>
				<input name="email" id="email" />
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<br />
				<button>Continue</button>
			</form>
		</>
	);
}

interface ActionResult {
	error?: string  | null;
    success: boolean;
}
async function signup(formData: FormData): Promise<ActionResult> {
    "use server";
    const data = Object.fromEntries(formData.entries()) as SignUpModel;
    const result = await signupUser(data);
    if (!result){
        return {error: "An error occured",success: false};

    }
    redirect("/dashboard");
}
