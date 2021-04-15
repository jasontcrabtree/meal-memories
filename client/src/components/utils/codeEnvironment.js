export default function codeEnvironment() {
  const context = process.env.CONTEXT;

  if (context === 'production') {
    // console.log('production');
    return process.env.NEXTAUTH_URL;
  }
  //   console.log('local');
  return 'http://localhost:3000';
}
