import React from 'react';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const { logOut } = useAuth();

  const router = useRouter();
  return (
    <div className="flex flex-row-reverse mx-auto mr-10  text-gray-600">
      <button
        data-testid="logout-button"
        onClick={() => {
          logOut();
          router.push("/");
        }}
        className="absolute top-5 rounded-md text-slate-700 font-bold  bg-red-200 px-10 py-3 shadow-sm hover:bg-zinc-900 hover:text-red-600 "
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
