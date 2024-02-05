import { loginUser } from "@/services";
import { redirect } from "next/navigation";

export default async function Page() {
	return (
		<>
			<h1>Sign in</h1>
			<form action={login}>
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
	error: string;
}
async function login(formData: FormData): Promise<ActionResult> {
    "use server";
    const data = Object.fromEntries(formData.entries()) as { email: string; password: string };
    const result = await loginUser(data.email, data.password);
    if (!result) {
    	return { error: "Invalid username or password" };
    }
    redirect("/dashboard");
}
