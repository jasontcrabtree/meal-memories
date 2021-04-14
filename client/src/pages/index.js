import { getSession, signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  session && console.log(session);

  if (loading) {
    return (
      <main>
        <h1>Loading</h1>
      </main>
    );
  }

  if (!loading)
    return (
      <main>
        <section>
          {session ? (
            <button type="button" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button type="button" onClick={() => signIn()}>
              Sign in
            </button>
          )}
        </section>
        <section>
          <h1>{session ? session.user.email : 'Hello!'}</h1>
        </section>
      </main>
    );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
