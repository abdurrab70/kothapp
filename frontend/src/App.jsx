import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  //crete a store
  const { authUser, login, isloggedIn } = useAuthStore();

  console.log("auth user", authUser);
  console.log("isLoggedIn", isloggedIn);

  return (
    <div className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4 overflow-hidden">
      {/* Decorators - Grid & Glow Shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-700 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-700 opacity-20 blur-[100px]" />

      {/* clickable button */}
      <button onClick={login} className="z-10">
        Login button
      </button>

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
