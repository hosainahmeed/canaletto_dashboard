import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/brandLogo.svg";
import { Input } from "../components/ui/input";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="shadow-md px-18.5 py-20.75 rounded-xl ">
        <div className="flex items-center flex-col justify-center gap-4 mb-4">
          <img src={logo} alt="Brand Logo" />
          <h2 className="text-[32px] font-medium text-[#1A1A1A]">
            Login to Account
          </h2>
          <p className="text-[18px] text-[#666666]">
            Please enter your email and password to continue
          </p>
        </div>

        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-1.5">
            <label className="text-base text-[#666666]">Email address</label>
            <Input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="mb-4 py-3"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-base text-[#666666]">Password</label>

            <div className="relative">
              <Input
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
                {showPassword ? (<EyeOff className="w-5 h-5 text-[#B0B0B0]" /> ) : ( <Eye className="w-5 h-5 text-[#B0B0B0]" /> )}
                  
                
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4.25 rounded-xl bg-linear-to-r from-[#D4B785] to-[#B08D59] text-white text-base cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
