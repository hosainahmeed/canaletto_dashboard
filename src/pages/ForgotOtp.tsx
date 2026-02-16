import { Loader } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RedirectByRole } from "../lib/redirects";
import { setUserInLocalStorage } from "../lib/auth";
import { Input } from "../components/ui/input";


function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || { email: "" };

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

//   otp input number 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index:number) => {
     const newCodee = [...code];
     newCodee[index] = e.target.value;
     setCode(newCodee);

     if (e.target.value && index < 6 - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

// otp remove with backspace
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,index: number) => {
 
    if (e.key === "Backspace" && !code[index]) {
      const prevInput = document.getElementById(`input-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    }
  };


// otp submit 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const enterCode = code.join("");

    if (enterCode.length < 6) {
      setError("Please enter the 6 digit code.");
      return;
    }

    try{
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = setUserInLocalStorage(email);
        RedirectByRole(user.role, navigate);
    
    } catch (err: any) {
        setError(err.message || "Something went wrong. Please try again.");
    }
      finally{
         setLoading(false);
      } 
   }
    

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <div className="flex flex-col items-center gap-4 mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333]">
            Check your email
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0]">
            We sent a reset link to {email} enter 6 digit code that mentioned in the email
          </p>
         
        </div>

        <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4">
           <div className="flex justify-between items-center gap-3">
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`input-${index}`}
                type="text"
                value={digit}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                className="w-12 h-12 flex items-center justify-center text-center text-xl font-semibold border-2 border-gray-300 rounded-md text-[#d1d5dc]"
              />
            ))}
          </div>


         {error && (
            <div className="text-sm text-red-500 bg-red-50 p-2 rounded-md mt-2">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-linear-to-r from-[#D4B785] to-[#B08D59] text-white font-medium flex items-center justify-center gap-2 disabled:opacity-70 mt-6" 
          >
            {loading ? (
              <>
                <Loader className="animate-spin w-4 h-4" />
                Verifying Code...
              </>
            ) : (
              "Verify"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;