import Image from "next/image";
import { useRouter } from "next/router";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { useState} from 'react'


import { useAuth } from 'lib/hooks/useAuth';
import { auth } from 'lib/firebase';
import { ProviderButton } from "ui/buttons";
import github from "./github.png";

function GitHubProvider({ children, ...props }) {
  const user = useAuth();
  const router = useRouter()
  const [isValidUser, setIsValidUser] = useState(null)
  const provider = new GithubAuthProvider()

  // request a signin with pop window pass the provider
  async function requestLogin() {
    setIsValidUser(await signInWithPopup(auth, provider))
  }

  // click event passing to a custom function
  function handleClick () {
    //sign in with github
    requestLogin()
  }

  if (isValidUser) {
    router.push('/todo')
  }

  return (
    <ProviderButton {...props} onClick={ handleClick }>
      <div>
        <Image
          src={github}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default GitHubProvider;
