import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brandLogo.svg";
import { Input } from "../components/ui/input";
import { RedirectByRole } from '../lib/redirects';
import type { Role } from '../lib/roles';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const form = e.currentTarget as HTMLFormElement;
      const { email, password } = form
      console.log(email.value, password.value)
      if (!(email.value && password.value)) {
        return
      }

      const user = {
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
        role: email.value === "esteban_schiller@gmail.com" ? "property_admin" : "content_admin" as Role,
        isLoggedIn: true,
      }
      const userJson = JSON.stringify(user)
      localStorage.setItem("user", userJson)
      const userData = JSON.parse(localStorage.getItem("user") || "")
      RedirectByRole(userData.role, navigate)
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex justify-center items-center flex-col">
      <div className="bg-white shadow px-18.5 py-20.75 rounded-xl ">
        <div className="flex items-center flex-col justify-center gap-4 mb-4">
          <img className='h-24 w-auto' src={logo} alt="Brand Logo" />
          <h2 className="text-[32px] leading-6 tracking-wider font-medium text-[#333333]">
            Login to Account
          </h2>
          <p className="text-base leading-6 tracking-wider mb-6 text-[#B0B0B0]">
            Please enter your email and password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col gap-1.5">
            <label className="text-base text-[#666666]">Email address</label>
            <Input
              name="email"
              type="email"
              defaultValue="esteban_schiller@gmail.com"
              placeholder="esteban_schiller@gmail.com"
              className="mb-4 py-3"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-base text-[#666666]">Password</label>

            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                className="mb-4 py-3 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((show) => !show)}
                className="absolute right-3 top-1/3 -translate-y-1/2 flex items-center justify-center p-1 text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (<EyeOff className="w-5 h-5 text-[#B0B0B0]" />) : (<Eye className="w-5 h-5 text-[#B0B0B0]" />)}


              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4.25 rounded-xl bg-linear-to-r from-[#D4B785] to-[#B08D59] text-white text-base cursor-pointer"
          >
            {loading ? <Loader className="animate-spin" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
